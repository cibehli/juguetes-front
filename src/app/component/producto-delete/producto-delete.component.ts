import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Producto } from 'src/app/domain/producto';
import { ProductoService } from 'src/app/service/producto.service';

@Component({
  selector: 'app-producto-delete',
  templateUrl: './producto-delete.component.html',
  styleUrls: ['./producto-delete.component.css']
})
export class ProductoDeleteComponent implements OnInit {

  public producto: Producto= new Producto(0,'','',0,'',0);
  public id:number=0;
  public showMsg: boolean = false;
  public msg:string='';
  public type: string='';
  constructor(public productoService:ProductoService,
    private router:Router,
    private activatedRoute: ActivatedRoute) { }
    private sub: any;


  ngOnInit(): void {
    this.getById();
  }

  public getById(){
    this.sub = this.activatedRoute.params.subscribe(params => {
      this.id = +params['id']; // (+) converts string 'id' to a number

   });
    
    
    this.productoService.getById(this.id).subscribe(data=>{
      this.producto= data;
    });
  }
  public delete(){
    
    console.log(this.producto);
    this.productoService.delete(this.producto.Id).subscribe(data=>{
      this.router.navigate(['/producto-consulta']);
    }, error=> {
      console.log(error);
      this.showMsg= true;
      this.msg='An error has ocurred in the procedure';
      this.type='danger';
    });
  
}
}
