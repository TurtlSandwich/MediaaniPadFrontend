import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { OrderComponent } from "./order/order.component";
import { MenuComponent } from "./menu/menu.component";

const routes: Routes = [
  { path: "orders", component: OrderComponent },
  { path: "menu", component: MenuComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
