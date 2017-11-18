import { Component, OnInit } from '@angular/core';
import { Product } from '../../shared/product-model';
import { Router, ActivatedRoute, Params } from "@angular/router";
import { ProductService } from '../../services/product.service';

import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-product-category',
  templateUrl: './product-category.component.html',
  styleUrls: ['./product-category.component.css']
})
export class ProductCategoryComponent implements OnInit {

  products: Product[];
  category: string;

  constructor(private router: Router, private route: ActivatedRoute, private productService: ProductService) { }

  ngOnInit() {
    this.route.params.switchMap((params: Params) => {
      return this.productService.getByCategory(params['category']);
    }).subscribe((products) => {
      this.products = products;
    });
   
  }

  getDetails(id){
    this.router.navigate(["details", id]);
  }

}
