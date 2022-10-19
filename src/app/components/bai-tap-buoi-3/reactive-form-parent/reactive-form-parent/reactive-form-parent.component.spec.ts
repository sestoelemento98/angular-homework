import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveFormParentComponent } from './reactive-form-parent.component';

describe('ReactiveFormParentComponent', () => {
  let component: ReactiveFormParentComponent;
  let fixture: ComponentFixture<ReactiveFormParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReactiveFormParentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReactiveFormParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
