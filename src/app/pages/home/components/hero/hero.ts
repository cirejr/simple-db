import { Component } from '@angular/core';
import { Button } from '@app/shared/components/ui/button/button';
import { GridContainer } from '@app/shared/directives/grid-container';

@Component({
  selector: 'app-hero',
  imports: [GridContainer, Button],
  template: `
    <div>
      <div
        aria-hidden="true"
        class="flex h-16 items-end px-2 font-mono text-xs/6 whitespace-pre text-black/20 max-sm:px-4 sm:h-24 dark:text-white/25"
      >
        <span class="lg:max-xl:inline">simpledb-init </span>
        <span class=" lg:max-xl:inline">engine=postgres </span>
        <span class=" lg:max-xl:inline">version=15.3 </span>
        <span class=" xl:inline">region=us-east-1 </span>
        <span class=" dark:hidden"> scale=free-tier </span>
      </div>
      <div grid-container>
        <h1
          class="px-2 text-4xl tracking-tighter text-balance max-lg:font-medium max-sm:px-4 sm:text-5xl lg:text-6xl xl:text-8xl"
        >
          The <span class="font-mono italic text-emerald-300">Simplest</span> way to spin up
          powerful databases in seconds.
        </h1>
      </div>
      <div
        aria-hidden="true"
        class="flex h-6 items-end px-2 font-mono text-xs/6 whitespace-pre text-black/20 max-sm:px-4 sm:h-10 dark:text-white/25"
      >
        project=new-db<span class="inline dark:hidden">mode=developer</span>
        <span class="hidden dark:inline"> auth=enabled</span> status=active
      </div>
      <div grid-container>
        <p
          class="max-w-(--breakpoint-md) px-2 text-lg/7 font-medium text-gray-600 max-sm:px-4 dark:text-gray-400"
        >
          A developer-friendly platform to
          <span class="font-mono text-[1.0625rem] text-emerald-500 dark:text-emerald-400"
            >create</span
          >,

          <span class="font-mono text-[1.0625rem] text-emerald-500 dark:text-emerald-400"
            >manage</span
          >
          and
          <span class="font-mono text-[1.0625rem] text-emerald-500 dark:emerald-sky-400"
            >scale</span
          >
          Postgres databases with ease. From tables to APIs, everything you need is just a click
          away.
        </p>
      </div>
      <div grid-container class="mt-10 px-4 sm:hidden">
        <a href="docs/installation" class="z-1 w-full text-center"> Get started </a>
      </div>
      <div grid-container class="mt-4 sm:mt-10 sm:px-2">
        <div class="flex gap-4 max-sm:px-4">
          <a
            ui-button
            href="docs/installation"
            variant="secondary"
            class="z-1 max-sm:hidden rounded-full"
          >
            Get started
          </a>
          <!-- <SearchButton
          class="grid w-full grid-cols-[auto_1fr_auto] items-center gap-1 rounded-full px-4 py-2 text-left text-sm/6 text-gray-950/50 inset-ring inset-ring-gray-950/8 sm:w-80 dark:bg-white/5 dark:text-white/50 dark:inset-ring-white/15"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            class="-ml-0.5 size-4 fill-gray-600 dark:fill-gray-500"
          >
            <path
              fillRule="evenodd"
              d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
              clipRule="evenodd"
            />
          </svg>
          Quick search
          <kbd
            class="hidden font-sans text-xs/4 text-gray-500 dark:text-gray-400 [.os-macos_&]:block"
          >
            <span class="opacity-60">⌘</span>K
          </kbd>
          <kbd
            class="hidden font-sans text-xs/4 text-gray-500 not-[.os-macos_&]:block dark:text-gray-400"
          >
            <span class="opacity-60">Ctrl</span>&nbsp;K
          </kbd>
        </SearchButton> -->
        </div>
      </div>
    </div>
  `,
  styleUrl: './hero.css',
})
export class Hero {}
