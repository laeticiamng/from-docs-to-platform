import { useState, forwardRef } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { motion } from 'framer-motion';
import { waitlistSchema, type WaitlistFormData } from '../../utils/validations';
import AquaVentButton from '../ui/AquaVentButton';
import { useAnalytics, AquaVentEvents } from '../../hooks/useAnalytics';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';

interface WaitlistSignupProps {
  variant?: 'inline' | 'full';
}

const WaitlistSignup = forwardRef<HTMLDivElement, WaitlistSignupProps>(({ variant = 'full' }, _ref) => {
  const [submitted, setSubmitted] = useState(false);
  const [website, setWebsite] = useState(""); // honeypot anti-bot
  const { trackEvent } = useAnalytics();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<WaitlistFormData>({
    resolver: zodResolver(waitlistSchema),
    defaultValues: { newsletter: true },
  });

  const onSubmit = async (data: WaitlistFormData) => {
    const { data: res, error } = await supabase.functions.invoke('submit-preorder', {
      body: {
        name: `${data.firstName} ${data.lastName}`.trim().slice(0, 100),
        email: data.email.trim().slice(0, 255),
        pack: `aquevent-${data.interest || 'autre'}`,
        message: data.newsletter ? 'Newsletter: oui' : 'Newsletter: non',
        website,
      },
    });

    if (error || (res as { error?: string })?.error) {
      const msg = (res as { error?: string })?.error ?? "Erreur lors de l'inscription. Réessayez.";
      toast.error(msg);
      return;
    }

    setSubmitted(true);
    trackEvent(AquaVentEvents.WAITLIST_JOIN, {
      interest: data.interest,
      newsletter: data.newsletter,
    });
  };

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center py-12 px-6"
      >
        <h3 className="text-2xl font-bold mb-2">Inscription enregistrée</h3>
        <p className="text-gray-600 mb-4">
          Merci ! Votre demande a bien été reçue. Notre équipe vous recontactera par email.
        </p>
        <p className="text-sm text-gray-400">
          Aucun paiement requis pour l'instant.
        </p>
      </motion.div>
    );
  }

  return (
    <div className={variant === 'full' ? 'max-w-lg mx-auto' : ''}>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* Honeypot anti-bot : ne doit jamais être rempli par un humain */}
        <div aria-hidden="true" style={{ position: "absolute", left: "-10000px", width: "1px", height: "1px", overflow: "hidden" }}>
          <label htmlFor="aqv-website">Website (laissez vide)</label>
          <input id="aqv-website" type="text" name="website" tabIndex={-1} autoComplete="off" value={website} onChange={(e) => setWebsite(e.target.value)} />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <input
              {...register('firstName')}
              placeholder="Prénom"
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-aquevent-primary focus:ring-2 focus:ring-aquevent-primary/20 outline-none transition-all"
            />
            {errors.firstName && (
              <p className="text-xs text-red-500 mt-1">{errors.firstName.message}</p>
            )}
          </div>
          <div>
            <input
              {...register('lastName')}
              placeholder="Nom"
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-aquevent-primary focus:ring-2 focus:ring-aquevent-primary/20 outline-none transition-all"
            />
            {errors.lastName && (
              <p className="text-xs text-red-500 mt-1">{errors.lastName.message}</p>
            )}
          </div>
        </div>

        <div>
          <input
            {...register('email')}
            type="email"
            placeholder="votre@email.com"
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-aquevent-primary focus:ring-2 focus:ring-aquevent-primary/20 outline-none transition-all"
          />
          {errors.email && (
            <p className="text-xs text-red-500 mt-1">{errors.email.message}</p>
          )}
        </div>

        <div>
          <select
            {...register('interest')}
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-aquevent-primary focus:ring-2 focus:ring-aquevent-primary/20 outline-none transition-all text-gray-600"
          >
            <option value="">Votre intérêt principal</option>
            <option value="wellness">Bien-être & Relaxation</option>
            <option value="medical">Sevrage Tabagique</option>
            <option value="investor">Investissement</option>
            <option value="beta">Beta Testeur</option>
          </select>
          {errors.interest && (
            <p className="text-xs text-red-500 mt-1">{errors.interest.message}</p>
          )}
        </div>

        <label className="flex items-center gap-2 cursor-pointer">
          <input
            {...register('newsletter')}
            type="checkbox"
            className="w-4 h-4 rounded border-gray-300 text-aquevent-primary focus:ring-aquevent-primary"
          />
          <span className="text-sm text-gray-600">
            Recevoir les actualités et offres exclusives
          </span>
        </label>

        <AquaVentButton
          type="submit"
          variant="premium"
          size="lg"
          className="w-full"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Inscription...' : "Rejoindre la liste d'attente"}
        </AquaVentButton>

        <p className="text-xs text-center text-gray-400">
          Pas de spam, désinscription à tout moment.
        </p>
      </form>
    </div>
  );
});

WaitlistSignup.displayName = "WaitlistSignup";

export default WaitlistSignup;
