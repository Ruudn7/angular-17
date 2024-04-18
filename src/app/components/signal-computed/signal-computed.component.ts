import { Component, computed, effect, signal, untracked } from '@angular/core';

@Component({
  selector: 'app-signal-computed',
  standalone: true,
  imports: [],
  templateUrl: './signal-computed.component.html',
  styleUrl: './signal-computed.component.scss'
})
export class SignalComputedComponent {

  constructor() {
    effect(() => {
      console.log(`Count value: ${this.num1()} \nRemainig count: ${this.num2()}`)

      if (this.sumArr() > 30) {
        alert('Max value (30) reached');
        this.disabedButton = true
      }
    });
  }
  disabedButton = false;
  num1 = signal(20);
  num2 = computed(() => 100 - this.num1());

  arr = signal([1,2,3,4,]);
  sumArr = computed(() => this.arr().reduce((sum, number) => sum + number));

  counter1 = signal(0);
  counter2 = signal(0);
  counterUpdate = effect(() => {
    console.log(`Counter1: ${this.counter1()} \nCounter2: ${untracked(() => this.counter2())} `)
  })

  modifyNum(): void {
    this.num1.update(val => val + 10);
  }

  modifyArr(): void {
    this.arr.update(val => [...val, 10]);
  }

  updateCounter1() {
    this.counter1.update( v => v + 1);
  }

  updateCounter2() {
    this.counter2.update( v => v + 1)
  }

}
