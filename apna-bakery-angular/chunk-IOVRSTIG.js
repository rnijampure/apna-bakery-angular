import {
  MatButton,
  MatButtonModule,
  MatCard,
  MatCardActions,
  MatCardContent,
  MatCardHeader,
  MatCardImage,
  MatCardModule,
  MatCardSubtitle,
  MatCardTitle,
  SearchBarComponent,
  imagesCupcakes,
  imagesDoughnut
} from "./chunk-ROL4XU6N.js";
import {
  ActivatedRoute,
  Router
} from "./chunk-K3U6QAHR.js";
import {
  CartService
} from "./chunk-V3CVWBEX.js";
import {
  CommonModule,
  NgClass,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction2,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-DLG6G4H4.js";

// src/app/common/searchpage/searchpage.component.ts
var _c0 = (a0, a1) => ({ "bg-primary": a0, " bg-secondary": a1 });
function SearchpageComponent_For_11_For_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 12)(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const cat_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(2, _c0, cat_r2 === ctx_r2.state, cat_r2 !== ctx_r2.state));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(cat_r2);
  }
}
function SearchpageComponent_For_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 5)(1, "mat-card", 6)(2, "mat-card-header", 7)(3, "mat-card-title", 7);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "mat-card-subtitle");
    \u0275\u0275text(6, "Novelity Cup Cake ");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(7, "img", 8);
    \u0275\u0275elementStart(8, "mat-card-content")(9, "p", 9);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "mat-card-actions", 10)(12, "ul", 11);
    \u0275\u0275repeaterCreate(13, SearchpageComponent_For_11_For_14_Template, 3, 5, "li", 12, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
    \u0275\u0275element(15, "br");
    \u0275\u0275elementStart(16, "div")(17, "button", 13);
    \u0275\u0275listener("click", function SearchpageComponent_For_11_Template_button_click_17_listener() {
      const img_r4 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.productDetails(img_r4));
    });
    \u0275\u0275text(18, " VIEW DETAILS ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "button", 14);
    \u0275\u0275listener("click", function SearchpageComponent_For_11_Template_button_click_19_listener() {
      const img_r4 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.addProductToCart(img_r4));
    });
    \u0275\u0275text(20, " ADD TO CART ");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const img_r4 = ctx.$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(img_r4.name);
    \u0275\u0275advance(3);
    \u0275\u0275property("src", img_r4.src, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(img_r4.description);
    \u0275\u0275advance(3);
    \u0275\u0275repeater(img_r4.category);
  }
}
var _SearchpageComponent = class _SearchpageComponent {
  constructor(activatedRoute, router, cart) {
    this.activatedRoute = activatedRoute;
    this.router = router;
    this.cart = cart;
    this.filteredItem = [];
    this.cartValue = {
      item: {},
      quantity: 0,
      date: (/* @__PURE__ */ new Date()).toDateString(),
      grandTotal: 0,
      totalPrice: 0
    };
    this.allItems = [...imagesCupcakes, ...imagesDoughnut];
  }
  ngOnInit() {
    this.activatedRoute.queryParams.subscribe((params) => {
      this.state = params["name"];
      this.filterList(this.state);
    });
  }
  filterList(searchStr) {
    this.filteredItem = [];
    for (let i = 0; i < this.allItems.length; i++) {
      for (let j = 0; j < this.allItems[i].length; j++) {
        if (this.allItems[i][j].category.includes(this.state)) {
          this.allItems[i][j].category.unshift(this.state);
          const index = this.allItems[i][j].category.lastIndexOf(this.state);
          if (index > -1) {
            this.allItems[i][j].category.splice(index, 1);
          }
          this.filteredItem.push(this.allItems[i][j]);
        }
      }
    }
  }
  updateSearch(newItem) {
    this.state = newItem;
    this.filterList(this.state);
  }
  productDetails(item) {
    if (this.state) {
      this.router.navigate([`product-details/${item.id}`], {
        state: { item, state: this.state }
      });
    }
  }
  addProductToCart(product) {
    this.cartValue = {
      item: product,
      quantity: Number(1),
      date: (/* @__PURE__ */ new Date()).toDateString(),
      totalPrice: Number(0),
      grandTotal: Number(0)
    };
    this.cart.addToCart(this.cartValue);
    this.cart.showhideSideCartFunct(true);
  }
};
_SearchpageComponent.\u0275fac = function SearchpageComponent_Factory(t) {
  return new (t || _SearchpageComponent)(\u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(CartService));
};
_SearchpageComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SearchpageComponent, selectors: [["app-searchpage"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 12, vars: 2, consts: [[1, "d-flex", "w-100"], ["id", "search-page", 1, "d-flex", "flex-wrap", "justify-content-center", "p-3"], [1, "italic"], [1, "mt-3", "p-3", 2, "width", "50%", 3, "newItemEvent", "val"], [1, "row", "gx-5", "d-flex", "justify-content-left", "w-100", "py-5"], [1, "col-3", "flex-col"], ["appearance", "outlined", 1, "example-card", "cursor-pointer", "my-5", "small_col_size_search"], [1, "justify-content-center", "text-center"], ["mat-card-image", "", "alt", "Photo of a Shiba Inu", 1, "pt-2", 3, "src"], [1, "pt-3"], [1, "flex-wrap"], [1, "d-flex", "flex-row", "flex-wrap", "p-0"], [1, "badge", "m-2", "flex-col", "p-2", 2, "font-size", "14px", "border-radius", "24px", 3, "ngClass"], ["mat-button", "", 1, "d-inline-flex", "flex-row", 3, "click"], ["mat-button", "", 1, "btn", "btn-primary-outline", "d-inline-flex", "flex-row", 2, "width", "auto", 3, "click"]], template: function SearchpageComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h1", 0);
    \u0275\u0275text(1, "Search Results");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "div", 1);
    \u0275\u0275element(3, "br");
    \u0275\u0275elementStart(4, "p", 0);
    \u0275\u0275text(5, " Showing Results for :");
    \u0275\u0275elementStart(6, "span", 2);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "app-search-bar", 3);
    \u0275\u0275listener("newItemEvent", function SearchpageComponent_Template_app_search_bar_newItemEvent_8_listener($event) {
      return ctx.updateSearch($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 4);
    \u0275\u0275repeaterCreate(10, SearchpageComponent_For_11_Template, 21, 3, "div", 5, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(" ", ctx.state, " ");
    \u0275\u0275advance();
    \u0275\u0275property("val", ctx.state);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx.filteredItem);
  }
}, dependencies: [
  SearchBarComponent,
  MatCardModule,
  MatCard,
  MatCardActions,
  MatCardContent,
  MatCardHeader,
  MatCardImage,
  MatCardSubtitle,
  MatCardTitle,
  MatButtonModule,
  MatButton,
  CommonModule,
  NgClass
], styles: ["\n\n#search-page[_ngcontent-%COMP%] {\n  flex-grow: 1;\n}\n.small_col_size_search[_ngcontent-%COMP%] {\n  max-height: 560px;\n  min-height: 560px;\n}\n.mdc-card__media[_ngcontent-%COMP%] {\n  height: 250px;\n}\n/*# sourceMappingURL=searchpage.component.css.map */"] });
var SearchpageComponent = _SearchpageComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SearchpageComponent, { className: "SearchpageComponent", filePath: "src\\app\\common\\searchpage\\searchpage.component.ts", lineNumber: 29 });
})();
export {
  SearchpageComponent
};
//# sourceMappingURL=chunk-IOVRSTIG.js.map
