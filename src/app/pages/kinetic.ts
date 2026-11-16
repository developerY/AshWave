import {ChangeDetectionStrategy, Component, signal} from '@angular/core';
import {RouterLink} from '@angular/router';
import {MatIconModule} from '@angular/material/icon';
import {ASH_IMAGES, EXTERNAL_LINKS, FLYWHEEL_STAGES} from '../data/ashwave-data';

@Component({
  selector: 'app-kinetic',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink, MatIconModule],
  template: `
    <!-- Header Band -->
    <section class="border-b border-[#C4E2D8] bg-gradient-to-b from-[#E3F5EE] to-[#F6FBF9] py-12 lg:py-16">
      <div class="mx-auto max-w-[1200px] px-6 grid gap-10 lg:grid-cols-12 lg:items-stretch">
        <div class="lg:col-span-7 flex flex-col justify-center space-y-5">
          <p class="text-sm font-medium text-[#0C5F84]">
            Kinetic Financial Network · System Overview
          </p>
          <h1 class="font-display text-4xl font-semibold tracking-tight text-[#0B2530] sm:text-5xl">
            Every transaction strengthens the financial infrastructure.
          </h1>
          <p class="text-base leading-relaxed text-[#3A5D6A]">
            The Kinetic Financial Network combines a consumer credit card, Proof of Useful Work
            blockchain consensus, artificial intelligence, and a dynamic credit reputation engine into a
            single self-improving financial operating system.
          </p>
          <div class="flex flex-wrap items-center gap-4 pt-1">
            <a
              routerLink="/patent"
              class="inline-flex items-center gap-2 rounded-xl bg-[#0C5F84] px-5 py-3 text-sm font-semibold text-white hover:bg-[#084561] transition-colors whitespace-nowrap shrink-0"
            >
              <span>Inspect PoUW Patent &amp; zkML</span>
              <mat-icon class="!text-[18px] !w-[18px] !h-[18px]">arrow_forward</mat-icon>
            </a>
            <a
              [href]="links.kineticPaper"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center gap-2 rounded-xl border border-[#C4E2D8] bg-white px-5 py-3 text-sm font-semibold text-[#0B2530] hover:bg-[#E0F3EC] transition-colors whitespace-nowrap shrink-0"
            >
              <span>Read Full Paper on Medium</span>
              <mat-icon class="!text-[16px] !w-[16px] !h-[16px]">north_east</mat-icon>
            </a>
          </div>
        </div>

        <div class="lg:col-span-5">
          <div class="h-full min-h-[250px] overflow-hidden rounded-2xl border border-[#C4E2D8] bg-[#E0F3EC]">
            <img
              [src]="images.kineticCard"
              alt="Frosted mint and ocean-blue Kinetic Card on sunlit beach stone"
              referrerpolicy="no-referrer"
              class="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- Architecture Layers Interactive Selector -->
    <section class="mx-auto max-w-[1200px] px-6 py-16 space-y-10">
      <div class="max-w-2xl space-y-2">
        <p class="text-sm font-medium text-[#0C5F84]">01. Four-Layer Architecture</p>
        <h2 class="font-display text-3xl font-semibold tracking-tight text-[#0B2530]">
          How card, consensus, AI, and developers connect.
        </h2>
      </div>

      <div class="grid gap-6 lg:grid-cols-12">
        <div class="lg:col-span-4 flex flex-col gap-2">
          @for (layer of architectureLayers; track layer.id) {
            <button
              type="button"
              (click)="activeLayerId.set(layer.id)"
              [class]="
                activeLayerId() === layer.id
                  ? 'rounded-xl bg-[#0C5F84] p-4 text-left text-white transition-colors'
                  : 'rounded-xl border border-[#C4E2D8] bg-white p-4 text-left text-[#0B2530] hover:bg-[#ECF7F3] transition-colors'
              "
            >
              <div class="text-xs font-mono-tabular opacity-80">{{ layer.kicker }}</div>
              <div class="mt-1 font-display text-base font-semibold">{{ layer.title }}</div>
            </button>
          }
        </div>

        <div class="lg:col-span-8">
          @for (layer of architectureLayers; track layer.id) {
            @if (activeLayerId() === layer.id) {
              <div class="h-full rounded-2xl border border-[#C4E2D8] bg-white p-6 sm:p-8 space-y-5">
                <div class="flex flex-wrap items-center justify-between gap-2 border-b border-[#DCEEE7] pb-4">
                  <h3 class="font-display text-2xl font-semibold text-[#0B2530]">
                    {{ layer.title }}
                  </h3>
                  <span class="font-mono-tabular text-xs font-medium text-[#0C5F84]">
                    {{ layer.stack }}
                  </span>
                </div>
                <p class="text-[15px] leading-relaxed text-[#3A5D6A]">
                  {{ layer.description }}
                </p>
                <div class="grid gap-4 sm:grid-cols-2 pt-2">
                  @for (point of layer.highlights; track point.label) {
                    <div class="rounded-xl bg-[#F6FBF9] border border-[#DCEEE7] p-4 space-y-1">
                      <div class="text-xs font-semibold text-[#0C5F84]">{{ point.label }}</div>
                      <div class="text-sm text-[#0B2530]">{{ point.value }}</div>
                    </div>
                  }
                </div>
              </div>
            }
          }
        </div>
      </div>
    </section>

    <!-- Dynamic Credit Reputation vs Traditional Credit Bureaus -->
    <section class="border-y border-[#C4E2D8] bg-[#ECF7F3] py-16">
      <div class="mx-auto max-w-[1200px] px-6 space-y-8">
        <div class="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div class="max-w-2xl space-y-2">
            <p class="text-sm font-medium text-[#0C5F84]">02. Dynamic Financial Reputation</p>
            <h2 class="font-display text-3xl font-semibold tracking-tight text-[#0B2530]">
              From backward debt history to real-time participation.
            </h2>
          </div>

          <div class="inline-flex rounded-xl border border-[#C4E2D8] bg-white p-1 shrink-0">
            <button
              type="button"
              (click)="creditView.set('kinetic')"
              [class]="
                creditView() === 'kinetic'
                  ? 'rounded-lg bg-[#0C5F84] px-3.5 py-2 text-xs font-semibold text-white whitespace-nowrap'
                  : 'rounded-lg px-3.5 py-2 text-xs font-medium text-[#3A5D6A] hover:text-[#0B2530] whitespace-nowrap'
              "
            >
              Kinetic Reputation
            </button>
            <button
              type="button"
              (click)="creditView.set('legacy')"
              [class]="
                creditView() === 'legacy'
                  ? 'rounded-lg bg-[#0C5F84] px-3.5 py-2 text-xs font-semibold text-white whitespace-nowrap'
                  : 'rounded-lg px-3.5 py-2 text-xs font-medium text-[#3A5D6A] hover:text-[#0B2530] whitespace-nowrap'
              "
            >
              Traditional Bureaus
            </button>
          </div>
        </div>

        <div class="grid gap-6 md:grid-cols-2">
          <div class="rounded-2xl border border-[#C4E2D8] bg-white p-6 sm:p-8 space-y-4">
            <div class="text-xs font-medium text-[#0C5F84]">Core Question Asked</div>
            <h3 class="font-display text-2xl font-semibold text-[#0B2530]">
              @if (creditView() === 'kinetic') {
                “How is this person participating in the economy today?”
              } @else {
                “What has this person borrowed and owed in the past?”
              }
            </h3>
            <p class="text-sm leading-relaxed text-[#3A5D6A]">
              @if (creditView() === 'kinetic') {
                Kinetic evaluates verified real-time economic behavior—income cadence, payment
                reliability, freelance &amp; entrepreneurial cashflows, spending discipline, and
                network participation—without exposing sensitive PII via zkML proofs.
              } @else {
                Traditional credit bureaus rely on static historical debt ledgers and centralized PII
                databases, routinely overlooking freelancers, gig workers, founders, and thin-file
                participants with strong live cashflows.
              }
            </p>
          </div>

          <div class="rounded-2xl border border-[#C4E2D8] bg-white p-6 sm:p-8 space-y-4">
            <div class="text-xs font-medium text-[#0C5F84]">Evaluation Signals</div>
            <ul class="space-y-3 text-sm">
              @if (creditView() === 'kinetic') {
                <li class="flex items-start gap-2.5 text-[#0B2530]">
                  <mat-icon class="!text-[18px] !w-[18px] !h-[18px] text-[#0C5F84] mt-0.5">verified</mat-icon>
                  <span>Real-time income rhythm &amp; verified freelance / merchant inflows</span>
                </li>
                <li class="flex items-start gap-2.5 text-[#0B2530]">
                  <mat-icon class="!text-[18px] !w-[18px] !h-[18px] text-[#0C5F84] mt-0.5">verified</mat-icon>
                  <span>Zero-knowledge proof verification without exposing raw statements</span>
                </li>
                <li class="flex items-start gap-2.5 text-[#0B2530]">
                  <mat-icon class="!text-[18px] !w-[18px] !h-[18px] text-[#0C5F84] mt-0.5">verified</mat-icon>
                  <span>Elastic credit limits that expand automatically as fraud risk declines</span>
                </li>
              } @else {
                <li class="flex items-start gap-2.5 text-[#3A5D6A]">
                  <mat-icon class="!text-[18px] !w-[18px] !h-[18px] text-[#8FA8B2] mt-0.5">history</mat-icon>
                  <span>30-to-90 day delayed bureau reporting cycles</span>
                </li>
                <li class="flex items-start gap-2.5 text-[#3A5D6A]">
                  <mat-icon class="!text-[18px] !w-[18px] !h-[18px] text-[#8FA8B2] mt-0.5">history</mat-icon>
                  <span>Centralized raw PII storage vulnerable to large-scale breaches</span>
                </li>
                <li class="flex items-start gap-2.5 text-[#3A5D6A]">
                  <mat-icon class="!text-[18px] !w-[18px] !h-[18px] text-[#8FA8B2] mt-0.5">history</mat-icon>
                  <span>Penalizes thin-file entrepreneurs &amp; debt-averse cash earners</span>
                </li>
              }
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- PoW vs PoUW Comparison Table & Flywheel Summary -->
    <section class="mx-auto max-w-[1200px] px-6 py-16 space-y-10">
      <div class="max-w-2xl space-y-2">
        <p class="text-sm font-medium text-[#0C5F84]">03. Consensus &amp; Developer Ecosystem</p>
        <h2 class="font-display text-3xl font-semibold tracking-tight text-[#0B2530]">
          Proof of Useful Work vs. Legacy Hash Mining.
        </h2>
      </div>

      <div class="overflow-x-auto rounded-2xl border border-[#C4E2D8] bg-white">
        <table class="w-full text-left text-sm">
          <thead class="border-b border-[#C4E2D8] bg-[#ECF7F3] text-xs font-semibold text-[#0B2530]">
            <tr>
              <th class="px-6 py-4">Dimension</th>
              <th class="px-6 py-4">Traditional PoW (SHA-256)</th>
              <th class="px-6 py-4 text-[#0C5F84]">Kinetic PoUW (zkML + R1CS)</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-[#E3F1EC] text-[#3A5D6A]">
            <tr>
              <td class="px-6 py-4 font-medium text-[#0B2530]">Computational Work</td>
              <td class="px-6 py-4">Arbitrary nonce hash inequalities</td>
              <td class="px-6 py-4 text-[#0B2530] font-medium">Encrypted credit underwriting &amp; AI training</td>
            </tr>
            <tr>
              <td class="px-6 py-4 font-medium text-[#0B2530]">Economic Utility</td>
              <td class="px-6 py-4">0% external economic output</td>
              <td class="px-6 py-4 font-mono-tabular text-[#0C5F84] font-semibold">98%+ useful AI &amp; risk compute</td>
            </tr>
            <tr>
              <td class="px-6 py-4 font-medium text-[#0B2530]">Verification Latency</td>
              <td class="px-6 py-4">Hash check only; no privacy proof</td>
              <td class="px-6 py-4 font-mono-tabular text-[#0B2530] font-medium">&lt; 5 ms non-interactive zk-SNARK check</td>
            </tr>
            <tr>
              <td class="px-6 py-4 font-medium text-[#0B2530]">Quantum Posture</td>
              <td class="px-6 py-4">Quadratic speedup exposure via Grover’s algorithm</td>
              <td class="px-6 py-4 text-[#0B2530] font-medium">Asymmetric linear algebra &amp; matrix security</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        @for (stage of flywheelStages; track stage.id) {
          <div class="rounded-2xl border border-[#C4E2D8] bg-[#F6FBF9] p-5 space-y-2">
            <div class="font-mono-tabular text-xs font-semibold text-[#0C5F84]">{{ stage.index }}</div>
            <h3 class="font-display text-base font-semibold text-[#0B2530]">{{ stage.title }}</h3>
            <p class="text-xs leading-relaxed text-[#3A5D6A]">{{ stage.summary }}</p>
          </div>
        }
      </div>
    </section>
  `,
})
export class Kinetic {
  readonly images = ASH_IMAGES;
  readonly links = EXTERNAL_LINKS;
  readonly flywheelStages = FLYWHEEL_STAGES;

  readonly activeLayerId = signal('card');
  readonly creditView = signal<'kinetic' | 'legacy'>('kinetic');

  readonly architectureLayers = [
    {
      id: 'card',
      kicker: 'Layer 01 · Entry Interface',
      title: 'The Kinetic Card & Mobile Wallet',
      stack: 'Jetpack Compose · SwiftUI · DIDs',
      description:
        'A physical and virtual payment card backed by native Android and iOS wallets storing cryptographic key pairs and decentralized identifiers. Every tap rewards the cardholder while feeding anonymized, verifiable economic rhythm into the network.',
      highlights: [
        {label: 'User Experience', value: 'Tap, pay, and earn adaptive rewards'},
        {label: 'Client Security', value: 'Client-side witness encryption before mempool'},
      ],
    },
    {
      id: 'blockchain',
      kicker: 'Layer 02 · Trust & Consensus',
      title: 'Proof of Useful Work Blockchain',
      stack: 'Rust · Mojo · zk-SNARK R1CS',
      description:
        'Consensus nodes compete to mine blocks not by burning energy on meaningless SHA-256 puzzles, but by executing neural network matrix multiplications and generating verifiable zk-SNARK proofs over encrypted borrower data.',
      highlights: [
        {label: 'Asymmetry', value: 'Heavy proof synthesis, <5ms peer verification'},
        {label: 'Freshness', value: 'Bound to prior block header hash against replays'},
      ],
    },
    {
      id: 'ai',
      kicker: 'Layer 03 · Intelligence Engine',
      title: 'Compounding AI Risk & Underwriting',
      stack: 'zkML · Fraud Defense · Dynamic Limits',
      description:
        'Continuous network activity sharpens fraud detection, personalizes financial workflows, and updates dynamic credit limits. Lower risk directly lowers operating costs—creating a compounding structural advantage.',
      highlights: [
        {label: 'Privacy Guarantee', value: 'Scores verified without decrypting PII'},
        {label: 'Target Earners', value: 'Freelancers, gig workers, creators, founders'},
      ],
    },
    {
      id: 'developers',
      kicker: 'Layer 04 · Open Platform',
      title: 'Third-Party Developer Ecosystem',
      stack: 'Smart Contracts · Identity · Payroll',
      description:
        'Transforms Kinetic from an isolated card issuer into an open financial operating system where builders compose business financing, automated savings, parametric insurance, payroll, and treasury applications.',
      highlights: [
        {label: 'Composable Primitives', value: 'Payments, DIDs, zkML credit gates'},
        {label: 'Network Effect', value: 'Every external app increases shared reputation value'},
      ],
    },
  ];
}
