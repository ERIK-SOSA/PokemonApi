import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class PokeApiService {

  constructor(private http: HttpClient) { }

  private apiUrl = 'https://pokeapi.co/api/v2/pokemon';


  getPokemonList(){
    return this.http.get(`${this.apiUrl}?limit=100`);
  }

}
