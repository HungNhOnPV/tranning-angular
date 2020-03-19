import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

// Component
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductEditComponent } from './components/product-edit/product-edit.component';
import { ProductDeleteComponent } from './components/product-delete/product-delete.component';
import { ProductsComponent } from './components/products/products.component';

// Service
import { ProductService } from './services/product.service';
import { AuthGuard } from './services/guards/auth.guard';

import { productRoutes } from './product-management.routes';

@NgModule({
  declarations: [
    ProductDetailComponent,
    ProductListComponent,
    ProductEditComponent,
    ProductDeleteComponent,
    ProductsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(productRoutes)
  ],
  providers: [
    ProductService,
    AuthGuard
  ]
})
export class ProductManagementModule { }
