import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateStockServiceComponent } from './create-stock-service.component';

describe('CreateStockServiceComponent', () => {
  let component: CreateStockServiceComponent;
  let fixture: ComponentFixture<CreateStockServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateStockServiceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateStockServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
