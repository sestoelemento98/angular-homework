import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertDashComponent } from './insert-dash.component';

describe('InsertDashComponent', () => {
  let component: InsertDashComponent;
  let fixture: ComponentFixture<InsertDashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsertDashComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InsertDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
