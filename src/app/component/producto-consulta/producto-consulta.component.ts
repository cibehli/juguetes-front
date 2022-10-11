import { Component, OnInit, OnDestroy } from '@angular/core';
import { Producto } from 'src/app/domain/producto';
import { ProductoService } from 'src/app/service/producto.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-producto-consulta',
  templateUrl: './producto-consulta.component.html',
  styleUrls: ['./producto-consulta.component.css']
})
export class ProductoConsultaComponent implements OnInit, OnDestroy {

  public productos: Producto[] = [];
  public subProductos: Subscription = new Subscription;
  constructor(public productService: ProductoService) { }
  ngOnDestroy(): void {
    this.subProductos.unsubscribe();
  }

  ngOnInit(): void {
this.getAll();
  }

  getAll()
  {
    this.subProductos = this.productService.getAll().subscribe(data =>{
      console.log(data);
      this.productos = data;
    });
  }
}
