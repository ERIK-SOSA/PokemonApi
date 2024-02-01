import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { PokeApiService } from './../../services/PokeApi/poke-api.service'
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pokemondetails',
  templateUrl: './pokemondetails.component.html',
  styleUrls: ['./pokemondetails.component.scss']
})
export class PokemondetailsComponent implements OnInit{
  ItemsArray: any;
  pokemon: any;
  count: number = 0;

  constructor(private pokeapiservice: PokeApiService, private route: ActivatedRoute, private location: Location){

  }

  ngOnInit(): void {
    this.pokeapiservice.getPokemonList().subscribe((data: any) => {
      this.ItemsArray = data.results
      // console.log("Datos Detalles", data.results)
    });


    this.route.params.subscribe(params => {
      const name = params['name'];
      this.pokeapiservice.getPokemonDetails(name).subscribe(data => {
        this.pokemon = data;
        console.log(data)
      });
    });

    

  }

  goBack() {
    this.location.back();
  }

}
