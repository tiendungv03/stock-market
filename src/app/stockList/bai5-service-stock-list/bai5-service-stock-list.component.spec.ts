import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Bai5ServiceStockListComponent } from './bai5-service-stock-list.component';

describe('Bai5ServiceStockListComponent', () => {
  let component: Bai5ServiceStockListComponent;
  let fixture: ComponentFixture<Bai5ServiceStockListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Bai5ServiceStockListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Bai5ServiceStockListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
