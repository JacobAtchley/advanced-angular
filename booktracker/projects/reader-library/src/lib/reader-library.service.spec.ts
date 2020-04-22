import { TestBed } from '@angular/core/testing';

import { ReaderLibraryService } from './reader-library.service';

describe('ReaderLibraryService', () => {
  let service: ReaderLibraryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReaderLibraryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
