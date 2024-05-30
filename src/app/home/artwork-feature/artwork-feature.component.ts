import {
  Component,
  ElementRef,
  HostListener,
  OnInit,
  Renderer2,
} from '@angular/core';
import { artworkData } from '../../../assets/data';

@Component({
  selector: 'app-artwork-feature',
  templateUrl: './artwork-feature.component.html',
  styleUrls: ['./artwork-feature.component.scss'],
})
export class ArtworkFeatureComponent implements OnInit {
  constructor(private el: ElementRef, private renderer: Renderer2) {}

  artworkData = artworkData;
  currentSlide = 0;
  totalSlides = this.artworkData.length;
  scrollEnabled = false;

  ngOnInit() {
    console.log(this.artworkData);
  }

  @HostListener('document:keydown', ['$event'])
  onKeyBoardScroll(event: KeyboardEvent) {
    if (event.key === 'ArrowRight') {
      this.nextSlide();
    } else if (event.key === 'ArrowLeft') {
      this.previousSlide();
    }
  }

  nextSlide() {
    if (this.currentSlide < this.artworkData.length - 1) {
      this.currentSlide++;
    }
  }

  previousSlide() {
    if (this.currentSlide > 0) {
      this.currentSlide--;
    }
  }
}
