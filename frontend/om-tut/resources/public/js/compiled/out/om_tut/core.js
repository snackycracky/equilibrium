// Compiled by ClojureScript 0.0-3165 {}
goog.provide('om_tut.core');
goog.require('cljs.core');
goog.require('om.dom');
goog.require('om.core');
cljs.core.enable_console_print_BANG_.call(null);
cljs.core.println.call(null,"Edits to this text should show up in your developer console.");
if(typeof om_tut.core.app_state !== 'undefined'){
} else {
om_tut.core.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),"Hello world!"], null));
}
om.core.root.call(null,(function (data,owner){
if(typeof om_tut.core.t19818 !== 'undefined'){
} else {

/**
* @constructor
*/
om_tut.core.t19818 = (function (owner,data,meta19819){
this.owner = owner;
this.data = data;
this.meta19819 = meta19819;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
om_tut.core.t19818.prototype.om$core$IRender$ = true;

om_tut.core.t19818.prototype.om$core$IRender$render$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return React.DOM.h1(null,new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(self__.data));
});

om_tut.core.t19818.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19820){
var self__ = this;
var _19820__$1 = this;
return self__.meta19819;
});

om_tut.core.t19818.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19820,meta19819__$1){
var self__ = this;
var _19820__$1 = this;
return (new om_tut.core.t19818(self__.owner,self__.data,meta19819__$1));
});

om_tut.core.t19818.cljs$lang$type = true;

om_tut.core.t19818.cljs$lang$ctorStr = "om-tut.core/t19818";

om_tut.core.t19818.cljs$lang$ctorPrWriter = (function (this__18435__auto__,writer__18436__auto__,opt__18437__auto__){
return cljs.core._write.call(null,writer__18436__auto__,"om-tut.core/t19818");
});

om_tut.core.__GT_t19818 = (function om_tut$core$__GT_t19818(owner__$1,data__$1,meta19819){
return (new om_tut.core.t19818(owner__$1,data__$1,meta19819));
});

}

return (new om_tut.core.t19818(owner,data,cljs.core.PersistentArrayMap.EMPTY));
}),om_tut.core.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("app")], null));
om_tut.core.on_js_reload = (function om_tut$core$on_js_reload(){
return null;
});

//# sourceMappingURL=core.js.map?rel=1430425793231