import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokemonlistComponent } from './components/pokemonlist/pokemonlist.component';
import { PokemondetailsComponent } from './components/pokemondetails/pokemondetails.component';

const routes: Routes = [
  {
    path: "",
    component: PokemonlistComponent
  },
  {
    path: "selpokemon",
    component: PokemondetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
