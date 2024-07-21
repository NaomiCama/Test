import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComidaService } from './comida.service';

describe('ComidaService', () => {
  let service: ComidaService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ComidaService]
    });
    service = TestBed.inject(ComidaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
