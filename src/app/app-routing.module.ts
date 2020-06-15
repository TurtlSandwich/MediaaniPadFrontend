import { OrderComponent } from './order/order.component';
import { MenuCategoriesComponent } from './menu-categories/menu-categories.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuComponent } from './menu/menu.component';


const routes: Routes = [
  { path: '', component: MenuCategoriesComponent},
  { path: 'categories', component: MenuCategoriesComponent },
  { path: 'order', component: OrderComponent },
  { path: 'menu', component: MenuComponent },
  { path: '*', component: MenuCategoriesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
