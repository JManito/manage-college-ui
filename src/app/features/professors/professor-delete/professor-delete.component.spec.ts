import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessorDeleteComponent } from './professor-delete.component';

describe('ProfessorDeleteComponent', () => {
  let component: ProfessorDeleteComponent;
  let fixture: ComponentFixture<ProfessorDeleteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProfessorDeleteComponent]
    });
    fixture = TestBed.createComponent(ProfessorDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
