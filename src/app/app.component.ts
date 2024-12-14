import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { App } from '@capacitor/app';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  constructor(
    private platform: Platform,
    private router: Router
  ) {
    this.platform.ready().then(() => {
      // Escuchar cuando el usuario presiona el botón de atrás
      App.addListener('backButton', (data) => {
        // Si estás en la página de inicio, puedes salir de la app
        if (this.router.url === '/home') {
          App.exitApp();  // Cierra la aplicación
        } else {
          // Si no estás en la página de inicio, navega hacia atrás
          window.history.back();
        }
      });
    });
  }
}
