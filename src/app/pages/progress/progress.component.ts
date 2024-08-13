import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

import { IncrementadorComponent } from '../../components/incrementador/incrementador.component';

@Component({
  selector: 'app-progress',
  standalone: true,
  imports: [ReactiveFormsModule, IncrementadorComponent],
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.scss']
})
export default class ProgressComponent {
  progreso1: FormControl = new FormControl(25);
  progreso2: FormControl = new FormControl(35);

  get getProgress1() {
    return `${ this.progreso1.value }%`;
  }

  get getProgress2() {
    return `${ this.progreso2.value }%`;
  }
}
