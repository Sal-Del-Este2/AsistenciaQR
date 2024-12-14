import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecordarCuentaPageRoutingModule } from './recordar-cuenta-routing.module';

import { RecordarCuentaPage } from './recordar-cuenta.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecordarCuentaPageRoutingModule
  ],
  declarations: [RecordarCuentaPage]
})
export class RecordarCuentaPageModule {}
