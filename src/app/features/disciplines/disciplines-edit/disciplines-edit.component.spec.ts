import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisciplinesEditComponent } from './disciplines-edit.component';

describe('DisciplinesEditComponent', () => {
  let component: DisciplinesEditComponent;
  let fixture: ComponentFixture<DisciplinesEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DisciplinesEditComponent]
    });
    fixture = TestBed.createComponent(DisciplinesEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
