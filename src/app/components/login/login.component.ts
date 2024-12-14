import { Component, ElementRef, OnInit, ViewChild, viewChild } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';
import { Router } from '@angular/router';
import { AnimationController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent  implements OnInit {

  @ViewChild ( 'forgotPasswordButton', {read: ElementRef} ) forgotPasswordButton!: ElementRef;

  email: string = "";
  password: string = "";

  errorMessage = ''; // Variable para almacenar el mensaje de error
  registroMessage = ''; // Variable para almacenar el mensaje de error

  // Credenciales del usuario local
  localUser = {
    email: 'admin',
    password: 'admin123' // Contraseña del usuario local
  };

  constructor(
    private authService: AuthService,
    private router: Router,
    private animationCtrl: AnimationController
  ) { }

  // Función para animar el botón
  vibrateButton() {
    if (this.forgotPasswordButton) {
      const animation = this.animationCtrl.create()
        .addElement(this.forgotPasswordButton.nativeElement) // selecciona el botón para animar
        .duration(2000) // Duración de la animación: 2 segundos
        .keyframes([
          { offset: 0, transform: 'translateX(0)' },
          { offset: 0.1, transform: 'translateX(-5px)' },
          { offset: 0.2, transform: 'translateX(5px)' },
          { offset: 0.3, transform: 'translateX(-5px)' },
          { offset: 0.4, transform: 'translateX(5px)' },
          { offset: 0.5, transform: 'translateX(-5px)' },
          { offset: 0.6, transform: 'translateX(5px)' },
          { offset: 0.7, transform: 'translateX(-5px)' },
          { offset: 0.8, transform: 'translateX(5px)' },
          { offset: 0.9, transform: 'translateX(-5px)' },
          { offset: 1, transform: 'translateX(0)' }
        ]);
  
      animation.play(); // Inicia la animación
    } else {
      console.error('No se encontró el botón con la clase .forgot-password-button');
    }
  }

  ngOnInit() {
  }

  async login() {
    // Verificar si el usuario es el local (adm@duoc.cl)
    if (this.email === 'admin' && this.password === 'admin123') {
      localStorage.setItem('localUserLoggedIn', 'true'); // Guardar estado de sesión local
      // Si las credenciales coinciden, iniciar sesión localmente
      alert("¡Ingreso exitoso como administrador!");
      this.router.navigate(["/administrador"]);
    } else {
      // Si no es el usuario local, proceder con Firebase
  
      try {
        await this.authService.login(this.email, this.password);
        alert("¡ Ingreso exitoso !");
        localStorage.setItem('localUserLoggedIn', 'false'); // Marcar como usuario regular
        this.router.navigate(["/inicio"]);
      } catch (error) {
        alert("Error al intentar ingresar: ");
        this.errorMessage = 'Usuario o contraseña incorrecta';
        this.vibrateButton(); // Llama a la función de vibración si falla la autenticación
      }
    }
  }

}
