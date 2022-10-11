import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Producto } from 'src/app/domain/producto';
import { ProductoService } from 'src/app/service/producto.service';

@Component({
  selector: 'app-producto-save',
  templateUrl: './producto-save.component.html',
  styleUrls: ['./producto-save.component.css']
})
export class ProductoSaveComponent implements OnInit {

  public producto: Producto= new Producto(0,'','',0,'',0);

  public showMsg: boolean = false;
  public msg:string='';
  public type: string='';

  constructor(public productoService:ProductoService,private router:Router) { }

  ngOnInit(): void {
    this.producto = new Producto(0,'','',0,'',0);
    
  }
  public save()
  {
    console.log(this.producto);
    this.productoService.save(this.producto).subscribe(data=>{
      this.router.navigate(['/producto-consulta']);
    }, error=> {
      console.log(error);
      this.showMsg= true;
      this.msg='An error has ocurred in the procedure';
      this.type='danger';
    });
  }

}
