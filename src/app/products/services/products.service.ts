import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { product } from 'src/app/model/datatypes';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  baseApi='https://fakestoreapi.com/';

  constructor(private http: HttpClient) { }

  getAllProducts(){
    return this.http.get<product[]>(this.baseApi + 'products');
  }

  getAllCategories(){
    return this.http.get(this.baseApi + 'products/categories');
  }

  getProductsByCategory(keyword:string){
    return this.http.get(this.baseApi + 'products/category/'+keyword);
  }
}
