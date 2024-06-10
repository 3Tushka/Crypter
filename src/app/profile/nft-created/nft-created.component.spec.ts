import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NftCreatedComponent } from './nft-created.component';

describe('NftCreatedComponent', () => {
  let component: NftCreatedComponent;
  let fixture: ComponentFixture<NftCreatedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NftCreatedComponent]
    });
    fixture = TestBed.createComponent(NftCreatedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
