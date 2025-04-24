import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent {
  closeWarning() {
    const popup = document.querySelector('.warning-popup');
    if (popup) {
      popup.remove();
    }
  }
}
