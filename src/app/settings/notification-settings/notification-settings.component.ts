import { Component } from '@angular/core';
interface Notification {
  text: string;
  enabled: boolean;
  subtitle: string;
}
@Component({
  selector: 'app-notification-settings',
  templateUrl: './notification-settings.component.html',
  styleUrls: ['./notification-settings.component.scss'],
})
export class NotificationSettingsComponent {
  notifications: Notification[] = [
    {
      text: 'Auction notification',
      enabled: false,
      subtitle: 'Amet nesciunt voluptas quas cum sequi a pariatur harum.',
    },
    {
      text: 'Buy now notification',
      enabled: true,
      subtitle: 'Dolorem vitae ratione aut assumenda accusamus.',
    },
    {
      text: 'Offer notification',
      enabled: false,
      subtitle: 'Qui nulla fuga omnis aperiam nostrum excepturi asperiores.',
    },
    {
      text: 'Crypter news',
      enabled: true,
      subtitle: 'Placeat quo qui cum ea nisi optio.',
    },
  ];

  toggleNotification(index: number): void {
    this.notifications[index].enabled = !this.notifications[index].enabled;
  }
}
