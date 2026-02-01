import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SnapFaceList } from './snap-face-list';

describe('SnapFaceList', () => {
  let component: SnapFaceList;
  let fixture: ComponentFixture<SnapFaceList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SnapFaceList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SnapFaceList);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
