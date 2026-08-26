import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { inject } from '@angular/core';
import { AuthService, RegisterRequest } from '../../../core/services/auth';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './register.html'
})
export class RegisterComponent {
  private fb          = inject(FormBuilder);
  private authService = inject(AuthService);
  private router      = inject(Router);

  form = this.fb.group({
    name:     ['', Validators.required],
    email:    ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]]
  });

  loading = false;
  error   = '';

  onSubmit(): void {
    if (this.form.invalid) return;

    this.loading = true;
    this.error   = '';

    this.authService.register(this.form.value as RegisterRequest).subscribe({
      next: () => this.router.navigate(['/dashboard']),
      error: err => {
        this.error   = err.error?.message ?? 'Erro ao criar conta.';
        this.loading = false;
      }
    });
  }
}