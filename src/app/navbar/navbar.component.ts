import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  constructor(private router: Router) {}

  checkInput(event: any) {
    const inputField = event.target;
    if (inputField.value) {
      inputField.classList.add('has-input');
    } else {
      inputField.classList.remove('has-input');
    }
  }

  goToWalletPage() {
    this.router.navigate(['/wallet']);
  }
}
