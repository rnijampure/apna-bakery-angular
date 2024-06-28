import { Component } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';

import { CartService } from '../post-login/cart.service';
import { CommonModule } from '@angular/common';
import { SearchBarComponent } from '../header/search-bar/search-bar.component';
import { Observable, map } from 'rxjs';
import { KeyValue, KeyValuePipe } from '@angular/common';
import { JsonPipe } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { productType } from '../../constants.ts/types';
import { imagesCupcakes, imagesDoughnut } from '../../constants.ts/constants';
@Component({
  selector: 'app-searchpage',
  standalone: true,
  imports: [
    SearchBarComponent,
    MatCardModule,
    MatButtonModule,
    JsonPipe,
    KeyValuePipe,

    CommonModule,
  ],
  templateUrl: './searchpage.component.html',
  styleUrl: './searchpage.component.scss',
})
export class SearchpageComponent {
  state: any;
  filteredItem: any = [];

  cartValue: any = {
    item: {},
    quantity: 0,
    date: new Date().toDateString(),
    grandTotal: 0,
    totalPrice: 0,
  };
  //allItems = imagesCupcakes.concat(imagesDoughnut);
  allItems = [...imagesCupcakes, ...imagesDoughnut];
  constructor(
    public activatedRoute: ActivatedRoute,
    private router: Router,
    public cart: CartService
  ) {
    // this._location = location;
  }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe((params) => {
      this.state = params['name'];
      this.filterList(this.state);
    });

    // console.log('state', this.state);
  }
  filterList(searchStr: string) {
    // console.log('this.allItems', this.allItems[0]);
    this.filteredItem = [];
    for (let i: number = 0; i < this.allItems.length; i++) {
      for (let j: number = 0; j < this.allItems[i].length; j++) {
        if (this.allItems[i][j].category.includes(this.state)) {
          this.allItems[i][j].category.unshift(this.state);

          const index = this.allItems[i][j].category.lastIndexOf(this.state);
          if (index > -1) {
            // only splice array when item is found
            this.allItems[i][j].category.splice(index, 1); // 2nd parameter means remove one item only
          }

          //  this.allItems[i][j].category.splice();
          this.filteredItem.push(this.allItems[i][j]);
        }
      }
    }
    /*  this.allItems.map((item: any) => {
      // console.log('item', item);
      this.filteredItem.push(
        item.map((_item: any) => {
          console.log('_item 123', _item);
          if (_item['category'] && _item['category'].includes(this.state)) {
            return _item;
          }
        })
      );
    }); */

    // console.log('filterlist', this.filteredItem);
  }
  updateSearch(newItem: string) {
    this.state = newItem;
    // console.log('this.state', this.state);
    this.filterList(this.state);
  }
  productDetails(item: productType) {
    if (this.state) {
      this.router.navigate([`product-details/${item.id}`], {
        state: { item: item, state: this.state },
      });
    }
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
