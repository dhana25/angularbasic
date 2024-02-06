import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SlowloadComponent } from './ntlazy/slowload/slowload.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProductsComponent } from './products/products.component';
import { TouchComponent } from './touch/touch.component';
import { ProductComponent } from './product/product.component';

const routes: Routes = [
  {path:'', redirectTo:'home',pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'about',component:AboutComponent},
  {path:'products',component:ProductsComponent},
  {path:'touch',component:TouchComponent},
  {path:'slow',component:SlowloadComponent},
  {path:'product/:id',component:ProductComponent},
  
  {path:'lazyload',loadChildren:()=>import('./lazy/lazy.module').then(mod => mod.LazyModule)},
  // {path:'**',component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
