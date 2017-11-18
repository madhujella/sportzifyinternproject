import { Component, OnInit } from '@angular/core';
import { Product } from '../shared/product-model';
import { Router, ActivatedRoute, Params } from "@angular/router";
import { ProductService } from '../services/product.service';

import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-product-price',
  templateUrl: './product-price.component.html',
  styleUrls: ['./product-price.component.css']
})
export class ProductPriceComponent implements OnInit {

  products: Product[];

  constructor(private router: Router, private route: ActivatedRoute, private productService: ProductService) { }

  ngOnInit() {
    this.route.params.switchMap((params: Params) => {
      return this.productService.getByPrice(+params['sort']);
    }).subscribe((products) => {
      this.products = products;
    });
  }

  getDetails(id){
    this.router.navigate(["details", id]);
  }
}
