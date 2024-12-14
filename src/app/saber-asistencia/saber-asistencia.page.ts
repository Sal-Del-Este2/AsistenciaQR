import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-saber-asistencia',
  templateUrl: './saber-asistencia.page.html',
  styleUrls: ['./saber-asistencia.page.scss'],
})
export class SaberAsistenciaPage implements OnInit {

  public pokemonImage: string | null = ''; // Declarar pokemonImage como propiedad de la clase

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    this.animateButtons();
  }

  ionViewWillEnter() {
    this.pokemonImage = localStorage.getItem('pokemonImage'); // Obtiene la imagen
  }
  
  animateButtons() {
    const buttons = document.querySelectorAll('.action-button ion-button');
    buttons.forEach((button, index) => {
      (button as HTMLElement).style.setProperty('--animation-delay', `${index * 0.1}s`);
    });
  }

  navigateProgreso(clase: string) {
    localStorage.setItem('claseSeleccionada', clase); // Guarda la clase seleccionada
    this.router.navigate(['/progreso']);
  }

  navigateHome() {
    this.router.navigate(['/inicio']);
  }

}
