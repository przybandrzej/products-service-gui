import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductTooltipComponent } from './product-tooltip.component';

describe('ProductTooltipComponent', () => {
  let component: ProductTooltipComponent;
  let fixture: ComponentFixture<ProductTooltipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductTooltipComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductTooltipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
