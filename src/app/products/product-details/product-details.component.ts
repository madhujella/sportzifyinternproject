import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { Product } from '../../shared/product-model';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  id: any;
  product:any;

  constructor(private route: ActivatedRoute, private productService: ProductService) { }

  ngOnInit() {
    this.route.params.switchMap((params: Params) => {
      return this.productService.getProduct(+params['id'])
    }).subscribe((product) => {
      this.product = product;
    });
    
  }
    
}



