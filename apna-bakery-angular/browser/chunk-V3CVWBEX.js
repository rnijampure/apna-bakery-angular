import {
  BehaviorSubject,
  ɵɵdefineInjectable
} from "./chunk-DLG6G4H4.js";

// src/app/common/post-login/cart.service.ts
var _CartService = class _CartService {
  constructor() {
    this.cart = [];
    this.ordersChanged = new BehaviorSubject(this.cart);
    this.showSideCart = new BehaviorSubject(false);
    this.grandTotalValue = 0;
    this.grandTotal = new BehaviorSubject(this.grandTotalValue);
  }
  addToCart(_item) {
    if (_item) {
      this.cart.push(_item);
      this.ordersChanged.next(this.cart);
      this.calculateGrandTotal();
    }
  }
  calculateGrandTotal() {
    if (this.cart.length == 0) {
      this.grandTotal.next(0);
    }
    if (this.cart.length >= 1) {
      this.cart.map((element) => {
        element.grandTotal = element.item.price * element.quantity;
        console.log("element.map", element);
        console.log("_item.grandTotal", element.grandTotal);
        this.grandTotalValue += element.grandTotal;
        console.log("this.grandTotalValue", this.grandTotalValue);
      });
      const sum = this.cart.reduce((acc, o) => acc + parseInt(o.grandTotal), 0);
      console.log("sumWithInitial", sum);
      this.grandTotal.next(sum);
    }
  }
  updateCart(item, value) {
    this.cart.forEach((element, index) => {
      if (element.item.id === item.item.id) {
        element.quantity = value;
        element.totalPrice = Number(value) * Number(element.item.price);
      }
    });
    this.calculateGrandTotal();
  }
  getCart() {
    return this.ordersChanged;
  }
  removeFromCart(_item) {
    console.log("console here");
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
  showhideSideCartFunct(dekho) {
    this.showSideCart.next(dekho);
  }
};
_CartService.\u0275fac = function CartService_Factory(t) {
  return new (t || _CartService)();
};
_CartService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _CartService, factory: _CartService.\u0275fac, providedIn: "root" });
var CartService = _CartService;

export {
  CartService
};
//# sourceMappingURL=chunk-V3CVWBEX.js.map
