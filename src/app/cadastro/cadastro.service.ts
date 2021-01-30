import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { CadastroCredenciais } from 'src/app/cadastro/cadastro.interfaces';
import { AuthService } from 'src/app/shared/services/auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class CadastroService {

  constructor(
    private httpClient: HttpClient,
    private authService: AuthService
  ) {}

  cadastrar(credenciais: CadastroCredenciais): Observable<any> {
    console.log('chegou');
    return this.httpClient.post<CadastroCredenciais>('https://accenture-java-desafio.herokuapp.com/usuarios', credenciais);

  }
}
