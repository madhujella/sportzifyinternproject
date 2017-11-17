import { Component, OnInit } from '@angular/core';
import { PRODUCTS } from '../shared/products';
import { Product } from '../shared/product-model';
import { Router } from "@angular/router";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: Product[] = PRODUCTS;

  constructor( private router: Router) { }

  ngOnInit() {
  }

  getDetails(id){
    this.router.navigate(["details", id] );
  }

}
