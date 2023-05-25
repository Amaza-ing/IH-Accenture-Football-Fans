import { Component, OnInit } from '@angular/core';
import { Fan } from 'src/app/models/fan.model';

@Component({
  selector: 'app-fan-page',
  templateUrl: './fan-page.component.html',
  styleUrls: ['./fan-page.component.css']
})
export class FanPageComponent implements OnInit{
  madridFans: Fan[];
  barcelonaFans: Fan[];
  fanName: string;
  fanAge!: number;
  fanCountry: string;
  fanTeam: string;
 
  constructor() {
    this.madridFans = [
      new Fan("John Doe", 26, "United States"),
      new Fan("Lucia Martin", 39, "Spain"),
    ];
    this.barcelonaFans = [
      new Fan("Manuel Garcia", 26, "Spain"),
      new Fan("Akira Yamaoka", 39, "Japan"),
    ];
 
    this.fanName = "";
    // this.fanAge = 0;
    this.fanCountry = "";
    this.fanTeam = "";
  }
 
  ngOnInit(): void {
    console.log("Fan Page Component Created");    
  }
 
  isDisabled(): boolean {
    return (
      this.fanName === "" ||
      this.fanAge === undefined ||
      this.fanAge <= 0 ||
      this.fanCountry === "" ||
      this.fanTeam === ""
    );
  }
 
  addFan(): void {
    if (this.isDisabled()) {
      alert("Please fill all the fields");
      return;
    }
 
    if (this.fanTeam === "madrid") {
      this.madridFans.push(new Fan(this.fanName, this.fanAge, this.fanCountry));
    } else {
      this.barcelonaFans.push(
        new Fan(this.fanName, this.fanAge, this.fanCountry)
      );
    }
  }
 
  removeFan(index: number, team: string): void {
    if (team === "madrid") {
      this.madridFans.splice(index, 1);
    } else {
      this.barcelonaFans.splice(index, 1);
    }
  }
}
