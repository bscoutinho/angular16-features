import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component06Component } from './component06.component';

describe('Component06Component', () => {
  let component: Component06Component;
  let fixture: ComponentFixture<Component06Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Component06Component]
    });
    fixture = TestBed.createComponent(Component06Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
