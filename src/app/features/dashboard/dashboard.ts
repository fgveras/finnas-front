import { Component } from '@angular/core';
import { inject } from '@angular/core';
import { AuthService } from './../../core/services/auth';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  template: `
    <div class="min-vh-100 d-flex align-items-center justify-content-center bg-light">
      <div class="card shadow-sm p-4 text-center" style="width: 100%; max-width: 400px;">
        <h4 class="fw-semibold mb-2">Dashboard</h4>
        <p class="text-muted mb-4">Você está autenticado!</p>
        <button class="btn btn-outline-danger" (click)="logout()">Sair</button>
      </div>
    </div>
  `
})
export class DashboardComponent {
  private authService = inject(AuthService);

  logout(): void {
    this.authService.logout();
  }
}