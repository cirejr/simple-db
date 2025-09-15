import { Button } from '@app/shared/components/ui/button/button';
/** This example uses ng-primitives styles, which are imported from ng-primitives/example-theme/index.css in the global styles file **/
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { remixSearchEyeLine } from '@ng-icons/remixicon';
import { NgpButton } from 'ng-primitives/button';
import { NgpFormField, NgpLabel } from 'ng-primitives/form-field';
import { NgpSearch, NgpSearchClear } from 'ng-primitives/search';
import { Label } from '@app/shared/components/ui/label/label';
import { Input } from '@app/shared/components/ui/input/input';

@Component({
  selector: 'app-search-field',
  imports: [NgpSearch, NgIcon, NgpSearchClear, FormsModule, NgpFormField, Input],
  providers: [provideIcons({ remixSearchEyeLine })],
  template: `
    <div class="max-w-7xl mx-auto py-6 flex flex-col gap-1.5" ngpFormField>
      <div class="relative max-w-md" ngpSearch>
        <ng-icon
          class="absolute left-3 top-1/2 -translate-y-1/2 text-xl text-gray-500 dark:text-gray-400"
          name="remixSearchEyeLine"
        />
        <input
          [(ngModel)]="query"
          ui-input
          type="search"
          placeholder="Search for a project"
          class="pl-10 rounded-full"
        />
        <button
          class="absolute right-0 top-0 block h-9 cursor-pointer rounded-r-lg border-none bg-transparent px-4 text-sm text-blue-500 outline-none data-[empty]:hidden"
          ngpSearchClear
          ui-Button
          aria-label="Clear search"
        >
          Clear
        </button>
      </div>
    </div>
  `,
  styles: `
    :host {
      display: contents;
      width: 90%;
    }

    /* clears the 'X' from Chrome */
    [ngpInput]::-webkit-search-decoration,
    [ngpInput]::-webkit-search-cancel-button,
    [ngpInput]::-webkit-search-results-button,
    [ngpInput]::-webkit-search-results-decoration {
      display: none;
    }
  `,
})
export default class SearchField {
  /**
   * Store the search query.
   */
  readonly query = signal<string>('');
}
