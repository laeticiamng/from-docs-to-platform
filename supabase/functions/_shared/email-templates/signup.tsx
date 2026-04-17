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

interface SignupEmailProps {
  siteName: string
  siteUrl: string
  recipient: string
  confirmationUrl: string
}

export const SignupEmail = ({
  siteName,
  siteUrl,
  recipient,
  confirmationUrl,
}: SignupEmailProps) => (
  <Html lang="fr" dir="ltr">
    <Head />
    <Preview>Confirmez votre adresse email pour PHYTOTECH</Preview>
    <Body style={main}>
      <Container style={container}>
        <Heading style={brand}>PHYTOTECH</Heading>
        <Hr style={hr} />
        <Heading style={h1}>Bienvenue, confirmez votre email</Heading>
        <Text style={text}>
          Merci de rejoindre <strong>PHYTOTECH</strong>, l'autonomie énergétique inspirée du vivant.
        </Text>
        <Text style={text}>
          Cliquez sur le bouton ci-dessous pour confirmer votre adresse{' '}
          <Link href={`mailto:${recipient}`} style={link}>{recipient}</Link>{' '}et activer votre compte.
        </Text>
        <Button style={button} href={confirmationUrl}>Activer mon compte</Button>
        <Text style={muted}>
          Si vous n'êtes pas à l'origine de cette inscription, ignorez ce message en toute sécurité.
        </Text>
        <Hr style={hr} />
        <Text style={footer}>
          PHYTOTECH — édité par EmotionsCare SASU<br />
          <Link href={siteUrl} style={footerLink}>{siteName}</Link>
        </Text>
      </Container>
    </Body>
  </Html>
)

export default SignupEmail

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
const footerLink = { color: '#16a34a', textDecoration: 'none' }
