import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './common/header/header.component';
import { HomeComponent } from './prelogin/home/home.component';
import { CartComponent } from './common/post-login/cart/cart.component';
import { CartService } from './common/post-login/cart.service';

import { RouterModule, NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    HomeComponent,
    RouterModule,
    CartComponent,
    CommonModule,
  ],
  providers: [CartService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass',
})
export class AppComponent {
  urlcarthaiKya: boolean = false;
  constructor(public cartSer: CartService, public router: Router) {}
  show: boolean = false;
  ngOnInit() {
    this.cartSer.showSideCart.subscribe((result: boolean) => {
      // console.log('here', result);
      this.show = result;
    });
    this.router.events.subscribe((val) => {
      if (val instanceof NavigationEnd) {
        //  console.log('val', val.url.includes('/search'));
        if (val.url.includes('/cart')) {
          this.urlcarthaiKya = true;
        } else {
          this.urlcarthaiKya = false;
        }
      }
    });
  }
  //show =

  title = 'apana-bekry';

  showHideCart() {
    this.show = !this.show;
    this.cartSer.showhideSideCartFunct(this.show);
  }
}
