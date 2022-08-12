import { Component, OnInit } from '@angular/core';
import { CharacterService } from '../services/character.service';
@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css'],
})
export class CharactersComponent implements OnInit {
  characters: any;
  constructor(private service: CharacterService) {}

  ngOnInit(): void {
    this.service
      .getCharacters()
      .subscribe((response: any) => (this.characters = response.results));
  }
}
