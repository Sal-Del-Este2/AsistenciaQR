import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-construccion',
  templateUrl: './construccion.page.html',
  styleUrls: ['./construccion.page.scss'],
})
export class ConstruccionPage implements OnInit {

  public pokemonImage: string | null = ''; // Declarar pokemonImage como propiedad de la clase

  ladrillos: any[] = [];

  constructor(private router: Router) {}

  ngOnInit() {
    this.agregarLadrillos();
  }

  agregarLadrillos() {
    for (let i = 0; i < 3; i++) {
      setTimeout(() => {
        this.ladrillos.push({ src: 'assets/ladrillo.jpg' });
        
        if (i === 1) {
          const mineroElement = document.querySelector('.ion-gift') as HTMLElement;
          mineroElement.style.left = `${(i + 1) * 150}px`; // Ajuste del Minero detrás del tercer ladrillo
        }
      }, i * 500); // Agrega un ladrillo cada segundo
    }
  }

  navigateHome() {
    this.router.navigate(['/inicio']);
  }

  ionViewWillEnter() {
    this.pokemonImage = localStorage.getItem('pokemonImage'); // Obtiene la imagen
  }
  
}
