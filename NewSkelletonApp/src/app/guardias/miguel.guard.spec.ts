import { TestBed } from '@angular/core/testing';

import { MiguelGuard } from './miguel.guard';

describe('MiguelGuard', () => {
  let guard: MiguelGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(MiguelGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
