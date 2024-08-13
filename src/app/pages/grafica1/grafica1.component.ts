import { Component } from '@angular/core';
import { ChartData, ChartEvent, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-grafica1',
  standalone: true,
  imports: [BaseChartDirective],
  templateUrl: './grafica1.component.html',
  styles: ``
})
export default class Grafica1Component {
  public doughnutChartLabels: string[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
  public doughnutChartData: ChartData<'doughnut'> = {
    labels: this.doughnutChartLabels,
    datasets: [
      { data: [350, 450, 100] },
    ],
  };
  public doughnutChartType: ChartType = 'doughnut';
}
