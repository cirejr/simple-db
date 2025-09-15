import { Component } from '@angular/core';
import { AlertDialogTrigger } from '@app/shared/components/ui/alert-dialog/alert-dialog';
import { NgIcon, provideIcons } from '@ng-icons/core';
import {
  remixApps2Line,
  remixDashboardLine,
  remixFolderTransferLine,
  remixMore2Line,
  remixSettings4Line,
  remixTerminalLine,
} from '@ng-icons/remixicon';
import { DropdownMenuTrigger } from '@app/shared/components/ui/dropdown-menu/dropdown-menu';
import {
  DropdownMenuContent,
  DropdownMenuItem,
} from '@app/shared/components/ui/dropdown-menu/dropdown-menu';
import { Button } from '@app/shared/components/ui/button/button';

@Component({
  selector: 'app-table-action',
  imports: [NgIcon, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem, Button],
  providers: [
    provideIcons({
      remixMore2Line,
      remixApps2Line,
      remixDashboardLine,
      remixTerminalLine,
      remixFolderTransferLine,
      remixSettings4Line,
    }),
  ],
  template: `
    <button ui-button ui-dropdown-menu-trigger [trigger]="action" variant="ghost" size="icon">
      <ng-icon name="remixMore2Line" />
    </button>

    <ng-template #action>
      <div ui-dropdown-menu-content>
        <button ui-dropdown-menu-item><ng-icon name="remixDashboardLine" /> Dashboard</button>
        <button ui-dropdown-menu-item><ng-icon name="remixTerminalLine" /> SQL Editor</button>
        <button ui-dropdown-menu-item>
          <ng-icon name="remixFolderTransferLine" /> Transfer project
        </button>
        <button ui-dropdown-menu-item><ng-icon name="remixSettings4Line" /> Settings</button>
      </div>
    </ng-template>
  `,
  styleUrl: './table-action.css',
})
export class TableAction {}
