import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms'; 
import { HttpClientTestingModule } from '@angular/common/http/testing'; 
import { RouterTestingModule } from '@angular/router/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { of } from 'rxjs';
import { CrearMenu } from './crear-menu';
import { MenuService } from 'src/app/services/menu/menu.service';

describe('CrearMenu', () => {
  let component: CrearMenu;
  let fixture: ComponentFixture<CrearMenu>;

  const mockMenuService = {
    getMenusByEstado: jasmine.createSpy('getMenusByEstado').and.returnValue(of([])),
    eliminarMenu: jasmine.createSpy('eliminarMenu').and.returnValue(of({})),
    restaurarMenu: jasmine.createSpy('restaurarMenu').and.returnValue(of({})),
    editarMenu: jasmine.createSpy('editarMenu').and.returnValue(of({})),
    crearMenu: jasmine.createSpy('crearMenu').and.returnValue(of({}))
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CrearMenu],
      imports: [
        FormsModule, 
        HttpClientTestingModule, 
        RouterTestingModule, 
        BrowserAnimationsModule
      ],
      providers: [
        { provide: MenuService, useValue: mockMenuService }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(CrearMenu);
    component = fixture.componentInstance;

    fixture.detectChanges(); // Inicializa los cambios del componente

    // Verifica si el formulario se inicializa correctamente
    expect(component.filtroForm).toBeDefined();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
