import {beforeEachProviders, it, describe, expect, inject} from "@angular/core/testing";
import {DietService} from "./diet-builder.service";

describe('DietBuilder Service', () => {
  beforeEachProviders(() => [DietService]);

  it('should ...',
      inject([DietService], (service: DietService) => {
    expect(service).toBeTruthy();
  }));
});
