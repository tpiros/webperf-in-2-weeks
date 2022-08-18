import { Component, OnInit } from '@angular/core';
import { CharacterService } from '../services/character.service';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css'],
})
export class CharacterComponent implements OnInit {
  characters: any;
  constructor(private service: CharacterService) {}

  ngOnInit(): void {
    this.service
      .getCharacters()
      .subscribe((response: any) => (this.characters = response.results));
  }
}
