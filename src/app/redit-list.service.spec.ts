import { TestBed, inject } from '@angular/core/testing';

import { ReditListService } from './redit-list.service';

describe('ReditListService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ReditListService]
    });
  });

  it('should be created', inject([ReditListService], (service: ReditListService) => {
    expect(service).toBeTruthy();
  }));
});
