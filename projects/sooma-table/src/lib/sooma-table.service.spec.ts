import { TestBed } from '@angular/core/testing';

import { SoomaTableService } from './sooma-table.service';

describe('SoomaTableService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SoomaTableService = TestBed.get(SoomaTableService);
    expect(service).toBeTruthy();
  });
});
