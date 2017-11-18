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

  getProduct(id: number): Observable<Product>  {
    return Observable.of(PRODUCTS[id-1]);
  }

  getByCategory(category: string): Observable<Product[]> {
    return Observable.of(PRODUCTS.filter((product) => {
      return product.category === category
    }));
  }
  

  getByRating(rating): Observable<Product[]> {
    return Observable.of(PRODUCTS.filter((product) => {
      return product.ratings >= rating
    }));
  }

  getByPrice(type): Observable<Product[]> {
    return Observable.of(PRODUCTS.sort((a,b) => {
      if( type === 0){
        return a.price - b.price;
      }else if (type === 1) {
        return a.price + b.price;
      }
    }));
  }

  

}
