import { TestBed, inject } from '@angular/core/testing';

import { ItuneService } from './itune.service';

describe('ItuneService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ItuneService]
    });
  });

  it('should be created', inject([ItuneService], (service: ItuneService) => {
    expect(service).toBeTruthy();
  }));
});
