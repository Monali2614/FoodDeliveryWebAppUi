import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { AdminComponent } from './component/admin/admin.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './component/login/login.component';
import { AdminPanelComponent } from './component/admin-panel/admin-panel.component';
import { AddRestaurantComponent } from './component/add-restaurant/add-restaurant.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { RestaurantComponent } from './component/restaurant/restaurant.component';
import { HttpClientModule } from '@angular/common/http';
import { UserService } from './service/user.service';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AdminComponent,
    LoginComponent,

    AdminPanelComponent,
    AddRestaurantComponent,
    HomeComponent,
    RestaurantComponent,
    


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
   FormsModule,
    RouterModule,
    HttpClientModule,
    ReactiveFormsModule
    
    
    
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
