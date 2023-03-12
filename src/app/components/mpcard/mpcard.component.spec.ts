import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MpcardComponent } from './mpcard.component';

describe('MpcardComponent', () => {
  let component: MpcardComponent;
  let fixture: ComponentFixture<MpcardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MpcardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MpcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
