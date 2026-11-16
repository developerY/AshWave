import {ChangeDetectionStrategy, Component} from '@angular/core';
import {RouterLink} from '@angular/router';
import {MatIconModule} from '@angular/material/icon';
import {EXTERNAL_LINKS} from '../data/ashwave-data';

@Component({
  selector: 'app-site-footer',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink, MatIconModule],
  template: `
    <footer class="border-t border-[#C4E2D8] bg-[#ECF7F3]">
      <div class="mx-auto max-w-[1200px] px-6 py-12">
        <div class="grid gap-10 md:grid-cols-4">
          <div class="md:col-span-2 space-y-3">
            <div class="flex items-center gap-2.5 text-lg font-semibold text-[#0B2530]">
              <svg
                width="24"
                height="18"
                viewBox="0 0 26 20"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M2 13.5C5.2 8.2 9.2 8.2 12.6 13.5C15.8 18.4 19.8 18.4 24 12"
                  stroke="#0C5F84"
                  stroke-width="2.2"
                  stroke-linecap="round"
                />
                <path
                  d="M2 8C5.4 3.2 9.4 3.2 12.8 8C16 12.4 20 12.4 24 6.5"
                  stroke="#48B89F"
                  stroke-width="2.2"
                  stroke-linecap="round"
                />
              </svg>
              <span class="font-display">AshWave</span>
            </div>
            <p class="max-w-md text-sm leading-relaxed text-[#3A5D6A]">
              Blockchain &amp; Artificial Intelligence in Fintech. Building the Kinetic Financial
              Network, Proof of Useful Work consensus, AI-native banking architecture, and
              SteelChain Layer-1 infrastructure.
            </p>
            <p class="text-xs text-[#3A5D6A]">
              California, US · Swift Monster · AshWave Financial Architecture
            </p>
          </div>

          <div class="space-y-3">
            <h3 class="text-sm font-semibold text-[#0B2530]">Architecture</h3>
            <ul class="space-y-2 text-sm text-[#3A5D6A]">
              <li>
                <a routerLink="/kinetic" class="hover:text-[#0C5F84] transition-colors">
                  Kinetic Financial Network
                </a>
              </li>
              <li>
                <a routerLink="/ai-banking" class="hover:text-[#0C5F84] transition-colors">
                  GenAI De Novo Banking
                </a>
              </li>
              <li>
                <a routerLink="/patent" class="hover:text-[#0C5F84] transition-colors">
                  PoUW &amp; zkML Patent
                </a>
              </li>
              <li>
                <a routerLink="/ecosystem" class="hover:text-[#0C5F84] transition-colors">
                  SteelChain, SeaWeed &amp; Wave
                </a>
              </li>
            </ul>
          </div>

          <div class="space-y-3">
            <h3 class="text-sm font-semibold text-[#0B2530]">Publications &amp; Channels</h3>
            <ul class="space-y-2 text-sm text-[#3A5D6A]">
              <li>
                <a
                  [href]="links.kineticPaper"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="inline-flex items-center gap-1.5 hover:text-[#0C5F84] transition-colors"
                >
                  <span>Kinetic Paper on Medium</span>
                  <mat-icon class="!text-[15px] !w-[15px] !h-[15px]">north_east</mat-icon>
                </a>
              </li>
              <li>
                <a
                  [href]="links.zoeWave"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="inline-flex items-center gap-1.5 hover:text-[#0C5F84] transition-colors"
                >
                  <span>ZoeWave Philosophy</span>
                  <mat-icon class="!text-[15px] !w-[15px] !h-[15px]">north_east</mat-icon>
                </a>
              </li>
              <li>
                <a
                  routerLink="/"
                  fragment="contact"
                  class="hover:text-[#0C5F84] transition-colors"
                >
                  Contact &amp; Partnerships
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div
          class="mt-10 flex flex-col gap-3 border-t border-[#C4E2D8] pt-6 text-xs text-[#3A5D6A] sm:flex-row sm:items-center sm:justify-between"
        >
          <span>© 2026 AshWave · Kinetic Financial Network. All rights reserved.</span>
          <span>ZoeWave (Life / Water) · AshWave (Renewal / Fire)</span>
        </div>
      </div>
    </footer>
  `,
})
export class SiteFooter {
  readonly links = EXTERNAL_LINKS;
}
