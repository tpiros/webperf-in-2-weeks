import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CharacterService {
  private url = 'https://swapi.dev/api/people';

  constructor(private httpClient: HttpClient) {}

  getCharacters() {
    return this.httpClient.get(this.url);
  }
}
