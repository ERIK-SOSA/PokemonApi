import { Component, OnInit } from '@angular/core';
import { PokeApiService } from './../../services/PokeApi/poke-api.service'

@Component({
  selector: 'app-pokemondetails',
  templateUrl: './pokemondetails.component.html',
  styleUrls: ['./pokemondetails.component.scss']
})
export class PokemondetailsComponent implements OnInit{
  ItemsArray: any;

  constructor(private pokeapiservice: PokeApiService){

  }

  ngOnInit(): void {
    this.pokeapiservice.getPokemonList().subscribe((data: any) => {
      this.ItemsArray = data.results
      console.log("Datos Detalles", data.results)
    });

  }

}
