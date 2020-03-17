import { Routes } from "@angular/router";

import { AboutComponent } from "./components/about/about.component";
import { ContactComponent } from "./components/contact/contact.component";
import { HomeComponent } from "./components/home/home.component";
import { NotFoundComponent } from "./components/not-found/not-found.component";
import { ProductsComponent } from "./components/products/products.component";
import { ProductDetailComponent } from "./components/product-detail/product-detail.component";
import { ProductListComponent } from "./components/product-list/product-list.component";
import { ProductEditComponent } from './components/product-edit/product-edit.component';
import { ProductDeleteComponent } from './components/product-delete/product-delete.component';

export const appRoutes: Routes = [
  {
    path: "",
    redirectTo: "index",
    pathMatch: "full"
  },
  {
    path: "index",
    component: HomeComponent
  },
  {
    path: "about",
    component: AboutComponent
  },
  {
    path: "contact",
    component: ContactComponent
  },
  {
    path: "product/:id",
    component: ProductsComponent,
    children: [
      {
        path: "",
        component: ProductDetailComponent
      },
      {
        path: "edit",
        component: ProductEditComponent
      },
      {
        path: "delete",
        component: ProductDeleteComponent
      }
    ]
  },
  {
    path: 'products',
    component: ProductListComponent
  },
  {
    path: "**",
    component: NotFoundComponent
  }
];
