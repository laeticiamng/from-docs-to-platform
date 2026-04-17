import * as React from 'npm:react@18.3.1'
import {
  Body, Container, Head, Heading, Html, Preview, Section, Text,
} from 'npm:@react-email/components@0.0.22'
import type { TemplateEntry } from './registry.ts'

interface Props {
  alertType?: string
  fromName?: string
  fromEmail?: string
  details?: string
}

const AdminAlertEmail = ({ alertType, fromName, fromEmail, details }: Props) => (
  <Html lang="fr" dir="ltr">
    <Head />
    <Preview>Nouvelle activité sur PHYTOTECH — {alertType ?? 'notification'}</Preview>
    <Body style={main}>
      <Container style={container}>
        <Heading style={h1}>
          {alertType ?? 'Nouvelle activité'}
        </Heading>
        <Section style={card}>
          {fromName && <Text style={row}><strong>De :</strong> {fromName}</Text>}
          {fromEmail && <Text style={row}><strong>Email :</strong> {fromEmail}</Text>}
          {details && <Text style={row}><strong>Détails :</strong> {details}</Text>}
        </Section>
        <Text style={text}>
          Connectez-vous au tableau de bord admin pour traiter cette demande.
        </Text>
        <Text style={footer}>Notification automatique — PHYTOTECH</Text>
      </Container>
    </Body>
  </Html>
)

export const template = {
  component: AdminAlertEmail,
  subject: (data: Record<string, any>) => `[PHYTOTECH] ${data.alertType ?? 'Nouvelle activité'}`,
  displayName: 'Alerte admin',
  previewData: {
    alertType: 'Nouvelle précommande',
    fromName: 'Marie Dupont',
    fromEmail: 'marie@example.com',
    details: 'Pack Autonomie',
  },
} satisfies TemplateEntry

const main = { backgroundColor: '#ffffff', fontFamily: 'DM Sans, Arial, sans-serif' }
const container = { padding: '32px 24px', maxWidth: '560px', margin: '0 auto' }
const h1 = { fontSize: '22px', fontWeight: 600, color: '#0f172a', margin: '0 0 20px', fontFamily: 'Georgia, serif' }
const text = { fontSize: '14px', color: '#475569', lineHeight: '1.6', margin: '0 0 16px' }
const card = { backgroundColor: '#f8fafc', border: '1px solid #e2e8f0', padding: '20px', borderRadius: '6px', margin: '20px 0' }
const row = { fontSize: '14px', color: '#334155', lineHeight: '1.6', margin: '0 0 8px' }
const footer = { fontSize: '12px', color: '#94a3b8', margin: '32px 0 0', borderTop: '1px solid #e2e8f0', paddingTop: '20px' }
