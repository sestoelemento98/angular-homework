import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColoredObjectsComponent } from './colored-objects.component';

describe('ColoredObjectsComponent', () => {
  let component: ColoredObjectsComponent;
  let fixture: ComponentFixture<ColoredObjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColoredObjectsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ColoredObjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
