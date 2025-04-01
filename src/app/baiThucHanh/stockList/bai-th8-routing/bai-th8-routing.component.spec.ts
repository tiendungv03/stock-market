import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaiTH8RoutingComponent } from './bai-th8-routing.component';

describe('BaiTH8RoutingComponent', () => {
  let component: BaiTH8RoutingComponent;
  let fixture: ComponentFixture<BaiTH8RoutingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BaiTH8RoutingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BaiTH8RoutingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
