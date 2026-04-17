import * as React from 'npm:react@18.3.1'
import {
  Body, Container, Head, Heading, Html, Preview, Section, Text,
} from 'npm:@react-email/components@0.0.22'
import type { TemplateEntry } from './registry.ts'

const SITE_NAME = 'PHYTOTECH'

interface Props {
  name?: string
  pack?: string
}

const PreorderConfirmEmail = ({ name, pack }: Props) => (
  <Html lang="fr" dir="ltr">
    <Head />
    <Preview>Votre précommande {SITE_NAME} est confirmée</Preview>
    <Body style={main}>
      <Container style={container}>
        <Heading style={h1}>
          {name ? `Bienvenue ${name} !` : 'Votre précommande est confirmée !'}
        </Heading>
        <Text style={text}>
          Merci pour votre précommande{pack ? ` du ${pack}` : ''}. Vous faites désormais partie des pionniers de l'autonomie énergétique végétale.
        </Text>
        <Section style={card}>
          <Text style={cardLabel}>Prochaines étapes</Text>
          <Text style={cardText}>
            • Nous vous tiendrons informé(e) de l'avancement de la production<br />
            • Pour chaque pack expédié, un kit est offert à un foyer en Afrique (modèle 1=1)<br />
            • Vous recevrez votre numéro de suivi dès l'expédition
          </Text>
        </Section>
        <Text style={text}>
          Une question ? Répondez simplement à cet email.
        </Text>
        <Text style={footer}>L'équipe {SITE_NAME}</Text>
      </Container>
    </Body>
  </Html>
)

export const template = {
  component: PreorderConfirmEmail,
  subject: 'Votre précommande PHYTOTECH est confirmée',
  displayName: 'Confirmation précommande',
  previewData: { name: 'Marie', pack: 'Pack Autonomie' },
} satisfies TemplateEntry

const main = { backgroundColor: '#ffffff', fontFamily: 'DM Sans, Arial, sans-serif' }
const container = { padding: '32px 24px', maxWidth: '560px', margin: '0 auto' }
const h1 = { fontSize: '24px', fontWeight: 600, color: '#0f172a', margin: '0 0 20px', fontFamily: 'Georgia, serif' }
const text = { fontSize: '15px', color: '#475569', lineHeight: '1.6', margin: '0 0 20px' }
const card = { backgroundColor: '#fafdf7', borderLeft: '3px solid #16a34a', padding: '16px 20px', borderRadius: '6px', margin: '24px 0' }
const cardLabel = { fontSize: '12px', fontWeight: 600, color: '#16a34a', textTransform: 'uppercase' as const, letterSpacing: '0.05em', margin: '0 0 8px' }
const cardText = { fontSize: '14px', color: '#475569', lineHeight: '1.7', margin: 0 }
const footer = { fontSize: '13px', color: '#94a3b8', margin: '32px 0 0', borderTop: '1px solid #e2e8f0', paddingTop: '20px' }
