import {ChangeDetectionStrategy, Component, computed, signal} from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {
  BANKING_USE_CASES,
  CHARTER_STEPS,
  GOVERNANCE_PILLARS,
  JURISDICTION_COMPARISON,
} from '../data/ashwave-data';

@Component({
  selector: 'app-ai-banking',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [MatIconModule],
  template: `
    <!-- Header Band -->
    <section class="border-b border-[#C4E2D8] bg-gradient-to-b from-[#E3F5EE] to-[#F6FBF9] py-12 lg:py-16">
      <div class="mx-auto max-w-[1200px] px-6 space-y-5">
        <p class="text-sm font-medium text-[#0C5F84]">
          AI Banking &amp; GenAI De Novo Bank Chartering
        </p>
        <h1 class="font-display max-w-3xl text-4xl font-semibold tracking-tight text-[#0B2530] sm:text-5xl">
          Architecting an AI-native bank under federal supervision.
        </h1>
        <p class="max-w-2xl text-base leading-relaxed text-[#3A5D6A]">
          In 2026, artificial intelligence in banking moved from exploratory pilots to an operational
          imperative supported by OCC modernization—combining measurable operational gains, strict
          regulatory governance, and South Dakota charter economics.
        </p>

        <!-- Key Arbitrage Snapshot Strip -->
        <div
          class="mt-6 grid grid-cols-1 divide-y divide-[#C4E2D8] rounded-2xl border border-[#C4E2D8] bg-white sm:grid-cols-2 sm:divide-y-0 sm:divide-x lg:grid-cols-4"
        >
          <div class="p-5 space-y-1">
            <div class="text-xs text-[#3A5D6A]">Optimal Jurisdiction</div>
            <div class="font-display text-2xl font-semibold text-[#0C5F84]">South Dakota</div>
            <div class="text-xs text-[#3A5D6A]">0% corporate tax · Usury exportation</div>
          </div>
          <div class="p-5 space-y-1">
            <div class="text-xs text-[#3A5D6A]">Drafting Cost Arbitrage</div>
            <div class="font-display text-2xl font-semibold text-[#0B2530] tabular-nums">
              ~$165K <span class="text-sm font-normal text-[#3A5D6A]">vs. ~$850K</span>
            </div>
            <div class="text-xs text-[#3A5D6A]">LLM synthesis vs. SF counsel retainers</div>
          </div>
          <div class="p-5 space-y-1">
            <div class="text-xs text-[#3A5D6A]">Execution Horizon</div>
            <div class="font-display text-2xl font-semibold text-[#0B2530] tabular-nums">
              6–9 Mos <span class="text-sm font-normal text-[#3A5D6A]">vs. 12–18 Mos</span>
            </div>
            <div class="text-xs text-[#3A5D6A]">Accelerated application assembly</div>
          </div>
          <div class="p-5 space-y-1">
            <div class="text-xs text-[#3A5D6A]">Escrow Capitalization</div>
            <div class="font-display text-2xl font-semibold text-[#0B2530] tabular-nums">
              $10M–$30M+
            </div>
            <div class="text-xs text-[#3A5D6A]">FDIC &amp; SD Division of Banking</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Primary Operational Use Cases -->
    <section class="mx-auto max-w-[1200px] px-6 py-16 space-y-8">
      <div class="max-w-2xl space-y-2">
        <p class="text-sm font-medium text-[#0C5F84]">01. Operational Banking AI</p>
        <h2 class="font-display text-3xl font-semibold tracking-tight text-[#0B2530]">
          Proven institutional use cases across core banking workflows.
        </h2>
      </div>

      <div class="grid gap-6 md:grid-cols-2">
        @for (item of useCases; track item.id) {
          <article class="rounded-2xl border border-[#C4E2D8] bg-white p-6 sm:p-7 space-y-4">
            <div class="flex items-start justify-between gap-4">
              <div class="space-y-1">
                <div class="text-xs font-medium text-[#0C5F84]">
                  {{ item.index }}. {{ item.institution }}
                </div>
                <h3 class="font-display text-xl font-semibold text-[#0B2530]">{{ item.title }}</h3>
              </div>
              <div class="text-right shrink-0">
                <div class="font-display text-2xl font-semibold text-[#0C5F84] tabular-nums">
                  {{ item.metric }}
                </div>
              </div>
            </div>
            <p class="text-xs font-medium text-[#0B2530]">{{ item.metricContext }}</p>
            <p class="text-sm leading-relaxed text-[#3A5D6A]">{{ item.description }}</p>
          </article>
        }
      </div>
    </section>

    <!-- Regulatory & Governance Frameworks -->
    <section class="border-y border-[#C4E2D8] bg-[#ECF7F3] py-16">
      <div class="mx-auto max-w-[1200px] px-6 space-y-8">
        <div class="max-w-2xl space-y-2">
          <p class="text-sm font-medium text-[#0C5F84]">02. Regulatory &amp; Risk Architecture</p>
          <h2 class="font-display text-3xl font-semibold tracking-tight text-[#0B2530]">
            Supervision, explainability, and hybrid guardrails.
          </h2>
        </div>

        <div class="grid gap-6 sm:grid-cols-2">
          @for (pillar of governancePillars; track pillar.title) {
            <div class="rounded-2xl border border-[#C4E2D8] bg-white p-6 space-y-2.5">
              <div class="text-xs font-medium text-[#0C5F84]">{{ pillar.authority }}</div>
              <h3 class="font-display text-lg font-semibold text-[#0B2530]">{{ pillar.title }}</h3>
              <p class="text-sm leading-relaxed text-[#3A5D6A]">{{ pillar.description }}</p>
            </div>
          }
        </div>
      </div>
    </section>

    <!-- South Dakota De Novo Charter Navigator -->
    <section class="mx-auto max-w-[1200px] px-6 py-16 space-y-14">
      <!-- Jurisdiction Comparison -->
      <div class="space-y-6">
        <div class="max-w-2xl space-y-2">
          <p class="text-sm font-medium text-[#0C5F84]">03. Jurisdiction Matrix</p>
          <h2 class="font-display text-3xl font-semibold tracking-tight text-[#0B2530]">
            Why South Dakota leads de novo chartering.
          </h2>
          <p class="text-sm leading-relaxed text-[#3A5D6A]">
            While Utah (Industrial Loan Companies) and Wyoming (SPDIs for crypto) serve specialized
            niches, South Dakota provides the strongest foundation for credit card issuance, trust
            operations, and retained capital compounding.
          </p>
        </div>

        <div class="grid gap-6 md:grid-cols-3">
          @for (j of jurisdictions; track j.state) {
            <div
              [class]="
                j.recommended
                  ? 'rounded-2xl border-2 border-[#0C5F84] bg-[#ECF7F3] p-6 space-y-4'
                  : 'rounded-2xl border border-[#C4E2D8] bg-white p-6 space-y-4'
              "
            >
              <div class="flex items-center justify-between gap-2">
                <h3 class="font-display text-xl font-semibold text-[#0B2530]">{{ j.state }}</h3>
                <span class="text-xs font-semibold text-[#0C5F84]">
                  {{ j.recommended ? 'Primary Choice' : j.charterType }}
                </span>
              </div>
              <div class="space-y-2 border-y border-[#C4E2D8] py-3 text-xs">
                <div>
                  <span class="text-[#3A5D6A]">Tax: </span>
                  <span class="font-semibold text-[#0B2530]">{{ j.corporateTax }}</span>
                </div>
                <div>
                  <span class="text-[#3A5D6A]">Usury: </span>
                  <span class="font-semibold text-[#0B2530]">{{ j.usuryAdvantage }}</span>
                </div>
                <div>
                  <span class="text-[#3A5D6A]">Regulator: </span>
                  <span class="font-semibold text-[#0B2530]">{{ j.regulatorPosture }}</span>
                </div>
              </div>
              <p class="text-xs leading-relaxed text-[#3A5D6A]">{{ j.note }}</p>
            </div>
          }
        </div>
      </div>

      <!-- Interactive 5-Step SD Chartering Process -->
      <div class="space-y-6">
        <div class="space-y-2">
          <p class="text-sm font-medium text-[#0C5F84]">04. Five-Phase Chartering Roadmap</p>
          <h2 class="font-display text-3xl font-semibold tracking-tight text-[#0B2530]">
            Step-by-step path to FDIC-insured state approval.
          </h2>
        </div>

        <div class="grid gap-6 lg:grid-cols-12">
          <div class="lg:col-span-5 flex flex-col gap-2">
            @for (step of charterSteps; track step.step) {
              <button
                type="button"
                (click)="selectedStepNum.set(step.step)"
                [class]="
                  selectedStepNum() === step.step
                    ? 'flex items-center justify-between rounded-xl bg-[#0C5F84] px-4 py-3.5 text-left text-white transition-colors'
                    : 'flex items-center justify-between rounded-xl border border-[#C4E2D8] bg-white px-4 py-3.5 text-left text-[#0B2530] hover:bg-[#ECF7F3] transition-colors'
                "
              >
                <div>
                  <div class="font-mono-tabular text-xs opacity-80">Phase 0{{ step.step }}</div>
                  <div class="font-display text-sm font-semibold">{{ step.title }}</div>
                </div>
                <span class="font-mono-tabular text-xs opacity-90">{{ step.durationLlm }}</span>
              </button>
            }
          </div>

          <div class="lg:col-span-7">
            <div class="h-full rounded-2xl border border-[#C4E2D8] bg-white p-6 sm:p-8 space-y-6">
              <div class="flex flex-wrap items-center justify-between gap-4 border-b border-[#DCEEE7] pb-4">
                <div>
                  <div class="text-xs font-medium text-[#0C5F84]">
                    Phase 0{{ activeStep().step }} of 05
                  </div>
                  <h3 class="font-display text-2xl font-semibold text-[#0B2530]">
                    {{ activeStep().title }}
                  </h3>
                </div>
                <div class="text-right text-xs">
                  <div class="text-[#3A5D6A]">Traditional: {{ activeStep().durationTraditional }}</div>
                  <div class="font-semibold text-[#0C5F84]">LLM-Assisted: {{ activeStep().durationLlm }}</div>
                </div>
              </div>

              <p class="text-sm leading-relaxed text-[#3A5D6A]">
                {{ activeStep().summary }}
              </p>

              <div class="space-y-2.5">
                <div class="text-xs font-semibold text-[#0B2530]">Required Deliverables</div>
                <ul class="space-y-2">
                  @for (item of activeStep().checklist; track item) {
                    <li class="flex items-start gap-2.5 text-sm text-[#0B2530]">
                      <mat-icon class="!text-[18px] !w-[18px] !h-[18px] text-[#0C5F84] mt-0.5">
                        check_circle_outline
                      </mat-icon>
                      <span>{{ item }}</span>
                    </li>
                  }
                </ul>
              </div>

              <!-- LLM Automation Share Bar -->
              <div class="rounded-xl bg-[#F6FBF9] border border-[#DCEEE7] p-4 space-y-2">
                <div class="flex items-center justify-between text-xs">
                  <span class="font-medium text-[#0B2530]">LLM Document &amp; Synthesis Coverage</span>
                  <span class="font-mono-tabular font-semibold text-[#0C5F84]">
                    {{ activeStep().llmShare }}%
                  </span>
                </div>
                <div class="h-2.5 w-full overflow-hidden rounded-full bg-[#DCEEE7]">
                  <div
                    class="h-full rounded-full bg-[#0C5F84] transition-all duration-300"
                    [style.width.%]="activeStep().llmShare"
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- LLM Delegation vs Human Boundary + Cost Arbitrage -->
      <div class="rounded-2xl border border-[#C4E2D8] bg-[#ECF7F3] p-6 sm:p-8 space-y-6">
        <div class="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p class="text-sm font-medium text-[#0C5F84]">05. AI Delegation &amp; Cost Arbitrage</p>
            <h2 class="font-display text-2xl font-semibold text-[#0B2530]">
              San Francisco counsel retainers vs. LLM-driven execution.
            </h2>
          </div>
          <div class="font-mono-tabular text-sm font-semibold text-[#0C5F84]">
            ~$685,000 Drafting Savings (80.6%)
          </div>
        </div>

        <div class="grid gap-6 md:grid-cols-2">
          <div class="rounded-xl border border-[#C4E2D8] bg-white p-6 space-y-3">
            <div class="flex items-center gap-2 text-sm font-semibold text-[#0C5F84]">
              <mat-icon class="!text-[18px] !w-[18px] !h-[18px]">auto_awesome</mat-icon>
              <span>100% LLM-Capable Synthesis</span>
            </div>
            <ul class="space-y-2 text-sm text-[#3A5D6A]">
              <li>100+ page strategic business plan &amp; narrative drafting</li>
              <li>BSA/AML, Fair Lending (ECOA), CRA &amp; InfoSec policy manuals</li>
              <li>Three-year pro forma balance sheets and sensitivity tables</li>
              <li>Interagency Charter form auto-population &amp; cross-checking</li>
            </ul>
          </div>

          <div class="rounded-xl border border-[#C4E2D8] bg-white p-6 space-y-3">
            <div class="flex items-center gap-2 text-sm font-semibold text-[#0B2530]">
              <mat-icon class="!text-[18px] !w-[18px] !h-[18px]">verified_user</mat-icon>
              <span>Mandatory Human Governance</span>
            </div>
            <ul class="space-y-2 text-sm text-[#3A5D6A]">
              <li>FBI fingerprinting &amp; director background investigations</li>
              <li>Live regulatory alignment meetings with FDIC &amp; SD examiners</li>
              <li>Wiring $10M–$30M+ physical capital into escrow accounts</li>
              <li>Final wet-ink attestations signed under statutory penalty</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  `,
})
export class AiBanking {
  readonly useCases = BANKING_USE_CASES;
  readonly governancePillars = GOVERNANCE_PILLARS;
  readonly charterSteps = CHARTER_STEPS;
  readonly jurisdictions = JURISDICTION_COMPARISON;

  readonly selectedStepNum = signal(1);

  readonly activeStep = computed(() => {
    const num = this.selectedStepNum();
    return this.charterSteps.find((s) => s.step === num) ?? this.charterSteps[0];
  });
}
