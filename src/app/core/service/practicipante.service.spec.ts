import { TestBed } from '@angular/core/testing';

import { PracticipanteService } from './practicipante.service';

describe('PracticipanteService', () => {
  let service: PracticipanteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PracticipanteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
