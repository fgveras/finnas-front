import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { inject } from '@angular/core';
import { AuthService, LoginRequest } from '../../../core/services/auth';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './login.html'
})

export class LoginComponent {
  private fb           = inject(FormBuilder);
  private authService  = inject(AuthService);
  private router       = inject(Router);

  form = this.fb.group({
    email:    ['', [Validators.required, Validators.email]],
    password: ['', Validators.required]
  });

  loading = false;
  error   = '';

  onSubmit(): void {
    if (this.form.invalid) return;

    this.loading = true;
    this.error   = '';

    this.authService.login(this.form.value as LoginRequest).subscribe({
      next: () => this.router.navigate(['/home']),
      error: err => {
        this.error   = err.error?.message ?? 'Erro ao fazer login.';
        this.loading = false;
      }
    });
  }
}