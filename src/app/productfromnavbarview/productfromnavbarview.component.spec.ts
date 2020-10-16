import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductfromnavbarviewComponent } from './productfromnavbarview.component';

describe('ProductfromnavbarviewComponent', () => {
  let component: ProductfromnavbarviewComponent;
  let fixture: ComponentFixture<ProductfromnavbarviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductfromnavbarviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductfromnavbarviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
