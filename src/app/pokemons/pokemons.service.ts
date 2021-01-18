import { Injectable } from '@angular/core';
import { poke } from './pokemons.json';
import { Pokemones } from './pokemons';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { of ,Observable } from 'rxjs';
import { map } from 'rxjs/operators';




@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  private urlEndPoint:string = 'https://pokemonteambravos.herokuapp.com/pokedex/api/pokemons/save';
  private baseUrl: string = 'https://pokemonteambravos.herokuapp.com/pokedex/api/pokemons/all';
  private baseUrl_delete: string = 'https://pokemonteambravos.herokuapp.com/pokedex/api/pokemons/delete/${pokemonId}'
  private baseUrl_update: string = 'https://pokemonteambravos.herokuapp.com/pokedex/api/pokemons/update'
  private httpHeaders = new HttpHeaders({'Content-Type':'application/json'})
  private baseSpriteUrl: string = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';

  constructor(private http: HttpClient) { }

  getPokemones(): Observable<Pokemones[]> {
  //  return of(poke);

  return this.http.get(this.baseUrl).pipe(
    map((response) => response as Pokemones[])
  );

  }

//create(pokemon:Pokemones):Observable<any>{
//  return this.http.post<Pokemones>(this.baseUrl,pokemon,{headers:this.httpHeaders})
//}


create(pokemon:Pokemones) : Observable<any>{
  return this.http.post<Pokemones>(this.urlEndPoint, pokemon, {headers: this.httpHeaders})
}

getPokemon(pokemonId): Observable<any>{
  return this.http.get<Pokemones>(`${this.baseUrl_update}/${pokemonId}`)
}

update(pokemon:Pokemones): Observable<any>{
  return this.http.put<Pokemones>(`${this.baseUrl_update}/${pokemon.pokemonId}`, pokemon, {headers:this.httpHeaders})
}

delete(pokemonId: number): Observable<any>{
  return this.http.delete<Pokemones>(`${this.baseUrl_delete}/${pokemonId}`, {headers:this.httpHeaders})
}

}
