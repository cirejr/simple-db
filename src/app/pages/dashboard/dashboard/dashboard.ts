import { Component } from '@angular/core';
import { CardTitle } from '@app/shared/components/ui/card/card';
import { GridContainer } from '@app/shared/directives/grid-container';

@Component({
  selector: 'app-dashboard',
  imports: [CardTitle, GridContainer],
  template: `<main class="py-4">
    <div class="border-b px-4 pb-8 pt-4.5">
      <ui-card-title>Projects Dashboard</ui-card-title>
    </div>
  </main> `,
  styleUrl: './dashboard.css',
})
export class Dashboard {}
