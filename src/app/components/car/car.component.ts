import {Component, Input, OnInit} from '@angular/core';
import {ICar} from "../../interfaces/ICar";

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  @Input()
  car: ICar;

  constructor() { }

  ngOnInit(): void {
  }

}
