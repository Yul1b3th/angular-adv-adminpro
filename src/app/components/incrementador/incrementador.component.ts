import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-incrementador',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './incrementador.component.html',
  styles: `
  .disabled {
    pointer-events: none;
  }`
})
export class IncrementadorComponent implements OnInit {

  @Input('valor') progreso: FormControl = new FormControl(50);
  @Input() btnClass: string = 'btn-primary';
  @Output() valorSalida: EventEmitter<number> = new EventEmitter();

  isMinValue: boolean = false;
  isMaxValue: boolean = false;

  ngOnInit(): void {
    this.btnClass = `btn ${this.btnClass}`;
    this.checkLimits(this.progreso.value);
  }

  cambiarValor(valor: number) {
    let nuevoValor = this.progreso.value + valor;
    if (nuevoValor >= 100) {
      nuevoValor = 100;
    }
    if (nuevoValor <= 0) {
      nuevoValor = 0;
    }
    this.progreso.setValue(nuevoValor);
    this.valorSalida.emit(nuevoValor);
    this.checkLimits(nuevoValor);
  }

  onChange(event: Event): void {
    const inputElement = event.target as HTMLInputElement | null;
    if (inputElement) {
      let valorNumerico = Number(inputElement.value);
      if (valorNumerico > 100) {
        valorNumerico = 100;
      }
      if (valorNumerico < 0) {
        valorNumerico = 0;
      }
      this.progreso.setValue(valorNumerico);
      this.valorSalida.emit(valorNumerico);
      this.checkLimits(valorNumerico);
    }
  }

  private checkLimits(valor: number): void {
    this.isMinValue = valor <= 0;
    this.isMaxValue = valor >= 100;
  }
}
