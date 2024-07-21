import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MenuComponent } from './menu.component';
import { MenuService } from 'src/app/services/menu/menu.service';
import { of } from 'rxjs';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

describe('MenuComponent', () => {
  let component: MenuComponent;
  let fixture: ComponentFixture<MenuComponent>;
  let menuService: jasmine.SpyObj<MenuService>;

  beforeEach(async () => {
    const menuServiceSpy = jasmine.createSpyObj('MenuService', ['getMenusByEstado']);

    await TestBed.configureTestingModule({
      declarations: [ MenuComponent ],
      imports: [ ReactiveFormsModule,FormsModule ],
      providers: [
        { provide: MenuService, useValue: menuServiceSpy }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuComponent);
    component = fixture.componentInstance;
    menuService = TestBed.inject(MenuService) as jasmine.SpyObj<MenuService>;

    // Mock data for the service
    menuService.getMenusByEstado.and.returnValue(of([])); // or provide some mock data

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
