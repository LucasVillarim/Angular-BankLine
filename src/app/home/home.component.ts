import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  meuTexto: string = "texto Qualquer";
  user: string | null = '';
  userName: string = '';
  valorNoDropDown: string = "";

  ngOnInit(): void {
     this.user = localStorage.getItem('usuario');
    if (this.user) {
      const { nome } = JSON.parse(this.user);
      this.userName = nome;
    }
    console.log(this.userName);
  }


  digitou(event: any) {
    console.log(event);
  }

  valorInicial: number = 10;
}
