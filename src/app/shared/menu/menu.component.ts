import { Component } from '@angular/core';

interface MenuItem {
  ruta: string,
  texto: string
}

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {

  menu: MenuItem[] = [
    {
      ruta: '/graficas/graficaBarra',
      texto: 'Grafica barra'
    },
    {
      ruta: '/graficas/barras',
      texto: 'Barras '
    },
    {
      ruta: '/graficas/barrasDoble',
      texto: 'Barras Dobles'
    },
    {
      ruta: '/graficas/dona',
      texto: 'Dona'
    },
    {
      ruta: '/graficas/DonaHttp',
      texto: 'Dona http'
    },
    
  ]
}
