// Compiled by ClojureScript 0.0-3165 {}
goog.provide('clojure.string');
goog.require('cljs.core');
goog.require('goog.string.StringBuffer');
goog.require('goog.string');
clojure.string.seq_reverse = (function clojure$string$seq_reverse(coll){
return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.List.EMPTY,coll);
});
clojure.string.re_surrogate_pair = (new RegExp("([\\uD800-\\uDBFF])([\\uDC00-\\uDFFF])","g"));
/**
 * Returns s with its characters reversed.
 */
clojure.string.reverse = (function clojure$string$reverse(s){
return s.replace(clojure.string.re_surrogate_pair,"$2$1").split("").reverse().join("");
});
/**
 * Replaces all instance of match with replacement in s.
 * match/replacement can be:
 * 
 * string / string
 * pattern / (string or function of match).
 */
clojure.string.replace = (function clojure$string$replace(s,match,replacement){
if(typeof match === 'string'){
return s.replace((new RegExp(goog.string.regExpEscape(match),"g")),replacement);
} else {
if((match instanceof RegExp)){
return s.replace((new RegExp(match.source,"g")),replacement);
} else {
throw [cljs.core.str("Invalid match arg: "),cljs.core.str(match)].join('');

}
}
});
/**
 * Replaces the first instance of match with replacement in s.
 * match/replacement can be:
 * 
 * string / string
 * pattern / (string or function of match).
 */
clojure.string.replace_first = (function clojure$string$replace_first(s,match,replacement){
return s.replace(match,replacement);
});
/**
 * Returns a string of all elements in coll, as returned by (seq coll),
 * separated by an optional separator.
 */
clojure.string.join = (function() {
var clojure$string$join = null;
var clojure$string$join__1 = (function (coll){
var sb = (new goog.string.StringBuffer());
var coll__$1 = cljs.core.seq.call(null,coll);
while(true){
if(coll__$1){
var G__26378 = sb.append([cljs.core.str(cljs.core.first.call(null,coll__$1))].join(''));
var G__26379 = cljs.core.next.call(null,coll__$1);
sb = G__26378;
coll__$1 = G__26379;
continue;
} else {
return sb.toString();
}
break;
}
});
var clojure$string$join__2 = (function (separator,coll){
var sb = (new goog.string.StringBuffer());
var coll__$1 = cljs.core.seq.call(null,coll);
while(true){
if(coll__$1){
sb.append([cljs.core.str(cljs.core.first.call(null,coll__$1))].join(''));

var coll__$2 = cljs.core.next.call(null,coll__$1);
if((coll__$2 == null)){
} else {
sb.append(separator);
}

var G__26380 = sb;
var G__26381 = coll__$2;
sb = G__26380;
coll__$1 = G__26381;
continue;
} else {
return sb.toString();
}
break;
}
});
clojure$string$join = function(separator,coll){
switch(arguments.length){
case 1:
return clojure$string$join__1.call(this,separator);
case 2:
return clojure$string$join__2.call(this,separator,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
clojure$string$join.cljs$core$IFn$_invoke$arity$1 = clojure$string$join__1;
clojure$string$join.cljs$core$IFn$_invoke$arity$2 = clojure$string$join__2;
return clojure$string$join;
})()
;
/**
 * Converts string to all upper-case.
 */
clojure.string.upper_case = (function clojure$string$upper_case(s){
return s.toUpperCase();
});
/**
 * Converts string to all lower-case.
 */
clojure.string.lower_case = (function clojure$string$lower_case(s){
return s.toLowerCase();
});
/**
 * Converts first character of the string to upper-case, all other
 * characters to lower-case.
 */
clojure.string.capitalize = (function clojure$string$capitalize(s){
if((cljs.core.count.call(null,s) < (2))){
return clojure.string.upper_case.call(null,s);
} else {
return [cljs.core.str(clojure.string.upper_case.call(null,cljs.core.subs.call(null,s,(0),(1)))),cljs.core.str(clojure.string.lower_case.call(null,cljs.core.subs.call(null,s,(1))))].join('');
}
});
clojure.string.pop_last_while_empty = (function clojure$string$pop_last_while_empty(v){
var v__$1 = v;
while(true){
if(cljs.core._EQ_.call(null,"",cljs.core.peek.call(null,v__$1))){
var G__26382 = cljs.core.pop.call(null,v__$1);
v__$1 = G__26382;
continue;
} else {
return v__$1;
}
break;
}
});
clojure.string.discard_trailing_if_needed = (function clojure$string$discard_trailing_if_needed(limit,v){
if(cljs.core._EQ_.call(null,(0),limit)){
return clojure.string.pop_last_while_empty.call(null,v);
} else {
return v;
}
});
clojure.string.split_with_empty_regex = (function clojure$string$split_with_empty_regex(s,limit){
if(((limit <= (0))) || ((limit >= ((2) + cljs.core.count.call(null,s))))){
return cljs.core.conj.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,"",cljs.core.map.call(null,cljs.core.str,cljs.core.seq.call(null,s)))),"");
} else {
var pred__26386 = cljs.core._EQ_;
var expr__26387 = limit;
if(cljs.core.truth_(pred__26386.call(null,(1),expr__26387))){
return (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[s],null));
} else {
if(cljs.core.truth_(pred__26386.call(null,(2),expr__26387))){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,["",s],null));
} else {
var c = (limit - (2));
return cljs.core.conj.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,"",cljs.core.subvec.call(null,cljs.core.vec.call(null,cljs.core.map.call(null,cljs.core.str,cljs.core.seq.call(null,s))),(0),c))),cljs.core.subs.call(null,s,c));
}
}
}
});
/**
 * Splits string on a regular expression. Optional argument limit is
 * the maximum number of splits. Not lazy. Returns vector of the splits.
 */
clojure.string.split = (function() {
var clojure$string$split = null;
var clojure$string$split__2 = (function (s,re){
return clojure$string$split.call(null,s,re,(0));
});
var clojure$string$split__3 = (function (s,re,limit){
return clojure.string.discard_trailing_if_needed.call(null,limit,((cljs.core._EQ_.call(null,[cljs.core.str(re)].join(''),"/(?:)/"))?clojure.string.split_with_empty_regex.call(null,s,limit):(((limit < (1)))?cljs.core.vec.call(null,[cljs.core.str(s)].join('').split(re)):(function (){var s__$1 = s;
var limit__$1 = limit;
var parts = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core._EQ_.call(null,limit__$1,(1))){
return cljs.core.conj.call(null,parts,s__$1);
} else {
var temp__4124__auto__ = cljs.core.re_find.call(null,re,s__$1);
if(cljs.core.truth_(temp__4124__auto__)){
var m = temp__4124__auto__;
var index = s__$1.indexOf(m);
var G__26389 = s__$1.substring((index + cljs.core.count.call(null,m)));
var G__26390 = (limit__$1 - (1));
var G__26391 = cljs.core.conj.call(null,parts,s__$1.substring((0),index));
s__$1 = G__26389;
limit__$1 = G__26390;
parts = G__26391;
continue;
} else {
return cljs.core.conj.call(null,parts,s__$1);
}
}
break;
}
})())));
});
clojure$string$split = function(s,re,limit){
switch(arguments.length){
case 2:
return clojure$string$split__2.call(this,s,re);
case 3:
return clojure$string$split__3.call(this,s,re,limit);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
clojure$string$split.cljs$core$IFn$_invoke$arity$2 = clojure$string$split__2;
clojure$string$split.cljs$core$IFn$_invoke$arity$3 = clojure$string$split__3;
return clojure$string$split;
})()
;
/**
 * Splits s on
 * or
 * .
 */
clojure.string.split_lines = (function clojure$string$split_lines(s){
return clojure.string.split.call(null,s,/\n|\r\n/);
});
/**
 * Removes whitespace from both ends of string.
 */
clojure.string.trim = (function clojure$string$trim(s){
return goog.string.trim(s);
});
/**
 * Removes whitespace from the left side of string.
 */
clojure.string.triml = (function clojure$string$triml(s){
return goog.string.trimLeft(s);
});
/**
 * Removes whitespace from the right side of string.
 */
clojure.string.trimr = (function clojure$string$trimr(s){
return goog.string.trimRight(s);
});
/**
 * Removes all trailing newline \n or return \r characters from
 * string.  Similar to Perl's chomp.
 */
clojure.string.trim_newline = (function clojure$string$trim_newline(s){
var index = s.length;
while(true){
if((index === (0))){
return "";
} else {
var ch = cljs.core.get.call(null,s,(index - (1)));
if((cljs.core._EQ_.call(null,ch,"\n")) || (cljs.core._EQ_.call(null,ch,"\r"))){
var G__26392 = (index - (1));
index = G__26392;
continue;
} else {
return s.substring((0),index);
}
}
break;
}
});
/**
 * True is s is nil, empty, or contains only whitespace.
 */
clojure.string.blank_QMARK_ = (function clojure$string$blank_QMARK_(s){
return goog.string.isEmptySafe(s);
});
/**
 * Return a new string, using cmap to escape each character ch
 * from s as follows:
 * 
 * If (cmap ch) is nil, append ch to the new string.
 * If (cmap ch) is non-nil, append (str (cmap ch)) instead.
 */
clojure.string.escape = (function clojure$string$escape(s,cmap){
var buffer = (new goog.string.StringBuffer());
var length = s.length;
var index = (0);
while(true){
if(cljs.core._EQ_.call(null,length,index)){
return buffer.toString();
} else {
var ch = s.charAt(index);
var temp__4124__auto___26393 = cljs.core.get.call(null,cmap,ch);
if(cljs.core.truth_(temp__4124__auto___26393)){
var replacement_26394 = temp__4124__auto___26393;
buffer.append([cljs.core.str(replacement_26394)].join(''));
} else {
buffer.append(ch);
}

var G__26395 = (index + (1));
index = G__26395;
continue;
}
break;
}
});

//# sourceMappingURL=string.js.map?rel=1430425799566