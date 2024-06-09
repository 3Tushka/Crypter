import { Component } from '@angular/core';
import { users } from 'src/assets/data';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent {
  constructor() {}

  usersData = users;

  ngOnInit(): void {}
}
