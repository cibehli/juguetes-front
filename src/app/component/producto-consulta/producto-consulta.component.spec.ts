import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductoConsultaComponent } from './producto-consulta.component';

describe('ProductoConsultaComponent', () => {
  let component: ProductoConsultaComponent;
  let fixture: ComponentFixture<ProductoConsultaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductoConsultaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductoConsultaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
