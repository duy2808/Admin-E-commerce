import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { AppComponent } from './app.component';
import { CategoryComponent } from './category/category.component';
import { ProductComponent } from './product/product.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductAddComponent } from './product-add/product-add.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
// Import Froala Editor.
import "froala-editor/js/froala_editor.pkgd.min.js";

// Import Angular2 plugin.
import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';
import { ForbiddenValidatorDirective } from './app-directive/forbidden-name.directive';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login/login.component';

// login
import { AuthGuard } from './auth/auth.guard';
import { AuthService } from './auth/auth.service';
import { JwtInterceptor } from './_helpers';
import { fakeBackendProvider } from './_helpers';
import { UserService } from './services/user.service';

import {NgxPaginationModule} from 'ngx-pagination';
import { LoadingSpinComponent } from './login/ui/loading-spin/loading-spin.component'; // <-- import the module
@NgModule({
  declarations: [
    AppComponent,
    CategoryComponent,
    ProductComponent,
    DashboardComponent,
    ProductAddComponent,
    ForbiddenValidatorDirective,
    BreadcrumbComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    LoadingSpinComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    FroalaEditorModule.forRoot(), 
    FroalaViewModule.forRoot(),
    NgxPaginationModule,
  ],
  providers: [
    AuthGuard,
    AuthService,
    UserService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptor,
      multi: true
    },
    // provider used to create fake backend
    fakeBackendProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
