import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MathExpressionComponent } from './math-expression.component';

describe('MathExpressionComponent', () => {
  let component: MathExpressionComponent;
  let fixture: ComponentFixture<MathExpressionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MathExpressionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MathExpressionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
