import { Component } from '@angular/core';
import { PokeApiService } from './../../services/PokeApi/poke-api.service'

@Component({
  selector: 'app-pokemonlist',
  templateUrl: './pokemonlist.component.html',
  styleUrls: ['./pokemonlist.component.scss']
})
export class PokemonlistComponent {
  public data: any;
  ItemsArray: any[] = [];
  currentPage = 1; // Página actual
  itemsPerPage = 10; // Cantidad de elementos por página

  previousLabel = 'Anterior';
  nextLabel = 'Siguiente';

  constructor(private pokeapiservice: PokeApiService){

  }
  ngOnInit(): void {
    this.pokeapiservice.getPokemonList().subscribe((data: any) => {
      //console.log("Lista: ", data.results)
      this.ItemsArray = data.results

    });
  }


  selectPokemon (){
    return 0;

  }

}

