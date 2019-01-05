import { TestBed } from '@angular/core/testing';

import { ProgressStepsService } from './progress-steps.service';

describe('ProgressStepsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProgressStepsService = TestBed.get(ProgressStepsService);
    expect(service).toBeTruthy();
  });
});
