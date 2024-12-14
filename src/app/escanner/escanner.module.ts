import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EscannerPageRoutingModule } from './escanner-routing.module';

import { EscannerPage } from './escanner.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EscannerPageRoutingModule
  ],
  declarations: [EscannerPage]
})
export class EscannerPageModule {}
