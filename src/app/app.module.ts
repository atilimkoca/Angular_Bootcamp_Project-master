import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from "@angular/common/http"
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { CategoryComponent } from './category/category.component';
import { ProductComponent } from './product/product.component';
import { ProductFilterPipe } from './product/product-filter.pipe';
import { FormsModule } from '@angular/forms';
import { CategoryFilterPipe } from './category/category-filter.pipe';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeeFilterPipe } from './employee/employee-filter.pipe';
import { ContactusComponent } from './contactus/contactus.component';
import { ContactusPipe } from './contactus/contactus.pipe';
import { IndexComponent } from './index/index.component';
import { LoginComponent } from './login/login.component';
import { AccountService } from './services/account.service';
import { LoginGuard } from './login/login.guard';
import { RegisterComponent } from './register/register.component';
import { NgxPopper } from 'angular-popper';



@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    CategoryComponent,
    ProductComponent,
    ProductFilterPipe,
    CategoryFilterPipe,
    EmployeeComponent,
    EmployeeFilterPipe,
    ContactusComponent,
    ContactusPipe,
    IndexComponent,
    LoginComponent,
    RegisterComponent,
    
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    
    
    
  ],
  providers: [AccountService,LoginGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
