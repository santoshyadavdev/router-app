import { TestBed } from '@angular/core/testing';

import { LocalRouteService } from './local-route.service';

describe('LocalRouteService', () => {
  let service: LocalRouteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LocalRouteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
