export class Employee
{

    //name:string;
    productname:string='';
    productid:number=0;
    cost:string='';
    qty:string='';
    img:string='';
    

    constructor(productname:string, productid:number, cost:string, qty:string,  img:string, )
    {

        this.productname=productname;
        this.productid=productid;
        this.qty=qty;
        this.cost=cost;
        this.img=img;
        
    }


    
}