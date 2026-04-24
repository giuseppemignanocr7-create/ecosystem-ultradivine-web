export interface Suite {
  id: string;
  number: string;
  name: string;
  tag: string;
  description: string;
  icon: string;
  features: string[];
  coremindUseCases: string[];
  painPoints: { pain: string; solution: string }[];
  modules: string[];
  integrations: string[];
  pricingNote: string;
}

export const SUITES: Suite[] = [
  {
    id: 'buildsuite',
    number: '01',
    name: 'BuildSuite',
    tag: 'EDILIZIA · COSTRUZIONI',
    description:
      'Cantieri, SAL, computi metrici, sicurezza, BIM, cronoprogramma. Direzione lavori assistita da AI. Integrazione ACCA e CerTus.',
    icon: 'building-helmet',
    features: [
      'Computi metrici e preventivazione AI-assisted',
      'SAL automatici con integrazione contabile',
      'Gestione sicurezza e DPI',
      'BIM viewer integrato',
      'Cronoprogramma Gantt interattivo',
      'Direzione lavori con check-list smart',
    ],
    coremindUseCases: [
      'Genera un SAL di fine mese per il cantiere di Via Roma',
      'Quali cantieri hanno margine sotto il 10% e scadenza entro 60 giorni?',
      'Crea un ordine fornitore con i materiali mancanti dal magazzino',
      'Verifica la conformità HACCP del cantiere mensa',
    ],
    painPoints: [
      {
        pain: 'Dati sparsi tra Excel, WhatsApp e fogli cartacei',
        solution: 'Tutto in un unico database: cantieri, fornitori, personale, contabilità.',
      },
      {
        pain: 'SAL e computi richiedono giorni di lavoro',
        solution: 'CoreMind genera SAL, computi e consuntivi in minuti dai dati di cantiere.',
      },
      {
        pain: 'Sicurezza e conformità sono un incubo burocratico',
        solution: 'Check-list smart, alert automatici, documenti precompilati.',
      },
    ],
    modules: [
      'Anagrafica cantieri e committenti',
      'Computi metrici e preventivazione',
      'SAL e contabilità di cantiere',
      'Sicurezza (DUVRI, POS, PSC)',
      'Magazzino materiali',
      'Subappalti e fornitori',
      'Cronoprogramma e Gantt',
      'BIM e documentazione tecnica',
    ],
    integrations: ['ACCA Software', 'CerTus', 'TeamSystem', 'Zucchetti', 'BIM 360'],
    pricingNote: 'da €79/mese per utente cantiere',
  },
  {
    id: 'legalmind',
    number: '02',
    name: 'LegalMind',
    tag: 'STUDI LEGALI · AVVOCATURA',
    description:
      'Fascicoli, scadenzario PCT, parcellazione, PEC AI, analisi documentale semantica. 40+ tabelle dedicate al processo civile.',
    icon: 'scale-chip',
    features: [
      'Fascicoli digitali con timeline processuale',
      'Scadenzario PCT automatico con alert',
      'Parcellazione AI-assisted',
      'PEC integrate con bozze automatiche',
      'Analisi semantica documentale',
      'Ricerca giurisprudenzale integrata',
    ],
    coremindUseCases: [
      'Genera una memoria difensiva dal fascicolo 2024/183',
      'Quale è lo scadenzario della prossima settimana?',
      'Analizza il contratto allegato e trova le clausole a rischio',
      'Prepara la parcella del contenzioso Bianchi vs Rossi',
    ],
    painPoints: [
      {
        pain: 'I termini processuali scadono senza che nessuno se ne accorga',
        solution: 'Scadenzario PCT con alert multi-canale (PEC, Telegram, email).',
      },
      {
        pain: 'La parcellazione è lunga e spesso imprecisa',
        solution: 'CoreMind calcola il dovuto dai fascicoli, atti e tariffe forensi.',
      },
      {
        pain: 'Troppi documenti da leggere, poco tempo',
        solution: 'Analisi semantica: riassunti, clausole a rischio, confronto giurisprudenza.',
      },
    ],
    modules: [
      'Anagrafica clienti e controparti',
      'Fascicoli e timeline processuale',
      'Scadenzario PCT e udienze',
      'Parcellazione e tariffe forensi',
      'PEC e comunicazioni',
      'Documenti e contratti',
      'Ricerca giurisprudenzale',
      'Contabilità dello studio',
    ],
    integrations: ['PEC Aruba', 'InfoCert', 'Fatture in Cloud', 'TeamSystem', 'JurisData'],
    pricingNote: 'da €99/mese per utente professionista',
  },
  {
    id: 'dentalsuite',
    number: '03',
    name: 'DentalSuite',
    tag: 'ODONTOIATRIA',
    description:
      'Cartelle cliniche digitali, piano terapeutico, agenda smart, fatturazione elettronica, recall automatico pazienti.',
    icon: 'tooth-chart',
    features: [
      'Cartella clinica digitale con odontogramma',
      'Piano terapeutico e preventivi',
      'Agenda smart con ottimizzazione AI',
      'Fatturazione elettronica e SDI',
      'Recall automatico via SMS/email',
      'Analytics fatturato per trattamento',
    ],
    coremindUseCases: [
      'Pianifica un recall per i pazienti in scadenza profilassi',
      'Qual è il fatturato per tipo di trattamento nel Q3?',
      'Genera un preventivo per corona zirconio paziente Rossi',
      'Agenda libera per implantologia la prossima settimana',
    ],
    painPoints: [
      {
        pain: 'Le cartelle cliniche cartacee sono ingestibili',
        solution: 'Cartella digitale con odontogramma interattivo, radiografie, anamnesi.',
      },
      {
        pain: 'Il recall manuale non funziona mai',
        solution: 'Recall automatici con messaggi personalizzati per trattamento e scadenza.',
      },
      {
        pain: 'Agenda sottoutilizzata o sovraffollata',
        solution: 'Ottimizzazione AI degli slot in base a durata trattamento, urgenze, preferenze.',
      },
    ],
    modules: [
      'Anagrafica pazienti',
      'Cartella clinica e odontogramma',
      'Piano terapeutico',
      'Agenda e appuntamenti',
      'Fatturazione elettronica',
      'Recall e comunicazioni',
      'Magazzino materiali',
      'Analytics studio',
    ],
    integrations: ['Fatture in Cloud', 'Aruba', 'InfoCert', 'WhatsApp Business'],
    pricingNote: 'da €69/mese per postazione',
  },
  {
    id: 'foodsuite',
    number: '04',
    name: 'FoodSuite',
    tag: 'HORECA · RISTORAZIONE',
    description:
      'Ordini fornitori, menu engineering, HACCP digitale, food cost, inventory, analytics sala e cucina. Integrazione POS.',
    icon: 'fork-cloche',
    features: [
      'Menu engineering con margini per piatto',
      'Ordini fornitori automatici da par stock',
      'HACCP digitale con checklist e temperature IoT',
      'Food cost e ricettario con scalabilità',
      'Inventory e magazzino cucina',
      'Analytics sala (coperti, ASP, tavoli/giorno)',
    ],
    coremindUseCases: [
      'Quali piatti hanno margine sotto il 25%? Suggerisci alternative',
      'Crea un ordine fornitori per la prossima settimana dalla previsione coperti',
      'HACCP oggi: checklist frigo 2, temperatura registrazione',
      'Food cost del nuovo menu degustazione con 7 portate',
    ],
    painPoints: [
      {
        pain: 'Non si sa mai quanto costa realmente un piatto',
        solution: 'Food cost automatico da ricettario, con aggiornamento prezzi fornitori.',
      },
      {
        pain: 'HACCP è cartacea, lunga e a rischio ispezione',
        solution: 'HACCP digitale con checklist, registri temperature IoT, alert automatici.',
      },
      {
        pain: 'Ordini fatti a occhio, sprechi e rotture di stock',
        solution: 'Par stock intelligente, previsione da analytics, ordini one-click.',
      },
    ],
    modules: [
      'Ricettario e food cost',
      'Menu engineering',
      'Ordini fornitori e magazzino',
      'HACCP digitale',
      'POS e conto sala',
      'Analytics ristorante',
      'Fatturazione',
      'Prenotazioni',
    ],
    integrations: ['POS custom', 'Deliveroo', 'UberEats', 'JustEat', 'Stampa fiscale Epson'],
    pricingNote: 'da €89/mese per ristorante',
  },
  {
    id: 'okchef',
    number: '05',
    name: 'OK Chef',
    tag: 'HORECA · APPROVVIGIONAMENTO',
    description:
      'Catalogo 80+ fornitori, ordini smart con AI, gestione magazzino, analytics acquisti, integrazione contabile automatica.',
    icon: 'chef-hat',
    features: [
      'Catalogo fornitori con prezzi e disponibilità',
      'Ordini smart suggeriti da AI',
      'Confronto prezzi fornitori',
      'Magazzino centrale e per punto vendita',
      'Analytics acquisti e trend',
      'Integrazione contabile automatica',
    ],
    coremindUseCases: [
      'Trova il miglior prezzo per fior di latte tra i fornitori disponibili',
      'Suggerisci un ordine per la settimana prossima basato sullo storico',
      'Quali fornitori hanno aumentato i prezzi nel ultimo trimestre?',
      'Genera una bolla di consegna dal DDT ricevuto',
    ],
    painPoints: [
      {
        pain: 'Troppi fornitori, prezzi sparsi, nessun confronto',
        solution: 'Catalogo unificato con confronto prezzi, disponibilità e storico.',
      },
      {
        pain: 'Ordini fatti a mano, errori e dimenticanze',
        solution: 'AI suggerisce ordini da par stock, storico, stagionalità e previsioni.',
      },
      {
        pain: 'Contabilità acquisti è un lavoro da settimane',
        solution: 'Integrazione contabile automatica: DDT → bolla → fattura → contabilità.',
      },
    ],
    modules: [
      'Catalogo fornitori',
      'Ordini smart',
      'Confronto prezzi',
      'Magazzino',
      'DDT e bolle',
      'Contabilità acquisti',
      'Analytics',
      'Integrazione FoodSuite',
    ],
    integrations: ['Fatture in Cloud', 'TeamSystem', 'Aruba', '80+ fornitori HORECA'],
    pricingNote: 'da €59/mese per punto acquisto',
  },
  {
    id: 'fishsuite',
    number: '06',
    name: 'FishSuite',
    tag: 'ITTICO · PESCA',
    description:
      'Tracciabilità CE, catena del freddo IoT, gestione flotta, HACCP mare, analytics filiera, royalty model integrato.',
    icon: 'fish-chain',
    features: [
      'Tracciabilità CE completa dal mare al banco',
      'Catena del freddo IoT con alert temperature',
      'Gestione flotta peschereccia',
      'HACCP specifica per ittico',
      'Analytics filiera e rendimento',
      'Royalty model integrato',
    ],
    coremindUseCases: [
      'Tracciabilità lotto 2024-08-A: da quale barca e quando?',
      'Temperatura cella 3 nelle ultime 24 ore e anomalie',
      'Genera il registro HACCP settimanale per l\'ittico',
      'Royalty dovute al peschereccio "Mare Azzurro" ad agosto',
    ],
    painPoints: [
      {
        pain: 'Tracciabilità CE è complessa e soggetta a sanzioni',
        solution: 'Tracciabilità digitale end-to-end: lotto, barca, data cattura, temperatura, vendita.',
      },
      {
        pain: 'Catena del freddo non monitorata in tempo reale',
        solution: 'Sensori IoT con alert automatici su anomalie temperature.',
      },
      {
        pain: 'Royalty e contabilità filiera sono manuali',
        solution: 'Royalty automatiche da pesce sbarcato, prezzo mercato, accordi contrattuali.',
      },
    ],
    modules: [
      'Tracciabilità CE',
      'Catena del freddo IoT',
      'Flotta peschereccia',
      'HACCP ittico',
      'Magazzino e lotti',
      'Vendita e banco',
      'Royalty e contabilità',
      'Analytics filiera',
    ],
    integrations: ['IoT sensors', 'Market price APIs', 'Fatture in Cloud'],
    pricingNote: 'da €99/mese per filiera',
  },
  {
    id: 'retailsuite',
    number: '07',
    name: 'RetailSuite',
    tag: 'RETAIL · E-COMMERCE',
    description:
      'POS, e-commerce, magazzino, CRM, loyalty, analytics omnichannel. Gestione multi-store unificata, sincronizzazione real-time.',
    icon: 'cart',
    features: [
      'POS in-store e mobile',
      'E-commerce sincronizzato con magazzino',
      'CRM e loyalty program',
      'Magazzino multi-store',
      'Analytics omnichannel',
      'Pricing dinamico e promozioni',
    ],
    coremindUseCases: [
      'Quali prodotti hanno rotazione lenta nel negozio di Roma?',
      'Genera una promozione week-end per i prodotti in sovraccarico',
      'Fatturato online vs in-store nel Q3 per categoria',
      'Alert quando il magazzino centrale scende sotto le 10 unità',
    ],
    painPoints: [
      {
        pain: 'Online e negozio fisico non parlano mai',
        solution: 'Sincronizzazione real-time: stock, ordini, clienti, promozioni.',
      },
      {
        pain: 'Non si capisce cosa compra chi e dove',
        solution: 'CRM omnichannel con profilo unico cliente online + in-store.',
      },
      {
        pain: 'Magazzino multi-store è un caos',
        solution: 'Vista unificata, trasferimenti automatici, riordini suggeriti da AI.',
      },
    ],
    modules: [
      'POS',
      'E-commerce',
      'Magazzino multi-store',
      'CRM e loyalty',
      'Ordini e spedizioni',
      'Pricing e promozioni',
      'Fatturazione',
      'Analytics omnichannel',
    ],
    integrations: ['Shopify', 'WooCommerce', 'PrestaShop', 'Stripe', 'Nexi', 'SumUp'],
    pricingNote: 'da €79/mese per punto vendita',
  },
  {
    id: 'rentsuite',
    number: '08',
    name: 'RentSuite',
    tag: 'IMMOBILIARE · PROPERTY MGMT',
    description:
      'Property management, locazioni, condomini, manutenzione predittiva, portale inquilini, contabilità immobiliare.',
    icon: 'house-key',
    features: [
      'Property management con dashboard per immobile',
      'Contratti locazione e scadenzario',
      'Amministrazione condomini',
      'Manutenzione predittiva AI',
      'Portale inquilini e condomini',
      'Contabilità immobiliare e F24',
    ],
    coremindUseCases: [
      'Genera il rendiconto condominiale 2024 per il condominio Roma 15',
      'Quali contratti scadono nei prossimi 90 giorni?',
      'Manutenzione predittiva: allarmi caldaia entro 30 giorni',
      'F24 IMU e TARI per tutti gli immobili del portafoglio',
    ],
    painPoints: [
      {
        pain: 'Amministrazione condominiale richiede giorni di lavoro',
        solution: 'Rendiconti automatici, ripartizioni, F24, comunicazioni assemblea.',
      },
      {
        pain: 'Manutenzione è sempre reattiva, mai preventiva',
        solution: 'Manutenzione predittiva da dati sensori, contratti, storico guasti.',
      },
      {
        pain: 'Inquilini e condomini chiamano per tutto',
        solution: 'Portale self-service: pagamenti, ticket manutenzione, documenti, comunicazioni.',
      },
    ],
    modules: [
      'Anagrafica immobili e unità',
      'Locazioni e contratti',
      'Condomini e assemblee',
      'Manutenzione e ticket',
      'Portale inquilini',
      'Contabilità immobiliare',
      'F24 e tributi',
      'Analytics portafoglio',
    ],
    integrations: ['PagoPA', 'SDI', 'Fatture in Cloud', 'IoT sensors'],
    pricingNote: 'da €69/mese per immobile gestito',
  },
  {
    id: 'techsuite',
    number: '09',
    name: 'TechSuite',
    tag: 'IT · SOFTWARE HOUSE',
    description:
      'Project management IT, ticketing, time tracking, code review, sprint planning, DevOps dashboard, CI/CD integrato.',
    icon: 'chip-arrow',
    features: [
      'Project management agile (Scrum, Kanban)',
      'Ticketing e bug tracking',
      'Time tracking e timesheet',
      'Code review e quality gates',
      'Sprint planning con velocity',
      'DevOps dashboard e CI/CD',
    ],
    coremindUseCases: [
      'Sprint planning: quali ticket sono pronti per lo sprint 24?',
      'Code review del modulo auth: trova vulnerabilità e suggerisci fix',
      'Timesheet del team backend nel mese di settembre',
      'Genera il changelog dalla lista merge request di ottobre',
    ],
    painPoints: [
      {
        pain: 'Project management è frammentato tra Jira, Slack, GitHub',
        solution: 'Un unico ambiente: ticket, code, time, deploy, comunicazioni.',
      },
      {
        pain: 'Code review richiede troppo tempo senior',
        solution: 'AI-assisted code review: vulnerabilità, best practice, refactoring.',
      },
      {
        pain: 'Non si sa mai quanto tempo costa davvero un progetto',
        solution: 'Time tracking integrato con stime, velocity, budget, alert.',
      },
    ],
    modules: [
      'Progetti e sprint',
      'Ticketing',
      'Time tracking',
      'Code review AI',
      'Repository e CI/CD',
      'DevOps dashboard',
      'Team e skill matrix',
      'Analytics progetti',
    ],
    integrations: ['GitHub', 'GitLab', 'Bitbucket', 'Jira', 'Slack', 'Docker', 'Kubernetes'],
    pricingNote: 'da €59/mese per sviluppatore',
  },
  {
    id: 'consulente-virtuale',
    number: '10',
    name: 'Consulente Virtuale',
    tag: 'CONSULENZA LAVORO/FISCO',
    description:
      'Paghe, contributi, dichiarazioni, pratiche CdL e commercialisti. AI normativa aggiornata in tempo reale.',
    icon: 'folder-ai',
    features: [
      'Paghe e contributi',
      'Dichiarazioni fiscali (730, UNICO, ISEE)',
      'Pratiche CdL e patronati',
      'AI normativa aggiornata',
      'Scadenzario fiscale e contributivo',
      'Fatturazione e contabilità studio',
    ],
    coremindUseCases: [
      'Calcola la busta paga di Mario Rossi con straordinari e maternità',
      'Quali scadenze fiscali ci sono a novembre 2024?',
      'Genera una pratica ISEE per nucleo familiare Bianchi',
      'Analizza l\'ultima circolare INPS e spiegami le novità',
    ],
    painPoints: [
      {
        pain: 'La normativa cambia continuamente, difficile stare al passo',
        solution: 'AI normativa: circolari, decreti, giurisprudenza aggiornati e interpretati.',
      },
      {
        pain: 'Pratiche CdL e fiscali richiedono ore di compilazione',
        solution: 'Precompilazione intelligente da dati anagrafici, redditi, storico.',
      },
      {
        pain: 'Errori in paghe e contributi sono costosi',
        solution: 'Validazione automatica, alert anomalie, controlli incrociati INPS/Agenzia Entrate.',
      },
    ],
    modules: [
      'Anagrafica dipendenti e clienti',
      'Paghe e contributi',
      'Dichiarazioni fiscali',
      'Pratiche CdL',
      'Normativa AI',
      'Scadenzario fiscale',
      'Fatturazione studio',
      'Contabilità',
    ],
    integrations: ['INPS', 'Agenzia Entrate', 'Fatture in Cloud', 'SDI', 'InfoCert'],
    pricingNote: 'da €89/mese per consulente',
  },
  {
    id: 'civiccore',
    number: '11',
    name: 'CivicCore',
    tag: 'PA · CAF · PATRONATI',
    description:
      'Pratiche ISEE, 730, successioni, RED. Sportello digitale cittadino-ente, gestione flussi CAF e patronati.',
    icon: 'shield-citizen',
    features: [
      'Pratiche ISEE, 730, successioni, RED',
      'Sportello digitale cittadino',
      'Gestione flussi CAF e patronati',
      'Scadenzario pratiche PA',
      'Comunicazioni con enti',
      'Analytics servizi e tempi',
    ],
    coremindUseCases: [
      'Genera una pratica ISEE per nucleo con 2 figli e reddito 35k€',
      'Quali pratiche sono in attesa da più di 20 giorni?',
      'Prepara il 730 precompilato per il cliente Verdi',
      'Stato pratica RED numero 2024-RED-1837 presso INPS',
    ],
    painPoints: [
      {
        pain: 'Le pratiche PA richiedono troppi passaggi manuali',
        solution: 'Workflow digitale: raccolta documenti, precompilazione, invio, tracking.',
      },
      {
        pain: 'Cittadini chiamano continuamente per lo stato pratiche',
        solution: 'Sportello digitale: stato pratiche in tempo reale, alert, documenti.',
      },
      {
        pain: 'CAF e patronati gestiscono migliaia di pratiche su Excel',
        solution: 'Gestione centralizzata con filtri, ricerca, scadenzario, report.',
      },
    ],
    modules: [
      'Anagrafica cittadini',
      'Pratiche ISEE',
      'Pratiche 730',
      'Successioni',
      'RED e sostegno',
      'Sportello digitale',
      'Comunicazioni enti',
      'Analytics',
    ],
    integrations: ['INPS', 'Agenzia Entrate', 'SPID', 'CIE', 'PagoPA', 'SDI'],
    pricingNote: 'da €49/mese per operatore',
  },
  {
    id: 'petverse',
    number: '12',
    name: 'PetVerse',
    tag: 'VETERINARIA · PETCARE',
    description:
      'Cartelle cliniche veterinarie, agenda, vaccini, anagrafe canina, e-commerce petshop, telemedicina.',
    icon: 'paw',
    features: [
      'Cartella clinica veterinaria',
      'Agenda e appuntamenti',
      'Vaccini e scadenzario',
      'Anagrafe canina',
      'E-commerce petshop',
      'Telemedicina',
    ],
    coremindUseCases: [
      'Quali pazienti hanno vaccino in scadenza nei prossimi 30 giorni?',
      'Genera una ricetta veterinaria per Fido, cane 5 anni, 25kg',
      'Fatturato e-commerce vs ambulatorio nel ultimo trimestre',
      'Agenda libera per chirurgia la prossima settimana',
    ],
    painPoints: [
      {
        pain: 'Cartelle cliniche veterinarie sono disorganizzate',
        solution: 'Cartella digitale con storia clinica, vaccini, esami, immagini.',
      },
      {
        pain: 'Vaccini e scadenze sanitarie sfuggono',
        solution: 'Scadenzario vaccini con alert automatici via SMS/email.',
      },
      {
        pain: 'E-commerce petshop è gestito separatamente',
        solution: 'Integrazione ambulatorio + e-commerce: clienti, ordini, fatturazione unificata.',
      },
    ],
    modules: [
      'Anagrafica pazienti e proprietari',
      'Cartella clinica veterinaria',
      'Agenda e appuntamenti',
      'Vaccini e scadenzario',
      'Anagrafe canina',
      'E-commerce petshop',
      'Telemedicina',
      'Fatturazione',
    ],
    integrations: ['Fatture in Cloud', 'SDI', 'WhatsApp Business', 'Stripe'],
    pricingNote: 'da €59/mese per veterinario',
  },
  {
    id: 'archon-os',
    number: '13',
    name: 'Archon OS',
    tag: 'BUSINESS OS · MULTI-ENTITY',
    description:
      'Il layer di orchestrazione per aziende multi-società. Dashboard esecutiva, consolidato, governance centralizzata.',
    icon: 'orchestra-nodes',
    features: [
      'Dashboard esecutiva multi-società',
      'Consolidato contabile e di budget',
      'Governance e policy centralizzate',
      'Intercompany e reconciliazione',
      'Reportistica gruppo',
      'Accessi e permessi per entità',
    ],
    coremindUseCases: [
      'Consolidato gruppo: fatturato, margine, EBITDA per le 5 società',
      'Genera un report intercompany per il mese di settembre',
      'Policy accessi: chi può vedere i dati della società Beta?',
      'Alert quando una società del gruppo supera il budget trimestrale',
    ],
    painPoints: [
      {
        pain: 'Aziende multi-società non hanno visibilità di gruppo',
        solution: 'Dashboard esecutiva con consolidato, KPI, alert, drill-down per società.',
      },
      {
        pain: 'Intercompany e reconciliazione sono manuali e lenti',
        solution: 'Riconciliazione automatica intercompany con matching e alert.',
      },
      {
        pain: 'Governance e policy sono disomogenee',
        solution: 'Policy centralizzate, accessi ruolo-based, audit log completo.',
      },
    ],
    modules: [
      'Dashboard esecutiva',
      'Consolidato contabile',
      'Consolidato budget',
      'Intercompany',
      'Governance e policy',
      'Accessi e permessi',
      'Reportistica gruppo',
      'Audit log',
    ],
    integrations: ['Tutte le suite EUD', 'TeamSystem', 'Zucchetti', 'SAP'],
    pricingNote: 'da €149/mese per gruppo',
  },
];
