import { TestBed } from '@angular/core/testing';

import { OnlyServiceNeededForFindService } from './only-service-needed-for-find.service';

describe('OnlyServiceNeededForFindService', () => {
  let service: OnlyServiceNeededForFindService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OnlyServiceNeededForFindService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
