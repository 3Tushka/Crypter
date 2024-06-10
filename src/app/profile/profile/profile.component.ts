import { Component, OnInit } from '@angular/core';
import { users } from 'src/assets/data';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  showGalleryComponent: string | undefined;
  constructor() {}

  usersData = users;

  ngOnInit(): void {}
}
