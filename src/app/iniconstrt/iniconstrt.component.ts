import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-iniconstrt',
  templateUrl: './iniconstrt.component.html',
  styleUrls: ['./iniconstrt.component.css']
})
export class IniconstrtComponent implements OnInit {
  formtval = '';
  @Input() fromval = 0;
  constructor() {
   
   }

  ngOnInit(): void {
    if(this.fromval < 50){
      this.formtval = "less than 50";
    }else {
      this.formtval = "greater than 50";
    }
  }

}
