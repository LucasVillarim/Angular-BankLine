import { Injectable } from '@angular/core';
import { Usuario } from 'src/app/shared/interfaces/usuario.interfaces';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  usuario: Usuario | undefined;
  token: string | undefined;

  constructor() {
   }

  setUsuario(usuario: Usuario, token: string) {
    this.usuario = usuario;
    this.token = token;
    localStorage.setItem('usuario', JSON.stringify(this.usuario));
    localStorage.setItem('token', this.token);

    console.log(this.usuario, this.token);
  }

  getUsuario() {
    if(this.usuario) {
      return this.usuario;
    }

    const usuarioGuardado = localStorage.getItem('usuario');
    if (usuarioGuardado) {
      this.usuario = JSON.parse(usuarioGuardado);
      return this.usuario;
    }

    return undefined;
  }

  getToken() {
    if (this.token) {
      return this.token;
    }

    const tokenGuardado = localStorage.getItem('token');
    return tokenGuardado;
  }

  logout() {
    delete this.usuario;
    delete this.token;
    localStorage.clear();
  }

  estaLogado() {
    if (this.getUsuario() && this.getToken()) {
      return true;
    }

    return false;
  }

  cadastraUsuario(response: any) {
    console.log(response);
  }
}
