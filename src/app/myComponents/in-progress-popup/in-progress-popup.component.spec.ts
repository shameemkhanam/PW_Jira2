import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InProgressPopupComponent } from './in-progress-popup.component';

describe('InProgressPopupComponent', () => {
  let component: InProgressPopupComponent;
  let fixture: ComponentFixture<InProgressPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InProgressPopupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InProgressPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
