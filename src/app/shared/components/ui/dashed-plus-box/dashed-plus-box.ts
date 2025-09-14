import { Component } from '@angular/core';

@Component({
  selector: 'dashed-plus-box',
  imports: [],
  template: `
    <!-- add "group relative" on parent component -->
    <span
      class="absolute inset-0 border border-dashed border-emerald-300/60 bg-emerald-400-600/10 group-hover:bg-emerald-400/15 dark:border-emerald-300/30"
    ></span>
    <ng-content />
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
  `,
  styleUrl: './dashed-plus-box.css',
})
export class DashedPlusBox {}
