import { TestBed } from '@angular/core/testing';

import { CrudlogicService } from './crudlogic.service';

describe('CrudlogicService', () => {
  let service: CrudlogicService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CrudlogicService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
