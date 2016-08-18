webpackJsonp([0],{0:function(t,n,e){"use strict";var o=e(1),r=e(111),a=e(328),i=e(349),p=e(410);o.enableProdMode(),r.bootstrap(i.AppComponent,[a.HTTP_PROVIDERS,p.APP_ROUTER_PROVIDERS])["catch"](function(t){return console.error(t)})},349:function(t,n,e){"use strict";var o=e(1),r=e(350),a=e(402);e(404);var i=function(){function t(t){this.api=t,this.url="https://github.com/preboot/angular2-webpack"}return t=__decorate([o.Component({selector:"my-app",providers:[a.ApiService],directives:r.ROUTER_DIRECTIVES.slice(),template:e(408),styles:[e(409)]}),__metadata("design:paramtypes",[a.ApiService])],t)}();n.AppComponent=i},402:function(t,n,e){"use strict";function o(t){for(var e in t)n.hasOwnProperty(e)||(n[e]=t[e])}o(e(403))},403:function(t,n,e){"use strict";var o=e(1),r=function(){function t(){this.title="Angular 2"}return t=__decorate([o.Injectable(),__metadata("design:paramtypes",[])],t)}();n.ApiService=r},404:function(t,n){},408:function(t,n){t.exports='<header>\r\n  <nav>\r\n    <a [routerLink]="[\'\']">Home</a>\r\n    <a [routerLink]="[\'sample\']">Sample</a>\r\n    <a [routerLink]="[\'about\']">About</a>\r\n  </nav>\r\n</header>\r\n<main>\r\n  <h1>Hello from {{api.title}}!</h1>\r\n\r\n  <!-- Images (and assets) are parsed and loaded from within the public directory -->\r\n  <img src="/img/angular.png">\r\n\r\n  <router-outlet></router-outlet>\r\n</main>\r\n<footer>\r\n  <a [href]="url">Webpack Angular 2 Starter</a>\r\n</footer>\r\n'},409:function(t,n){t.exports=":host{display:block}header{background-color:#fff;padding:16px;position:fixed;top:0;left:0;width:100%;box-shadow:2px 2px 6px rgba(0,0,0,0.5)}main{padding:1em;font-family:Arial, Helvetica, sans-serif;text-align:center;margin-top:50px;display:block}footer{text-align:center;font-size:0.8em}\n"},410:function(t,n,e){"use strict";var o=e(350),r=e(411),a=e(415),i=e(419);n.routes=[{path:"",component:r.HomeComponent},{path:"about",component:a.AboutComponent},{path:"sample",component:i.SampleComponent}],n.APP_ROUTER_PROVIDERS=[o.provideRouter(n.routes)]},411:function(t,n,e){"use strict";function o(t){for(var e in t)n.hasOwnProperty(e)||(n[e]=t[e])}o(e(412))},412:function(t,n,e){"use strict";var o=e(1),r=function(){function t(){}return t.prototype.ngOnInit=function(){console.log("Hello Home")},t=__decorate([o.Component({selector:"my-home",template:e(413),styles:[e(414)]}),__metadata("design:paramtypes",[])],t)}();n.HomeComponent=r},413:function(t,n){t.exports="<p>\r\n  Home Works!\r\n</p>\r\n"},414:function(t,n){t.exports="*{color:#FFEF00}\n"},415:function(t,n,e){"use strict";function o(t){for(var e in t)n.hasOwnProperty(e)||(n[e]=t[e])}o(e(416))},416:function(t,n,e){"use strict";var o=e(1),r=function(){function t(){}return t.prototype.ngOnInit=function(){console.log("Hello About")},t=__decorate([o.Component({selector:"my-about",template:e(417),styles:[e(418)]}),__metadata("design:paramtypes",[])],t)}();n.AboutComponent=r},417:function(t,n){t.exports="<p>\r\n  About Works!\r\n</p>\r\n"},418:function(t,n){t.exports="*{color:#f87c08}\n"},419:function(t,n,e){"use strict";function o(t){for(var e in t)n.hasOwnProperty(e)||(n[e]=t[e])}o(e(420))},420:function(t,n,e){"use strict";var o=e(1),r=function(){function t(){this.message="Sample message"}return t.prototype.ngOnInit=function(){console.log("Hello Sample: "+this.message)},t=__decorate([o.Component({selector:"my-sample",template:e(421),styles:[e(422)]}),__metadata("design:paramtypes",[])],t)}();n.SampleComponent=r},421:function(t,n){t.exports="<p>\r\n  Sample Works!\r\n</p>\r\n"},422:418});
//# sourceMappingURL=app.86020aeb24b3a9f5b2d0.js.map