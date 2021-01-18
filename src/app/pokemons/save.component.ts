import { Component, OnInit } from '@angular/core';
import { Pokemones } from './pokemons';
import {PokemonService } from './pokemons.service';
import { Router, ActivatedRoute } from '@angular/router'
import swal from 'sweetalert2'


@Component({
  selector: 'app-save',
  templateUrl: './save.component.html'
})
export class SaveComponent implements OnInit {

  public pokemon: Pokemones = new Pokemones()
  public titulo: string = "Crear Pokemon"
  
  constructor(private pokemonService: PokemonService,
    private router: Router) { }


  ngOnInit() {

  }



   create(): void{
    this.pokemonService.create(this.pokemon).
    subscribe(pokemon => {
      this.router.navigate(['/pokemons'])
      swal.fire('Nuevo Pokemon',`Pokemon ${pokemon.name} creado con exito`, 'success')
}
    )
  }

}
