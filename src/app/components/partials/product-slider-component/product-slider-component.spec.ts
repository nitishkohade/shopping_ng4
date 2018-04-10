import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductSliderComponentComponent } from './product-slider-component.component';

describe('ProductSliderComponentComponent', () => {
  let component: ProductSliderComponentComponent;
  let fixture: ComponentFixture<ProductSliderComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductSliderComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductSliderComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
