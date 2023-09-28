import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesDeleteComponent } from './courses-delete.component';

describe('CoursesDeleteComponent', () => {
  let component: CoursesDeleteComponent;
  let fixture: ComponentFixture<CoursesDeleteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CoursesDeleteComponent]
    });
    fixture = TestBed.createComponent(CoursesDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
