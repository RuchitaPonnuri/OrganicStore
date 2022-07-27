export class Product{
    productname:string='';
    productid:number=0;
    cost:number=0;
    qty:number=0;
    img:string='';
    catalogue=0;

    constructor(productname:string,productid:number,cost:number,qty:number,img:string,catalogue:number){
        this.productname=productname;
        this.productid=productid;
        this.cost=cost;
        this.qty=qty;
        this.img=img;
        this.catalogue=catalogue;
    }
}