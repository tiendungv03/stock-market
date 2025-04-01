import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockItemBaith2Component } from './stock-item-baith2.component';

describe('StockItemBaith2Component', () => {
  let component: StockItemBaith2Component;
  let fixture: ComponentFixture<StockItemBaith2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StockItemBaith2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StockItemBaith2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
