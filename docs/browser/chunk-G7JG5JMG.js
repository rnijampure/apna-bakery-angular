import {
  CartService
} from "./chunk-V3CVWBEX.js";
import {
  Location,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate1
} from "./chunk-DLG6G4H4.js";

// src/app/common/post-login/cart/cart.component.ts
function CartComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1);
    \u0275\u0275element(1, "img", 2);
    \u0275\u0275elementStart(2, "h2", 0);
    \u0275\u0275text(3, "Your cart is empty!");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p");
    \u0275\u0275text(5, "Please select a few items.");
    \u0275\u0275elementEnd()();
  }
}
function CartComponent_Conditional_3_For_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 3)(1, "div", 10)(2, "div", 4)(3, "div", 11)(4, "div", 4)(5, "div", 12);
    \u0275\u0275element(6, "img", 13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 14)(8, "div", 4)(9, "div", 11)(10, "h3", 15);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(12, "div", 4)(13, "div", 16);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div", 4)(16, "div", 16);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "div", 4)(19, "div", 16);
    \u0275\u0275text(20, " Quantity: ");
    \u0275\u0275elementStart(21, "select", 17);
    \u0275\u0275listener("change", function CartComponent_Conditional_3_For_1_Template_select_change_21_listener($event) {
      const product_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.updateQuantity($event, product_r3));
    });
    \u0275\u0275elementStart(22, "option", 18);
    \u0275\u0275text(23, " 1 ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "option", 19);
    \u0275\u0275text(25, " 2 ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "option", 20);
    \u0275\u0275text(27, " 3 ");
    \u0275\u0275elementEnd()()()()()()()();
    \u0275\u0275elementStart(28, "div", 21)(29, "button", 22);
    \u0275\u0275listener("click", function CartComponent_Conditional_3_For_1_Template_button_click_29_listener() {
      const product_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.removeFromCart(product_r3));
    });
    \u0275\u0275element(30, "i", 23);
    \u0275\u0275text(31, " Remove ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(32, "div", 4)(33, "div", 24);
    \u0275\u0275text(34);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const product_r3 = ctx.$implicit;
    \u0275\u0275advance(6);
    \u0275\u0275styleProp("width", 100, "px")("height", 100, "px")("margin", 2, "px");
    \u0275\u0275property("src", product_r3.item.src, \u0275\u0275sanitizeUrl)("title", product_r3.name);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", product_r3.item.name, " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", product_r3.item.description.substring(0, 30), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" Price: ", product_r3.item.price, " ");
    \u0275\u0275advance(5);
    \u0275\u0275property("selected", product_r3.quantity == 1);
    \u0275\u0275advance(2);
    \u0275\u0275property("selected", product_r3.quantity == 2);
    \u0275\u0275advance(2);
    \u0275\u0275property("selected", product_r3.quantity == 3);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate1(" Total Price ", product_r3.item.price * product_r3.quantity, " ");
  }
}
function CartComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275repeaterCreate(0, CartComponent_Conditional_3_For_1_Template, 35, 15, "div", 3, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275element(2, "hr");
    \u0275\u0275elementStart(3, "div", 4)(4, "div", 5)(5, "h1", 6);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(7, "div", 7)(8, "button", 8);
    \u0275\u0275listener("click", function CartComponent_Conditional_3_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.backClicked());
    });
    \u0275\u0275element(9, "i", 9);
    \u0275\u0275text(10, " Back ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275repeater(ctx_r3.cartItems);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" Grand Total ", ctx_r3.grandTotal, " ");
  }
}
var _CartComponent = class _CartComponent {
  constructor(cart, _location) {
    this.cart = cart;
    this._location = _location;
    this.grandTotal = 0;
  }
  ngOnChange() {
  }
  ngOnInit() {
    this.cart.getCart().subscribe((result) => {
      console.log("result", result);
      this.cartItems = result;
    });
    this.cart.grandTotal.subscribe((total) => {
      console.log("total hai", total);
      this.grandTotal = total;
    });
  }
  updateQuantity(event, item) {
    this.cart.updateCart(item, event.target.value);
  }
  removeFromCart(product) {
    this.cart.removeFromCart(product);
  }
  backClicked() {
    this._location.back();
  }
};
_CartComponent.\u0275fac = function CartComponent_Factory(t) {
  return new (t || _CartComponent)(\u0275\u0275directiveInject(CartService), \u0275\u0275directiveInject(Location));
};
_CartComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CartComponent, selectors: [["app-cart"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 4, vars: 1, consts: [[1, "m-4", "mt-0"], [1, "w-100", "text-center", "ml-2", 2, "margin-left", "22%", "overflow", "hidden"], ["src", "../../../../assets/images/emptyCart.png", "title", "  Your cart is empty", 2, "width", "150px"], [1, "card", "m-4"], [1, "row"], [1, "col-md-11", "text-right"], [1, "text-right", "float-right", 2, "float", "right !important"], [1, "cart-footer", "card-footer", "m-4", "mt-3"], [1, "btn", "btn-outline-secondary", 2, "width", "80px", 3, "click"], [1, "fa", "fa-chevron-left"], [1, "card-body"], [1, "col-md-12"], [1, "col-md-4"], [1, "center-block", "px-2", "img-responsive", 3, "src", "title"], [1, "col-md-8"], [2, "font-weight", "500"], [1, "col-md-11"], ["name", "quantity", "aria-label", ".form-select-sm example", 1, "form-select", "form-select-xs", 3, "change"], ["value", "1", 3, "selected"], ["value", "2", 3, "selected"], ["value", "3", 3, "selected"], [1, "col-md-12", "justify-content-end", "d-flex"], [1, "btn", "btn-outline-secondary-outline", "mt-2", "justify-end", 2, "width", "120px", 3, "click"], [1, "fa-solid", "fa-trash"], [1, "col-md-11", "text-right", 2, "text-align", "right !important", "font-weight", "bold"]], template: function CartComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h1", 0);
    \u0275\u0275text(1, "Your Cart");
    \u0275\u0275elementEnd();
    \u0275\u0275template(2, CartComponent_Conditional_2_Template, 6, 0, "div", 1)(3, CartComponent_Conditional_3_Template, 11, 1);
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275conditional(2, ctx.cartItems.length == 0 ? 2 : 3);
  }
} });
var CartComponent = _CartComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CartComponent, { className: "CartComponent", filePath: "src\\app\\common\\post-login\\cart\\cart.component.ts", lineNumber: 14 });
})();

export {
  CartComponent
};
//# sourceMappingURL=chunk-G7JG5JMG.js.map
