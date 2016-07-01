import {
  beforeEachProviders,
  it,
  describe,
  expect,
  inject
} from '@angular/core/testing';
import { UserFormsService } from './user-forms-service.service';

describe('UserFormsService Service', () => {
  beforeEachProviders(() => [UserFormsService]);

  it('should ...',
      inject([UserFormsService], (service: UserFormsService) => {
    expect(service).toBeTruthy();
  }));
});
