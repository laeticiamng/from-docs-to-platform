import * as React from 'npm:react@18.3.1'
import {
  Body, Container, Head, Heading, Html, Preview, Section, Text,
} from 'npm:@react-email/components@0.0.22'
import type { TemplateEntry } from './registry.ts'

const SITE_NAME = 'PHYTOTECH'

interface Props {
  name?: string
  subject?: string
}

const ContactAckEmail = ({ name, subject }: Props) => (
  <Html lang="fr" dir="ltr">
    <Head />
    <Preview>Nous avons bien reçu votre message — {SITE_NAME}</Preview>
    <Body style={main}>
      <Container style={container}>
        <Heading style={h1}>
          {name ? `Merci ${name},` : 'Merci pour votre message,'}
        </Heading>
        <Text style={text}>
          Nous avons bien reçu votre demande{subject ? ` concernant « ${subject} »` : ''} et notre équipe vous répondra dans les meilleurs délais (généralement sous 48h ouvrées).
        </Text>
        <Section style={card}>
          <Text style={cardText}>
            En attendant, n'hésitez pas à consulter nos guides DIY et notre Pack Autonomie sur notre site.
          </Text>
        </Section>
        <Text style={footer}>L'équipe {SITE_NAME}</Text>
      </Container>
    </Body>
  </Html>
)

export const template = {
  component: ContactAckEmail,
  subject: 'Nous avons bien reçu votre message',
  displayName: 'Accusé réception contact',
  previewData: { name: 'Marie', subject: 'Question sur le Pack Autonomie' },
} satisfies TemplateEntry

const main = { backgroundColor: '#ffffff', fontFamily: 'DM Sans, Arial, sans-serif' }
const container = { padding: '32px 24px', maxWidth: '560px', margin: '0 auto' }
const h1 = { fontSize: '24px', fontWeight: 600, color: '#0f172a', margin: '0 0 20px', fontFamily: 'Georgia, serif' }
const text = { fontSize: '15px', color: '#475569', lineHeight: '1.6', margin: '0 0 20px' }
const card = { backgroundColor: '#fafdf7', borderLeft: '3px solid #16a34a', padding: '16px 20px', borderRadius: '6px', margin: '24px 0' }
const cardText = { fontSize: '14px', color: '#475569', lineHeight: '1.6', margin: 0 }
const footer = { fontSize: '13px', color: '#94a3b8', margin: '32px 0 0', borderTop: '1px solid #e2e8f0', paddingTop: '20px' }
