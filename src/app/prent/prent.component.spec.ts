import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrentComponent } from './prent.component';

describe('PrentComponent', () => {
  let component: PrentComponent;
  let fixture: ComponentFixture<PrentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PrentComponent]
    });
    fixture = TestBed.createComponent(PrentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
