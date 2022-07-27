import { Component, OnInit } from '@angular/core';

import { Product } from 'src/product.model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {

  products:Product[]=[];

  constructor(private productService:ProductService ) { }


  ngOnInit(): void {
  }

  productname='';
  productid=0;
  cost=0;
  qty=0;
  img='';
  catalogue=0;

  addProduct():void{
    let pro={'productname':this.productname,'productid':this.productid,'cost':this.cost,'qty':this.qty,'img':this.img,'catalogue':this.catalogue};

    this.productService.addProduct(pro);
  }

  uploadPic(fileIn:any){
    let rdr=new FileReader();

  rdr.onload=(e:any)=>{
      let image=new Image();
      image.src=e.target.result;

      image.onload=rs=>{
        this.img=e.target.result;
      }
    };

    rdr.readAsDataURL(fileIn.target.files[0])
  }
 
}
