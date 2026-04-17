-- Rate limiting table for anti-spam on public forms
CREATE TABLE IF NOT EXISTS public.rate_limits (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  identifier TEXT NOT NULL,
  action TEXT NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS idx_rate_limits_lookup
  ON public.rate_limits (identifier, action, created_at DESC);

ALTER TABLE public.rate_limits ENABLE ROW LEVEL SECURITY;

-- Only admins can read rate-limit history (audit). Edge functions use service-role and bypass RLS.
CREATE POLICY "Admins can read rate limits"
ON public.rate_limits FOR SELECT
TO authenticated
USING (public.has_role(auth.uid(), 'admin'::app_role));

-- Function to count recent attempts for an identifier+action within a window (minutes)
CREATE OR REPLACE FUNCTION public.check_rate_limit(
  _identifier TEXT,
  _action TEXT,
  _window_minutes INT,
  _max_attempts INT
)
RETURNS BOOLEAN
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  attempts INT;
BEGIN
  SELECT COUNT(*) INTO attempts
  FROM public.rate_limits
  WHERE identifier = _identifier
    AND action = _action
    AND created_at > now() - (_window_minutes || ' minutes')::interval;

  IF attempts >= _max_attempts THEN
    RETURN FALSE;
  END IF;

  INSERT INTO public.rate_limits (identifier, action) VALUES (_identifier, _action);
  RETURN TRUE;
END;
$$;