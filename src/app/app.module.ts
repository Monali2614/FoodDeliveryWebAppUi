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
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { UserService } from './service/user.service';
import { MenuService } from './service/menu.service';
import { PaymentComponent } from './component/payment/payment.component';
import { RouterModule } from '@angular/router'; // Import RouterModule
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchrestaurantbyitemComponent } from './component/searchrestaurantbyitem/searchrestaurantbyitem.component';
import { RestaurantListComponent } from './component/restaurant-list/restaurant-list.component';
import { LoginComponent } from './component/login/login.component';
import { UserregisterComponent } from './component/userregister/userregister.component';
import { WishlistComponent } from './component/wishlist/wishlist.component';
import { EditProfileComponent } from './component/edit-profile/edit-profile.component';
import { MenuComponent } from './component/menu/menu.component';
import { CartComponent } from './component/cart/cart.component';
import { ChatboxComponent } from './component/chatbox/chatbox.component';

export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http);
}
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
    WishlistComponent,
    EditProfileComponent,
    MenuComponent,
    CartComponent,
    ChatboxComponent

    
  ],
  
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule ,

    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
 

  ],
  providers: [UserService, MenuService],
  bootstrap: [AppComponent]
})
export class AppModule { }
