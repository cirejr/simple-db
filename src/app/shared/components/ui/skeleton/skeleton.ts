import { computed, Directive, input } from '@angular/core';
import { cn } from '@app/core/utils/cn';

@Directive({
  selector: '[ui-skeleton]',
  host: {
    '[class]': 'className()',
    '[attr.data-slot]': 'slot()',
  },
})
export class Skeleton {
  readonly class = input<string>('');
  readonly slot = input<string>('skeleton');

  className = computed(() => cn('bg-accent animate-pulse rounded-md', this.class()));
  constructor() {}
}
