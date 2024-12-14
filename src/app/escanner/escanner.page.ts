import { Component, OnInit } from '@angular/core';
import { LoadingController, ModalController, Platform } from '@ionic/angular';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { BarcodeScanningModalComponent } from './barcode-scanning-modal.component';
import { LensFacing, BarcodeScanner } from '@capacitor-mlkit/barcode-scanning';
import { AuthService } from '../service/auth.service';


@Component({
  selector: 'app-escanner',
  templateUrl: './escanner.page.html',
  styleUrls: ['./escanner.page.scss'],
})
export class EscannerPage implements OnInit {

  public pokemonImage: string | null = ''; // Declarar pokemonImage como propiedad de la clase
  public claseSeleccionada: string | null = ''; // Agregar claseSeleccionada como propiedad
  private maxAsistencias = 20; // Máximo de asistencias permitidas
  public asistencias: number = 0; // Contador de asistencias
  
  segment = 'scan';
  qrText = '';
  scanResult = '';

  constructor(
    private router: Router,
    private alertController: AlertController,
    private platform: Platform,
    private loadingController: LoadingController,
    private modalController: ModalController,
    private firestoreService: AuthService
  ) { }

  ngOnInit() {
  }

  async starScan() {
    const modal = await this.modalController.create({
    component: BarcodeScanningModalComponent,
    cssClass: "barcode-scanning-modal",
    showBackdrop: false,
    componentProps: { 
      format: [],
      LensFacing: LensFacing.Back
     }
    });
  
    await modal.present();

    const { data } = await modal.onWillDismiss();

    if ( data ){
      this.scanResult = data?.barcode?.displayValue;
    }
  }

  ionViewWillEnter() {
    this.pokemonImage = localStorage.getItem('pokemonImage'); // Obtiene la imagen
    this.claseSeleccionada = localStorage.getItem('claseSeleccionada'); // Recupera la clase seleccionada
  
    // Recuperar las asistencias específicas de la clase seleccionada desde localStorage
    const storedAsistencias = localStorage.getItem(`asistencias_${this.claseSeleccionada}`);
    this.asistencias = storedAsistencias ? parseInt(storedAsistencias) : 0;
  }

  // alerta con mensaje
  async presentAlert() {
    
    // Expresión regular para validar que el texto comience con "duoc"
    const regex = /^duoc.*/i; // i = ignorar mayúsculas/minúsculas

    if (!regex.test(this.scanResult)) {
      // Si el resultado escaneado no es válido, muestra un error
      const alert = await this.alertController.create({
        header: 'QR Inválido',
        message: 'El QR escaneado no es válido. Debe comenzar con "duoc".',
        buttons: ['OK'],
      });
      await alert.present();
      return; // Salir de la función para evitar guardar en Firebase
    }

    if (this.asistencias < this.maxAsistencias) {
      this.asistencias++;

      // Almacenar asistencias de la clase seleccionada en localStorage
      if (this.claseSeleccionada) {
      localStorage.setItem(
        `asistencias_${this.claseSeleccionada}`,
        this.asistencias.toString());
      }
  
      const alert = await this.alertController.create({
        header: 'Escaner de QR',
        subHeader: `Clase: ${this.claseSeleccionada}`, // Mostrar la clase seleccionada en la alerta
        message: `Asistencia registrada: ${this.asistencias} de ${this.maxAsistencias}`,
        buttons: ['Escanear'],
      });

      await alert.present();

      // confirma que existe valor en clase
      console.log('Clase seleccionada: ', this.claseSeleccionada);

      // Guarda fecha, hora y clase en Firebase
      this.firestoreService
      .saveButtonPress('button-presses', this.claseSeleccionada || 'Clase desconocida')
      .then(() => console.log('Clase, fecha y hora guardadas con éxito'))
      .catch((error) => console.error('Error al guardar:', error));
    
      // Redirigir a la página de progreso después de cada escaneo
      this.router.navigate(['/progreso']);
    } else {
      // Si ya alcanzó el máximo de asistencias, redirigir directamente a la página de progreso
      this.router.navigate(['/progreso']);
    }
  }

  navigateHome() {
    this.router.navigate(['/inicio']);
  }

}
