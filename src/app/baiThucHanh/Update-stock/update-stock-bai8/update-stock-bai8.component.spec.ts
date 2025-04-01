import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateStockBai8Component } from './update-stock-bai8.component';

describe('UpdateStockBai8Component', () => {
  let component: UpdateStockBai8Component;
  let fixture: ComponentFixture<UpdateStockBai8Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdateStockBai8Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateStockBai8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
