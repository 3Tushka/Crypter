import { Component } from '@angular/core';
import { artworkData, nftCardData } from 'src/assets/data';

interface NftFilteredItem {
  category: string;
  imageUrl: string;
  title: string;
  creator: { username: string; avatarUrl: string; verified: boolean };
  bidding: { currentBid: number; currency: string };
  buyNowPrice: { amount: number; currency: string };
  date: string;
}

@Component({
  selector: 'app-nft-discover-gallery',
  templateUrl: './nft-discover-gallery.component.html',
  styleUrls: ['./nft-discover-gallery.component.scss'],
})
export class NftDiscoverGalleryComponent {
  activeTab = 'all';
  changeBackgroundColor = false;
  backgroundColor = ''; // default background color
  fontColor = '';

  nftGalleryItems = nftCardData;
  nftFillteredItems: NftFilteredItem[] = [];

  tabs = [
    { id: 'all', label: 'All' },
    { id: 'nfts', label: 'NFTs', count: this.nftGalleryItems.length },
    { id: 'collections', label: 'Collections', count: '123,987' },
    { id: 'artists', label: 'Artist', count: '45,678' },
  ];

  ngOnInit(): void {
    this.setTimeFilter(0);
  }

  selectTab(tab: string) {
    this.activeTab = tab;
  }

  setTimeFilter(filter: number) {
    if (filter === 0) {
      this.nftFillteredItems = this.nftGalleryItems;
      console.log(this.nftFillteredItems);
      return;
    }

    const currentDate = new Date();

    this.nftFillteredItems = this.nftGalleryItems.filter((item) => {
      const itemDate = new Date(item.date);
      const diffTime = Math.abs(currentDate.getTime() - itemDate.getTime());
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); // convert difference in milliseconds to days

      if (filter === 1) {
        return diffDays < 2;
      } else if (filter <= 7) {
        return diffDays <= filter;
      } else if (filter <= 30) {
        return diffDays <= filter;
      } else {
        return diffDays;
      }
    });
    console.log(this.nftFillteredItems);
  }

  refreshData() {
    console.log('Refreshing data...');
    // Add your data refresh logic here
  }

  changeBackgroundColorOnClick() {
    this.backgroundColor = this.backgroundColor === 'white' ? 'black' : 'white';
    this.fontColor = this.fontColor === 'black' ? 'white' : 'black';
    console.log('backgroundColor', this.backgroundColor);
  }
}
