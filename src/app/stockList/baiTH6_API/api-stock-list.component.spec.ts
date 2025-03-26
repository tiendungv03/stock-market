import { ComponentFixture, TestBed } from '@angular/core/testing';

import { APIStockListComponent } from './api-stock-list.component';

describe('APIStockListComponent', () => {
  let component: APIStockListComponent;
  let fixture: ComponentFixture<APIStockListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [APIStockListComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(APIStockListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
