import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComprarProductoComponent } from './comprar-producto.component';

describe('ComprarProductoComponent', () => {
  let component: ComprarProductoComponent;
  let fixture: ComponentFixture<ComprarProductoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComprarProductoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComprarProductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
