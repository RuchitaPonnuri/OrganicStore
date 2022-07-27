import { Injectable } from '@angular/core';
import { Product } from 'src/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  
  products:Product[]=[];

  constructor() { }

  deleteProduct(product:Product){
    let idx=this.products.indexOf(product);
    this.products.splice(idx,1);
  }

  getProducts(){
    return this.products;
  }

  addProduct(product:Product){
    this.products.push(product);

  }
}