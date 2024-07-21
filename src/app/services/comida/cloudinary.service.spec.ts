import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CloudinaryService } from './cloudinary.service';

describe('CloudinaryService', () => {
  let service: CloudinaryService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CloudinaryService]
    });
    service = TestBed.inject(CloudinaryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
