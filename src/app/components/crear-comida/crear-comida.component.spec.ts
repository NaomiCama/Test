import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { of, throwError } from 'rxjs';
import { ComidaService } from '../../services/comida/comida.service';
import { MenuService } from '../../services/menu/menu.service';
import { CloudinaryService } from '../../services/comida/cloudinary.service';
import { Comida } from '../../models/comida/comida';
import { Menu } from '../../models/menu/menu';
import { CrearComidaComponent } from './crear-comida.component';

describe('CrearComidaComponent', () => {
  let component: CrearComidaComponent;
  let fixture: ComponentFixture<CrearComidaComponent>;
  let comidaService: jasmine.SpyObj<ComidaService>;
  let menuService: jasmine.SpyObj<MenuService>;
  let cloudinaryService: jasmine.SpyObj<CloudinaryService>;

  beforeEach(async () => {
    const comidaServiceSpy = jasmine.createSpyObj('ComidaService', ['getComidasByEstado', 'editarComida', 'crearComida', 'eliminarComida', 'restaurarComida']);
    const menuServiceSpy = jasmine.createSpyObj('MenuService', ['getAllMenu']);
    const cloudinaryServiceSpy = jasmine.createSpyObj('CloudinaryService', ['uploadImg']);

    await TestBed.configureTestingModule({
      declarations: [CrearComidaComponent],
      imports: [
        FormsModule,
        HttpClientTestingModule,
        BrowserAnimationsModule,
        RouterTestingModule
      ],
      
    }).compileComponents();

    fixture = TestBed.createComponent(CrearComidaComponent);
    component = fixture.componentInstance;

    component.comidas = [];
    component.errorAlCargarComidas = false;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
