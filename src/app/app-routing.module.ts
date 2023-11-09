import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AComponent } from './pages/a/a.component';
import { BComponent } from './pages/b/b.component';
import { Error404Component } from './pages/error404/error404.component';

const routes: Routes = [
  {path:'a',component:AComponent},
  {path:'b',component:BComponent},
  {path:'',redirectTo:'/a',pathMatch:'full'},
  {path:'**', component:Error404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
 