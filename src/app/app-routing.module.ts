import { OrderComponent } from './order/order.component';
import { MenuCategoriesComponent } from './menu-categories/menu-categories.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuComponent } from './menu/menu.component';


const routes: Routes = [
  { path: 'categories', component: MenuCategoriesComponent },
  { path: 'order', component: OrderComponent },
  { path: 'menu', component: MenuComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
