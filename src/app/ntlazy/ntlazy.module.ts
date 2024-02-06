import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NtlazyRoutingModule } from './ntlazy-routing.module';
import { SlowloadComponent } from './slowload/slowload.component';


@NgModule({
  declarations: [
    SlowloadComponent
  ],
  imports: [
    CommonModule,
    NtlazyRoutingModule
  ]
})
export class NtlazyModule { 
  constructor() {
    console.log("This is always loading");
  }
}
