import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-recordar-cuenta',
  templateUrl: './recordar-cuenta.page.html',
  styleUrls: ['./recordar-cuenta.page.scss'],
})
export class RecordarCuentaPage implements OnInit {

  constructor(
    private router: Router,
    private alertController: AlertController
  ) { }

  ngOnInit() {
  }

  // Muestra una alerta al presionar el botón "Enviar"
  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Correo Enviado',
      subHeader: 'Siga la sinstrucciones del Mail enviado a su correo para poder recuperar su cuenta',
      message: 'Puede cerrar esta ventana',
      buttons: [{
        text: 'Cerrar',
        handler: () => {
          this.animarImagen(); // Llama a la función para animar la imagen
        }
      }],
    });

    await alert.present(); // Muestra la alerta en la pantalla
  }

  // Agrega clase para animar la imagen cuando se presiona cerrar en el mensaje
  animarImagen() {
    const imagen = document.getElementById('imagen-animada');
    if (imagen) {
      imagen.classList.add('move-and-fade');
    }
  }

  // Limpia el formulario después de enviar
  enviar(loginForm: NgForm) {
    if (loginForm) {
      loginForm.reset(); // Limpia los campos del formulario
    }
    this.presentAlert(); // Muestra la alerta
  }

}
