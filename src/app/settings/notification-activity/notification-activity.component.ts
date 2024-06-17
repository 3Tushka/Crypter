import { Component } from '@angular/core';

@Component({
  selector: 'app-notification-activity',
  templateUrl: './notification-activity.component.html',
  styleUrls: ['./notification-activity.component.scss'],
})
export class NotificationActivityComponent {
  showNotifications: boolean = false;
  showActivity: boolean = true;

  activeButton: string = 'notification'; // Default to 'notification'

  setActiveButton(buttonName: string): void {
    this.activeButton = buttonName;
  }
}
