import { Injectable } from '@angular/core';
import{ HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Producto } from '../domain/producto';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  public url: string;


  constructor(public httpClient: HttpClient) { 
    //this.url='./assets/MOCK_DATA.json';
    //this.url= 'http://localhost/Juguetes.API/api/Producto';
    this.url= environment.apiUrl + 'api/Producto';
  }
  public getAll(): Observable<any>{
    return this.httpClient.get(this.url);
  }
  public getById(id: number): Observable<any>{
    return this.httpClient.get(this.url+'/'+ id);
  }
  public save(producto: Producto):Observable<any>{
    return this.httpClient.post(this.url,producto);
  }
  public edit(producto: Producto): Observable<any>{
    
    return this.httpClient.put(this.url +'/'+producto.Id, producto)
  }
  public delete(id: number){
    return this.httpClient.delete(this.url+'/'+ id);
  }
}
