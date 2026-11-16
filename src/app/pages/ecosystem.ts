import {ChangeDetectionStrategy, Component, computed, signal} from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {ASH_IMAGES, EXTERNAL_LINKS} from '../data/ashwave-data';

@Component({
  selector: 'app-ecosystem',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [MatIconModule],
  template: `
    <!-- Header Band -->
    <section class="border-b border-[#C4E2D8] bg-gradient-to-b from-[#E3F5EE] to-[#F6FBF9] py-12 lg:py-16">
      <div class="mx-auto max-w-[1200px] px-6 space-y-5">
        <p class="text-sm font-medium text-[#0C5F84]">
          AshWave Ecosystem · SteelChain, SeaWeed &amp; Balance Wave
        </p>
        <h1 class="font-display max-w-3xl text-4xl font-semibold tracking-tight text-[#0B2530] sm:text-5xl">
          Layer-1 infrastructure, live spending intelligence, and coastal balance.
        </h1>
        <p class="max-w-2xl text-base leading-relaxed text-[#3A5D6A]">
          Explore the standalone SteelChain blockchain powering AshCoin, the SeaWeed real-time
          spending companion app, and the ZoeWave / AshWave dual philosophy.
        </p>
      </div>
    </section>

    <!-- AshCoin on SteelChain -->
    <section class="mx-auto max-w-[1200px] px-6 py-16">
      <div class="grid gap-10 lg:grid-cols-12 lg:items-stretch">
        <div class="lg:col-span-6">
          <div class="h-full min-h-[280px] overflow-hidden rounded-2xl border border-[#C4E2D8] bg-[#E0F3EC]">
            <img
              [src]="images.steelChainWave"
              alt="Sculptural seafoam mint and ocean-blue glass waves representing SteelChain Layer-1"
              referrerpolicy="no-referrer"
              class="h-full w-full object-cover"
            />
          </div>
        </div>

        <div class="lg:col-span-6 flex flex-col justify-center space-y-5">
          <p class="text-sm font-medium text-[#0C5F84]">01. AshCoin on SteelChain</p>
          <h2 class="font-display text-3xl font-semibold tracking-tight text-[#0B2530]">
            Standalone Layer-1 blockchain built from scratch in Rust.
          </h2>
          <p class="text-[15px] leading-relaxed text-[#3A5D6A]">
            SteelChain is an independent Layer-1 blockchain engineered from the ground up using
            Parity’s Substrate framework and the Rust programming language—avoiding fragile smart
            contract forks in favor of deterministic, memory-safe runtime execution.
          </p>

          <div class="grid gap-4 sm:grid-cols-2 pt-2">
            <div class="rounded-xl border border-[#C4E2D8] bg-white p-4 space-y-1">
              <div class="text-xs font-semibold text-[#0C5F84]">Runtime Language</div>
              <div class="font-display text-lg font-semibold text-[#0B2530]">Rust &amp; Substrate</div>
              <div class="text-xs text-[#3A5D6A]">Memory-safe, modular pallet execution</div>
            </div>
            <div class="rounded-xl border border-[#C4E2D8] bg-white p-4 space-y-1">
              <div class="text-xs font-semibold text-[#0C5F84]">Native Settlement Asset</div>
              <div class="font-display text-lg font-semibold text-[#0B2530]">AshCoin</div>
              <div class="text-xs text-[#3A5D6A]">Block rewards &amp; network fee settlement</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- SeaWeed Real-Time Spending Analyzer -->
    <section class="border-y border-[#C4E2D8] bg-[#ECF7F3] py-16">
      <div class="mx-auto max-w-[1200px] px-6 grid gap-10 lg:grid-cols-12 lg:items-center">
        <div class="lg:col-span-6 space-y-5">
          <p class="text-sm font-medium text-[#0C5F84]">02. SeaWeed App · Google Play Store</p>
          <h2 class="font-display text-3xl font-semibold tracking-tight text-[#0B2530]">
            SeaWeed analyzes your spending in real time.
          </h2>
          <p class="text-[15px] leading-relaxed text-[#3A5D6A]">
            Built as the everyday personal cashflow lens of the AshWave ecosystem, SeaWeed turns
            incoming transaction streams into clear, real-time spending awareness—surfacing burn
            rate, recurring commitments, and savings headroom the moment transactions occur.
          </p>

          <!-- Interactive Cashflow Horizon Selector -->
          <div class="rounded-2xl border border-[#C4E2D8] bg-white p-6 space-y-4">
            <div class="flex flex-wrap items-center justify-between gap-2">
              <span class="text-xs font-semibold text-[#0B2530]">
                Interactive Spending Cadence Preview
              </span>
              <div class="inline-flex rounded-lg border border-[#C4E2D8] bg-[#F6FBF9] p-1">
                <button
                  type="button"
                  (click)="seaweedHorizon.set('weekly')"
                  [class]="
                    seaweedHorizon() === 'weekly'
                      ? 'rounded-md bg-[#0C5F84] px-3 py-1 text-xs font-semibold text-white'
                      : 'rounded-md px-3 py-1 text-xs font-medium text-[#3A5D6A]'
                  "
                >
                  7-Day Flow
                </button>
                <button
                  type="button"
                  (click)="seaweedHorizon.set('monthly')"
                  [class]="
                    seaweedHorizon() === 'monthly'
                      ? 'rounded-md bg-[#0C5F84] px-3 py-1 text-xs font-semibold text-white'
                      : 'rounded-md px-3 py-1 text-xs font-medium text-[#3A5D6A]'
                  "
                >
                  30-Day Flow
                </button>
              </div>
            </div>

            <div class="space-y-3">
              @for (cat of spendingSnapshot(); track cat.label) {
                <div class="space-y-1">
                  <div class="flex items-center justify-between text-xs">
                    <span class="font-medium text-[#0B2530]">{{ cat.label }}</span>
                    <span class="font-mono-tabular text-[#0C5F84] font-semibold">
                      &#36;{{ cat.amount.toLocaleString('en-US') }} ({{ cat.pct }}%)
                    </span>
                  </div>
                  <div class="h-2 w-full overflow-hidden rounded-full bg-[#E3F1EC]">
                    <div
                      class="h-full rounded-full bg-[#2596CA] transition-all duration-300"
                      [style.width.%]="cat.pct"
                    ></div>
                  </div>
                </div>
              }
            </div>
          </div>
        </div>

        <div class="lg:col-span-6">
          <div class="overflow-hidden rounded-2xl border border-[#C4E2D8] bg-white">
            <img
              [src]="images.seaweedApp"
              alt="Mobile phone resting on sunlit coastal travertine next to sun-bleached driftwood"
              referrerpolicy="no-referrer"
              class="aspect-[4/3] w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- Balance Wave (ZoeWave & AshWave) -->
    <section class="mx-auto max-w-[1200px] px-6 py-16 space-y-8">
      <div class="max-w-2xl space-y-2">
        <p class="text-sm font-medium text-[#0C5F84]">03. Balance Wave</p>
        <h2 class="font-display text-3xl font-semibold tracking-tight text-[#0B2530]">
          Find Your Balance — ZoeWave &amp; AshWave.
        </h2>
        <p class="text-sm leading-relaxed text-[#3A5D6A]">
          Every sustainable financial network pairs expansion with discipline: life and water meet
          fire and renewal.
        </p>
      </div>

      <div class="grid gap-6 md:grid-cols-2">
        <article class="rounded-2xl border border-[#C4E2D8] bg-[#E8F6FA] p-6 sm:p-8 space-y-4">
          <div class="text-xs font-semibold text-[#0C5F84]">ZoeWave · Life / Water</div>
          <h3 class="font-display text-2xl font-semibold text-[#0B2530]">
            Vitality, Liquidity &amp; Continuous Flow
          </h3>
          <p class="text-sm leading-relaxed text-[#3A5D6A]">
            Represents living economic current—real-time cashflow visibility, open credit access for
            builders and independent earners, and fluid participation across borders.
          </p>
          <a
            [href]="links.zoeWave"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0C5F84] hover:underline"
          >
            <span>Visit zoewave.com</span>
            <mat-icon class="!text-[15px] !w-[15px] !h-[15px]">north_east</mat-icon>
          </a>
        </article>

        <article class="rounded-2xl border border-[#C4E2D8] bg-[#F7F2E7] p-6 sm:p-8 space-y-4">
          <div class="text-xs font-semibold text-[#0B2530]">AshWave · Death / Fire</div>
          <h3 class="font-display text-2xl font-semibold text-[#0B2530]">
            Pruning Waste &amp; Cryptographic Renewal
          </h3>
          <p class="text-sm leading-relaxed text-[#3A5D6A]">
            Represents refinement by fire—replacing wasteful hash puzzles with useful AI work,
            eliminating opaque intermediary drag, and forging verifiable cryptographic trust.
          </p>
          <a
            [href]="links.kineticPaper"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0C5F84] hover:underline"
          >
            <span>Read Kinetic Paper</span>
            <mat-icon class="!text-[15px] !w-[15px] !h-[15px]">north_east</mat-icon>
          </a>
        </article>
      </div>
    </section>
  `,
})
export class Ecosystem {
  readonly images = ASH_IMAGES;
  readonly links = EXTERNAL_LINKS;

  readonly seaweedHorizon = signal<'weekly' | 'monthly'>('weekly');

  readonly spendingSnapshot = computed(() => {
    if (this.seaweedHorizon() === 'weekly') {
      return [
        {label: 'Living & Essentials', amount: 420, pct: 48},
        {label: 'Mobility & Coastal Transit', amount: 185, pct: 21},
        {label: 'Automated Treasury Reserve', amount: 270, pct: 31},
      ];
    }
    return [
      {label: 'Living & Essentials', amount: 1840, pct: 46},
      {label: 'Mobility & Coastal Transit', amount: 720, pct: 18},
      {label: 'Automated Treasury Reserve', amount: 1440, pct: 36},
    ];
  });
}
