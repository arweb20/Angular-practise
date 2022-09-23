import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProductsComponent } from './products/products.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ProductEntryComponent } from './products/product-entry/product-entry.component';
import { ProductListComponent } from './products/product-list/product-list.component';

const route: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'product',
    component: ProductsComponent,
  },
];

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    AboutComponent,
    ProductsComponent,
    ProductEntryComponent,
    ProductListComponent,
  ],
  imports: [BrowserModule, FormsModule, RouterModule.forRoot(route)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
