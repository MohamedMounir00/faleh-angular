import { TestBed } from '@angular/core/testing';

import { ShereService } from './shere.service';

describe('ShereService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ShereService = TestBed.get(ShereService);
    expect(service).toBeTruthy();
  });
});
