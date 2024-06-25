import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { helpCategoryLinks } from 'src/assets/data';

@Component({
  selector: 'app-help-category',
  templateUrl: './help-category.component.html',
  styleUrls: ['./help-category.component.scss'],
})
export class HelpCategoryComponent {
  constructor(private router: Router) {}

  helpCategoriesData = helpCategoryLinks;

  isItemActive: number | null = null;
  isToggled: boolean = false;

  returnToHelp() {
    this.router.navigate(['/help']); // Use navigate method of Router to go to '/help'
  }

  toggleAccordion(itemId: number): void {
    this.isToggled = !this.isToggled;
    this.isItemActive = this.isItemActive === itemId ? null : itemId;
  }
}
