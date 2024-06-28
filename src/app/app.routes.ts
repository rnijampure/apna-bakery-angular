import { Routes } from '@angular/router';
export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./prelogin/home/home.component').then((x) => x.HomeComponent),
  },
  {
    path: 'search',
    loadComponent: () =>
      import('./common/searchpage/searchpage.component').then(
        (x) => x.SearchpageComponent
      ),
  },
  {
    path: 'product-details/:id',
    loadComponent: () =>
      import('./common/productdetails/productdetails.component').then(
        (x) => x.ProductdetailsComponent
      ),
  },
  {
    path: 'cart',
    loadComponent: () =>
      import('./common/post-login/cart/cart.component').then(
        (x) => x.CartComponent
      ),
  },
];
