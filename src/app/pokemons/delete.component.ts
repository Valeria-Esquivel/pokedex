import { Component, OnInit } from '@angular/core';
import { Pokemones } from './pokemons';
import {PokemonService } from './pokemons.service';
import { Router, ActivatedRoute } from '@angular/router'
import swal from 'sweetalert2'
import { HttpClient, HttpHeaders} from '@angular/common/http';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html'
})
export class DeleteComponent implements OnInit {

  public pokemon: Pokemones = new Pokemones()
  public titulo: string = "Borrar Pokemon"

  constructor(private pokemonService: PokemonService,
    private router: Router,
    private activatedRoute: ActivatedRoute) { }


  ngOnInit() {

  }

  



}
