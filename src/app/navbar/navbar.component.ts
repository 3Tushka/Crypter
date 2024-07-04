import { Component, AfterViewInit, ElementRef, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements AfterViewInit {
  constructor(
    private router: Router,
    private elementRef: ElementRef,
    private renderer: Renderer2,
    public auth: AuthService
  ) {}

  walletInfo = {
    address: '0x1e86...5338',
    balanceETH: 3.345,
    balanceUSD: 5448,
  };

  walletIsConnected = true;
  dropdownOpen = false;

  ngAfterViewInit() {
    const navbar = this.elementRef.nativeElement;
    const parentElement = this.renderer.parentNode(navbar);
    const parentStyle = window.getComputedStyle(parentElement);
    const backgroundImage = parentStyle.getPropertyValue('background-image');
    const links = navbar.querySelectorAll('a');

    const button = navbar.querySelector('.connect-wallet');

    console.log('button', button);

    if (backgroundImage !== 'none') {
      links.forEach((link: number) => {
        this.renderer.setStyle(link, 'color', 'white');
      });
      this.renderer.setStyle(button, 'color', 'white');
      this.renderer.setStyle(button, 'border', '1px solid white');
    }
  }

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

  toggleDropdown() {
    this.dropdownOpen = !this.dropdownOpen;
  }

  manageWallet(): void {
    // Logic to manage wallet
    console.log('Managing wallet');
  }

  disconnectWallet(): void {
    // Logic to disconnect wallet
    console.log('Wallet disconnected');
  }
}
