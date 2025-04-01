import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateStockApiComponent } from './update-stock-api.component';

describe('UpdateStockApiComponent', () => {
  let component: UpdateStockApiComponent;
  let fixture: ComponentFixture<UpdateStockApiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdateStockApiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateStockApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
