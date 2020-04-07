import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { OrdersComponent } from "./orders/order.component";
import { OrderListComponent } from "./orders/order-list/order-list.component";

const routes: Routes = [
  { path: "", redirectTo: "/orders", pathMatch: "full" },
  {
    path: "orders",
    component: OrdersComponent,
    children: [{ path: "all", component: OrderListComponent }],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
