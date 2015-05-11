// Compiled by ClojureScript 0.0-3165 {}
goog.provide('figwheel.client.heads_up');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('clojure.string');

/**
 * @param {...*} var_args
 */
figwheel.client.heads_up.node = (function() { 
var figwheel$client$heads_up$node__delegate = function (t,attrs,children){
var e = document.createElement(cljs.core.name.call(null,t));
var seq__26527_26535 = cljs.core.seq.call(null,cljs.core.keys.call(null,attrs));
var chunk__26528_26536 = null;
var count__26529_26537 = (0);
var i__26530_26538 = (0);
while(true){
if((i__26530_26538 < count__26529_26537)){
var k_26539 = cljs.core._nth.call(null,chunk__26528_26536,i__26530_26538);
e.setAttribute(cljs.core.name.call(null,k_26539),cljs.core.get.call(null,attrs,k_26539));

var G__26540 = seq__26527_26535;
var G__26541 = chunk__26528_26536;
var G__26542 = count__26529_26537;
var G__26543 = (i__26530_26538 + (1));
seq__26527_26535 = G__26540;
chunk__26528_26536 = G__26541;
count__26529_26537 = G__26542;
i__26530_26538 = G__26543;
continue;
} else {
var temp__4126__auto___26544 = cljs.core.seq.call(null,seq__26527_26535);
if(temp__4126__auto___26544){
var seq__26527_26545__$1 = temp__4126__auto___26544;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26527_26545__$1)){
var c__18641__auto___26546 = cljs.core.chunk_first.call(null,seq__26527_26545__$1);
var G__26547 = cljs.core.chunk_rest.call(null,seq__26527_26545__$1);
var G__26548 = c__18641__auto___26546;
var G__26549 = cljs.core.count.call(null,c__18641__auto___26546);
var G__26550 = (0);
seq__26527_26535 = G__26547;
chunk__26528_26536 = G__26548;
count__26529_26537 = G__26549;
i__26530_26538 = G__26550;
continue;
} else {
var k_26551 = cljs.core.first.call(null,seq__26527_26545__$1);
e.setAttribute(cljs.core.name.call(null,k_26551),cljs.core.get.call(null,attrs,k_26551));

var G__26552 = cljs.core.next.call(null,seq__26527_26545__$1);
var G__26553 = null;
var G__26554 = (0);
var G__26555 = (0);
seq__26527_26535 = G__26552;
chunk__26528_26536 = G__26553;
count__26529_26537 = G__26554;
i__26530_26538 = G__26555;
continue;
}
} else {
}
}
break;
}

var seq__26531_26556 = cljs.core.seq.call(null,children);
var chunk__26532_26557 = null;
var count__26533_26558 = (0);
var i__26534_26559 = (0);
while(true){
if((i__26534_26559 < count__26533_26558)){
var ch_26560 = cljs.core._nth.call(null,chunk__26532_26557,i__26534_26559);
e.appendChild(ch_26560);

var G__26561 = seq__26531_26556;
var G__26562 = chunk__26532_26557;
var G__26563 = count__26533_26558;
var G__26564 = (i__26534_26559 + (1));
seq__26531_26556 = G__26561;
chunk__26532_26557 = G__26562;
count__26533_26558 = G__26563;
i__26534_26559 = G__26564;
continue;
} else {
var temp__4126__auto___26565 = cljs.core.seq.call(null,seq__26531_26556);
if(temp__4126__auto___26565){
var seq__26531_26566__$1 = temp__4126__auto___26565;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26531_26566__$1)){
var c__18641__auto___26567 = cljs.core.chunk_first.call(null,seq__26531_26566__$1);
var G__26568 = cljs.core.chunk_rest.call(null,seq__26531_26566__$1);
var G__26569 = c__18641__auto___26567;
var G__26570 = cljs.core.count.call(null,c__18641__auto___26567);
var G__26571 = (0);
seq__26531_26556 = G__26568;
chunk__26532_26557 = G__26569;
count__26533_26558 = G__26570;
i__26534_26559 = G__26571;
continue;
} else {
var ch_26572 = cljs.core.first.call(null,seq__26531_26566__$1);
e.appendChild(ch_26572);

var G__26573 = cljs.core.next.call(null,seq__26531_26566__$1);
var G__26574 = null;
var G__26575 = (0);
var G__26576 = (0);
seq__26531_26556 = G__26573;
chunk__26532_26557 = G__26574;
count__26533_26558 = G__26575;
i__26534_26559 = G__26576;
continue;
}
} else {
}
}
break;
}

return e;
};
var figwheel$client$heads_up$node = function (t,attrs,var_args){
var children = null;
if (arguments.length > 2) {
var G__26577__i = 0, G__26577__a = new Array(arguments.length -  2);
while (G__26577__i < G__26577__a.length) {G__26577__a[G__26577__i] = arguments[G__26577__i + 2]; ++G__26577__i;}
  children = new cljs.core.IndexedSeq(G__26577__a,0);
} 
return figwheel$client$heads_up$node__delegate.call(this,t,attrs,children);};
figwheel$client$heads_up$node.cljs$lang$maxFixedArity = 2;
figwheel$client$heads_up$node.cljs$lang$applyTo = (function (arglist__26578){
var t = cljs.core.first(arglist__26578);
arglist__26578 = cljs.core.next(arglist__26578);
var attrs = cljs.core.first(arglist__26578);
var children = cljs.core.rest(arglist__26578);
return figwheel$client$heads_up$node__delegate(t,attrs,children);
});
figwheel$client$heads_up$node.cljs$core$IFn$_invoke$arity$variadic = figwheel$client$heads_up$node__delegate;
return figwheel$client$heads_up$node;
})()
;
figwheel.client.heads_up.heads_up_event_dispatch = (function (){var method_table__18751__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__18752__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__18753__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__18754__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__18755__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.heads-up","heads-up-event-dispatch"),((function (method_table__18751__auto__,prefer_table__18752__auto__,method_cache__18753__auto__,cached_hierarchy__18754__auto__,hierarchy__18755__auto__){
return (function (dataset){
return dataset.figwheelEvent;
});})(method_table__18751__auto__,prefer_table__18752__auto__,method_cache__18753__auto__,cached_hierarchy__18754__auto__,hierarchy__18755__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__18755__auto__,method_table__18751__auto__,prefer_table__18752__auto__,method_cache__18753__auto__,cached_hierarchy__18754__auto__));
})();
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_){
return cljs.core.PersistentArrayMap.EMPTY;
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"file-selected",(function (dataset){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"file-selected",new cljs.core.Keyword(null,"file-name","file-name",-1654217259),dataset.fileName,new cljs.core.Keyword(null,"file-line","file-line",-1228823138),dataset.fileLine], null));
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"close-heads-up",(function (dataset){
return figwheel.client.heads_up.clear.call(null);
}));
figwheel.client.heads_up.ancestor_nodes = (function figwheel$client$heads_up$ancestor_nodes(el){
return cljs.core.iterate.call(null,(function (e){
return e.parentNode;
}),el);
});
figwheel.client.heads_up.get_dataset = (function figwheel$client$heads_up$get_dataset(el){
return cljs.core.first.call(null,cljs.core.keep.call(null,(function (x){
if(cljs.core.truth_(x.dataset.figwheelEvent)){
return x.dataset;
} else {
return null;
}
}),cljs.core.take.call(null,(4),figwheel.client.heads_up.ancestor_nodes.call(null,el))));
});
figwheel.client.heads_up.heads_up_onclick_handler = (function figwheel$client$heads_up$heads_up_onclick_handler(event){
var dataset = figwheel.client.heads_up.get_dataset.call(null,event.target);
event.preventDefault();

if(cljs.core.truth_(dataset)){
return figwheel.client.heads_up.heads_up_event_dispatch.call(null,dataset);
} else {
return null;
}
});
figwheel.client.heads_up.ensure_container = (function figwheel$client$heads_up$ensure_container(){
var cont_id = "figwheel-heads-up-container";
var content_id = "figwheel-heads-up-content-area";
if(cljs.core.not.call(null,document.querySelector([cljs.core.str("#"),cljs.core.str(cont_id)].join('')))){
var el_26579 = figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cont_id,new cljs.core.Keyword(null,"style","style",-496642736),[cljs.core.str("-webkit-transition: all 0.2s ease-in-out;"),cljs.core.str("-moz-transition: all 0.2s ease-in-out;"),cljs.core.str("-o-transition: all 0.2s ease-in-out;"),cljs.core.str("transition: all 0.2s ease-in-out;"),cljs.core.str("font-size: 13px;"),cljs.core.str("border-top: 1px solid #f5f5f5;"),cljs.core.str("box-shadow: 0px 0px 1px #aaaaaa;"),cljs.core.str("line-height: 18px;"),cljs.core.str("color: #333;"),cljs.core.str("font-family: monospace;"),cljs.core.str("padding: 0px 10px 0px 70px;"),cljs.core.str("position: fixed;"),cljs.core.str("bottom: 0px;"),cljs.core.str("left: 0px;"),cljs.core.str("height: 0px;"),cljs.core.str("opacity: 0.0;"),cljs.core.str("box-sizing: border-box;"),cljs.core.str("z-index: 10000;")].join('')], null));
el_26579.onclick = figwheel.client.heads_up.heads_up_onclick_handler;

el_26579.innerHTML = [cljs.core.str(figwheel.client.heads_up.clojure_symbol_svg)].join('');

el_26579.appendChild(figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),content_id], null)));

document.body.appendChild(el_26579);
} else {
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"container-el","container-el",109664205),document.getElementById(cont_id),new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187),document.getElementById(content_id)], null);
});
figwheel.client.heads_up.set_style_BANG_ = (function figwheel$client$heads_up$set_style_BANG_(p__26580,st_map){
var map__26584 = p__26580;
var map__26584__$1 = ((cljs.core.seq_QMARK_.call(null,map__26584))?cljs.core.apply.call(null,cljs.core.hash_map,map__26584):map__26584);
var container_el = cljs.core.get.call(null,map__26584__$1,new cljs.core.Keyword(null,"container-el","container-el",109664205));
return cljs.core.mapv.call(null,((function (map__26584,map__26584__$1,container_el){
return (function (p__26585){
var vec__26586 = p__26585;
var k = cljs.core.nth.call(null,vec__26586,(0),null);
var v = cljs.core.nth.call(null,vec__26586,(1),null);
return (container_el.style[cljs.core.name.call(null,k)] = v);
});})(map__26584,map__26584__$1,container_el))
,st_map);
});
figwheel.client.heads_up.set_content_BANG_ = (function figwheel$client$heads_up$set_content_BANG_(p__26587,dom_str){
var map__26589 = p__26587;
var map__26589__$1 = ((cljs.core.seq_QMARK_.call(null,map__26589))?cljs.core.apply.call(null,cljs.core.hash_map,map__26589):map__26589);
var c = map__26589__$1;
var content_area_el = cljs.core.get.call(null,map__26589__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML = dom_str;
});
figwheel.client.heads_up.get_content = (function figwheel$client$heads_up$get_content(p__26590){
var map__26592 = p__26590;
var map__26592__$1 = ((cljs.core.seq_QMARK_.call(null,map__26592))?cljs.core.apply.call(null,cljs.core.hash_map,map__26592):map__26592);
var content_area_el = cljs.core.get.call(null,map__26592__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML;
});
figwheel.client.heads_up.close_link = (function figwheel$client$heads_up$close_link(){
return [cljs.core.str("<a style=\""),cljs.core.str("float: right;"),cljs.core.str("font-size: 18px;"),cljs.core.str("text-decoration: none;"),cljs.core.str("text-align: right;"),cljs.core.str("width: 30px;"),cljs.core.str("height: 30px;"),cljs.core.str("color: rgba(84,84,84, 0.5);"),cljs.core.str("\" href=\"#\"  data-figwheel-event=\"close-heads-up\">"),cljs.core.str("x"),cljs.core.str("</a>")].join('');
});
figwheel.client.heads_up.display_heads_up = (function figwheel$client$heads_up$display_heads_up(style,msg){
var c__21542__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21542__auto__){
return (function (){
var f__21543__auto__ = (function (){var switch__21486__auto__ = ((function (c__21542__auto__){
return (function (state_26634){
var state_val_26635 = (state_26634[(1)]);
if((state_val_26635 === (2))){
var inst_26619 = (state_26634[(7)]);
var inst_26628 = (state_26634[(2)]);
var inst_26629 = [new cljs.core.Keyword(null,"height","height",1025178622)];
var inst_26630 = ["auto"];
var inst_26631 = cljs.core.PersistentHashMap.fromArrays(inst_26629,inst_26630);
var inst_26632 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_26619,inst_26631);
var state_26634__$1 = (function (){var statearr_26636 = state_26634;
(statearr_26636[(8)] = inst_26628);

return statearr_26636;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26634__$1,inst_26632);
} else {
if((state_val_26635 === (1))){
var inst_26619 = (state_26634[(7)]);
var inst_26619__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_26620 = [new cljs.core.Keyword(null,"paddingTop","paddingTop",-1088692345),new cljs.core.Keyword(null,"paddingBottom","paddingBottom",-916694489),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_26621 = ["10px","10px","100%","68px","1.0"];
var inst_26622 = cljs.core.PersistentHashMap.fromArrays(inst_26620,inst_26621);
var inst_26623 = cljs.core.merge.call(null,inst_26622,style);
var inst_26624 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_26619__$1,inst_26623);
var inst_26625 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_26619__$1,msg);
var inst_26626 = cljs.core.async.timeout.call(null,(300));
var state_26634__$1 = (function (){var statearr_26637 = state_26634;
(statearr_26637[(7)] = inst_26619__$1);

(statearr_26637[(9)] = inst_26624);

(statearr_26637[(10)] = inst_26625);

return statearr_26637;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26634__$1,(2),inst_26626);
} else {
return null;
}
}
});})(c__21542__auto__))
;
return ((function (switch__21486__auto__,c__21542__auto__){
return (function() {
var figwheel$client$heads_up$display_heads_up_$_state_machine__21487__auto__ = null;
var figwheel$client$heads_up$display_heads_up_$_state_machine__21487__auto____0 = (function (){
var statearr_26641 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_26641[(0)] = figwheel$client$heads_up$display_heads_up_$_state_machine__21487__auto__);

(statearr_26641[(1)] = (1));

return statearr_26641;
});
var figwheel$client$heads_up$display_heads_up_$_state_machine__21487__auto____1 = (function (state_26634){
while(true){
var ret_value__21488__auto__ = (function (){try{while(true){
var result__21489__auto__ = switch__21486__auto__.call(null,state_26634);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21489__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21489__auto__;
}
break;
}
}catch (e26642){if((e26642 instanceof Object)){
var ex__21490__auto__ = e26642;
var statearr_26643_26645 = state_26634;
(statearr_26643_26645[(5)] = ex__21490__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26634);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26642;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21488__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26646 = state_26634;
state_26634 = G__26646;
continue;
} else {
return ret_value__21488__auto__;
}
break;
}
});
figwheel$client$heads_up$display_heads_up_$_state_machine__21487__auto__ = function(state_26634){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$display_heads_up_$_state_machine__21487__auto____0.call(this);
case 1:
return figwheel$client$heads_up$display_heads_up_$_state_machine__21487__auto____1.call(this,state_26634);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$display_heads_up_$_state_machine__21487__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$display_heads_up_$_state_machine__21487__auto____0;
figwheel$client$heads_up$display_heads_up_$_state_machine__21487__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$display_heads_up_$_state_machine__21487__auto____1;
return figwheel$client$heads_up$display_heads_up_$_state_machine__21487__auto__;
})()
;})(switch__21486__auto__,c__21542__auto__))
})();
var state__21544__auto__ = (function (){var statearr_26644 = f__21543__auto__.call(null);
(statearr_26644[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21542__auto__);

return statearr_26644;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21544__auto__);
});})(c__21542__auto__))
);

return c__21542__auto__;
});
figwheel.client.heads_up.heading = (function figwheel$client$heads_up$heading(s){
return [cljs.core.str("<div style=\""),cljs.core.str("font-size: 26px;"),cljs.core.str("line-height: 26px;"),cljs.core.str("margin-bottom: 2px;"),cljs.core.str("padding-top: 1px;"),cljs.core.str("\">"),cljs.core.str(s),cljs.core.str("</div>")].join('');
});
figwheel.client.heads_up.file_and_line_number = (function figwheel$client$heads_up$file_and_line_number(msg){
if(cljs.core.truth_(cljs.core.re_matches.call(null,/.*at\sline.*/,msg))){
return cljs.core.take.call(null,(2),cljs.core.reverse.call(null,clojure.string.split.call(null,msg," ")));
} else {
return null;
}
});
figwheel.client.heads_up.file_selector_div = (function figwheel$client$heads_up$file_selector_div(file_name,line_number,msg){
return [cljs.core.str("<div data-figwheel-event=\"file-selected\" data-file-name=\""),cljs.core.str(file_name),cljs.core.str("\" data-file-line=\""),cljs.core.str(line_number),cljs.core.str("\">"),cljs.core.str(msg),cljs.core.str("</div>")].join('');
});
figwheel.client.heads_up.format_line = (function figwheel$client$heads_up$format_line(msg){
var temp__4124__auto__ = figwheel.client.heads_up.file_and_line_number.call(null,msg);
if(cljs.core.truth_(temp__4124__auto__)){
var vec__26648 = temp__4124__auto__;
var f = cljs.core.nth.call(null,vec__26648,(0),null);
var ln = cljs.core.nth.call(null,vec__26648,(1),null);
return figwheel.client.heads_up.file_selector_div.call(null,f,ln,msg);
} else {
return [cljs.core.str("<div>"),cljs.core.str(msg),cljs.core.str("</div>")].join('');
}
});
figwheel.client.heads_up.display_error = (function figwheel$client$heads_up$display_error(formatted_messages,cause){
var vec__26651 = (cljs.core.truth_(cause)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause)], null):cljs.core.first.call(null,cljs.core.keep.call(null,figwheel.client.heads_up.file_and_line_number,formatted_messages)));
var file_name = cljs.core.nth.call(null,vec__26651,(0),null);
var file_line = cljs.core.nth.call(null,vec__26651,(1),null);
var file_column = cljs.core.nth.call(null,vec__26651,(2),null);
var msg = cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,((function (vec__26651,file_name,file_line,file_column){
return (function (p1__26649_SHARP_){
return [cljs.core.str("<div>"),cljs.core.str(p1__26649_SHARP_),cljs.core.str("</div>")].join('');
});})(vec__26651,file_name,file_line,file_column))
,formatted_messages));
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 161, 161, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,"Compile Error")),cljs.core.str(figwheel.client.heads_up.file_selector_div.call(null,file_name,(function (){var or__17856__auto__ = file_line;
if(cljs.core.truth_(or__17856__auto__)){
return or__17856__auto__;
} else {
var and__17844__auto__ = cause;
if(cljs.core.truth_(and__17844__auto__)){
return new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause);
} else {
return and__17844__auto__;
}
}
})(),[cljs.core.str(msg),cljs.core.str((cljs.core.truth_(cause)?[cljs.core.str("Error on file "),cljs.core.str(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", line "),cljs.core.str(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", column "),cljs.core.str(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause))].join(''):""))].join('')))].join(''));
});
figwheel.client.heads_up.display_system_warning = (function figwheel$client$heads_up$display_system_warning(header,msg){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 220, 110, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,header)),cljs.core.str(figwheel.client.heads_up.format_line.call(null,msg))].join(''));
});
figwheel.client.heads_up.display_warning = (function figwheel$client$heads_up$display_warning(msg){
return figwheel.client.heads_up.display_system_warning.call(null,"Compile Warning",msg);
});
figwheel.client.heads_up.append_message = (function figwheel$client$heads_up$append_message(message){
var map__26653 = figwheel.client.heads_up.ensure_container.call(null);
var map__26653__$1 = ((cljs.core.seq_QMARK_.call(null,map__26653))?cljs.core.apply.call(null,cljs.core.hash_map,map__26653):map__26653);
var content_area_el = cljs.core.get.call(null,map__26653__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
var el = document.createElement("div");
el.innerHTML = figwheel.client.heads_up.format_line.call(null,message);

return content_area_el.appendChild(el);
});
figwheel.client.heads_up.clear = (function figwheel$client$heads_up$clear(){
var c__21542__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21542__auto__){
return (function (){
var f__21543__auto__ = (function (){var switch__21486__auto__ = ((function (c__21542__auto__){
return (function (state_26700){
var state_val_26701 = (state_26700[(1)]);
if((state_val_26701 === (3))){
var inst_26683 = (state_26700[(7)]);
var inst_26697 = (state_26700[(2)]);
var inst_26698 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_26683,"");
var state_26700__$1 = (function (){var statearr_26702 = state_26700;
(statearr_26702[(8)] = inst_26697);

return statearr_26702;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26700__$1,inst_26698);
} else {
if((state_val_26701 === (2))){
var inst_26683 = (state_26700[(7)]);
var inst_26690 = (state_26700[(2)]);
var inst_26691 = [new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491)];
var inst_26692 = ["auto","0px","0px","0px 10px 0px 70px","0px","transparent"];
var inst_26693 = cljs.core.PersistentHashMap.fromArrays(inst_26691,inst_26692);
var inst_26694 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_26683,inst_26693);
var inst_26695 = cljs.core.async.timeout.call(null,(200));
var state_26700__$1 = (function (){var statearr_26703 = state_26700;
(statearr_26703[(9)] = inst_26690);

(statearr_26703[(10)] = inst_26694);

return statearr_26703;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26700__$1,(3),inst_26695);
} else {
if((state_val_26701 === (1))){
var inst_26683 = (state_26700[(7)]);
var inst_26683__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_26684 = [new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_26685 = ["0.0"];
var inst_26686 = cljs.core.PersistentHashMap.fromArrays(inst_26684,inst_26685);
var inst_26687 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_26683__$1,inst_26686);
var inst_26688 = cljs.core.async.timeout.call(null,(300));
var state_26700__$1 = (function (){var statearr_26704 = state_26700;
(statearr_26704[(7)] = inst_26683__$1);

(statearr_26704[(11)] = inst_26687);

return statearr_26704;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26700__$1,(2),inst_26688);
} else {
return null;
}
}
}
});})(c__21542__auto__))
;
return ((function (switch__21486__auto__,c__21542__auto__){
return (function() {
var figwheel$client$heads_up$clear_$_state_machine__21487__auto__ = null;
var figwheel$client$heads_up$clear_$_state_machine__21487__auto____0 = (function (){
var statearr_26708 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26708[(0)] = figwheel$client$heads_up$clear_$_state_machine__21487__auto__);

(statearr_26708[(1)] = (1));

return statearr_26708;
});
var figwheel$client$heads_up$clear_$_state_machine__21487__auto____1 = (function (state_26700){
while(true){
var ret_value__21488__auto__ = (function (){try{while(true){
var result__21489__auto__ = switch__21486__auto__.call(null,state_26700);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21489__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21489__auto__;
}
break;
}
}catch (e26709){if((e26709 instanceof Object)){
var ex__21490__auto__ = e26709;
var statearr_26710_26712 = state_26700;
(statearr_26710_26712[(5)] = ex__21490__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26700);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26709;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21488__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26713 = state_26700;
state_26700 = G__26713;
continue;
} else {
return ret_value__21488__auto__;
}
break;
}
});
figwheel$client$heads_up$clear_$_state_machine__21487__auto__ = function(state_26700){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$clear_$_state_machine__21487__auto____0.call(this);
case 1:
return figwheel$client$heads_up$clear_$_state_machine__21487__auto____1.call(this,state_26700);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$clear_$_state_machine__21487__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$clear_$_state_machine__21487__auto____0;
figwheel$client$heads_up$clear_$_state_machine__21487__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$clear_$_state_machine__21487__auto____1;
return figwheel$client$heads_up$clear_$_state_machine__21487__auto__;
})()
;})(switch__21486__auto__,c__21542__auto__))
})();
var state__21544__auto__ = (function (){var statearr_26711 = f__21543__auto__.call(null);
(statearr_26711[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21542__auto__);

return statearr_26711;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21544__auto__);
});})(c__21542__auto__))
);

return c__21542__auto__;
});
figwheel.client.heads_up.display_loaded_start = (function figwheel$client$heads_up$display_loaded_start(){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(211,234,172,1.0)",new cljs.core.Keyword(null,"width","width",-384071477),"68px",new cljs.core.Keyword(null,"height","height",1025178622),"68px",new cljs.core.Keyword(null,"paddingLeft","paddingLeft",262720813),"0px",new cljs.core.Keyword(null,"paddingRight","paddingRight",-1642313463),"0px",new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),"35px"], null),"");
});
figwheel.client.heads_up.flash_loaded = (function figwheel$client$heads_up$flash_loaded(){
var c__21542__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21542__auto__){
return (function (){
var f__21543__auto__ = (function (){var switch__21486__auto__ = ((function (c__21542__auto__){
return (function (state_26745){
var state_val_26746 = (state_26745[(1)]);
if((state_val_26746 === (4))){
var inst_26743 = (state_26745[(2)]);
var state_26745__$1 = state_26745;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26745__$1,inst_26743);
} else {
if((state_val_26746 === (3))){
var inst_26740 = (state_26745[(2)]);
var inst_26741 = figwheel.client.heads_up.clear.call(null);
var state_26745__$1 = (function (){var statearr_26747 = state_26745;
(statearr_26747[(7)] = inst_26740);

return statearr_26747;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26745__$1,(4),inst_26741);
} else {
if((state_val_26746 === (2))){
var inst_26737 = (state_26745[(2)]);
var inst_26738 = cljs.core.async.timeout.call(null,(400));
var state_26745__$1 = (function (){var statearr_26748 = state_26745;
(statearr_26748[(8)] = inst_26737);

return statearr_26748;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26745__$1,(3),inst_26738);
} else {
if((state_val_26746 === (1))){
var inst_26735 = figwheel.client.heads_up.display_loaded_start.call(null);
var state_26745__$1 = state_26745;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26745__$1,(2),inst_26735);
} else {
return null;
}
}
}
}
});})(c__21542__auto__))
;
return ((function (switch__21486__auto__,c__21542__auto__){
return (function() {
var figwheel$client$heads_up$flash_loaded_$_state_machine__21487__auto__ = null;
var figwheel$client$heads_up$flash_loaded_$_state_machine__21487__auto____0 = (function (){
var statearr_26752 = [null,null,null,null,null,null,null,null,null];
(statearr_26752[(0)] = figwheel$client$heads_up$flash_loaded_$_state_machine__21487__auto__);

(statearr_26752[(1)] = (1));

return statearr_26752;
});
var figwheel$client$heads_up$flash_loaded_$_state_machine__21487__auto____1 = (function (state_26745){
while(true){
var ret_value__21488__auto__ = (function (){try{while(true){
var result__21489__auto__ = switch__21486__auto__.call(null,state_26745);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21489__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21489__auto__;
}
break;
}
}catch (e26753){if((e26753 instanceof Object)){
var ex__21490__auto__ = e26753;
var statearr_26754_26756 = state_26745;
(statearr_26754_26756[(5)] = ex__21490__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26745);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26753;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21488__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26757 = state_26745;
state_26745 = G__26757;
continue;
} else {
return ret_value__21488__auto__;
}
break;
}
});
figwheel$client$heads_up$flash_loaded_$_state_machine__21487__auto__ = function(state_26745){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$flash_loaded_$_state_machine__21487__auto____0.call(this);
case 1:
return figwheel$client$heads_up$flash_loaded_$_state_machine__21487__auto____1.call(this,state_26745);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$flash_loaded_$_state_machine__21487__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$flash_loaded_$_state_machine__21487__auto____0;
figwheel$client$heads_up$flash_loaded_$_state_machine__21487__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$flash_loaded_$_state_machine__21487__auto____1;
return figwheel$client$heads_up$flash_loaded_$_state_machine__21487__auto__;
})()
;})(switch__21486__auto__,c__21542__auto__))
})();
var state__21544__auto__ = (function (){var statearr_26755 = f__21543__auto__.call(null);
(statearr_26755[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21542__auto__);

return statearr_26755;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21544__auto__);
});})(c__21542__auto__))
);

return c__21542__auto__;
});
figwheel.client.heads_up.clojure_symbol_svg = "<?xml version='1.0' encoding='UTF-8' ?>\n<!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'>\n<svg width='49px' height='49px' viewBox='0 0 100 99' version='1.1' xmlns='http://www.w3.org/2000/svg' style='position:absolute; top:9px; left: 10px;'>\n<circle fill='rgba(255,255,255,0.5)' cx='49.75' cy='49.5' r='48.5'/>\n<path fill='#5881d8' d=' M 39.30 6.22 C 51.71 3.11 65.45 5.64 75.83 13.16 C 88.68 22.10 96.12 38.22 94.43 53.80 C 93.66 60.11 89.40 66.01 83.37 68.24 C 79.21 69.97 74.64 69.78 70.23 69.80 C 80.77 59.67 81.41 41.33 71.45 30.60 C 63.60 21.32 49.75 18.52 38.65 23.16 C 31.27 18.80 21.83 18.68 14.27 22.69 C 20.65 14.79 29.32 8.56 39.30 6.22 Z' />\n<path fill='#90b4fe' d=' M 42.93 26.99 C 48.49 25.50 54.55 25.62 59.79 28.14 C 68.71 32.19 74.61 42.14 73.41 51.94 C 72.85 58.64 68.92 64.53 63.81 68.69 C 59.57 66.71 57.53 62.30 55.66 58.30 C 50.76 48.12 50.23 36.02 42.93 26.99 Z' />\n<path fill='#63b132' d=' M 12.30 33.30 C 17.11 28.49 24.33 26.90 30.91 28.06 C 25.22 33.49 21.44 41.03 21.46 48.99 C 21.11 58.97 26.58 68.76 35.08 73.92 C 43.28 79.06 53.95 79.28 62.66 75.29 C 70.37 77.57 78.52 77.36 86.31 75.57 C 80.05 84.00 70.94 90.35 60.69 92.84 C 48.02 96.03 34.00 93.24 23.56 85.37 C 12.16 77.09 5.12 63.11 5.44 49.00 C 5.15 43.06 8.22 37.42 12.30 33.30 Z' />\n<path fill='#91dc47' d=' M 26.94 54.00 C 24.97 45.06 29.20 35.59 36.45 30.24 C 41.99 33.71 44.23 40.14 46.55 45.91 C 43.00 53.40 38.44 60.46 35.94 68.42 C 31.50 64.74 27.96 59.77 26.94 54.00 Z' />\n<path fill='#91dc47' d=' M 41.97 71.80 C 41.46 64.27 45.31 57.52 48.11 50.80 C 50.40 58.13 51.84 66.19 57.18 72.06 C 52.17 73.37 46.93 73.26 41.97 71.80 Z' />\n</svg>";

//# sourceMappingURL=heads_up.js.map?rel=1430425800106