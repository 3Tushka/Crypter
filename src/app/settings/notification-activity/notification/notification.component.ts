import { Component } from '@angular/core';
import { users } from 'src/assets/data';
interface Filter {
  name: string;
  selected: boolean;
}

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss'],
})
export class NotificationComponent {
  notificationFollowers = users;

  showNotifications: boolean = false;
  showActivity: boolean = true;

  filters: Filter[] = [
    { name: 'Sales', selected: false },
    { name: 'Followers', selected: true },
    { name: 'Listings', selected: false },
    { name: 'Mint', selected: true },
    { name: 'Bids', selected: false },
    { name: 'Purchase', selected: false },
    { name: 'Burns', selected: false },
    { name: 'Transfers', selected: false },
  ];

  selectAll(): void {
    this.filters = this.filters.map((filter) => ({
      ...filter,
      selected: true,
    }));
  }

  deselectAll(): void {
    this.filters = this.filters.map((filter) => ({
      ...filter,
      selected: false,
    }));
  }
}
