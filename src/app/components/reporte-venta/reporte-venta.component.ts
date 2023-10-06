import { Component, ViewChild, Input } from '@angular/core';
import { ChartConfiguration, ChartData, ChartType } from 'chart.js';
import { ChartEvent } from 'chart.js/dist/core/core.plugins';
import { BaseChartDirective } from 'ng2-charts';
import { GraficaBarraComponent } from 'src/app/graficas/components/grafica-barra/grafica-barra.component';
import { ConseccionarioObj } from 'src/app/interfaces/conseccionario';
import { ConseccionarioServiceService } from 'src/app/services/conseccionario-service.service';

@Component({
  selector: 'app-reporte-venta',
  templateUrl: './reporte-venta.component.html',
  styleUrls: ['./reporte-venta.component.css']
})
export class ReporteVentaComponent {
 
  @ViewChild(GraficaBarraComponent) chartNew: GraficaBarraComponent | undefined;
 
  //urlSubscription!: Subscription;

  consecciones: string[] = [];
  conseccionesnombre: string[] = [];
  listaConseccionesOBJ: ConseccionarioObj[]=this.listaConseccionarionCount();
  listaConseccionesTemporal: ConseccionarioObj[]=[];

  selectedElements: { [key: string]: boolean } = {};
  sumaTotal = 0;
  
  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;
  @Input('horizontal') horizontal:boolean = false
  public barChartOptions: ChartConfiguration['options'] = {
    responsive: true,
  };

  loaded:boolean =false;

  public barChartType: ChartType = 'bar';

  // barChartData: ChartData<'bar'> = {
     
  //   labels: [],
  //    datasets: [
  //     { data: [11,55,55] , label: 'Ventas C', backgroundColor: '#48F086', hoverBackgroundColor: 'red'},
     
  //   ]
  // };




  constructor(
    private conseccionarioServiceService: ConseccionarioServiceService,

  ){

  }

  

  ngOnInit(): void {
    console.log(this.horizontal);

    if (this.horizontal) {
      this.barChartType = 'bubble';
    }

    this.conseccionarioServiceService.conseccionesLista().subscribe(data => {
      this.consecciones = data; 
      console.log(this.consecciones);
      // Almacena los datos en la propiedad consecciones
    });

  
    this. listarConseccionariosData();

  }

  onCheckboxChange(elemento: string) {
  console.clear();
  this.chartNew?.randomize();
  this.loaded = false;
    this.selectedElements[elemento] = !this.selectedElements[elemento];

    console.log(elemento+' = '+this.selectedElements[elemento]);
    //this.listaConseccionesOBJ.forEach(element => {
      for (let index = 0; index < this.listaConseccionesOBJ.length; index++) {
        if (this.listaConseccionesOBJ[index].con_nom_empresa== elemento) {

          if (this.selectedElements[elemento] == true) {
            //this.conseccionesnombre.push(elemento);
            this.listaConseccionesTemporal.push(this.listaConseccionesOBJ[index]);
            console.log("Datosss",this.listaConseccionesTemporal);
            
            this.sumaTotal+= this.listaConseccionesOBJ[index].con_cantidad;
          }

          if (this.selectedElements[elemento] != true) {
            //this.conseccionesnombre.splice(index, 1);
            this.listaConseccionesTemporal.splice(index, 1);
            this.sumaTotal-= this.listaConseccionesOBJ[index].con_cantidad;
          }  
          
        }
        
      }
      console.log(this.listaConseccionesTemporal);
      this.loaded = true;
      // this.listaConseccionesTemporal.forEach(element => {
      //   console.log(element);
      // });
     
    //});

  }


  listarConseccionariosData() {
    this.conseccionarioServiceService.conseccionesListaCount().subscribe(data => {
      this.listaConseccionesOBJ = data ?? [];
      console.log(this.listaConseccionesOBJ);
      // Coloca aquí cualquier código que dependa de this.listaConseccionesOBJ
      this.listaConseccionarionCount();
    });
    console.log(this.listaConseccionesOBJ);
    
  }

  listaConseccionarionCount(): ConseccionarioObj[]{
    // Coloca aquí cualquier código que dependa de this.listaConseccionesOBJ
    console.log("Realizando acciones con los datos: ", this.listaConseccionesOBJ);
    return this.listaConseccionesOBJ;
  }

  // public randomize(): void {
  // this.barChartData.datasets[0].data = this.listaConseccionesTemporal.map(element => element.con_cantidad)
    
  // }
  
    // Método para cerrar la Subscripción
    // cerrarSubscripcionLista = (): void => {
    //   if ( this.urlSubscription ) this.urlSubscription.unsubscribe();
    // }

}
