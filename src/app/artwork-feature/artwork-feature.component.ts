import { Component, OnInit } from '@angular/core';
import { artworkData } from '../../assets/data';

@Component({
  selector: 'app-artwork-feature',
  templateUrl: './artwork-feature.component.html',
  styleUrls: ['./artwork-feature.component.scss'],
})
export class ArtworkFeatureComponent implements OnInit {
  artworkData = artworkData;
  currentSlide = 0;

  ngOnInit() {
    console.log(this.artworkData);
  }
}
