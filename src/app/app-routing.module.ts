import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Error404Component } from './pages/error404.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { NewComponent } from './components/new/new.component';
import { AboutComponent } from './components/about/about.component';

const routes: Routes = [
  
  {path:'', component:InicioComponent},
  {path:'new', component:NewComponent},
  {path:'about', component:AboutComponent},
  {path:'',redirectTo:'',pathMatch:'full'},
  {path:'**', component:Error404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
 