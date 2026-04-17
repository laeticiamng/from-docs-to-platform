/// <reference types="npm:@types/react@18.3.1" />
import * as React from 'npm:react@18.3.1'

export interface TemplateEntry {
  component: React.ComponentType<any>
  subject: string | ((data: Record<string, any>) => string)
  to?: string
  displayName?: string
  previewData?: Record<string, any>
}

import { template as contactAck } from './contact-ack.tsx'
import { template as preorderConfirm } from './preorder-confirm.tsx'
import { template as adminAlert } from './admin-alert.tsx'

export const TEMPLATES: Record<string, TemplateEntry> = {
  'contact-ack': contactAck,
  'preorder-confirm': preorderConfirm,
  'admin-alert': adminAlert,
}
