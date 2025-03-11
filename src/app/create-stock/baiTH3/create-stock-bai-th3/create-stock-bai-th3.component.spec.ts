import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateStockBaiTH3Component } from './create-stock-bai-th3.component';

describe('CreateStockBaiTH3Component', () => {
  let component: CreateStockBaiTH3Component;
  let fixture: ComponentFixture<CreateStockBaiTH3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateStockBaiTH3Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateStockBaiTH3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
