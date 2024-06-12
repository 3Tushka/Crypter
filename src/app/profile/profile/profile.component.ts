import { Component, OnInit } from '@angular/core';
import { profileCollection, users } from 'src/assets/data';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  selectComponent: string = 'nft-followers';

  buttonClicked = false;
  changeBackgroundColor = false;
  backgroundColor = ''; // default background color

  constructor() {}

  usersData = users;
  userCollection = profileCollection;

  ngOnInit(): void {}

  showComponent(component: string) {
    this.selectComponent = component;
  }

  changeBackgroundColorOnClick() {
    this.backgroundColor = this.backgroundColor === 'white' ? 'black' : 'white';
    console.log('backgroundColor', this.backgroundColor);
  }

  changeToGridView() {
    this.buttonClicked = false;
  }

  changeToListView() {
    this.buttonClicked = true;
  }

  getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
}
