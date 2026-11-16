import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  afterNextRender,
  computed,
  inject,
  signal,
} from '@angular/core';
import {RouterLink} from '@angular/router';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import {animate, stagger} from 'motion';
import {
  ASH_IMAGES,
  EXTERNAL_LINKS,
  FLYWHEEL_STAGES,
  HERO_KPIS,
} from '../data/ashwave-data';

@Component({
  selector: 'app-overview',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink, ReactiveFormsModule, MatIconModule],
  template: `
    <!-- Section 1: Sunlit Coastal Hero Split -->
    <section class="relative overflow-hidden bg-gradient-to-b from-[#E5F6F0] via-[#F0FAF6] to-[#F6FBF9] border-b border-[#C4E2D8]">
      <!-- Subtle sunlit sky & sea-breeze ambient wash -->
      <div
        aria-hidden="true"
        class="pointer-events-none absolute -top-28 right-0 h-[420px] w-[520px] rounded-full bg-[radial-gradient(circle,rgba(37,150,202,0.14)_0%,rgba(127,216,190,0.10)_45%,transparent_75%)]"
      ></div>
      <div
        aria-hidden="true"
        class="pointer-events-none absolute -bottom-24 -left-24 h-[360px] w-[420px] rounded-full bg-[radial-gradient(circle,rgba(233,168,76,0.10)_0%,rgba(167,235,210,0.12)_50%,transparent_75%)]"
      ></div>

      <div class="mx-auto max-w-[1200px] px-6 py-12 lg:py-16">
        <div class="grid gap-10 lg:grid-cols-12 lg:items-stretch">
          <div class="lg:col-span-6 flex flex-col justify-center space-y-6 hero-stagger">
            <p class="text-sm font-medium text-[#0C5F84]">
              Blockchain &amp; Artificial Intelligence in Fintech
            </p>

            <h1
              class="font-display text-4xl font-semibold tracking-tight text-[#0B2530] sm:text-5xl lg:text-[3.4rem] lg:leading-[1.08]"
            >
              Intelligent banking shaped by real-time economic motion.
            </h1>

            <p class="max-w-xl text-base leading-relaxed text-[#3A5D6A] sm:text-[17px]">
              AshWave is building <strong class="font-semibold text-[#0B2530]">The Kinetic Financial Network</strong>—a
              self-improving financial ecosystem uniting everyday card payments, Proof of Useful Work
              consensus, privacy-preserving zkML credit intelligence, and AI-native banking.
            </p>

            <div class="flex flex-wrap items-center gap-4 pt-2">
              <a
                routerLink="/kinetic"
                class="inline-flex items-center gap-2 rounded-xl bg-[#0C5F84] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#084561] whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0C5F84]"
              >
                <span>Explore Kinetic Network</span>
                <mat-icon class="!text-[18px] !w-[18px] !h-[18px]">arrow_forward</mat-icon>
              </a>

              <a
                routerLink="/ai-banking"
                class="inline-flex items-center gap-2 rounded-xl border border-[#A9D5C6] bg-white/85 px-5 py-3 text-sm font-semibold text-[#0B2530] transition-colors hover:bg-[#E0F3EC] whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0C5F84]"
              >
                <span>GenAI Bank Chartering</span>
              </a>
            </div>

            <div class="pt-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-[#3A5D6A]">
              <span>Kinetic Financial Network</span>
              <span aria-hidden="true">·</span>
              <span>South Dakota De Novo Strategy</span>
              <span aria-hidden="true">·</span>
              <span>SteelChain Layer-1 (Rust)</span>
              <span aria-hidden="true">·</span>
              <span>SeaWeed Real-Time Spend</span>
            </div>
          </div>

          <div class="lg:col-span-6">
            <div
              class="relative h-full min-h-[280px] overflow-hidden rounded-2xl border border-[#BFE2D6] bg-gradient-to-br from-[#D7F0E7] via-[#CFEBF4] to-[#E6F6EF]"
            >
              <img
                [src]="images.heroCoastal"
                alt="Sunlit coastal glass architecture overlooking calm mint-seafoam ocean waves and clear blue sky"
                referrerpolicy="no-referrer"
                class="h-full w-full object-cover lg:h-full"
              />
              <div
                aria-hidden="true"
                class="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0B2530]/25 via-transparent to-transparent"
              ></div>
              <div class="absolute bottom-4 left-4 right-4 rounded-xl border border-white/40 bg-[#F6FBF9]/90 px-4 py-3 backdrop-blur-md">
                <div class="flex flex-wrap items-center justify-between gap-2 text-xs text-[#0B2530]">
                  <span class="font-semibold">AshWave Financial Architecture</span>
                  <span class="text-[#3A5D6A]">Payments · Proof of Useful Work · Dynamic Credit</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- 4-column KPI strip below the hero split -->
        <div
          class="mt-10 grid grid-cols-1 divide-y divide-[#C4E2D8] rounded-2xl border border-[#C4E2D8] bg-white/90 sm:grid-cols-2 sm:divide-y-0 sm:divide-x lg:grid-cols-4"
        >
          @for (kpi of kpis; track kpi.label) {
            <div class="p-5 space-y-1">
              <div class="text-xs font-medium text-[#3A5D6A]">{{ kpi.label }}</div>
              <div class="font-display text-2xl font-semibold tracking-tight text-[#0C5F84] tabular-nums">
                {{ kpi.value }}
              </div>
              <div class="text-xs leading-relaxed text-[#3A5D6A]">{{ kpi.context }}</div>
            </div>
          }
        </div>
      </div>
    </section>

    <!-- Section 2: Vision & Interactive Economic Flywheel -->
    <section class="mx-auto max-w-[1200px] px-6 py-16 lg:py-20">
      <div class="grid gap-12 lg:grid-cols-12">
        <div class="lg:col-span-5 space-y-5">
          <p class="text-sm font-medium text-[#0C5F84]">01. Vision &amp; Economic Flywheel</p>
          <h2 class="font-display text-3xl font-semibold tracking-tight text-[#0B2530]">
            Built around participation, not static legacy history.
          </h2>
          <p class="text-[15px] leading-relaxed text-[#3A5D6A]">
            For decades, financial systems relied on centralized intermediaries and backward-looking
            borrowing scores. As commerce becomes more digital and distributed, individuals,
            freelancers, and enterprises need infrastructure that understands live economic activity.
          </p>
          <p class="text-[15px] leading-relaxed text-[#3A5D6A]">
            AshWave converts everyday transactions into a shared intelligence resource: the credit card
            acts as the entry point, the blockchain provides cryptographic trust, and AI continuously
            improves fraud defense, underwriting, and member rewards.
          </p>
          <div class="pt-2">
            <a
              [href]="links.kineticPaper"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center gap-2 text-sm font-semibold text-[#0C5F84] hover:text-[#084561] transition-colors"
            >
              <span>Read the Kinetic Financial Network Paper</span>
              <mat-icon class="!text-[16px] !w-[16px] !h-[16px]">north_east</mat-icon>
            </a>
          </div>
        </div>

        <div class="lg:col-span-7">
          <div class="rounded-2xl border border-[#C4E2D8] bg-[#ECF7F3] p-6 sm:p-8 space-y-6">
            <div class="flex flex-wrap items-center justify-between gap-4">
              <div>
                <h3 class="font-display text-xl font-semibold text-[#0B2530]">
                  The Kinetic Flywheel
                </h3>
                <p class="text-sm text-[#3A5D6A]">
                  Select each stage to inspect how usage compounds network intelligence.
                </p>
              </div>
              <span class="font-mono-tabular text-xs font-medium text-[#0C5F84]">
                Stage {{ activeStage().index }} / 04
              </span>
            </div>

            <!-- Interactive segmented selector -->
            <div class="grid grid-cols-2 gap-2 sm:grid-cols-4">
              @for (stage of flywheelStages; track stage.id) {
                <button
                  type="button"
                  (click)="selectedFlywheelId.set(stage.id)"
                  [class]="
                    selectedFlywheelId() === stage.id
                      ? 'rounded-xl bg-[#0C5F84] px-3 py-2.5 text-left text-xs font-semibold text-white transition-colors'
                      : 'rounded-xl border border-[#C4E2D8] bg-white px-3 py-2.5 text-left text-xs font-medium text-[#0B2530] hover:bg-[#E0F3EC] transition-colors'
                  "
                >
                  <div class="font-mono-tabular opacity-80">{{ stage.index }}</div>
                  <div class="mt-0.5 truncate">{{ stage.title }}</div>
                </button>
              }
            </div>

            <!-- Active stage detail panel -->
            <div class="rounded-xl border border-[#C4E2D8] bg-white p-6 space-y-3">
              <div class="flex items-center justify-between gap-4">
                <h4 class="font-display text-lg font-semibold text-[#0B2530]">
                  {{ activeStage().index }}. {{ activeStage().title }}
                </h4>
                <span class="text-xs font-medium text-[#0C5F84] whitespace-nowrap">
                  {{ activeStage().outcome }}
                </span>
              </div>
              <p class="text-sm font-medium text-[#0B2530]">
                {{ activeStage().summary }}
              </p>
              <p class="text-sm leading-relaxed text-[#3A5D6A]">
                {{ activeStage().detail }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Section 3: Asymmetric Bento Grid of Core Initiatives -->
    <section class="border-y border-[#C4E2D8] bg-[#ECF7F3]/70 py-16 lg:py-20">
      <div class="mx-auto max-w-[1200px] px-6 space-y-10">
        <div class="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div class="space-y-2 max-w-2xl">
            <p class="text-sm font-medium text-[#0C5F84]">02. Platform Architecture</p>
            <h2 class="font-display text-3xl font-semibold tracking-tight text-[#0B2530]">
              Four interlocking pillars of AshWave.
            </h2>
          </div>
          <p class="max-w-sm text-sm text-[#3A5D6A]">
            Every initiative brought over from AshWave works in concert—from native Layer-1 consensus
            to regulated bank chartering and consumer spending telemetry.
          </p>
        </div>

        <div class="grid gap-6 md:grid-cols-3">
          <!-- Featured Card 1: Kinetic Card & PoUW (col-span-2) -->
          <article
            class="md:col-span-2 grid overflow-hidden rounded-2xl border border-[#C4E2D8] bg-white sm:grid-cols-12"
          >
            <div class="sm:col-span-7 p-6 sm:p-8 flex flex-col justify-between space-y-5">
              <div class="space-y-3">
                <div class="text-xs font-medium text-[#0C5F84]">
                  Kinetic Financial Network · PoUW &amp; zkML
                </div>
                <h3 class="font-display text-2xl font-semibold text-[#0B2530]">
                  The Kinetic Card &amp; Dynamic Reputation
                </h3>
                <p class="text-sm leading-relaxed text-[#3A5D6A]">
                  Moves beyond historical debt scores to evaluate real-time economic behavior—income
                  cadence, payment reliability, and network participation—secured by client-outsourced
                  zk-SNARK credit proofs computed on Rust and Mojo consensus nodes.
                </p>
              </div>

              <div class="flex flex-wrap items-center gap-4 pt-2">
                <a
                  routerLink="/kinetic"
                  class="inline-flex items-center gap-2 rounded-lg bg-[#0C5F84] px-4 py-2 text-xs font-semibold text-white hover:bg-[#084561] transition-colors whitespace-nowrap shrink-0"
                >
                  <span>Inspect Kinetic System</span>
                  <mat-icon class="!text-[16px] !w-[16px] !h-[16px]">arrow_forward</mat-icon>
                </a>
                <a
                  routerLink="/patent"
                  class="text-xs font-semibold text-[#0C5F84] hover:underline whitespace-nowrap shrink-0"
                >
                  View 37 CFR 1.77 Patent Filing
                </a>
              </div>
            </div>

            <div class="sm:col-span-5 min-h-[220px] bg-gradient-to-br from-[#DDF3EB] to-[#CFEAF4]">
              <img
                [src]="images.kineticCard"
                alt="Frosted seafoam and ocean-blue Kinetic Card resting on sunlit coastal sandstone"
                referrerpolicy="no-referrer"
                class="h-full w-full object-cover"
              />
            </div>
          </article>

          <!-- Card 2: GenAI De Novo Bank (col-span-1) -->
          <article class="flex flex-col justify-between rounded-2xl border border-[#C4E2D8] bg-[#E0F3EC] p-6 sm:p-8 space-y-6">
            <div class="space-y-3">
              <div class="text-xs font-medium text-[#0C5F84]">
                AI Banking · South Dakota Charter
              </div>
              <h3 class="font-display text-2xl font-semibold text-[#0B2530]">
                GenAI De Novo Bank Chartering
              </h3>
              <p class="text-sm leading-relaxed text-[#3A5D6A]">
                Comparative analysis across South Dakota, Utah, and Wyoming—pairing 0% state corporate
                income tax and usury exportation with LLM-accelerated charter execution that lowers
                drafting costs from ~$850K to ~$165K.
              </p>
            </div>

            <div class="space-y-4">
              <div class="grid grid-cols-2 gap-3 border-t border-[#B7DDD0] pt-4 text-xs">
                <div>
                  <div class="text-[#3A5D6A]">Timeline Target</div>
                  <div class="font-mono-tabular font-semibold text-[#0B2530]">6–9 Months</div>
                </div>
                <div>
                  <div class="text-[#3A5D6A]">IDP Accuracy</div>
                  <div class="font-mono-tabular font-semibold text-[#0B2530]">99% Extraction</div>
                </div>
              </div>

              <a
                routerLink="/ai-banking"
                class="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-white px-4 py-2.5 text-xs font-semibold text-[#0B2530] border border-[#B7DDD0] hover:bg-[#F6FBF9] transition-colors"
              >
                <span>Open Charter Navigator</span>
                <mat-icon class="!text-[16px] !w-[16px] !h-[16px]">arrow_forward</mat-icon>
              </a>
            </div>
          </article>

          <!-- Card 3: SeaWeed App (col-span-1) -->
          <article class="flex flex-col overflow-hidden rounded-2xl border border-[#C4E2D8] bg-white">
            <div class="aspect-[4/3] w-full bg-gradient-to-br from-[#E2F5EE] to-[#F7F2E7]">
              <img
                [src]="images.seaweedApp"
                alt="Minimalist mobile device on coastal stone representing SeaWeed real-time spending analysis"
                referrerpolicy="no-referrer"
                class="h-full w-full object-cover"
              />
            </div>
            <div class="flex flex-1 flex-col justify-between p-6 space-y-4">
              <div class="space-y-2">
                <div class="text-xs font-medium text-[#0C5F84]">
                  SeaWeed App · Google Play
                </div>
                <h3 class="font-display text-xl font-semibold text-[#0B2530]">
                  Real-Time Spending Clarity
                </h3>
                <p class="text-sm leading-relaxed text-[#3A5D6A]">
                  SeaWeed analyzes your spending in real time, surfacing category velocity, recurring
                  commitments, and cashflow balance before statements close.
                </p>
              </div>
              <a
                routerLink="/ecosystem"
                class="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0C5F84] hover:underline"
              >
                <span>Explore SeaWeed Companion</span>
                <mat-icon class="!text-[15px] !w-[15px] !h-[15px]">arrow_forward</mat-icon>
              </a>
            </div>
          </article>

          <!-- Card 4: AshCoin on SteelChain (col-span-2) -->
          <article
            class="md:col-span-2 grid overflow-hidden rounded-2xl border border-[#C4E2D8] bg-white sm:grid-cols-12"
          >
            <div class="sm:col-span-5 min-h-[220px] bg-gradient-to-br from-[#D7F0E7] to-[#CBE7F2]">
              <img
                [src]="images.steelChainWave"
                alt="Translucent seafoam mint and ocean blue wave glass sculpture representing SteelChain Layer-1"
                referrerpolicy="no-referrer"
                class="h-full w-full object-cover"
              />
            </div>

            <div class="sm:col-span-7 p-6 sm:p-8 flex flex-col justify-between space-y-5">
              <div class="space-y-3">
                <div class="text-xs font-medium text-[#0C5F84]">
                  AshCoin on SteelChain · Parity Substrate &amp; Rust
                </div>
                <h3 class="font-display text-2xl font-semibold text-[#0B2530]">
                  Standalone Layer-1 Built From Scratch in Rust
                </h3>
                <p class="text-sm leading-relaxed text-[#3A5D6A]">
                  SteelChain is an independent Layer-1 blockchain engineered from the ground up using
                  Parity’s Substrate framework and Rust—delivering memory-safe runtime execution,
                  modular consensus pallets, and native support for AshCoin settlement.
                </p>
              </div>

              <div class="flex flex-wrap items-center gap-4 pt-2">
                <a
                  routerLink="/ecosystem"
                  class="inline-flex items-center gap-2 rounded-lg border border-[#C4E2D8] bg-[#ECF7F3] px-4 py-2 text-xs font-semibold text-[#0B2530] hover:bg-[#DDF2EA] transition-colors whitespace-nowrap shrink-0"
                >
                  <span>Inspect SteelChain &amp; Wave</span>
                  <mat-icon class="!text-[16px] !w-[16px] !h-[16px]">arrow_forward</mat-icon>
                </a>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>

    <!-- Section 4: Balance Wave Philosophy (ZoeWave / AshWave) -->
    <section class="mx-auto max-w-[1200px] px-6 py-16 lg:py-20">
      <div class="rounded-2xl border border-[#C4E2D8] bg-gradient-to-br from-[#ECF7F3] via-[#F6FBF9] to-[#E8F4FA] p-6 sm:p-10">
        <div class="grid gap-10 lg:grid-cols-12 lg:items-center">
          <div class="lg:col-span-5 space-y-4">
            <p class="text-sm font-medium text-[#0C5F84]">03. Balance Wave Philosophy</p>
            <h2 class="font-display text-3xl font-semibold tracking-tight text-[#0B2530]">
              Find your balance between flow and finality.
            </h2>
            <p class="text-sm leading-relaxed text-[#3A5D6A]">
              AshWave is rooted in a dual coastal principle: <strong class="text-[#0B2530]">ZoeWave</strong>
              embodies life and water—liquidity, continuous work, and inclusive circulation—while
              <strong class="text-[#0B2530]">AshWave</strong> embodies fire and renewal—pruning systemic
              waste, enforcing cryptographic truth, and distilling risk into resilient capital.
            </p>
            <div class="pt-2 flex items-center gap-3">
              <button
                type="button"
                (click)="waveMode.set('zoe')"
                [class]="
                  waveMode() === 'zoe'
                    ? 'rounded-lg bg-[#0C5F84] px-4 py-2 text-xs font-semibold text-white transition-colors'
                    : 'rounded-lg border border-[#C4E2D8] bg-white px-4 py-2 text-xs font-semibold text-[#0B2530] hover:bg-[#E0F3EC] transition-colors'
                "
              >
                ZoeWave · Life / Water
              </button>
              <button
                type="button"
                (click)="waveMode.set('ash')"
                [class]="
                  waveMode() === 'ash'
                    ? 'rounded-lg bg-[#0C5F84] px-4 py-2 text-xs font-semibold text-white transition-colors'
                    : 'rounded-lg border border-[#C4E2D8] bg-white px-4 py-2 text-xs font-semibold text-[#0B2530] hover:bg-[#E0F3EC] transition-colors'
                "
              >
                AshWave · Renewal / Fire
              </button>
            </div>
          </div>

          <div class="lg:col-span-7">
            <div class="rounded-xl border border-[#C4E2D8] bg-white p-6 space-y-4">
              <div class="flex items-center justify-between">
                <span class="font-display text-lg font-semibold text-[#0B2530]">
                  {{ waveMode() === 'zoe' ? 'ZoeWave — Life &amp; Ocean Current' : 'AshWave — Fire &amp; Cryptographic Renewal' }}
                </span>
                <span class="text-xs font-medium text-[#0C5F84]">
                  {{ waveMode() === 'zoe' ? 'Fluidity &amp; Access' : 'Discipline &amp; Proof' }}
                </span>
              </div>

              <p class="text-sm leading-relaxed text-[#3A5D6A]">
                @if (waveMode() === 'zoe') {
                  Water carries energy across shorelines without friction. In financial terms,
                  ZoeWave powers continuous credit visibility for freelancers, real-time SeaWeed
                  spending awareness, and open developer rails where economic participation circulates freely.
                } @else {
                  Fire clears away inefficiency so durable ecosystems can thrive. AshWave replaces
                  wasteful Proof-of-Work hash burning with Proof of Useful Work, enforces zero-knowledge
                  privacy over sensitive financial witnesses, and reduces bank formation friction.
                }
              </p>

              <!-- Minimal coastal wave harmonic visualization -->
              <svg
                viewBox="0 0 600 96"
                class="w-full h-24 rounded-lg bg-[#F6FBF9] border border-[#DCEEE7]"
                aria-hidden="true"
              >
                <path
                  d="M0 54 Q 75 20, 150 54 T 300 54 T 450 54 T 600 54"
                  fill="none"
                  [attr.stroke]="waveMode() === 'zoe' ? '#2596CA' : '#7FD8BE'"
                  stroke-width="3"
                  stroke-linecap="round"
                />
                <path
                  d="M0 44 Q 75 78, 150 44 T 300 44 T 450 44 T 600 44"
                  fill="none"
                  [attr.stroke]="waveMode() === 'ash' ? '#E9A84C' : '#48B89F'"
                  stroke-width="2.5"
                  stroke-linecap="round"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Section 5: Contact & Partner Inquiry -->
    <section id="contact" class="border-t border-[#C4E2D8] bg-white py-16 lg:py-20">
      <div class="mx-auto max-w-[1200px] px-6">
        <div class="grid gap-12 lg:grid-cols-12">
          <div class="lg:col-span-5 space-y-5">
            <p class="text-sm font-medium text-[#0C5F84]">04. Contact &amp; Partnerships</p>
            <h2 class="font-display text-3xl font-semibold tracking-tight text-[#0B2530]">
              Connect with AshWave.
            </h2>
            <p class="text-sm leading-relaxed text-[#3A5D6A]">
              Collaborate on Kinetic Financial Network infrastructure, institutional zkML credit
              underwriting, South Dakota de novo charter research, or SteelChain developer tooling.
            </p>

            <div class="space-y-3 border-t border-[#DCEEE7] pt-5 text-sm">
              <div>
                <div class="text-xs text-[#3A5D6A]">Inventor &amp; Principal</div>
                <div class="font-medium text-[#0B2530]">Siamak Ashrafi · Swift Monster (California, US)</div>
              </div>
              <div>
                <div class="text-xs text-[#3A5D6A]">Research &amp; Whitepaper</div>
                <a
                  [href]="links.kineticPaper"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="font-medium text-[#0C5F84] hover:underline"
                >
                  zoewave.medium.com/ashwave-kinetic-financial-network
                </a>
              </div>
            </div>
          </div>

          <div class="lg:col-span-7">
            @if (submitted()) {
              <div class="rounded-2xl border border-[#9CD8C5] bg-[#ECF7F3] p-8 space-y-4">
                <div class="flex items-center gap-3 text-[#0C5F84]">
                  <mat-icon>check_circle</mat-icon>
                  <h3 class="font-display text-xl font-semibold text-[#0B2530]">
                    Inquiry recorded for {{ submittedName() }}
                  </h3>
                </div>
                <p class="text-sm leading-relaxed text-[#3A5D6A]">
                  Thank you for reaching out regarding <strong class="text-[#0B2530]">{{ submittedTopic() }}</strong>.
                  Your message brief has been prepared and logged locally for review.
                </p>
                <button
                  type="button"
                  (click)="resetForm()"
                  class="inline-flex items-center gap-2 rounded-lg border border-[#C4E2D8] bg-white px-4 py-2 text-xs font-semibold text-[#0B2530] hover:bg-[#E0F3EC] transition-colors"
                >
                  <mat-icon class="!text-[16px] !w-[16px] !h-[16px]">refresh</mat-icon>
                  <span>Send Another Inquiry</span>
                </button>
              </div>
            } @else {
              <form
                [formGroup]="contactForm"
                (ngSubmit)="onSubmit()"
                class="rounded-2xl border border-[#C4E2D8] bg-[#F6FBF9] p-6 sm:p-8 space-y-5"
                novalidate
              >
                <div class="grid gap-4 sm:grid-cols-2">
                  <div class="space-y-1.5">
                    <label for="contact-name" class="block text-xs font-semibold text-[#0B2530]">
                      Full Name
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      formControlName="name"
                      placeholder="Alex Rivera"
                      class="w-full rounded-lg border border-[#C4E2D8] bg-white px-3.5 py-2.5 text-sm text-[#0B2530] placeholder:text-[#7FA0AB] focus:border-[#0C5F84] focus:outline-none"
                    />
                    @if (contactForm.controls.name.touched && contactForm.controls.name.invalid) {
                      <p class="text-xs text-[#9A3412]">Please enter your name (at least 2 characters).</p>
                    }
                  </div>

                  <div class="space-y-1.5">
                    <label for="contact-email" class="block text-xs font-semibold text-[#0B2530]">
                      Email Address
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      formControlName="email"
                      placeholder="alex@institution.com"
                      class="w-full rounded-lg border border-[#C4E2D8] bg-white px-3.5 py-2.5 text-sm text-[#0B2530] placeholder:text-[#7FA0AB] focus:border-[#0C5F84] focus:outline-none"
                    />
                    @if (contactForm.controls.email.touched && contactForm.controls.email.invalid) {
                      <p class="text-xs text-[#9A3412]">Please enter a valid email address.</p>
                    }
                  </div>
                </div>

                <div class="grid gap-4 sm:grid-cols-2">
                  <div class="space-y-1.5">
                    <label for="contact-org" class="block text-xs font-semibold text-[#0B2530]">
                      Organization
                    </label>
                    <input
                      id="contact-org"
                      type="text"
                      formControlName="organization"
                      placeholder="Coastal Capital / Partner"
                      class="w-full rounded-lg border border-[#C4E2D8] bg-white px-3.5 py-2.5 text-sm text-[#0B2530] placeholder:text-[#7FA0AB] focus:border-[#0C5F84] focus:outline-none"
                    />
                  </div>

                  <div class="space-y-1.5">
                    <label for="contact-topic" class="block text-xs font-semibold text-[#0B2530]">
                      Focus Area
                    </label>
                    <select
                      id="contact-topic"
                      formControlName="topic"
                      class="w-full rounded-lg border border-[#C4E2D8] bg-white px-3.5 py-2.5 text-sm text-[#0B2530] focus:border-[#0C5F84] focus:outline-none"
                    >
                      <option value="Kinetic Financial Network">Kinetic Financial Network</option>
                      <option value="GenAI De Novo Bank Charter">GenAI De Novo Bank Charter</option>
                      <option value="PoUW & zkML Patent Licensing">PoUW &amp; zkML Patent Licensing</option>
                      <option value="SteelChain & SeaWeed">SteelChain &amp; SeaWeed</option>
                    </select>
                  </div>
                </div>

                <div class="space-y-1.5">
                  <label for="contact-message" class="block text-xs font-semibold text-[#0B2530]">
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    rows="3"
                    formControlName="message"
                    placeholder="Share how you would like to collaborate with AshWave..."
                    class="w-full rounded-lg border border-[#C4E2D8] bg-white px-3.5 py-2.5 text-sm text-[#0B2530] placeholder:text-[#7FA0AB] focus:border-[#0C5F84] focus:outline-none"
                  ></textarea>
                  @if (contactForm.controls.message.touched && contactForm.controls.message.invalid) {
                    <p class="text-xs text-[#9A3412]">Please include a short note (10+ characters).</p>
                  }
                </div>

                <div class="flex items-center justify-between gap-4 pt-1">
                  <span class="text-xs text-[#3A5D6A]">Direct response from the AshWave team.</span>
                  <button
                    type="submit"
                    class="inline-flex items-center gap-2 rounded-xl bg-[#0C5F84] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#084561] whitespace-nowrap shrink-0"
                  >
                    <mat-icon class="!text-[18px] !w-[18px] !h-[18px]">send</mat-icon>
                    <span>Send Inquiry</span>
                  </button>
                </div>
              </form>
            }
          </div>
        </div>
      </div>
    </section>
  `,
})
export class Overview {
  private readonly hostRef = inject(ElementRef<HTMLElement>);

  readonly images = ASH_IMAGES;
  readonly links = EXTERNAL_LINKS;
  readonly kpis = HERO_KPIS;
  readonly flywheelStages = FLYWHEEL_STAGES;

  readonly selectedFlywheelId = signal<string>('users');
  readonly waveMode = signal<'zoe' | 'ash'>('zoe');
  readonly submitted = signal(false);
  readonly submittedName = signal('');
  readonly submittedTopic = signal('');

  readonly activeStage = computed(() => {
    const id = this.selectedFlywheelId();
    return this.flywheelStages.find((s) => s.id === id) ?? this.flywheelStages[0];
  });

  readonly contactForm = new FormGroup({
    name: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required, Validators.minLength(2)],
    }),
    email: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required, Validators.email],
    }),
    organization: new FormControl('', {nonNullable: true}),
    topic: new FormControl('Kinetic Financial Network', {nonNullable: true}),
    message: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required, Validators.minLength(10)],
    }),
  });

  constructor() {
    afterNextRender(() => {
      if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        return;
      }
      const items = this.hostRef.nativeElement.querySelectorAll('.hero-stagger > *');
      if (items.length > 0) {
        animate(
          items,
          {opacity: [0.85, 1], y: [10, 0]},
          {delay: stagger(0.06), duration: 0.45, ease: 'easeOut'},
        );
      }
    });
  }

  onSubmit(): void {
    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();
      return;
    }
    const {name, topic} = this.contactForm.getRawValue();
    this.submittedName.set(name);
    this.submittedTopic.set(topic);
    this.submitted.set(true);
  }

  resetForm(): void {
    this.submitted.set(false);
    this.contactForm.reset({
      name: '',
      email: '',
      organization: '',
      topic: 'Kinetic Financial Network',
      message: '',
    });
  }
}
