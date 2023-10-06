import { Component, ViewChild , Input, OnInit} from '@angular/core';

import { ChartConfiguration, ChartData, ChartEvent, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import { ConseccionarioObj } from 'src/app/interfaces/conseccionario';

@Component({
  selector: 'app-grafica-barra',
  templateUrl: './grafica-barra.component.html',
  styleUrls: ['./grafica-barra.component.css']
})
export class GraficaBarraComponent implements OnInit {
  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;
  @Input('horizontal') horizontal:boolean = false;
  @Input('data') data: ConseccionarioObj[]=[];
  public barChartOptions: ChartConfiguration['options'] = {
    responsive: true,
  };

  public barChartType: ChartType = 'bar';


  barChartData: ChartData<'bar'> = {
     labels: [ 
      this.data.map(a => a.con_nom_empresa)
     ],
     datasets: [
      { data: this.data.map(a => a.con_cantidad), label: 'Series A', backgroundColor: '#48F086', hoverBackgroundColor: 'red'}
    ]
  };

  constructor(){
    // console.log(this.horizontal);
    
  }
  ngOnInit(): void {
    console.log(this.horizontal, this.data);

    if (this.horizontal) {
      this.barChartType = 'bubble';
    }
  }

  public randomize(): void {
    console.log("Adefed",this.data);
    
  }
}
