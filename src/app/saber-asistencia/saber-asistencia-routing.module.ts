import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SaberAsistenciaPage } from './saber-asistencia.page';

const routes: Routes = [
  {
    path: '',
    component: SaberAsistenciaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SaberAsistenciaPageRoutingModule {}
