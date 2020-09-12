import { TestBed } from '@angular/core/testing';

import { VerificarJWTServiceService } from './verificar-jwtservice.service';

describe('VerificarJWTServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: VerificarJWTServiceService = TestBed.get(VerificarJWTServiceService);
    expect(service).toBeTruthy();
  });
});
