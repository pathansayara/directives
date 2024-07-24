import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cnc1Component } from './cnc1.component';

describe('Cnc1Component', () => {
  let component: Cnc1Component;
  let fixture: ComponentFixture<Cnc1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Cnc1Component]
    });
    fixture = TestBed.createComponent(Cnc1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
