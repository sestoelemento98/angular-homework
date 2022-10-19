import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColoredObjectChildComponent } from './colored-object-child.component';

describe('ColoredObjectChildComponent', () => {
  let component: ColoredObjectChildComponent;
  let fixture: ComponentFixture<ColoredObjectChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColoredObjectChildComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ColoredObjectChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
