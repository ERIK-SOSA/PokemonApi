import { Component } from '@angular/core';
import { PokeApiService } from './../../services/PokeApi/poke-api.service'
import { ListStateService } from 'src/app/services/listState/list-state.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pokemonlist',
  templateUrl: './pokemonlist.component.html',
  styleUrls: ['./pokemonlist.component.scss']
})
export class PokemonlistComponent {
  public data: any;
  ItemsArray: any[] = [];
  pokemons: any[] = [];
  limit: number = 10;
  limits: number[] = [5, 10, 15, 20]


  constructor(private pokeapiservice: PokeApiService, private liststateservice: ListStateService, private router: Router){

  }
  ngOnInit(): void {

    setTimeout(() => {
      window.scrollTo(0, this.liststateservice.scrollPosition);
    }, 0);
    
    this.pokeapiservice.getPokemonList().subscribe((data: any) => {
      this.ItemsArray = data.results
    });
    this.getPokemons();
  }

  getPokemons() {
    this.pokeapiservice.getPokemons(this.limit, this.liststateservice.scrollPosition).subscribe((data: any) => {
      this.pokemons = data.results;
    });
  }

  getPokemonImageUrl(url: string) {
    const id = url.split('/')[url.split('/').length - 2];
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
  }
  
  // Métodos para manejar la paginación
  nextPage() {
    this.liststateservice.scrollPosition += this.limit;
    this.getPokemons();
  }

  previousPage() {
    if (this.liststateservice.scrollPosition > 0) this.liststateservice.scrollPosition -= this.limit;
    this.getPokemons();
  }

  selectPokemon (){
    return 0;
  }

  selectNumPag(lim: number){
    this.limit = lim
    console.log("Limit",lim)
    console.log(this.limit)
    this.getPokemons();
    return lim;
  }

  gotoDetails(pokemonId: string) {
    this.liststateservice.scrollPosition = window.scrollY; // O cualquier otro estado que necesites guardar
    this.router.navigate(['/details', pokemonId]);
  }

  scrollPosistion(){
    this.liststateservice.scrollPosition = 0;
  }


}

