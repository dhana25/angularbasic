import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NtlazyModule } from './ntlazy/ntlazy.module';
import { Comp1Component } from './comp1/comp1.component';
import { Comp2Component } from './comp2/comp2.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { token } from './services/token.services';
import { VencaptopComponent } from './vencaptop/vencaptop.component';
import { VencapbottomComponent } from './vencapbottom/vencapbottom.component';
import { AlldircDirective } from './alldirc.directive';
import { CtcComponent } from './ctc/ctc.component';
import { splpipe } from './splpipe.pipe';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProductsComponent } from './products/products.component';
import { TouchComponent } from './touch/touch.component';
import { ProductComponent } from './product/product.component';
import { initialPipe } from './initial.pipe';
import { HighlightDirective } from './highlight.directive';
import { IniconstrtComponent } from './iniconstrt/iniconstrt.component';


@NgModule({
  declarations: [
    AppComponent,
    Comp1Component,
    Comp2Component,
    VencaptopComponent,
    VencapbottomComponent,
    AlldircDirective,
    CtcComponent,
    splpipe,
    initialPipe,
    HomeComponent,
    AboutComponent,
    ProductsComponent,
    TouchComponent,
    ProductComponent,
    HighlightDirective,
    IniconstrtComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NtlazyModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [{provide:HTTP_INTERCEPTORS,useClass:token,multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
