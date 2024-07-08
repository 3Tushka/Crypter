import { Component } from '@angular/core';
import { feedCollections, feedCreators } from 'src/assets/data';

@Component({
  selector: 'app-top-creators-and-collectors',
  templateUrl: './top-creators-and-collectors.component.html',
  styleUrls: ['./top-creators-and-collectors.component.scss'],
})
export class TopCreatorsAndCollectorsComponent {
  feedCollectionsData = feedCollections;

  feedCreatorsData = feedCreators;
}
