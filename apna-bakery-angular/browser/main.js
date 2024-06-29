import {
  HeaderComponent
} from "./chunk-62LL474A.js";
import "./chunk-ROL4XU6N.js";
import {
  DomRendererFactory2,
  NavigationEnd,
  Router,
  RouterModule,
  RouterOutlet,
  bootstrapApplication,
  provideRouter
} from "./chunk-K3U6QAHR.js";
import {
  CartComponent
} from "./chunk-G7JG5JMG.js";
import {
  CartService
} from "./chunk-V3CVWBEX.js";
import {
  ANIMATION_MODULE_TYPE,
  ChangeDetectionScheduler,
  CommonModule,
  DOCUMENT,
  Injectable,
  NgClass,
  NgZone,
  RendererFactory2,
  RuntimeError,
  inject,
  makeEnvironmentProviders,
  performanceMarkFeature,
  setClassMetadata,
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
  ɵɵinvalidFactory,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction2,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate
} from "./chunk-DLG6G4H4.js";

// src/app/app.routes.ts
var routes = [
  {
    path: "",
    loadComponent: () => import("./chunk-P2BRLNFZ.js").then((x) => x.HomeComponent)
  },
  {
    path: "search",
    loadComponent: () => import("./chunk-IOVRSTIG.js").then((x) => x.SearchpageComponent)
  },
  {
    path: "product-details/:id",
    loadComponent: () => import("./chunk-XKLFYDOZ.js").then((x) => x.ProductdetailsComponent)
  },
  {
    path: "cart",
    loadComponent: () => import("./chunk-QKHVGH3H.js").then((x) => x.CartComponent)
  }
];

// node_modules/@angular/platform-browser/fesm2022/animations/async.mjs
var ANIMATION_PREFIX = "@";
var _AsyncAnimationRendererFactory = class _AsyncAnimationRendererFactory {
  /**
   *
   * @param moduleImpl allows to provide a mock implmentation (or will load the animation module)
   */
  constructor(doc, delegate, zone, animationType, moduleImpl) {
    this.doc = doc;
    this.delegate = delegate;
    this.zone = zone;
    this.animationType = animationType;
    this.moduleImpl = moduleImpl;
    this._rendererFactoryPromise = null;
    this.scheduler = inject(ChangeDetectionScheduler, {
      optional: true
    });
  }
  /** @nodoc */
  ngOnDestroy() {
    this._engine?.flush();
  }
  /**
   * @internal
   */
  loadImpl() {
    const moduleImpl = this.moduleImpl ?? import("./chunk-3UQVZUWY.js");
    return moduleImpl.catch((e) => {
      throw new RuntimeError(5300, (typeof ngDevMode === "undefined" || ngDevMode) && "Async loading for animations package was enabled, but loading failed. Angular falls back to using regular rendering. No animations will be displayed and their styles won't be applied.");
    }).then(({
      \u0275createEngine,
      \u0275AnimationRendererFactory
    }) => {
      this._engine = \u0275createEngine(this.animationType, this.doc, this.scheduler);
      const rendererFactory = new \u0275AnimationRendererFactory(this.delegate, this._engine, this.zone);
      this.delegate = rendererFactory;
      return rendererFactory;
    });
  }
  /**
   * This method is delegating the renderer creation to the factories.
   * It uses default factory while the animation factory isn't loaded
   * and will rely on the animation factory once it is loaded.
   *
   * Calling this method will trigger as side effect the loading of the animation module
   * if the renderered component uses animations.
   */
  createRenderer(hostElement, rendererType) {
    const renderer = this.delegate.createRenderer(hostElement, rendererType);
    if (renderer.\u0275type === 0) {
      return renderer;
    }
    if (typeof renderer.throwOnSyntheticProps === "boolean") {
      renderer.throwOnSyntheticProps = false;
    }
    const dynamicRenderer = new DynamicDelegationRenderer(renderer);
    if (rendererType?.data?.["animation"] && !this._rendererFactoryPromise) {
      this._rendererFactoryPromise = this.loadImpl();
    }
    this._rendererFactoryPromise?.then((animationRendererFactory) => {
      const animationRenderer = animationRendererFactory.createRenderer(hostElement, rendererType);
      dynamicRenderer.use(animationRenderer);
    }).catch((e) => {
      dynamicRenderer.use(renderer);
    });
    return dynamicRenderer;
  }
  begin() {
    this.delegate.begin?.();
  }
  end() {
    this.delegate.end?.();
  }
  whenRenderingDone() {
    return this.delegate.whenRenderingDone?.() ?? Promise.resolve();
  }
};
_AsyncAnimationRendererFactory.\u0275fac = function AsyncAnimationRendererFactory_Factory(t) {
  \u0275\u0275invalidFactory();
};
_AsyncAnimationRendererFactory.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: _AsyncAnimationRendererFactory,
  factory: _AsyncAnimationRendererFactory.\u0275fac
});
var AsyncAnimationRendererFactory = _AsyncAnimationRendererFactory;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AsyncAnimationRendererFactory, [{
    type: Injectable
  }], () => [{
    type: Document
  }, {
    type: RendererFactory2
  }, {
    type: NgZone
  }, {
    type: void 0
  }, {
    type: Promise
  }], null);
})();
var DynamicDelegationRenderer = class {
  constructor(delegate) {
    this.delegate = delegate;
    this.replay = [];
    this.\u0275type = 1;
  }
  use(impl) {
    this.delegate = impl;
    if (this.replay !== null) {
      for (const fn of this.replay) {
        fn(impl);
      }
      this.replay = null;
    }
  }
  get data() {
    return this.delegate.data;
  }
  destroy() {
    this.replay = null;
    this.delegate.destroy();
  }
  createElement(name, namespace) {
    return this.delegate.createElement(name, namespace);
  }
  createComment(value) {
    return this.delegate.createComment(value);
  }
  createText(value) {
    return this.delegate.createText(value);
  }
  get destroyNode() {
    return this.delegate.destroyNode;
  }
  appendChild(parent, newChild) {
    this.delegate.appendChild(parent, newChild);
  }
  insertBefore(parent, newChild, refChild, isMove) {
    this.delegate.insertBefore(parent, newChild, refChild, isMove);
  }
  removeChild(parent, oldChild, isHostElement) {
    this.delegate.removeChild(parent, oldChild, isHostElement);
  }
  selectRootElement(selectorOrNode, preserveContent) {
    return this.delegate.selectRootElement(selectorOrNode, preserveContent);
  }
  parentNode(node) {
    return this.delegate.parentNode(node);
  }
  nextSibling(node) {
    return this.delegate.nextSibling(node);
  }
  setAttribute(el, name, value, namespace) {
    this.delegate.setAttribute(el, name, value, namespace);
  }
  removeAttribute(el, name, namespace) {
    this.delegate.removeAttribute(el, name, namespace);
  }
  addClass(el, name) {
    this.delegate.addClass(el, name);
  }
  removeClass(el, name) {
    this.delegate.removeClass(el, name);
  }
  setStyle(el, style, value, flags) {
    this.delegate.setStyle(el, style, value, flags);
  }
  removeStyle(el, style, flags) {
    this.delegate.removeStyle(el, style, flags);
  }
  setProperty(el, name, value) {
    if (this.shouldReplay(name)) {
      this.replay.push((renderer) => renderer.setProperty(el, name, value));
    }
    this.delegate.setProperty(el, name, value);
  }
  setValue(node, value) {
    this.delegate.setValue(node, value);
  }
  listen(target, eventName, callback) {
    if (this.shouldReplay(eventName)) {
      this.replay.push((renderer) => renderer.listen(target, eventName, callback));
    }
    return this.delegate.listen(target, eventName, callback);
  }
  shouldReplay(propOrEventName) {
    return this.replay !== null && propOrEventName.startsWith(ANIMATION_PREFIX);
  }
};
function provideAnimationsAsync(type = "animations") {
  performanceMarkFeature("NgAsyncAnimations");
  return makeEnvironmentProviders([{
    provide: RendererFactory2,
    useFactory: (doc, renderer, zone) => {
      return new AsyncAnimationRendererFactory(doc, renderer, zone, type);
    },
    deps: [DOCUMENT, DomRendererFactory2, NgZone]
  }, {
    provide: ANIMATION_MODULE_TYPE,
    useValue: type === "noop" ? "NoopAnimations" : "BrowserAnimations"
  }]);
}

// src/app/app.config.ts
var appConfig = {
  providers: [provideRouter(routes), provideAnimationsAsync()]
};

// src/app/app.component.ts
var _c0 = (a0, a1) => ({ "d-flex": a0, " d-none": a1 });
function AppComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span");
  }
}
function AppComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 0)(1, "a", 1);
    \u0275\u0275listener("click", function AppComponent_Conditional_3_Template_a_click_1_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.showHideCart());
    });
    \u0275\u0275element(2, "i", 2);
    \u0275\u0275elementEnd();
    \u0275\u0275element(3, "br")(4, "app-cart");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 3)(6, "a", 4);
    \u0275\u0275listener("click", function AppComponent_Conditional_3_Template_a_click_6_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.showHideCart());
    });
    \u0275\u0275element(7, "i", 5);
    \u0275\u0275elementEnd();
    \u0275\u0275element(8, "app-cart");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(2, _c0, ctx_r1.show === true, ctx_r1.show !== true));
    \u0275\u0275advance(5);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(5, _c0, ctx_r1.show !== true, ctx_r1.show === true));
  }
}
var _AppComponent = class _AppComponent {
  constructor(cartSer, router) {
    this.cartSer = cartSer;
    this.router = router;
    this.urlcarthaiKya = false;
    this.show = false;
    this.title = "apana-bekry";
  }
  ngOnInit() {
    this.cartSer.showSideCart.subscribe((result) => {
      this.show = result;
    });
    this.router.events.subscribe((val) => {
      if (val instanceof NavigationEnd) {
        if (val.url.includes("/cart")) {
          this.urlcarthaiKya = true;
        } else {
          this.urlcarthaiKya = false;
        }
      }
    });
  }
  showHideCart() {
    this.show = !this.show;
    this.cartSer.showhideSideCartFunct(this.show);
  }
};
_AppComponent.\u0275fac = function AppComponent_Factory(t) {
  return new (t || _AppComponent)(\u0275\u0275directiveInject(CartService), \u0275\u0275directiveInject(Router));
};
_AppComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AppComponent, selectors: [["app-root"]], standalone: true, features: [\u0275\u0275ProvidersFeature([CartService]), \u0275\u0275StandaloneFeature], decls: 4, vars: 1, consts: [["id", "cart-area", 1, "absolute", "cart-area-show", 2, "position", "fixed", "background-color", "white", "z-index", "999999999999", "right", "0", "height", "85vh", "top", "71px", "border", "2px solid brown", "width", "25%", "flex-wrap", "wrap", "border-radius", "5px", "vertical-align", "top", "align-content", "flex-start", "overflow-y", "scroll", 3, "ngClass"], [1, "float-right", "cart-close", "p-2", 2, "height", "30px", "cursor", "pointer", 3, "click"], [1, "fa-solid", "fa-xmark"], ["id", "cart-area-show", 1, "absolute", "cart-area-show", 2, "position", "fixed", "background-color", "white", "z-index", "999999999999", "cursor", "pointer", "right", "0", "height", "40px", "top", "71px", "border", "2px solid brown", "border-radius", "5px", "width", "40px", "overflow", "hidden", 3, "ngClass"], [1, "float-right", "cart-close", "p-2", 3, "click"], [1, "bi", "bi-cart"]], template: function AppComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-header")(1, "router-outlet");
    \u0275\u0275template(2, AppComponent_Conditional_2_Template, 1, 0, "span")(3, AppComponent_Conditional_3_Template, 9, 8);
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275conditional(2, ctx.urlcarthaiKya ? 2 : 3);
  }
}, dependencies: [
  RouterOutlet,
  HeaderComponent,
  RouterModule,
  CartComponent,
  CommonModule,
  NgClass
], styles: ['[_nghost-%COMP%] {\n    --bright-blue: oklch(51.01% 0.274 263.83);\n    --electric-violet: oklch(53.18% 0.28 296.97);\n    --french-violet: oklch(47.66% 0.246 305.88);\n    --vivid-pink: oklch(69.02% 0.277 332.77);\n    --hot-red: oklch(61.42% 0.238 15.34);\n    --orange-red: oklch(63.32% 0.24 31.68);\n\n    --gray-900: oklch(19.37% 0.006 300.98);\n    --gray-700: oklch(36.98% 0.014 302.71);\n    --gray-400: oklch(70.9% 0.015 304.04);\n\n    --red-to-pink-to-purple-vertical-gradient: linear-gradient(\n      180deg,\n      var(--orange-red) 0%,\n      var(--vivid-pink) 50%,\n      var(--electric-violet) 100%\n    );\n\n    --red-to-pink-to-purple-horizontal-gradient: linear-gradient(\n      90deg,\n      var(--orange-red) 0%,\n      var(--vivid-pink) 50%,\n      var(--electric-violet) 100%\n    );\n\n    --pill-accent: var(--bright-blue);\n\n    font-family: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,\n      Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",\n      "Segoe UI Symbol";\n    box-sizing: border-box;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n  }\n\n  h1[_ngcontent-%COMP%] {\n    font-size: 3.125rem;\n    color: var(--gray-900);\n    font-weight: 500;\n    line-height: 100%;\n    letter-spacing: -0.125rem;\n    margin: 0;\n    font-family: "Inter Tight", -apple-system, BlinkMacSystemFont, "Segoe UI",\n      Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji",\n      "Segoe UI Emoji", "Segoe UI Symbol";\n  }\n\n  p[_ngcontent-%COMP%] {\n    margin: 0;\n    color: var(--gray-700);\n  }\n\n  main[_ngcontent-%COMP%] {\n    width: 100%;\n    min-height: 100%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    padding: 1rem;\n    box-sizing: inherit;\n    position: relative;\n  }\n\n  .angular-logo[_ngcontent-%COMP%] {\n    max-width: 9.2rem;\n  }\n\n  .content[_ngcontent-%COMP%] {\n    display: flex;\n    justify-content: space-around;\n    width: 100%;\n    max-width: 700px;\n    margin-bottom: 3rem;\n  }\n\n  .content[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    margin-top: 1.75rem;\n  }\n\n  .content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    margin-top: 1.5rem;\n  }\n\n  .divider[_ngcontent-%COMP%] {\n    width: 1px;\n    background: var(--red-to-pink-to-purple-vertical-gradient);\n    margin-inline: 0.5rem;\n  }\n\n  .pill-group[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    align-items: start;\n    flex-wrap: wrap;\n    gap: 1.25rem;\n  }\n\n  .pill[_ngcontent-%COMP%] {\n    display: flex;\n    align-items: center;\n    --pill-accent: var(--bright-blue);\n    background: color-mix(in srgb, var(--pill-accent) 5%, transparent);\n    color: var(--pill-accent);\n    padding-inline: 0.75rem;\n    padding-block: 0.375rem;\n    border-radius: 2.75rem;\n    border: 0;\n    transition: background 0.3s ease;\n    font-family: var(--inter-font);\n    font-size: 0.875rem;\n    font-style: normal;\n    font-weight: 500;\n    line-height: 1.4rem;\n    letter-spacing: -0.00875rem;\n    text-decoration: none;\n  }\n\n  .pill[_ngcontent-%COMP%]:hover {\n    background: color-mix(in srgb, var(--pill-accent) 15%, transparent);\n  }\n\n  .pill-group[_ngcontent-%COMP%]   .pill[_ngcontent-%COMP%]:nth-child(6n + 1) {\n    --pill-accent: var(--bright-blue);\n  }\n  .pill-group[_ngcontent-%COMP%]   .pill[_ngcontent-%COMP%]:nth-child(6n + 2) {\n    --pill-accent: var(--french-violet);\n  }\n  .pill-group[_ngcontent-%COMP%]   .pill[_ngcontent-%COMP%]:nth-child(6n + 3), .pill-group[_ngcontent-%COMP%]   .pill[_ngcontent-%COMP%]:nth-child(6n + 4), .pill-group[_ngcontent-%COMP%]   .pill[_ngcontent-%COMP%]:nth-child(6n + 5) {\n    --pill-accent: var(--hot-red);\n  }\n\n  .pill-group[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n    margin-inline-start: 0.25rem;\n  }\n\n  .social-links[_ngcontent-%COMP%] {\n    display: flex;\n    align-items: center;\n    gap: 0.73rem;\n    margin-top: 1.5rem;\n  }\n\n  .social-links[_ngcontent-%COMP%]   path[_ngcontent-%COMP%] {\n    transition: fill 0.3s ease;\n    fill: var(--gray-400);\n  }\n\n  .social-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover   svg[_ngcontent-%COMP%]   path[_ngcontent-%COMP%] {\n    fill: var(--gray-900);\n  }\n\n  @media screen and (max-width: 650px) {\n    .content[_ngcontent-%COMP%] {\n      flex-direction: column;\n      width: max-content;\n    }\n\n    .divider[_ngcontent-%COMP%] {\n      height: 1px;\n      width: 100%;\n      background: var(--red-to-pink-to-purple-horizontal-gradient);\n      margin-block: 1.5rem;\n    }\n  }'] });
var AppComponent = _AppComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AppComponent, { className: "AppComponent", filePath: "src\\app\\app.component.ts", lineNumber: 26 });
})();

// src/main.ts
bootstrapApplication(AppComponent, appConfig).catch((err) => console.error(err));
/*! Bundled license information:

@angular/platform-browser/fesm2022/animations/async.mjs:
  (**
   * @license Angular v17.3.11
   * (c) 2010-2024 Google LLC. https://angular.io/
   * License: MIT
   *)
*/
//# sourceMappingURL=main.js.map
