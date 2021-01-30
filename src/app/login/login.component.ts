import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginResponse } from 'src/app/login/login.interfaces';

import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  @ViewChild('usuarioInput') usuarioInput: ElementRef | undefined;
  @ViewChild('senhaInput') senhaInput: ElementRef | undefined;

  usuario: string = '';
  senha: string = '';


  estaCarregando: boolean = false;
  erroNoLogin: boolean = false;

  constructor(
    private loginService: LoginService,
    private router: Router
  ) { }

  ngOnInit(): void {

  }

  onSubmit(form: NgForm) {
    if (!form.valid) {
      form.controls.usuario.markAsTouched();
      form.controls.senha.markAsTouched();

      if (form.controls.usuario.invalid) {
        this.usuarioInput!.nativeElement.focus();
      }

      if (form.controls.usuario.invalid) {
        this.senhaInput!.nativeElement.focus();
      }
      return;
    }
    this.login();
  }

  exibeErro(nomeDoInput: string, form: NgForm) {
    if (!form.controls[nomeDoInput]) {
      return false;
    }
      return form.controls[nomeDoInput].invalid && form.controls[nomeDoInput].touched;
  }

  login() {
    this.estaCarregando = true;
    const credenciais = {
      usuario: this.usuario,
      senha: this.senha
    }
    this.loginService.logar(credenciais).subscribe(
      (response: LoginResponse) => this.onSuccessLogin(response),
      (error: any) => this.onErrorLogin(error)
    )
  }

  onSuccessLogin(response: any) {
    console.log('Sucesso', response);
    this.router.navigate(['home']);
  }

  onErrorLogin(error: any) {
    this.estaCarregando = false;
    this.erroNoLogin = true;
    console.log('Erro', error);
  }
}
