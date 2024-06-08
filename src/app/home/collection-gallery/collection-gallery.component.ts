import { AfterViewInit, Component } from '@angular/core';
import { collectionGallery } from 'src/assets/data';

import Swiper from 'swiper';

@Component({
  selector: 'app-collection-gallery',
  templateUrl: './collection-gallery.component.html',
  styleUrls: ['./collection-gallery.component.scss'],
})
export class CollectionGalleryComponent implements AfterViewInit {
  collectionGalleryItems = collectionGallery;

  ngAfterViewInit() {
    const swiper = new Swiper('.swiper-container', {
      slidesPerView: 'auto',
      pagination: { clickable: true },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      autoplay: {
        delay: 1000,
      },
      loop: true,
    });
  }
}
