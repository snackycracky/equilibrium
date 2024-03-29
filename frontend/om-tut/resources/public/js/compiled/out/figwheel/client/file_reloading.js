// Compiled by ClojureScript 0.0-3165 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.string');
goog.require('goog.net.jsloader');
goog.require('cljs.core.async');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('figwheel.client.utils');

figwheel.client.file_reloading.all_QMARK_ = (function figwheel$client$file_reloading$all_QMARK_(pred,coll){
return cljs.core.reduce.call(null,(function (p1__26833_SHARP_,p2__26834_SHARP_){
var and__17844__auto__ = p1__26833_SHARP_;
if(cljs.core.truth_(and__17844__auto__)){
return p2__26834_SHARP_;
} else {
return and__17844__auto__;
}
}),true,cljs.core.map.call(null,pred,coll));
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__17856__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__17856__auto__){
return or__17856__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.ns_to_js_file = (function figwheel$client$file_reloading$ns_to_js_file(ns){

return [cljs.core.str(clojure.string.replace.call(null,ns,".","/")),cljs.core.str(".js")].join('');
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){

return [cljs.core.str(figwheel.client.utils.base_url_path.call(null)),cljs.core.str(figwheel.client.file_reloading.ns_to_js_file.call(null,ns))].join('');
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
goog.isProvided = (function (x){
return false;
});

if(((cljs.core._STAR_loaded_libs_STAR_ == null)) || (cljs.core.empty_QMARK_.call(null,cljs.core._STAR_loaded_libs_STAR_))){
cljs.core._STAR_loaded_libs_STAR_ = (function (){var gntp = goog.dependencies_.nameToPath;
return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.filter.call(null,((function (gntp){
return (function (name){
return (goog.dependencies_.visited[(gntp[name])]);
});})(gntp))
,cljs.core.js_keys.call(null,gntp)));
})();
} else {
}

goog.require = (function (name,reload){
if(cljs.core.truth_((function (){var or__17856__auto__ = !(cljs.core.contains_QMARK_.call(null,cljs.core._STAR_loaded_libs_STAR_,name));
if(or__17856__auto__){
return or__17856__auto__;
} else {
return reload;
}
})())){
cljs.core._STAR_loaded_libs_STAR_ = cljs.core.conj.call(null,(function (){var or__17856__auto__ = cljs.core._STAR_loaded_libs_STAR_;
if(cljs.core.truth_(or__17856__auto__)){
return or__17856__auto__;
} else {
return cljs.core.PersistentHashSet.EMPTY;
}
})(),name);

return figwheel.client.file_reloading.reload_file_STAR_.call(null,figwheel.client.file_reloading.resolve_ns.call(null,name));
} else {
return null;
}
});

goog.provide = goog.exportPath_;

return goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.reload_file_STAR_;
});
figwheel.client.file_reloading.resolve_url = (function (){var method_table__18751__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__18752__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__18753__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__18754__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__18755__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.file-reloading","resolve-url"),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__18755__auto__,method_table__18751__auto__,prefer_table__18752__auto__,method_cache__18753__auto__,cached_hierarchy__18754__auto__));
})();
cljs.core._add_method.call(null,figwheel.client.file_reloading.resolve_url,new cljs.core.Keyword(null,"default","default",-1987822328),(function (p__26835){
var map__26836 = p__26835;
var map__26836__$1 = ((cljs.core.seq_QMARK_.call(null,map__26836))?cljs.core.apply.call(null,cljs.core.hash_map,map__26836):map__26836);
var file = cljs.core.get.call(null,map__26836__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
return file;
}));
cljs.core._add_method.call(null,figwheel.client.file_reloading.resolve_url,new cljs.core.Keyword(null,"namespace","namespace",-377510372),(function (p__26837){
var map__26838 = p__26837;
var map__26838__$1 = ((cljs.core.seq_QMARK_.call(null,map__26838))?cljs.core.apply.call(null,cljs.core.hash_map,map__26838):map__26838);
var namespace = cljs.core.get.call(null,map__26838__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

return figwheel.client.file_reloading.resolve_ns.call(null,namespace);
}));
figwheel.client.file_reloading.reload_base = (function (){var method_table__18751__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__18752__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__18753__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__18754__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__18755__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.file-reloading","reload-base"),figwheel.client.utils.host_env_QMARK_,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__18755__auto__,method_table__18751__auto__,prefer_table__18752__auto__,method_cache__18753__auto__,cached_hierarchy__18754__auto__));
})();
cljs.core._add_method.call(null,figwheel.client.file_reloading.reload_base,new cljs.core.Keyword(null,"node","node",581201198),(function (request_url,callback){

var root = clojure.string.join.call(null,"/",cljs.core.reverse.call(null,cljs.core.drop.call(null,(2),cljs.core.reverse.call(null,clojure.string.split.call(null,__dirname,"/")))));
var path = [cljs.core.str(root),cljs.core.str("/"),cljs.core.str(request_url)].join('');
(require.cache[path] = null);

return callback.call(null,(function (){try{return require(path);
}catch (e26839){if((e26839 instanceof Error)){
var e = e26839;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e26839;

}
}})());
}));
cljs.core._add_method.call(null,figwheel.client.file_reloading.reload_base,new cljs.core.Keyword(null,"html","html",-998796897),(function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true});
deferred.addCallback(((function (deferred){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred))
);

return deferred.addErrback(((function (deferred){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred))
);
}));
figwheel.client.file_reloading.reload_file_STAR_ = (function() {
var figwheel$client$file_reloading$reload_file_STAR_ = null;
var figwheel$client$file_reloading$reload_file_STAR___1 = (function (request_url){
return figwheel$client$file_reloading$reload_file_STAR_.call(null,request_url,cljs.core.identity);
});
var figwheel$client$file_reloading$reload_file_STAR___2 = (function (request_url,callback){
return figwheel.client.file_reloading.reload_base.call(null,request_url,callback);
});
figwheel$client$file_reloading$reload_file_STAR_ = function(request_url,callback){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$reload_file_STAR___1.call(this,request_url);
case 2:
return figwheel$client$file_reloading$reload_file_STAR___2.call(this,request_url,callback);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_file_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_file_STAR___1;
figwheel$client$file_reloading$reload_file_STAR_.cljs$core$IFn$_invoke$arity$2 = figwheel$client$file_reloading$reload_file_STAR___2;
return figwheel$client$file_reloading$reload_file_STAR_;
})()
;
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__26840,callback){
var map__26842 = p__26840;
var map__26842__$1 = ((cljs.core.seq_QMARK_.call(null,map__26842))?cljs.core.apply.call(null,cljs.core.hash_map,map__26842):map__26842);
var file_msg = map__26842__$1;
var request_url = cljs.core.get.call(null,map__26842__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__26842,map__26842__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfullly loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__26842,map__26842__$1,file_msg,request_url))
);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__26843){
var map__26845 = p__26843;
var map__26845__$1 = ((cljs.core.seq_QMARK_.call(null,map__26845))?cljs.core.apply.call(null,cljs.core.hash_map,map__26845):map__26845);
var file_msg = map__26845__$1;
var meta_data = cljs.core.get.call(null,map__26845__$1,new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157));
var namespace = cljs.core.get.call(null,map__26845__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_data__$1 = (function (){var or__17856__auto__ = meta_data;
if(cljs.core.truth_(or__17856__auto__)){
return or__17856__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
var and__17844__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_data__$1));
if(and__17844__auto__){
var or__17856__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_data__$1);
if(cljs.core.truth_(or__17856__auto__)){
return or__17856__auto__;
} else {
var or__17856__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_data__$1);
if(cljs.core.truth_(or__17856__auto____$1)){
return or__17856__auto____$1;
} else {
var and__17844__auto____$1 = cljs.core.contains_QMARK_.call(null,cljs.core._STAR_loaded_libs_STAR_,namespace);
if(and__17844__auto____$1){
var or__17856__auto____$2 = !(cljs.core.contains_QMARK_.call(null,meta_data__$1,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932)));
if(or__17856__auto____$2){
return or__17856__auto____$2;
} else {
return new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932).cljs$core$IFn$_invoke$arity$1(meta_data__$1);
}
} else {
return and__17844__auto____$1;
}
}
}
} else {
return and__17844__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__26846,callback){
var map__26848 = p__26846;
var map__26848__$1 = ((cljs.core.seq_QMARK_.call(null,map__26848))?cljs.core.apply.call(null,cljs.core.hash_map,map__26848):map__26848);
var file_msg = map__26848__$1;
var namespace = cljs.core.get.call(null,map__26848__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = cljs.core.get.call(null,map__26848__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.reload_file.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Figwheel: Not trying to load file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
setTimeout(((function (out){
return (function (){
return figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
figwheel.client.file_reloading.patch_goog_base.call(null);

cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);
});})(out))
,(0));

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__21542__auto___26935 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21542__auto___26935,out){
return (function (){
var f__21543__auto__ = (function (){var switch__21486__auto__ = ((function (c__21542__auto___26935,out){
return (function (state_26917){
var state_val_26918 = (state_26917[(1)]);
if((state_val_26918 === (7))){
var inst_26901 = (state_26917[(7)]);
var inst_26907 = (state_26917[(2)]);
var inst_26908 = cljs.core.async.put_BANG_.call(null,out,inst_26907);
var inst_26897 = inst_26901;
var state_26917__$1 = (function (){var statearr_26919 = state_26917;
(statearr_26919[(8)] = inst_26908);

(statearr_26919[(9)] = inst_26897);

return statearr_26919;
})();
var statearr_26920_26936 = state_26917__$1;
(statearr_26920_26936[(2)] = null);

(statearr_26920_26936[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26918 === (6))){
var inst_26913 = (state_26917[(2)]);
var state_26917__$1 = state_26917;
var statearr_26921_26937 = state_26917__$1;
(statearr_26921_26937[(2)] = inst_26913);

(statearr_26921_26937[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26918 === (5))){
var inst_26911 = cljs.core.async.close_BANG_.call(null,out);
var state_26917__$1 = state_26917;
var statearr_26922_26938 = state_26917__$1;
(statearr_26922_26938[(2)] = inst_26911);

(statearr_26922_26938[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26918 === (4))){
var inst_26900 = (state_26917[(10)]);
var inst_26905 = figwheel.client.file_reloading.reload_js_file.call(null,inst_26900);
var state_26917__$1 = state_26917;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26917__$1,(7),inst_26905);
} else {
if((state_val_26918 === (3))){
var inst_26915 = (state_26917[(2)]);
var state_26917__$1 = state_26917;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26917__$1,inst_26915);
} else {
if((state_val_26918 === (2))){
var inst_26897 = (state_26917[(9)]);
var inst_26900 = (state_26917[(10)]);
var inst_26900__$1 = cljs.core.nth.call(null,inst_26897,(0),null);
var inst_26901 = cljs.core.nthnext.call(null,inst_26897,(1));
var inst_26902 = (inst_26900__$1 == null);
var inst_26903 = cljs.core.not.call(null,inst_26902);
var state_26917__$1 = (function (){var statearr_26923 = state_26917;
(statearr_26923[(7)] = inst_26901);

(statearr_26923[(10)] = inst_26900__$1);

return statearr_26923;
})();
if(inst_26903){
var statearr_26924_26939 = state_26917__$1;
(statearr_26924_26939[(1)] = (4));

} else {
var statearr_26925_26940 = state_26917__$1;
(statearr_26925_26940[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26918 === (1))){
var inst_26895 = cljs.core.nth.call(null,files,(0),null);
var inst_26896 = cljs.core.nthnext.call(null,files,(1));
var inst_26897 = files;
var state_26917__$1 = (function (){var statearr_26926 = state_26917;
(statearr_26926[(11)] = inst_26896);

(statearr_26926[(12)] = inst_26895);

(statearr_26926[(9)] = inst_26897);

return statearr_26926;
})();
var statearr_26927_26941 = state_26917__$1;
(statearr_26927_26941[(2)] = null);

(statearr_26927_26941[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(c__21542__auto___26935,out))
;
return ((function (switch__21486__auto__,c__21542__auto___26935,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__21487__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__21487__auto____0 = (function (){
var statearr_26931 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26931[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__21487__auto__);

(statearr_26931[(1)] = (1));

return statearr_26931;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__21487__auto____1 = (function (state_26917){
while(true){
var ret_value__21488__auto__ = (function (){try{while(true){
var result__21489__auto__ = switch__21486__auto__.call(null,state_26917);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21489__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21489__auto__;
}
break;
}
}catch (e26932){if((e26932 instanceof Object)){
var ex__21490__auto__ = e26932;
var statearr_26933_26942 = state_26917;
(statearr_26933_26942[(5)] = ex__21490__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26917);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26932;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21488__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26943 = state_26917;
state_26917 = G__26943;
continue;
} else {
return ret_value__21488__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__21487__auto__ = function(state_26917){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__21487__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__21487__auto____1.call(this,state_26917);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__21487__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__21487__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__21487__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__21487__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__21487__auto__;
})()
;})(switch__21486__auto__,c__21542__auto___26935,out))
})();
var state__21544__auto__ = (function (){var statearr_26934 = f__21543__auto__.call(null);
(statearr_26934[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21542__auto___26935);

return statearr_26934;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21544__auto__);
});})(c__21542__auto___26935,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.add_request_url = (function figwheel$client$file_reloading$add_request_url(p__26944,p__26945){
var map__26948 = p__26944;
var map__26948__$1 = ((cljs.core.seq_QMARK_.call(null,map__26948))?cljs.core.apply.call(null,cljs.core.hash_map,map__26948):map__26948);
var opts = map__26948__$1;
var url_rewriter = cljs.core.get.call(null,map__26948__$1,new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838));
var map__26949 = p__26945;
var map__26949__$1 = ((cljs.core.seq_QMARK_.call(null,map__26949))?cljs.core.apply.call(null,cljs.core.hash_map,map__26949):map__26949);
var file_msg = map__26949__$1;
var file = cljs.core.get.call(null,map__26949__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var resolved_path = figwheel.client.file_reloading.resolve_url.call(null,file_msg);
return cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"request-url","request-url",2100346596),(cljs.core.truth_(url_rewriter)?url_rewriter.call(null,resolved_path):resolved_path));
});
figwheel.client.file_reloading.add_request_urls = (function figwheel$client$file_reloading$add_request_urls(opts,files){
return cljs.core.map.call(null,cljs.core.partial.call(null,figwheel.client.file_reloading.add_request_url,opts),files);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__26950){
var map__26953 = p__26950;
var map__26953__$1 = ((cljs.core.seq_QMARK_.call(null,map__26953))?cljs.core.apply.call(null,cljs.core.hash_map,map__26953):map__26953);
var file = cljs.core.get.call(null,map__26953__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var eval_body__$1 = cljs.core.get.call(null,map__26953__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
if(cljs.core.truth_((function (){var and__17844__auto__ = eval_body__$1;
if(cljs.core.truth_(and__17844__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__17844__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return eval(code);
}catch (e26954){var e = e26954;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__26959,p__26960){
var map__27161 = p__26959;
var map__27161__$1 = ((cljs.core.seq_QMARK_.call(null,map__27161))?cljs.core.apply.call(null,cljs.core.hash_map,map__27161):map__27161);
var opts = map__27161__$1;
var load_unchanged_files = cljs.core.get.call(null,map__27161__$1,new cljs.core.Keyword(null,"load-unchanged-files","load-unchanged-files",-1561468704));
var on_jsload = cljs.core.get.call(null,map__27161__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var before_jsload = cljs.core.get.call(null,map__27161__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var map__27162 = p__26960;
var map__27162__$1 = ((cljs.core.seq_QMARK_.call(null,map__27162))?cljs.core.apply.call(null,cljs.core.hash_map,map__27162):map__27162);
var msg = map__27162__$1;
var files = cljs.core.get.call(null,map__27162__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var c__21542__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21542__auto__,map__27161,map__27161__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__27162,map__27162__$1,msg,files){
return (function (){
var f__21543__auto__ = (function (){var switch__21486__auto__ = ((function (c__21542__auto__,map__27161,map__27161__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__27162,map__27162__$1,msg,files){
return (function (state_27286){
var state_val_27287 = (state_27286[(1)]);
if((state_val_27287 === (7))){
var inst_27175 = (state_27286[(7)]);
var inst_27173 = (state_27286[(8)]);
var inst_27174 = (state_27286[(9)]);
var inst_27176 = (state_27286[(10)]);
var inst_27181 = cljs.core._nth.call(null,inst_27174,inst_27176);
var inst_27182 = figwheel.client.file_reloading.eval_body.call(null,inst_27181);
var inst_27183 = (inst_27176 + (1));
var tmp27288 = inst_27175;
var tmp27289 = inst_27173;
var tmp27290 = inst_27174;
var inst_27173__$1 = tmp27289;
var inst_27174__$1 = tmp27290;
var inst_27175__$1 = tmp27288;
var inst_27176__$1 = inst_27183;
var state_27286__$1 = (function (){var statearr_27291 = state_27286;
(statearr_27291[(11)] = inst_27182);

(statearr_27291[(7)] = inst_27175__$1);

(statearr_27291[(8)] = inst_27173__$1);

(statearr_27291[(9)] = inst_27174__$1);

(statearr_27291[(10)] = inst_27176__$1);

return statearr_27291;
})();
var statearr_27292_27361 = state_27286__$1;
(statearr_27292_27361[(2)] = null);

(statearr_27292_27361[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27287 === (20))){
var inst_27218 = (state_27286[(12)]);
var inst_27222 = (state_27286[(13)]);
var inst_27223 = (state_27286[(14)]);
var inst_27219 = (state_27286[(15)]);
var inst_27225 = (state_27286[(16)]);
var inst_27228 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_27230 = (function (){var files_not_loaded = inst_27225;
var res = inst_27223;
var res_SINGLEQUOTE_ = inst_27222;
var files_SINGLEQUOTE_ = inst_27219;
var all_files = inst_27218;
return ((function (files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_27218,inst_27222,inst_27223,inst_27219,inst_27225,inst_27228,state_val_27287,c__21542__auto__,map__27161,map__27161__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__27162,map__27162__$1,msg,files){
return (function (p__27229){
var map__27293 = p__27229;
var map__27293__$1 = ((cljs.core.seq_QMARK_.call(null,map__27293))?cljs.core.apply.call(null,cljs.core.hash_map,map__27293):map__27293);
var file = cljs.core.get.call(null,map__27293__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var namespace = cljs.core.get.call(null,map__27293__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.ns_to_js_file.call(null,namespace);
} else {
return file;
}
});
;})(files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_27218,inst_27222,inst_27223,inst_27219,inst_27225,inst_27228,state_val_27287,c__21542__auto__,map__27161,map__27161__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__27162,map__27162__$1,msg,files))
})();
var inst_27231 = cljs.core.map.call(null,inst_27230,inst_27223);
var inst_27232 = cljs.core.pr_str.call(null,inst_27231);
var inst_27233 = figwheel.client.utils.log.call(null,inst_27232);
var inst_27234 = (function (){var files_not_loaded = inst_27225;
var res = inst_27223;
var res_SINGLEQUOTE_ = inst_27222;
var files_SINGLEQUOTE_ = inst_27219;
var all_files = inst_27218;
return ((function (files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_27218,inst_27222,inst_27223,inst_27219,inst_27225,inst_27228,inst_27230,inst_27231,inst_27232,inst_27233,state_val_27287,c__21542__auto__,map__27161,map__27161__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__27162,map__27162__$1,msg,files){
return (function (){
return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_27218,inst_27222,inst_27223,inst_27219,inst_27225,inst_27228,inst_27230,inst_27231,inst_27232,inst_27233,state_val_27287,c__21542__auto__,map__27161,map__27161__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__27162,map__27162__$1,msg,files))
})();
var inst_27235 = setTimeout(inst_27234,(10));
var state_27286__$1 = (function (){var statearr_27294 = state_27286;
(statearr_27294[(17)] = inst_27233);

(statearr_27294[(18)] = inst_27228);

return statearr_27294;
})();
var statearr_27295_27362 = state_27286__$1;
(statearr_27295_27362[(2)] = inst_27235);

(statearr_27295_27362[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27287 === (27))){
var inst_27245 = (state_27286[(19)]);
var state_27286__$1 = state_27286;
var statearr_27296_27363 = state_27286__$1;
(statearr_27296_27363[(2)] = inst_27245);

(statearr_27296_27363[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27287 === (1))){
var inst_27165 = (state_27286[(20)]);
var inst_27163 = before_jsload.call(null,files);
var inst_27164 = (function (){return ((function (inst_27165,inst_27163,state_val_27287,c__21542__auto__,map__27161,map__27161__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__27162,map__27162__$1,msg,files){
return (function (p1__26955_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__26955_SHARP_);
});
;})(inst_27165,inst_27163,state_val_27287,c__21542__auto__,map__27161,map__27161__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__27162,map__27162__$1,msg,files))
})();
var inst_27165__$1 = cljs.core.filter.call(null,inst_27164,files);
var inst_27166 = cljs.core.not_empty.call(null,inst_27165__$1);
var state_27286__$1 = (function (){var statearr_27297 = state_27286;
(statearr_27297[(21)] = inst_27163);

(statearr_27297[(20)] = inst_27165__$1);

return statearr_27297;
})();
if(cljs.core.truth_(inst_27166)){
var statearr_27298_27364 = state_27286__$1;
(statearr_27298_27364[(1)] = (2));

} else {
var statearr_27299_27365 = state_27286__$1;
(statearr_27299_27365[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27287 === (24))){
var state_27286__$1 = state_27286;
var statearr_27300_27366 = state_27286__$1;
(statearr_27300_27366[(2)] = null);

(statearr_27300_27366[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27287 === (4))){
var inst_27210 = (state_27286[(2)]);
var inst_27211 = (function (){return ((function (inst_27210,state_val_27287,c__21542__auto__,map__27161,map__27161__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__27162,map__27162__$1,msg,files){
return (function (p1__26956_SHARP_){
var and__17844__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__26956_SHARP_);
if(cljs.core.truth_(and__17844__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__26956_SHARP_));
} else {
return and__17844__auto__;
}
});
;})(inst_27210,state_val_27287,c__21542__auto__,map__27161,map__27161__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__27162,map__27162__$1,msg,files))
})();
var inst_27212 = cljs.core.filter.call(null,inst_27211,files);
var state_27286__$1 = (function (){var statearr_27301 = state_27286;
(statearr_27301[(22)] = inst_27212);

(statearr_27301[(23)] = inst_27210);

return statearr_27301;
})();
if(cljs.core.truth_(load_unchanged_files)){
var statearr_27302_27367 = state_27286__$1;
(statearr_27302_27367[(1)] = (16));

} else {
var statearr_27303_27368 = state_27286__$1;
(statearr_27303_27368[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27287 === (15))){
var inst_27200 = (state_27286[(2)]);
var state_27286__$1 = state_27286;
var statearr_27304_27369 = state_27286__$1;
(statearr_27304_27369[(2)] = inst_27200);

(statearr_27304_27369[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27287 === (21))){
var state_27286__$1 = state_27286;
var statearr_27305_27370 = state_27286__$1;
(statearr_27305_27370[(2)] = null);

(statearr_27305_27370[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27287 === (31))){
var inst_27253 = (state_27286[(24)]);
var inst_27263 = (state_27286[(2)]);
var inst_27264 = cljs.core.not_empty.call(null,inst_27253);
var state_27286__$1 = (function (){var statearr_27306 = state_27286;
(statearr_27306[(25)] = inst_27263);

return statearr_27306;
})();
if(cljs.core.truth_(inst_27264)){
var statearr_27307_27371 = state_27286__$1;
(statearr_27307_27371[(1)] = (32));

} else {
var statearr_27308_27372 = state_27286__$1;
(statearr_27308_27372[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27287 === (32))){
var inst_27253 = (state_27286[(24)]);
var inst_27266 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_27253);
var inst_27267 = cljs.core.pr_str.call(null,inst_27266);
var inst_27268 = [cljs.core.str("file didn't change: "),cljs.core.str(inst_27267)].join('');
var inst_27269 = figwheel.client.utils.log.call(null,inst_27268);
var state_27286__$1 = state_27286;
var statearr_27309_27373 = state_27286__$1;
(statearr_27309_27373[(2)] = inst_27269);

(statearr_27309_27373[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27287 === (33))){
var state_27286__$1 = state_27286;
var statearr_27310_27374 = state_27286__$1;
(statearr_27310_27374[(2)] = null);

(statearr_27310_27374[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27287 === (13))){
var inst_27186 = (state_27286[(26)]);
var inst_27190 = cljs.core.chunk_first.call(null,inst_27186);
var inst_27191 = cljs.core.chunk_rest.call(null,inst_27186);
var inst_27192 = cljs.core.count.call(null,inst_27190);
var inst_27173 = inst_27191;
var inst_27174 = inst_27190;
var inst_27175 = inst_27192;
var inst_27176 = (0);
var state_27286__$1 = (function (){var statearr_27311 = state_27286;
(statearr_27311[(7)] = inst_27175);

(statearr_27311[(8)] = inst_27173);

(statearr_27311[(9)] = inst_27174);

(statearr_27311[(10)] = inst_27176);

return statearr_27311;
})();
var statearr_27312_27375 = state_27286__$1;
(statearr_27312_27375[(2)] = null);

(statearr_27312_27375[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27287 === (22))){
var inst_27225 = (state_27286[(16)]);
var inst_27238 = (state_27286[(2)]);
var inst_27239 = cljs.core.not_empty.call(null,inst_27225);
var state_27286__$1 = (function (){var statearr_27313 = state_27286;
(statearr_27313[(27)] = inst_27238);

return statearr_27313;
})();
if(cljs.core.truth_(inst_27239)){
var statearr_27314_27376 = state_27286__$1;
(statearr_27314_27376[(1)] = (23));

} else {
var statearr_27315_27377 = state_27286__$1;
(statearr_27315_27377[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27287 === (36))){
var state_27286__$1 = state_27286;
var statearr_27316_27378 = state_27286__$1;
(statearr_27316_27378[(2)] = null);

(statearr_27316_27378[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27287 === (29))){
var inst_27254 = (state_27286[(28)]);
var inst_27257 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_27254);
var inst_27258 = cljs.core.pr_str.call(null,inst_27257);
var inst_27259 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_27258)].join('');
var inst_27260 = figwheel.client.utils.log.call(null,inst_27259);
var state_27286__$1 = state_27286;
var statearr_27317_27379 = state_27286__$1;
(statearr_27317_27379[(2)] = inst_27260);

(statearr_27317_27379[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27287 === (6))){
var inst_27207 = (state_27286[(2)]);
var state_27286__$1 = state_27286;
var statearr_27318_27380 = state_27286__$1;
(statearr_27318_27380[(2)] = inst_27207);

(statearr_27318_27380[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27287 === (28))){
var inst_27254 = (state_27286[(28)]);
var inst_27251 = (state_27286[(2)]);
var inst_27252 = cljs.core.get.call(null,inst_27251,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_27253 = cljs.core.get.call(null,inst_27251,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932));
var inst_27254__$1 = cljs.core.get.call(null,inst_27251,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_27255 = cljs.core.not_empty.call(null,inst_27254__$1);
var state_27286__$1 = (function (){var statearr_27319 = state_27286;
(statearr_27319[(24)] = inst_27253);

(statearr_27319[(29)] = inst_27252);

(statearr_27319[(28)] = inst_27254__$1);

return statearr_27319;
})();
if(cljs.core.truth_(inst_27255)){
var statearr_27320_27381 = state_27286__$1;
(statearr_27320_27381[(1)] = (29));

} else {
var statearr_27321_27382 = state_27286__$1;
(statearr_27321_27382[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27287 === (25))){
var inst_27284 = (state_27286[(2)]);
var state_27286__$1 = state_27286;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27286__$1,inst_27284);
} else {
if((state_val_27287 === (34))){
var inst_27252 = (state_27286[(29)]);
var inst_27272 = (state_27286[(2)]);
var inst_27273 = cljs.core.not_empty.call(null,inst_27252);
var state_27286__$1 = (function (){var statearr_27322 = state_27286;
(statearr_27322[(30)] = inst_27272);

return statearr_27322;
})();
if(cljs.core.truth_(inst_27273)){
var statearr_27323_27383 = state_27286__$1;
(statearr_27323_27383[(1)] = (35));

} else {
var statearr_27324_27384 = state_27286__$1;
(statearr_27324_27384[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27287 === (17))){
var inst_27212 = (state_27286[(22)]);
var state_27286__$1 = state_27286;
var statearr_27325_27385 = state_27286__$1;
(statearr_27325_27385[(2)] = inst_27212);

(statearr_27325_27385[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27287 === (3))){
var state_27286__$1 = state_27286;
var statearr_27326_27386 = state_27286__$1;
(statearr_27326_27386[(2)] = null);

(statearr_27326_27386[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27287 === (12))){
var inst_27203 = (state_27286[(2)]);
var state_27286__$1 = state_27286;
var statearr_27327_27387 = state_27286__$1;
(statearr_27327_27387[(2)] = inst_27203);

(statearr_27327_27387[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27287 === (2))){
var inst_27165 = (state_27286[(20)]);
var inst_27172 = cljs.core.seq.call(null,inst_27165);
var inst_27173 = inst_27172;
var inst_27174 = null;
var inst_27175 = (0);
var inst_27176 = (0);
var state_27286__$1 = (function (){var statearr_27328 = state_27286;
(statearr_27328[(7)] = inst_27175);

(statearr_27328[(8)] = inst_27173);

(statearr_27328[(9)] = inst_27174);

(statearr_27328[(10)] = inst_27176);

return statearr_27328;
})();
var statearr_27329_27388 = state_27286__$1;
(statearr_27329_27388[(2)] = null);

(statearr_27329_27388[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27287 === (23))){
var inst_27218 = (state_27286[(12)]);
var inst_27222 = (state_27286[(13)]);
var inst_27223 = (state_27286[(14)]);
var inst_27245 = (state_27286[(19)]);
var inst_27219 = (state_27286[(15)]);
var inst_27225 = (state_27286[(16)]);
var inst_27241 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_27244 = (function (){var files_not_loaded = inst_27225;
var res = inst_27223;
var res_SINGLEQUOTE_ = inst_27222;
var files_SINGLEQUOTE_ = inst_27219;
var all_files = inst_27218;
return ((function (files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_27218,inst_27222,inst_27223,inst_27245,inst_27219,inst_27225,inst_27241,state_val_27287,c__21542__auto__,map__27161,map__27161__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__27162,map__27162__$1,msg,files){
return (function (p__27243){
var map__27330 = p__27243;
var map__27330__$1 = ((cljs.core.seq_QMARK_.call(null,map__27330))?cljs.core.apply.call(null,cljs.core.hash_map,map__27330):map__27330);
var meta_data = cljs.core.get.call(null,map__27330__$1,new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.contains_QMARK_.call(null,meta_data,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
if((cljs.core.contains_QMARK_.call(null,meta_data,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932))) && (cljs.core.not.call(null,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932).cljs$core$IFn$_invoke$arity$1(meta_data)))){
return new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
}
});
;})(files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_27218,inst_27222,inst_27223,inst_27245,inst_27219,inst_27225,inst_27241,state_val_27287,c__21542__auto__,map__27161,map__27161__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__27162,map__27162__$1,msg,files))
})();
var inst_27245__$1 = cljs.core.group_by.call(null,inst_27244,inst_27225);
var inst_27246 = cljs.core.seq_QMARK_.call(null,inst_27245__$1);
var state_27286__$1 = (function (){var statearr_27331 = state_27286;
(statearr_27331[(31)] = inst_27241);

(statearr_27331[(19)] = inst_27245__$1);

return statearr_27331;
})();
if(inst_27246){
var statearr_27332_27389 = state_27286__$1;
(statearr_27332_27389[(1)] = (26));

} else {
var statearr_27333_27390 = state_27286__$1;
(statearr_27333_27390[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27287 === (35))){
var inst_27252 = (state_27286[(29)]);
var inst_27275 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_27252);
var inst_27276 = cljs.core.pr_str.call(null,inst_27275);
var inst_27277 = [cljs.core.str("not required: "),cljs.core.str(inst_27276)].join('');
var inst_27278 = figwheel.client.utils.log.call(null,inst_27277);
var state_27286__$1 = state_27286;
var statearr_27334_27391 = state_27286__$1;
(statearr_27334_27391[(2)] = inst_27278);

(statearr_27334_27391[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27287 === (19))){
var inst_27218 = (state_27286[(12)]);
var inst_27222 = (state_27286[(13)]);
var inst_27223 = (state_27286[(14)]);
var inst_27219 = (state_27286[(15)]);
var inst_27222__$1 = (state_27286[(2)]);
var inst_27223__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_27222__$1);
var inst_27224 = (function (){var res = inst_27223__$1;
var res_SINGLEQUOTE_ = inst_27222__$1;
var files_SINGLEQUOTE_ = inst_27219;
var all_files = inst_27218;
return ((function (res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_27218,inst_27222,inst_27223,inst_27219,inst_27222__$1,inst_27223__$1,state_val_27287,c__21542__auto__,map__27161,map__27161__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__27162,map__27162__$1,msg,files){
return (function (p1__26958_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__26958_SHARP_));
});
;})(res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_27218,inst_27222,inst_27223,inst_27219,inst_27222__$1,inst_27223__$1,state_val_27287,c__21542__auto__,map__27161,map__27161__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__27162,map__27162__$1,msg,files))
})();
var inst_27225 = cljs.core.filter.call(null,inst_27224,inst_27222__$1);
var inst_27226 = cljs.core.not_empty.call(null,inst_27223__$1);
var state_27286__$1 = (function (){var statearr_27335 = state_27286;
(statearr_27335[(13)] = inst_27222__$1);

(statearr_27335[(14)] = inst_27223__$1);

(statearr_27335[(16)] = inst_27225);

return statearr_27335;
})();
if(cljs.core.truth_(inst_27226)){
var statearr_27336_27392 = state_27286__$1;
(statearr_27336_27392[(1)] = (20));

} else {
var statearr_27337_27393 = state_27286__$1;
(statearr_27337_27393[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27287 === (11))){
var state_27286__$1 = state_27286;
var statearr_27338_27394 = state_27286__$1;
(statearr_27338_27394[(2)] = null);

(statearr_27338_27394[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27287 === (9))){
var inst_27205 = (state_27286[(2)]);
var state_27286__$1 = state_27286;
var statearr_27339_27395 = state_27286__$1;
(statearr_27339_27395[(2)] = inst_27205);

(statearr_27339_27395[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27287 === (5))){
var inst_27175 = (state_27286[(7)]);
var inst_27176 = (state_27286[(10)]);
var inst_27178 = (inst_27176 < inst_27175);
var inst_27179 = inst_27178;
var state_27286__$1 = state_27286;
if(cljs.core.truth_(inst_27179)){
var statearr_27340_27396 = state_27286__$1;
(statearr_27340_27396[(1)] = (7));

} else {
var statearr_27341_27397 = state_27286__$1;
(statearr_27341_27397[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27287 === (14))){
var inst_27186 = (state_27286[(26)]);
var inst_27195 = cljs.core.first.call(null,inst_27186);
var inst_27196 = figwheel.client.file_reloading.eval_body.call(null,inst_27195);
var inst_27197 = cljs.core.next.call(null,inst_27186);
var inst_27173 = inst_27197;
var inst_27174 = null;
var inst_27175 = (0);
var inst_27176 = (0);
var state_27286__$1 = (function (){var statearr_27342 = state_27286;
(statearr_27342[(32)] = inst_27196);

(statearr_27342[(7)] = inst_27175);

(statearr_27342[(8)] = inst_27173);

(statearr_27342[(9)] = inst_27174);

(statearr_27342[(10)] = inst_27176);

return statearr_27342;
})();
var statearr_27343_27398 = state_27286__$1;
(statearr_27343_27398[(2)] = null);

(statearr_27343_27398[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27287 === (26))){
var inst_27245 = (state_27286[(19)]);
var inst_27248 = cljs.core.apply.call(null,cljs.core.hash_map,inst_27245);
var state_27286__$1 = state_27286;
var statearr_27344_27399 = state_27286__$1;
(statearr_27344_27399[(2)] = inst_27248);

(statearr_27344_27399[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27287 === (16))){
var inst_27212 = (state_27286[(22)]);
var inst_27214 = (function (){var all_files = inst_27212;
return ((function (all_files,inst_27212,state_val_27287,c__21542__auto__,map__27161,map__27161__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__27162,map__27162__$1,msg,files){
return (function (p1__26957_SHARP_){
return cljs.core.update_in.call(null,p1__26957_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157)], null),cljs.core.dissoc,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932));
});
;})(all_files,inst_27212,state_val_27287,c__21542__auto__,map__27161,map__27161__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__27162,map__27162__$1,msg,files))
})();
var inst_27215 = cljs.core.map.call(null,inst_27214,inst_27212);
var state_27286__$1 = state_27286;
var statearr_27345_27400 = state_27286__$1;
(statearr_27345_27400[(2)] = inst_27215);

(statearr_27345_27400[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27287 === (30))){
var state_27286__$1 = state_27286;
var statearr_27346_27401 = state_27286__$1;
(statearr_27346_27401[(2)] = null);

(statearr_27346_27401[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27287 === (10))){
var inst_27186 = (state_27286[(26)]);
var inst_27188 = cljs.core.chunked_seq_QMARK_.call(null,inst_27186);
var state_27286__$1 = state_27286;
if(inst_27188){
var statearr_27347_27402 = state_27286__$1;
(statearr_27347_27402[(1)] = (13));

} else {
var statearr_27348_27403 = state_27286__$1;
(statearr_27348_27403[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27287 === (18))){
var inst_27218 = (state_27286[(12)]);
var inst_27219 = (state_27286[(15)]);
var inst_27218__$1 = (state_27286[(2)]);
var inst_27219__$1 = figwheel.client.file_reloading.add_request_urls.call(null,opts,inst_27218__$1);
var inst_27220 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_27219__$1);
var state_27286__$1 = (function (){var statearr_27349 = state_27286;
(statearr_27349[(12)] = inst_27218__$1);

(statearr_27349[(15)] = inst_27219__$1);

return statearr_27349;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27286__$1,(19),inst_27220);
} else {
if((state_val_27287 === (37))){
var inst_27281 = (state_27286[(2)]);
var state_27286__$1 = state_27286;
var statearr_27350_27404 = state_27286__$1;
(statearr_27350_27404[(2)] = inst_27281);

(statearr_27350_27404[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27287 === (8))){
var inst_27173 = (state_27286[(8)]);
var inst_27186 = (state_27286[(26)]);
var inst_27186__$1 = cljs.core.seq.call(null,inst_27173);
var state_27286__$1 = (function (){var statearr_27351 = state_27286;
(statearr_27351[(26)] = inst_27186__$1);

return statearr_27351;
})();
if(inst_27186__$1){
var statearr_27352_27405 = state_27286__$1;
(statearr_27352_27405[(1)] = (10));

} else {
var statearr_27353_27406 = state_27286__$1;
(statearr_27353_27406[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__21542__auto__,map__27161,map__27161__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__27162,map__27162__$1,msg,files))
;
return ((function (switch__21486__auto__,c__21542__auto__,map__27161,map__27161__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__27162,map__27162__$1,msg,files){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__21487__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__21487__auto____0 = (function (){
var statearr_27357 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27357[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__21487__auto__);

(statearr_27357[(1)] = (1));

return statearr_27357;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__21487__auto____1 = (function (state_27286){
while(true){
var ret_value__21488__auto__ = (function (){try{while(true){
var result__21489__auto__ = switch__21486__auto__.call(null,state_27286);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21489__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21489__auto__;
}
break;
}
}catch (e27358){if((e27358 instanceof Object)){
var ex__21490__auto__ = e27358;
var statearr_27359_27407 = state_27286;
(statearr_27359_27407[(5)] = ex__21490__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27286);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27358;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21488__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27408 = state_27286;
state_27286 = G__27408;
continue;
} else {
return ret_value__21488__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__21487__auto__ = function(state_27286){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__21487__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__21487__auto____1.call(this,state_27286);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__21487__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__21487__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__21487__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__21487__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__21487__auto__;
})()
;})(switch__21486__auto__,c__21542__auto__,map__27161,map__27161__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__27162,map__27162__$1,msg,files))
})();
var state__21544__auto__ = (function (){var statearr_27360 = f__21543__auto__.call(null);
(statearr_27360[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21542__auto__);

return statearr_27360;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21544__auto__);
});})(c__21542__auto__,map__27161,map__27161__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__27162,map__27162__$1,msg,files))
);

return c__21542__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__27411,link){
var map__27413 = p__27411;
var map__27413__$1 = ((cljs.core.seq_QMARK_.call(null,map__27413))?cljs.core.apply.call(null,cljs.core.hash_map,map__27413):map__27413);
var file = cljs.core.get.call(null,map__27413__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4126__auto__ = link.href;
if(cljs.core.truth_(temp__4126__auto__)){
var link_href = temp__4126__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4126__auto__,map__27413,map__27413__$1,file){
return (function (p1__27409_SHARP_,p2__27410_SHARP_){
if(cljs.core._EQ_.call(null,p1__27409_SHARP_,p2__27410_SHARP_)){
return p1__27409_SHARP_;
} else {
return false;
}
});})(link_href,temp__4126__auto__,map__27413,map__27413__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4126__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__27417){
var map__27418 = p__27417;
var map__27418__$1 = ((cljs.core.seq_QMARK_.call(null,map__27418))?cljs.core.apply.call(null,cljs.core.hash_map,map__27418):map__27418);
var current_url_length = cljs.core.get.call(null,map__27418__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
var match_length = cljs.core.get.call(null,map__27418__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__27414_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__27414_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4126__auto__)){
var res = temp__4126__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.add_link_to_doc = (function() {
var figwheel$client$file_reloading$add_link_to_doc = null;
var figwheel$client$file_reloading$add_link_to_doc__1 = (function (new_link){
return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});
var figwheel$client$file_reloading$add_link_to_doc__2 = (function (orig_link,klone){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
return parent.removeChild(orig_link);
});})(parent))
,(300));
});
figwheel$client$file_reloading$add_link_to_doc = function(orig_link,klone){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$add_link_to_doc__1.call(this,orig_link);
case 2:
return figwheel$client$file_reloading$add_link_to_doc__2.call(this,orig_link,klone);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$add_link_to_doc__1;
figwheel$client$file_reloading$add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = figwheel$client$file_reloading$add_link_to_doc__2;
return figwheel$client$file_reloading$add_link_to_doc;
})()
;
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__27419){
var map__27421 = p__27419;
var map__27421__$1 = ((cljs.core.seq_QMARK_.call(null,map__27421))?cljs.core.apply.call(null,cljs.core.hash_map,map__27421):map__27421);
var f_data = map__27421__$1;
var request_url = cljs.core.get.call(null,map__27421__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var file = cljs.core.get.call(null,map__27421__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4124__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4124__auto__)){
var link = temp__4124__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return figwheel.client.file_reloading.add_link_to_doc.call(null,figwheel.client.file_reloading.create_link.call(null,(function (){var or__17856__auto__ = request_url;
if(cljs.core.truth_(or__17856__auto__)){
return or__17856__auto__;
} else {
return file;
}
})()));
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__27422,files_msg){
var map__27444 = p__27422;
var map__27444__$1 = ((cljs.core.seq_QMARK_.call(null,map__27444))?cljs.core.apply.call(null,cljs.core.hash_map,map__27444):map__27444);
var opts = map__27444__$1;
var on_cssload = cljs.core.get.call(null,map__27444__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__27445_27465 = cljs.core.seq.call(null,figwheel.client.file_reloading.add_request_urls.call(null,opts,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__27446_27466 = null;
var count__27447_27467 = (0);
var i__27448_27468 = (0);
while(true){
if((i__27448_27468 < count__27447_27467)){
var f_27469 = cljs.core._nth.call(null,chunk__27446_27466,i__27448_27468);
figwheel.client.file_reloading.reload_css_file.call(null,f_27469);

var G__27470 = seq__27445_27465;
var G__27471 = chunk__27446_27466;
var G__27472 = count__27447_27467;
var G__27473 = (i__27448_27468 + (1));
seq__27445_27465 = G__27470;
chunk__27446_27466 = G__27471;
count__27447_27467 = G__27472;
i__27448_27468 = G__27473;
continue;
} else {
var temp__4126__auto___27474 = cljs.core.seq.call(null,seq__27445_27465);
if(temp__4126__auto___27474){
var seq__27445_27475__$1 = temp__4126__auto___27474;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27445_27475__$1)){
var c__18641__auto___27476 = cljs.core.chunk_first.call(null,seq__27445_27475__$1);
var G__27477 = cljs.core.chunk_rest.call(null,seq__27445_27475__$1);
var G__27478 = c__18641__auto___27476;
var G__27479 = cljs.core.count.call(null,c__18641__auto___27476);
var G__27480 = (0);
seq__27445_27465 = G__27477;
chunk__27446_27466 = G__27478;
count__27447_27467 = G__27479;
i__27448_27468 = G__27480;
continue;
} else {
var f_27481 = cljs.core.first.call(null,seq__27445_27475__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_27481);

var G__27482 = cljs.core.next.call(null,seq__27445_27475__$1);
var G__27483 = null;
var G__27484 = (0);
var G__27485 = (0);
seq__27445_27465 = G__27482;
chunk__27446_27466 = G__27483;
count__27447_27467 = G__27484;
i__27448_27468 = G__27485;
continue;
}
} else {
}
}
break;
}

var c__21542__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21542__auto__,map__27444,map__27444__$1,opts,on_cssload){
return (function (){
var f__21543__auto__ = (function (){var switch__21486__auto__ = ((function (c__21542__auto__,map__27444,map__27444__$1,opts,on_cssload){
return (function (state_27455){
var state_val_27456 = (state_27455[(1)]);
if((state_val_27456 === (2))){
var inst_27451 = (state_27455[(2)]);
var inst_27452 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg);
var inst_27453 = on_cssload.call(null,inst_27452);
var state_27455__$1 = (function (){var statearr_27457 = state_27455;
(statearr_27457[(7)] = inst_27451);

return statearr_27457;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27455__$1,inst_27453);
} else {
if((state_val_27456 === (1))){
var inst_27449 = cljs.core.async.timeout.call(null,(100));
var state_27455__$1 = state_27455;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27455__$1,(2),inst_27449);
} else {
return null;
}
}
});})(c__21542__auto__,map__27444,map__27444__$1,opts,on_cssload))
;
return ((function (switch__21486__auto__,c__21542__auto__,map__27444,map__27444__$1,opts,on_cssload){
return (function() {
var figwheel$client$file_reloading$reload_css_files_$_state_machine__21487__auto__ = null;
var figwheel$client$file_reloading$reload_css_files_$_state_machine__21487__auto____0 = (function (){
var statearr_27461 = [null,null,null,null,null,null,null,null];
(statearr_27461[(0)] = figwheel$client$file_reloading$reload_css_files_$_state_machine__21487__auto__);

(statearr_27461[(1)] = (1));

return statearr_27461;
});
var figwheel$client$file_reloading$reload_css_files_$_state_machine__21487__auto____1 = (function (state_27455){
while(true){
var ret_value__21488__auto__ = (function (){try{while(true){
var result__21489__auto__ = switch__21486__auto__.call(null,state_27455);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21489__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21489__auto__;
}
break;
}
}catch (e27462){if((e27462 instanceof Object)){
var ex__21490__auto__ = e27462;
var statearr_27463_27486 = state_27455;
(statearr_27463_27486[(5)] = ex__21490__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27455);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27462;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21488__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27487 = state_27455;
state_27455 = G__27487;
continue;
} else {
return ret_value__21488__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_css_files_$_state_machine__21487__auto__ = function(state_27455){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_css_files_$_state_machine__21487__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_css_files_$_state_machine__21487__auto____1.call(this,state_27455);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_css_files_$_state_machine__21487__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_css_files_$_state_machine__21487__auto____0;
figwheel$client$file_reloading$reload_css_files_$_state_machine__21487__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_css_files_$_state_machine__21487__auto____1;
return figwheel$client$file_reloading$reload_css_files_$_state_machine__21487__auto__;
})()
;})(switch__21486__auto__,c__21542__auto__,map__27444,map__27444__$1,opts,on_cssload))
})();
var state__21544__auto__ = (function (){var statearr_27464 = f__21543__auto__.call(null);
(statearr_27464[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21542__auto__);

return statearr_27464;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21544__auto__);
});})(c__21542__auto__,map__27444,map__27444__$1,opts,on_cssload))
);

return c__21542__auto__;
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1430425800853