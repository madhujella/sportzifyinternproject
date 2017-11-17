import { Injectable } from '@angular/core';
import { Product } from '../shared/product-model';
import { PRODUCTS } from '../shared/products';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/delay';
import 'rxjs/add/observable/of';

@Injectable()
export class ProductService {

  constructor() { }

  getProducts(): Observable<Product[]> {
    return Observable.of(PRODUCTS);
  }

  getProduct(id: number) {
    return Observable.of(PRODUCTS.filter(d => { d.id === id })[0]);
  }

}
