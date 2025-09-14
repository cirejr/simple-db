import { computed, Directive, input } from '@angular/core';
import { cn } from '@app/core/utils/cn';
import { NgpSeparator } from 'ng-primitives/separator';

@Directive({
  selector: '[ui-separator]',
  hostDirectives: [
    {
      directive: NgpSeparator,
      inputs: ['ngpSeparatorOrientation:orientation'],
    },
  ],
  host: {
    'attr.data-slot': 'separator',
    '[class]': 'className()',
  },
})
export class Separator {
  readonly class = input<string>('');

  readonly className = computed(() =>
    cn(
      'bg-border shrink-0 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px',
      this.class()
    )
  );
  constructor() {}
}
