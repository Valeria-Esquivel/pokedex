import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { PokemonComponent } from './pokemons/pokemons.component';
import { PokemonService } from './pokemons/pokemons.service';
import { RouterModule, Routes } from '@angular/router';
import { SaveComponent } from './pokemons/save.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UpdateComponent } from './pokemons/update.component';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { DeleteComponent } from './pokemons/delete.component';



const routes: Routes = [
  {path: "", redirectTo: '/pokemons', pathMatch: 'full'},
  {path: "pokemons", component:PokemonComponent},
  {path: "pokemons/save", component:SaveComponent},
  {path: "pokemons/update/:pokemonId", component:UpdateComponent},
  {path: "pokemons/delete/:pokemonId", component:DeleteComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PokemonComponent,
    SaveComponent,
    UpdateComponent,
    PokemonListComponent,
    DeleteComponent

  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    FormsModule
  ],
  providers: [PokemonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
