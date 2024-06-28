import{a as Y}from"./chunk-LIEWF7E4.js";import"./chunk-IS2RAUVC.js";import{a as U,b as V,c as B,e as K,f as L,h as W,i as X}from"./chunk-2HNTEACI.js";import{a as Z}from"./chunk-LPGN2ETV.js";import{a as d}from"./chunk-TEJTRKEH.js";import{Bb as y,Cb as p,La as O,Qa as g,Qb as T,Ra as u,Rb as j,Sa as k,Sb as v,Ua as S,Wa as A,Ya as I,Za as R,aa as b,ca as w,gb as F,ia as x,ib as f,ic as z,na as M,nb as E,pc as D,qa as P,rb as C,sb as s,sc as H,tb as l,wa as h,wb as N,xa as m}from"./chunk-DMZUDF35.js";var q=[{path:"",loadComponent:()=>import("./chunk-NN4TEYKG.js").then(r=>r.HomeComponent)},{path:"search",loadComponent:()=>import("./chunk-DJMRAFJ2.js").then(r=>r.SearchpageComponent)},{path:"product-details/:id",loadComponent:()=>import("./chunk-DDMXAZ5V.js").then(r=>r.ProductdetailsComponent)},{path:"cart",loadComponent:()=>import("./chunk-O7BLNSSF.js").then(r=>r.CartComponent)}];var te="@",ie=(()=>{let e=class e{constructor(t,i,o,a,c){this.doc=t,this.delegate=i,this.zone=o,this.animationType=a,this.moduleImpl=c,this._rendererFactoryPromise=null,this.scheduler=x(S,{optional:!0})}ngOnDestroy(){this._engine?.flush()}loadImpl(){return(this.moduleImpl??import("./chunk-GERGWQ54.js")).catch(i=>{throw new b(5300,!1)}).then(({\u0275createEngine:i,\u0275AnimationRendererFactory:o})=>{this._engine=i(this.animationType,this.doc,this.scheduler);let a=new o(this.delegate,this._engine,this.zone);return this.delegate=a,a})}createRenderer(t,i){let o=this.delegate.createRenderer(t,i);if(o.\u0275type===0)return o;typeof o.throwOnSyntheticProps=="boolean"&&(o.throwOnSyntheticProps=!1);let a=new _(o);return i?.data?.animation&&!this._rendererFactoryPromise&&(this._rendererFactoryPromise=this.loadImpl()),this._rendererFactoryPromise?.then(c=>{let ee=c.createRenderer(t,i);a.use(ee)}).catch(c=>{a.use(o)}),a}begin(){this.delegate.begin?.()}end(){this.delegate.end?.()}whenRenderingDone(){return this.delegate.whenRenderingDone?.()??Promise.resolve()}};e.\u0275fac=function(i){k()},e.\u0275prov=w({token:e,factory:e.\u0275fac});let r=e;return r})(),_=class{constructor(e){this.delegate=e,this.replay=[],this.\u0275type=1}use(e){if(this.delegate=e,this.replay!==null){for(let n of this.replay)n(e);this.replay=null}}get data(){return this.delegate.data}destroy(){this.replay=null,this.delegate.destroy()}createElement(e,n){return this.delegate.createElement(e,n)}createComment(e){return this.delegate.createComment(e)}createText(e){return this.delegate.createText(e)}get destroyNode(){return this.delegate.destroyNode}appendChild(e,n){this.delegate.appendChild(e,n)}insertBefore(e,n,t,i){this.delegate.insertBefore(e,n,t,i)}removeChild(e,n,t){this.delegate.removeChild(e,n,t)}selectRootElement(e,n){return this.delegate.selectRootElement(e,n)}parentNode(e){return this.delegate.parentNode(e)}nextSibling(e){return this.delegate.nextSibling(e)}setAttribute(e,n,t,i){this.delegate.setAttribute(e,n,t,i)}removeAttribute(e,n,t){this.delegate.removeAttribute(e,n,t)}addClass(e,n){this.delegate.addClass(e,n)}removeClass(e,n){this.delegate.removeClass(e,n)}setStyle(e,n,t,i){this.delegate.setStyle(e,n,t,i)}removeStyle(e,n,t){this.delegate.removeStyle(e,n,t)}setProperty(e,n,t){this.shouldReplay(n)&&this.replay.push(i=>i.setProperty(e,n,t)),this.delegate.setProperty(e,n,t)}setValue(e,n){this.delegate.setValue(e,n)}listen(e,n,t){return this.shouldReplay(n)&&this.replay.push(i=>i.listen(e,n,t)),this.delegate.listen(e,n,t)}shouldReplay(e){return this.replay!==null&&e.startsWith(te)}};function G(r="animations"){return I("NgAsyncAnimations"),P([{provide:A,useFactory:(e,n,t)=>new ie(e,n,t,r),deps:[z,U,R]},{provide:O,useValue:r==="noop"?"NoopAnimations":"BrowserAnimations"}])}var J={providers:[W(q),G()]};var Q=(r,e)=>({"d-flex":r," d-none":e});function re(r,e){r&1&&l(0,"span")}function oe(r,e){if(r&1){let n=N();C(0,"div",0)(1,"a",1),y("click",function(){h(n);let i=p();return m(i.showHideCart())}),l(2,"i",2),s(),l(3,"br")(4,"app-cart"),s(),C(5,"div",3)(6,"a",4),y("click",function(){h(n);let i=p();return m(i.showHideCart())}),l(7,"i",5),s(),l(8,"app-cart"),s()}if(r&2){let n=p();f("ngClass",v(2,Q,n.show===!0,n.show!==!0)),g(5),f("ngClass",v(5,Q,n.show!==!0,n.show===!0))}}var $=(()=>{let e=class e{constructor(t,i){this.cartSer=t,this.router=i,this.urlcarthaiKya=!1,this.show=!1,this.title="apana-bekry"}ngOnInit(){this.cartSer.showSideCart.subscribe(t=>{this.show=t}),this.router.events.subscribe(t=>{t instanceof B&&(t.url.includes("/cart")?this.urlcarthaiKya=!0:this.urlcarthaiKya=!1)})}showHideCart(){this.show=!this.show,this.cartSer.showhideSideCartFunct(this.show)}};e.\u0275fac=function(i){return new(i||e)(u(d),u(L))},e.\u0275cmp=M({type:e,selectors:[["app-root"]],standalone:!0,features:[T([d]),j],decls:4,vars:1,consts:[["id","cart-area",1,"absolute","cart-area-show",2,"position","fixed","background-color","white","z-index","999999999999","right","0","height","85vh","top","71px","border","2px solid brown","width","25%","flex-wrap","wrap","border-radius","5px","vertical-align","top","align-content","flex-start","overflow-y","scroll",3,"ngClass"],[1,"float-right","cart-close","p-2",2,"height","30px","cursor","pointer",3,"click"],[1,"fa-solid","fa-xmark"],["id","cart-area-show",1,"absolute","cart-area-show",2,"position","fixed","background-color","white","z-index","999999999999","cursor","pointer","right","0","height","40px","top","71px","border","2px solid brown","border-radius","5px","width","40px","overflow","hidden",3,"ngClass"],[1,"float-right","cart-close","p-2",3,"click"],[1,"bi","bi-cart"]],template:function(i,o){i&1&&(l(0,"app-header")(1,"router-outlet"),F(2,re,1,0,"span")(3,oe,9,8)),i&2&&(g(2),E(2,o.urlcarthaiKya?2:3))},dependencies:[K,Y,X,Z,H,D],styles:[`[_nghost-%COMP%] {
    --bright-blue: oklch(51.01% 0.274 263.83);
    --electric-violet: oklch(53.18% 0.28 296.97);
    --french-violet: oklch(47.66% 0.246 305.88);
    --vivid-pink: oklch(69.02% 0.277 332.77);
    --hot-red: oklch(61.42% 0.238 15.34);
    --orange-red: oklch(63.32% 0.24 31.68);

    --gray-900: oklch(19.37% 0.006 300.98);
    --gray-700: oklch(36.98% 0.014 302.71);
    --gray-400: oklch(70.9% 0.015 304.04);

    --red-to-pink-to-purple-vertical-gradient: linear-gradient(
      180deg,
      var(--orange-red) 0%,
      var(--vivid-pink) 50%,
      var(--electric-violet) 100%
    );

    --red-to-pink-to-purple-horizontal-gradient: linear-gradient(
      90deg,
      var(--orange-red) 0%,
      var(--vivid-pink) 50%,
      var(--electric-violet) 100%
    );

    --pill-accent: var(--bright-blue);

    font-family: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
      Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
      "Segoe UI Symbol";
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  h1[_ngcontent-%COMP%] {
    font-size: 3.125rem;
    color: var(--gray-900);
    font-weight: 500;
    line-height: 100%;
    letter-spacing: -0.125rem;
    margin: 0;
    font-family: "Inter Tight", -apple-system, BlinkMacSystemFont, "Segoe UI",
      Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji",
      "Segoe UI Emoji", "Segoe UI Symbol";
  }

  p[_ngcontent-%COMP%] {
    margin: 0;
    color: var(--gray-700);
  }

  main[_ngcontent-%COMP%] {
    width: 100%;
    min-height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem;
    box-sizing: inherit;
    position: relative;
  }

  .angular-logo[_ngcontent-%COMP%] {
    max-width: 9.2rem;
  }

  .content[_ngcontent-%COMP%] {
    display: flex;
    justify-content: space-around;
    width: 100%;
    max-width: 700px;
    margin-bottom: 3rem;
  }

  .content[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {
    margin-top: 1.75rem;
  }

  .content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {
    margin-top: 1.5rem;
  }

  .divider[_ngcontent-%COMP%] {
    width: 1px;
    background: var(--red-to-pink-to-purple-vertical-gradient);
    margin-inline: 0.5rem;
  }

  .pill-group[_ngcontent-%COMP%] {
    display: flex;
    flex-direction: column;
    align-items: start;
    flex-wrap: wrap;
    gap: 1.25rem;
  }

  .pill[_ngcontent-%COMP%] {
    display: flex;
    align-items: center;
    --pill-accent: var(--bright-blue);
    background: color-mix(in srgb, var(--pill-accent) 5%, transparent);
    color: var(--pill-accent);
    padding-inline: 0.75rem;
    padding-block: 0.375rem;
    border-radius: 2.75rem;
    border: 0;
    transition: background 0.3s ease;
    font-family: var(--inter-font);
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 500;
    line-height: 1.4rem;
    letter-spacing: -0.00875rem;
    text-decoration: none;
  }

  .pill[_ngcontent-%COMP%]:hover {
    background: color-mix(in srgb, var(--pill-accent) 15%, transparent);
  }

  .pill-group[_ngcontent-%COMP%]   .pill[_ngcontent-%COMP%]:nth-child(6n + 1) {
    --pill-accent: var(--bright-blue);
  }
  .pill-group[_ngcontent-%COMP%]   .pill[_ngcontent-%COMP%]:nth-child(6n + 2) {
    --pill-accent: var(--french-violet);
  }
  .pill-group[_ngcontent-%COMP%]   .pill[_ngcontent-%COMP%]:nth-child(6n + 3), .pill-group[_ngcontent-%COMP%]   .pill[_ngcontent-%COMP%]:nth-child(6n + 4), .pill-group[_ngcontent-%COMP%]   .pill[_ngcontent-%COMP%]:nth-child(6n + 5) {
    --pill-accent: var(--hot-red);
  }

  .pill-group[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {
    margin-inline-start: 0.25rem;
  }

  .social-links[_ngcontent-%COMP%] {
    display: flex;
    align-items: center;
    gap: 0.73rem;
    margin-top: 1.5rem;
  }

  .social-links[_ngcontent-%COMP%]   path[_ngcontent-%COMP%] {
    transition: fill 0.3s ease;
    fill: var(--gray-400);
  }

  .social-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover   svg[_ngcontent-%COMP%]   path[_ngcontent-%COMP%] {
    fill: var(--gray-900);
  }

  @media screen and (max-width: 650px) {
    .content[_ngcontent-%COMP%] {
      flex-direction: column;
      width: max-content;
    }

    .divider[_ngcontent-%COMP%] {
      height: 1px;
      width: 100%;
      background: var(--red-to-pink-to-purple-horizontal-gradient);
      margin-block: 1.5rem;
    }
  }`]});let r=e;return r})();V($,J).catch(r=>console.error(r));
