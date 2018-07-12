import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { CategoryComponent } from '../category/category.component';
import { ProductComponent } from '../product/product.component';
import { ProductAddComponent } from '../product-add/product-add.component';
import { AuthGuard } from '../auth/auth.guard';
import { LoginComponent } from '../login/login/login.component';
import { HeaderComponent } from '../header/header.component'

const routes: Routes = [
  // { path: '', redirectTo: '', pathMatch: 'full' },
  
  { path: 'login', component: LoginComponent },
  { path: '', component: HeaderComponent,
  canActivate: [AuthGuard],
  children :[
  { path: 'dashboard', component: DashboardComponent },
  { path: 'category', component: CategoryComponent },
  { path: 'product', component: ProductComponent },
  { path: 'product-add', component: ProductAddComponent }
]
},
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
