import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateStockApiComponent } from './create-stock-api.component';

describe('CreateStockApiComponent', () => {
  let component: CreateStockApiComponent;
  let fixture: ComponentFixture<CreateStockApiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateStockApiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateStockApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
