import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnotherparentComponent } from './anotherparent.component';

describe('AnotherparentComponent', () => {
  let component: AnotherparentComponent;
  let fixture: ComponentFixture<AnotherparentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AnotherparentComponent]
    });
    fixture = TestBed.createComponent(AnotherparentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
