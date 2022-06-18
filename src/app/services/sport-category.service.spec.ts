import { TestBed } from '@angular/core/testing';

import { SportCategoryService } from './sport-category.service';

describe('SportCategoryService', () => {
  let service: SportCategoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SportCategoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
