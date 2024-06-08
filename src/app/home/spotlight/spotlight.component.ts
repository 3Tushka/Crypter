import { Component } from '@angular/core';
import { spotlightData } from 'src/assets/data';

interface SpotlightItem {
  id: number;
  image: string;
  collection: string;
  price: string;
  avatars: string[];
  date: string;
}

@Component({
  selector: 'app-spotlight',
  templateUrl: './spotlight.component.html',
  styleUrls: ['./spotlight.component.scss'],
})
export class SpotlightComponent {
  spotlightItems: SpotlightItem[] = spotlightData;
  filteredItems: SpotlightItem[] = []; // Declare the filteredItems property

  hoveredItem: SpotlightItem | null = null;
  isHovered: boolean = false;

  ngOnInit(): void {
    this.filterDataByDays(60);
  }

  filterDataByDays(days: number): void {
    const currentDate = new Date();

    this.filteredItems = this.spotlightItems.filter((item) => {
      const itemDate = new Date(item.date);
      const diffTime = Math.abs(currentDate.getTime() - itemDate.getTime());
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); // convert difference in milliseconds to days

      if (days === 1) {
        return diffDays < 2;
      } else if (days <= 7) {
        return diffDays <= days;
      } else if (days <= 30) {
        return diffDays <= days;
      } else {
        return true;
      }
    });

    console.log(this.filteredItems);
  }

  onMouseEnter(item: SpotlightItem) {
    this.hoveredItem = item;
    this.isHovered = true;
  }

  onMouseLeave() {
    this.hoveredItem = null;
    this.isHovered = false;
  }
}
