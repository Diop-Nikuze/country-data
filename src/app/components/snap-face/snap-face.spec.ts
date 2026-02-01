import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SnapFace } from './snap-face';

describe('SnapFace', () => {
  let component: SnapFace;
  let fixture: ComponentFixture<SnapFace>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SnapFace]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SnapFace);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
