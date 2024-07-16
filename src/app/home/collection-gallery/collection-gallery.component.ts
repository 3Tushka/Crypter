import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { initializeCarousel } from 'src/app/functions';
import { collectionGallery } from 'src/assets/data';

@Component({
  selector: 'app-collection-gallery',
  templateUrl: './collection-gallery.component.html',
  styleUrls: ['./collection-gallery.component.scss'],
})
export class CollectionGalleryComponent implements AfterViewInit {
  collectionGalleryItems = collectionGallery;

  @ViewChild('gallery') tabsContainer!: ElementRef;
  @ViewChild('nextArrow') nextArrow!: ElementRef;
  @ViewChild('prevArrow') prevArrow!: ElementRef;

  ngAfterViewInit() {
    initializeCarousel(this.tabsContainer, this.nextArrow, this.prevArrow);
  }
}
