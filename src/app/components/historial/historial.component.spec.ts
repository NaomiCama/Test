import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HistorialComponent } from './historial.component';
import { ReservaDetalleService } from 'src/app/services/reserva/reserva-detalle.service';


describe('HistorialComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],  // Asegúrate de incluir esto
      declarations: [HistorialComponent],
      providers: [ReservaDetalleService]  // Asegúrate de que el servicio esté proporcionado
    }).compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(HistorialComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
});
