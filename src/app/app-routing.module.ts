import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductoConsultaComponent } from './component/producto-consulta/producto-consulta.component';
import { ProductoDeleteComponent } from './component/producto-delete/producto-delete.component';
import { ProductoEditComponent } from './component/producto-edit/producto-edit.component';
import { ProductoSaveComponent } from './component/producto-save/producto-save.component';
import { Producto } from './domain/producto';

const routes: Routes = [
  { path:'producto-consulta', component: ProductoConsultaComponent  },
  { path:'producto-save', component: ProductoSaveComponent  },
  { path:'producto-edit/:id', component: ProductoEditComponent  },
  { path:'producto-delete/:id', component: ProductoDeleteComponent  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
