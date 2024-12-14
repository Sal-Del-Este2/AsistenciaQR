import { Component, OnInit } from '@angular/core';
import { PokemonService } from 'src/app/service/pokemon.service';
import { Router } from '@angular/router';
import { AnimationController } from '@ionic/angular';

@Component({
  selector: 'app-api-pokemon',
  templateUrl: './api-pokemon.component.html',
  styleUrls: ['./api-pokemon.component.scss'],
})
export class ApiPokemonComponent  implements OnInit {

  public idOrName: string;
  public pokemon: any;
  public showGif: boolean = false;  // Controla la visualización del GIF
  public showPokemonData: boolean = false; // Controla la visualización de los datos del Pokémon

  constructor(
    private router: Router,
    private PokemonService:PokemonService,
    private animationCtrl: AnimationController
  ) {
    this.idOrName = "";
    this.pokemon = null;
  }

  ngOnInit() {
  }

  getPokemon() {
    this.showGif = true;  // Mostrar el GIF
    this.showPokemonData = false;  // Ocultar los datos del Pokémon mientras se muestra el GIF

    // Simular la duración del GIF (por ejemplo, 3 segundos)
    setTimeout(() => {
      this.PokemonService.getPokemon(this.idOrName).then(pokemon => {
        this.pokemon = pokemon;
        localStorage.setItem('pokemonImage', pokemon.sprites.front_default); // Guarda la imagen en localStorage
        this.showGif = false;  // Ocultar el GIF
        this.showPokemonData = true;  // Mostrar los datos del Pokémon
        console.log(pokemon);
      });
    }, 400);  // 3000 milisegundos (3 segundos) de duración del GIF
  }

  navigateInicio() {
    this.router.navigate(['/inicio']);
  }

}
