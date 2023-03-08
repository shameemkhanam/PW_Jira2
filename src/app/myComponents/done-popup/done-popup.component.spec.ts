import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonePopupComponent } from './done-popup.component';

describe('DonePopupComponent', () => {
  let component: DonePopupComponent;
  let fixture: ComponentFixture<DonePopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DonePopupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DonePopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
