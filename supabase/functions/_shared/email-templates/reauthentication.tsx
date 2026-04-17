/// <reference types="npm:@types/react@18.3.1" />

import * as React from 'npm:react@18.3.1'

import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Preview,
  Text,
} from 'npm:@react-email/components@0.0.22'

interface ReauthenticationEmailProps {
  token: string
}

export const ReauthenticationEmail = ({ token }: ReauthenticationEmailProps) => (
  <Html lang="fr" dir="ltr">
    <Head />
    <Preview>Votre code de vérification PHYTOTECH</Preview>
    <Body style={main}>
      <Container style={container}>
        <Heading style={brand}>PHYTOTECH</Heading>
        <Hr style={hr} />
        <Heading style={h1}>Code de vérification</Heading>
        <Text style={text}>Utilisez le code ci-dessous pour confirmer votre identité :</Text>
        <Text style={codeStyle}>{token}</Text>
        <Text style={muted}>
          Ce code expirera rapidement. Si vous n'êtes pas à l'origine de cette demande, ignorez ce message.
        </Text>
        <Hr style={hr} />
        <Text style={footer}>PHYTOTECH — édité par EmotionsCare SASU</Text>
      </Container>
    </Body>
  </Html>
)

export default ReauthenticationEmail

const main = { backgroundColor: '#ffffff', fontFamily: "'DM Sans', Arial, sans-serif" }
const container = { padding: '32px 28px', maxWidth: '560px' }
const brand = { fontFamily: "'Instrument Serif', Georgia, serif", fontSize: '26px', fontWeight: 'normal' as const, color: '#16a34a', letterSpacing: '0.05em', margin: '0 0 8px' }
const h1 = { fontFamily: "'Instrument Serif', Georgia, serif", fontSize: '24px', fontWeight: 'normal' as const, color: '#14532d', margin: '0 0 20px' }
const text = { fontSize: '15px', color: '#374151', lineHeight: '1.6', margin: '0 0 16px' }
const muted = { fontSize: '13px', color: '#6b7280', lineHeight: '1.5', margin: '24px 0 0' }
const codeStyle = { fontFamily: "'JetBrains Mono', Courier, monospace", fontSize: '28px', fontWeight: 'bold' as const, color: '#16a34a', letterSpacing: '0.2em', textAlign: 'center' as const, background: '#f0fdf4', borderRadius: '12px', padding: '16px', margin: '0 0 24px' }
const hr = { borderColor: '#e5e7eb', margin: '24px 0' }
const footer = { fontSize: '12px', color: '#9ca3af', lineHeight: '1.6', margin: '0' }
