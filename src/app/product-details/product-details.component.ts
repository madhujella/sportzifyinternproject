import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../services/product.service';
import { Product } from '../shared/product-model';
import { PRODUCTS } from '../shared/products';

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
    this.route.params.subscribe((param) => {
      this.id = param.id;
    });

    
    }
    // this.productService.getProduct(this.id).subscribe( id => {
    //   console.log(id);
    // });
    // console.log(this.product);

    getid() {
      PRODUCTS.filter((dd) => {
        if (this.id === dd.id) {
          this.product = dd.id;
          console.log(this.product);
        }
      });
    }

    
}



