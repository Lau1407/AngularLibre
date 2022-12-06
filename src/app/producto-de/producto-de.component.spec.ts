import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductoDeComponent } from './producto-de.component';

describe('ProductoDeComponent', () => {
  let component: ProductoDeComponent;
  let fixture: ComponentFixture<ProductoDeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductoDeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductoDeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
