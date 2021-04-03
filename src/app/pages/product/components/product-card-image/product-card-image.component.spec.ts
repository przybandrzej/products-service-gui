import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductCardImageComponent } from './product-card-image.component';

describe('ProductCardImageComponent', () => {
  let component: ProductCardImageComponent;
  let fixture: ComponentFixture<ProductCardImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductCardImageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductCardImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
