import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent  implements OnInit {

  firstName: string = ""; // Nuevo campo para el nombre
  lastName: string = "";  // Nuevo campo para el apellido
  email: string = "";
  password: string = "";

  registroMessage = ''; // Variable para almacenar el mensaje de error

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  async register() {
    try {
      // Llama al servicio de registro pasando el nombre, apellido, email y password
      await this.authService.register(this.firstName, this.lastName, this.email, this.password);
      alert("¡ Registro exitoso ! de: " + this.email);
      this.registroMessage = 'Registro Exitoso';
      this.router.navigate(['/home']);
    } catch (error) {
      alert("Error al intentar registrarse: " + error);
    }
  }

}
