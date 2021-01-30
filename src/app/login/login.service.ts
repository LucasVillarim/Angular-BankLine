import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { tap } from 'rxjs/operators';
import { AuthService } from 'src/app/shared/services/auth/auth.service';

import { LoginCredenciais, LoginResponse } from './login.interfaces';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient,
    private authService: AuthService) { }

  logar(credenciais: LoginCredenciais): Observable<LoginResponse> {
    console.log(credenciais)

    return this.http.post<LoginResponse>('https://accenture-java-desafio.herokuapp.com/login', credenciais)
      .pipe(
        tap(response => {
          this.authService.setUsuario(response.usuario, response.token);
        })
      )
  }
}
