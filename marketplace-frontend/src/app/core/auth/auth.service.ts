import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { ApiService } from '../services/api.service';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private tokenKey = 'access_token';

  constructor(private api: ApiService) {}

  login(credentials: { correo: string; contrasena: string }): Observable<{ token: string }> {
    return this.api.post<{ token: string }>('auth/login', credentials).pipe(
      tap(res => localStorage.setItem(this.tokenKey, res.token))
    );
  }

  getToken(): string | null {
    return localStorage.getItem(this.tokenKey);
  }

  logout(): void {
    localStorage.removeItem(this.tokenKey);
  }
}
