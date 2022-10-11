import { Component, getNgModuleById, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { map } from 'rxjs';
import { Producto } from 'src/app/domain/producto';
import { ProductoService } from 'src/app/service/producto.service';


@Component({
  selector: 'app-producto-edit',
  templateUrl: './producto-edit.component.html',
  styleUrls: ['./producto-edit.component.css']
})
export class ProductoEditComponent implements OnInit {
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
 
        // In a real app: dispatch action to load the details here.
     });
      
      
      this.productoService.getById(this.id).subscribe(data=>{
        this.producto= data;
      });
    }
    
    public edit(){
    
        console.log(this.producto);
        this.productoService.edit(this.producto).subscribe(data=>{
          this.router.navigate(['/producto-consulta']);
        }, error=> {
          console.log(error);
          this.showMsg= true;
          this.msg='An error has ocurred in the procedure';
          this.type='danger';
        });
      
    }
}
