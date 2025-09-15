import { Component } from '@angular/core';
import {
  AlertDialogTrigger,
  AlertDialogOverlay,
  AlertDialog,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogHeader,
  AlertDialogFooter,
} from '@app/shared/components/ui/alert-dialog/alert-dialog';
import { ProjectForm } from '../../_components/project-form/project-form';
import { Separator } from '@app/shared/components/ui/separator/separator';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { Button } from '@app/shared/components/ui/button/button';

@Component({
  selector: 'app-create-project-dialog',
  imports: [
    Button,
    AlertDialogTrigger,
    AlertDialogOverlay,
    AlertDialog,
    AlertDialogDescription,
    AlertDialogHeader,
    ProjectForm,
    Separator,
    AlertDialogFooter,
    NgIcon,
  ],
  template: `
    <button ui-button class="rounded-full" ui-alert-dialog-trigger [dialogTrigger]="dialog">
      New Project
      <ng-icon name="remixApps2AddLine" />
    </button>
    <ng-template let-close="close" #dialog>
      <div ui-alert-dialog-overlay>
        <div ui-alert-dialog class="min-w-3xl px-0 gap-0">
          <div ui-alert-dialog-header class="px-8 pb-4">
            <h1 ui-alert-dialog-description>Create a new project</h1>
          </div>
          <span ui-separator></span>
          <div class="px-8 grid grid-cols-12 gap-4 items-center w-full">
            <span ui-separator orientation="vertical" class="col-span-1"></span>
            <app-project-form class="col-span-10 py-6"></app-project-form>
            <span ui-separator orientation="vertical" class="col-span-1 justify-self-end"></span>
          </div>
          <span ui-separator></span>
          <div ui-alert-dialog-footer class="px-8 pt-4">
            <button ui-button class="rounded-full">Create</button>
            <button ui-button class="rounded-full" variant="secondary" (click)="close()">
              Cancel
            </button>
          </div>
        </div>
      </div>
    </ng-template>
  `,
  styleUrl: './create-project-dialog.css',
})
export class CreateProjectDialog {}
