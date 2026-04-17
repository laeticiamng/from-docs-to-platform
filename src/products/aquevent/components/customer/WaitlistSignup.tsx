import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { motion, AnimatePresence } from 'framer-motion';
import { waitlistSchema, type WaitlistFormData } from '../../utils/validations';
import AquaVentButton from '../ui/AquaVentButton';
import { useAnalytics, AquaVentEvents } from '../../hooks/useAnalytics';

interface WaitlistSignupProps {
  variant?: 'inline' | 'full';
}

export default function WaitlistSignup({ variant = 'full' }: WaitlistSignupProps) {
  const [submitted, setSubmitted] = useState(false);
  const [queuePosition, setQueuePosition] = useState(0);
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
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    const position = Math.floor(Math.random() * 500) + 100;
    setQueuePosition(position);
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
        <div className="text-5xl mb-4">🎉</div>
        <h3 className="text-2xl font-bold mb-2">Bienvenue dans l'aventure !</h3>
        <p className="text-gray-600 mb-4">
          Vous êtes en position <span className="font-bold font-mono text-aquevent-primary">#{queuePosition}</span> sur la liste d'attente.
        </p>
        <p className="text-sm text-gray-400">
          Nous vous contacterons dès que votre AquaVent sera prêt.
        </p>
        <div className="mt-6 p-4 bg-aquevent-primary/5 rounded-xl max-w-md mx-auto">
          <p className="text-sm text-aquevent-primary font-medium">
            Parrainez un ami et remontez de 10 places dans la file !
          </p>
        </div>
      </motion.div>
    );
  }

  return (
    <div className={variant === 'full' ? 'max-w-lg mx-auto' : ''}>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
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
          Déjà 847 inscrits. Pas de spam, désinscription à tout moment.
        </p>
      </form>
    </div>
  );
}
