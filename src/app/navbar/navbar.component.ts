import { Component, AfterViewInit, ElementRef, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements AfterViewInit {
  constructor(
    private router: Router,
    private elementRef: ElementRef,
    private renderer: Renderer2
  ) {}

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
}
