import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Card } from '@app/shared/components/ui/card/card';
import {
  CardTitle,
  CardHeader,
  CardDescription,
  CardContent,
  CardAction,
  CardFooter,
} from '@app/shared/components/ui/card/card';
import { Router, RouterOutlet } from '@angular/router';
import { Button } from '@app/shared/components/ui/button/button';
import { Input } from '@app/shared/components/ui/input/input';
import { Label } from '@app/shared/components/ui/label/label';

@Component({
  selector: 'app-login',
  imports: [
    Card,
    CardTitle,
    CardHeader,
    CardDescription,
    CardContent,
    CardAction,
    CardFooter,
    ReactiveFormsModule,
    RouterOutlet,
    Button,
    Input,
    Label,
  ],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  router = new Router();
  userForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.min(8)]),
  });

  navigateHome() {
    this.router.navigate(['']);
  }
}
