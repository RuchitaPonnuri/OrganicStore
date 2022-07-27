import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegComponent } from './reg/reg.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { ForgotnewComponent } from './forgotnew/forgotnew.component';
import { ResetComponent } from './reset/reset.component';
import { NewsComponent } from './news/news.component';
import { FavouriteComponent } from './favourite/favourite.component';
import { Catalogue1Component } from './catalogue1/catalogue1.component';
import { Catalogue2Component } from './catalogue2/catalogue2.component';
import { Catalogue3Component } from './catalogue3/catalogue3.component';
import { Catalogue4Component } from './catalogue4/catalogue4.component';
import { Catalogue5Component } from './catalogue5/catalogue5.component';
import { AddComponent } from './add/add.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import { ViewproductComponent } from './viewproduct/viewproduct.component';
import { Add1Component } from './add1/add1.component';
import { CartComponent } from './cart/cart.component';
import { OrderComponent } from './order/order.component';


@NgModule({
  declarations: [
    AppComponent,
    RegComponent,
    LoginComponent,
    ForgotnewComponent,
    ResetComponent,
    NewsComponent,
    FavouriteComponent,
    Catalogue1Component,
    Catalogue2Component,
    Catalogue3Component,
    Catalogue4Component,
    Catalogue5Component,
    AddComponent,
    AddproductComponent,
    ViewproductComponent,
    Add1Component,
    CartComponent,
    OrderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

