import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CatagoriesListComponent } from './catagories/catagories-list/catagories-list.component';
import { AppComponent } from './app.component';
import { LoginComponent } from './app-navbar/authentication/login/login.component';
import { HomePageComponent } from './home-page/home-page.component';

const routes: Routes = [
  {path:'',component:HomePageComponent},
  {path:'login',component:LoginComponent},
  {path: 'catagories', component:CatagoriesListComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
