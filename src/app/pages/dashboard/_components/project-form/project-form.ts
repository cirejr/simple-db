import { Component, inject, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Label } from '@app/shared/components/ui/label/label';
import { Input } from '@app/shared/components/ui/input/input';
import { Button } from '@app/shared/components/ui/button/button';
import { PasswordService } from '@app/core/services/password';

@Component({
  selector: 'app-project-form',
  imports: [Label, Input, ReactiveFormsModule, Button],
  template: `<form [formGroup]="form" class="space-y-4" autocomplete="false" autofocus="false">
    <div class="grid grid-cols-3 items-start">
      <label ui-label>Project name</label>
      <div class="col-span-2">
        <input
          ui-input
          formControlName="name"
          type="text"
          placeholder="e.g app name or custom name"
          [class]="formValues.name?.touched && formValues.name?.invalid ? errorClasses : ''"
          autocomplete="new-text"
        />

        @if(formValues.name?.invalid && (formValues.name?.dirty || formValues.name?.touched)){
        @if(formValues.name?.hasError('required')){
        <span class="text-xs text-destructive">Field required</span>
        } }
      </div>
    </div>
    <div class=" grid grid-cols-3 items-start">
      <label ui-label>Database password</label>
      <div class="col-span-2">
        <input
          ui-input
          formControlName="password"
          [defaultValue]="genPassword()"
          type="password"
          [class]="formValues.password?.touched && formValues.password?.invalid ? errorClasses : ''"
          placeholder="choose strong password"
          autocomplete="new-password"
          autofocus="off"
        />
        @if(form.controls['password'].touched){ @if(form.controls['password'].errors?.["required"]){
        <span class="text-xs text-destructive "> Field required</span>
        } }
        <div>
          <button
            ui-button
            variant="link"
            class="text-muted-foreground text-xs px-0 underline hover:text-muted-foreground/70"
            (click)="generatePassword()"
          >
            Generate a password
          </button>
        </div>
      </div>
    </div>
  </form> `,
  styleUrl: './project-form.css',
})
export class ProjectForm {
  readonly errorClasses =
    'focus:ring-destructive focus:ring-2 ring-[3px] ring-destructive/20 dark:ring-destructive/40 text-destructive/40 placeholder:text-destructive/40 border-destructive/40';
  readonly genPassword = signal<string>('');
  readonly passwordService = inject(PasswordService);
  constructor() {
    this.genPassword.set(this.passwordService.generatePassword());
  }
  form: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required]),
    password: new FormControl(this.passwordService.generatePassword(), [Validators.required]),
  });

  get formValues() {
    return { name: this.form.get('name'), password: this.form.get('password') };
  }

  generatePassword() {
    const pass = this.passwordService.generatePassword();
    this.form.controls['password'].setValue(pass);
  }
}
