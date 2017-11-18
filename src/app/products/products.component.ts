import { Component, OnInit } from '@angular/core';
import { PRODUCTS } from '../shared/products';
import { Product } from '../shared/product-model';
import { Router } from "@angular/router";
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: Product[];

  constructor( private router: Router, private productService: ProductService) { }

  ngOnInit() {
    this.productService.getProducts().subscribe((products) => {
      this.products = products;
    });
  }

  getDetails(id){
    this.router.navigate(["details", id]);
  }

  

}
