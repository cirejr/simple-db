import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from '@app/pages/home/components/header/header';
import { Hero } from '@app/pages/home/components/hero/hero';

@Component({
  selector: 'app-home-layout',
  imports: [RouterOutlet, Header],
  template: `
    <div class="max-w-screen overflow-x-hidden dark bg-background">
      <div class="fixed inset-x-0 top-0 z-10 border-b border-black/5 dark:border-white/10">
        <app-header class="backdrop-blur-md"></app-header>
      </div>
      <div
        class="grid min-h-dvh grid-cols-1 grid-rows-[1fr_1px_auto_1px_auto] justify-center pt-14.25 [--gutter-width:2.5rem] md:-mx-4 md:grid-cols-[var(--gutter-width)_minmax(0,var(--breakpoint-2xl))_var(--gutter-width)] lg:mx-0"
      >
        <!-- Candy cane -->
        <div
          class="col-start-1 row-span-full row-start-1 hidden border-x border-x-(--pattern-fg) bg-[image:repeating-linear-gradient(315deg,_var(--pattern-fg)_0,_var(--pattern-fg)_1px,_transparent_0,_transparent_50%)] bg-[size:10px_10px] bg-fixed [--pattern-fg:var(--color-black)]/5 md:block dark:[--pattern-fg:var(--color-white)]/10"
        ></div>

        <!-- Main content area -->
        <div
          grid-container
          class="grid gap-14 pb-24 text-gray-950 sm:gap-20 md:pb-20 dark:text-white"
        >
          <router-outlet />

          <!--  <Hero />
      <PartnersSection />
      <WhyTailwindCssSection />
      <ExplainerSection />
      <BuildAnythingSection />
      <TailwindUiSection /> -->
        </div>

        <!--  /* Candy cane */ -->
        <div
          class="row-span-full row-start-1 hidden border-x border-x-(--pattern-fg) bg-[image:repeating-linear-gradient(315deg,_var(--pattern-fg)_0,_var(--pattern-fg)_1px,_transparent_0,_transparent_50%)] bg-[size:10px_10px] bg-fixed [--pattern-fg:var(--color-black)]/5 md:col-start-3 md:block dark:[--pattern-fg:var(--color-white)]/10"
        ></div>

        <div grid-container direction="full" class="col-start-1 row-start-3 md:col-start-2">
          <!-- <FooterSitemap class="*:first:border-l-0 *:last:border-r-0" /> -->
        </div>

        <div class="col-start-1 row-start-5 grid md:col-start-2">
          <!-- <FooterMeta class="px-4 md:px-6 lg:px-8" /> -->
        </div>
      </div>
      <div class="fixed!" aria-hidden="true">
        <input type="text" tabIndex="{-1}" />
      </div>
    </div>
  `,
  styleUrl: './home-layout.css',
})
export class HomeLayout {}
