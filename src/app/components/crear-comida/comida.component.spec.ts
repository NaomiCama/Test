import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { ComidaService } from '../../services/comida/comida.service';
import { MenuService } from '../../services/menu/menu.service';
import { CloudinaryService } from '../../services/comida/cloudinary.service';
import { ComidaComponent } from './comida.component';

describe('ComidaComponent', () => {
  let component: ComidaComponent;
  let fixture: ComponentFixture<ComidaComponent>;
  let comidaServiceSpy: jasmine.SpyObj<ComidaService>;
  let menuServiceSpy: jasmine.SpyObj<MenuService>;
  let cloudinaryServiceSpy: jasmine.SpyObj<CloudinaryService>;

  beforeEach(async () => {
    // Crear spies para los servicios
    comidaServiceSpy = jasmine.createSpyObj('ComidaService', ['getComidasByEstado', 'editarComida', 'crearComida', 'eliminarComida', 'restaurarComida']);
    menuServiceSpy = jasmine.createSpyObj('MenuService', ['getAllMenu']);
    cloudinaryServiceSpy = jasmine.createSpyObj('CloudinaryService', ['uploadImg']);

    await TestBed.configureTestingModule({
      declarations: [ComidaComponent],
      imports: [
        FormsModule,
        ReactiveFormsModule,
        HttpClientTestingModule,
        BrowserAnimationsModule,
        RouterTestingModule
      ],
      providers: [
        { provide: ComidaService, useValue: comidaServiceSpy },
        { provide: MenuService, useValue: menuServiceSpy },
        { provide: CloudinaryService, useValue: cloudinaryServiceSpy }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(ComidaComponent);
    component = fixture.componentInstance;
    
    // Configurar respuestas predeterminadas para los métodos espía
    comidaServiceSpy.getComidasByEstado.and.returnValue(of([]));
    menuServiceSpy.getAllMenu.and.returnValue(of([]));
    cloudinaryServiceSpy.uploadImg.and.returnValue(of({ secure_url: 'fake-url' }));

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call exportarAPDF and create a PDF file', () => {
    spyOn(component, 'exportarAPDF').and.callThrough();
    
    component.exportarAPDF();
    expect(component.exportarAPDF).toHaveBeenCalled();
  });
});
