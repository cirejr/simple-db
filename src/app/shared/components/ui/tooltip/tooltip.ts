import { computed, Directive, input } from '@angular/core';
import { cn } from '@app/core/utils/cn';
import { NgpTooltip, NgpTooltipTrigger, NgpTooltipArrow } from 'ng-primitives/tooltip';

@Directive({
  selector: '[ui-tooltip-trigger]',
  hostDirectives: [
    {
      directive: NgpTooltipTrigger,
      inputs: [
        'ngpTooltipTrigger:trigger',
        'ngpTooltipTriggerPlacement:placement',
        'ngpTooltipTriggerDisabled:disabled',
        'ngpTooltipTriggerOffset:offset',
        'ngpTooltipTriggerShowDelay:showDelay',
        'ngpTooltipTriggerHideDelay:hideDelay',
        'ngpTooltipTriggerFlip:flip',
        'ngpTooltipTriggerContainer:container',
        'ngpTooltipTriggerShowOnOverflow:showOnOverflow',
        'ngpTooltipTriggerContext:context',
      ],
    },
  ],
  host: {
    'data-slot': 'tooltip-trigger',
  },
})
class TooltipTrigger {
  constructor() {}
}
@Directive({
  selector: '[ui-tooltip-content]',
  hostDirectives: [
    {
      directive: NgpTooltip,
    },
  ],
  host: {
    'data-slot': 'tooltip-content',
    '[class]': 'className()',
  },
})
class TooltipContent {
  readonly class = input<string>('');
  readonly className = computed(() =>
    cn(
      'absolute bg-primary text-primary-foreground animate-in fade-in-0 zoom-in-95 data-[exit]:animate-out data-[exit]:fade-out-0 data-[exit]:zoom-out-95 data-[placement=bottom]:slide-in-from-top-2 data-[placement=left]:slide-in-from-right-2 data-[placement=right]:slide-in-from-left-2 data-[placement=top]:slide-in-from-bottom-2 z-50 w-fit origin-(--ngp-tooltip-transform-origin) rounded-md px-3 py-1.5 text-xs text-balance',
      this.class()
    )
  );
  constructor() {}
}

@Directive({
  selector: '[ui-tooltip-arrow]',
  hostDirectives: [
    {
      directive: NgpTooltipArrow,
    },
  ],
  host: {
    'data-slot': 'tooltip-arrow',
    style:
      'position: absolute; pointer-events: none; width: 8px; height: 8px; border-radius: 2px; transform: rotate(45deg);',
  },
})
class TooltipContentArrow {
  constructor() {}
}

export { TooltipContent, TooltipContentArrow, TooltipTrigger };
