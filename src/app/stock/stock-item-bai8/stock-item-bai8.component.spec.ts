import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockItemBai8Component } from './stock-item-bai8.component';

describe('StockItemBai8Component', () => {
  let component: StockItemBai8Component;
  let fixture: ComponentFixture<StockItemBai8Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StockItemBai8Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StockItemBai8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
