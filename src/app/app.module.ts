import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ProductoConsultaComponent } from './component/producto-consulta/producto-consulta.component';
import { HttpClientModule } from '@angular/common/http';

import { FormsModule } from '@angular/forms';
import { ProductoService } from './service/producto.service';
import { ProductoSaveComponent } from './component/producto-save/producto-save.component';
import { ProductoEditComponent } from './component/producto-edit/producto-edit.component';
import { ProductoDeleteComponent } from './component/producto-delete/producto-delete.component';
@NgModule({
  declarations: [
    AppComponent,
    ProductoConsultaComponent,
    ProductoSaveComponent,
    ProductoEditComponent,
    ProductoDeleteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ProductoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
