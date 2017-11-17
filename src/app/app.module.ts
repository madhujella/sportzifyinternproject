import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ProductsComponent } from './products/products.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductService } from './services/product.service';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes:Routes = [
  { path:'', component: ProductsComponent},
  { path:'details/:id', component: ProductDetailsComponent},
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
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
