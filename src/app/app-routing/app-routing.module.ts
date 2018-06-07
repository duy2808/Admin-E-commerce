import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CategoryComponent } from '../category/category.component';
import { ProductComponent } from '../product/product.component';
import { DashboardComponent } from '../dashboard/dashboard.component';

const routes: Routes = [
  // { path: '', redirectTo: '', pathMatch: 'full' },
  {path: 'dashboard', component: DashboardComponent },
  {path: 'category', component: CategoryComponent },
  {path: 'product', component: ProductComponent }
  
  
];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
  declarations: []
})
export class AppRoutingModule { }
