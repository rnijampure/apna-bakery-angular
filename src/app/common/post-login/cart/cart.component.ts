import { Component, OnInit, OnChanges } from '@angular/core';

import { Location } from '@angular/common';
import { JsonPipe } from '@angular/common';
import { CartService } from '../cart.service';
import { cartitem, productType } from '../../../constants.ts/types';
@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [JsonPipe],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss',
})
export class CartComponent {
  //selected: number;
  cartItems: any;
  grandTotal: number = 0;
  constructor(public cart: CartService, public _location: Location) {}
  ngOnChange() {}
  ngOnInit() {
    this.cart.getCart().subscribe((result: any) => {
      console.log('result', result);
      this.cartItems = result;
    });
    this.cart.grandTotal.subscribe((total: number) => {
      console.log('total hai', total);
      this.grandTotal = total;
    });
    // console.log('getcart', this.cart.getCart());
  }
  updateQuantity(event: any, item: productType) {
    // console.log('updfate event', event.target.value);

    this.cart.updateCart(item, event.target.value);
  }
  removeFromCart(product: cartitem) {
    this.cart.removeFromCart(product);
  }
  backClicked() {
    this._location.back();
  }
}
