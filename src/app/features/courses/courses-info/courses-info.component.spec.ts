import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesInfoComponent } from './courses-info.component';

describe('CoursesInfoComponent', () => {
  let component: CoursesInfoComponent;
  let fixture: ComponentFixture<CoursesInfoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CoursesInfoComponent]
    });
    fixture = TestBed.createComponent(CoursesInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
