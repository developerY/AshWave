import {ChangeDetectionStrategy, Component, signal} from '@angular/core';
import {RouterLink, RouterLinkActive} from '@angular/router';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-site-header',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink, RouterLinkActive, MatIconModule],
  template: `
    <header
      class="sticky top-0 z-40 border-b border-[#C4E2D8]/80 bg-[#F6FBF9]/90 backdrop-blur-md"
    >
      <div
        class="mx-auto flex max-w-[1200px] items-center justify-between gap-8 px-6 py-4"
      >
        <!-- Zone 1: Single clean wordmark -->
        <a
          routerLink="/"
          class="flex items-center gap-2.5 text-lg font-semibold tracking-tight text-[#0B2530] whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0C5F84] rounded-sm"
        >
          <svg
            width="26"
            height="20"
            viewBox="0 0 26 20"
            fill="none"
            aria-hidden="true"
            class="shrink-0"
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
        </a>

        <!-- Zone 2: 5 concise single-line text links -->
        <nav
          aria-label="Primary"
          class="hidden md:flex items-center gap-7 text-sm font-medium text-[#3A5D6A]"
        >
          <a
            routerLink="/"
            routerLinkActive="text-[#0B2530] underline decoration-[#0C5F84] decoration-2 underline-offset-8"
            [routerLinkActiveOptions]="{exact: true}"
            class="hover:text-[#0B2530] transition-colors whitespace-nowrap shrink-0"
          >
            Overview
          </a>
          <a
            routerLink="/kinetic"
            routerLinkActive="text-[#0B2530] underline decoration-[#0C5F84] decoration-2 underline-offset-8"
            class="hover:text-[#0B2530] transition-colors whitespace-nowrap shrink-0"
          >
            Kinetic Network
          </a>
          <a
            routerLink="/ai-banking"
            routerLinkActive="text-[#0B2530] underline decoration-[#0C5F84] decoration-2 underline-offset-8"
            class="hover:text-[#0B2530] transition-colors whitespace-nowrap shrink-0"
          >
            AI Banking
          </a>
          <a
            routerLink="/patent"
            routerLinkActive="text-[#0B2530] underline decoration-[#0C5F84] decoration-2 underline-offset-8"
            class="hover:text-[#0B2530] transition-colors whitespace-nowrap shrink-0"
          >
            Patent &amp; zkML
          </a>
          <a
            routerLink="/ecosystem"
            routerLinkActive="text-[#0B2530] underline decoration-[#0C5F84] decoration-2 underline-offset-8"
            class="hover:text-[#0B2530] transition-colors whitespace-nowrap shrink-0"
          >
            Ecosystem
          </a>
        </nav>

        <!-- Zone 3: 1 primary CTA + mobile drawer button -->
        <div class="flex items-center gap-3 shrink-0">
          <a
            routerLink="/"
            fragment="contact"
            class="hidden md:inline-flex items-center gap-2 rounded-lg bg-[#0C5F84] px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-[#084561] whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0C5F84]"
          >
            <mat-icon class="!text-[18px] !w-[18px] !h-[18px] leading-none">mail_outline</mat-icon>
            <span>Partner Inquiry</span>
          </a>

          <button
            type="button"
            (click)="mobileOpen.set(!mobileOpen())"
            [attr.aria-expanded]="mobileOpen()"
            aria-label="Toggle navigation menu"
            class="md:hidden inline-flex h-11 w-11 items-center justify-center rounded-lg border border-[#C4E2D8] bg-white text-[#0B2530]"
          >
            <mat-icon>{{ mobileOpen() ? 'close' : 'menu' }}</mat-icon>
          </button>
        </div>
      </div>

      @if (mobileOpen()) {
        <nav
          aria-label="Mobile Navigation"
          class="md:hidden border-t border-[#C4E2D8] bg-[#ECF7F3] px-6 py-4 flex flex-col gap-3 text-sm font-medium"
        >
          <a
            routerLink="/"
            (click)="mobileOpen.set(false)"
            class="py-2 text-[#0B2530]"
          >
            Overview
          </a>
          <a
            routerLink="/kinetic"
            (click)="mobileOpen.set(false)"
            class="py-2 text-[#0B2530]"
          >
            Kinetic Network
          </a>
          <a
            routerLink="/ai-banking"
            (click)="mobileOpen.set(false)"
            class="py-2 text-[#0B2530]"
          >
            AI Banking
          </a>
          <a
            routerLink="/patent"
            (click)="mobileOpen.set(false)"
            class="py-2 text-[#0B2530]"
          >
            Patent &amp; zkML
          </a>
          <a
            routerLink="/ecosystem"
            (click)="mobileOpen.set(false)"
            class="py-2 text-[#0B2530]"
          >
            Ecosystem
          </a>
          <a
            routerLink="/"
            fragment="contact"
            (click)="mobileOpen.set(false)"
            class="mt-1 inline-flex items-center justify-center gap-2 rounded-lg bg-[#0C5F84] px-4 py-2.5 text-sm font-medium text-white"
          >
            <mat-icon class="!text-[18px] !w-[18px] !h-[18px]">mail_outline</mat-icon>
            <span>Partner Inquiry</span>
          </a>
        </nav>
      }
    </header>
  `,
})
export class SiteHeader {
  readonly mobileOpen = signal(false);
}
