import { Component } from '@angular/core';
import { users, profileCollection } from 'src/assets/data';

@Component({
  selector: 'app-nft-created',
  templateUrl: './nft-created.component.html',
  styleUrls: ['./nft-created.component.scss'],
})
export class NftCreatedComponent {
  showGalleryComponent: string | undefined;
  buttonClicked = false;
  changeBackgroundColor = false;
  backgroundColor = ''; // default background color

  constructor() {}

  usersData = users;
  userCollection = profileCollection;

  ngOnInit(): void {}

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
