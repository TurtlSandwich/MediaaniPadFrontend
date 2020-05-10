import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MenuCategoriesComponent } from './menu-categories/menu-categories.component';
import { MenuCategoryComponent } from './menu-categories/menu-category/menu-category.component'

@NgModule({
  declarations: [
    AppComponent,
    MenuCategoriesComponent,
    MenuCategoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
