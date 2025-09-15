import { Component, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { NgIcon, provideIcons } from '@ng-icons/core';
import {
  remixArrowRightSLine,
  remixDashboard3Line,
  remixLogoutCircleLine,
  remixSideBarLine,
} from '@ng-icons/remixicon';
import { Separator } from '@app/shared/components/ui/separator/separator';
import { Button } from '@app/shared/components/ui/button/button';
import { Badge } from '@app/shared/components/ui/badge/badge';
import { Avatar } from '@app/shared/components/ui/avatar/avatar';
import { AvatarImage, AvatarFallback } from '../../components/ui/avatar/avatar';
import {
  DropdownMenuComponent,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownSubMenuTrigger,
  DropdownMenuSubContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from '../../components/ui/dropdown-menu/dropdown-menu';

@Component({
  selector: 'app-dashboard-layout',
  imports: [
    RouterOutlet,
    NgIcon,
    RouterLink,
    Separator,
    Badge,
    Avatar,
    AvatarImage,
    AvatarFallback,
    DropdownMenuTrigger,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    Button,
    DropdownSubMenuTrigger,
    DropdownMenuSubContent,
  ],
  providers: [
    provideIcons({
      remixSideBarLine,
      remixDashboard3Line,
      remixLogoutCircleLine,
      remixArrowRightSLine,
    }),
  ],

  template: `
    <div class="flex h-dvh w-full overflow-x-hidden">
      <div
        data-slot="sidebar"
        class="bg-sidebar border-sidebar-border transition-all ease-in-out duration-300 flex flex-col p-4 overflow-x-hidden relative overflow-y-scroll no-scrollbar"
        [class]="isOpen() ? 'w-48 border-r' : 'w-0 -ml-10 opacity-0'"
      >
        <div data-slot="sidebar-header">
          <a routerLink="/">SimpleDB</a>
        </div>
        <div data-slot="sidebar-content" class="pt-8">
          <a
            class="flex items-center gap-1.5 rounded-sm hover:bg-accent px-2 py-1 text-sm"
            routerLink="dashboard"
          >
            <ng-icon name="remixDashboard3Line" />
            dashboard
          </a>
        </div>

        <div data-slot="sidebar-footer" class="bottom-0 absolute">
          <a
            class="flex items-center gap-1.5 rounded-sm hover:bg-accent px-2 py-1 text-sm w-[160px]"
            routerLink="dashboard"
          >
            <ng-icon name="remixLogoutCircleLine" />
            Log out
          </a>
        </div>
      </div>
      <div data-slot="main-content" class="flex flex-1 flex-col">
        <div
          data-slot="dashboard-header"
          class="border-b w-full h-16 flex px-4 gap-2 items-center justify-between"
        >
          <div class="flex gap-2 items-center h-8">
            <button
              ui-button
              data-slot="sidebar-trigger"
              size="icon"
              variant="ghost"
              class="cursor-pointer"
              (click)="toggleSidebar()"
            >
              <ng-icon name="remixSideBarLine" />
            </button>
            <span ui-separator orientation="vertical" class="max-h-6 mr-2"></span>
            <h1>Project title</h1>
          </div>
          <div class="flex items-center gap-3.5">
            <div class="flex gap-2 items-center" ui-badge variant="outline" class="rounded-full">
              <span class="size-1.5 rounded-full bg-emerald-500"></span> ALL OK
            </div>
            <button ui-dropdown-menu-trigger class="rounded-full" [trigger]="menu">
              <ui-avatar>
                <img src="https://github.com/cirejr.png" alt="" ui-avatar-image />
                <span ui-avatar-fallback>CJ</span>
              </ui-avatar>
            </button>

            <ng-template #menu>
              <div ui-dropdown-menu-content>
                <button ui-dropdown-menu-item>Item 1</button>
                <span ui-dropdown-menu-separator></span>
                <button ui-dropdown-menu-item>Item 2</button>
                <span ui-dropdown-menu-separator></span>
                <button ui-dropdown-menu-item ui-dropdown-menu-sub-trigger [trigger]="submenu">
                  Item 3
                  <ng-icon name="remixArrowRightSLine" />
                </button>
              </div>
            </ng-template>

            <ng-template #submenu>
              <div ui-dropdown-menu-sub-content>
                <button ui-dropdown-menu-item>Item 1</button>
                <button ui-dropdown-menu-item>Item 2</button>
                <button ui-dropdown-menu-item>Item 3</button>
              </div>
            </ng-template>
          </div>
        </div>
        <div class="@container flex-1">
          <router-outlet />
        </div>
      </div>
    </div>
  `,
  styleUrl: './dashboard-layout.css',
})
export class DashboardLayout {
  readonly isOpen = signal<boolean>(false);

  toggleSidebar() {
    this.isOpen.update((prevValue) => !prevValue);
  }
}
