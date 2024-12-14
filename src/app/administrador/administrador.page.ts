import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';
import { AnimationController } from '@ionic/angular';

@Component({
  selector: 'app-administrador',
  templateUrl: './administrador.page.html',
  styleUrls: ['./administrador.page.scss'],
})
export class AdministradorPage implements OnInit {
  userEmail: string | null = '';  // Variable para almacenar el correo del usuario
  public pokemonImage: string | null = ''; // Declarar pokemonImage como propiedad de la clase
  public showGif: boolean = false;  // Variable para controlar la visualización del GIF

  constructor(
    private aService:AuthService,
    private router:Router,
    private animationCtrl: AnimationController
  ) { }

  ngOnInit() {
    this.loadUserEmail(); // Llama a la función para cargar el correo al iniciar el componente
    this.animateIcon(); // Inicia la animación
  }

  ionViewWillEnter() {
    this.pokemonImage = localStorage.getItem('pokemonImage'); // Obtiene la imagen
  }
  // Función para vaciar el localStorage y ocultar la imagen de Pokémon
  clearPokemonImage() {
    this.showGif = true;  // Mostrar el GIF
    setTimeout(() => {
      this.showGif = false;  // Ocultar el GIF después de 3 segundos
      localStorage.removeItem('pokemonImage'); // Elimina la imagen del localStorage
      this.pokemonImage = null; // Actualiza la propiedad para que no se muestre
    }, 1000);  // Duración del GIF en milisegundos
  }

  
  // Función para obtener el correo del usuario
  async loadUserEmail() {
    this.aService.getUser().subscribe(user => {
      this.userEmail = user?.email || null;  // Asigna el correo o null si no está disponible
    });
  }
  // Funcion para borrar asistencia
  clearAsistencias() {
    // Elimina todas las asistencias almacenadas para cada clase
    Object.keys(localStorage).forEach((key) => {
      if (key.startsWith('asistencias_')) {
        localStorage.removeItem(key);
      }
    });
    alert('Asistencias reiniciadas');
  }

  // animacion del icono
  animateIcon() {
    const iconElement = document.querySelector('.bottom-icon');

    if (iconElement) {
      const animation = this.animationCtrl.create()
        .addElement(iconElement)
        .duration(1000)
        .fromTo('transform', 'scale(0)', 'scale(1)');

      animation.play();
    }
  }

  logout(){
    this.aService.logout();
    alert("Secion cerrada")
    this.router.navigate(["/home"]);
  }

}
