import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NftDiscoverGalleryComponent } from './nft-discover-gallery.component';

describe('NftDiscoverGalleryComponent', () => {
  let component: NftDiscoverGalleryComponent;
  let fixture: ComponentFixture<NftDiscoverGalleryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NftDiscoverGalleryComponent]
    });
    fixture = TestBed.createComponent(NftDiscoverGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
