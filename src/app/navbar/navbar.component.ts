import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  checkInput(event: any) {
    const inputField = event.target;
    if (inputField.value) {
      inputField.classList.add('has-input');
    } else {
      inputField.classList.remove('has-input');
    }
  }
}
