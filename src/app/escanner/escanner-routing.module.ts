import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EscannerPage } from './escanner.page';

const routes: Routes = [
  {
    path: '',
    component: EscannerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EscannerPageRoutingModule {}
