import {ChangeDetectionStrategy, Component, computed, signal} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import {PATENT_CLAIMS, PATENT_FIGURES} from '../data/ashwave-data';

@Component({
  selector: 'app-patent',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ReactiveFormsModule, MatIconModule],
  template: `
    <!-- Header Band -->
    <section class="border-b border-[#C4E2D8] bg-gradient-to-b from-[#E3F5EE] to-[#F6FBF9] py-12 lg:py-16">
      <div class="mx-auto max-w-[1200px] px-6 space-y-5">
        <p class="text-sm font-medium text-[#0C5F84]">
          Non-Provisional Utility Patent Specification · 37 CFR 1.77 Standard
        </p>
        <h1 class="font-display max-w-4xl text-3xl font-semibold tracking-tight text-[#0B2530] sm:text-5xl">
          Kinetic Financial Network: Decentralized Operating System Utilizing PoUW &amp; zkML Credit Scoring
        </h1>
        <div class="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-[#3A5D6A]">
          <span>Inventor: <strong class="text-[#0B2530]">Siamak Ashrafi</strong> (California, US)</span>
          <span aria-hidden="true">·</span>
          <span>Assignee: <strong class="text-[#0B2530]">Swift Monster</strong></span>
          <span aria-hidden="true">·</span>
          <span class="font-mono-tabular">CPC: G06Q · H04L · G06N</span>
        </div>
      </div>
    </section>

    <!-- Abstract & Core Innovations -->
    <section class="mx-auto max-w-[1200px] px-6 py-16 space-y-12">
      <div class="grid gap-10 lg:grid-cols-12">
        <div class="lg:col-span-6 space-y-4">
          <p class="text-sm font-medium text-[#0C5F84]">01. Abstract of the Disclosure</p>
          <h2 class="font-display text-2xl font-semibold text-[#0B2530]">
            Turning transaction verification into privacy-preserving AI underwriting.
          </h2>
          <p class="text-[15px] leading-relaxed text-[#3A5D6A]">
            A decentralized financial operating system and method are disclosed herein. The system
            processes financial transactions while utilizing the computational energy of verification
            to train and execute artificial intelligence credit models. This Proof of Useful Work
            (PoUW) protocol achieves asymmetric quantum resilience by replacing SHA-256 hash puzzles
            with heavy linear algebra and neural matrix multiplications.
          </p>
          <p class="text-[15px] leading-relaxed text-[#3A5D6A]">
            A zero-knowledge machine learning (zkML) layer generates zk-SNARK proofs verifying
            encrypted borrower credit evaluations without exposing sensitive personal data to peers.
          </p>
          <div class="font-mono-tabular text-xs text-[#0C5F84]">
            MPEP 608.01(b) Abstract Compliance: 128 words (under 150-word limit)
          </div>
        </div>

        <div class="lg:col-span-6 grid gap-4 sm:grid-cols-2">
          <div class="rounded-2xl border border-[#C4E2D8] bg-white p-5 space-y-2">
            <div class="text-xs font-semibold text-[#0C5F84]">Innovation 01</div>
            <h3 class="font-display text-base font-semibold text-[#0B2530]">PoUW Consensus</h3>
            <p class="text-xs leading-relaxed text-[#3A5D6A]">
              Replaces arbitrary hash puzzles with client-outsourced zk-SNARK proof generation for
              credit scoring models.
            </p>
          </div>
          <div class="rounded-2xl border border-[#C4E2D8] bg-white p-5 space-y-2">
            <div class="text-xs font-semibold text-[#0C5F84]">Innovation 02</div>
            <h3 class="font-display text-base font-semibold text-[#0B2530]">Quantum Resilience</h3>
            <p class="text-xs leading-relaxed text-[#3A5D6A]">
              Anchors block mining in neural matrix multiplications resistant to Grover’s quadratic
              quantum search speedup.
            </p>
          </div>
          <div class="rounded-2xl border border-[#C4E2D8] bg-white p-5 space-y-2">
            <div class="text-xs font-semibold text-[#0C5F84]">Innovation 03</div>
            <h3 class="font-display text-base font-semibold text-[#0B2530]">Dynamic Credit</h3>
            <p class="text-xs leading-relaxed text-[#3A5D6A]">
              Scores continuous gig and freelance cashflows in real time rather than static debt
              history.
            </p>
          </div>
          <div class="rounded-2xl border border-[#C4E2D8] bg-white p-5 space-y-2">
            <div class="text-xs font-semibold text-[#0C5F84]">Innovation 04</div>
            <h3 class="font-display text-base font-semibold text-[#0B2530]">Economic Flywheel</h3>
            <p class="text-xs leading-relaxed text-[#3A5D6A]">
              Smart contracts redistribute reduced fraud operating costs back into rewards and
              elastic credit limits.
            </p>
          </div>
        </div>
      </div>

      <!-- Interactive 4-Step zkML -> Consensus Pipeline -->
      <div class="rounded-2xl border border-[#C4E2D8] bg-[#ECF7F3] p-6 sm:p-8 space-y-6">
        <div class="flex flex-wrap items-center justify-between gap-4">
          <div>
            <p class="text-sm font-medium text-[#0C5F84]">02. zkML Proof &amp; Consensus Pipeline</p>
            <h2 class="font-display text-2xl font-semibold text-[#0B2530]">
              From encrypted borrower witness to millisecond block finality.
            </h2>
          </div>
          <span class="font-mono-tabular text-xs font-semibold text-[#0C5F84]">
            Verify(vk, x, π) &lt; 5 ms
          </span>
        </div>

        <div class="grid grid-cols-1 gap-3 sm:grid-cols-4">
          @for (pipe of pipelineSteps; track pipe.step) {
            <button
              type="button"
              (click)="activePipeStep.set(pipe.step)"
              [class]="
                activePipeStep() === pipe.step
                  ? 'rounded-xl bg-[#0C5F84] p-4 text-left text-white transition-colors'
                  : 'rounded-xl border border-[#C4E2D8] bg-white p-4 text-left text-[#0B2530] hover:bg-[#E0F3EC] transition-colors'
              "
            >
              <div class="font-mono-tabular text-xs opacity-80">Step 0{{ pipe.step }}</div>
              <div class="mt-1 font-display text-sm font-semibold">{{ pipe.shortTitle }}</div>
            </button>
          }
        </div>

        @for (pipe of pipelineSteps; track pipe.step) {
          @if (activePipeStep() === pipe.step) {
            <div class="rounded-xl border border-[#C4E2D8] bg-white p-6 grid gap-6 md:grid-cols-12 md:items-center">
              <div class="md:col-span-8 space-y-2">
                <div class="font-mono-tabular text-xs text-[#0C5F84]">{{ pipe.mathLabel }}</div>
                <h3 class="font-display text-xl font-semibold text-[#0B2530]">{{ pipe.title }}</h3>
                <p class="text-sm leading-relaxed text-[#3A5D6A]">{{ pipe.detail }}</p>
              </div>
              <div class="md:col-span-4 rounded-xl bg-[#F6FBF9] border border-[#DCEEE7] p-4 space-y-1.5 text-xs">
                <div class="font-semibold text-[#0B2530]">Axiom Enforced</div>
                <div class="font-mono-tabular text-[#0C5F84]">{{ pipe.axiom }}</div>
                <div class="text-[#3A5D6A]">{{ pipe.runtime }}</div>
              </div>
            </div>
          }
        }
      </div>
    </section>

    <!-- Drawings & Claims Inspector -->
    <section class="border-y border-[#C4E2D8] bg-white py-16">
      <div class="mx-auto max-w-[1200px] px-6 space-y-12">
        <!-- FIG. 1 - FIG. 4 Drawings -->
        <div class="space-y-6">
          <div class="space-y-1">
            <p class="text-sm font-medium text-[#0C5F84]">03. Brief Description of Drawings</p>
            <h2 class="font-display text-2xl font-semibold text-[#0B2530]">
              USPTO 37 CFR 1.84 Technical Views (FIG. 1 – FIG. 4)
            </h2>
          </div>

          <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            @for (fig of figures; track fig.id) {
              <div class="rounded-2xl border border-[#C4E2D8] bg-[#F6FBF9] p-5 flex flex-col justify-between space-y-4">
                <div class="space-y-2">
                  <div class="font-mono-tabular text-xs font-semibold text-[#0C5F84]">{{ fig.id }}</div>
                  <h3 class="font-display text-base font-semibold text-[#0B2530]">{{ fig.title }}</h3>
                  <p class="text-xs leading-relaxed text-[#3A5D6A]">{{ fig.caption }}</p>
                </div>
                <div class="border-t border-[#DCEEE7] pt-3 text-xs text-[#0B2530]">
                  {{ fig.components.join(' · ') }}
                </div>
              </div>
            }
          </div>
        </div>

        <!-- 10 Formal Claims Inspector -->
        <div class="space-y-6">
          <div class="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div class="space-y-1">
              <p class="text-sm font-medium text-[#0C5F84]">04. Claims Inspector</p>
              <h2 class="font-display text-2xl font-semibold text-[#0B2530]">
                Ten Formal Patent Claims
              </h2>
            </div>

            <div class="inline-flex flex-wrap rounded-xl border border-[#C4E2D8] bg-[#F6FBF9] p-1 gap-1">
              <button
                type="button"
                (click)="claimFilter.set('all')"
                [class]="
                  claimFilter() === 'all'
                    ? 'rounded-lg bg-[#0C5F84] px-3 py-1.5 text-xs font-semibold text-white whitespace-nowrap'
                    : 'rounded-lg px-3 py-1.5 text-xs font-medium text-[#3A5D6A] hover:text-[#0B2530] whitespace-nowrap'
                "
              >
                All (10)
              </button>
              <button
                type="button"
                (click)="claimFilter.set('method')"
                [class]="
                  claimFilter() === 'method'
                    ? 'rounded-lg bg-[#0C5F84] px-3 py-1.5 text-xs font-semibold text-white whitespace-nowrap'
                    : 'rounded-lg px-3 py-1.5 text-xs font-medium text-[#3A5D6A] hover:text-[#0B2530] whitespace-nowrap'
                "
              >
                Method (1–5)
              </button>
              <button
                type="button"
                (click)="claimFilter.set('system')"
                [class]="
                  claimFilter() === 'system'
                    ? 'rounded-lg bg-[#0C5F84] px-3 py-1.5 text-xs font-semibold text-white whitespace-nowrap'
                    : 'rounded-lg px-3 py-1.5 text-xs font-medium text-[#3A5D6A] hover:text-[#0B2530] whitespace-nowrap'
                "
              >
                System (6–9)
              </button>
              <button
                type="button"
                (click)="claimFilter.set('medium')"
                [class]="
                  claimFilter() === 'medium'
                    ? 'rounded-lg bg-[#0C5F84] px-3 py-1.5 text-xs font-semibold text-white whitespace-nowrap'
                    : 'rounded-lg px-3 py-1.5 text-xs font-medium text-[#3A5D6A] hover:text-[#0B2530] whitespace-nowrap'
                "
              >
                Medium (10)
              </button>
            </div>
          </div>

          <div class="grid gap-4 md:grid-cols-2">
            @for (claim of filteredClaims(); track claim.number) {
              <article class="rounded-2xl border border-[#C4E2D8] bg-[#F6FBF9] p-5 space-y-2.5">
                <div class="flex items-center justify-between gap-2 text-xs">
                  <span class="font-mono-tabular font-semibold text-[#0C5F84]">
                    Claim {{ claim.number }}
                  </span>
                  <span class="text-[#3A5D6A]">{{ claim.typeLabel }}</span>
                </div>
                <h3 class="font-display text-base font-semibold text-[#0B2530]">{{ claim.title }}</h3>
                <p class="text-xs leading-relaxed text-[#3A5D6A]">{{ claim.text }}</p>
              </article>
            }
          </div>
        </div>
      </div>
    </section>

    <!-- Interactive USPTO Patent Cost & Prosecution Modeler -->
    <section class="mx-auto max-w-[1200px] px-6 py-16 space-y-8">
      <div class="max-w-2xl space-y-2">
        <p class="text-sm font-medium text-[#0C5F84]">05. USPTO Patent Center Cost Modeler</p>
        <h2 class="font-display text-3xl font-semibold tracking-tight text-[#0B2530]">
          Prosecution timeline &amp; statutory fee estimator.
        </h2>
        <p class="text-sm text-[#3A5D6A]">
          Model filing scenarios under 37 CFR 1.27/1.29 entity discounts, DOCX vs. PDF surcharges,
          excess claims, Track One expedited review, and counsel tiers.
        </p>
      </div>

      <div class="grid gap-8 lg:grid-cols-12">
        <form
          [formGroup]="costForm"
          class="lg:col-span-7 rounded-2xl border border-[#C4E2D8] bg-white p-6 sm:p-8 space-y-5"
        >
          <div class="grid gap-4 sm:grid-cols-2">
            <div class="space-y-1.5">
              <label for="entity-status" class="block text-xs font-semibold text-[#0B2530]">
                Entity Status
              </label>
              <select
                id="entity-status"
                formControlName="entity"
                class="w-full rounded-lg border border-[#C4E2D8] bg-[#F6FBF9] px-3 py-2 text-sm text-[#0B2530]"
              >
                <option value="large">Large Entity (Standard)</option>
                <option value="small">Small Entity (60% Discount)</option>
                <option value="micro">Micro Entity (80% Discount)</option>
              </select>
            </div>

            <div class="space-y-1.5">
              <label for="upload-format" class="block text-xs font-semibold text-[#0B2530]">
                Specification Format
              </label>
              <select
                id="upload-format"
                formControlName="format"
                class="w-full rounded-lg border border-[#C4E2D8] bg-[#F6FBF9] px-3 py-2 text-sm text-[#0B2530]"
              >
                <option value="docx">DOCX Format ($0 Penalty)</option>
                <option value="pdf">PDF Format (Non-DOCX Surcharge)</option>
              </select>
            </div>
          </div>

          <div class="grid gap-4 sm:grid-cols-2">
            <div class="space-y-1.5">
              <label for="ind-claims" class="block text-xs font-semibold text-[#0B2530]">
                Independent Claims (3 Included)
              </label>
              <input
                id="ind-claims"
                type="number"
                min="1"
                max="15"
                formControlName="independentClaims"
                class="w-full rounded-lg border border-[#C4E2D8] bg-[#F6FBF9] px-3 py-2 text-sm text-[#0B2530] font-mono-tabular"
              />
            </div>

            <div class="space-y-1.5">
              <label for="tot-claims" class="block text-xs font-semibold text-[#0B2530]">
                Total Claims (20 Included)
              </label>
              <input
                id="tot-claims"
                type="number"
                min="1"
                max="50"
                formControlName="totalClaims"
                class="w-full rounded-lg border border-[#C4E2D8] bg-[#F6FBF9] px-3 py-2 text-sm text-[#0B2530] font-mono-tabular"
              />
            </div>
          </div>

          <div class="grid gap-4 sm:grid-cols-2">
            <div class="space-y-1.5">
              <label for="track-speed" class="block text-xs font-semibold text-[#0B2530]">
                Examination Track
              </label>
              <select
                id="track-speed"
                formControlName="track"
                class="w-full rounded-lg border border-[#C4E2D8] bg-[#F6FBF9] px-3 py-2 text-sm text-[#0B2530]"
              >
                <option value="standard">Standard Track (24–36 Mos)</option>
                <option value="trackOne">Track One Prioritized (&lt;12 Mos)</option>
              </select>
            </div>

            <div class="space-y-1.5">
              <label for="counsel-tier" class="block text-xs font-semibold text-[#0B2530]">
                Legal Representation Tier
              </label>
              <select
                id="counsel-tier"
                formControlName="counselTier"
                class="w-full rounded-lg border border-[#C4E2D8] bg-[#F6FBF9] px-3 py-2 text-sm text-[#0B2530]"
              >
                <option value="prose">Pro Se / Self-Filed ($0 Legal)</option>
                <option value="standard">Standard Fintech Practice ($16,000)</option>
                <option value="top">Top Tier IP Firm ($28,000)</option>
              </select>
            </div>
          </div>

          <div class="flex items-center gap-3 pt-1">
            <input
              id="pct-check"
              type="checkbox"
              formControlName="includePct"
              class="h-4 w-4 rounded border-[#C4E2D8] accent-[#0C5F84]"
            />
            <label for="pct-check" class="text-xs font-medium text-[#0B2530]">
              Include PCT International Filing Estimate (+$3,200)
            </label>
          </div>
        </form>

        <div class="lg:col-span-5 rounded-2xl border border-[#C4E2D8] bg-[#ECF7F3] p-6 sm:p-8 flex flex-col justify-between space-y-6">
          <div class="space-y-4">
            <div class="text-xs font-medium text-[#0C5F84]">Projected Filing Budget</div>
            <div class="font-display text-4xl font-semibold text-[#0B2530] font-mono-tabular">
              &#36;{{ costBreakdown().total.toLocaleString('en-US') }}
            </div>
            <p class="text-xs text-[#3A5D6A]">
              Estimated timeline: <strong class="text-[#0B2530]">{{ costBreakdown().timeline }}</strong>
            </p>
          </div>

          <div class="space-y-3 border-t border-[#C4E2D8] pt-4 text-sm">
            <div class="flex items-center justify-between">
              <span class="text-[#3A5D6A]">USPTO Statutory Fees</span>
              <span class="font-mono-tabular font-semibold text-[#0B2530]">
                &#36;{{ costBreakdown().govtFees.toLocaleString('en-US') }}
              </span>
            </div>
            <div class="flex items-center justify-between">
              <span class="text-[#3A5D6A]">Non-DOCX Surcharge</span>
              <span class="font-mono-tabular font-semibold text-[#0B2530]">
                &#36;{{ costBreakdown().pdfPenalty.toLocaleString('en-US') }}
              </span>
            </div>
            <div class="flex items-center justify-between">
              <span class="text-[#3A5D6A]">Counsel / PCT Fees</span>
              <span class="font-mono-tabular font-semibold text-[#0B2530]">
                &#36;{{ costBreakdown().legalAndPct.toLocaleString('en-US') }}
              </span>
            </div>
          </div>

          <div class="rounded-xl bg-white border border-[#C4E2D8] p-4 text-xs leading-relaxed text-[#3A5D6A]">
            Advisory: Upload specifications in Microsoft Word (.docx) to avoid the $430 / $172 / $86
            surcharge, and pay exclusively through the integrated Patent Center payment gateway.
          </div>
        </div>
      </div>
    </section>
  `,
})
export class Patent {
  readonly figures = PATENT_FIGURES;
  readonly claims = PATENT_CLAIMS;

  readonly activePipeStep = signal(1);
  readonly claimFilter = signal<'all' | 'method' | 'system' | 'medium'>('all');

  readonly filteredClaims = computed(() => {
    const filter = this.claimFilter();
    if (filter === 'all') {
      return this.claims;
    }
    return this.claims.filter((c) => c.category === filter);
  });

  readonly pipelineSteps = [
    {
      step: 1,
      shortTitle: 'Witness Encryption',
      title: 'Borrower Data Encryption (Private Witness w)',
      mathLabel: 'Client-Side Encryption · Native Wallet',
      detail:
        'Borrowers submit gig income, cash flows, and repayment cadence. Sensitive attributes are encrypted locally in the Jetpack Compose / SwiftUI wallet before ever reaching the network.',
      axiom: 'Zero PII Exposure',
      runtime: 'Jetpack Compose / SwiftUI DID Store',
    },
    {
      step: 2,
      shortTitle: 'MemPool Offloading',
      title: 'MemPool Offloading & Node Selection',
      mathLabel: 'Decentralized Task Marketplace',
      detail:
        'Encrypted credit scoring tasks enter the transaction mempool. Consensus nodes competing for block rewards select pending zkML evaluation tasks alongside unconfirmed ledger transfers.',
      axiom: 'Deterministic Task Routing',
      runtime: 'Peer-to-Peer MemPool Queue',
    },
    {
      step: 3,
      shortTitle: 'PoUW & zk-SNARK',
      title: 'PoUW Execution & zk-SNARK Proof Generation (π)',
      mathLabel: 'y = M(w) · R1CS Circuit + Prev Block Hash',
      detail:
        'Nodes execute neural matrix multiplications over encrypted inputs, compile Rank-1 Constraint Systems, and bind the prior block header hash to prove solution freshness.',
      axiom: 'Unforgeability & Quantum Resilience',
      runtime: 'Rust & Mojo SIMD / GPU Pairing',
    },
    {
      step: 4,
      shortTitle: 'Instant Finality',
      title: 'Non-Interactive Network Verification & Finality',
      mathLabel: 'Verify(vk, x, π) → True (< 5 ms)',
      detail:
        'Network peers verify the zk-SNARK proof in milliseconds. Upon consensus, the block appends to the ledger, the borrower receives a verified score, and smart contracts update rewards.',
      axiom: 'Strict Verification Asymmetry',
      runtime: 'Sub-5ms Peer Block Validation',
    },
  ];

  readonly costForm = new FormGroup({
    entity: new FormControl<'large' | 'small' | 'micro'>('small', {nonNullable: true}),
    format: new FormControl<'docx' | 'pdf'>('docx', {nonNullable: true}),
    independentClaims: new FormControl<number>(3, {nonNullable: true}),
    totalClaims: new FormControl<number>(10, {nonNullable: true}),
    track: new FormControl<'standard' | 'trackOne'>('standard', {nonNullable: true}),
    counselTier: new FormControl<'prose' | 'standard' | 'top'>('standard', {nonNullable: true}),
    includePct: new FormControl<boolean>(false, {nonNullable: true}),
  });

  // Reactive signal mirror for Angular zoneless calculation
  private readonly formSnapshot = signal(this.costForm.getRawValue());

  constructor() {
    this.costForm.valueChanges.subscribe(() => {
      this.formSnapshot.set(this.costForm.getRawValue());
    });
  }

  readonly costBreakdown = computed(() => {
    const v = this.formSnapshot();
    const discount = v.entity === 'large' ? 1 : v.entity === 'small' ? 0.4 : 0.2;
    const baseFiling = Math.round(2000 * discount);
    const extraInd = Math.max(0, (v.independentClaims ?? 3) - 3) * Math.round(600 * discount);
    const extraTot = Math.max(0, (v.totalClaims ?? 10) - 20) * Math.round(200 * discount);
    const trackFee = v.track === 'trackOne' ? Math.round(4515 * discount) : 0;
    const pdfPenalty =
      v.format === 'pdf' ? (v.entity === 'large' ? 430 : v.entity === 'small' ? 172 : 86) : 0;

    const legal =
      v.counselTier === 'prose' ? 0 : v.counselTier === 'standard' ? 16000 : 28000;
    const pct = v.includePct ? 3200 : 0;

    const govtFees = baseFiling + extraInd + extraTot + trackFee;
    const legalAndPct = legal + pct;

    return {
      govtFees,
      pdfPenalty,
      legalAndPct,
      total: govtFees + pdfPenalty + legalAndPct,
      timeline: v.track === 'trackOne' ? 'Under 12 Months (Track One)' : '24–36 Months (Standard)',
    };
  });
}
