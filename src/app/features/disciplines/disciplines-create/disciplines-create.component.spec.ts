import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisciplinesCreateComponent } from './disciplines-create.component';

describe('DisciplinesCreateComponent', () => {
  let component: DisciplinesCreateComponent;
  let fixture: ComponentFixture<DisciplinesCreateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DisciplinesCreateComponent]
    });
    fixture = TestBed.createComponent(DisciplinesCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
