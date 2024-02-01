import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PokemonlistComponent } from './components/pokemonlist/pokemonlist.component';
import { PokemondetailsComponent } from './components/pokemondetails/pokemondetails.component';
import { SearchComponent } from './components/search/search.component';

const routes: Routes = [
  
  {
    path: "",
    component: HomeComponent
  },
  
  {
    path: "list",
    component: PokemonlistComponent
  },

  {
    path: "details/:name",
    component: PokemondetailsComponent
  },

  {
    path: "search",
    component: SearchComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
