import { Component, ViewChild, Input, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { CartService } from '../../../common/post-login/cart.service';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import {
  NgbCarousel,
  NgbCarouselModule,
  NgbSlideEvent,
  NgbSlideEventSource,
} from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { productType } from '../../../constants.ts/types';
import { JsonPipe } from '@angular/common';
@Component({
  selector: 'app-homemiddlesection',
  standalone: true,
  imports: [
    NgbCarouselModule,
    FormsModule,
    MatButtonModule,
    MatCardModule,
    JsonPipe,
    CommonModule,
  ],
  providers: [JsonPipe],
  templateUrl: './homemiddlesection.component.html',
  styleUrl: './homemiddlesection.component.scss',
})
export class HomemiddlesectionComponent {
  @Input() images: any;
  //@Input() images: any;
  @Input() title: string = '';
  @Input() size: string = '';

  // @ts-nocheck

  /*   images = [62, 83, 466, 965, 982, 1043, 738].map(
    (n) => `https://picsum.photos/id/${n}/900/500`
  ); */
  paused = true;
  unpauseOnArrow = false;
  pauseOnIndicator = false;
  pauseOnHover = true;
  pauseOnFocus = true;
  cartValue: any = {
    item: {},
    quantity: 0,
    date: new Date().toDateString(),
    grandTotal: 0,
    totalPrice: 0,
  };
  constructor(private router: Router, public cart: CartService) {
    // this._location = location;
  }

  @ViewChild('carousel', { static: true }) carousel: any;

  ngOnInit() {
    this.carousel.pause();
  }
  togglePaused() {
    if (this.paused) {
      this.carousel.cycle();
    } else {
      this.carousel.pause();
    }
    this.paused = !this.paused;
  }
  productDetails(item: productType) {
    this.router.navigate([`product-details/${item.id}`], {
      state: { item: item, state: undefined },
    });
  }
  addProductToCart(product: any) {
    this.cartValue = {
      item: product,
      quantity: Number(1),
      date: new Date().toDateString(),
      totalPrice: Number(0),
      grandTotal: Number(0),
    };

    this.cart.addToCart(this.cartValue);
    this.cart.showhideSideCartFunct(true);
  }
}
