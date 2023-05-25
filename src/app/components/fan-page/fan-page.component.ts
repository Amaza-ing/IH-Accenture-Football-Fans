import { Component, OnInit } from '@angular/core';
import { Fan } from 'src/app/models/fan.model';
import { Observable } from 'rxjs';
import { RandomUserService } from 'src/app/services/random-user.service';

@Component({
  selector: 'app-fan-page',
  templateUrl: './fan-page.component.html',
  styleUrls: ['./fan-page.component.css'],
})
export class FanPageComponent implements OnInit {
  madridFans: Fan[];
  barcelonaFans: Fan[];
  fanName: string;
  fanAge!: number;
  fanCountry: string;
  fanTeam: string;

  counter: number;

  countDown$: Observable<number>;

  constructor(private randomUserService: RandomUserService) {
    this.madridFans = [
      new Fan('John Doe', 26, 'United States'),
      new Fan('Lucia Martin', 39, 'Spain'),
    ];
    this.barcelonaFans = [
      new Fan('Manuel Garcia', 26, 'Spain'),
      new Fan('Akira Yamaoka', 39, 'Japan'),
    ];

    this.fanName = '';
    // this.fanAge = 0;
    this.fanCountry = '';
    this.fanTeam = '';

    this.counter = 0;

    // Create a simple observable that emits decreasing numbers each second
    this.countDown$ = new Observable<number>((observer) => {
      let counter = 10;
      setInterval(() => {
        observer.next(counter--); // send a new element
        if (counter < 0) {
          observer.complete(); // finish transmission
        }
      }, 1000);
    });
  }

  ngOnInit(): void {
    // Execute the observable with an observer object
    // this.countDown$.subscribe(
    //   { // observer object
    //     next: (data) => {
    //       // Update the counter value 
    //       this.counter = data;
    //     },
    //     complete: () => {
    //       console.log("Complete");
    //     }
    //   }
    // );


    this.randomUserService.sayHello();
  }

  isDisabled(): boolean {
    return (
      this.fanName === '' ||
      this.fanAge === undefined ||
      this.fanAge <= 0 ||
      this.fanCountry === '' ||
      this.fanTeam === ''
    );
  }

  addFan(): void {
    if (this.isDisabled()) {
      alert('Please fill all the fields');
      return;
    }

    if (this.fanTeam === 'madrid') {
      this.madridFans.push(new Fan(this.fanName, this.fanAge, this.fanCountry));
    } else {
      this.barcelonaFans.push(
        new Fan(this.fanName, this.fanAge, this.fanCountry)
      );
    }
  }

  removeFan(index: number, team: string): void {
    if (team === 'madrid') {
      this.madridFans.splice(index, 1);
    } else {
      this.barcelonaFans.splice(index, 1);
    }
  }


  addRandomFan(team: string): void {
    this.randomUserService.getRandomUser().subscribe(
      {
        next: (dataResult) => { // Response data
          console.log(dataResult);
          
          const name: string = `${dataResult.results[0].name.title} ${dataResult.results[0].name.first} ${dataResult.results[0].name.last}`;
          const age: number = dataResult.results[0].dob.age;
          const country: string = dataResult.results[0].location.country;
          const profilePicture: string = dataResult.results[0].picture.large;
 
          const randomFan: Fan = new Fan(name, age, country, profilePicture);
          if(team === 'madrid') {
            this.madridFans.push(randomFan);
          } else {
            this.barcelonaFans.push(randomFan);
          }
        },
        error: (error) => { // Error response
          console.log(error);
        }
      }
    );
 
  }
}
