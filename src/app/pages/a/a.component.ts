import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-a',
  standalone: true,
  imports: [CommonModule],
  template: `
    <p>
      a works!
    </p>
  `,
  styles: [
  ]
})
export class AComponent {

}
