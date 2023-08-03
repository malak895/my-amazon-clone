(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/COMPONENTS/banner/banner.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/COMPONENTS/banner/banner.component.ts ***!
  \*******************************************************/
/*! exports provided: BannerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BannerComponent", function() { return BannerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class BannerComponent {
    constructor() { }
    ngOnInit() {
    }
}
BannerComponent.ɵfac = function BannerComponent_Factory(t) { return new (t || BannerComponent)(); };
BannerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BannerComponent, selectors: [["app-banner"]], decls: 1, vars: 0, consts: [["src", "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_45M_v2_1x._CB432458380_.jpg", "alt", "banner", 1, "banner"]], template: function BannerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 0);
    } }, styles: [".banner[_ngcontent-%COMP%]{\n    width: 100%;\n    -webkit-mask-image: linear-gradient(to bottom, rgba(0,0,0,1), rgba(0,0,0,0));\n            mask-image: linear-gradient(to bottom, rgba(0,0,0,1), rgba(0,0,0,0));\n    z-index: -1;\n    margin-bottom: -200px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQ09NUE9ORU5UUy9iYW5uZXIvYmFubmVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0lBQ1gsNEVBQW9FO1lBQXBFLG9FQUFvRTtJQUNwRSxXQUFXO0lBQ1gscUJBQXFCO0FBQ3pCIiwiZmlsZSI6InNyYy9hcHAvQ09NUE9ORU5UUy9iYW5uZXIvYmFubmVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmFubmVye1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hc2staW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sIHJnYmEoMCwwLDAsMSksIHJnYmEoMCwwLDAsMCkpO1xuICAgIHotaW5kZXg6IC0xO1xuICAgIG1hcmdpbi1ib3R0b206IC0yMDBweDtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BannerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-banner',
                templateUrl: './banner.component.html',
                styleUrls: ['./banner.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/COMPONENTS/checkout-products/checkout-products.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/COMPONENTS/checkout-products/checkout-products.component.ts ***!
  \*****************************************************************************/
/*! exports provided: CheckoutProductsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckoutProductsComponent", function() { return CheckoutProductsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_SERVICES_shopping_cart_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/SERVICES/shopping-cart.service */ "./src/app/SERVICES/shopping-cart.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");





function CheckoutProductsComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "In Stock");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "input", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "This is a gift");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Learn more");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CheckoutProductsComponent_div_3_Template_a_click_16_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const p_r1 = ctx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.removeItem(p_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Save for later");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Compare with similar items");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const p_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", p_r1.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", p_r1.title, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("$", p_r1.price, "");
} }
class CheckoutProductsComponent {
    constructor(shopping_cart_service) {
        this.shopping_cart_service = shopping_cart_service;
        this.deleteEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() {
        console.log('products ', this.checkout_products);
    }
    removeItem(p) {
        this.shopping_cart_service.removerItem(p);
        this.deleteEvent.emit(p);
    }
}
CheckoutProductsComponent.ɵfac = function CheckoutProductsComponent_Factory(t) { return new (t || CheckoutProductsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_SERVICES_shopping_cart_service__WEBPACK_IMPORTED_MODULE_1__["ShoppingCartService"])); };
CheckoutProductsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CheckoutProductsComponent, selectors: [["app-checkout-products"]], inputs: { checkout_products: "checkout_products" }, outputs: { deleteEvent: "deleteEvent" }, decls: 9, vars: 3, consts: [[1, "checkout_products"], [1, "price"], ["class", "checkout_product", 4, "ngFor", "ngForOf"], [1, "checkout_products_subtotal"], [1, "checkout_product"], ["alt", "", 1, "checkout_product_img", 3, "src"], [1, "checkout_product_info"], [1, "checkout_product_title"], ["src", "https://cdn2.hubspot.net/hubfs/4567260/0_KZ8hBw7pQZFFt2Mt.png", "alt", ""], [1, "checkout_product_in_stock"], [1, "checkout_product_gift"], ["type", "checkbox"], ["routerLink", "/", 1, "checkout_product_more"], [1, "checkout_options"], [1, "checkout_dropdown"], [3, "click"], ["href", "#"], [1, "checkout_products_price"]], template: function CheckoutProductsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Price");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CheckoutProductsComponent_div_3_Template, 26, 3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.checkout_products);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Subtotal (", ctx.shopping_cart_service.getCartLength(), " items): ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("$", ctx.shopping_cart_service.getTotal(), "");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"]], styles: [".price[_ngcontent-%COMP%]{\n    \n    text-align: right;\n}\n.checkout_product[_ngcontent-%COMP%]{\n    border-top: solid 1px rgb(219, 218, 218);\n    display: flex;\n    \n}\n.checkout_product_img[_ngcontent-%COMP%]{\n    object-fit: contain;\n    width: 190px;\n    max-height: 200px;\n}\n.checkout_product_info[_ngcontent-%COMP%]{\n    padding-top: 10px;\n    padding-left: 20px;\n    width: 100%;\n}\n.checkout_product_title[_ngcontent-%COMP%]{\n    color:#0066c0;\n    font-size: 17px !important;\n    font-weight: 700 !important;\n    line-height: 1.255 !important;\n}\n.checkout_product_info[_ngcontent-%COMP%]    > img[_ngcontent-%COMP%]{\n    height: 20px;\n    object-fit: contain;\n}\n.checkout_product_in_stock[_ngcontent-%COMP%]{\n    color:#067D62!important;\n    font-size: 12px!important;\n    line-height: 1.5!important;\n}\n.checkout_product_gift[_ngcontent-%COMP%]{\n    display: flex;\n    flex-direction: row;\n}\n.checkout_product_gift[_ngcontent-%COMP%]    > input[_ngcontent-%COMP%]{\n    margin-right: 5px;\n    margin-left: 5px;\n}\n.checkout_product_more[_ngcontent-%COMP%]{\n    text-decoration: none;\n    margin-left: 5px;\n    color:#0066c0;\n\n}\n.checkout_options[_ngcontent-%COMP%]{\n    display: flex;\n    \n}\n.checkout_options[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]{\n  text-decoration: none;\n  margin: 8px;\n  color: #0066c0;\n  height: 20px;\n  font-size: 12px !important;\n  padding-left: 8px;\n  border-left: solid lightgray 1px;\n  cursor: pointer;\n}\n.checkout_products_price[_ngcontent-%COMP%]{\n    \n    margin-top: 12px;\n    text-align: right;\n    font-size: 17px!important;\n    line-height: 1.255!important;\n}\n.checkout_products_subtotal[_ngcontent-%COMP%]{\n    margin-top: 20px;\n    border-top: solid 1px rgb(219, 218, 218);\n    width: 100%;\n    text-align: right;\n}\n.checkout_products_subtotal[_ngcontent-%COMP%]{\n    font-size: 17px!important;\n    line-height: 1.255!important;   \n}\nmat-form-field[_ngcontent-%COMP%]{\n    background-color: gray;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQ09NUE9ORU5UUy9jaGVja291dC1wcm9kdWN0cy9jaGVja291dC1wcm9kdWN0cy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksd0JBQXdCO0lBQ3hCLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksd0NBQXdDO0lBQ3hDLGFBQWE7O0FBRWpCO0FBQ0E7SUFDSSxtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixXQUFXO0FBQ2Y7QUFDQTtJQUNJLGFBQWE7SUFDYiwwQkFBMEI7SUFDMUIsMkJBQTJCO0lBQzNCLDZCQUE2QjtBQUNqQztBQUNBO0lBQ0ksWUFBWTtJQUNaLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksdUJBQXVCO0lBQ3ZCLHlCQUF5QjtJQUN6QiwwQkFBMEI7QUFDOUI7QUFDQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLGlCQUFpQjtJQUNqQixnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLHFCQUFxQjtJQUNyQixnQkFBZ0I7SUFDaEIsYUFBYTs7QUFFakI7QUFDQTtJQUNJLGFBQWE7O0FBRWpCO0FBQ0E7RUFDRSxxQkFBcUI7RUFDckIsV0FBVztFQUNYLGNBQWM7RUFDZCxZQUFZO0VBQ1osMEJBQTBCO0VBQzFCLGlCQUFpQjtFQUNqQixnQ0FBZ0M7RUFDaEMsZUFBZTtBQUNqQjtBQUVBO0lBQ0k7NkJBQ3lCO0lBQ3pCLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIseUJBQXlCO0lBQ3pCLDRCQUE0QjtBQUNoQztBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLHdDQUF3QztJQUN4QyxXQUFXO0lBQ1gsaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSx5QkFBeUI7SUFDekIsNEJBQTRCO0FBQ2hDO0FBRUE7SUFDSSxzQkFBc0I7QUFDMUIiLCJmaWxlIjoic3JjL2FwcC9DT01QT05FTlRTL2NoZWNrb3V0LXByb2R1Y3RzL2NoZWNrb3V0LXByb2R1Y3RzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucHJpY2V7XG4gICAgLyogYWxpZ24taXRlbXM6IHJpZ2h0OyAqL1xuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuLmNoZWNrb3V0X3Byb2R1Y3R7XG4gICAgYm9yZGVyLXRvcDogc29saWQgMXB4IHJnYigyMTksIDIxOCwgMjE4KTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIFxufVxuLmNoZWNrb3V0X3Byb2R1Y3RfaW1ne1xuICAgIG9iamVjdC1maXQ6IGNvbnRhaW47XG4gICAgd2lkdGg6IDE5MHB4O1xuICAgIG1heC1oZWlnaHQ6IDIwMHB4O1xufVxuLmNoZWNrb3V0X3Byb2R1Y3RfaW5mb3tcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gICAgd2lkdGg6IDEwMCU7XG59XG4uY2hlY2tvdXRfcHJvZHVjdF90aXRsZXtcbiAgICBjb2xvcjojMDA2NmMwO1xuICAgIGZvbnQtc2l6ZTogMTdweCAhaW1wb3J0YW50O1xuICAgIGZvbnQtd2VpZ2h0OiA3MDAgIWltcG9ydGFudDtcbiAgICBsaW5lLWhlaWdodDogMS4yNTUgIWltcG9ydGFudDtcbn1cbi5jaGVja291dF9wcm9kdWN0X2luZm8gPmltZ3tcbiAgICBoZWlnaHQ6IDIwcHg7XG4gICAgb2JqZWN0LWZpdDogY29udGFpbjtcbn1cbi5jaGVja291dF9wcm9kdWN0X2luX3N0b2Nre1xuICAgIGNvbG9yOiMwNjdENjIhaW1wb3J0YW50O1xuICAgIGZvbnQtc2l6ZTogMTJweCFpbXBvcnRhbnQ7XG4gICAgbGluZS1oZWlnaHQ6IDEuNSFpbXBvcnRhbnQ7XG59XG4uY2hlY2tvdXRfcHJvZHVjdF9naWZ0e1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbn1cbi5jaGVja291dF9wcm9kdWN0X2dpZnQgPmlucHV0e1xuICAgIG1hcmdpbi1yaWdodDogNXB4O1xuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XG59XG4uY2hlY2tvdXRfcHJvZHVjdF9tb3Jle1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBtYXJnaW4tbGVmdDogNXB4O1xuICAgIGNvbG9yOiMwMDY2YzA7XG5cbn1cbi5jaGVja291dF9vcHRpb25ze1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgXG59XG4uY2hlY2tvdXRfb3B0aW9ucyA+IGF7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgbWFyZ2luOiA4cHg7XG4gIGNvbG9yOiAjMDA2NmMwO1xuICBoZWlnaHQ6IDIwcHg7XG4gIGZvbnQtc2l6ZTogMTJweCAhaW1wb3J0YW50O1xuICBwYWRkaW5nLWxlZnQ6IDhweDtcbiAgYm9yZGVyLWxlZnQ6IHNvbGlkIGxpZ2h0Z3JheSAxcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmNoZWNrb3V0X3Byb2R1Y3RzX3ByaWNle1xuICAgIC8qIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgKi9cbiAgICBtYXJnaW4tdG9wOiAxMnB4O1xuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgIGZvbnQtc2l6ZTogMTdweCFpbXBvcnRhbnQ7XG4gICAgbGluZS1oZWlnaHQ6IDEuMjU1IWltcG9ydGFudDtcbn1cbi5jaGVja291dF9wcm9kdWN0c19zdWJ0b3RhbHtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgIGJvcmRlci10b3A6IHNvbGlkIDFweCByZ2IoMjE5LCAyMTgsIDIxOCk7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG4uY2hlY2tvdXRfcHJvZHVjdHNfc3VidG90YWx7XG4gICAgZm9udC1zaXplOiAxN3B4IWltcG9ydGFudDtcbiAgICBsaW5lLWhlaWdodDogMS4yNTUhaW1wb3J0YW50OyAgIFxufVxuXG5tYXQtZm9ybS1maWVsZHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5O1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CheckoutProductsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-checkout-products',
                templateUrl: './checkout-products.component.html',
                styleUrls: ['./checkout-products.component.css']
            }]
    }], function () { return [{ type: src_app_SERVICES_shopping_cart_service__WEBPACK_IMPORTED_MODULE_1__["ShoppingCartService"] }]; }, { checkout_products: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], deleteEvent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/COMPONENTS/checkout-subtotal/checkout-subtotal.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/COMPONENTS/checkout-subtotal/checkout-subtotal.component.ts ***!
  \*****************************************************************************/
/*! exports provided: CheckoutSubtotalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckoutSubtotalComponent", function() { return CheckoutSubtotalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_SERVICES_shopping_cart_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/SERVICES/shopping-cart.service */ "./src/app/SERVICES/shopping-cart.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");




function CheckoutSubtotalComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "input", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "This order contains a gift");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Proceed to checkout");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Subtotal: (", ctx_r0.shoppingCart.getCartLength(), " items) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("$", ctx_r0.shoppingCart.getTotal(), "");
} }
class CheckoutSubtotalComponent {
    constructor(shoppingCart) {
        this.shoppingCart = shoppingCart;
    }
    ngOnInit() {
    }
}
CheckoutSubtotalComponent.ɵfac = function CheckoutSubtotalComponent_Factory(t) { return new (t || CheckoutSubtotalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_SERVICES_shopping_cart_service__WEBPACK_IMPORTED_MODULE_1__["ShoppingCartService"])); };
CheckoutSubtotalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CheckoutSubtotalComponent, selectors: [["app-checkout-subtotal"]], decls: 1, vars: 1, consts: [["class", "subtotal", 4, "ngIf"], [1, "subtotal"], [1, "subtotal_gift"], ["type", "checkbox"]], template: function CheckoutSubtotalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, CheckoutSubtotalComponent_div_0_Template, 11, 2, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.shoppingCart.getCartLength() > 0);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]], styles: [".subtotal[_ngcontent-%COMP%]{\n    display: flex;\n    flex-direction: column;\n    \n    width: 300px;\n    height: 100px;\n    padding: 20px;\n    background-color: #f3f3f3;\n    border: 1px solid #dddddd;\n    border-radius: 3px;\n    margin: 20px;\n}\n.subtotal[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%]{\n    font-size: 20px!important;\n    line-height: 1.255!important;\n}\n.subtotal_gift[_ngcontent-%COMP%]{\n    display: flex;\n    flex-direction: row;\n    font-size: 11px !important;\n    \n}\n.subtotal_gift[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%]{\n    font-size: 11px !important;\n\n\n}\n.subtotal_gift[_ngcontent-%COMP%]    > input[_ngcontent-%COMP%]{\n    margin-right: 5px;\n    margin-left: 5px;\n  \n}\n.subtotal[_ngcontent-%COMP%]    > button[_ngcontent-%COMP%]{\n    background-color: #f0c14b;\n    border: 1px solid;\n    border-radius: 2px;\n    width: 100%;\n    height: 30px;\n    color: black;\n    border-color: #a88134 #9c7e31 #846a29;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQ09NUE9ORU5UUy9jaGVja291dC1zdWJ0b3RhbC9jaGVja291dC1zdWJ0b3RhbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixvQ0FBb0M7SUFDcEMsWUFBWTtJQUNaLGFBQWE7SUFDYixhQUFhO0lBQ2IseUJBQXlCO0lBQ3pCLHlCQUF5QjtJQUN6QixrQkFBa0I7SUFDbEIsWUFBWTtBQUNoQjtBQUNBO0lBQ0kseUJBQXlCO0lBQ3pCLDRCQUE0QjtBQUNoQztBQUNBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQiwwQkFBMEI7O0FBRTlCO0FBQ0E7SUFDSSwwQkFBMEI7OztBQUc5QjtBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGdCQUFnQjs7QUFFcEI7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxZQUFZO0lBQ1osWUFBWTtJQUNaLHFDQUFxQztBQUN6QyIsImZpbGUiOiJzcmMvYXBwL0NPTVBPTkVOVFMvY2hlY2tvdXQtc3VidG90YWwvY2hlY2tvdXQtc3VidG90YWwuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zdWJ0b3RhbHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgLyoganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuOyAqL1xuICAgIHdpZHRoOiAzMDBweDtcbiAgICBoZWlnaHQ6IDEwMHB4O1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YzZjNmMztcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZGRkZGRkO1xuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICBtYXJnaW46IDIwcHg7XG59XG4uc3VidG90YWwgPiBwe1xuICAgIGZvbnQtc2l6ZTogMjBweCFpbXBvcnRhbnQ7XG4gICAgbGluZS1oZWlnaHQ6IDEuMjU1IWltcG9ydGFudDtcbn1cbi5zdWJ0b3RhbF9naWZ0e1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBmb250LXNpemU6IDExcHggIWltcG9ydGFudDtcbiAgICBcbn1cbi5zdWJ0b3RhbF9naWZ0ID4gcHtcbiAgICBmb250LXNpemU6IDExcHggIWltcG9ydGFudDtcblxuXG59XG5cbi5zdWJ0b3RhbF9naWZ0ID4gaW5wdXR7XG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgXG59XG5cbi5zdWJ0b3RhbCA+IGJ1dHRvbntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBjMTRiO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkO1xuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDMwcHg7XG4gICAgY29sb3I6IGJsYWNrO1xuICAgIGJvcmRlci1jb2xvcjogI2E4ODEzNCAjOWM3ZTMxICM4NDZhMjk7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CheckoutSubtotalComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-checkout-subtotal',
                templateUrl: './checkout-subtotal.component.html',
                styleUrls: ['./checkout-subtotal.component.css']
            }]
    }], function () { return [{ type: src_app_SERVICES_shopping_cart_service__WEBPACK_IMPORTED_MODULE_1__["ShoppingCartService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/COMPONENTS/footer/footer.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/COMPONENTS/footer/footer.component.ts ***!
  \*******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 2, vars: 0, template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "footer works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0NPTVBPTkVOVFMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-footer',
                templateUrl: './footer.component.html',
                styleUrls: ['./footer.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/COMPONENTS/header/header.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/COMPONENTS/header/header.component.ts ***!
  \*******************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_SERVICES_shopping_cart_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/SERVICES/shopping-cart.service */ "./src/app/SERVICES/shopping-cart.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");





class HeaderComponent {
    constructor(shoppingCart) {
        this.shoppingCart = shoppingCart;
    }
    ngOnInit() {
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_SERVICES_shopping_cart_service__WEBPACK_IMPORTED_MODULE_1__["ShoppingCartService"])); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 34, vars: 1, consts: [[1, "header"], [1, "header_top"], [1, "header_menu"], ["routerLink", "/", 1, "header_menu_icon"], ["routerLink", "/", "src", "http://pngimg.com/uploads/amazon/amazon_PNG11.png", "alt", "", 1, "header_menu_logo"], [1, "header_menu_searchbar"], ["type", "text", 1, "header_menu_input"], [1, "header_menu_searchbar_icon"], ["routerLink", "/login", 1, "header_menu_signin"], [1, "header_menu_top_item"], [1, "header_menu_bottom_item"], ["routerLink", "/checkout", 1, "header_menu_cart"], [1, "header_cart_number"], [1, "header_bottom"], [1, "header_bottom_location_text"], [1, "header_left_line_one"], [1, "header_left_line_two"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nav", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "search");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Hello, Sign in");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Accounts & Lists");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Returns");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "& Orders");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "shopping_cart");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "nav", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Delivery to");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "Strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Canada");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.shoppingCart.getCartLength());
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIcon"]], styles: [".header[_ngcontent-%COMP%]{\n    \n  position: sticky;\n  z-index: 100;\n  top: 0;\n}\n.header_top[_ngcontent-%COMP%]{\n    height: 60px;\n    background-color: #0F1111;\n    font-size: 14px;\n    display:flex;\n    color:white;\n    padding-right:8px;\n    padding-bottom: 8px;\n    \n}\n.header_menu[_ngcontent-%COMP%] {\n    display: flex;\n    padding: 10px 8px 8px 8px;\n    width: 100%;\n \n\n}\n.header_menu[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]{\n    margin: 8px;\n}\n.header_menu_icon[_ngcontent-%COMP%]    > mat-icon[_ngcontent-%COMP%]{\n    font-size: 30px;\n    align-items: center;   \n}\n.header_menu_searchbar[_ngcontent-%COMP%]{\n    display: flex;\n    margin-top: 8px;\n    height: 40px;\n    justify-content: center;\n    flex: 1;\n}\n.header_menu_input[_ngcontent-%COMP%]{\n    height: 20px;\n    padding: 10px;\n    border: none;\n    width: 100%;\n}\n.header_menu_searchbar_icon[_ngcontent-%COMP%]{\n    background-color: #febd69;\n    height: 40px;\n    width: 40px;\n    color:black;\n    display: flex;\n    justify-content: space-around;\n    align-items: center;\n\n}\n.header_menu_logo[_ngcontent-%COMP%]{\n    object-fit: contain;\n    width: 100px;\n    margin: 12px 20px 0px 2px;\n}\n.header_menu_signin[_ngcontent-%COMP%]{\n    display: flex;\n    flex-direction: column;\n}\n.header_menu_top_item[_ngcontent-%COMP%]{\n    font-size: 10px;\n    color: lightgray;\n}\n.header_menu_bottom_item[_ngcontent-%COMP%]{\n    font-size: 13px;\n    font-weight: 800;\n\n}\n.header_menu_cart[_ngcontent-%COMP%]{\n    display: flex;\n    margin-top: 10px;\n    margin-left: 8px;\n    height: 50px;\n    justify-content: space-around;\n}\n.header_cart_number[_ngcontent-%COMP%]{\n    color: #febd69;\n    font-size: 25px;\n    font-weight: 800;\n}\n.header_bottom[_ngcontent-%COMP%]{\n    height: 49px;\n    background-image: none;\n    background-color: #232f3e;\n    \n    padding-left: 8px;\n    font-size: 12px;\n\n}\n.header_bottom_location_text[_ngcontent-%COMP%]{\n    color: white;\n    display: flex;\n    flex-direction: column;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQ09NUE9ORU5UUy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSwyQkFBMkI7RUFDN0IsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixNQUFNO0FBQ1I7QUFDQTtJQUNJLFlBQVk7SUFDWix5QkFBeUI7SUFDekIsZUFBZTtJQUNmLFlBQVk7SUFDWixXQUFXO0lBQ1gsaUJBQWlCO0lBQ2pCLG1CQUFtQjs7QUFFdkI7QUFDQTtJQUNJLGFBQWE7SUFDYix5QkFBeUI7SUFDekIsV0FBVzs7O0FBR2Y7QUFDQTtJQUNJLFdBQVc7QUFDZjtBQUNBO0lBQ0ksZUFBZTtJQUNmLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksYUFBYTtJQUNiLGVBQWU7SUFDZixZQUFZO0lBQ1osdUJBQXVCO0lBQ3ZCLE9BQU87QUFDWDtBQUNBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYixZQUFZO0lBQ1osV0FBVztBQUNmO0FBQ0E7SUFDSSx5QkFBeUI7SUFDekIsWUFBWTtJQUNaLFdBQVc7SUFDWCxXQUFXO0lBQ1gsYUFBYTtJQUNiLDZCQUE2QjtJQUM3QixtQkFBbUI7O0FBRXZCO0FBQ0E7SUFDSSxtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLHlCQUF5QjtBQUM3QjtBQUdBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtBQUMxQjtBQUNBO0lBQ0ksZUFBZTtJQUNmLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksZUFBZTtJQUNmLGdCQUFnQjs7QUFFcEI7QUFDQTtJQUNJLGFBQWE7SUFDYixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWiw2QkFBNkI7QUFDakM7QUFDQTtJQUNJLGNBQWM7SUFDZCxlQUFlO0lBQ2YsZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxZQUFZO0lBQ1osc0JBQXNCO0lBQ3RCLHlCQUF5QjtJQUN6QjswQkFDc0I7SUFDdEIsaUJBQWlCO0lBQ2pCLGVBQWU7O0FBRW5CO0FBQ0E7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLHNCQUFzQjtBQUMxQiIsImZpbGUiOiJzcmMvYXBwL0NPTVBPTkVOVFMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRlcntcbiAgICAvKiAvL3dlIGNhbiBkbyB0aGlzIGxhdGVyICovXG4gIHBvc2l0aW9uOiBzdGlja3k7XG4gIHotaW5kZXg6IDEwMDtcbiAgdG9wOiAwO1xufVxuLmhlYWRlcl90b3B7XG4gICAgaGVpZ2h0OiA2MHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwRjExMTE7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGRpc3BsYXk6ZmxleDtcbiAgICBjb2xvcjp3aGl0ZTtcbiAgICBwYWRkaW5nLXJpZ2h0OjhweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogOHB4O1xuICAgIFxufVxuLmhlYWRlcl9tZW51IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHBhZGRpbmc6IDEwcHggOHB4IDhweCA4cHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gXG5cbn1cbi5oZWFkZXJfbWVudSA+IGRpdntcbiAgICBtYXJnaW46IDhweDtcbn1cbi5oZWFkZXJfbWVudV9pY29uID4gbWF0LWljb257XG4gICAgZm9udC1zaXplOiAzMHB4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7ICAgXG59XG4uaGVhZGVyX21lbnVfc2VhcmNoYmFye1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgbWFyZ2luLXRvcDogOHB4O1xuICAgIGhlaWdodDogNDBweDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBmbGV4OiAxO1xufVxuLmhlYWRlcl9tZW51X2lucHV0e1xuICAgIGhlaWdodDogMjBweDtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICB3aWR0aDogMTAwJTtcbn1cbi5oZWFkZXJfbWVudV9zZWFyY2hiYXJfaWNvbntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmViZDY5O1xuICAgIGhlaWdodDogNDBweDtcbiAgICB3aWR0aDogNDBweDtcbiAgICBjb2xvcjpibGFjaztcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbn1cbi5oZWFkZXJfbWVudV9sb2dve1xuICAgIG9iamVjdC1maXQ6IGNvbnRhaW47XG4gICAgd2lkdGg6IDEwMHB4O1xuICAgIG1hcmdpbjogMTJweCAyMHB4IDBweCAycHg7XG59XG5cblxuLmhlYWRlcl9tZW51X3NpZ25pbntcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG4uaGVhZGVyX21lbnVfdG9wX2l0ZW17XG4gICAgZm9udC1zaXplOiAxMHB4O1xuICAgIGNvbG9yOiBsaWdodGdyYXk7XG59XG4uaGVhZGVyX21lbnVfYm90dG9tX2l0ZW17XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XG5cbn1cbi5oZWFkZXJfbWVudV9jYXJ0e1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICBtYXJnaW4tbGVmdDogOHB4O1xuICAgIGhlaWdodDogNTBweDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbn1cbi5oZWFkZXJfY2FydF9udW1iZXJ7XG4gICAgY29sb3I6ICNmZWJkNjk7XG4gICAgZm9udC1zaXplOiAyNXB4O1xuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XG59XG4uaGVhZGVyX2JvdHRvbXtcbiAgICBoZWlnaHQ6IDQ5cHg7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogbm9uZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjMyZjNlO1xuICAgIC8qIHBhZGRpbmctdG9wOiA1cHg7XG4gICAgcGFkZGluZy1ib3R0b206IDVweDsgKi9cbiAgICBwYWRkaW5nLWxlZnQ6IDhweDtcbiAgICBmb250LXNpemU6IDEycHg7XG5cbn1cbi5oZWFkZXJfYm90dG9tX2xvY2F0aW9uX3RleHR7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-header',
                templateUrl: './header.component.html',
                styleUrls: ['./header.component.css']
            }]
    }], function () { return [{ type: src_app_SERVICES_shopping_cart_service__WEBPACK_IMPORTED_MODULE_1__["ShoppingCartService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/COMPONENTS/products/products.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/COMPONENTS/products/products.component.ts ***!
  \***********************************************************/
/*! exports provided: ProductsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsComponent", function() { return ProductsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _SERVICES_shopping_cart_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../SERVICES/shopping-cart.service */ "./src/app/SERVICES/shopping-cart.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");





function ProductsComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "$ ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "img", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductsComponent_div_1_Template_button_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const item_r1 = ctx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.addToCart(item_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Add to cart");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.price);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", item_r1.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
class ProductsComponent {
    constructor(shopping_cart) {
        this.shopping_cart = shopping_cart;
    }
    ngOnInit() {
    }
    addToCart(p) {
        this.shopping_cart.addProduct(p);
    }
}
ProductsComponent.ɵfac = function ProductsComponent_Factory(t) { return new (t || ProductsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_SERVICES_shopping_cart_service__WEBPACK_IMPORTED_MODULE_1__["ShoppingCartService"])); };
ProductsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProductsComponent, selectors: [["app-products"]], inputs: { products: "products" }, decls: 240, vars: 1, consts: [[1, "products"], ["class", "product", 4, "ngFor", "ngForOf"], [1, "main"], [1, "card-product-container", "container"], [1, "card-product"], [1, "card-product-nested-card"], [1, "card-nested"], ["src", "https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Gateway/BAU/BTF-Refresh/May/PF_MF/MF-1-186-116._SY116_CB636110853_.jpg"], ["src", "https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Gateway/BAU/BTF-Refresh/May/PF_MF/MF-3-186-116._SY116_CB636110853_.jpg"], ["src", "https://images-eu.ssl-images-amazon.com/images/G/31/img22/BAU/Oct/186X116_3._SY116_CB606110532_.jpg"], ["src", "https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Gateway/BAU/BTF-Refresh/May/PF_MF/MF-4-186-116._SY116_CB636110853_.jpg"], [1, "card-product-btn"], ["src", "https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Furniture/furniture_node_1/372_232_03_low._SY116_CB605507312_.jpg"], ["src", "https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Furniture/furniture_node_1/372_232_04_low._SY116_CB605507312_.jpg"], ["src", "https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Furniture/furniture_node_1/372_232_01_low._SY116_CB605507312_.jpg"], ["src", "https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Furniture/furniture_node_1/372_232_02_low._SY116_CB605507312_.jpg"], ["src", "https://images-eu.ssl-images-amazon.com/images/G/31/img22/BAU/Oct/186X116_1._SY116_CB606110532_.jpg"], ["src", "https://images-eu.ssl-images-amazon.com/images/G/31/img22/BAU/Oct/186X116_5._SY116_CB606110532_.jpg"], ["src", "https://images-eu.ssl-images-amazon.com/images/G/31/img22/BAU/Oct/186X116_8._SY116_CB606110532_.jpg"], [1, "card-product-container", "container", "productBackgraound"], [1, "today_deals_container"], [1, "today_deals_heading"], ["href", "#"], [1, "today_deals_product_container"], [1, "today_deals_btn_container"], ["id", "today_deal_btn_prev", 1, "today_deal_btn"], [1, "fa-solid", "fa-angle-left"], ["id", "today_deal_btn_next", 1, "today_deal_btn"], [1, "fa-solid", "fa-angle-right"], [1, "today_deals_product_list"], [1, "today_deals_product_item"], ["src", "https://m.media-amazon.com/images/I/411mbYGYIdL._AC_SY200_.jpg"], [1, "discount_Contaienr"], [1, "product"], [3, "src"], [3, "click"]], template: function ProductsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ProductsComponent_div_1_Template, 11, 3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "main", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Up to 60% off | Styles for Men");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "clothing");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Footwear");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Watches");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Bags & language");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "see more");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Redefine your living room");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Sofa cum beds");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Office chairs & study");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Bean bags");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "img", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Explore all");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Visit our furniture store");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Top rated, premium quality | Amazon Brands &");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Home Products");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "img", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Furniture");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "Daily essentials");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](65, "img", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "Fashion");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "see more");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "Top rated, premium quality | Amazon Brands &");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](75, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "Home Products");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](79, "img", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "Furniture");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](83, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "Daily essentials");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](87, "img", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, "Fashion");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, "see more");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, "Top rated, premium quality | Amazon Brands &");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](98, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, "Home Products");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](102, "img", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104, "Furniture");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](106, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](108, "Daily essentials");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](110, "img", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](112, "Fashion");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](114, "see more");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](117, "Top rated, premium quality | Amazon Brands &");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](120, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](122, "Home Products");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](124, "img", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](126, "Furniture");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](128, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](130, "Daily essentials");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](132, "img", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](134, "Fashion");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](136, "see more");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](139, "Top rated, premium quality | Amazon Brands &");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](142, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](144, "Home Products");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](146, "img", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](148, "Furniture");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](150, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](152, "Daily essentials");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](153, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](154, "img", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](155, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](156, "Fashion");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](157, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](158, "see more");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](159, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](160, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](161, "Top rated, premium quality | Amazon Brands &");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](162, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](163, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](164, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](165, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](166, "Home Products");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](167, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](168, "img", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](169, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](170, "Furniture");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](171, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](172, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](173, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](174, "Daily essentials");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](175, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](176, "img", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](177, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](178, "Fashion");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](179, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](180, "see more");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](181, "section", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](182, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](183, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](184, "Today's Deals");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](185, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](186, "a", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](187, "See all deals");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](188, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](189, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](190, "button", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](191, "i", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](192, "button", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](193, "i", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](194, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](195, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](196, "img", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](197, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](198, "a", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](199, "Up to 52% off");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](200, "a", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](201, "Deal of the day");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](202, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](203, "adidas and Campus Footwear");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](204, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](205, "img", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](206, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](207, "a", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](208, "Up to 52% off");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](209, "a", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](210, "Deal of the day");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](211, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](212, "adidas and Campus Footwear");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](213, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](214, "img", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](215, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](216, "a", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](217, "Up to 52% off");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](218, "a", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](219, "Deal of the day");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](220, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](221, "adidas and Campus Footwear");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](222, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](223, "img", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](224, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](225, "a", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](226, "Up to 52% off");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](227, "a", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](228, "Deal of the day");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](229, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](230, "adidas and Campus Footwear");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](231, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](232, "img", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](233, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](234, "a", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](235, "Up to 52% off");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](236, "a", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](237, "Deal of the day");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](238, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](239, "adidas and Campus Footwear");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.products);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCard"]], styles: [".products[_ngcontent-%COMP%]{\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: center;\n    box-shadow: -10px -0px 20px rgba(196, 240, 240,0.5),\n    50px 50px 20px rgba(177, 176, 176, 0.5);\n    padding: 10px;\n}\n\n.product[_ngcontent-%COMP%]    > mat-card[_ngcontent-%COMP%]    > img[_ngcontent-%COMP%]{\n    object-fit: contain;\n    height: 200px;\n}\n\n.product[_ngcontent-%COMP%]    > mat-card[_ngcontent-%COMP%]{\n    display: flex;\n    flex-direction: column;\n    min-height: 350px;\n    width: 300px;\n    margin: 20px;\n\n    align-items: center;\n}\n\n.product[_ngcontent-%COMP%]    > mat-card[_ngcontent-%COMP%]    > button[_ngcontent-%COMP%]{\n    margin-top: 20px;\n    background-color: #f0c14b;\n    border: 1px solid;\n    border-color: #a88134 #9c7e31 #846a29;\n\n}\n\n**************************************navigation*****************************************/\n.nav[_ngcontent-%COMP%] {\n    height: 40px;\n    background-color: #232f3d;\n    margin: 0;\n}\n\n.container-nav[_ngcontent-%COMP%] {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    padding-left: 15px;\n}\n\n.container-nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n    padding: 0;\n    margin: 0;\n    display: flex;\n    align-items: center;\n    height: 100%;\n    font-size: 1rem;\n    color: white;\n    list-style: none;\n}\n\n.container-nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    color: white;\n    text-decoration: none;\n    padding: 0px 2px;\n\n}\n\n.nav-right-image-amazon-prime[_ngcontent-%COMP%] {\n    min-width: 300px;\n    height: 300;\n    max-width: 500px;\n}\n\n.nav-right-image-amazon-prime[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 100%;\n    height: 100%;\n}\n\n.prime-image[_ngcontent-%COMP%] {\n    background-color: white;\n    height: 350px;\n    width: 350px;\n    position: absolute;\n    z-index: 1;\n    display: none;\n    color: #000;\n    margin-left: -10px;\n    transition: display 1s;\n    padding: 10px;\n}\n\n.prime-image-hover[_ngcontent-%COMP%]:hover   .prime-image[_ngcontent-%COMP%] {\n    transition: display 1s;\n    display: block;\n}\n\n.prime-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 100%;\n    height: 100%;\n}\n\n\n\n.image-container[_ngcontent-%COMP%] {\n    position: relative;\n}\n\n.image-list[_ngcontent-%COMP%] {\n    display: flex;\n    overflow: hidden;\n}\n\n.image-item[_ngcontent-%COMP%] {\n    min-width: 100%;\n    height: 600px;\n    \n    transition: transform 0.3s;\n\n}\n\n.image-item[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 100%;\n    height: 100%;\n    object-fit: cover;\n}\n\n.image-btn-container[_ngcontent-%COMP%] {\n    position: absolute;\n    top: 0;\n    display: flex;\n    justify-content: space-between;\n    width: 100%;\n}\n\n.slider-btn[_ngcontent-%COMP%] {\n    border: 1px solid transparent;\n    padding: 100px 20px;\n    font-size: 50px;\n    font-weight: 300;\n    background-color: transparent;\n    color: #000;\n}\n\n.slider-btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n    font-weight: 900;\n}\n\n.slider-btn[_ngcontent-%COMP%]:focus {\n    border-color: seagreen;\n    box-shadow: -2px -2px 2px rgb(230, 227, 227),\n        2px 2px 2px white;\n    margin: 2px;\n}\n\n\n\n#open-nav-sidebar[_ngcontent-%COMP%] {\n    cursor: pointer;\n}\n\n.sidebar-container-navigation[_ngcontent-%COMP%] {\n    position: fixed;\n    top: 0;\n    bottom: 0;\n    right: 0;\n    left: 0;\n    z-index: 10;\n    background-color: transparent;\n    transform: translateX(-100%);\n    display: flex;\n    transition: transform 0.3s;\n\n\n}\n\n.slidebar-show[_ngcontent-%COMP%] {\n    transform: translateX(0%);\n    background-color: rgba(0, 0, 0, 0.7);\n}\n\n.sidebar-left-part[_ngcontent-%COMP%] {\n    background-color: white;\n    width: 365px;\n    height: 100%;\n    box-sizing: 5px 5px 10px rgba(0, 0, 0, 0.8);\n}\n\n.sidebar-top[_ngcontent-%COMP%] {\n    display: flex;\n    align-items: center;\n    padding: 12px;\n    padding-left: 30px;\n    background-color: rgb(19, 25, 33);\n    color: white;\n}\n\n.sidebar-top[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 22px;\n    margin: 0;\n}\n\n.sidebar-top[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n    padding-right: 10px;\n    font-size: 25px;\n}\n\n.sidebar-item[_ngcontent-%COMP%] {\n    padding-left: 30px;\n    border-top: 1.5px solid #ccc;\n}\n\n.sidebar-item[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 20px;\n}\n\n.sidebar-item[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    color: rgb(65, 62, 62);\n}\n\n#sidebar-navigation-close[_ngcontent-%COMP%] {\n    background-color: transparent;\n    align-self: flex-start;\n    font-size: 30px;\n    border: none;\n    color: white;\n    padding: 20px;\n    cursor: pointer;\n}\n\n.sidebar-wrap[_ngcontent-%COMP%] {\n    height: 100%;\n    overflow: auto;\n    padding-bottom: 100px;\n}\n\n\n\n.main[_ngcontent-%COMP%]{\n    position: relative;\n    top:-350px;\n    \n    \n    \n}\n\n.main[_ngcontent-%COMP%]{\n    margin-top: 20%;\n}\n\n.card-product-container[_ngcontent-%COMP%]{\n    padding: 20px;\n    display: flex;\n    justify-content: space-between;\n    \n\n}\n\n.card-product[_ngcontent-%COMP%]{\n    background-color: white;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    max-width: 310px;\n    box-shadow: -10px -0px 20px rgba(196, 240, 240,0.5),\n    50px 50px 20px rgba(177, 176, 176, 0.5);\n    padding: 10px;\n}\n\n.card-product[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{\n    margin: 0;\n    padding: 10px;\n    \n}\n\n.card-product-nested-card[_ngcontent-%COMP%] {\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: space-evenly;\n\n\n}\n\n.card-nested[_ngcontent-%COMP%] {\n\n}\n\n.card-nested[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\n    margin: 5px;\n}\n\n.card-nested[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 128px;\n    height: 102px;\n    object-fit: cover;\n\n}\n\n.card-product-btn[_ngcontent-%COMP%]{\n    font-size: 14px;\n    align-self: flex-start;\n    margin: 7px 10px; \n    padding-left: 0;\n    background-color: transparent;\n    border:none;\n    color:rgb(25, 105, 105)\n}\n\n.card-product-btn[_ngcontent-%COMP%]:hover{\n    text-decoration: underline;\n    cursor: pointer;\n}\n\n\n\n.today_deals_container[_ngcontent-%COMP%]{\n    margin: 30px;\n    box-shadow: -2px -2px 5px rgba(0, 0, 0, 0.1),\n    2px 2px 5px rgba(0, 0, 0, 0.1);\n    \n}\n\n.today_deals_heading[_ngcontent-%COMP%]{\n    display: flex;\n    align-items: center;\n    padding: 2px 20px;\n}\n\n.today_deals_heading[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\n    color:rgb(39, 114, 107);\n    text-decoration: none;\n    padding-left: 20px;\n}\n\n.today_deals_heading[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{\n    text-decoration: underline;\n}\n\n.today_deals_product_container[_ngcontent-%COMP%]{\n    \n    height: 300px;\n    position: relative;\n}\n\n.today_deals_product_list[_ngcontent-%COMP%]{\n    display: flex;\n    overflow: hidden;\n\n}\n\n.today_deals_product_item[_ngcontent-%COMP%]{\n    min-width: 250px;\n    height: 250px;\n    padding: 0px 10px;\n    margin-right: 10px;\n    display: flex;\n    flex-direction: column;\n    transform: translateX(0%);\n    transition: transform 1s;\n}\n\n.todayDeals_product_image[_ngcontent-%COMP%]{\n    height: 200px;\n    width: 210px;\n    display: flex;\n    justify-content: center;\n    align-content: center;\n    margin-bottom: 15px;\n}\n\n.today_deals_product_item[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\n    width: 100%;\n    height: 100%;\n    \n    background-color: red;\n}\n\n.today_deals_product_item[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\n    justify-self: flex-end;\n}\n\n.discount_Contaienr[_ngcontent-%COMP%]{\n    \n}\n\n.discount_Contaienr[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\n    padding: 5px 10px;\n    font-size: 14px;\n    color:rgb(211, 30, 84);\n    text-decoration: none;\n}\n\n.discount_Contaienr[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:first-child{\n    background-color: rgb(211, 30, 84);\n    padding: 5px 10px;\n    color:white;\n    font-weight: 550;\n    text-decoration: none;\n    border-radius: 3px;\n    font-size: 12px;\n}\n\n.today_deals_btn_container[_ngcontent-%COMP%]{\n    position: absolute;\n    width: 100%;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    height: 100%;\n    padding: 20px;\n    z-index: 10;\n}\n\n.today_deal_btn[_ngcontent-%COMP%]{\n    padding: 40px 10px;\n    font-size: 40px;\n    border: none;\n    outline: none;\n    background-color: rgb(255,255,255,0.4);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQ09NUE9ORU5UUy9wcm9kdWN0cy9wcm9kdWN0cy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtJQUNJLGFBQWE7SUFDYixlQUFlO0lBQ2YsdUJBQXVCO0lBQ3ZCOzJDQUN1QztJQUN2QyxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLGFBQWE7QUFDakI7O0FBQ0E7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1osWUFBWTs7SUFFWixtQkFBbUI7QUFDdkI7O0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIseUJBQXlCO0lBQ3pCLGlCQUFpQjtJQUNqQixxQ0FBcUM7O0FBRXpDOztBQUVBOztJQUVJLFlBQVk7SUFDWix5QkFBeUI7SUFDekIsU0FBUztBQUNiOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQiw4QkFBOEI7SUFDOUIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLFNBQVM7SUFDVCxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixlQUFlO0lBQ2YsWUFBWTtJQUNaLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixxQkFBcUI7SUFDckIsZ0JBQWdCOztBQUVwQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixXQUFXO0lBQ1gsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIsYUFBYTtJQUNiLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLGFBQWE7SUFDYixXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLHNCQUFzQjtJQUN0QixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtBQUNoQjs7QUFPQSxvQkFBb0I7O0FBQ3BCO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixhQUFhO0lBQ2Isa0NBQWtDO0lBQ2xDLDBCQUEwQjs7QUFFOUI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixNQUFNO0lBQ04sYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSw2QkFBNkI7SUFDN0IsbUJBQW1CO0lBQ25CLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsNkJBQTZCO0lBQzdCLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLHNCQUFzQjtJQUN0Qjt5QkFDcUI7SUFDckIsV0FBVztBQUNmOztBQUdBLHdCQUF3Qjs7QUFDeEI7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksZUFBZTtJQUNmLE1BQU07SUFDTixTQUFTO0lBQ1QsUUFBUTtJQUNSLE9BQU87SUFDUCxXQUFXO0lBQ1gsNkJBQTZCO0lBQzdCLDRCQUE0QjtJQUM1QixhQUFhO0lBQ2IsMEJBQTBCOzs7QUFHOUI7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsb0NBQW9DO0FBQ3hDOztBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCLFlBQVk7SUFDWixZQUFZO0lBQ1osMkNBQTJDO0FBQy9DOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLGlDQUFpQztJQUNqQyxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLFNBQVM7QUFDYjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLDRCQUE0QjtBQUNoQzs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSw2QkFBNkI7SUFDN0Isc0JBQXNCO0lBQ3RCLGVBQWU7SUFDZixZQUFZO0lBQ1osWUFBWTtJQUNaLGFBQWE7SUFDYixlQUFlO0FBQ25COztBQUVBO0lBQ0ksWUFBWTtJQUNaLGNBQWM7SUFDZCxxQkFBcUI7QUFDekI7O0FBRUEseUJBQXlCOztBQUN6QjtJQUNJLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsMENBQTBDO0lBQzFDLHVCQUF1Qjs7QUFFM0I7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUNBO0lBQ0ksYUFBYTtJQUNiLGFBQWE7SUFDYiw4QkFBOEI7OztBQUdsQzs7QUFDQTtJQUNJLHVCQUF1QjtJQUN2QixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLDhCQUE4QjtJQUM5QixnQkFBZ0I7SUFDaEI7MkNBQ3VDO0lBQ3ZDLGFBQWE7QUFDakI7O0FBQ0E7SUFDSSxTQUFTO0lBQ1QsYUFBYTs7QUFFakI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsZUFBZTtJQUNmLDZCQUE2Qjs7O0FBR2pDOztBQUVBOztBQUVBOztBQUVBO0lBQ0ksV0FBVztBQUNmOztBQUNBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYixpQkFBaUI7O0FBRXJCOztBQUNBO0lBQ0ksZUFBZTtJQUNmLHNCQUFzQjtJQUN0QixnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLDZCQUE2QjtJQUM3QixXQUFXO0lBQ1g7QUFDSjs7QUFDQTtJQUNJLDBCQUEwQjtJQUMxQixlQUFlO0FBQ25COztBQUdBOztHQUVHOztBQUNIO0lBQ0ksWUFBWTtJQUNaO2tDQUM4Qjs7QUFFbEM7O0FBQ0E7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLGlCQUFpQjtBQUNyQjs7QUFDQTtJQUNJLHVCQUF1QjtJQUN2QixxQkFBcUI7SUFDckIsa0JBQWtCO0FBQ3RCOztBQUNBO0lBQ0ksMEJBQTBCO0FBQzlCOztBQUVBO0lBQ0ksMkJBQTJCO0lBQzNCLGFBQWE7SUFDYixrQkFBa0I7QUFDdEI7O0FBQ0E7SUFDSSxhQUFhO0lBQ2IsZ0JBQWdCOztBQUVwQjs7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHlCQUF5QjtJQUN6Qix3QkFBd0I7QUFDNUI7O0FBQ0E7SUFDSSxhQUFhO0lBQ2IsWUFBWTtJQUNaLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIscUJBQXFCO0lBQ3JCLG1CQUFtQjtBQUN2Qjs7QUFDQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osd0JBQXdCO0lBQ3hCLHFCQUFxQjtBQUN6Qjs7QUFDQTtJQUNJLHNCQUFzQjtBQUMxQjs7QUFDQTtJQUNJLDJCQUEyQjtBQUMvQjs7QUFDQTtJQUNJLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2Ysc0JBQXNCO0lBQ3RCLHFCQUFxQjtBQUN6Qjs7QUFDQTtJQUNJLGtDQUFrQztJQUNsQyxpQkFBaUI7SUFDakIsV0FBVztJQUNYLGdCQUFnQjtJQUNoQixxQkFBcUI7SUFDckIsa0JBQWtCO0lBQ2xCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixhQUFhO0lBQ2IsV0FBVztBQUNmOztBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixZQUFZO0lBQ1osYUFBYTtJQUNiLHNDQUFzQztBQUMxQyIsImZpbGUiOiJzcmMvYXBwL0NPTVBPTkVOVFMvcHJvZHVjdHMvcHJvZHVjdHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLnByb2R1Y3Rze1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGJveC1zaGFkb3c6IC0xMHB4IC0wcHggMjBweCByZ2JhKDE5NiwgMjQwLCAyNDAsMC41KSxcbiAgICA1MHB4IDUwcHggMjBweCByZ2JhKDE3NywgMTc2LCAxNzYsIDAuNSk7XG4gICAgcGFkZGluZzogMTBweDtcbn1cblxuLnByb2R1Y3QgPiBtYXQtY2FyZCA+IGltZ3tcbiAgICBvYmplY3QtZml0OiBjb250YWluO1xuICAgIGhlaWdodDogMjAwcHg7XG59XG4ucHJvZHVjdCA+IG1hdC1jYXJke1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBtaW4taGVpZ2h0OiAzNTBweDtcbiAgICB3aWR0aDogMzAwcHg7XG4gICAgbWFyZ2luOiAyMHB4O1xuXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5wcm9kdWN0ID4gbWF0LWNhcmQgPiBidXR0b257XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBjMTRiO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkO1xuICAgIGJvcmRlci1jb2xvcjogI2E4ODEzNCAjOWM3ZTMxICM4NDZhMjk7XG5cbn1cblxuKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipuYXZpZ2F0aW9uKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4ubmF2IHtcbiAgICBoZWlnaHQ6IDQwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzIzMmYzZDtcbiAgICBtYXJnaW46IDA7XG59XG5cbi5jb250YWluZXItbmF2IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIHBhZGRpbmctbGVmdDogMTVweDtcbn1cblxuLmNvbnRhaW5lci1uYXYgdWwge1xuICAgIHBhZGRpbmc6IDA7XG4gICAgbWFyZ2luOiAwO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgZm9udC1zaXplOiAxcmVtO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBsaXN0LXN0eWxlOiBub25lO1xufVxuXG4uY29udGFpbmVyLW5hdiB1bCBsaSBhIHtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIHBhZGRpbmc6IDBweCAycHg7XG5cbn1cblxuLm5hdi1yaWdodC1pbWFnZS1hbWF6b24tcHJpbWUge1xuICAgIG1pbi13aWR0aDogMzAwcHg7XG4gICAgaGVpZ2h0OiAzMDA7XG4gICAgbWF4LXdpZHRoOiA1MDBweDtcbn1cblxuLm5hdi1yaWdodC1pbWFnZS1hbWF6b24tcHJpbWUgaW1nIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5wcmltZS1pbWFnZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgaGVpZ2h0OiAzNTBweDtcbiAgICB3aWR0aDogMzUwcHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHotaW5kZXg6IDE7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgICBjb2xvcjogIzAwMDtcbiAgICBtYXJnaW4tbGVmdDogLTEwcHg7XG4gICAgdHJhbnNpdGlvbjogZGlzcGxheSAxcztcbiAgICBwYWRkaW5nOiAxMHB4O1xufVxuXG4ucHJpbWUtaW1hZ2UtaG92ZXI6aG92ZXIgLnByaW1lLWltYWdlIHtcbiAgICB0cmFuc2l0aW9uOiBkaXNwbGF5IDFzO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4ucHJpbWUtaW1hZ2UgaW1nIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG59XG5cblxuXG5cblxuXG4vKi0taW1hZ2Ugc2xpZGVyIC0tKi9cbi5pbWFnZS1jb250YWluZXIge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmltYWdlLWxpc3Qge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLmltYWdlLWl0ZW0ge1xuICAgIG1pbi13aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDYwMHB4O1xuICAgIC8qIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMzAwJSk7ICovXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3M7XG5cbn1cblxuLmltYWdlLWl0ZW0gaW1nIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgb2JqZWN0LWZpdDogY292ZXI7XG59XG5cbi5pbWFnZS1idG4tY29udGFpbmVyIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG4uc2xpZGVyLWJ0biB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgcGFkZGluZzogMTAwcHggMjBweDtcbiAgICBmb250LXNpemU6IDUwcHg7XG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICBjb2xvcjogIzAwMDtcbn1cblxuLnNsaWRlci1idG4gaSB7XG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcbn1cblxuLnNsaWRlci1idG46Zm9jdXMge1xuICAgIGJvcmRlci1jb2xvcjogc2VhZ3JlZW47XG4gICAgYm94LXNoYWRvdzogLTJweCAtMnB4IDJweCByZ2IoMjMwLCAyMjcsIDIyNyksXG4gICAgICAgIDJweCAycHggMnB4IHdoaXRlO1xuICAgIG1hcmdpbjogMnB4O1xufVxuXG5cbi8qc2lkZWJhciBuYXZpZ2F0aW9uKioqKi9cbiNvcGVuLW5hdi1zaWRlYmFyIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5zaWRlYmFyLWNvbnRhaW5lci1uYXZpZ2F0aW9uIHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgdG9wOiAwO1xuICAgIGJvdHRvbTogMDtcbiAgICByaWdodDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHotaW5kZXg6IDEwO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwJSk7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcztcblxuXG59XG5cbi5zbGlkZWJhci1zaG93IHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCUpO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC43KTtcbn1cblxuLnNpZGViYXItbGVmdC1wYXJ0IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICB3aWR0aDogMzY1cHg7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGJveC1zaXppbmc6IDVweCA1cHggMTBweCByZ2JhKDAsIDAsIDAsIDAuOCk7XG59XG5cbi5zaWRlYmFyLXRvcCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHBhZGRpbmc6IDEycHg7XG4gICAgcGFkZGluZy1sZWZ0OiAzMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxOSwgMjUsIDMzKTtcbiAgICBjb2xvcjogd2hpdGU7XG59XG5cbi5zaWRlYmFyLXRvcCBoMiB7XG4gICAgZm9udC1zaXplOiAyMnB4O1xuICAgIG1hcmdpbjogMDtcbn1cblxuLnNpZGViYXItdG9wIGkge1xuICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG4gICAgZm9udC1zaXplOiAyNXB4O1xufVxuXG4uc2lkZWJhci1pdGVtIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDMwcHg7XG4gICAgYm9yZGVyLXRvcDogMS41cHggc29saWQgI2NjYztcbn1cblxuLnNpZGViYXItaXRlbSBoMiB7XG4gICAgZm9udC1zaXplOiAyMHB4O1xufVxuXG4uc2lkZWJhci1pdGVtIHAge1xuICAgIGNvbG9yOiByZ2IoNjUsIDYyLCA2Mik7XG59XG5cbiNzaWRlYmFyLW5hdmlnYXRpb24tY2xvc2Uge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XG4gICAgZm9udC1zaXplOiAzMHB4O1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgcGFkZGluZzogMjBweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5zaWRlYmFyLXdyYXAge1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBvdmVyZmxvdzogYXV0bztcbiAgICBwYWRkaW5nLWJvdHRvbTogMTAwcHg7XG59XG5cbi8qcHJvZHVjdCBjYXJkIGNvbnRhaW5lciovXG4ubWFpbntcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdG9wOi0zNTBweDtcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTk2LCAyNDAsIDI0MCk7ICovXG4gICAgLyogZmlsdGVyOiBibHVyKDhweCk7ICovXG4gICAgXG59XG5cbi5tYWlue1xuICAgIG1hcmdpbi10b3A6IDIwJTtcbn1cbi5jYXJkLXByb2R1Y3QtY29udGFpbmVye1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgXG5cbn1cbi5jYXJkLXByb2R1Y3R7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBtYXgtd2lkdGg6IDMxMHB4O1xuICAgIGJveC1zaGFkb3c6IC0xMHB4IC0wcHggMjBweCByZ2JhKDE5NiwgMjQwLCAyNDAsMC41KSxcbiAgICA1MHB4IDUwcHggMjBweCByZ2JhKDE3NywgMTc2LCAxNzYsIDAuNSk7XG4gICAgcGFkZGluZzogMTBweDtcbn1cbi5jYXJkLXByb2R1Y3QgaDJ7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgXG59XG5cbi5jYXJkLXByb2R1Y3QtbmVzdGVkLWNhcmQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xuXG5cbn1cblxuLmNhcmQtbmVzdGVkIHtcblxufVxuXG4uY2FyZC1uZXN0ZWQgcHtcbiAgICBtYXJnaW46IDVweDtcbn1cbi5jYXJkLW5lc3RlZCBpbWcge1xuICAgIHdpZHRoOiAxMjhweDtcbiAgICBoZWlnaHQ6IDEwMnB4O1xuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuXG59XG4uY2FyZC1wcm9kdWN0LWJ0bntcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcbiAgICBtYXJnaW46IDdweCAxMHB4OyBcbiAgICBwYWRkaW5nLWxlZnQ6IDA7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyOm5vbmU7XG4gICAgY29sb3I6cmdiKDI1LCAxMDUsIDEwNSlcbn1cbi5jYXJkLXByb2R1Y3QtYnRuOmhvdmVye1xuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuXG4vKioqXG4gICAgICAgIFRvZGF5J3MgZGVhbHMgc2VjdGlvblxuKioqL1xuLnRvZGF5X2RlYWxzX2NvbnRhaW5lcntcbiAgICBtYXJnaW46IDMwcHg7XG4gICAgYm94LXNoYWRvdzogLTJweCAtMnB4IDVweCByZ2JhKDAsIDAsIDAsIDAuMSksXG4gICAgMnB4IDJweCA1cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuICAgIFxufVxuLnRvZGF5X2RlYWxzX2hlYWRpbmd7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHBhZGRpbmc6IDJweCAyMHB4O1xufVxuLnRvZGF5X2RlYWxzX2hlYWRpbmcgcCBhe1xuICAgIGNvbG9yOnJnYigzOSwgMTE0LCAxMDcpO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG59XG4udG9kYXlfZGVhbHNfaGVhZGluZyBwIGE6aG92ZXJ7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG59XG5cbi50b2RheV9kZWFsc19wcm9kdWN0X2NvbnRhaW5lcntcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7ICovXG4gICAgaGVpZ2h0OiAzMDBweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4udG9kYXlfZGVhbHNfcHJvZHVjdF9saXN0e1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcblxufVxuLnRvZGF5X2RlYWxzX3Byb2R1Y3RfaXRlbXtcbiAgICBtaW4td2lkdGg6IDI1MHB4O1xuICAgIGhlaWdodDogMjUwcHg7XG4gICAgcGFkZGluZzogMHB4IDEwcHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCUpO1xuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAxcztcbn1cbi50b2RheURlYWxzX3Byb2R1Y3RfaW1hZ2V7XG4gICAgaGVpZ2h0OiAyMDBweDtcbiAgICB3aWR0aDogMjEwcHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcbn1cbi50b2RheV9kZWFsc19wcm9kdWN0X2l0ZW0gaW1ne1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICAvKiBwYWRkaW5nOiAyMHB4IDIwcHg7ICovXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xufVxuLnRvZGF5X2RlYWxzX3Byb2R1Y3RfaXRlbSBwe1xuICAgIGp1c3RpZnktc2VsZjogZmxleC1lbmQ7XG59XG4uZGlzY291bnRfQ29udGFpZW5ye1xuICAgIC8qIGJvcmRlcjogMnB4IHNvbGlkIHJlZDsgKi9cbn1cbi5kaXNjb3VudF9Db250YWllbnIgYXtcbiAgICBwYWRkaW5nOiA1cHggMTBweDtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgY29sb3I6cmdiKDIxMSwgMzAsIDg0KTtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG4uZGlzY291bnRfQ29udGFpZW5yIGE6Zmlyc3QtY2hpbGR7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIxMSwgMzAsIDg0KTtcbiAgICBwYWRkaW5nOiA1cHggMTBweDtcbiAgICBjb2xvcjp3aGl0ZTtcbiAgICBmb250LXdlaWdodDogNTUwO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgZm9udC1zaXplOiAxMnB4O1xufVxuXG4udG9kYXlfZGVhbHNfYnRuX2NvbnRhaW5lcntcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgcGFkZGluZzogMjBweDtcbiAgICB6LWluZGV4OiAxMDtcbn1cbi50b2RheV9kZWFsX2J0bntcbiAgICBwYWRkaW5nOiA0MHB4IDEwcHg7XG4gICAgZm9udC1zaXplOiA0MHB4O1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsMjU1LDI1NSwwLjQpO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-products',
                templateUrl: './products.component.html',
                styleUrls: ['./products.component.css']
            }]
    }], function () { return [{ type: _SERVICES_shopping_cart_service__WEBPACK_IMPORTED_MODULE_1__["ShoppingCartService"] }]; }, { products: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/PAGES/checkout/checkout.component.ts":
/*!******************************************************!*\
  !*** ./src/app/PAGES/checkout/checkout.component.ts ***!
  \******************************************************/
/*! exports provided: CheckoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckoutComponent", function() { return CheckoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_SERVICES_shopping_cart_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/SERVICES/shopping-cart.service */ "./src/app/SERVICES/shopping-cart.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _COMPONENTS_checkout_subtotal_checkout_subtotal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../COMPONENTS/checkout-subtotal/checkout-subtotal.component */ "./src/app/COMPONENTS/checkout-subtotal/checkout-subtotal.component.ts");
/* harmony import */ var _COMPONENTS_checkout_products_checkout_products_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../COMPONENTS/checkout-products/checkout-products.component */ "./src/app/COMPONENTS/checkout-products/checkout-products.component.ts");






function CheckoutComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Your shopping basket is empty");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "You have no items in your basket");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CheckoutComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Shopping Cart");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "app-checkout-products", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("deleteEvent", function CheckoutComponent_div_3_Template_app_checkout_products_deleteEvent_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.deleteEventHandler($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checkout_products", ctx_r1.items);
} }
class CheckoutComponent {
    constructor(shopping_cart) {
        this.shopping_cart = shopping_cart;
    }
    ngOnInit() {
        this.getShoppingCart();
    }
    getShoppingCart() {
        this.items = this.shopping_cart.get_shopping_cart_items();
    }
    deleteEventHandler(p) {
        console.log("event handled");
        this.getShoppingCart();
    }
}
CheckoutComponent.ɵfac = function CheckoutComponent_Factory(t) { return new (t || CheckoutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_SERVICES_shopping_cart_service__WEBPACK_IMPORTED_MODULE_1__["ShoppingCartService"])); };
CheckoutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CheckoutComponent, selectors: [["app-checkout"]], decls: 6, vars: 2, consts: [[1, "checkout"], [1, "checkout_left"], ["class", "checkout_empty", 4, "ngIf"], ["class", "checkout_not_empty", 4, "ngIf"], [1, "checkout_right"], [1, "checkout_empty"], [1, "checkout_not_empty"], [3, "checkout_products", "deleteEvent"]], template: function CheckoutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CheckoutComponent_div_2_Template, 5, 0, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CheckoutComponent_div_3_Template, 5, 1, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-checkout-subtotal");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.shopping_cart.getCartLength() == 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.shopping_cart.getCartLength() != 0);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _COMPONENTS_checkout_subtotal_checkout_subtotal_component__WEBPACK_IMPORTED_MODULE_3__["CheckoutSubtotalComponent"], _COMPONENTS_checkout_products_checkout_products_component__WEBPACK_IMPORTED_MODULE_4__["CheckoutProductsComponent"]], styles: [".checkout[_ngcontent-%COMP%]{\n    background:none;\n    display: flex;\n    \n    width: 100%;\n    \n    \n \n}\n.checkout_left[_ngcontent-%COMP%]{\n    flex: 1;\n}\n.checkout_empty[_ngcontent-%COMP%]{\n    margin: 20px 20px 400px 20px ;\n}\n.checkout_right[_ngcontent-%COMP%]{\njustify-content: flex-end;\nmargin-left: 20px;\n\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvUEFHRVMvY2hlY2tvdXQvY2hlY2tvdXQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGVBQWU7SUFDZixhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCx1QkFBdUI7OztBQUczQjtBQUNBO0lBQ0ksT0FBTztBQUNYO0FBQ0E7SUFDSSw2QkFBNkI7QUFDakM7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QixpQkFBaUI7O0FBRWpCIiwiZmlsZSI6InNyYy9hcHAvUEFHRVMvY2hlY2tvdXQvY2hlY2tvdXQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jaGVja291dHtcbiAgICBiYWNrZ3JvdW5kOm5vbmU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICAvKiBtYXJnaW46IDIwcHg7ICovXG4gICAgd2lkdGg6IDEwMCU7XG4gICAgLyogbWluLWhlaWdodDogNDAwcHg7ICovXG4gICAgXG4gXG59XG4uY2hlY2tvdXRfbGVmdHtcbiAgICBmbGV4OiAxO1xufVxuLmNoZWNrb3V0X2VtcHR5e1xuICAgIG1hcmdpbjogMjBweCAyMHB4IDQwMHB4IDIwcHggO1xufVxuLmNoZWNrb3V0X3JpZ2h0e1xuanVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbm1hcmdpbi1sZWZ0OiAyMHB4O1xuXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CheckoutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-checkout',
                templateUrl: './checkout.component.html',
                styleUrls: ['./checkout.component.css']
            }]
    }], function () { return [{ type: src_app_SERVICES_shopping_cart_service__WEBPACK_IMPORTED_MODULE_1__["ShoppingCartService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/PAGES/home/home.component.ts":
/*!**********************************************!*\
  !*** ./src/app/PAGES/home/home.component.ts ***!
  \**********************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _SERVICES_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../SERVICES/api.service */ "./src/app/SERVICES/api.service.ts");
/* harmony import */ var _COMPONENTS_banner_banner_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../COMPONENTS/banner/banner.component */ "./src/app/COMPONENTS/banner/banner.component.ts");
/* harmony import */ var _COMPONENTS_products_products_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../COMPONENTS/products/products.component */ "./src/app/COMPONENTS/products/products.component.ts");





class HomeComponent {
    constructor(api) {
        this.api = api;
    }
    ngOnInit() {
        this.getProducts();
    }
    getProducts() {
        this.api.getJson().subscribe(resp => {
            this.items = resp;
        });
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_SERVICES_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"])); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 2, vars: 1, consts: [[3, "products"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-banner");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-products", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("products", ctx.items);
    } }, directives: [_COMPONENTS_banner_banner_component__WEBPACK_IMPORTED_MODULE_2__["BannerComponent"], _COMPONENTS_products_products_component__WEBPACK_IMPORTED_MODULE_3__["ProductsComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL1BBR0VTL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.css']
            }]
    }], function () { return [{ type: _SERVICES_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/PAGES/login/login.component.ts":
/*!************************************************!*\
  !*** ./src/app/PAGES/login/login.component.ts ***!
  \************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class LoginComponent {
    constructor() { }
    ngOnInit() {
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(); };
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 2, vars: 0, template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "login works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL1BBR0VTL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-login',
                templateUrl: './login.component.html',
                styleUrls: ['./login.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/SERVICES/api.service.ts":
/*!*****************************************!*\
  !*** ./src/app/SERVICES/api.service.ts ***!
  \*****************************************/
/*! exports provided: ApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiService", function() { return ApiService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");



class ApiService {
    constructor(Http) {
        this.Http = Http;
        this._jsonURL = 'assets/DATA/products.json';
    }
    getJson() {
        return this.Http.get(this._jsonURL);
    }
}
ApiService.ɵfac = function ApiService_Factory(t) { return new (t || ApiService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
ApiService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ApiService, factory: ApiService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ApiService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/SERVICES/shopping-cart.service.ts":
/*!***************************************************!*\
  !*** ./src/app/SERVICES/shopping-cart.service.ts ***!
  \***************************************************/
/*! exports provided: ShoppingCartService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShoppingCartService", function() { return ShoppingCartService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class ShoppingCartService {
    constructor() {
        this.shopping_cart_items = [];
        this.addProduct = (product) => {
            let items = this.get_shopping_cart_items();
            if (items) {
                items.push(product);
                localStorage.setItem('shopping_cart', JSON.stringify(items));
            }
            else {
                this.shopping_cart_items.push(product);
                localStorage.setItem('shopping_cart', JSON.stringify(this.shopping_cart_items));
            }
        };
        this.get_shopping_cart_items = () => {
            let items = localStorage.getItem('shopping_cart');
            return JSON.parse(items);
        };
        this.getCartLength = () => {
            let items = this.get_shopping_cart_items();
            return items ? this.get_shopping_cart_items().length : 0;
        };
        this.getTotal = () => {
            let items = this.get_shopping_cart_items();
            return items === null || items === void 0 ? void 0 : items.reduce((acc, item) => acc + item.price, 0);
        };
        this.removerItem = (p) => {
            console.log('calling remover ', p);
            let items = this.get_shopping_cart_items();
            const index = items.findIndex(item => item.id == p.id);
            if (index >= 0) {
                console.log('hitting if');
                items.splice(index, 1);
                return localStorage.setItem('shopping_cart', JSON.stringify(items));
            }
        };
    }
}
ShoppingCartService.ɵfac = function ShoppingCartService_Factory(t) { return new (t || ShoppingCartService)(); };
ShoppingCartService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ShoppingCartService, factory: ShoppingCartService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ShoppingCartService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _PAGES_home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PAGES/home/home.component */ "./src/app/PAGES/home/home.component.ts");
/* harmony import */ var _PAGES_login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./PAGES/login/login.component */ "./src/app/PAGES/login/login.component.ts");
/* harmony import */ var _PAGES_checkout_checkout_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./PAGES/checkout/checkout.component */ "./src/app/PAGES/checkout/checkout.component.ts");







const routes = [
    { path: '', component: _PAGES_home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"] },
    { path: 'login', component: _PAGES_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
    { path: 'checkout', component: _PAGES_checkout_checkout_component__WEBPACK_IMPORTED_MODULE_4__["CheckoutComponent"] }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _COMPONENTS_header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./COMPONENTS/header/header.component */ "./src/app/COMPONENTS/header/header.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _COMPONENTS_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./COMPONENTS/footer/footer.component */ "./src/app/COMPONENTS/footer/footer.component.ts");





class AppComponent {
    constructor() {
        this.title = ' amazon';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 3, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-footer");
    } }, directives: [_COMPONENTS_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"], _COMPONENTS_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _PAGES_home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./PAGES/home/home.component */ "./src/app/PAGES/home/home.component.ts");
/* harmony import */ var _COMPONENTS_footer_footer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./COMPONENTS/footer/footer.component */ "./src/app/COMPONENTS/footer/footer.component.ts");
/* harmony import */ var _PAGES_checkout_checkout_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./PAGES/checkout/checkout.component */ "./src/app/PAGES/checkout/checkout.component.ts");
/* harmony import */ var _PAGES_login_login_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./PAGES/login/login.component */ "./src/app/PAGES/login/login.component.ts");
/* harmony import */ var _COMPONENTS_header_header_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./COMPONENTS/header/header.component */ "./src/app/COMPONENTS/header/header.component.ts");
/* harmony import */ var _COMPONENTS_banner_banner_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./COMPONENTS/banner/banner.component */ "./src/app/COMPONENTS/banner/banner.component.ts");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _COMPONENTS_products_products_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./COMPONENTS/products/products.component */ "./src/app/COMPONENTS/products/products.component.ts");
/* harmony import */ var _COMPONENTS_checkout_products_checkout_products_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./COMPONENTS/checkout-products/checkout-products.component */ "./src/app/COMPONENTS/checkout-products/checkout-products.component.ts");
/* harmony import */ var _COMPONENTS_checkout_subtotal_checkout_subtotal_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./COMPONENTS/checkout-subtotal/checkout-subtotal.component */ "./src/app/COMPONENTS/checkout-subtotal/checkout-subtotal.component.ts");


















class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_12__["MatCardModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpClientModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _PAGES_home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"],
        _COMPONENTS_footer_footer_component__WEBPACK_IMPORTED_MODULE_7__["FooterComponent"],
        _PAGES_checkout_checkout_component__WEBPACK_IMPORTED_MODULE_8__["CheckoutComponent"],
        _PAGES_login_login_component__WEBPACK_IMPORTED_MODULE_9__["LoginComponent"],
        _COMPONENTS_header_header_component__WEBPACK_IMPORTED_MODULE_10__["HeaderComponent"],
        _COMPONENTS_banner_banner_component__WEBPACK_IMPORTED_MODULE_11__["BannerComponent"],
        _COMPONENTS_products_products_component__WEBPACK_IMPORTED_MODULE_14__["ProductsComponent"],
        _COMPONENTS_checkout_products_checkout_products_component__WEBPACK_IMPORTED_MODULE_15__["CheckoutProductsComponent"],
        _COMPONENTS_checkout_subtotal_checkout_subtotal_component__WEBPACK_IMPORTED_MODULE_16__["CheckoutSubtotalComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_12__["MatCardModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpClientModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _PAGES_home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"],
                    _COMPONENTS_footer_footer_component__WEBPACK_IMPORTED_MODULE_7__["FooterComponent"],
                    _PAGES_checkout_checkout_component__WEBPACK_IMPORTED_MODULE_8__["CheckoutComponent"],
                    _PAGES_login_login_component__WEBPACK_IMPORTED_MODULE_9__["LoginComponent"],
                    _COMPONENTS_header_header_component__WEBPACK_IMPORTED_MODULE_10__["HeaderComponent"],
                    _COMPONENTS_banner_banner_component__WEBPACK_IMPORTED_MODULE_11__["BannerComponent"],
                    _COMPONENTS_products_products_component__WEBPACK_IMPORTED_MODULE_14__["ProductsComponent"],
                    _COMPONENTS_checkout_products_checkout_products_component__WEBPACK_IMPORTED_MODULE_15__["CheckoutProductsComponent"],
                    _COMPONENTS_checkout_subtotal_checkout_subtotal_component__WEBPACK_IMPORTED_MODULE_16__["CheckoutSubtotalComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
                    _angular_material_card__WEBPACK_IMPORTED_MODULE_12__["MatCardModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpClientModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Malek\Downloads\my-amazon-clone-2-master\my-amazon-clone\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map