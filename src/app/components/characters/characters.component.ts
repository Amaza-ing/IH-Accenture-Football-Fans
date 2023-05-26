import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { CharactersRequestsService } from 'src/app/services/characters-requests.service';
import { CharacterInterface } from 'src/app/interfaces/character-interface';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent {
  characterList: any;

  constructor(private characterRequestService: CharactersRequestsService) {}

  getCharacters(): void {
    this.characterRequestService.getCharacters().subscribe(
      {
        next: (data) => {
          console.log(data);
          this.characterList = data;       
        }
      }
    )
  }

  postCharacter(): void {

    const newCharacter: CharacterInterface = {
      name: "R2D2",
      occupation: "Droid",
      weapon: "himself",
      debt: false
    }

    this.characterRequestService.postCharacter(newCharacter).subscribe(
      {
        next: (data) => {
          console.log(data);
        }
      }
    )
  }

  putCharacter(): void {

    const newCharacter: any = {
      name: "R2D2",
      occupation: "Galactic Droid",
      weapon: "himself",
      debt: false
    }

    this.characterRequestService.putCharacter(8, newCharacter).subscribe(
      {
        next: (data) => {
          console.log(data);
        }
      }
    )
  }

  deleteCharacter(): void {

    this.characterRequestService.deleteCharacter(8).subscribe(
      {
        next: (data) => {
          console.log(data);
        }
      }
    )
  }

}
