import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { ProductDetailGuard } from './product-detail.guard';

import { ProductListComponent } from './product-list.component';
import { ProductDetailComponent } from './product-detail.component';
import { FakeApiComponent } from '../fakeapi/fakeapi.component';
import { StarComponent } from '../shared/star.component';

import { ConverToSpacesPipe } from '../shared/convert-to-spaces.pipe';

@NgModule({
  declarations: [
   ProductListComponent,
   ProductDetailComponent, 
   FakeApiComponent,
   ConverToSpacesPipe,
   StarComponent
  ],
  imports: [
    CommonModule,
    FormsModule,    
    RouterModule.forChild([
      { path: "products", component: ProductListComponent },
      { 
        path: "products/:id", 
        canActivate: [ProductDetailGuard],
        component: ProductDetailComponent 
      }
    ])
  ]
})
export class ProductModule { }
