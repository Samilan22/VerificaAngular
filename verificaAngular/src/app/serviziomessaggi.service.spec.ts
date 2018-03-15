import { TestBed, inject } from '@angular/core/testing';

import { ServiziomessaggiService } from './serviziomessaggi.service';

describe('ServiziomessaggiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ServiziomessaggiService]
    });
  });

  it('should be created', inject([ServiziomessaggiService], (service: ServiziomessaggiService) => {
    expect(service).toBeTruthy();
  }));
});
