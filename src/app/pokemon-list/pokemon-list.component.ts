import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.services'

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit {

pokemons:any[] =[];

  constructor(
    private dataService: DataService
  ) { }

  ngOnInit(): void {
    this.dataService.getWildPokemons()
    .subscribe((response: any) => {
      response.result.forEach(result => {
        this.dataService.getMoreData(result.name)
        .subscribe((uniqResponse:any) =>{
          this.pokemons.push(uniqResponse);

        })
      })
    });
  }

}
