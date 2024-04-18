import { CommonModule } from '@angular/common';
import { Component, OnInit, signal } from '@angular/core';

@Component({
  selector: 'app-signals',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './signals.component.html',
  styleUrl: './signals.component.scss'
})
export class SignalsComponent implements OnInit {

  //counter

  countSet = signal<number>(1);
  countUpdate = signal<number>(1);

  incrCounterSet():void {
    this.countSet.set(this.countSet() + 1);
  }

  incrCounterUpdate():void {
    this.countUpdate.update(value => value + 1);
  }

  //cart

  cart = signal([{
    name: 'Product 1',
    emial: 'abc@example.com'
  }]);

  ngOnInit(): void {
    console.log('prev state ', this.cart() )
    this.cart.update((cartDetails) => ({
      ...cartDetails,
      qty: 3,
      name: 'Product 2'
    }))
  }

}
