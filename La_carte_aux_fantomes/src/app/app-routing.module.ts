import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PremierpageComponent } from './premierpage/premierpage.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path:'PremierPage',
    component: PremierpageComponent,
  }


];

@NgModule({
  imports: [RouterModule.forRoot([
    {path: 'home', component: HomeComponent},
    {path: '', redirectTo:'home', pathMatch: 'full'},
    {path: 'PremierPage', component: PremierpageComponent},
    {path: '**', redirectTo: 'home', pathMatch: 'full'}
  ])],
  exports: [RouterModule]
})
export class AppRoutingModule { }
