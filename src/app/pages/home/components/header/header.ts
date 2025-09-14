import { Component, computed, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { cn } from '@app/core/utils/cn';
import { Button } from '@app/shared/components/ui/button/button';
import { DashedPlusBox } from '@app/shared/components/ui/dashed-plus-box/dashed-plus-box';

@Component({
  selector: 'svg[github-logo]',
  template: ` <svg [class]="className()" viewBox="0 0 20 20">
    <path
      d="M10 0C4.475 0 0 4.475 0 10a9.994 9.994 0 006.838 9.488c.5.087.687-.213.687-.476 0-.237-.013-1.024-.013-1.862-2.512.463-3.162-.612-3.362-1.175-.113-.287-.6-1.175-1.025-1.412-.35-.188-.85-.65-.013-.663.788-.013 1.35.725 1.538 1.025.9 1.512 2.337 1.087 2.912.825.088-.65.35-1.088.638-1.338-2.225-.25-4.55-1.112-4.55-4.937 0-1.088.387-1.987 1.025-2.688-.1-.25-.45-1.274.1-2.65 0 0 .837-.262 2.75 1.026a9.28 9.28 0 012.5-.338c.85 0 1.7.112 2.5.337 1.912-1.3 2.75-1.024 2.75-1.024.55 1.375.2 2.4.1 2.65.637.7 1.025 1.587 1.025 2.687 0 3.838-2.337 4.688-4.562 4.938.362.312.675.912.675 1.85 0 1.337-.013 2.412-.013 2.75 0 .262.188.574.688.474A10.016 10.016 0 0020 10c0-5.525-4.475-10-10-10z"
    />
  </svg>`,
})
export class GithubLogo {
  class = input<string>('');

  className = computed(() => cn('', this.class()));
}

@Component({
  selector: 'app-header',
  imports: [GithubLogo, RouterLink, DashedPlusBox],
  template: `
    <div class="">
      <div class="flex h-14 items-center justify-between gap-8 px-4 sm:px-6">
        <div class="flex items-center gap-4">
          <a
            routerLink="/"
            class="shrink-0 group relative p-2 text-emerald-800 dark:text-emerald-300"
            aria-label="Home"
          >
            <dashed-plus-box> SimpleDB </dashed-plus-box>
          </a>
        </div>
        <div class="flex items-center gap-6 max-md:hidden">
          <!--  <SearchButton class="inline-flex items-center gap-1 rounded-full bg-gray-950/2 px-2 py-1 inset-ring inset-ring-gray-950/8 dark:bg-white/5 dark:inset-ring-white/2">
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

            <kbd class="hidden font-sans text-xs/4 text-gray-500 dark:text-gray-400 [.os-macos_&]:block">⌘K</kbd>
            <kbd class="hidden font-sans text-xs/4 text-gray-500 not-[.os-macos_&]:block dark:text-gray-400">
              Ctrl&nbsp;K
            </kbd>
          </SearchButton> -->
          <!-- <a routerLink="/dashboard" class="text-sm/6 text-gray-950 dark:text-white"> Dashboard </a> -->
          <a routerLink="/auth/login" class="text-sm/6 text-gray-950 dark:text-white"> Login </a>
          <!--  <a
            routerLink="/plus?ref=top"
            class="group relative px-1.5 text-sm/6 text-sky-800 dark:text-sky-300"
          >
            <span
              class="absolute inset-0 border border-dashed border-emerald-300/60 bg-emerald-400-600/10 group-hover:bg-emerald-400/15 dark:border-emerald-300/30"
            ></span>
            Plus
            <svg
              width="5"
              height="5"
              viewBox="0 0 5 5"
              class="absolute top-[-2px] left-[-2px] fill-sky-300 dark:fill-emerald-300/50"
            >
              <path d="M2 0h1v2h2v1h-2v2h-1v-2h-2v-1h2z" />
            </svg>
            <svg
              width="5"
              height="5"
              viewBox="0 0 5 5"
              class="absolute top-[-2px] right-[-2px] fill-sky-300 dark:fill-emerald-300/50"
            >
              <path d="M2 0h1v2h2v1h-2v2h-1v-2h-2v-1h2z" />
            </svg>
            <svg
              width="5"
              height="5"
              viewBox="0 0 5 5"
              class="absolute bottom-[-2px] left-[-2px] fill-sky-300 dark:fill-emerald-300/50"
            >
              <path d="M2 0h1v2h2v1h-2v2h-1v-2h-2v-1h2z" />
            </svg>
            <svg
              width="5"
              height="5"
              viewBox="0 0 5 5"
              class="absolute right-[-2px] bottom-[-2px] fill-sky-300 dark:fill-emerald-300/50"
            >
              <path d="M2 0h1v2h2v1h-2v2h-1v-2h-2v-1h2z" />
            </svg>
          </a> -->

          <a routerLink="https://github.com/cirejr" aria-label="GitHub repository">
            <svg github-logo class="size-5 fill-black/40 dark:fill-gray-400"></svg>
          </a>
        </div>
        <div class="flex items-center gap-2.5 md:hidden">
          <!-- <SearchButton aria-label="Search" class="inline-grid size-7 place-items-center rounded-md">
            <svg viewBox="0 0 16 16" fill="currentColor" class="size-4">
              <path
                fillRule="evenodd"
                d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                clipRule="evenodd"
              />
            </svg>
          </SearchButton> -->

          <!--  <IconButton aria-label="Navigation" onClick={() => setNavIsOpen(!navIsOpen)}>
            <svg viewBox="0 0 16 16" fill="currentColor" class="size-4">
              <path d="M8 2a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM8 6.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM9.5 12.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0Z" />
            </svg>
          </IconButton> -->

          <!--  <Dialog
            open={navIsOpen}
            onClose={() => setNavIsOpen(false)}
            class="fixed inset-0 bg-white focus:outline-none md:hidden dark:bg-gray-950"
          >
            <DialogPanel class="size-full overflow-y-auto">
              <div class="flex h-14 items-center justify-between px-4 py-4 sm:px-6">
                <TailwindMark class="h-6" />
                <IconButton aria-label="Navigation" onClick={() => setNavIsOpen(false)}>
                  <svg viewBox="0 0 16 16" fill="currentColor" class="size-4">
                    <path d="M5.28 4.22a.75.75 0 0 0-1.06 1.06L6.94 8l-2.72 2.72a.75.75 0 1 0 1.06 1.06L8 9.06l2.72 2.72a.75.75 0 1 0 1.06-1.06L9.06 8l2.72-2.72a.75.75 0 0 0-1.06-1.06L8 6.94 5.28 4.22Z" />
                  </svg>
                </IconButton>
              </div>
              <div class="grid grid-cols-1 gap-1 px-1 pb-1 sm:px-3 sm:pb-3">
                <a ui-button
                  href="/docs"
                  class="rounded-lg px-3 py-2 text-xl/9 font-medium text-gray-950 data-active:bg-gray-950/5 dark:text-white dark:hover:bg-white/10"
                >
                  Docs
                </a>
                <a
                  href="/plus/?ref=top"
                  class="rounded-lg px-3 py-2 text-xl/9 font-medium text-gray-950 data-active:bg-gray-950/5 dark:text-white dark:hover:bg-white/10"
                >
                  Plus
                </a>
                <a ui-button
                  href="/blog"
                  class="rounded-lg px-3 py-2 text-xl/9 font-medium text-gray-950 data-active:bg-gray-950/5 dark:text-white dark:hover:bg-white/10"
                >
                  Blog
                </a>
                <a ui-button
                  href="/showcase"
                  class="rounded-lg px-3 py-2 text-xl/9 font-medium text-gray-950 data-active:bg-gray-950/5 dark:text-white dark:hover:bg-white/10"
                >
                  Showcase
                </a>
                <a ui-button
                  href="/sponsor"
                  class="rounded-lg px-3 py-2 text-xl/9 font-medium text-gray-950 data-active:bg-gray-950/5 dark:text-white dark:hover:bg-white/10"
                >
                  Sponsor
                </a>
                <a ui-button
                  href="https://github.com/tailwindlabs/tailwindcss"
                  class="rounded-lg px-3 py-2 text-xl/9 font-medium text-gray-950 data-active:bg-gray-950/5 dark:text-white dark:hover:bg-white/10"
                >
                  GitHub
                </a>
              </div>
            </DialogPanel>
          </Dialog> -->
        </div>
      </div>
    </div>
  `,
  styleUrl: './header.css',
})
export class Header {}
