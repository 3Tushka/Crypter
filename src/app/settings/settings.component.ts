import { Component } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
})
export class SettingsComponent {
  showProfileSettings: boolean = false;
  showWalletSettings: boolean = false;
  showNotificationSettings: boolean = true;
}
