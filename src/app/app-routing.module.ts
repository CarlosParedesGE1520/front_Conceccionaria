import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'graficas',
    // () => import('./mapas/mapas.module').then(m => m.MapasModule)
    loadChildren: () => import('./graficas/graficas.module').then(m => m.GraficasModule)
  },
  {
    path: '**',
    redirectTo: 'graficas'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
