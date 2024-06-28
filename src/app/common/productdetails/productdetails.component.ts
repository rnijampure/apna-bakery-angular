import { Component } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Location } from '@angular/common';
import { productType } from '../../constants.ts/types';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CartService } from '../post-login/cart.service';
import { CartComponent } from '../post-login/cart/cart.component';
import { cartitem } from '../../constants.ts/types';
@Component({
  selector: 'app-productdetails',
  standalone: true,
  imports: [CurrencyPipe, MatFormFieldModule, MatSelectModule, CartComponent],
  templateUrl: './productdetails.component.html',
  styleUrl: './productdetails.component.scss',
})
export class ProductdetailsComponent {
  selected: number = 1;
  product: productType | any = {
    id: 0,
    name: 'Hungry Chocolate',
    src: './assets/images/doughnut/4.jpg',
    description: 'Sinful Sugar glaze on Hevenly doughnut',
    price: 90,
    totalPrice: 90,
    starRating: 4.6,
    category: ['doughnuts', 'sweet', 'Sinful Sugar', 'Hungry Chocolate'],
  };

  cartValue: cartitem = {
    item: this.product,
    quantity: 0,
    date: new Date().toDateString(),
    grandTotal: this.product.quantity * this.product.price,
    totalPrice: this.selected * this.product.price,
  };

  constructor(
    private router: Router,
    private location: Location,
    public cart: CartService
  ) {
    // console.log('location hai bhai', location.getState());
    this.product = location.getState();
    // console.log(this.router?.getCurrentNavigation()?.extras.state.example); // should log out 'bar'
  }

  ngOnInit() {}
  sendback() {
    //  console.log('this.state', this.product.state);
    if (this.product.state != undefined) {
      this.router.navigate([`/search`], {
        queryParams: { name: this.product.state },

        skipLocationChange: false,
      });
    } else {
      this.location.back();
    }
  }
  addToCart() {
    let num = Number(this.product.price) * Number(this.selected);
    this.cartValue = {
      item: this.product.item,
      quantity: Number(this.selected),
      date: new Date().toDateString(),
      totalPrice: Number(0),
      grandTotal: Number(0),
    };

    this.cart.addToCart(this.cartValue);
    this.cart.showhideSideCartFunct(true);
  }
}
