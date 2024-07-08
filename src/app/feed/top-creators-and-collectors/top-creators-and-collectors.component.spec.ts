import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopCreatorsAndCollectorsComponent } from './top-creators-and-collectors.component';

describe('TopCreatorsAndCollectorsComponent', () => {
  let component: TopCreatorsAndCollectorsComponent;
  let fixture: ComponentFixture<TopCreatorsAndCollectorsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TopCreatorsAndCollectorsComponent]
    });
    fixture = TestBed.createComponent(TopCreatorsAndCollectorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
