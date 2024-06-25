import { Component, OnInit } from '@angular/core';
import { artistData } from 'src/assets/data';
import { getRandomColor } from '../../functions'; // Correct import path

@Component({
  selector: 'app-nft-artist-grid',
  templateUrl: './nft-artist-grid.component.html',
  styleUrls: ['./nft-artist-grid.component.scss'],
})
export class NftArtistGridComponent implements OnInit {
  artists = artistData;

  ngOnInit() {
    this.artists.forEach((artist) => {
      artist.backgroundColor = getRandomColor(); // Correct function call
    });
  }
}
