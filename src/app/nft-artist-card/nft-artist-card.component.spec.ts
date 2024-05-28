import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NftArtistCardComponent } from './nft-artist-card.component';

describe('NftArtistCardComponent', () => {
  let component: NftArtistCardComponent;
  let fixture: ComponentFixture<NftArtistCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NftArtistCardComponent]
    });
    fixture = TestBed.createComponent(NftArtistCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
