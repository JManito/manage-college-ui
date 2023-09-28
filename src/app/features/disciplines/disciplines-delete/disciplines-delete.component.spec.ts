import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisciplinesDeleteComponent } from './disciplines-delete.component';

describe('DisciplinesDeleteComponent', () => {
  let component: DisciplinesDeleteComponent;
  let fixture: ComponentFixture<DisciplinesDeleteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DisciplinesDeleteComponent]
    });
    fixture = TestBed.createComponent(DisciplinesDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
