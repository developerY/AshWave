export interface FlywheelStage {
  id: string;
  index: string;
  title: string;
  summary: string;
  detail: string;
  outcome: string;
}

export interface CharterStep {
  step: number;
  title: string;
  durationTraditional: string;
  durationLlm: string;
  summary: string;
  checklist: string[];
  llmShare: number;
}

export interface PatentClaim {
  number: number;
  category: 'method' | 'system' | 'medium';
  typeLabel: string;
  title: string;
  text: string;
}

export interface PatentFigure {
  id: string;
  title: string;
  caption: string;
  components: string[];
}

export interface BankingUseCase {
  id: string;
  index: string;
  title: string;
  institution: string;
  metric: string;
  metricContext: string;
  description: string;
}

export interface GovernancePillar {
  title: string;
  authority: string;
  description: string;
}

export const ASH_IMAGES = {
  heroCoastal: '/src/assets/images/hero_coastal_fintech_1794856562352.jpg',
  kineticCard: '/src/assets/images/kinetic_card_ocean_1794856563918.jpg',
  steelChainWave: '/src/assets/images/steelchain_wave_sculpture_1794856567723.jpg',
  seaweedApp: '/src/assets/images/seaweed_coastal_app_1794856566950.jpg',
} as const;

export const EXTERNAL_LINKS = {
  kineticPaper: 'https://zoewave.medium.com/ashwave-kinetic-financial-network-851770e0073b',
  zoeWave: 'https://www.zoewave.com',
  ashWaveOrigin: 'https://www.ashwave.com',
} as const;

export const HERO_KPIS = [
  {
    label: 'Proof of Useful Work',
    value: '98%+',
    context: 'Compute redirected to zkML underwriting',
  },
  {
    label: 'Block Verification',
    value: '< 5 ms',
    context: 'Non-interactive zk-SNARK peer validation',
  },
  {
    label: 'Charter Legal Arbitrage',
    value: '~$165K',
    context: 'LLM-assisted vs. ~$850K traditional counsel',
  },
  {
    label: 'SteelChain Layer-1',
    value: 'Rust',
    context: 'Built from scratch with Parity Substrate',
  },
] as const;

export const FLYWHEEL_STAGES: FlywheelStage[] = [
  {
    id: 'users',
    index: '01',
    title: 'Everyday Card & Wallet Participation',
    summary: 'The Kinetic Card serves as the everyday interface into an intelligent financial operating system.',
    detail:
      'From the cardholder perspective, payments stay effortless: tap, pay, and earn rewards. Behind every swipe, verified economic activity replaces static snapshots with live participation signals.',
    outcome: 'Entry point for consumers, freelancers, and merchants',
  },
  {
    id: 'pouw',
    index: '02',
    title: 'Proof of Useful Work Consensus',
    summary: 'Every transaction fuels blockchain consensus that executes real financial intelligence instead of arbitrary hashes.',
    detail:
      'Consensus nodes in Rust and Mojo verify transactions while generating zk-SNARK proofs for encrypted credit risk models, creating direct symmetry between ledger security and economic utility.',
    outcome: 'Quantum-resilient ledger backed by linear algebra',
  },
  {
    id: 'intelligence',
    index: '03',
    title: 'Compounding AI & Reputation Models',
    summary: 'Verified payment streams continuously sharpen fraud defense and dynamic credit underwriting.',
    detail:
      'Rather than asking only what a borrower owed in the past, Kinetic evaluates income rhythm, payment reliability, work activity, and spending patterns today across gig and entrepreneurial earners.',
    outcome: 'Fairer, real-time credit access with lower loss rates',
  },
  {
    id: 'rewards',
    index: '04',
    title: 'Shared Rewards & Elastic Credit',
    summary: 'Lower fraud losses and operating costs flow back to network participants via smart contracts.',
    detail:
      'Savings achieved through predictive risk reduction automatically expand elastic credit limits, sharpen reward tiers, and lower transaction fees—attracting new users and third-party developers.',
    outcome: 'Self-reinforcing economic flywheel',
  },
];

export const BANKING_USE_CASES: BankingUseCase[] = [
  {
    id: 'back-office',
    index: '01',
    title: 'Back-Office & Document Automation',
    institution: 'SouthState Bank Benchmark',
    metric: '+20%',
    metricContext: 'Productivity gain · 15 min tasks cut to seconds',
    description:
      'Generative AI synthesizes contracts, credit memos, and internal policies in seconds, turning multi-step policy lookups and expense reviews into streamlined workflows.',
  },
  {
    id: 'aml-compliance',
    index: '02',
    title: 'Compliance & Financial Crime Detection',
    institution: 'Real-Time AML Monitoring',
    metric: 'Real-Time',
    metricContext: 'Dynamic pattern learning replacing static rules',
    description:
      'Adaptive AI models replace rigid threshold alerts to identify anomalous transaction patterns across high-volume payment rails while sharply reducing false positives.',
  },
  {
    id: 'idp',
    index: '03',
    title: 'Intelligent Document Processing (IDP)',
    institution: 'Loan Origination Pipeline',
    metric: '99%',
    metricContext: 'Extraction accuracy · 70% less manual handling',
    description:
      'Combining NLP with machine learning extracts structured underwriting data from tax returns, invoices, and financial statements with near-zero manual re-keying.',
  },
  {
    id: 'risk-management',
    index: '04',
    title: 'Unstructured Risk & Volatility Analysis',
    institution: 'Deutsche Bank Benchmark',
    metric: '24/7',
    metricContext: 'Continuous filing & market signal synthesis',
    description:
      'Large language models parse regulatory filings, macroeconomic news, and portfolio exposures to forecast market volatility and surface early credit stress indicators.',
  },
];

export const GOVERNANCE_PILLARS: GovernancePillar[] = [
  {
    title: 'Human-in-the-Loop (HITL) Mandates',
    authority: 'FDIC & OCC Supervision',
    description:
      'High-impact AI workflows require documented human sign-off—especially across software deployment pipelines where qualified reviewers validate AI-generated code before production release.',
  },
  {
    title: 'Explainable Credit Decisions',
    authority: 'Equal Credit Opportunity Act (ECOA)',
    description:
      'Opaque black-box models are barred from retail underwriting. Every credit determination must produce clear, human-interpretable rationales justifying specific approval or adverse factors.',
  },
  {
    title: 'Chief AI Officer (CAIO) Inventory',
    authority: 'Enterprise Risk Governance',
    description:
      'Formal AI governance offices maintain a centralized ledger of every model in production, mapping training lineage, drift thresholds, and audit trails to board-level risk frameworks.',
  },
  {
    title: 'Hybrid Micro-Model Guardrails',
    authority: 'Prompt & Data Security',
    description:
      'To defeat prompt injection, data leakage, and algorithmic bias, sensitive customer records stay on-premises while lightweight safety micro-models screen prompts ahead of larger cloud LLMs.',
  },
];

export const CHARTER_STEPS: CharterStep[] = [
  {
    step: 1,
    title: 'Pre-Filing & Strategy',
    durationTraditional: 'Months 1–2',
    durationLlm: 'Weeks 1–3',
    summary:
      'Organizers engage the South Dakota Division of Banking and the FDIC early to align on charter scope, capital targets, and operating model.',
    checklist: [
      'Establish initial communication with SD Division of Banking & FDIC',
      'Define core operational niche (BaaS, Trust, or AI Retail Banking)',
      'Draft executive summary and initial unit-economics financial model',
    ],
    llmShare: 85,
  },
  {
    step: 2,
    title: 'Interagency Application',
    durationTraditional: 'Months 3–6',
    durationLlm: 'Months 1–2',
    summary:
      'Compilation of the Interagency Charter and Federal Deposit Insurance Application covering governance, market feasibility, and infrastructure.',
    checklist: [
      'Compile biographical and financial disclosures for all organizers',
      'Synthesize competitive market analysis and geographic service footprint',
      'Document premises, fixed assets, and hybrid AI cloud/on-prem IT architecture',
    ],
    llmShare: 90,
  },
  {
    step: 3,
    title: 'Business Plan & Risk Policies',
    durationTraditional: 'Months 6–10',
    durationLlm: 'Months 2–4',
    summary:
      'The documentary core: a 100+ page strategic business plan paired with three-year pro forma financial statements and compliance manuals.',
    checklist: [
      'Generate 100+ page business plan with 3-year pro forma balance sheet & P&L',
      'Draft BSA/AML, Fair Lending (ECOA), CRA, and Model Risk policies',
      'Establish Information Security, Incident Response, and Vendor Management frameworks',
    ],
    llmShare: 96,
  },
  {
    step: 4,
    title: 'Capitalization & Board',
    durationTraditional: 'Months 10–14',
    durationLlm: 'Months 4–6',
    summary:
      'Securing $10M–$30M+ in committed initial capital into escrow while completing federal background clearances for directors and officers.',
    checklist: [
      'Secure $10M–$30M+ institutional and organizer capital in escrow',
      'Complete FBI fingerprinting and regulatory background clearances',
      'Conduct formal FDIC and state examiner interviews with executive suite',
    ],
    llmShare: 20,
  },
  {
    step: 5,
    title: 'Regulatory Approval',
    durationTraditional: 'Months 14–18',
    durationLlm: 'Months 6–9',
    summary:
      'Completing public notice windows, resolving final supervisory inquiries, executing wet-ink attestations, and receiving the Order of Approval.',
    checklist: [
      'Publish statutory local notices and complete public comment period',
      'Respond to final examiner questions and pre-opening conditions',
      'Execute wet-ink signatures and launch live chartered operations',
    ],
    llmShare: 45,
  },
];

export const JURISDICTION_COMPARISON = [
  {
    state: 'South Dakota',
    charterType: 'State Bank / Trust Charter',
    corporateTax: '0% Corporate & Personal Income Tax',
    usuryAdvantage: 'Premier national interest-rate exportation',
    regulatorPosture: 'Highly responsive SD Division of Banking',
    recommended: true,
    note: 'Optimal jurisdiction for national credit card issuers, AI-native lending, and retained capital compounding.',
  },
  {
    state: 'Utah',
    charterType: 'Industrial Loan Company (ILC)',
    corporateTax: '4.55% Corporate Income Tax',
    usuryAdvantage: 'Commercial parent compatibility',
    regulatorPosture: 'High scrutiny & extended FDIC approval queues',
    recommended: false,
    note: 'Useful for non-bank commercial parents seeking limited-purpose lending without full BHC oversight.',
  },
  {
    state: 'Wyoming',
    charterType: 'Special Purpose Depository (SPDI)',
    corporateTax: '0% Corporate Income Tax',
    usuryAdvantage: 'Digital asset custody focus (100% reserve)',
    regulatorPosture: 'Crypto-native, limited federal payment rail access',
    recommended: false,
    note: 'Built for pure digital asset custody rather than fractional-reserve lending or card issuance.',
  },
] as const;

export const PATENT_FIGURES: PatentFigure[] = [
  {
    id: 'FIG. 1',
    title: 'High-Level System Architecture',
    caption:
      'Illustrates the native mobile client ecosystem (Jetpack Compose / SwiftUI), peer-to-peer consensus nodes (Rust / Mojo), encrypted transaction mempool, zkML engine, and immutable decentralized ledger.',
    components: ['Mobile Wallet & DIDs', 'Transaction Mempool', 'Rust/Mojo Provers', 'Immutable Ledger'],
  },
  {
    id: 'FIG. 2',
    title: 'Proof of Useful Work (PoUW) Flowchart',
    caption:
      'Depicts sequential execution of ML credit risk inference, Rank-1 Constraint System (R1CS) circuit construction, zk-SNARK proof generation (π), and millisecond non-interactive peer validation.',
    components: ['Private Witness w', 'R1CS Circuit', 'SNARK Prover (π)', 'Verify(vk, x, π) < 5ms'],
  },
  {
    id: 'FIG. 3',
    title: 'Arithmetic Circuit & Witness Mapping',
    caption:
      'Schematic mapping of encrypted borrower attributes w, public model weights M, verification key vk, and cryptographic binding to prevent forged score outputs.',
    components: ['Encrypted Income/Debt', 'Public Model M', 'Polynomial Commitments', 'Verification Key vk'],
  },
  {
    id: 'FIG. 4',
    title: 'Economic Flywheel & Block Binding',
    caption:
      'Sequence flow tying previous block header hash into zk-SNARK public inputs for replay prevention while feeding reduced fraud costs back into smart-contract reward tiers.',
    components: ['Prev Block Hash Seed', 'Freshness Binding', 'Smart Contract Tiers', 'Elastic Credit Limits'],
  },
];

export const PATENT_CLAIMS: PatentClaim[] = [
  {
    number: 1,
    category: 'method',
    typeLabel: 'Independent Method',
    title: 'PoUW Consensus with zkML Credit Scoring',
    text: 'A computer-implemented method for securing a decentralized financial ledger utilizing a proof of useful work consensus protocol, comprising receiving unconfirmed financial transactions and an encrypted zkML credit scoring request, executing the ML credit risk model over encrypted borrower data without decryption, generating a zk-SNARK proof π, and appending the verified block to the decentralized ledger.',
  },
  {
    number: 2,
    category: 'method',
    typeLabel: 'Dependent on Claim 1',
    title: 'Computational Asymmetry Requirement',
    text: 'The method of claim 1, wherein generation of the zk-SNARK proof satisfies an asymmetry requirement of the consensus protocol such that proof generation requires substantial polynomial commitments while verification across peers executes in milliseconds.',
  },
  {
    number: 3,
    category: 'method',
    typeLabel: 'Dependent on Claim 1',
    title: 'Dynamic Difficulty & Model Granularity',
    text: 'The method of claim 1, wherein the complexity, layer depth, or parameter count of the machine learning credit risk model is dynamically modulated by the peer-to-peer network based on total network computational power to keep block production time stable.',
  },
  {
    number: 4,
    category: 'method',
    typeLabel: 'Dependent on Claim 1',
    title: 'Block Header Freshness & Replay Prevention',
    text: 'The method of claim 1, wherein the zk-SNARK proof is cryptographically bound to a hash of an immediately preceding block header as a public circuit input to prevent replay attacks and guarantee solution freshness.',
  },
  {
    number: 5,
    category: 'method',
    typeLabel: 'Dependent on Claim 1',
    title: 'Private Witness Inside R1CS Circuits',
    text: 'The method of claim 1, wherein encrypted borrower data—including income patterns, repayment reliability, and obligations—operates as a private witness variable within a Rank-1 Constraint System (R1CS) during zk-SNARK proof generation.',
  },
  {
    number: 6,
    category: 'system',
    typeLabel: 'Independent System',
    title: 'Decentralized Financial System Architecture',
    text: 'A decentralized financial system comprising a peer-to-peer network of consensus nodes configured to maintain an immutable ledger and execute client-outsourced zkML credit evaluation models, enabling third-party smart contracts to verify user credit eligibility without accessing raw personal financial data.',
  },
  {
    number: 7,
    category: 'system',
    typeLabel: 'Dependent on Claim 6',
    title: 'MemPool Task Selection Marketplace',
    text: 'The decentralized financial system of claim 6, wherein the client-outsourced computational task is selected by consensus nodes from a mempool of pending encrypted credit scoring requests submitted by borrowers and applications.',
  },
  {
    number: 8,
    category: 'system',
    typeLabel: 'Dependent on Claim 6',
    title: 'Verified Neural Matrix Multiplications',
    text: 'The decentralized financial system of claim 6, wherein the cryptographic proof mathematically verifies that neural network matrix multiplications and linear algebra operations were executed faithfully over encrypted input variables, providing resistance against Grover quantum search speedups.',
  },
  {
    number: 9,
    category: 'system',
    typeLabel: 'Dependent on Claim 6',
    title: 'Automated Smart Contract Economic Flywheel',
    text: 'The decentralized financial system of claim 6, wherein measurable reductions in systemic fraud and credit risk generated by the AI engine automatically trigger smart contract executions to improve user reward tiers and expand elastic credit limits.',
  },
  {
    number: 10,
    category: 'medium',
    typeLabel: 'Independent Medium',
    title: 'Non-Transitory Computer-Readable Storage Medium',
    text: 'A non-transitory computer-readable storage medium storing instructions that cause a consensus node processor to receive encrypted financial data and a target ML model, execute inference, generate a validating zero-knowledge proof, bundle the proof with pending ledger transactions, and broadcast the block candidate for non-interactive network verification.',
  },
];
