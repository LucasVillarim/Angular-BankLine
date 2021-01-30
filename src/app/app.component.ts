import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'aula-angular';

  constructor() {
    this.title = 'Outra coisa';

    setTimeout(() => {
      this.title = 'Seja bem vindo!';

    }, 3000)
  }

  eventoRecebido() {
    console.log('Recebi o evento');
  }



  somar(numero1: number, numero2: number) {
    return numero1 + numero2;
  }
}
