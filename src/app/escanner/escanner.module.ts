import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EscannerPageRoutingModule } from './escanner-routing.module';

import { EscannerPage } from './escanner.page';

import { QrCodeModule } from 'ng-qrcode';
import { BarcodeScanningModalComponent } from './barcode-scanning-modal.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EscannerPageRoutingModule,
    QrCodeModule
  ],
  declarations: [EscannerPage, BarcodeScanningModalComponent]
})
export class EscannerPageModule {}
