import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainerCrudComponent } from './trainer-crud.component';

describe('TrainerCrudComponent', () => {
  let component: TrainerCrudComponent;
  let fixture: ComponentFixture<TrainerCrudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrainerCrudComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainerCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
