import { TestBed } from '@angular/core/testing';

import { CatagoreyService } from './catagorey.service';

describe('CatagoreyService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CatagoreyService = TestBed.get(CatagoreyService);
    expect(service).toBeTruthy();
  });
});
