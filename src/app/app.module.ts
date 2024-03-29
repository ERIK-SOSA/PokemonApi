import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { NgxPaginationModule } from 'ngx-pagination';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PokeApiService } from './services/PokeApi/poke-api.service';
import { PokemondetailsComponent } from './components/pokemondetails/pokemondetails.component';
import { PokemonlistComponent } from './components/pokemonlist/pokemonlist.component';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';

@NgModule({
  declarations: [
    AppComponent,
    PokemondetailsComponent,
    PokemonlistComponent,
    HomeComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule,
  ],
  providers: [PokeApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
