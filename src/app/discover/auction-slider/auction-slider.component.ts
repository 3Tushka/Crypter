import { Component } from '@angular/core';
import { nftAuctionData } from 'src/assets/data';

const dataUrl = '../../../assets/data.ts';

@Component({
  selector: 'app-auction-slider',
  templateUrl: './auction-slider.component.html',
  styleUrls: ['./auction-slider.component.scss'],
})
export class AuctionSliderComponent {
  auctionItems = nftAuctionData;

  currentSliderIndex = 0;

  constructor() {}

  nextSlide() {
    this.currentSliderIndex =
      (this.currentSliderIndex + 1) % this.auctionItems.length;
  }

  // Function to go to the previous slide
  prevSlide() {
    this.currentSliderIndex =
      (this.currentSliderIndex - 1 + this.auctionItems.length) %
      this.auctionItems.length;
  }
}
