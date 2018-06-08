import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { CategoryComponent } from '../category/category.component';
import { ProductComponent } from '../product/product.component';
import { ManageCategoriesComponent } from '../manage-categories/manage-categories.component';

const routes: Routes = [
  // { path: '', redirectTo: '', pathMatch: 'full' },
  {path: 'dashboard', component: DashboardComponent },
  {path: 'category', component: CategoryComponent },
  {path: 'product', component: ProductComponent },
  {path: 'manage-categories', component: ManageCategoriesComponent }
  
  
];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
  declarations: []
})
export class AppRoutingModule { }
