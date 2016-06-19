import {
  beforeEachProviders,
  it,
  describe,
  expect,
  inject
} from '@angular/core/testing';
import { SessionsService } from './sessions.service';

describe('Sessions Service', () => {
  beforeEachProviders(() => [SessionsService]);

  it('should ...',
      inject([SessionsService], (service: SessionsService) => {
    expect(service).toBeTruthy();
  }));
});
