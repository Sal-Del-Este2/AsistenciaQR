import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-asistencia',
  templateUrl: './asistencia.page.html',
  styleUrls: ['./asistencia.page.scss'],
})
export class AsistenciaPage implements OnInit {

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

  navigateEscanner(clase: string) {
    localStorage.setItem('claseSeleccionada', clase); // Guarda la clase seleccionada en localStorage
    this.router.navigate(['/escanner']);
  }

  navigateHome() {
    this.router.navigate(['/inicio']);
  }

}
