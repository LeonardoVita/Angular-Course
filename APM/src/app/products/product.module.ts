import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProductDetailGuard } from './product-detail.guard';
import { ProductListComponent } from './product-list.component';
import { ProductDetailComponent } from './product-detail.component';
import { ConverToSpacesPipe } from '../shared/convert-to-spaces.pipe';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
   ProductListComponent,
   ProductDetailComponent
  ],
  imports: [    
    RouterModule.forChild([
      { path: "products", component: ProductListComponent },
      { 
        path: "products/:id", 
        canActivate: [ProductDetailGuard],
        component: ProductDetailComponent 
      }
    ]), 
    SharedModule
  ]
})
export class ProductModule { }
