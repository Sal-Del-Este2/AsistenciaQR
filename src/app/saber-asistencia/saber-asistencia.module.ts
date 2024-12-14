import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SaberAsistenciaPageRoutingModule } from './saber-asistencia-routing.module';

import { SaberAsistenciaPage } from './saber-asistencia.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SaberAsistenciaPageRoutingModule
  ],
  declarations: [SaberAsistenciaPage]
})
export class SaberAsistenciaPageModule {}
