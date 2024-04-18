import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignalTodoListComponent } from './signal-todo-list.component';

describe('SignalTodoListComponent', () => {
  let component: SignalTodoListComponent;
  let fixture: ComponentFixture<SignalTodoListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignalTodoListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SignalTodoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
