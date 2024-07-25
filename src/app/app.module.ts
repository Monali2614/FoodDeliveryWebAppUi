// app.module.ts or userregister.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { AdminComponent } from './component/admin/admin.component';
import { AdminPanelComponent } from './component/admin-panel/admin-panel.component';
import { AddRestaurantComponent } from './component/add-restaurant/add-restaurant.component';
import { HomeComponent } from './component/home/home.component';

import { HttpClientModule } from '@angular/common/http';
import { UserService } from './service/user.service';
import { MenuService } from './service/menu.service';
import { PaymentComponent } from './component/payment/payment.component';
import { RouterModule } from '@angular/router'; // Import RouterModule
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchrestaurantbyitemComponent } from './component/searchrestaurantbyitem/searchrestaurantbyitem.component';
import { RestaurantListComponent } from './component/restaurant-list/restaurant-list.component';
import { LoginComponent } from './component/login/login.component';
import { UserregisterComponent } from './component/userregister/userregister.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AdminComponent,
    AdminPanelComponent,
    AddRestaurantComponent,
    HomeComponent,
    PaymentComponent,
    SearchrestaurantbyitemComponent,
    RestaurantListComponent,
    UserregisterComponent,
    LoginComponent,
    

  ],
  
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule 
  ],
  providers: [UserService, MenuService],
  bootstrap: [AppComponent]
})
export class AppModule { }
