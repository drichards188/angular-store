import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AppComponent} from "./app.component";
import {CartComponent} from "./components/cart/cart.component";
import {ProductListComponent} from "./components/product-list/product-list.component";
import {ProductItemDetailComponent} from "./components/product-item-detail/product-item-detail.component";

const routes: Routes = [
  { path: '', component: ProductListComponent},
  { path: 'cart', component: CartComponent},
  {path: 'details/:id', component: ProductItemDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
