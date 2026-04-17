/// <reference types="npm:@types/react@18.3.1" />

import * as React from 'npm:react@18.3.1'

import {
  Body,
  Button,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Link,
  Preview,
  Text,
} from 'npm:@react-email/components@0.0.22'

interface EmailChangeEmailProps {
  siteName: string
  email: string
  newEmail: string
  confirmationUrl: string
}

export const EmailChangeEmail = ({ siteName, email, newEmail, confirmationUrl }: EmailChangeEmailProps) => (
  <Html lang="fr" dir="ltr">
    <Head />
    <Preview>Confirmez votre changement d'email PHYTOTECH</Preview>
    <Body style={main}>
      <Container style={container}>
        <Heading style={brand}>PHYTOTECH</Heading>
        <Hr style={hr} />
        <Heading style={h1}>Confirmer le changement d'email</Heading>
        <Text style={text}>
          Vous avez demandé à modifier l'adresse email de votre compte {siteName} de{' '}
          <Link href={`mailto:${email}`} style={link}>{email}</Link>{' '}vers{' '}
          <Link href={`mailto:${newEmail}`} style={link}>{newEmail}</Link>.
        </Text>
        <Text style={text}>Cliquez ci-dessous pour confirmer ce changement :</Text>
        <Button style={button} href={confirmationUrl}>Confirmer le changement</Button>
        <Text style={muted}>
          Si vous n'êtes pas à l'origine de cette demande, sécurisez votre compte immédiatement en réinitialisant votre mot de passe.
        </Text>
        <Hr style={hr} />
        <Text style={footer}>PHYTOTECH — édité par EmotionsCare SASU</Text>
      </Container>
    </Body>
  </Html>
)

export default EmailChangeEmail

const main = { backgroundColor: '#ffffff', fontFamily: "'DM Sans', Arial, sans-serif" }
const container = { padding: '32px 28px', maxWidth: '560px' }
const brand = { fontFamily: "'Instrument Serif', Georgia, serif", fontSize: '26px', fontWeight: 'normal' as const, color: '#16a34a', letterSpacing: '0.05em', margin: '0 0 8px' }
const h1 = { fontFamily: "'Instrument Serif', Georgia, serif", fontSize: '24px', fontWeight: 'normal' as const, color: '#14532d', margin: '0 0 20px' }
const text = { fontSize: '15px', color: '#374151', lineHeight: '1.6', margin: '0 0 16px' }
const muted = { fontSize: '13px', color: '#6b7280', lineHeight: '1.5', margin: '24px 0 0' }
const link = { color: '#16a34a', textDecoration: 'underline' }
const button = { backgroundColor: '#16a34a', color: '#ffffff', fontSize: '15px', fontWeight: 'bold' as const, borderRadius: '12px', padding: '14px 28px', textDecoration: 'none', display: 'inline-block', margin: '8px 0 16px' }
const hr = { borderColor: '#e5e7eb', margin: '24px 0' }
const footer = { fontSize: '12px', color: '#9ca3af', lineHeight: '1.6', margin: '0' }
