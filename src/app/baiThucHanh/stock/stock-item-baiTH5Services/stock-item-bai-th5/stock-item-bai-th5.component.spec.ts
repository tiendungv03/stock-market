import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockItemBaiTH5Component } from './stock-item-bai-th5.component';

describe('StockItemBaiTH5Component', () => {
  let component: StockItemBaiTH5Component;
  let fixture: ComponentFixture<StockItemBaiTH5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StockItemBaiTH5Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StockItemBaiTH5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
