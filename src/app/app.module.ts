import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { MenuCategoriesComponent } from './menu-categories/menu-categories.component';
import { CategoryComponent } from './menu-categories/category/category.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuComponent } from './menu/menu.component';
import { MenuItemComponent } from './menu/menu-item/menu-item.component';
import { OrderComponent } from './order/order.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuCategoriesComponent,
    CategoryComponent,
    MenuComponent,
    MenuItemComponent,
    OrderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
<<<<<<< HEAD
=======
    BrowserAnimationsModule
>>>>>>> 1232a600d79aac8ce2b5fe79ff91f56b534942f2
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
