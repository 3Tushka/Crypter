import { Component } from '@angular/core';
import { nftItemDetails } from 'src/assets/data';
import { getRandomColor } from 'src/app/functions';

@Component({
  selector: 'app-nft-details',
  templateUrl: './nft-details.component.html',
  styleUrls: ['./nft-details.component.scss'],
})
export class NftDetailsComponent {
  constructor() {}

  nftDetailsData = nftItemDetails;

  isModalVisible: boolean = false;

  showOfferModal(): void {
    this.isModalVisible = true;
  }
}
