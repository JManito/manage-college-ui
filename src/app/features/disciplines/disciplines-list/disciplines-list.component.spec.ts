import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisciplinesListComponent } from './disciplines-list.component';

describe('DisciplinesListComponent', () => {
  let component: DisciplinesListComponent;
  let fixture: ComponentFixture<DisciplinesListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DisciplinesListComponent]
    });
    fixture = TestBed.createComponent(DisciplinesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
