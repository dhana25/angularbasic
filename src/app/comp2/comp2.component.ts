import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.css']
})
export class Comp2Component implements OnInit {

  constructor() { }
  @Input() rdata:any;
  @Output() cmsg:EventEmitter<any> = new EventEmitter();

  ngOnInit(): void {
  }

  sendEmit(evevl:any) {
    this.cmsg.emit(evevl)
  }

}
