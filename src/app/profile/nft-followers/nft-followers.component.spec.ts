import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NftFollowersComponent } from './nft-followers.component';

describe('NftFollowersComponent', () => {
  let component: NftFollowersComponent;
  let fixture: ComponentFixture<NftFollowersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NftFollowersComponent]
    });
    fixture = TestBed.createComponent(NftFollowersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
