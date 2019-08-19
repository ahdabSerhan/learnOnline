import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CatagoriesListComponent } from './catagories/catagories-list/catagories-list.component';
import { AppComponent } from './app.component';
import { LoginComponent } from './authentication/login/login.component';

const routes: Routes = [
  {path:'',component:AppComponent},
  {path:'login',component:LoginComponent},
  {path:'catagories-list', component:CatagoriesListComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
