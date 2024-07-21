import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ReservaComponent } from './reserva.component';
import { ReservaDetalleService } from 'src/app/services/reserva/reserva-detalle.service';
import { FormsModule } from '@angular/forms';  // Import FormsModule

describe('ReservaComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule,FormsModule], // Importa HttpClientTestingModule
      declarations: [ReservaComponent],
      providers: [ReservaDetalleService] // Asegúrate de que los servicios sean provistos
    }).compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(ReservaComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
});
