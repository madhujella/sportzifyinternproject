import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { AngularFontAwesomeModule } from 'angular-font-awesome';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ProductsComponent } from './products/products.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductService } from './services/product.service';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProductCategoryComponent } from './product-category/product-category.component';
import { ProductPriceComponent } from './product-price/product-price.component';
import { ProductRatingComponent } from './product-rating/product-rating.component';

const routes:Routes = [
  { path:'', component: ProductsComponent},
  { path:'filter/:category', component: ProductCategoryComponent },
  { path:'price/:sort', component: ProductPriceComponent},
  { path:'ratings/:rating', component: ProductRatingComponent},
  { path:'details/:id', component: ProductDetailsComponent },
  { path:'error', component: PageNotFoundComponent},
  { path: '**', redirectTo:'error'}
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ProductsComponent,
    ProductDetailsComponent,
    PageNotFoundComponent,
    ProductCategoryComponent,
    ProductPriceComponent,
    ProductRatingComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    AngularFontAwesomeModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
