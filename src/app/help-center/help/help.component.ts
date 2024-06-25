import { Component } from '@angular/core';
import { helpInfo } from 'src/assets/data';

import { getRandomColor } from 'src/app/functions';

@Component({
  selector: 'app-help',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.scss'],
})
export class HelpComponent {
  helpDataItems = helpInfo;
  backgroundColor = '';

  ngOnInit() {
    this.helpDataItems.forEach((help) => {
      help.backgroundColor = getRandomColor();
    });
  }
}
