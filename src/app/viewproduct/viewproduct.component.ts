import { Component, OnInit } from '@angular/core';
import { Product } from 'src/product.model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-viewproduct',
  templateUrl: './viewproduct.component.html',
  styleUrls: ['./viewproduct.component.css']
})
export class ViewproductComponent implements OnInit {

  products:Product[]=[];

  constructor(private productSrv:ProductService) { }

  ngOnInit(): void {
    this.products=this.productSrv.getProducts();
  }

  deleteProduct(product:Product){
    this.productSrv.deleteProduct(product);
  }

}