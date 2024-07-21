import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComidaVistaComponent } from './comida-vista.component';
import { VistaMenuService } from 'src/app/services/comida/vista-menu.service';


describe('ComidaVistaComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],  // Importa HttpClientTestingModule aquí
      declarations: [ComidaVistaComponent],
      providers: [VistaMenuService]  // Asegúrate de que el servicio esté proporcionado
    }).compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(ComidaVistaComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
});
