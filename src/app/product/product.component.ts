import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  productName = '';
  constructor(private route:ActivatedRoute,private rou:Router) { }

  ngOnInit(): void {
    this.productName = this.route.snapshot.params['id'];
   // this.rou.navigate(['products']);
  }

  navg(){
   // this.rou.navigate(['products']);
    this.rou.navigateByUrl('products');
  }

}
