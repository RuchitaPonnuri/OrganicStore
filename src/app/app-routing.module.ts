import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ForgotnewComponent } from './forgotnew/forgotnew.component';

import { NewsComponent } from './news/news.component';
import { LoginComponent } from './login/login.component';
import { RegComponent } from './reg/reg.component';
import { ResetComponent } from './reset/reset.component';
import { FavouriteComponent } from './favourite/favourite.component';
import { Catalogue1Component } from './catalogue1/catalogue1.component';
import { Catalogue2Component } from './catalogue2/catalogue2.component';
import { Catalogue3Component } from './catalogue3/catalogue3.component';
import { Catalogue4Component } from './catalogue4/catalogue4.component';
import { Catalogue5Component } from './catalogue5/catalogue5.component';
import { AddComponent } from './add/add.component';
import { Add1Component } from './add1/add1.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import { ViewproductComponent } from './viewproduct/viewproduct.component';
import { CartComponent } from './cart/cart.component';
import { OrderComponent } from './order/order.component';





const routes: Routes = [
  {path:'',redirectTo:'login',pathMatch:'full'},
{path:"reg",component:RegComponent},
{path:"login",component:LoginComponent},
{path:"forgotpass",component:ForgotnewComponent},
{path:"reset",component:ResetComponent},

{ path:"favourite",component:FavouriteComponent},
{path:"news/:userId",component:NewsComponent},
{path:"catalogue1",component:Catalogue1Component},
{path:"catalogue2",component:Catalogue2Component},
{path:"catalogue3",component:Catalogue3Component},
{path:"catalogue4",component:Catalogue4Component},
{path:"catalogue5",component:Catalogue5Component},
{path:"add",component:AddComponent},
{path:"add1",component:Add1Component},
{path:"addproduct",component:AddproductComponent},
{path:"viewproduct",component:ViewproductComponent},

{path:"cart",component:CartComponent},
{path:"order",component:OrderComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }



