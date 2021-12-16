import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NostudentComponent } from './nostudent.component';

describe('NostudentComponent', () => {
  let component: NostudentComponent;
  let fixture: ComponentFixture<NostudentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NostudentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NostudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
