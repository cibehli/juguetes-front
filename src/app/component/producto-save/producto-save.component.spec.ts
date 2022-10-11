import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductoSaveComponent } from './producto-save.component';

describe('ProductoSaveComponent', () => {
  let component: ProductoSaveComponent;
  let fixture: ComponentFixture<ProductoSaveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductoSaveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductoSaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
