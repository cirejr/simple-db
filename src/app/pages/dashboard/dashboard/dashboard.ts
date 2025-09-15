import { Component } from '@angular/core';
import { CardTitle } from '@app/shared/components/ui/card/card';
import { GridContainer } from '@app/shared/directives/grid-container';
import { Button } from '@app/shared/components/ui/button/button';
import {
  AlertDialogTrigger,
  AlertDialogOverlay,
  AlertDialog,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogHeader,
  AlertDialogFooter,
} from '@app/shared/components/ui/alert-dialog/alert-dialog';
import { remixApps2AddFill, remixApps2AddLine, remixFolderUploadLine } from '@ng-icons/remixicon';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { Separator } from '@app/shared/components/ui/separator/separator';
import { CreateProjectDialog } from '../_components/create-project-dialog/create-project-dialog';
import SearchField from '../_components/search-field/search-field';
import { ProjectTable } from '../_components/project-table/project-table';

@Component({
  selector: 'app-dashboard',
  imports: [
    CardTitle,
    GridContainer,
    Button,
    Separator,
    AlertDialogFooter,
    NgIcon,
    CreateProjectDialog,
    SearchField,
    ProjectTable,
  ],
  providers: [provideIcons({ remixApps2AddLine, remixFolderUploadLine })],
  template: `<main class=" relative overflow-y-hidden h-full">
    <div class="absolute min-h-[1200px] w-[1px] bg-accent left-36"></div>
    <div class="absolute min-h-[1000px] w-[1px] bg-accent right-36"></div>
    <div class="border-b">
      <div class="max-w-7xl mx-auto pb-8 pt-4.5 flex items-center justify-between ">
        <ui-card-title class="font-medium text-2xl">Projects Dashboard</ui-card-title>
        <div class="flex items-center gap-2.5">
          <app-create-project-dialog />
          <button ui-button class="rounded-full" variant="secondary">
            Import data <ng-icon name="remixFolderUploadLine" />
          </button>
        </div>
      </div>
    </div>
    <section>
      <div class="max-w-7xl mx-auto">
        <app-search-field />
        <app-project-table />
      </div>
    </section>
  </main> `,
  styleUrl: './dashboard.css',
})
export class Dashboard {}
