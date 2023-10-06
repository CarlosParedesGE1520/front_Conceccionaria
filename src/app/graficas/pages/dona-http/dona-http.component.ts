import { Component, OnInit } from '@angular/core';
import { GraficasService } from '../../services/graficas.service';
import { ChartData, ChartEvent, ChartType } from 'chart.js';
import { Redes } from '../../interfaces/redes';
@Component({
  selector: 'app-dona-http',
  templateUrl: './dona-http.component.html',
  styleUrls: ['./dona-http.component.css']
})
export class DonaHttpComponent implements OnInit {

  redes: object [] = [];
  redesN: number [] = [];

  constructor(private graficasService:GraficasService) {
 
  }

  ngOnInit(): void {
  
    this.graficasService.getRedesDona().subscribe(({labels, values})=>{
      this.doughnutChartLabels = labels;
      this.doughnutChartData.datasets[0].data=(values)
    })

    console.log(this.redesN);
    

   
    

  }
  // 
  

  public doughnutChartLabels!: string[] ;
  public doughnutChartData: ChartData<'doughnut'> = {
    labels: this.doughnutChartLabels,
    datasets: [
      // { data: [ 350, 450, 100 ] },
    ]
  };
  public doughnutChartType: ChartType = 'doughnut';
}
