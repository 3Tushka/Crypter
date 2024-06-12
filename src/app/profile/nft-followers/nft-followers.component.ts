import { Component } from '@angular/core';
import { users } from 'src/assets/data';

@Component({
  selector: 'app-nft-followers',
  templateUrl: './nft-followers.component.html',
  styleUrls: ['./nft-followers.component.scss'],
})
export class NftFollowersComponent {
  showFollowerBox: string = 'nft-followers';

  followers = users;

  displayFollowers = [];
  startIndex = 0;
  displayCount = 3; // Change this to display more or fewer items at once

  constructor() {}

  // updateDisplayFollowers() {
  //   this.displayFollowers = this.followers.slice(
  //     this.startIndex,
  //     this.startIndex + this.displayCount
  //   );
  // }

  // scrollUp() {
  //   if (this.startIndex > 0) {
  //     this.startIndex--;
  //     this.updateDisplayFollowers();
  //   }
  // }

  // scrollDown() {
  //   if (this.startIndex < this.followers.length - this.displayCount) {
  //     this.startIndex++;
  //     this.updateDisplayFollowers();
  //   }
  // }
}
