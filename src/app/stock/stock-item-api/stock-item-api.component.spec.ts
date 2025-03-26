import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockItemApiComponent } from './stock-item-api.component';

describe('StockItemApiComponent', () => {
  let component: StockItemApiComponent;
  let fixture: ComponentFixture<StockItemApiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StockItemApiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StockItemApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
