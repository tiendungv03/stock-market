import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateStockServiceComponent } from './update-stock-service.component';

describe('UpdateStockServiceComponent', () => {
  let component: UpdateStockServiceComponent;
  let fixture: ComponentFixture<UpdateStockServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdateStockServiceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateStockServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
