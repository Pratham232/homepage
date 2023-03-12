import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientreviewcardComponent } from './patientreviewcard.component';

describe('PatientreviewcardComponent', () => {
  let component: PatientreviewcardComponent;
  let fixture: ComponentFixture<PatientreviewcardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatientreviewcardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PatientreviewcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
