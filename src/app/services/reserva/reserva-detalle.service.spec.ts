import { TestBed } from '@angular/core/testing';
import { ReservaDetalleService } from './reserva-detalle.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';


describe('ReservaDetalleService', () => {
  let service: ReservaDetalleService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ReservaDetalleService]
    });
    service = TestBed.inject(ReservaDetalleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
