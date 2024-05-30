import { Component, OnInit } from '@angular/core';
import { artistData } from 'src/assets/data';

@Component({
  selector: 'app-nft-artist-grid',
  templateUrl: './nft-artist-grid.component.html',
  styleUrls: ['./nft-artist-grid.component.scss'],
})
export class NftArtistGridComponent implements OnInit {
  artists = artistData;

  ngOnInit() {
    this.artists.forEach((artist) => {
      artist.backgroundColor = this.getRandomColor();
    });
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
