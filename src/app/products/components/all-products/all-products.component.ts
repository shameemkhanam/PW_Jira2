import { Component, OnInit } from '@angular/core';
import { product } from 'src/app/model/datatypes';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css']
})
export class AllProductsComponent implements OnInit{
  products:product[];
  categories: any[];

  constructor(private productService:ProductsService){}

  ngOnInit(): void {
    this.getProducts();
    this.getCategories();
  }

  getProducts(){
    this.productService.getAllProducts().subscribe((res)=>{
      // console.log(res);
      this.products=res;
    });
  }

  getCategories(){
    this.productService.getAllCategories().subscribe((res:any)=>{
      // console.log(res);
      this.categories=res;
    });
  }

  filterCategory(event:any){
    let value= event.target.value;
    // console.log(value);   
    this.getProductsCategory(value); 
  }

  getProductsCategory(keyword:string){
    this.productService.getProductsByCategory(keyword).subscribe((res:any)=>{
      this.products = res;
    });
  }

}
