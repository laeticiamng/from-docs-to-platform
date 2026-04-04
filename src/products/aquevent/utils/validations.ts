import { z } from 'zod';

export const waitlistSchema = z.object({
  email: z.string().email('Adresse email invalide'),
  firstName: z.string().min(2, 'Minimum 2 caractères'),
  lastName: z.string().min(2, 'Minimum 2 caractères'),
  interest: z.enum(['wellness', 'medical', 'investor', 'beta'], {
    required_error: "Veuillez sélectionner votre intérêt",
  }),
  newsletter: z.boolean().default(true),
});

export type WaitlistFormData = z.infer<typeof waitlistSchema>;

export const questionnaireSchema = z.object({
  smokingStatus: z.enum(['current', 'former', 'never'], {
    required_error: "Veuillez indiquer votre statut",
  }),
  dailyCigarettes: z.number().min(0).max(100).optional(),
  primaryGoal: z.enum(['cessation', 'wellness', 'relaxation', 'respiratory'], {
    required_error: "Veuillez sélectionner votre objectif",
  }),
  healthConditions: z.array(z.string()).default([]),
  lifestyle: z.enum(['urban', 'suburban', 'rural']).default('urban'),
  budget: z.enum(['standard', 'premium', 'unlimited']).default('standard'),
  age: z.number().min(18).max(120).optional(),
});

export type QuestionnaireFormData = z.infer<typeof questionnaireSchema>;

export const investorContactSchema = z.object({
  name: z.string().min(2, 'Minimum 2 caractères'),
  email: z.string().email('Adresse email invalide'),
  company: z.string().optional(),
  investmentRange: z.enum(['seed', 'seriesA', 'seriesB'], {
    required_error: "Veuillez sélectionner une fourchette",
  }),
  message: z.string().max(1000).optional(),
});

export type InvestorContactFormData = z.infer<typeof investorContactSchema>;
