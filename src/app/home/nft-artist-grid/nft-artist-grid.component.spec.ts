import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NftArtistGridComponent } from './nft-artist-grid.component';

describe('NftArtistGridComponent', () => {
  let component: NftArtistGridComponent;
  let fixture: ComponentFixture<NftArtistGridComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NftArtistGridComponent]
    });
    fixture = TestBed.createComponent(NftArtistGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
