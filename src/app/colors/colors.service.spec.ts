/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ColorsService } from './colors.service';

describe('Service: Colors', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ColorsService]
    });
  });

  it('should ...', inject([ColorsService], (service: ColorsService) => {
    expect(service).toBeTruthy();
  }));
});
