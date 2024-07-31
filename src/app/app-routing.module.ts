import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { AdminComponent } from './component/admin/admin.component';

import { AdminPanelComponent } from './component/admin-panel/admin-panel.component';
import { AddRestaurantComponent } from './component/add-restaurant/add-restaurant.component';
import { SearchrestaurantbyitemComponent } from './component/searchrestaurantbyitem/searchrestaurantbyitem.component';
import { HomeComponent } from './component/home/home.component';
import { PaymentComponent } from './component/payment/payment.component';
import { RestaurantListComponent } from './component/restaurant-list/restaurant-list.component';
import { LoginComponent } from './component/login/login.component';
import { UserregisterComponent } from './component/userregister/userregister.component';
import { WishlistComponent } from './component/wishlist/wishlist.component';
import { EditProfileComponent } from './component/edit-profile/edit-profile.component';
import { MenuComponent } from './component/menu/menu.component';
import { CartComponent } from './component/cart/cart.component';
import { ChatboxComponent } from './component/chatbox/chatbox.component';



const routes: Routes = [

  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {path: 'header', component: HeaderComponent},
  {path: 'footer', component: FooterComponent},
  {path: 'admin', component: AdminComponent},
  {path: 'admin-panel', component: AdminPanelComponent},
  {path: 'addrestaurant', component: AddRestaurantComponent},
  {path: 'home', component: HomeComponent},
  {path: 'payment', component: PaymentComponent},
  {path: 'searchrestaurantbyitem', component: SearchrestaurantbyitemComponent},
  // { path: 'restaurant-list', component: RestaurantListComponent},
  {path: 'login', component: LoginComponent},
  {path: 'userregister', component: UserregisterComponent},
  { path: 'restaurant-list', component: RestaurantListComponent },
  { path: 'wishlist', component: WishlistComponent },
 { path: 'edit-profile', component: EditProfileComponent },
  // { path: 'address', component: AddressComponent },
  // { path: 'orders', component: OrdersComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'cart', component: CartComponent },
  { path: 'chatbox', component: ChatboxComponent },



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
