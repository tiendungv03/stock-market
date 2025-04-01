import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateStockBai8Component } from './create-stock-bai8.component';

describe('CreateStockBai8Component', () => {
  let component: CreateStockBai8Component;
  let fixture: ComponentFixture<CreateStockBai8Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateStockBai8Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateStockBai8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
