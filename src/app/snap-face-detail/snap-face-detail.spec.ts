import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SnapFaceDetail } from './snap-face-detail';

describe('SnapFaceDetail', () => {
  let component: SnapFaceDetail;
  let fixture: ComponentFixture<SnapFaceDetail>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SnapFaceDetail]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SnapFaceDetail);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
