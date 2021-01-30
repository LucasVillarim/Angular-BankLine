import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercicio-data-bindings',
  templateUrl: './exercicio-data-binding.component.html',
  styleUrls: ['./exercicio-data-binding.component.scss']
})
export class ExercicioDataBindingsComponent implements OnInit {

  @Input() valor: number;
  @Output() valorChange = new EventEmitter<number>();

  constructor() {
    this.valor = 0;
  }

  contador: number = 0;

  imageURL = ''

  ngOnInit(): void {
  }

  increment():void {
    this.valorChange.emit(++this.valor);
  }

  decrement(): void {
    this.valorChange.emit(--this.valor);
  }

}
