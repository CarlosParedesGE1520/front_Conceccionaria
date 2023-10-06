import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReporteVentaComponent } from './reporte-venta/reporte-venta.component';
import { FormsModule } from '@angular/forms';
import { GraficasModule } from '../graficas/graficas.module';



@NgModule({
  declarations: [
    ReporteVentaComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    GraficasModule
  ], exports:[
    ReporteVentaComponent
  ]
})
export class ComponentsModule { }
