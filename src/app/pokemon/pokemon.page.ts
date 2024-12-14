import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.page.html',
  styleUrls: ['./pokemon.page.scss'],
})
export class PokemonPage implements OnInit {
  
  public pokemonImage: string | null = ''; // Declarar pokemonImage como propiedad de la clase

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.pokemonImage = localStorage.getItem('pokemonImage'); // Obtiene la imagen
  }

}
