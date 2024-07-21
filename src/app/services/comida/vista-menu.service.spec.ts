import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { VistaMenuService } from './vista-menu.service';

describe('VistaMenuService', () => {
  let service: VistaMenuService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [VistaMenuService]
    });
    service = TestBed.inject(VistaMenuService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
