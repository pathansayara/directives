import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cnc2Component } from './cnc2.component';

describe('Cnc2Component', () => {
  let component: Cnc2Component;
  let fixture: ComponentFixture<Cnc2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Cnc2Component]
    });
    fixture = TestBed.createComponent(Cnc2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
