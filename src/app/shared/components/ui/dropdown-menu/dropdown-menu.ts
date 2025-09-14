import { NgIcon, provideIcons } from '@ng-icons/core';
import { Button } from '@app/shared/components/ui/button/button';
import { Component, computed, Directive, input } from '@angular/core';
import { cn } from '@app/core/utils/cn';
import { remixArrowRightSLine } from '@ng-icons/remixicon';
import { NgpMenu, NgpMenuItem, NgpMenuTrigger, NgpSubmenuTrigger } from 'ng-primitives/menu';

@Directive({
  selector: '[appDropdownMenu]',
})
export class DropdownMenu {
  constructor() {}
}

@Component({
  selector: 'ui-dropdown-menu',
  hostDirectives: [NgpMenu],
  template: ` <ng-content /> `,
})
class DropdownMenuComponent {}

@Directive({
  selector: '[ui-dropdown-menu-trigger]',
  hostDirectives: [
    {
      directive: NgpMenuTrigger,
      inputs: [
        'ngpMenuTrigger:trigger',
        'ngpMenuTriggerDisabled: disabled',
        'ngpMenuTriggerPlacement: position',
        'ngpMenuTriggerOffset: offset',
        'ngpMenuTriggerFlip: flip',
        'ngpMenuTriggerContainer: container',
        'ngpMenuTriggerScrollBehavior:scrollBehavior',
        'ngpMenuTriggerContext: context',
      ],
    },
  ],
})
class DropdownMenuTrigger {}

@Directive({
  selector: 'button[ui-dropdown-menu-sub-trigger]',
  hostDirectives: [
    {
      directive: NgpSubmenuTrigger,
      inputs: [
        'ngpSubmenuTrigger: trigger',
        'ngpSubmenuTriggerDisabled: disabled',
        'ngpSubmenuTriggerPlacement: position',
        'ngpSubmenuTriggerOffset: offset',
        'ngpSubmenuTriggerFlip: flip',
      ],
    },
  ],
  host: {
    '[class]': 'className()',
    'data-slot': 'dropdown-menu-sub-trigger',
  },
})
class DropdownSubMenuTrigger {
  readonly class = input<string>('');

  readonly className = computed(() =>
    cn(
      'hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground data-[enter]:bg-accent data-[enter]:text-accent-foreground flex cursor-pointer items-center rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[inset]:pl-8',
      this.class()
    )
  );
}

@Directive({
  selector: '[ui-dropdown-menu-content]',
  hostDirectives: [NgpMenu],
  host: {
    '[class]': 'className()',
    'data-slot': 'dropdown-menu-content',
  },
})
class DropdownMenuContent {
  readonly class = input<string>('');

  readonly className = computed(() =>
    cn(
      'bg-popover text-popover-foreground animate-in fade-in-0 zoom-in-95 fixed flex min-w-[8rem] origin-[var-(--ngp-menu-transform-origin)] flex-col overflow-hidden rounded-md border p-1 shadow-lg border  p-1 shadow-lg ',
      this.class()
    )
  );
}

@Directive({
  selector: '[ui-dropdown-menu-sub-content]',
  hostDirectives: [NgpMenu],
  host: {
    '[class]': 'className()',
    'data-slot': 'dropdown-menu-sub-content',
  },
})
class DropdownMenuSubContent {
  readonly class = input<string>('');

  readonly className = computed(() =>
    cn(
      'bg-popover text-popover-foreground animate-in fade-in-0 zoom-in-95 fixed flex min-w-[8rem] origin-[var-(--ngp-popover-transform-origin)] flex-col overflow-hidden rounded-md border p-1 shadow-lg border  p-1 shadow-lg ',
      this.class()
    )
  );
}

@Directive({
  selector: 'button[ui-dropdown-menu-item]',
  hostDirectives: [{ directive: NgpMenuItem, inputs: ['ngpMenuItemDisabled: disabled'] }],
  host: {
    '[class]': 'className()',
    'data-slot': 'dropdown-menu-item',
    '[attr.data-variant]': 'variant()',
    '[attr.data-inset]': 'inset()',
  },
})
class DropdownMenuItem {
  readonly class = input<string>('');
  readonly variant = input<'default' | 'destructive'>('default');
  readonly inset = input<boolean>();
  readonly className = computed(() =>
    cn(
      "hover:bg-accent hover:text-accent-foreground data-[variant=destructive]:text-destructive data-[variant=destructive]:hover:bg-destructive/10 dark:data-[variant=destructive]:focus:bg-destructive/20 data-[variant=destructive]:focus:text-destructive data-[variant=destructive]:*:[svg]:!text-destructive [&_svg:not([class*='text-'])]:text-muted-foreground relative flex cursor-pointer items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
      this.class()
    )
  );
}

@Directive({
  selector: '[ui-dropdown-menu-separator]',
  exportAs: 'ui-dropdown-menu-separator',
  host: {
    '[class]': 'className()',
    'data-slot': 'dropdown-menu-separator',
  },
})
class DropdownMenuSeparator {
  readonly class = input<string>('');
  readonly className = computed(() => cn('bg-border -mx-1 my-1 h-px', this.class()));
}

export {
  DropdownMenuComponent,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownSubMenuTrigger,
  DropdownMenuSubContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
};
