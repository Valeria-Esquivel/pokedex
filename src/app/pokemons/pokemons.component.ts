import { Component, OnInit } from '@angular/core';
import { Pokemones } from './pokemons';
import {PokemonService } from './pokemons.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.css']
})


export class PokemonComponent implements OnInit {

  pokemon: Pokemones[];

  constructor(public pokemonService: PokemonService) { }

ngOnInit() {
  this.pokemonService.getPokemones().subscribe(
    pokemon => this.pokemon = pokemon
  );

}

delete(pokemon: Pokemones): void{
  Swal.fire({
    title: 'Are you sure?',
    text: "You won't be able to revert this!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, delete it!'
  }).then((result) => {
    if (result.isConfirmed) {
      this.pokemonService.delete(pokemon.pokemonId).subscribe(
        response =>  {
        this.pokemon = this.pokemon.filter(cli => cli!== pokemon)
        Swal.fire(
            'Deleted!',
            'Your file has been deleted.',
            'success'
          )
        }
      )

    }
  })
}

}
