import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { AdminComponent } from './component/admin/admin.component';
import { LoginComponent } from './component/login/login.component';
import { AdminPanelComponent } from './component/admin-panel/admin-panel.component';
import { AddRestaurantComponent } from './component/add-restaurant/add-restaurant.component';
import { HomeComponent } from './component/home/home.component';
import { RestaurantComponent } from './component/restaurant/restaurant.component';
import { UserregisterComponent } from './component/userregister/userregister.component';


const routes: Routes = [

  { path: '', redirectTo: '/home', pathMatch: 'full' } ,
  {path: 'header', component: HeaderComponent},
  {path: 'footer', component: FooterComponent},
  {path: 'admin', component: AdminComponent},
  {path: 'login', component: LoginComponent},
  {path: 'userregister', component: UserregisterComponent},
  {path: 'admin-panel', component: AdminPanelComponent},
  {path: 'add-restaurant', component: AddRestaurantComponent},
  {path: 'home', component: HomeComponent},
  {path: 'restaurant', component: RestaurantComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
