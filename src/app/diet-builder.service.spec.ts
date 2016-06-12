import {
  beforeEachProviders,
  it,
  describe,
  expect,
  inject
} from '@angular/core/testing';
import { DietBuilderService } from './diet-builder.service';

describe('DietBuilder Service', () => {
  beforeEachProviders(() => [DietBuilderService]);

  it('should ...',
      inject([DietBuilderService], (service: DietBuilderService) => {
    expect(service).toBeTruthy();
  }));
});
