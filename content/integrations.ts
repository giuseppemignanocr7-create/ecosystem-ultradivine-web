export interface Integration {
  id: string;
  name: string;
  category: string;
  description: string;
}

export const INTEGRATION_CATEGORIES = [
  'ERP',
  'Contabilità',
  'CRM',
  'E-commerce',
  'Pagamenti',
  'Hardware',
  'AI Providers',
  'PA italiana',
  'Comunicazione',
] as const;

export const INTEGRATIONS: Integration[] = [
  // ERP
  { id: 'sap', name: 'SAP', category: 'ERP', description: 'Integrazione bidirezionale dati master e transazionali' },
  { id: 'oracle', name: 'Oracle', category: 'ERP', description: 'Connettore nativo Oracle Database e ERP Cloud' },
  { id: 'teamsystem', name: 'TeamSystem', category: 'ERP', description: 'Sync contabile e magazzino per PMI italiane' },
  { id: 'zucchetti', name: 'Zucchetti', category: 'ERP', description: 'Integrazione paghe, presenze, contabilità' },
  { id: 'danea', name: 'Danea', category: 'ERP', description: 'Import export fatture e anagrafiche' },
  // Contabilità
  { id: 'aruba', name: 'Aruba', category: 'Contabilità', description: 'PEC e fatturazione elettronica' },
  { id: 'fattureincloud', name: 'Fatture in Cloud', category: 'Contabilità', description: 'Sync fatture attive e passive' },
  { id: 'fattureweb', name: 'FattureWeb', category: 'Contabilità', description: 'Integrazione fatturazione elettronica' },
  { id: 'infocert', name: 'InfoCert', category: 'Contabilità', description: 'Firma digitale e conservazione' },
  // CRM
  { id: 'hubspot', name: 'HubSpot', category: 'CRM', description: 'Sync contatti, deal, ticket, marketing' },
  { id: 'salesforce', name: 'Salesforce', category: 'CRM', description: 'Integrazione enterprise CRM completa' },
  { id: 'pipedrive', name: 'Pipedrive', category: 'CRM', description: 'Pipeline vendite sync bidirezionale' },
  // E-commerce
  { id: 'shopify', name: 'Shopify', category: 'E-commerce', description: 'Sync prodotti, ordini, clienti, stock' },
  { id: 'woocommerce', name: 'WooCommerce', category: 'E-commerce', description: 'Plugin nativo per WordPress' },
  { id: 'magento', name: 'Magento', category: 'E-commerce', description: 'Integrazione Adobe Commerce' },
  { id: 'prestashop', name: 'PrestaShop', category: 'E-commerce', description: 'Modulo nativo di sincronizzazione' },
  // Pagamenti
  { id: 'stripe', name: 'Stripe', category: 'Pagamenti', description: 'Pagamenti online e recurring' },
  { id: 'nexi', name: 'Nexi', category: 'Pagamenti', description: 'POS e gateway pagamento italiano' },
  { id: 'satispay', name: 'Satispay', category: 'Pagamenti', description: 'Pagamenti mobile e da smartphone' },
  { id: 'paypal', name: 'PayPal', category: 'Pagamenti', description: 'Checkout internazionale' },
  { id: 'sumup', name: 'SumUp', category: 'Pagamenti', description: 'POS mobile e lettori portatili' },
  // Hardware
  { id: 'sumup-reader', name: 'SumUp Reader', category: 'Hardware', description: 'Lettore carte portatile' },
  { id: 'epson-pos', name: 'Epson POS', category: 'Hardware', description: 'Stampanti fiscali e POS' },
  { id: 'zebra', name: 'Zebra', category: 'Hardware', description: 'Stampanti etichette e barcode' },
  { id: 'ingenico', name: 'Ingenico', category: 'Hardware', description: 'Terminali pagamento POS' },
  // AI Providers
  { id: 'anthropic', name: 'Anthropic', category: 'AI Providers', description: 'Claude per CoreMind' },
  { id: 'openai', name: 'OpenAI', category: 'AI Providers', description: 'GPT per CoreMind Enterprise' },
  { id: 'google', name: 'Google', category: 'AI Providers', description: 'Gemini per modelli multilingua' },
  { id: 'mistral', name: 'Mistral', category: 'AI Providers', description: 'Modelli open europei' },
  { id: 'azure', name: 'Azure OpenAI', category: 'AI Providers', description: 'Modelli Microsoft in cloud privato' },
  // PA italiana
  { id: 'sdi', name: 'SDI', category: 'PA italiana', description: 'Sistema di Interscambio fatture PA' },
  { id: 'pec', name: 'PEC', category: 'PA italiana', description: 'Posta elettronica certificata' },
  { id: 'spid', name: 'SPID', category: 'PA italiana', description: 'Accesso identità digitale' },
  { id: 'cie', name: 'CIE', category: 'PA italiana', description: 'Carta d\'identità elettronica' },
  { id: 'pagopa', name: 'PagoPA', category: 'PA italiana', description: 'Pagamenti verso la PA' },
  // Comunicazione
  { id: 'telegram', name: 'Telegram', category: 'Comunicazione', description: 'Bot e notifiche real-time' },
  { id: 'whatsapp', name: 'WhatsApp Business', category: 'Comunicazione', description: 'Messaggistica clienti' },
  { id: 'slack', name: 'Slack', category: 'Comunicazione', description: 'Notifiche e alert team' },
  { id: 'teams', name: 'Microsoft Teams', category: 'Comunicazione', description: 'Integrazione协作 e meeting' },
];
