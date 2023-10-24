import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisciplinesInfoComponent } from './disciplines-info.component';

describe('DisciplinesInfoComponent', () => {
  let component: DisciplinesInfoComponent;
  let fixture: ComponentFixture<DisciplinesInfoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DisciplinesInfoComponent]
    });
    fixture = TestBed.createComponent(DisciplinesInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
