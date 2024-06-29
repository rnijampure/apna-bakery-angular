import {
  MatButton,
  MatButtonModule,
  MatCard,
  MatCardActions,
  MatCardAvatar,
  MatCardContent,
  MatCardHeader,
  MatCardImage,
  MatCardModule,
  MatCardSubtitle,
  MatCardTitle,
  NgbCarousel,
  NgbCarouselModule,
  NgbSlide,
  NgbSlideEventSource,
  SearchBarComponent,
  imagesCupcakes,
  imagesDoughnut
} from "./chunk-ROL4XU6N.js";
import {
  ActivatedRoute,
  FormsModule,
  NavigationEnd,
  Router,
  RouterLink,
  RouterModule
} from "./chunk-K3U6QAHR.js";
import {
  CartService
} from "./chunk-V3CVWBEX.js";
import {
  CommonModule,
  EventEmitter,
  JsonPipe,
  Location,
  LocationStrategy,
  NgClass,
  PathLocationStrategy,
  of,
  ɵsetClassDebugInfo,
  ɵɵProvidersFeature,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵinject,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction2,
  ɵɵqueryRefresh,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵviewQuery
} from "./chunk-DLG6G4H4.js";

// src/app/prelogin/carousel/carousel.component.ts
var _c0 = ["carousel"];
function CarouselComponent_Conditional_0_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4);
    \u0275\u0275element(1, "img", 5);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("src", ctx_r1.images[0], \u0275\u0275sanitizeUrl);
  }
}
function CarouselComponent_Conditional_0_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4);
    \u0275\u0275element(1, "img", 6);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("src", ctx_r1.images[1], \u0275\u0275sanitizeUrl);
  }
}
function CarouselComponent_Conditional_0_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4);
    \u0275\u0275element(1, "img", 7);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("src", ctx_r1.images[2], \u0275\u0275sanitizeUrl);
  }
}
function CarouselComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ngb-carousel", 2, 0);
    \u0275\u0275listener("slide", function CarouselComponent_Conditional_0_Template_ngb_carousel_slide_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onSlide($event));
    });
    \u0275\u0275template(2, CarouselComponent_Conditional_0_ng_template_2_Template, 2, 1, "ng-template", 3)(3, CarouselComponent_Conditional_0_ng_template_3_Template, 2, 1, "ng-template", 3)(4, CarouselComponent_Conditional_0_ng_template_4_Template, 2, 1, "ng-template", 3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("interval", 3e3)("pauseOnHover", ctx_r1.pauseOnHover)("pauseOnFocus", ctx_r1.pauseOnFocus);
  }
}
var _CarouselComponent = class _CarouselComponent {
  constructor() {
    this.images = [
      "./assets/images/1.png",
      "./assets/images/2.png",
      "./assets/images/3.png"
    ];
    this.paused = false;
    this.unpauseOnArrow = false;
    this.pauseOnIndicator = false;
    this.pauseOnHover = true;
    this.pauseOnFocus = true;
    this.images1 = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
  }
  togglePaused() {
    if (this.paused) {
      this.carousel.cycle();
    } else {
      this.carousel.pause();
    }
    this.paused = !this.paused;
  }
  onSlide(slideEvent) {
    if (this.unpauseOnArrow && slideEvent.paused && (slideEvent.source === NgbSlideEventSource.ARROW_LEFT || slideEvent.source === NgbSlideEventSource.ARROW_RIGHT)) {
      this.togglePaused();
    }
    if (this.pauseOnIndicator && !slideEvent.paused && slideEvent.source === NgbSlideEventSource.INDICATOR) {
      this.togglePaused();
    }
  }
};
_CarouselComponent.\u0275fac = function CarouselComponent_Factory(t) {
  return new (t || _CarouselComponent)();
};
_CarouselComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CarouselComponent, selectors: [["app-carousel"]], viewQuery: function CarouselComponent_Query(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275viewQuery(_c0, 7);
  }
  if (rf & 2) {
    let _t;
    \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.carousel = _t.first);
  }
}, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 1, vars: 1, consts: [["carousel", ""], [3, "interval", "pauseOnHover", "pauseOnFocus"], [3, "slide", "interval", "pauseOnHover", "pauseOnFocus"], ["ngbSlide", ""], [1, "picsum-img-wrapper"], ["alt", "Random first slide", 3, "src"], ["alt", "Random second slide", 3, "src"], ["alt", "Random third slide", 3, "src"]], template: function CarouselComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, CarouselComponent_Conditional_0_Template, 5, 3, "ngb-carousel", 1);
  }
  if (rf & 2) {
    \u0275\u0275conditional(0, ctx.images1 ? 0 : -1);
  }
}, dependencies: [NgbCarouselModule, NgbCarousel, NgbSlide, FormsModule], styles: ["\n\nimg[_ngcontent-%COMP%] {\n  vertical-align: middle;\n  width: -webkit-fill-available;\n}\n.carousel.slide[_ngcontent-%COMP%], .carousel-inner[_ngcontent-%COMP%], .carousel-item[_ngcontent-%COMP%], .picsum-img-wrapper[_ngcontent-%COMP%] {\n  max-height: 500px !important;\n}\n/*# sourceMappingURL=carousel.component.css.map */"] });
var CarouselComponent = _CarouselComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CarouselComponent, { className: "CarouselComponent", filePath: "src\\app\\prelogin\\carousel\\carousel.component.ts", lineNumber: 16 });
})();

// src/app/prelogin/home/homemiddlesection/homemiddlesection.component.ts
var _c02 = ["carousel"];
var _c1 = (a0, a1) => ({ small_col_size: a0, large_col_size: a1 });
function HomemiddlesectionComponent_For_7_ng_template_0_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 6)(1, "mat-card", 7)(2, "mat-card-header");
    \u0275\u0275element(3, "div", 8);
    \u0275\u0275elementStart(4, "mat-card-title");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "mat-card-subtitle");
    \u0275\u0275text(7, "Novelity Cup Cake");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(8, "img", 9);
    \u0275\u0275elementStart(9, "mat-card-content")(10, "p", 10);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "mat-card-actions")(13, "button", 11);
    \u0275\u0275listener("click", function HomemiddlesectionComponent_For_7_ng_template_0_For_2_Template_button_click_13_listener() {
      const j_r2 = \u0275\u0275restoreView(_r1).$index;
      const i_r3 = \u0275\u0275nextContext(2).$index;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.productDetails(ctx_r3.images[i_r3][j_r2]));
    });
    \u0275\u0275text(14, " VIEW DETAILS ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "button", 12);
    \u0275\u0275listener("click", function HomemiddlesectionComponent_For_7_ng_template_0_For_2_Template_button_click_15_listener() {
      const j_r2 = \u0275\u0275restoreView(_r1).$index;
      const i_r3 = \u0275\u0275nextContext(2).$index;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.addProductToCart(ctx_r3.images[i_r3][j_r2]));
    });
    \u0275\u0275text(16, " ADD TO CART ");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const j_r2 = ctx.$index;
    const i_r3 = \u0275\u0275nextContext(2).$index;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(4, _c1, ctx_r3.size === "small", ctx_r3.size === "large"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r3.images[i_r3][j_r2].name);
    \u0275\u0275advance(3);
    \u0275\u0275property("src", ctx_r3.images[i_r3][j_r2].src, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r3.images[i_r3][j_r2].description);
  }
}
function HomemiddlesectionComponent_For_7_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5);
    \u0275\u0275repeaterCreate(1, HomemiddlesectionComponent_For_7_ng_template_0_For_2_Template, 17, 7, "div", 6, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const img_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275repeater(img_r5);
  }
}
function HomemiddlesectionComponent_For_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, HomemiddlesectionComponent_For_7_ng_template_0_Template, 3, 0, "ng-template", 4);
  }
}
var _HomemiddlesectionComponent = class _HomemiddlesectionComponent {
  constructor(router, cart) {
    this.router = router;
    this.cart = cart;
    this.title = "";
    this.size = "";
    this.paused = true;
    this.unpauseOnArrow = false;
    this.pauseOnIndicator = false;
    this.pauseOnHover = true;
    this.pauseOnFocus = true;
    this.cartValue = {
      item: {},
      quantity: 0,
      date: (/* @__PURE__ */ new Date()).toDateString(),
      grandTotal: 0,
      totalPrice: 0
    };
  }
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
  productDetails(item) {
    this.router.navigate([`product-details/${item.id}`], {
      state: { item, state: void 0 }
    });
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
_HomemiddlesectionComponent.\u0275fac = function HomemiddlesectionComponent_Factory(t) {
  return new (t || _HomemiddlesectionComponent)(\u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(CartService));
};
_HomemiddlesectionComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HomemiddlesectionComponent, selectors: [["app-homemiddlesection"]], viewQuery: function HomemiddlesectionComponent_Query(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275viewQuery(_c02, 7);
  }
  if (rf & 2) {
    let _t;
    \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.carousel = _t.first);
  }
}, inputs: { images: "images", title: "title", size: "size" }, standalone: true, features: [\u0275\u0275ProvidersFeature([JsonPipe]), \u0275\u0275StandaloneFeature], decls: 8, vars: 2, consts: [["carousel", ""], [1, "position-relative", "topic", "mt-5"], [1, ""], ["id", "carousel-middle-home", "data-interval", "false", 3, "wrap"], ["ngbSlide", ""], [1, "row", "gx-5", "d-flex", "justify-content-between"], [1, "col-3", "flex-col"], ["appearance", "outlined", 1, "example-card", "cursor-pointer", 3, "ngClass"], ["mat-card-avatar", "", 1, "example-header-image"], ["mat-card-image", "", "alt", "Photo of a Shiba Inu", 3, "src"], [1, "pt-3"], ["mat-button", "", 3, "click"], ["mat-button", "", 1, "btn", "btn-primary-outline", "d-inline-flex", "flex-row", 2, "width", "auto", 3, "click"]], template: function HomemiddlesectionComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1)(1, "p", 2);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275element(3, "hr");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "ngb-carousel", 3, 0);
    \u0275\u0275repeaterCreate(6, HomemiddlesectionComponent_For_7_Template, 1, 0, null, 4, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx.title);
    \u0275\u0275advance(2);
    \u0275\u0275property("wrap", true);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx.images);
  }
}, dependencies: [
  NgbCarouselModule,
  NgbCarousel,
  NgbSlide,
  FormsModule,
  MatButtonModule,
  MatButton,
  MatCardModule,
  MatCard,
  MatCardActions,
  MatCardAvatar,
  MatCardContent,
  MatCardHeader,
  MatCardImage,
  MatCardSubtitle,
  MatCardTitle,
  CommonModule,
  NgClass
], styles: ['\n\ndiv.topic[_ngcontent-%COMP%] {\n  padding: 20px;\n}\ndiv.topic[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  position: absolute;\n  margin: auto;\n  float: none;\n  left: 40%;\n  top: 27px;\n  font-family:\n    "Roboto",\n    "Arial Narrow",\n    Arial,\n    sans-serif;\n  font-style: italic;\n  padding: 5px 20px;\n  font-size: 20px;\n  z-index: 999;\n  background: white !important;\n}\ndiv.topic[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%] {\n  z-index: -1;\n  width: 80%;\n  margin: 20px auto;\n  padding: 10px 0;\n  background-color: white;\n}\n/*# sourceMappingURL=homemiddlesection.component.css.map */'] });
var HomemiddlesectionComponent = _HomemiddlesectionComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HomemiddlesectionComponent, { className: "HomemiddlesectionComponent", filePath: "src\\app\\prelogin\\home\\homemiddlesection\\homemiddlesection.component.ts", lineNumber: 31 });
})();

// src/app/common/whereami.service.ts
var _WhereamiService = class _WhereamiService {
  constructor(router, location, route) {
    this.router = router;
    this.location = location;
    this.route = route;
    this.haiKya = false;
    this._location = location;
  }
  getCurrentLocation() {
    return this.location.path();
  }
  islocationThis(url) {
    let myloc = of(this.location.path().includes(url));
    return myloc;
  }
};
_WhereamiService.\u0275fac = function WhereamiService_Factory(t) {
  return new (t || _WhereamiService)(\u0275\u0275inject(Router), \u0275\u0275inject(Location), \u0275\u0275inject(ActivatedRoute));
};
_WhereamiService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _WhereamiService, factory: _WhereamiService.\u0275fac, providedIn: "root" });
var WhereamiService = _WhereamiService;

// src/app/common/header/header.component.ts
function HeaderComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span");
  }
}
function HeaderComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-search-bar");
  }
}
var _HeaderComponent = class _HeaderComponent {
  constructor(router, location, route) {
    this.router = router;
    this.location = location;
    this.route = route;
    this.haiKya = false;
    this.showCart = new EventEmitter();
    this._location = location;
  }
  ngOnInit() {
    this.router.events.subscribe((val) => {
      if (val instanceof NavigationEnd) {
        if (val.url.includes("/search")) {
          this.haiKya = true;
        } else {
          this.haiKya = false;
        }
      }
    });
  }
};
_HeaderComponent.\u0275fac = function HeaderComponent_Factory(t) {
  return new (t || _HeaderComponent)(\u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(WhereamiService), \u0275\u0275directiveInject(ActivatedRoute));
};
_HeaderComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HeaderComponent, selectors: [["app-header"]], outputs: { showCart: "showCart" }, standalone: true, features: [\u0275\u0275ProvidersFeature([
  Location,
  { provide: LocationStrategy, useClass: PathLocationStrategy }
]), \u0275\u0275StandaloneFeature], decls: 26, vars: 2, consts: [[1, "d-flex", "flex-row", "flex-wrap"], [1, "px-3", "py-2", "text-bg-dark", "border-bottom", "d-flex", "w-100"], [1, "w-100"], [1, "d-flex", "align-items-center", "justify-content-center", "justify-content-lg-start"], ["href", "/", 1, "d-flex", "align-items-center", "my-2", "my-lg-0", "me-lg-auto", "text-white", "text-decoration-none"], ["src", "../../../assets/images/LOGO.png", 1, "logo"], [1, "container", "d-flex", "flex-wrap", "justify-content-end"], [1, "nav", "col-12", "col-lg-auto", "my-2", "justify-content-center", "my-md-0", "text-small"], ["href", "#", 1, "nav-link", "text-secondary"], [1, "bi", "bi-house", 2, "color", "white"], [1, "nav-link", "text-white", 3, "routerLink"], [1, "bi", "bi-cart"], ["href", "#", 1, "nav-link", "text-white"], [1, "bi", "bi-cake2-fill", "text-white"], [1, "bi", "bi-file-person"]], template: function HeaderComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "header", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "a", 4);
    \u0275\u0275element(5, "img", 5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 6);
    \u0275\u0275template(7, HeaderComponent_Conditional_7_Template, 1, 0, "span")(8, HeaderComponent_Conditional_8_Template, 1, 0);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "ul", 7)(10, "li")(11, "a", 8);
    \u0275\u0275element(12, "i", 9);
    \u0275\u0275text(13, " Home ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "li")(15, "a", 10);
    \u0275\u0275element(16, "i", 11);
    \u0275\u0275text(17, " Cart ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "li")(19, "a", 12);
    \u0275\u0275element(20, "i", 13);
    \u0275\u0275text(21, " Products ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "li")(23, "a", 12);
    \u0275\u0275element(24, "i", 14);
    \u0275\u0275text(25, " Profile ");
    \u0275\u0275elementEnd()()()()()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(7);
    \u0275\u0275conditional(7, ctx.haiKya ? 7 : 8);
    \u0275\u0275advance(8);
    \u0275\u0275property("routerLink", "/cart");
  }
}, dependencies: [SearchBarComponent, RouterModule, RouterLink], styles: ["\n\napp-header[_ngcontent-%COMP%], header[_ngcontent-%COMP%] {\n  display: flex;\n  width: 100%;\n}\n.text-bg-dark[_ngcontent-%COMP%] {\n  background-color: #75372a;\n}\ni[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\nimg.logo[_ngcontent-%COMP%] {\n  max-width: 150px;\n  max-height: auto;\n}\n/*# sourceMappingURL=header.component.css.map */"] });
var HeaderComponent = _HeaderComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HeaderComponent, { className: "HeaderComponent", filePath: "src\\app\\common\\header\\header.component.ts", lineNumber: 26 });
})();

// src/app/prelogin/home/home.component.ts
var _HomeComponent = class _HomeComponent {
  constructor() {
    this.imagesCupcakes = imagesCupcakes;
    this.imagesDoughnut = imagesDoughnut;
  }
};
_HomeComponent.\u0275fac = function HomeComponent_Factory(t) {
  return new (t || _HomeComponent)();
};
_HomeComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HomeComponent, selectors: [["app-home"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 4, vars: 2, consts: [["size", "large", "title", "Trending Now - King of Fruits Collections", 3, "images"], ["title", "donuts and more", "size", "small", 3, "images"]], template: function HomeComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-carousel")(1, "app-homemiddlesection", 0)(2, "br")(3, "app-homemiddlesection", 1);
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("images", ctx.imagesCupcakes);
    \u0275\u0275advance(2);
    \u0275\u0275property("images", ctx.imagesDoughnut);
  }
}, dependencies: [
  CarouselComponent,
  MatCardModule,
  MatButtonModule,
  HomemiddlesectionComponent
], changeDetection: 0 });
var HomeComponent = _HomeComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HomeComponent, { className: "HomeComponent", filePath: "src\\app\\prelogin\\home\\home.component.ts", lineNumber: 23 });
})();

export {
  HeaderComponent,
  HomeComponent
};
//# sourceMappingURL=chunk-62LL474A.js.map
