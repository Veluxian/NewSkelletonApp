import { TestBed } from '@angular/core/testing';

import { RecuperaUsuarioService } from './recupera-usuario.service';

describe('RecuperaUsuarioService', () => {
  let service: RecuperaUsuarioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RecuperaUsuarioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
