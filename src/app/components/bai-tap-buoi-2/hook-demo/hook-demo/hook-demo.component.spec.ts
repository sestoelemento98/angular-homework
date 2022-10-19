import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HookDemoComponent } from './hook-demo.component';

describe('HookDemoComponent', () => {
  let component: HookDemoComponent;
  let fixture: ComponentFixture<HookDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HookDemoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HookDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
