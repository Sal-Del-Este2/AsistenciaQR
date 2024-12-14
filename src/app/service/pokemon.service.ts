import { Injectable } from '@angular/core';
import { CapacitorHttp, HttpOptions, HttpResponse } from '@capacitor/core';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor() { }

  getPokemon (identifier: string){
    const options: HttpOptions = {
      url: 'https://pokeapi.co/api/v2/pokemon/' + identifier,
      params: {}
    }

    return CapacitorHttp.get(options).then( (response: HttpResponse) => {
      return response.data;
    })
  }
  
}
