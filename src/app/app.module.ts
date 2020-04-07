import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import { OrdersComponent } from './orders/order.component';
import { OrderListComponent } from './orders/order-list/order-list.component';
import { ProductsComponent } from './products/products.component';
import { OrderService } from './orders/orders.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    OrdersComponent,
    OrderListComponent,
    ProductsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    
    ],
  providers: [OrderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
