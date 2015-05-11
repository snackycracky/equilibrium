// Compiled by ClojureScript 0.0-3165 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
cljs.repl.print_doc = (function cljs$repl$print_doc(m){
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4126__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4126__auto__)){
var ns = temp__4126__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__26772_26784 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__26773_26785 = null;
var count__26774_26786 = (0);
var i__26775_26787 = (0);
while(true){
if((i__26775_26787 < count__26774_26786)){
var f_26788 = cljs.core._nth.call(null,chunk__26773_26785,i__26775_26787);
cljs.core.println.call(null,"  ",f_26788);

var G__26789 = seq__26772_26784;
var G__26790 = chunk__26773_26785;
var G__26791 = count__26774_26786;
var G__26792 = (i__26775_26787 + (1));
seq__26772_26784 = G__26789;
chunk__26773_26785 = G__26790;
count__26774_26786 = G__26791;
i__26775_26787 = G__26792;
continue;
} else {
var temp__4126__auto___26793 = cljs.core.seq.call(null,seq__26772_26784);
if(temp__4126__auto___26793){
var seq__26772_26794__$1 = temp__4126__auto___26793;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26772_26794__$1)){
var c__18641__auto___26795 = cljs.core.chunk_first.call(null,seq__26772_26794__$1);
var G__26796 = cljs.core.chunk_rest.call(null,seq__26772_26794__$1);
var G__26797 = c__18641__auto___26795;
var G__26798 = cljs.core.count.call(null,c__18641__auto___26795);
var G__26799 = (0);
seq__26772_26784 = G__26796;
chunk__26773_26785 = G__26797;
count__26774_26786 = G__26798;
i__26775_26787 = G__26799;
continue;
} else {
var f_26800 = cljs.core.first.call(null,seq__26772_26794__$1);
cljs.core.println.call(null,"  ",f_26800);

var G__26801 = cljs.core.next.call(null,seq__26772_26794__$1);
var G__26802 = null;
var G__26803 = (0);
var G__26804 = (0);
seq__26772_26784 = G__26801;
chunk__26773_26785 = G__26802;
count__26774_26786 = G__26803;
i__26775_26787 = G__26804;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
if(cljs.core.truth_((function (){var or__17856__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__17856__auto__)){
return or__17856__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m));
} else {
cljs.core.prn.call(null,cljs.core.second.call(null,new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m)));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__26776 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__26777 = null;
var count__26778 = (0);
var i__26779 = (0);
while(true){
if((i__26779 < count__26778)){
var vec__26780 = cljs.core._nth.call(null,chunk__26777,i__26779);
var name = cljs.core.nth.call(null,vec__26780,(0),null);
var map__26781 = cljs.core.nth.call(null,vec__26780,(1),null);
var map__26781__$1 = ((cljs.core.seq_QMARK_.call(null,map__26781))?cljs.core.apply.call(null,cljs.core.hash_map,map__26781):map__26781);
var arglists = cljs.core.get.call(null,map__26781__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
var doc = cljs.core.get.call(null,map__26781__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__26805 = seq__26776;
var G__26806 = chunk__26777;
var G__26807 = count__26778;
var G__26808 = (i__26779 + (1));
seq__26776 = G__26805;
chunk__26777 = G__26806;
count__26778 = G__26807;
i__26779 = G__26808;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__26776);
if(temp__4126__auto__){
var seq__26776__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26776__$1)){
var c__18641__auto__ = cljs.core.chunk_first.call(null,seq__26776__$1);
var G__26809 = cljs.core.chunk_rest.call(null,seq__26776__$1);
var G__26810 = c__18641__auto__;
var G__26811 = cljs.core.count.call(null,c__18641__auto__);
var G__26812 = (0);
seq__26776 = G__26809;
chunk__26777 = G__26810;
count__26778 = G__26811;
i__26779 = G__26812;
continue;
} else {
var vec__26782 = cljs.core.first.call(null,seq__26776__$1);
var name = cljs.core.nth.call(null,vec__26782,(0),null);
var map__26783 = cljs.core.nth.call(null,vec__26782,(1),null);
var map__26783__$1 = ((cljs.core.seq_QMARK_.call(null,map__26783))?cljs.core.apply.call(null,cljs.core.hash_map,map__26783):map__26783);
var arglists = cljs.core.get.call(null,map__26783__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
var doc = cljs.core.get.call(null,map__26783__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__26813 = cljs.core.next.call(null,seq__26776__$1);
var G__26814 = null;
var G__26815 = (0);
var G__26816 = (0);
seq__26776 = G__26813;
chunk__26777 = G__26814;
count__26778 = G__26815;
i__26779 = G__26816;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map?rel=1430425800169