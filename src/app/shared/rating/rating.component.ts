import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mt-rating',
  templateUrl: './rating.component.html'
})
export class RatingComponent implements OnInit {

  rates: number[] = [1, 2, 3, 4, 5];

  rate: number = 0;

  constructor() { }

  ngOnInit() {
  }

}
