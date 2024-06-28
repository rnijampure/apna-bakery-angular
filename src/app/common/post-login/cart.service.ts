import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { cartitem, productType } from '../../constants.ts/types';
@Injectable({
  providedIn: 'root',
})
export class CartService {
  cart: any[] = [];
  ordersChanged = new BehaviorSubject<any>(this.cart);
  showSideCart = new BehaviorSubject<boolean>(false);
  grandTotalValue: number = 0;
  grandTotal = new BehaviorSubject<number>(this.grandTotalValue);

  constructor() {}

  addToCart(_item: cartitem) {
    if (_item) {
      this.cart.push(_item);
      this.ordersChanged.next(this.cart);
      this.calculateGrandTotal();
    }
  }
  calculateGrandTotal() {
    /*    this.cart;
    if (_item) {
      console.log('this.cart.length', this.cart.length);
      if (this.cart.length == 0) {
        console.log('_item', _item);
        _item.grandTotal = Number(_item.totalPrice) * Number(_item.quantity);

        //   this.cart.push(_item);
        /*     
      this.cart.push(_item); 
  } */
    if (this.cart.length == 0) {
      this.grandTotal.next(0);
    }
    if (this.cart.length >= 1) {
      this.cart.map((element: any) => {
        element.grandTotal = element.item.price * element.quantity; //* Number(element.quantity);

        console.log('element.map', element);
        console.log('_item.grandTotal', element.grandTotal);
        //Number(element.totalPrice);
        this.grandTotalValue += element.grandTotal;
        console.log('this.grandTotalValue', this.grandTotalValue);
        // acc = acc + element.totalPrice;
        // element.grandTotal = acc;
      });
      /*  this.cart.reduce((acc: number, element: any) => {
        console.log('acc cement:::', acc);
        acc = element.grandTotal + acc;
        this.grandTotalValue = acc;
        console.log('this.grandTotalValue', this.grandTotalValue);
        // acc = acc + element.totalPrice;
        // element.grandTotal = acc;
      }, 0);
      const sumWithInitial = this.cart.reduce(
        (accumulator, currentValue) => accumulator + currentValue.grandTotal,
        0
      ); */
      const sum = this.cart.reduce((acc, o) => acc + parseInt(o.grandTotal), 0);
      console.log('sumWithInitial', sum);

      this.grandTotal.next(sum);
      //   this.cart.push(_item);
      /*     
                  if ((this.cart.length = 1)) {
            _item.grandTotal =
              Number(element.quantity) * Number(element.item.price);
            console.log('_item.grandTotal == 0', typeof element.item.price);
          } else {
            _item.grandTotal = element.item.totalPrice + _item.grandTotal;
          }
        this.cart.push(_item); */
    }
    // this.cart.push(_item);
    //this.cart = [...this.cart, { grandTotal: this.grandTotal }];

    //this.ordersChanged.next(this.cart);
  }
  updateCart(item: any, value: any) {
    //  this.cart.findIndex((item: any) => item.item.id === value.item.id);
    this.cart.forEach((element, index) => {
      if (element.item.id === item.item.id) {
        //console.log('this.cart.service else', this.cart);
        element.quantity = value;
        element.totalPrice = Number(value) * Number(element.item.price);
        // items[index] = item;
      }
    });
    this.calculateGrandTotal();
    // console.log('this.cart.service here', this.cart);
  }
  getCart() {
    // this.ordersChanged.next(this.orders);
    return this.ordersChanged;
  }
  removeFromCart(_item: cartitem) {
    console.log('console here');
    let i = this.cart.indexOf(_item);
    this.cart.splice(i, 1);
    this.calculateGrandTotal();
  }
  showSideCartFunct() {
    this.showSideCart.next(true);
  }
  hideSideCartFunct() {
    this.showSideCart.next(false);
  }
  showhideSideCartFunct(dekho: boolean) {
    this.showSideCart.next(dekho);
  }
}
