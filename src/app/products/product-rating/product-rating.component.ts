import { Component, OnInit } from '@angular/core';
import { Product } from '../../shared/product-model';
import { Router, ActivatedRoute, Params } from "@angular/router";
import { ProductService } from '../../services/product.service';

import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-product-rating',
  templateUrl: './product-rating.component.html',
  styleUrls: ['./product-rating.component.css']
})
export class ProductRatingComponent implements OnInit {

  products: Product[];

  constructor(private router: Router, private route: ActivatedRoute, private productService: ProductService) { }

  ngOnInit() {
    this.route.params.switchMap((params: Params) => {
      return this.productService.getByRating(+params['rating']);
    }).subscribe((products) => {
      this.products = products;
    });
  }

  getDetails(id){
    this.router.navigate(["details", id]);
  }

}
