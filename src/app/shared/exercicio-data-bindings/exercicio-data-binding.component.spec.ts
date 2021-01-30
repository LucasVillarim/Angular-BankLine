import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExercicioDataBindingsComponent } from './exercicio-data-binding.component';

describe('ExercicioDataBindingsComponent', () => {
  let component: ExercicioDataBindingsComponent;
  let fixture: ComponentFixture<ExercicioDataBindingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExercicioDataBindingsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExercicioDataBindingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
