import { Component, OnInit } from '@angular/core';
import { Pokemones } from './pokemons';
import {PokemonService } from './pokemons.service';
import { Router, ActivatedRoute } from '@angular/router'
import swal from 'sweetalert2'

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html'
})
export class UpdateComponent implements OnInit {

  public pokemon: Pokemones = new Pokemones()
  public titulo: string = "Crear Pokemon"

  constructor(private pokemonService: PokemonService,
    private router: Router,
    private activatedRoute: ActivatedRoute) { }


  ngOnInit() {
    this.cargarPokemon()
  }

  cargarPokemon(): void{
    this.activatedRoute.params.subscribe(params =>{
      let pokemonId = params ['pokemonId']
      if(pokemonId){
        this.pokemonService.getPokemon(pokemonId).subscribe( (pokemon) => this.pokemon = pokemon)
      }
    })
  }

update():void{
  this.pokemonService.update(this.pokemon)
  .subscribe(pokemon =>{
    this.router.navigate(['/pokemons'])
    swal.fire('Pokemon Actualizado', `Pokemon ${pokemon.name} actualizado con exito`, 'success')
  })
}

}
