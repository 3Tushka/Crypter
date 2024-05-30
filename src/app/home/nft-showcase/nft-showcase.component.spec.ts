import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NftShowcaseComponent } from './nft-showcase.component';

describe('NftShowcaseComponent', () => {
  let component: NftShowcaseComponent;
  let fixture: ComponentFixture<NftShowcaseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NftShowcaseComponent]
    });
    fixture = TestBed.createComponent(NftShowcaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
