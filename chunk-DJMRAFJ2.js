import{e as V,f as F,g as j,h as R,i as O,j as A,k as B,l as N,m as $,o as z,p as q,q as H,r as J}from"./chunk-IS2RAUVC.js";import{d as P,f as k}from"./chunk-2HNTEACI.js";import{a as L}from"./chunk-TEJTRKEH.js";import{Bb as u,Cb as h,Kb as l,Lb as f,Mb as b,Na as y,Qa as c,Ra as m,Rb as M,Sb as T,ib as d,na as I,ob as C,pb as S,pc as E,qb as v,rb as a,sb as n,sc as D,tb as p,wa as _,wb as w,xa as x}from"./chunk-DMZUDF35.js";var U=(o,r)=>({"bg-primary":o," bg-secondary":r});function W(o,r){if(o&1&&(a(0,"li",12)(1,"span"),l(2),n()()),o&2){let s=r.$implicit,e=h(2);d("ngClass",T(2,U,s===e.state,s!==e.state)),c(2),f(s)}}function G(o,r){if(o&1){let s=w();a(0,"div",5)(1,"mat-card",6)(2,"mat-card-header",7)(3,"mat-card-title",7),l(4),n(),a(5,"mat-card-subtitle"),l(6,"Novelity Cup Cake "),n()(),p(7,"img",8),a(8,"mat-card-content")(9,"p",9),l(10),n()(),a(11,"mat-card-actions",10)(12,"ul",11),S(13,W,3,5,"li",12,C),n(),p(15,"br"),a(16,"div")(17,"button",13),u("click",function(){let t=_(s).$implicit,i=h();return x(i.productDetails(t))}),l(18," VIEW DETAILS "),n(),a(19,"button",14),u("click",function(){let t=_(s).$implicit,i=h();return x(i.addProductToCart(t))}),l(20," ADD TO CART "),n()()()()()}if(o&2){let s=r.$implicit;c(4),f(s.name),c(3),d("src",s.src,y),c(3),f(s.description),c(3),v(s.category)}}var st=(()=>{let r=class r{constructor(e,t,i){this.activatedRoute=e,this.router=t,this.cart=i,this.filteredItem=[],this.cartValue={item:{},quantity:0,date:new Date().toDateString(),grandTotal:0,totalPrice:0},this.allItems=[...q,...H]}ngOnInit(){this.activatedRoute.queryParams.subscribe(e=>{this.state=e.name,this.filterList(this.state)})}filterList(e){this.filteredItem=[];for(let t=0;t<this.allItems.length;t++)for(let i=0;i<this.allItems[t].length;i++)if(this.allItems[t][i].category.includes(this.state)){this.allItems[t][i].category.unshift(this.state);let g=this.allItems[t][i].category.lastIndexOf(this.state);g>-1&&this.allItems[t][i].category.splice(g,1),this.filteredItem.push(this.allItems[t][i])}}updateSearch(e){this.state=e,this.filterList(this.state)}productDetails(e){this.state&&this.router.navigate([`product-details/${e.id}`],{state:{item:e,state:this.state}})}addProductToCart(e){this.cartValue={item:e,quantity:1,date:new Date().toDateString(),totalPrice:0,grandTotal:0},this.cart.addToCart(this.cartValue),this.cart.showhideSideCartFunct(!0)}};r.\u0275fac=function(t){return new(t||r)(m(P),m(k),m(L))},r.\u0275cmp=I({type:r,selectors:[["app-searchpage"]],standalone:!0,features:[M],decls:12,vars:2,consts:[[1,"d-flex","w-100"],["id","search-page",1,"d-flex","flex-wrap","justify-content-center","p-3"],[1,"italic"],[1,"mt-3","p-3",2,"width","50%",3,"newItemEvent","val"],[1,"row","gx-5","d-flex","justify-content-left","w-100","py-5"],[1,"col-3","flex-col"],["appearance","outlined",1,"example-card","cursor-pointer","my-5","small_col_size_search"],[1,"justify-content-center","text-center"],["mat-card-image","","alt","Photo of a Shiba Inu",1,"pt-2",3,"src"],[1,"pt-3"],[1,"flex-wrap"],[1,"d-flex","flex-row","flex-wrap","p-0"],[1,"badge","m-2","flex-col","p-2",2,"font-size","14px","border-radius","24px",3,"ngClass"],["mat-button","",1,"d-inline-flex","flex-row",3,"click"],["mat-button","",1,"btn","btn-primary-outline","d-inline-flex","flex-row",2,"width","auto",3,"click"]],template:function(t,i){t&1&&(a(0,"h1",0),l(1,"Search Results"),n(),a(2,"div",1),p(3,"br"),a(4,"p",0),l(5," Showing Results for :"),a(6,"span",2),l(7),n()(),a(8,"app-search-bar",3),u("newItemEvent",function(K){return i.updateSearch(K)}),n(),a(9,"div",4),S(10,G,21,3,"div",5,C),n()()),t&2&&(c(7),b(" ",i.state," "),c(),d("val",i.state),c(2),v(i.filteredItem))},dependencies:[J,z,j,B,O,N,$,A,R,F,V,D,E],styles:["#search-page[_ngcontent-%COMP%]{flex-grow:1}.small_col_size_search[_ngcontent-%COMP%]{max-height:560px;min-height:560px}.mdc-card__media[_ngcontent-%COMP%]{height:250px}"]});let o=r;return o})();export{st as SearchpageComponent};
