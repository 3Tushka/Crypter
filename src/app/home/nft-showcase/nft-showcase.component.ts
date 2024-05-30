import { Component } from '@angular/core';
import { showcaseData } from 'src/assets/data';

@Component({
  selector: 'app-nft-showcase',
  templateUrl: './nft-showcase.component.html',
  styleUrls: ['./nft-showcase.component.scss'],
})
export class NftShowcaseComponent {
  nftShowcase = showcaseData;
}
