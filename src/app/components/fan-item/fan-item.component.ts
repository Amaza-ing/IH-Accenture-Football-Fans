import { Component, Input } from '@angular/core';
import { Fan } from 'src/app/models/fan.model';

@Component({
  selector: 'app-fan-item',
  templateUrl: './fan-item.component.html',
  styleUrls: ['./fan-item.component.css']
})
export class FanItemComponent {

  @Input("fanProp")
  fan!: Fan;

  @Input()
  index: number;

  constructor() {
    // this.fan = new Fan("", 0, "");
    this.index = 0;
  }

  removeFan(): void {
    console.log("deleting fan..." + this.index);
  }

}
