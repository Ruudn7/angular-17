import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-color-input',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './color-input.component.html',
  styleUrl: './color-input.component.scss'
})
export class ColorInputComponent {

  color = '#10da28';
  sampleArr = [1,2,3,4,5,6,7,8,9]

  checkColor(e: HTMLInputElement): void {
    setTimeout(() => {
      e.value = '#FFFFFF'
    }, 1000)
  }


}
