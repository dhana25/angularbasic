import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ctc',
  templateUrl: './ctc.component.html',
  styleUrls: ['./ctc.component.css']
})
export class CtcComponent implements OnInit {

  num = [1,2,3,4,5,6,7,9];
  
  constructor() { }

  ngOnInit(): void {
  }

}
