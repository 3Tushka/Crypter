import { Component } from '@angular/core';

interface User {
  email: string;
  displayName: string;
  about: string;
}

@Component({
  selector: 'app-profile-settings',
  templateUrl: './profile-settings.component.html',
  styleUrls: ['./profile-settings.component.scss'],
})
export class ProfileSettingsComponent {
  user: User = {
    email: ' ',
    displayName: ' ',
    about: ' ',
  };
}
