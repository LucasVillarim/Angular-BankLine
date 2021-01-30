import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { CadastroService } from 'src/app/cadastro/cadastro.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent implements OnInit {

  cpf: string = '';
  login: string = '';
  nome: string = '';
  senha: string = '';

  constructor(
    private cadastroService: CadastroService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onSubmit() {
    const credenciais = {
      cpf: this.cpf,
      login: this.login,
      nome: this.nome,
      senha: this.senha
    }
    console.log(credenciais);
    this.cadastroService.cadastrar(credenciais)
    .subscribe(
      ((response: any) => this.onSuccess(response)),
      error => this.onFail()
    );
  }

  exibeErro(nomeDoInput: string, form: NgForm) {
    if (!form.controls[nomeDoInput]) {
      return false;
    }
      return form.controls[nomeDoInput].invalid && form.controls[nomeDoInput].touched;
  }

  onSuccess(response: any) {
    console.log('success');
    this.router.navigate(['']);
  }


  onFail() {

  }
}
