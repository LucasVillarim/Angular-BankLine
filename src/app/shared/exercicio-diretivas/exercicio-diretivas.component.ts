import { Component } from '@angular/core';

import { MEMES_AGRUPADOS_POR_CATEGORIA } from './exercicio-diretivas.constants';

@Component({
  selector: 'app-exercicio-diretivas',
  templateUrl: './exercicio-diretivas.component.html',
  styleUrls: ['./exercicio-diretivas.component.scss']
})
export class ExercicioDiretivasComponent {

  deveExibir = true;

  classeCSS = 'verde';

  urlDasImagens = 'https://raw.githubusercontent.com/vitorfgsantos/angular-memes-diretivas/master/images';

  memesLista: any[] = MEMES_AGRUPADOS_POR_CATEGORIA;

  frutas = [
    'Abacaxi',
    'Laranja',
    'Melancia',
  ]

  trocarValor() {
    this.deveExibir = !this.deveExibir;
  }

  trocarParaVermelho() {
    this.classeCSS = "vermelho";
  }

  trocarParaVerde() {
    this.classeCSS = "verde";
  }
}
