import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoOneComponent } from './todo-one.component';

describe('TodoOneComponent', () => {
  let component: TodoOneComponent;
  let fixture: ComponentFixture<TodoOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodoOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
