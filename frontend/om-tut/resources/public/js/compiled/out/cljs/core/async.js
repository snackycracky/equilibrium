// Compiled by ClojureScript 0.0-3165 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(f){
if(typeof cljs.core.async.t27534 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t27534 = (function (f,fn_handler,meta27535){
this.f = f;
this.fn_handler = fn_handler;
this.meta27535 = meta27535;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t27534.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t27534.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t27534.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t27534.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27536){
var self__ = this;
var _27536__$1 = this;
return self__.meta27535;
});

cljs.core.async.t27534.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27536,meta27535__$1){
var self__ = this;
var _27536__$1 = this;
return (new cljs.core.async.t27534(self__.f,self__.fn_handler,meta27535__$1));
});

cljs.core.async.t27534.cljs$lang$type = true;

cljs.core.async.t27534.cljs$lang$ctorStr = "cljs.core.async/t27534";

cljs.core.async.t27534.cljs$lang$ctorPrWriter = (function (this__18435__auto__,writer__18436__auto__,opt__18437__auto__){
return cljs.core._write.call(null,writer__18436__auto__,"cljs.core.async/t27534");
});

cljs.core.async.__GT_t27534 = (function cljs$core$async$fn_handler_$___GT_t27534(f__$1,fn_handler__$1,meta27535){
return (new cljs.core.async.t27534(f__$1,fn_handler__$1,meta27535));
});

}

return (new cljs.core.async.t27534(f,cljs$core$async$fn_handler,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 * val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 * buffered, but oldest elements in buffer will be dropped (not
 * transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full.
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
var G__27538 = buff;
if(G__27538){
var bit__18530__auto__ = null;
if(cljs.core.truth_((function (){var or__17856__auto__ = bit__18530__auto__;
if(cljs.core.truth_(or__17856__auto__)){
return or__17856__auto__;
} else {
return G__27538.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})())){
return true;
} else {
if((!G__27538.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__27538);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__27538);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 * (filter p) etc or a composition thereof), and an optional exception handler.
 * If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 * transducer is supplied a buffer must be specified. ex-handler must be a
 * fn of one argument - if an exception occurs during transformation it will be called
 * with the thrown value as an argument, and any non-nil return value will be placed
 * in the channel.
 */
cljs.core.async.chan = (function() {
var cljs$core$async$chan = null;
var cljs$core$async$chan__0 = (function (){
return cljs$core$async$chan.call(null,null);
});
var cljs$core$async$chan__1 = (function (buf_or_n){
return cljs$core$async$chan.call(null,buf_or_n,null,null);
});
var cljs$core$async$chan__2 = (function (buf_or_n,xform){
return cljs$core$async$chan.call(null,buf_or_n,xform,null);
});
var cljs$core$async$chan__3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"buf-or-n","buf-or-n",-1646815050,null)))].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});
cljs$core$async$chan = function(buf_or_n,xform,ex_handler){
switch(arguments.length){
case 0:
return cljs$core$async$chan__0.call(this);
case 1:
return cljs$core$async$chan__1.call(this,buf_or_n);
case 2:
return cljs$core$async$chan__2.call(this,buf_or_n,xform);
case 3:
return cljs$core$async$chan__3.call(this,buf_or_n,xform,ex_handler);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$chan.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$chan__0;
cljs$core$async$chan.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$chan__1;
cljs$core$async$chan.cljs$core$IFn$_invoke$arity$2 = cljs$core$async$chan__2;
cljs$core$async$chan.cljs$core$IFn$_invoke$arity$3 = cljs$core$async$chan__3;
return cljs$core$async$chan;
})()
;
/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 * return nil if closed. Will park if nothing is available.
 * Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function() {
var cljs$core$async$take_BANG_ = null;
var cljs$core$async$take_BANG___2 = (function (port,fn1){
return cljs$core$async$take_BANG_.call(null,port,fn1,true);
});
var cljs$core$async$take_BANG___3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_27539 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_27539);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_27539,ret){
return (function (){
return fn1.call(null,val_27539);
});})(val_27539,ret))
);
}
} else {
}

return null;
});
cljs$core$async$take_BANG_ = function(port,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return cljs$core$async$take_BANG___2.call(this,port,fn1);
case 3:
return cljs$core$async$take_BANG___3.call(this,port,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$take_BANG_.cljs$core$IFn$_invoke$arity$2 = cljs$core$async$take_BANG___2;
cljs$core$async$take_BANG_.cljs$core$IFn$_invoke$arity$3 = cljs$core$async$take_BANG___3;
return cljs$core$async$take_BANG_;
})()
;
cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 * inside a (go ...) block. Will park if no buffer space is available.
 * Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function() {
var cljs$core$async$put_BANG_ = null;
var cljs$core$async$put_BANG___2 = (function (port,val){
var temp__4124__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4124__auto__)){
var ret = temp__4124__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});
var cljs$core$async$put_BANG___3 = (function (port,val,fn1){
return cljs$core$async$put_BANG_.call(null,port,val,fn1,true);
});
var cljs$core$async$put_BANG___4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4124__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4124__auto__)){
var retb = temp__4124__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4124__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4124__auto__))
);
}

return ret;
} else {
return true;
}
});
cljs$core$async$put_BANG_ = function(port,val,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return cljs$core$async$put_BANG___2.call(this,port,val);
case 3:
return cljs$core$async$put_BANG___3.call(this,port,val,fn1);
case 4:
return cljs$core$async$put_BANG___4.call(this,port,val,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$put_BANG_.cljs$core$IFn$_invoke$arity$2 = cljs$core$async$put_BANG___2;
cljs$core$async$put_BANG_.cljs$core$IFn$_invoke$arity$3 = cljs$core$async$put_BANG___3;
cljs$core$async$put_BANG_.cljs$core$IFn$_invoke$arity$4 = cljs$core$async$put_BANG___4;
return cljs$core$async$put_BANG_;
})()
;
cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__18741__auto___27540 = n;
var x_27541 = (0);
while(true){
if((x_27541 < n__18741__auto___27540)){
(a[x_27541] = (0));

var G__27542 = (x_27541 + (1));
x_27541 = G__27542;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__27543 = (i + (1));
i = G__27543;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t27547 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t27547 = (function (flag,alt_flag,meta27548){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta27548 = meta27548;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t27547.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t27547.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t27547.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t27547.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_27549){
var self__ = this;
var _27549__$1 = this;
return self__.meta27548;
});})(flag))
;

cljs.core.async.t27547.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_27549,meta27548__$1){
var self__ = this;
var _27549__$1 = this;
return (new cljs.core.async.t27547(self__.flag,self__.alt_flag,meta27548__$1));
});})(flag))
;

cljs.core.async.t27547.cljs$lang$type = true;

cljs.core.async.t27547.cljs$lang$ctorStr = "cljs.core.async/t27547";

cljs.core.async.t27547.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__18435__auto__,writer__18436__auto__,opt__18437__auto__){
return cljs.core._write.call(null,writer__18436__auto__,"cljs.core.async/t27547");
});})(flag))
;

cljs.core.async.__GT_t27547 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t27547(flag__$1,alt_flag__$1,meta27548){
return (new cljs.core.async.t27547(flag__$1,alt_flag__$1,meta27548));
});})(flag))
;

}

return (new cljs.core.async.t27547(flag,cljs$core$async$alt_flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t27553 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t27553 = (function (cb,flag,alt_handler,meta27554){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta27554 = meta27554;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t27553.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t27553.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t27553.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t27553.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27555){
var self__ = this;
var _27555__$1 = this;
return self__.meta27554;
});

cljs.core.async.t27553.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27555,meta27554__$1){
var self__ = this;
var _27555__$1 = this;
return (new cljs.core.async.t27553(self__.cb,self__.flag,self__.alt_handler,meta27554__$1));
});

cljs.core.async.t27553.cljs$lang$type = true;

cljs.core.async.t27553.cljs$lang$ctorStr = "cljs.core.async/t27553";

cljs.core.async.t27553.cljs$lang$ctorPrWriter = (function (this__18435__auto__,writer__18436__auto__,opt__18437__auto__){
return cljs.core._write.call(null,writer__18436__auto__,"cljs.core.async/t27553");
});

cljs.core.async.__GT_t27553 = (function cljs$core$async$alt_handler_$___GT_t27553(cb__$1,flag__$1,alt_handler__$1,meta27554){
return (new cljs.core.async.t27553(cb__$1,flag__$1,alt_handler__$1,meta27554));
});

}

return (new cljs.core.async.t27553(cb,flag,cljs$core$async$alt_handler,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__27556_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__27556_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__27557_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__27557_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__17856__auto__ = wport;
if(cljs.core.truth_(or__17856__auto__)){
return or__17856__auto__;
} else {
return port;
}
})()], null));
} else {
var G__27558 = (i + (1));
i = G__27558;
continue;
}
} else {
return null;
}
break;
}
})();
var or__17856__auto__ = ret;
if(cljs.core.truth_(or__17856__auto__)){
return or__17856__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4126__auto__ = (function (){var and__17844__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__17844__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__17844__auto__;
}
})();
if(cljs.core.truth_(temp__4126__auto__)){
var got = temp__4126__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 * [channel-to-put-to val-to-put], in any combination. Takes will be
 * made as if by <!, and puts will be made as if by >!. Unless
 * the :priority option is true, if more than one port operation is
 * ready a non-deterministic choice will be made. If no operation is
 * ready and a :default value is supplied, [default-val :default] will
 * be returned, otherwise alts! will park until the first operation to
 * become ready completes. Returns [val port] of the completed
 * operation, where val is the value taken for takes, and a
 * boolean (true unless already closed, as per put!) for puts.
 * 
 * opts are passed as :key val ... Supported options:
 * 
 * :default val - the value to use if none of the operations are immediately ready
 * :priority true - (default nil) when true, the operations will be tried in order.
 * 
 * Note: there is no guarantee that the port exps or val exprs will be
 * used, nor in what order should they be, so they should not be
 * depended upon for side effects.
 * @param {...*} var_args
 */
cljs.core.async.alts_BANG_ = (function() { 
var cljs$core$async$alts_BANG___delegate = function (ports,p__27559){
var map__27561 = p__27559;
var map__27561__$1 = ((cljs.core.seq_QMARK_.call(null,map__27561))?cljs.core.apply.call(null,cljs.core.hash_map,map__27561):map__27561);
var opts = map__27561__$1;
throw (new Error("alts! used not in (go ...) block"));
};
var cljs$core$async$alts_BANG_ = function (ports,var_args){
var p__27559 = null;
if (arguments.length > 1) {
var G__27562__i = 0, G__27562__a = new Array(arguments.length -  1);
while (G__27562__i < G__27562__a.length) {G__27562__a[G__27562__i] = arguments[G__27562__i + 1]; ++G__27562__i;}
  p__27559 = new cljs.core.IndexedSeq(G__27562__a,0);
} 
return cljs$core$async$alts_BANG___delegate.call(this,ports,p__27559);};
cljs$core$async$alts_BANG_.cljs$lang$maxFixedArity = 1;
cljs$core$async$alts_BANG_.cljs$lang$applyTo = (function (arglist__27563){
var ports = cljs.core.first(arglist__27563);
var p__27559 = cljs.core.rest(arglist__27563);
return cljs$core$async$alts_BANG___delegate(ports,p__27559);
});
cljs$core$async$alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = cljs$core$async$alts_BANG___delegate;
return cljs$core$async$alts_BANG_;
})()
;
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function() {
var cljs$core$async$pipe = null;
var cljs$core$async$pipe__2 = (function (from,to){
return cljs$core$async$pipe.call(null,from,to,true);
});
var cljs$core$async$pipe__3 = (function (from,to,close_QMARK_){
var c__21542__auto___27658 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21542__auto___27658){
return (function (){
var f__21543__auto__ = (function (){var switch__21486__auto__ = ((function (c__21542__auto___27658){
return (function (state_27634){
var state_val_27635 = (state_27634[(1)]);
if((state_val_27635 === (7))){
var inst_27630 = (state_27634[(2)]);
var state_27634__$1 = state_27634;
var statearr_27636_27659 = state_27634__$1;
(statearr_27636_27659[(2)] = inst_27630);

(statearr_27636_27659[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27635 === (1))){
var state_27634__$1 = state_27634;
var statearr_27637_27660 = state_27634__$1;
(statearr_27637_27660[(2)] = null);

(statearr_27637_27660[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27635 === (4))){
var inst_27613 = (state_27634[(7)]);
var inst_27613__$1 = (state_27634[(2)]);
var inst_27614 = (inst_27613__$1 == null);
var state_27634__$1 = (function (){var statearr_27638 = state_27634;
(statearr_27638[(7)] = inst_27613__$1);

return statearr_27638;
})();
if(cljs.core.truth_(inst_27614)){
var statearr_27639_27661 = state_27634__$1;
(statearr_27639_27661[(1)] = (5));

} else {
var statearr_27640_27662 = state_27634__$1;
(statearr_27640_27662[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27635 === (13))){
var state_27634__$1 = state_27634;
var statearr_27641_27663 = state_27634__$1;
(statearr_27641_27663[(2)] = null);

(statearr_27641_27663[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27635 === (6))){
var inst_27613 = (state_27634[(7)]);
var state_27634__$1 = state_27634;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27634__$1,(11),to,inst_27613);
} else {
if((state_val_27635 === (3))){
var inst_27632 = (state_27634[(2)]);
var state_27634__$1 = state_27634;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27634__$1,inst_27632);
} else {
if((state_val_27635 === (12))){
var state_27634__$1 = state_27634;
var statearr_27642_27664 = state_27634__$1;
(statearr_27642_27664[(2)] = null);

(statearr_27642_27664[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27635 === (2))){
var state_27634__$1 = state_27634;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27634__$1,(4),from);
} else {
if((state_val_27635 === (11))){
var inst_27623 = (state_27634[(2)]);
var state_27634__$1 = state_27634;
if(cljs.core.truth_(inst_27623)){
var statearr_27643_27665 = state_27634__$1;
(statearr_27643_27665[(1)] = (12));

} else {
var statearr_27644_27666 = state_27634__$1;
(statearr_27644_27666[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27635 === (9))){
var state_27634__$1 = state_27634;
var statearr_27645_27667 = state_27634__$1;
(statearr_27645_27667[(2)] = null);

(statearr_27645_27667[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27635 === (5))){
var state_27634__$1 = state_27634;
if(cljs.core.truth_(close_QMARK_)){
var statearr_27646_27668 = state_27634__$1;
(statearr_27646_27668[(1)] = (8));

} else {
var statearr_27647_27669 = state_27634__$1;
(statearr_27647_27669[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27635 === (14))){
var inst_27628 = (state_27634[(2)]);
var state_27634__$1 = state_27634;
var statearr_27648_27670 = state_27634__$1;
(statearr_27648_27670[(2)] = inst_27628);

(statearr_27648_27670[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27635 === (10))){
var inst_27620 = (state_27634[(2)]);
var state_27634__$1 = state_27634;
var statearr_27649_27671 = state_27634__$1;
(statearr_27649_27671[(2)] = inst_27620);

(statearr_27649_27671[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27635 === (8))){
var inst_27617 = cljs.core.async.close_BANG_.call(null,to);
var state_27634__$1 = state_27634;
var statearr_27650_27672 = state_27634__$1;
(statearr_27650_27672[(2)] = inst_27617);

(statearr_27650_27672[(1)] = (10));


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
});})(c__21542__auto___27658))
;
return ((function (switch__21486__auto__,c__21542__auto___27658){
return (function() {
var cljs$core$async$pipe_$_state_machine__21487__auto__ = null;
var cljs$core$async$pipe_$_state_machine__21487__auto____0 = (function (){
var statearr_27654 = [null,null,null,null,null,null,null,null];
(statearr_27654[(0)] = cljs$core$async$pipe_$_state_machine__21487__auto__);

(statearr_27654[(1)] = (1));

return statearr_27654;
});
var cljs$core$async$pipe_$_state_machine__21487__auto____1 = (function (state_27634){
while(true){
var ret_value__21488__auto__ = (function (){try{while(true){
var result__21489__auto__ = switch__21486__auto__.call(null,state_27634);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21489__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21489__auto__;
}
break;
}
}catch (e27655){if((e27655 instanceof Object)){
var ex__21490__auto__ = e27655;
var statearr_27656_27673 = state_27634;
(statearr_27656_27673[(5)] = ex__21490__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27634);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27655;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21488__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27674 = state_27634;
state_27634 = G__27674;
continue;
} else {
return ret_value__21488__auto__;
}
break;
}
});
cljs$core$async$pipe_$_state_machine__21487__auto__ = function(state_27634){
switch(arguments.length){
case 0:
return cljs$core$async$pipe_$_state_machine__21487__auto____0.call(this);
case 1:
return cljs$core$async$pipe_$_state_machine__21487__auto____1.call(this,state_27634);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipe_$_state_machine__21487__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipe_$_state_machine__21487__auto____0;
cljs$core$async$pipe_$_state_machine__21487__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipe_$_state_machine__21487__auto____1;
return cljs$core$async$pipe_$_state_machine__21487__auto__;
})()
;})(switch__21486__auto__,c__21542__auto___27658))
})();
var state__21544__auto__ = (function (){var statearr_27657 = f__21543__auto__.call(null);
(statearr_27657[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21542__auto___27658);

return statearr_27657;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21544__auto__);
});})(c__21542__auto___27658))
);


return to;
});
cljs$core$async$pipe = function(from,to,close_QMARK_){
switch(arguments.length){
case 2:
return cljs$core$async$pipe__2.call(this,from,to);
case 3:
return cljs$core$async$pipe__3.call(this,from,to,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipe.cljs$core$IFn$_invoke$arity$2 = cljs$core$async$pipe__2;
cljs$core$async$pipe.cljs$core$IFn$_invoke$arity$3 = cljs$core$async$pipe__3;
return cljs$core$async$pipe;
})()
;
cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),new cljs.core.Symbol(null,"n","n",-2092305744,null))))].join('')));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__27858){
var vec__27859 = p__27858;
var v = cljs.core.nth.call(null,vec__27859,(0),null);
var p = cljs.core.nth.call(null,vec__27859,(1),null);
var job = vec__27859;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__21542__auto___28041 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21542__auto___28041,res,vec__27859,v,p,job,jobs,results){
return (function (){
var f__21543__auto__ = (function (){var switch__21486__auto__ = ((function (c__21542__auto___28041,res,vec__27859,v,p,job,jobs,results){
return (function (state_27864){
var state_val_27865 = (state_27864[(1)]);
if((state_val_27865 === (2))){
var inst_27861 = (state_27864[(2)]);
var inst_27862 = cljs.core.async.close_BANG_.call(null,res);
var state_27864__$1 = (function (){var statearr_27866 = state_27864;
(statearr_27866[(7)] = inst_27861);

return statearr_27866;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27864__$1,inst_27862);
} else {
if((state_val_27865 === (1))){
var state_27864__$1 = state_27864;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27864__$1,(2),res,v);
} else {
return null;
}
}
});})(c__21542__auto___28041,res,vec__27859,v,p,job,jobs,results))
;
return ((function (switch__21486__auto__,c__21542__auto___28041,res,vec__27859,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21487__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21487__auto____0 = (function (){
var statearr_27870 = [null,null,null,null,null,null,null,null];
(statearr_27870[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21487__auto__);

(statearr_27870[(1)] = (1));

return statearr_27870;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21487__auto____1 = (function (state_27864){
while(true){
var ret_value__21488__auto__ = (function (){try{while(true){
var result__21489__auto__ = switch__21486__auto__.call(null,state_27864);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21489__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21489__auto__;
}
break;
}
}catch (e27871){if((e27871 instanceof Object)){
var ex__21490__auto__ = e27871;
var statearr_27872_28042 = state_27864;
(statearr_27872_28042[(5)] = ex__21490__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27864);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27871;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21488__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28043 = state_27864;
state_27864 = G__28043;
continue;
} else {
return ret_value__21488__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21487__auto__ = function(state_27864){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21487__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21487__auto____1.call(this,state_27864);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21487__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21487__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21487__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21487__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21487__auto__;
})()
;})(switch__21486__auto__,c__21542__auto___28041,res,vec__27859,v,p,job,jobs,results))
})();
var state__21544__auto__ = (function (){var statearr_27873 = f__21543__auto__.call(null);
(statearr_27873[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21542__auto___28041);

return statearr_27873;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21544__auto__);
});})(c__21542__auto___28041,res,vec__27859,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__27874){
var vec__27875 = p__27874;
var v = cljs.core.nth.call(null,vec__27875,(0),null);
var p = cljs.core.nth.call(null,vec__27875,(1),null);
var job = vec__27875;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__18741__auto___28044 = n;
var __28045 = (0);
while(true){
if((__28045 < n__18741__auto___28044)){
var G__27876_28046 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__27876_28046) {
case "async":
var c__21542__auto___28048 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__28045,c__21542__auto___28048,G__27876_28046,n__18741__auto___28044,jobs,results,process,async){
return (function (){
var f__21543__auto__ = (function (){var switch__21486__auto__ = ((function (__28045,c__21542__auto___28048,G__27876_28046,n__18741__auto___28044,jobs,results,process,async){
return (function (state_27889){
var state_val_27890 = (state_27889[(1)]);
if((state_val_27890 === (7))){
var inst_27885 = (state_27889[(2)]);
var state_27889__$1 = state_27889;
var statearr_27891_28049 = state_27889__$1;
(statearr_27891_28049[(2)] = inst_27885);

(statearr_27891_28049[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27890 === (6))){
var state_27889__$1 = state_27889;
var statearr_27892_28050 = state_27889__$1;
(statearr_27892_28050[(2)] = null);

(statearr_27892_28050[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27890 === (5))){
var state_27889__$1 = state_27889;
var statearr_27893_28051 = state_27889__$1;
(statearr_27893_28051[(2)] = null);

(statearr_27893_28051[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27890 === (4))){
var inst_27879 = (state_27889[(2)]);
var inst_27880 = async.call(null,inst_27879);
var state_27889__$1 = state_27889;
if(cljs.core.truth_(inst_27880)){
var statearr_27894_28052 = state_27889__$1;
(statearr_27894_28052[(1)] = (5));

} else {
var statearr_27895_28053 = state_27889__$1;
(statearr_27895_28053[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27890 === (3))){
var inst_27887 = (state_27889[(2)]);
var state_27889__$1 = state_27889;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27889__$1,inst_27887);
} else {
if((state_val_27890 === (2))){
var state_27889__$1 = state_27889;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27889__$1,(4),jobs);
} else {
if((state_val_27890 === (1))){
var state_27889__$1 = state_27889;
var statearr_27896_28054 = state_27889__$1;
(statearr_27896_28054[(2)] = null);

(statearr_27896_28054[(1)] = (2));


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
});})(__28045,c__21542__auto___28048,G__27876_28046,n__18741__auto___28044,jobs,results,process,async))
;
return ((function (__28045,switch__21486__auto__,c__21542__auto___28048,G__27876_28046,n__18741__auto___28044,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21487__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21487__auto____0 = (function (){
var statearr_27900 = [null,null,null,null,null,null,null];
(statearr_27900[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21487__auto__);

(statearr_27900[(1)] = (1));

return statearr_27900;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21487__auto____1 = (function (state_27889){
while(true){
var ret_value__21488__auto__ = (function (){try{while(true){
var result__21489__auto__ = switch__21486__auto__.call(null,state_27889);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21489__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21489__auto__;
}
break;
}
}catch (e27901){if((e27901 instanceof Object)){
var ex__21490__auto__ = e27901;
var statearr_27902_28055 = state_27889;
(statearr_27902_28055[(5)] = ex__21490__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27889);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27901;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21488__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28056 = state_27889;
state_27889 = G__28056;
continue;
} else {
return ret_value__21488__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21487__auto__ = function(state_27889){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21487__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21487__auto____1.call(this,state_27889);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21487__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21487__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21487__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21487__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21487__auto__;
})()
;})(__28045,switch__21486__auto__,c__21542__auto___28048,G__27876_28046,n__18741__auto___28044,jobs,results,process,async))
})();
var state__21544__auto__ = (function (){var statearr_27903 = f__21543__auto__.call(null);
(statearr_27903[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21542__auto___28048);

return statearr_27903;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21544__auto__);
});})(__28045,c__21542__auto___28048,G__27876_28046,n__18741__auto___28044,jobs,results,process,async))
);


break;
case "compute":
var c__21542__auto___28057 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__28045,c__21542__auto___28057,G__27876_28046,n__18741__auto___28044,jobs,results,process,async){
return (function (){
var f__21543__auto__ = (function (){var switch__21486__auto__ = ((function (__28045,c__21542__auto___28057,G__27876_28046,n__18741__auto___28044,jobs,results,process,async){
return (function (state_27916){
var state_val_27917 = (state_27916[(1)]);
if((state_val_27917 === (7))){
var inst_27912 = (state_27916[(2)]);
var state_27916__$1 = state_27916;
var statearr_27918_28058 = state_27916__$1;
(statearr_27918_28058[(2)] = inst_27912);

(statearr_27918_28058[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27917 === (6))){
var state_27916__$1 = state_27916;
var statearr_27919_28059 = state_27916__$1;
(statearr_27919_28059[(2)] = null);

(statearr_27919_28059[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27917 === (5))){
var state_27916__$1 = state_27916;
var statearr_27920_28060 = state_27916__$1;
(statearr_27920_28060[(2)] = null);

(statearr_27920_28060[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27917 === (4))){
var inst_27906 = (state_27916[(2)]);
var inst_27907 = process.call(null,inst_27906);
var state_27916__$1 = state_27916;
if(cljs.core.truth_(inst_27907)){
var statearr_27921_28061 = state_27916__$1;
(statearr_27921_28061[(1)] = (5));

} else {
var statearr_27922_28062 = state_27916__$1;
(statearr_27922_28062[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27917 === (3))){
var inst_27914 = (state_27916[(2)]);
var state_27916__$1 = state_27916;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27916__$1,inst_27914);
} else {
if((state_val_27917 === (2))){
var state_27916__$1 = state_27916;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27916__$1,(4),jobs);
} else {
if((state_val_27917 === (1))){
var state_27916__$1 = state_27916;
var statearr_27923_28063 = state_27916__$1;
(statearr_27923_28063[(2)] = null);

(statearr_27923_28063[(1)] = (2));


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
});})(__28045,c__21542__auto___28057,G__27876_28046,n__18741__auto___28044,jobs,results,process,async))
;
return ((function (__28045,switch__21486__auto__,c__21542__auto___28057,G__27876_28046,n__18741__auto___28044,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21487__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21487__auto____0 = (function (){
var statearr_27927 = [null,null,null,null,null,null,null];
(statearr_27927[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21487__auto__);

(statearr_27927[(1)] = (1));

return statearr_27927;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21487__auto____1 = (function (state_27916){
while(true){
var ret_value__21488__auto__ = (function (){try{while(true){
var result__21489__auto__ = switch__21486__auto__.call(null,state_27916);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21489__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21489__auto__;
}
break;
}
}catch (e27928){if((e27928 instanceof Object)){
var ex__21490__auto__ = e27928;
var statearr_27929_28064 = state_27916;
(statearr_27929_28064[(5)] = ex__21490__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27916);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27928;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21488__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28065 = state_27916;
state_27916 = G__28065;
continue;
} else {
return ret_value__21488__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21487__auto__ = function(state_27916){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21487__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21487__auto____1.call(this,state_27916);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21487__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21487__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21487__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21487__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21487__auto__;
})()
;})(__28045,switch__21486__auto__,c__21542__auto___28057,G__27876_28046,n__18741__auto___28044,jobs,results,process,async))
})();
var state__21544__auto__ = (function (){var statearr_27930 = f__21543__auto__.call(null);
(statearr_27930[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21542__auto___28057);

return statearr_27930;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21544__auto__);
});})(__28045,c__21542__auto___28057,G__27876_28046,n__18741__auto___28044,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__28066 = (__28045 + (1));
__28045 = G__28066;
continue;
} else {
}
break;
}

var c__21542__auto___28067 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21542__auto___28067,jobs,results,process,async){
return (function (){
var f__21543__auto__ = (function (){var switch__21486__auto__ = ((function (c__21542__auto___28067,jobs,results,process,async){
return (function (state_27952){
var state_val_27953 = (state_27952[(1)]);
if((state_val_27953 === (9))){
var inst_27945 = (state_27952[(2)]);
var state_27952__$1 = (function (){var statearr_27954 = state_27952;
(statearr_27954[(7)] = inst_27945);

return statearr_27954;
})();
var statearr_27955_28068 = state_27952__$1;
(statearr_27955_28068[(2)] = null);

(statearr_27955_28068[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27953 === (8))){
var inst_27938 = (state_27952[(8)]);
var inst_27943 = (state_27952[(2)]);
var state_27952__$1 = (function (){var statearr_27956 = state_27952;
(statearr_27956[(9)] = inst_27943);

return statearr_27956;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27952__$1,(9),results,inst_27938);
} else {
if((state_val_27953 === (7))){
var inst_27948 = (state_27952[(2)]);
var state_27952__$1 = state_27952;
var statearr_27957_28069 = state_27952__$1;
(statearr_27957_28069[(2)] = inst_27948);

(statearr_27957_28069[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27953 === (6))){
var inst_27933 = (state_27952[(10)]);
var inst_27938 = (state_27952[(8)]);
var inst_27938__$1 = cljs.core.async.chan.call(null,(1));
var inst_27939 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_27940 = [inst_27933,inst_27938__$1];
var inst_27941 = (new cljs.core.PersistentVector(null,2,(5),inst_27939,inst_27940,null));
var state_27952__$1 = (function (){var statearr_27958 = state_27952;
(statearr_27958[(8)] = inst_27938__$1);

return statearr_27958;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27952__$1,(8),jobs,inst_27941);
} else {
if((state_val_27953 === (5))){
var inst_27936 = cljs.core.async.close_BANG_.call(null,jobs);
var state_27952__$1 = state_27952;
var statearr_27959_28070 = state_27952__$1;
(statearr_27959_28070[(2)] = inst_27936);

(statearr_27959_28070[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27953 === (4))){
var inst_27933 = (state_27952[(10)]);
var inst_27933__$1 = (state_27952[(2)]);
var inst_27934 = (inst_27933__$1 == null);
var state_27952__$1 = (function (){var statearr_27960 = state_27952;
(statearr_27960[(10)] = inst_27933__$1);

return statearr_27960;
})();
if(cljs.core.truth_(inst_27934)){
var statearr_27961_28071 = state_27952__$1;
(statearr_27961_28071[(1)] = (5));

} else {
var statearr_27962_28072 = state_27952__$1;
(statearr_27962_28072[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27953 === (3))){
var inst_27950 = (state_27952[(2)]);
var state_27952__$1 = state_27952;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27952__$1,inst_27950);
} else {
if((state_val_27953 === (2))){
var state_27952__$1 = state_27952;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27952__$1,(4),from);
} else {
if((state_val_27953 === (1))){
var state_27952__$1 = state_27952;
var statearr_27963_28073 = state_27952__$1;
(statearr_27963_28073[(2)] = null);

(statearr_27963_28073[(1)] = (2));


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
});})(c__21542__auto___28067,jobs,results,process,async))
;
return ((function (switch__21486__auto__,c__21542__auto___28067,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21487__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21487__auto____0 = (function (){
var statearr_27967 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_27967[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21487__auto__);

(statearr_27967[(1)] = (1));

return statearr_27967;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21487__auto____1 = (function (state_27952){
while(true){
var ret_value__21488__auto__ = (function (){try{while(true){
var result__21489__auto__ = switch__21486__auto__.call(null,state_27952);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21489__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21489__auto__;
}
break;
}
}catch (e27968){if((e27968 instanceof Object)){
var ex__21490__auto__ = e27968;
var statearr_27969_28074 = state_27952;
(statearr_27969_28074[(5)] = ex__21490__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27952);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27968;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21488__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28075 = state_27952;
state_27952 = G__28075;
continue;
} else {
return ret_value__21488__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21487__auto__ = function(state_27952){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21487__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21487__auto____1.call(this,state_27952);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21487__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21487__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21487__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21487__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21487__auto__;
})()
;})(switch__21486__auto__,c__21542__auto___28067,jobs,results,process,async))
})();
var state__21544__auto__ = (function (){var statearr_27970 = f__21543__auto__.call(null);
(statearr_27970[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21542__auto___28067);

return statearr_27970;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21544__auto__);
});})(c__21542__auto___28067,jobs,results,process,async))
);


var c__21542__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21542__auto__,jobs,results,process,async){
return (function (){
var f__21543__auto__ = (function (){var switch__21486__auto__ = ((function (c__21542__auto__,jobs,results,process,async){
return (function (state_28008){
var state_val_28009 = (state_28008[(1)]);
if((state_val_28009 === (7))){
var inst_28004 = (state_28008[(2)]);
var state_28008__$1 = state_28008;
var statearr_28010_28076 = state_28008__$1;
(statearr_28010_28076[(2)] = inst_28004);

(statearr_28010_28076[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28009 === (20))){
var state_28008__$1 = state_28008;
var statearr_28011_28077 = state_28008__$1;
(statearr_28011_28077[(2)] = null);

(statearr_28011_28077[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28009 === (1))){
var state_28008__$1 = state_28008;
var statearr_28012_28078 = state_28008__$1;
(statearr_28012_28078[(2)] = null);

(statearr_28012_28078[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28009 === (4))){
var inst_27973 = (state_28008[(7)]);
var inst_27973__$1 = (state_28008[(2)]);
var inst_27974 = (inst_27973__$1 == null);
var state_28008__$1 = (function (){var statearr_28013 = state_28008;
(statearr_28013[(7)] = inst_27973__$1);

return statearr_28013;
})();
if(cljs.core.truth_(inst_27974)){
var statearr_28014_28079 = state_28008__$1;
(statearr_28014_28079[(1)] = (5));

} else {
var statearr_28015_28080 = state_28008__$1;
(statearr_28015_28080[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28009 === (15))){
var inst_27986 = (state_28008[(8)]);
var state_28008__$1 = state_28008;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28008__$1,(18),to,inst_27986);
} else {
if((state_val_28009 === (21))){
var inst_27999 = (state_28008[(2)]);
var state_28008__$1 = state_28008;
var statearr_28016_28081 = state_28008__$1;
(statearr_28016_28081[(2)] = inst_27999);

(statearr_28016_28081[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28009 === (13))){
var inst_28001 = (state_28008[(2)]);
var state_28008__$1 = (function (){var statearr_28017 = state_28008;
(statearr_28017[(9)] = inst_28001);

return statearr_28017;
})();
var statearr_28018_28082 = state_28008__$1;
(statearr_28018_28082[(2)] = null);

(statearr_28018_28082[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28009 === (6))){
var inst_27973 = (state_28008[(7)]);
var state_28008__$1 = state_28008;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28008__$1,(11),inst_27973);
} else {
if((state_val_28009 === (17))){
var inst_27994 = (state_28008[(2)]);
var state_28008__$1 = state_28008;
if(cljs.core.truth_(inst_27994)){
var statearr_28019_28083 = state_28008__$1;
(statearr_28019_28083[(1)] = (19));

} else {
var statearr_28020_28084 = state_28008__$1;
(statearr_28020_28084[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28009 === (3))){
var inst_28006 = (state_28008[(2)]);
var state_28008__$1 = state_28008;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28008__$1,inst_28006);
} else {
if((state_val_28009 === (12))){
var inst_27983 = (state_28008[(10)]);
var state_28008__$1 = state_28008;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28008__$1,(14),inst_27983);
} else {
if((state_val_28009 === (2))){
var state_28008__$1 = state_28008;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28008__$1,(4),results);
} else {
if((state_val_28009 === (19))){
var state_28008__$1 = state_28008;
var statearr_28021_28085 = state_28008__$1;
(statearr_28021_28085[(2)] = null);

(statearr_28021_28085[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28009 === (11))){
var inst_27983 = (state_28008[(2)]);
var state_28008__$1 = (function (){var statearr_28022 = state_28008;
(statearr_28022[(10)] = inst_27983);

return statearr_28022;
})();
var statearr_28023_28086 = state_28008__$1;
(statearr_28023_28086[(2)] = null);

(statearr_28023_28086[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28009 === (9))){
var state_28008__$1 = state_28008;
var statearr_28024_28087 = state_28008__$1;
(statearr_28024_28087[(2)] = null);

(statearr_28024_28087[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28009 === (5))){
var state_28008__$1 = state_28008;
if(cljs.core.truth_(close_QMARK_)){
var statearr_28025_28088 = state_28008__$1;
(statearr_28025_28088[(1)] = (8));

} else {
var statearr_28026_28089 = state_28008__$1;
(statearr_28026_28089[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28009 === (14))){
var inst_27988 = (state_28008[(11)]);
var inst_27986 = (state_28008[(8)]);
var inst_27986__$1 = (state_28008[(2)]);
var inst_27987 = (inst_27986__$1 == null);
var inst_27988__$1 = cljs.core.not.call(null,inst_27987);
var state_28008__$1 = (function (){var statearr_28027 = state_28008;
(statearr_28027[(11)] = inst_27988__$1);

(statearr_28027[(8)] = inst_27986__$1);

return statearr_28027;
})();
if(inst_27988__$1){
var statearr_28028_28090 = state_28008__$1;
(statearr_28028_28090[(1)] = (15));

} else {
var statearr_28029_28091 = state_28008__$1;
(statearr_28029_28091[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28009 === (16))){
var inst_27988 = (state_28008[(11)]);
var state_28008__$1 = state_28008;
var statearr_28030_28092 = state_28008__$1;
(statearr_28030_28092[(2)] = inst_27988);

(statearr_28030_28092[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28009 === (10))){
var inst_27980 = (state_28008[(2)]);
var state_28008__$1 = state_28008;
var statearr_28031_28093 = state_28008__$1;
(statearr_28031_28093[(2)] = inst_27980);

(statearr_28031_28093[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28009 === (18))){
var inst_27991 = (state_28008[(2)]);
var state_28008__$1 = state_28008;
var statearr_28032_28094 = state_28008__$1;
(statearr_28032_28094[(2)] = inst_27991);

(statearr_28032_28094[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28009 === (8))){
var inst_27977 = cljs.core.async.close_BANG_.call(null,to);
var state_28008__$1 = state_28008;
var statearr_28033_28095 = state_28008__$1;
(statearr_28033_28095[(2)] = inst_27977);

(statearr_28033_28095[(1)] = (10));


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
});})(c__21542__auto__,jobs,results,process,async))
;
return ((function (switch__21486__auto__,c__21542__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21487__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21487__auto____0 = (function (){
var statearr_28037 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28037[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21487__auto__);

(statearr_28037[(1)] = (1));

return statearr_28037;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21487__auto____1 = (function (state_28008){
while(true){
var ret_value__21488__auto__ = (function (){try{while(true){
var result__21489__auto__ = switch__21486__auto__.call(null,state_28008);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21489__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21489__auto__;
}
break;
}
}catch (e28038){if((e28038 instanceof Object)){
var ex__21490__auto__ = e28038;
var statearr_28039_28096 = state_28008;
(statearr_28039_28096[(5)] = ex__21490__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28008);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28038;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21488__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28097 = state_28008;
state_28008 = G__28097;
continue;
} else {
return ret_value__21488__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21487__auto__ = function(state_28008){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21487__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21487__auto____1.call(this,state_28008);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21487__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21487__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21487__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21487__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21487__auto__;
})()
;})(switch__21486__auto__,c__21542__auto__,jobs,results,process,async))
})();
var state__21544__auto__ = (function (){var statearr_28040 = f__21543__auto__.call(null);
(statearr_28040[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21542__auto__);

return statearr_28040;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21544__auto__);
});})(c__21542__auto__,jobs,results,process,async))
);

return c__21542__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel, subject to the async function af, with parallelism n. af
 * must be a function of two arguments, the first an input value and
 * the second a channel on which to place the result(s). af must close!
 * the channel before returning.  The presumption is that af will
 * return immediately, having launched some asynchronous operation
 * whose completion/callback will manipulate the result channel. Outputs
 * will be returned in order relative to  the inputs. By default, the to
 * channel will be closed when the from channel closes, but can be
 * determined by the close?  parameter. Will stop consuming the from
 * channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function() {
var cljs$core$async$pipeline_async = null;
var cljs$core$async$pipeline_async__4 = (function (n,to,af,from){
return cljs$core$async$pipeline_async.call(null,n,to,af,from,true);
});
var cljs$core$async$pipeline_async__5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});
cljs$core$async$pipeline_async = function(n,to,af,from,close_QMARK_){
switch(arguments.length){
case 4:
return cljs$core$async$pipeline_async__4.call(this,n,to,af,from);
case 5:
return cljs$core$async$pipeline_async__5.call(this,n,to,af,from,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_async.cljs$core$IFn$_invoke$arity$4 = cljs$core$async$pipeline_async__4;
cljs$core$async$pipeline_async.cljs$core$IFn$_invoke$arity$5 = cljs$core$async$pipeline_async__5;
return cljs$core$async$pipeline_async;
})()
;
/**
 * Takes elements from the from channel and supplies them to the to
 * channel, subject to the transducer xf, with parallelism n. Because
 * it is parallel, the transducer will be applied independently to each
 * element, not across elements, and may produce zero or more outputs
 * per input.  Outputs will be returned in order relative to the
 * inputs. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes.
 * 
 * Note this is supplied for API compatibility with the Clojure version.
 * Values of N > 1 will not result in actual concurrency in a
 * single-threaded runtime.
 */
cljs.core.async.pipeline = (function() {
var cljs$core$async$pipeline = null;
var cljs$core$async$pipeline__4 = (function (n,to,xf,from){
return cljs$core$async$pipeline.call(null,n,to,xf,from,true);
});
var cljs$core$async$pipeline__5 = (function (n,to,xf,from,close_QMARK_){
return cljs$core$async$pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});
var cljs$core$async$pipeline__6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});
cljs$core$async$pipeline = function(n,to,xf,from,close_QMARK_,ex_handler){
switch(arguments.length){
case 4:
return cljs$core$async$pipeline__4.call(this,n,to,xf,from);
case 5:
return cljs$core$async$pipeline__5.call(this,n,to,xf,from,close_QMARK_);
case 6:
return cljs$core$async$pipeline__6.call(this,n,to,xf,from,close_QMARK_,ex_handler);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline.cljs$core$IFn$_invoke$arity$4 = cljs$core$async$pipeline__4;
cljs$core$async$pipeline.cljs$core$IFn$_invoke$arity$5 = cljs$core$async$pipeline__5;
cljs$core$async$pipeline.cljs$core$IFn$_invoke$arity$6 = cljs$core$async$pipeline__6;
return cljs$core$async$pipeline;
})()
;
/**
 * Takes a predicate and a source channel and returns a vector of two
 * channels, the first of which will contain the values for which the
 * predicate returned true, the second those for which it returned
 * false.
 * 
 * The out channels will be unbuffered by default, or two buf-or-ns can
 * be supplied. The channels will close after the source channel has
 * closed.
 */
cljs.core.async.split = (function() {
var cljs$core$async$split = null;
var cljs$core$async$split__2 = (function (p,ch){
return cljs$core$async$split.call(null,p,ch,null,null);
});
var cljs$core$async$split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__21542__auto___28198 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21542__auto___28198,tc,fc){
return (function (){
var f__21543__auto__ = (function (){var switch__21486__auto__ = ((function (c__21542__auto___28198,tc,fc){
return (function (state_28173){
var state_val_28174 = (state_28173[(1)]);
if((state_val_28174 === (7))){
var inst_28169 = (state_28173[(2)]);
var state_28173__$1 = state_28173;
var statearr_28175_28199 = state_28173__$1;
(statearr_28175_28199[(2)] = inst_28169);

(statearr_28175_28199[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28174 === (1))){
var state_28173__$1 = state_28173;
var statearr_28176_28200 = state_28173__$1;
(statearr_28176_28200[(2)] = null);

(statearr_28176_28200[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28174 === (4))){
var inst_28150 = (state_28173[(7)]);
var inst_28150__$1 = (state_28173[(2)]);
var inst_28151 = (inst_28150__$1 == null);
var state_28173__$1 = (function (){var statearr_28177 = state_28173;
(statearr_28177[(7)] = inst_28150__$1);

return statearr_28177;
})();
if(cljs.core.truth_(inst_28151)){
var statearr_28178_28201 = state_28173__$1;
(statearr_28178_28201[(1)] = (5));

} else {
var statearr_28179_28202 = state_28173__$1;
(statearr_28179_28202[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28174 === (13))){
var state_28173__$1 = state_28173;
var statearr_28180_28203 = state_28173__$1;
(statearr_28180_28203[(2)] = null);

(statearr_28180_28203[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28174 === (6))){
var inst_28150 = (state_28173[(7)]);
var inst_28156 = p.call(null,inst_28150);
var state_28173__$1 = state_28173;
if(cljs.core.truth_(inst_28156)){
var statearr_28181_28204 = state_28173__$1;
(statearr_28181_28204[(1)] = (9));

} else {
var statearr_28182_28205 = state_28173__$1;
(statearr_28182_28205[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28174 === (3))){
var inst_28171 = (state_28173[(2)]);
var state_28173__$1 = state_28173;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28173__$1,inst_28171);
} else {
if((state_val_28174 === (12))){
var state_28173__$1 = state_28173;
var statearr_28183_28206 = state_28173__$1;
(statearr_28183_28206[(2)] = null);

(statearr_28183_28206[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28174 === (2))){
var state_28173__$1 = state_28173;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28173__$1,(4),ch);
} else {
if((state_val_28174 === (11))){
var inst_28150 = (state_28173[(7)]);
var inst_28160 = (state_28173[(2)]);
var state_28173__$1 = state_28173;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28173__$1,(8),inst_28160,inst_28150);
} else {
if((state_val_28174 === (9))){
var state_28173__$1 = state_28173;
var statearr_28184_28207 = state_28173__$1;
(statearr_28184_28207[(2)] = tc);

(statearr_28184_28207[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28174 === (5))){
var inst_28153 = cljs.core.async.close_BANG_.call(null,tc);
var inst_28154 = cljs.core.async.close_BANG_.call(null,fc);
var state_28173__$1 = (function (){var statearr_28185 = state_28173;
(statearr_28185[(8)] = inst_28153);

return statearr_28185;
})();
var statearr_28186_28208 = state_28173__$1;
(statearr_28186_28208[(2)] = inst_28154);

(statearr_28186_28208[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28174 === (14))){
var inst_28167 = (state_28173[(2)]);
var state_28173__$1 = state_28173;
var statearr_28187_28209 = state_28173__$1;
(statearr_28187_28209[(2)] = inst_28167);

(statearr_28187_28209[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28174 === (10))){
var state_28173__$1 = state_28173;
var statearr_28188_28210 = state_28173__$1;
(statearr_28188_28210[(2)] = fc);

(statearr_28188_28210[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28174 === (8))){
var inst_28162 = (state_28173[(2)]);
var state_28173__$1 = state_28173;
if(cljs.core.truth_(inst_28162)){
var statearr_28189_28211 = state_28173__$1;
(statearr_28189_28211[(1)] = (12));

} else {
var statearr_28190_28212 = state_28173__$1;
(statearr_28190_28212[(1)] = (13));

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
});})(c__21542__auto___28198,tc,fc))
;
return ((function (switch__21486__auto__,c__21542__auto___28198,tc,fc){
return (function() {
var cljs$core$async$split_$_state_machine__21487__auto__ = null;
var cljs$core$async$split_$_state_machine__21487__auto____0 = (function (){
var statearr_28194 = [null,null,null,null,null,null,null,null,null];
(statearr_28194[(0)] = cljs$core$async$split_$_state_machine__21487__auto__);

(statearr_28194[(1)] = (1));

return statearr_28194;
});
var cljs$core$async$split_$_state_machine__21487__auto____1 = (function (state_28173){
while(true){
var ret_value__21488__auto__ = (function (){try{while(true){
var result__21489__auto__ = switch__21486__auto__.call(null,state_28173);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21489__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21489__auto__;
}
break;
}
}catch (e28195){if((e28195 instanceof Object)){
var ex__21490__auto__ = e28195;
var statearr_28196_28213 = state_28173;
(statearr_28196_28213[(5)] = ex__21490__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28173);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28195;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21488__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28214 = state_28173;
state_28173 = G__28214;
continue;
} else {
return ret_value__21488__auto__;
}
break;
}
});
cljs$core$async$split_$_state_machine__21487__auto__ = function(state_28173){
switch(arguments.length){
case 0:
return cljs$core$async$split_$_state_machine__21487__auto____0.call(this);
case 1:
return cljs$core$async$split_$_state_machine__21487__auto____1.call(this,state_28173);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$split_$_state_machine__21487__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$split_$_state_machine__21487__auto____0;
cljs$core$async$split_$_state_machine__21487__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$split_$_state_machine__21487__auto____1;
return cljs$core$async$split_$_state_machine__21487__auto__;
})()
;})(switch__21486__auto__,c__21542__auto___28198,tc,fc))
})();
var state__21544__auto__ = (function (){var statearr_28197 = f__21543__auto__.call(null);
(statearr_28197[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21542__auto___28198);

return statearr_28197;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21544__auto__);
});})(c__21542__auto___28198,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});
cljs$core$async$split = function(p,ch,t_buf_or_n,f_buf_or_n){
switch(arguments.length){
case 2:
return cljs$core$async$split__2.call(this,p,ch);
case 4:
return cljs$core$async$split__4.call(this,p,ch,t_buf_or_n,f_buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$split.cljs$core$IFn$_invoke$arity$2 = cljs$core$async$split__2;
cljs$core$async$split.cljs$core$IFn$_invoke$arity$4 = cljs$core$async$split__4;
return cljs$core$async$split;
})()
;
/**
 * f should be a function of 2 arguments. Returns a channel containing
 * the single result of applying f to init and the first item from the
 * channel, then applying f to that result and the 2nd item, etc. If
 * the channel closes without yielding items, returns init and f is not
 * called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__21542__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21542__auto__){
return (function (){
var f__21543__auto__ = (function (){var switch__21486__auto__ = ((function (c__21542__auto__){
return (function (state_28261){
var state_val_28262 = (state_28261[(1)]);
if((state_val_28262 === (7))){
var inst_28257 = (state_28261[(2)]);
var state_28261__$1 = state_28261;
var statearr_28263_28279 = state_28261__$1;
(statearr_28263_28279[(2)] = inst_28257);

(statearr_28263_28279[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28262 === (6))){
var inst_28250 = (state_28261[(7)]);
var inst_28247 = (state_28261[(8)]);
var inst_28254 = f.call(null,inst_28247,inst_28250);
var inst_28247__$1 = inst_28254;
var state_28261__$1 = (function (){var statearr_28264 = state_28261;
(statearr_28264[(8)] = inst_28247__$1);

return statearr_28264;
})();
var statearr_28265_28280 = state_28261__$1;
(statearr_28265_28280[(2)] = null);

(statearr_28265_28280[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28262 === (5))){
var inst_28247 = (state_28261[(8)]);
var state_28261__$1 = state_28261;
var statearr_28266_28281 = state_28261__$1;
(statearr_28266_28281[(2)] = inst_28247);

(statearr_28266_28281[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28262 === (4))){
var inst_28250 = (state_28261[(7)]);
var inst_28250__$1 = (state_28261[(2)]);
var inst_28251 = (inst_28250__$1 == null);
var state_28261__$1 = (function (){var statearr_28267 = state_28261;
(statearr_28267[(7)] = inst_28250__$1);

return statearr_28267;
})();
if(cljs.core.truth_(inst_28251)){
var statearr_28268_28282 = state_28261__$1;
(statearr_28268_28282[(1)] = (5));

} else {
var statearr_28269_28283 = state_28261__$1;
(statearr_28269_28283[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28262 === (3))){
var inst_28259 = (state_28261[(2)]);
var state_28261__$1 = state_28261;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28261__$1,inst_28259);
} else {
if((state_val_28262 === (2))){
var state_28261__$1 = state_28261;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28261__$1,(4),ch);
} else {
if((state_val_28262 === (1))){
var inst_28247 = init;
var state_28261__$1 = (function (){var statearr_28270 = state_28261;
(statearr_28270[(8)] = inst_28247);

return statearr_28270;
})();
var statearr_28271_28284 = state_28261__$1;
(statearr_28271_28284[(2)] = null);

(statearr_28271_28284[(1)] = (2));


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
});})(c__21542__auto__))
;
return ((function (switch__21486__auto__,c__21542__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__21487__auto__ = null;
var cljs$core$async$reduce_$_state_machine__21487__auto____0 = (function (){
var statearr_28275 = [null,null,null,null,null,null,null,null,null];
(statearr_28275[(0)] = cljs$core$async$reduce_$_state_machine__21487__auto__);

(statearr_28275[(1)] = (1));

return statearr_28275;
});
var cljs$core$async$reduce_$_state_machine__21487__auto____1 = (function (state_28261){
while(true){
var ret_value__21488__auto__ = (function (){try{while(true){
var result__21489__auto__ = switch__21486__auto__.call(null,state_28261);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21489__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21489__auto__;
}
break;
}
}catch (e28276){if((e28276 instanceof Object)){
var ex__21490__auto__ = e28276;
var statearr_28277_28285 = state_28261;
(statearr_28277_28285[(5)] = ex__21490__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28261);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28276;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21488__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28286 = state_28261;
state_28261 = G__28286;
continue;
} else {
return ret_value__21488__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__21487__auto__ = function(state_28261){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__21487__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__21487__auto____1.call(this,state_28261);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__21487__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__21487__auto____0;
cljs$core$async$reduce_$_state_machine__21487__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__21487__auto____1;
return cljs$core$async$reduce_$_state_machine__21487__auto__;
})()
;})(switch__21486__auto__,c__21542__auto__))
})();
var state__21544__auto__ = (function (){var statearr_28278 = f__21543__auto__.call(null);
(statearr_28278[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21542__auto__);

return statearr_28278;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21544__auto__);
});})(c__21542__auto__))
);

return c__21542__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 * By default the channel will be closed after the items are copied,
 * but can be determined by the close? parameter.
 * 
 * Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function() {
var cljs$core$async$onto_chan = null;
var cljs$core$async$onto_chan__2 = (function (ch,coll){
return cljs$core$async$onto_chan.call(null,ch,coll,true);
});
var cljs$core$async$onto_chan__3 = (function (ch,coll,close_QMARK_){
var c__21542__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21542__auto__){
return (function (){
var f__21543__auto__ = (function (){var switch__21486__auto__ = ((function (c__21542__auto__){
return (function (state_28360){
var state_val_28361 = (state_28360[(1)]);
if((state_val_28361 === (7))){
var inst_28342 = (state_28360[(2)]);
var state_28360__$1 = state_28360;
var statearr_28362_28385 = state_28360__$1;
(statearr_28362_28385[(2)] = inst_28342);

(statearr_28362_28385[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28361 === (1))){
var inst_28336 = cljs.core.seq.call(null,coll);
var inst_28337 = inst_28336;
var state_28360__$1 = (function (){var statearr_28363 = state_28360;
(statearr_28363[(7)] = inst_28337);

return statearr_28363;
})();
var statearr_28364_28386 = state_28360__$1;
(statearr_28364_28386[(2)] = null);

(statearr_28364_28386[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28361 === (4))){
var inst_28337 = (state_28360[(7)]);
var inst_28340 = cljs.core.first.call(null,inst_28337);
var state_28360__$1 = state_28360;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28360__$1,(7),ch,inst_28340);
} else {
if((state_val_28361 === (13))){
var inst_28354 = (state_28360[(2)]);
var state_28360__$1 = state_28360;
var statearr_28365_28387 = state_28360__$1;
(statearr_28365_28387[(2)] = inst_28354);

(statearr_28365_28387[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28361 === (6))){
var inst_28345 = (state_28360[(2)]);
var state_28360__$1 = state_28360;
if(cljs.core.truth_(inst_28345)){
var statearr_28366_28388 = state_28360__$1;
(statearr_28366_28388[(1)] = (8));

} else {
var statearr_28367_28389 = state_28360__$1;
(statearr_28367_28389[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28361 === (3))){
var inst_28358 = (state_28360[(2)]);
var state_28360__$1 = state_28360;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28360__$1,inst_28358);
} else {
if((state_val_28361 === (12))){
var state_28360__$1 = state_28360;
var statearr_28368_28390 = state_28360__$1;
(statearr_28368_28390[(2)] = null);

(statearr_28368_28390[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28361 === (2))){
var inst_28337 = (state_28360[(7)]);
var state_28360__$1 = state_28360;
if(cljs.core.truth_(inst_28337)){
var statearr_28369_28391 = state_28360__$1;
(statearr_28369_28391[(1)] = (4));

} else {
var statearr_28370_28392 = state_28360__$1;
(statearr_28370_28392[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28361 === (11))){
var inst_28351 = cljs.core.async.close_BANG_.call(null,ch);
var state_28360__$1 = state_28360;
var statearr_28371_28393 = state_28360__$1;
(statearr_28371_28393[(2)] = inst_28351);

(statearr_28371_28393[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28361 === (9))){
var state_28360__$1 = state_28360;
if(cljs.core.truth_(close_QMARK_)){
var statearr_28372_28394 = state_28360__$1;
(statearr_28372_28394[(1)] = (11));

} else {
var statearr_28373_28395 = state_28360__$1;
(statearr_28373_28395[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28361 === (5))){
var inst_28337 = (state_28360[(7)]);
var state_28360__$1 = state_28360;
var statearr_28374_28396 = state_28360__$1;
(statearr_28374_28396[(2)] = inst_28337);

(statearr_28374_28396[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28361 === (10))){
var inst_28356 = (state_28360[(2)]);
var state_28360__$1 = state_28360;
var statearr_28375_28397 = state_28360__$1;
(statearr_28375_28397[(2)] = inst_28356);

(statearr_28375_28397[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28361 === (8))){
var inst_28337 = (state_28360[(7)]);
var inst_28347 = cljs.core.next.call(null,inst_28337);
var inst_28337__$1 = inst_28347;
var state_28360__$1 = (function (){var statearr_28376 = state_28360;
(statearr_28376[(7)] = inst_28337__$1);

return statearr_28376;
})();
var statearr_28377_28398 = state_28360__$1;
(statearr_28377_28398[(2)] = null);

(statearr_28377_28398[(1)] = (2));


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
});})(c__21542__auto__))
;
return ((function (switch__21486__auto__,c__21542__auto__){
return (function() {
var cljs$core$async$onto_chan_$_state_machine__21487__auto__ = null;
var cljs$core$async$onto_chan_$_state_machine__21487__auto____0 = (function (){
var statearr_28381 = [null,null,null,null,null,null,null,null];
(statearr_28381[(0)] = cljs$core$async$onto_chan_$_state_machine__21487__auto__);

(statearr_28381[(1)] = (1));

return statearr_28381;
});
var cljs$core$async$onto_chan_$_state_machine__21487__auto____1 = (function (state_28360){
while(true){
var ret_value__21488__auto__ = (function (){try{while(true){
var result__21489__auto__ = switch__21486__auto__.call(null,state_28360);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21489__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21489__auto__;
}
break;
}
}catch (e28382){if((e28382 instanceof Object)){
var ex__21490__auto__ = e28382;
var statearr_28383_28399 = state_28360;
(statearr_28383_28399[(5)] = ex__21490__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28360);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28382;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21488__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28400 = state_28360;
state_28360 = G__28400;
continue;
} else {
return ret_value__21488__auto__;
}
break;
}
});
cljs$core$async$onto_chan_$_state_machine__21487__auto__ = function(state_28360){
switch(arguments.length){
case 0:
return cljs$core$async$onto_chan_$_state_machine__21487__auto____0.call(this);
case 1:
return cljs$core$async$onto_chan_$_state_machine__21487__auto____1.call(this,state_28360);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$onto_chan_$_state_machine__21487__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$onto_chan_$_state_machine__21487__auto____0;
cljs$core$async$onto_chan_$_state_machine__21487__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$onto_chan_$_state_machine__21487__auto____1;
return cljs$core$async$onto_chan_$_state_machine__21487__auto__;
})()
;})(switch__21486__auto__,c__21542__auto__))
})();
var state__21544__auto__ = (function (){var statearr_28384 = f__21543__auto__.call(null);
(statearr_28384[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21542__auto__);

return statearr_28384;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21544__auto__);
});})(c__21542__auto__))
);

return c__21542__auto__;
});
cljs$core$async$onto_chan = function(ch,coll,close_QMARK_){
switch(arguments.length){
case 2:
return cljs$core$async$onto_chan__2.call(this,ch,coll);
case 3:
return cljs$core$async$onto_chan__3.call(this,ch,coll,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$onto_chan.cljs$core$IFn$_invoke$arity$2 = cljs$core$async$onto_chan__2;
cljs$core$async$onto_chan.cljs$core$IFn$_invoke$arity$3 = cljs$core$async$onto_chan__3;
return cljs$core$async$onto_chan;
})()
;
/**
 * Creates and returns a channel which contains the contents of coll,
 * closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

cljs.core.async.Mux = (function (){var obj28402 = {};
return obj28402;
})();

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((function (){var and__17844__auto__ = _;
if(and__17844__auto__){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else {
return and__17844__auto__;
}
})()){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__18492__auto__ = (((_ == null))?null:_);
return (function (){var or__17856__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__18492__auto__)]);
if(or__17856__auto__){
return or__17856__auto__;
} else {
var or__17856__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(or__17856__auto____$1){
return or__17856__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});


cljs.core.async.Mult = (function (){var obj28404 = {};
return obj28404;
})();

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((function (){var and__17844__auto__ = m;
if(and__17844__auto__){
return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else {
return and__17844__auto__;
}
})()){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__18492__auto__ = (((m == null))?null:m);
return (function (){var or__17856__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__18492__auto__)]);
if(or__17856__auto__){
return or__17856__auto__;
} else {
var or__17856__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(or__17856__auto____$1){
return or__17856__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((function (){var and__17844__auto__ = m;
if(and__17844__auto__){
return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else {
return and__17844__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__18492__auto__ = (((m == null))?null:m);
return (function (){var or__17856__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__18492__auto__)]);
if(or__17856__auto__){
return or__17856__auto__;
} else {
var or__17856__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(or__17856__auto____$1){
return or__17856__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((function (){var and__17844__auto__ = m;
if(and__17844__auto__){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else {
return and__17844__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__18492__auto__ = (((m == null))?null:m);
return (function (){var or__17856__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__18492__auto__)]);
if(or__17856__auto__){
return or__17856__auto__;
} else {
var or__17856__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(or__17856__auto____$1){
return or__17856__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
})().call(null,m);
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 * containing copies of the channel can be created with 'tap', and
 * detached with 'untap'.
 * 
 * Each item is distributed to all taps in parallel and synchronously,
 * i.e. each tap must accept before the next item is distributed. Use
 * buffering/windowing to prevent slow taps from holding up the mult.
 * 
 * Items received when there are no taps get dropped.
 * 
 * If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t28626 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t28626 = (function (cs,ch,mult,meta28627){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta28627 = meta28627;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t28626.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t28626.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t28626.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t28626.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t28626.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t28626.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t28626.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_28628){
var self__ = this;
var _28628__$1 = this;
return self__.meta28627;
});})(cs))
;

cljs.core.async.t28626.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_28628,meta28627__$1){
var self__ = this;
var _28628__$1 = this;
return (new cljs.core.async.t28626(self__.cs,self__.ch,self__.mult,meta28627__$1));
});})(cs))
;

cljs.core.async.t28626.cljs$lang$type = true;

cljs.core.async.t28626.cljs$lang$ctorStr = "cljs.core.async/t28626";

cljs.core.async.t28626.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__18435__auto__,writer__18436__auto__,opt__18437__auto__){
return cljs.core._write.call(null,writer__18436__auto__,"cljs.core.async/t28626");
});})(cs))
;

cljs.core.async.__GT_t28626 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t28626(cs__$1,ch__$1,mult__$1,meta28627){
return (new cljs.core.async.t28626(cs__$1,ch__$1,mult__$1,meta28627));
});})(cs))
;

}

return (new cljs.core.async.t28626(cs,ch,cljs$core$async$mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__21542__auto___28847 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21542__auto___28847,cs,m,dchan,dctr,done){
return (function (){
var f__21543__auto__ = (function (){var switch__21486__auto__ = ((function (c__21542__auto___28847,cs,m,dchan,dctr,done){
return (function (state_28759){
var state_val_28760 = (state_28759[(1)]);
if((state_val_28760 === (7))){
var inst_28755 = (state_28759[(2)]);
var state_28759__$1 = state_28759;
var statearr_28761_28848 = state_28759__$1;
(statearr_28761_28848[(2)] = inst_28755);

(statearr_28761_28848[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28760 === (20))){
var inst_28660 = (state_28759[(7)]);
var inst_28670 = cljs.core.first.call(null,inst_28660);
var inst_28671 = cljs.core.nth.call(null,inst_28670,(0),null);
var inst_28672 = cljs.core.nth.call(null,inst_28670,(1),null);
var state_28759__$1 = (function (){var statearr_28762 = state_28759;
(statearr_28762[(8)] = inst_28671);

return statearr_28762;
})();
if(cljs.core.truth_(inst_28672)){
var statearr_28763_28849 = state_28759__$1;
(statearr_28763_28849[(1)] = (22));

} else {
var statearr_28764_28850 = state_28759__$1;
(statearr_28764_28850[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28760 === (27))){
var inst_28707 = (state_28759[(9)]);
var inst_28631 = (state_28759[(10)]);
var inst_28702 = (state_28759[(11)]);
var inst_28700 = (state_28759[(12)]);
var inst_28707__$1 = cljs.core._nth.call(null,inst_28700,inst_28702);
var inst_28708 = cljs.core.async.put_BANG_.call(null,inst_28707__$1,inst_28631,done);
var state_28759__$1 = (function (){var statearr_28765 = state_28759;
(statearr_28765[(9)] = inst_28707__$1);

return statearr_28765;
})();
if(cljs.core.truth_(inst_28708)){
var statearr_28766_28851 = state_28759__$1;
(statearr_28766_28851[(1)] = (30));

} else {
var statearr_28767_28852 = state_28759__$1;
(statearr_28767_28852[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28760 === (1))){
var state_28759__$1 = state_28759;
var statearr_28768_28853 = state_28759__$1;
(statearr_28768_28853[(2)] = null);

(statearr_28768_28853[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28760 === (24))){
var inst_28660 = (state_28759[(7)]);
var inst_28677 = (state_28759[(2)]);
var inst_28678 = cljs.core.next.call(null,inst_28660);
var inst_28640 = inst_28678;
var inst_28641 = null;
var inst_28642 = (0);
var inst_28643 = (0);
var state_28759__$1 = (function (){var statearr_28769 = state_28759;
(statearr_28769[(13)] = inst_28677);

(statearr_28769[(14)] = inst_28640);

(statearr_28769[(15)] = inst_28642);

(statearr_28769[(16)] = inst_28643);

(statearr_28769[(17)] = inst_28641);

return statearr_28769;
})();
var statearr_28770_28854 = state_28759__$1;
(statearr_28770_28854[(2)] = null);

(statearr_28770_28854[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28760 === (39))){
var state_28759__$1 = state_28759;
var statearr_28774_28855 = state_28759__$1;
(statearr_28774_28855[(2)] = null);

(statearr_28774_28855[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28760 === (4))){
var inst_28631 = (state_28759[(10)]);
var inst_28631__$1 = (state_28759[(2)]);
var inst_28632 = (inst_28631__$1 == null);
var state_28759__$1 = (function (){var statearr_28775 = state_28759;
(statearr_28775[(10)] = inst_28631__$1);

return statearr_28775;
})();
if(cljs.core.truth_(inst_28632)){
var statearr_28776_28856 = state_28759__$1;
(statearr_28776_28856[(1)] = (5));

} else {
var statearr_28777_28857 = state_28759__$1;
(statearr_28777_28857[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28760 === (15))){
var inst_28640 = (state_28759[(14)]);
var inst_28642 = (state_28759[(15)]);
var inst_28643 = (state_28759[(16)]);
var inst_28641 = (state_28759[(17)]);
var inst_28656 = (state_28759[(2)]);
var inst_28657 = (inst_28643 + (1));
var tmp28771 = inst_28640;
var tmp28772 = inst_28642;
var tmp28773 = inst_28641;
var inst_28640__$1 = tmp28771;
var inst_28641__$1 = tmp28773;
var inst_28642__$1 = tmp28772;
var inst_28643__$1 = inst_28657;
var state_28759__$1 = (function (){var statearr_28778 = state_28759;
(statearr_28778[(14)] = inst_28640__$1);

(statearr_28778[(15)] = inst_28642__$1);

(statearr_28778[(16)] = inst_28643__$1);

(statearr_28778[(18)] = inst_28656);

(statearr_28778[(17)] = inst_28641__$1);

return statearr_28778;
})();
var statearr_28779_28858 = state_28759__$1;
(statearr_28779_28858[(2)] = null);

(statearr_28779_28858[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28760 === (21))){
var inst_28681 = (state_28759[(2)]);
var state_28759__$1 = state_28759;
var statearr_28783_28859 = state_28759__$1;
(statearr_28783_28859[(2)] = inst_28681);

(statearr_28783_28859[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28760 === (31))){
var inst_28707 = (state_28759[(9)]);
var inst_28711 = done.call(null,null);
var inst_28712 = cljs.core.async.untap_STAR_.call(null,m,inst_28707);
var state_28759__$1 = (function (){var statearr_28784 = state_28759;
(statearr_28784[(19)] = inst_28711);

return statearr_28784;
})();
var statearr_28785_28860 = state_28759__$1;
(statearr_28785_28860[(2)] = inst_28712);

(statearr_28785_28860[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28760 === (32))){
var inst_28699 = (state_28759[(20)]);
var inst_28702 = (state_28759[(11)]);
var inst_28700 = (state_28759[(12)]);
var inst_28701 = (state_28759[(21)]);
var inst_28714 = (state_28759[(2)]);
var inst_28715 = (inst_28702 + (1));
var tmp28780 = inst_28699;
var tmp28781 = inst_28700;
var tmp28782 = inst_28701;
var inst_28699__$1 = tmp28780;
var inst_28700__$1 = tmp28781;
var inst_28701__$1 = tmp28782;
var inst_28702__$1 = inst_28715;
var state_28759__$1 = (function (){var statearr_28786 = state_28759;
(statearr_28786[(20)] = inst_28699__$1);

(statearr_28786[(11)] = inst_28702__$1);

(statearr_28786[(12)] = inst_28700__$1);

(statearr_28786[(22)] = inst_28714);

(statearr_28786[(21)] = inst_28701__$1);

return statearr_28786;
})();
var statearr_28787_28861 = state_28759__$1;
(statearr_28787_28861[(2)] = null);

(statearr_28787_28861[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28760 === (40))){
var inst_28727 = (state_28759[(23)]);
var inst_28731 = done.call(null,null);
var inst_28732 = cljs.core.async.untap_STAR_.call(null,m,inst_28727);
var state_28759__$1 = (function (){var statearr_28788 = state_28759;
(statearr_28788[(24)] = inst_28731);

return statearr_28788;
})();
var statearr_28789_28862 = state_28759__$1;
(statearr_28789_28862[(2)] = inst_28732);

(statearr_28789_28862[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28760 === (33))){
var inst_28718 = (state_28759[(25)]);
var inst_28720 = cljs.core.chunked_seq_QMARK_.call(null,inst_28718);
var state_28759__$1 = state_28759;
if(inst_28720){
var statearr_28790_28863 = state_28759__$1;
(statearr_28790_28863[(1)] = (36));

} else {
var statearr_28791_28864 = state_28759__$1;
(statearr_28791_28864[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28760 === (13))){
var inst_28650 = (state_28759[(26)]);
var inst_28653 = cljs.core.async.close_BANG_.call(null,inst_28650);
var state_28759__$1 = state_28759;
var statearr_28792_28865 = state_28759__$1;
(statearr_28792_28865[(2)] = inst_28653);

(statearr_28792_28865[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28760 === (22))){
var inst_28671 = (state_28759[(8)]);
var inst_28674 = cljs.core.async.close_BANG_.call(null,inst_28671);
var state_28759__$1 = state_28759;
var statearr_28793_28866 = state_28759__$1;
(statearr_28793_28866[(2)] = inst_28674);

(statearr_28793_28866[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28760 === (36))){
var inst_28718 = (state_28759[(25)]);
var inst_28722 = cljs.core.chunk_first.call(null,inst_28718);
var inst_28723 = cljs.core.chunk_rest.call(null,inst_28718);
var inst_28724 = cljs.core.count.call(null,inst_28722);
var inst_28699 = inst_28723;
var inst_28700 = inst_28722;
var inst_28701 = inst_28724;
var inst_28702 = (0);
var state_28759__$1 = (function (){var statearr_28794 = state_28759;
(statearr_28794[(20)] = inst_28699);

(statearr_28794[(11)] = inst_28702);

(statearr_28794[(12)] = inst_28700);

(statearr_28794[(21)] = inst_28701);

return statearr_28794;
})();
var statearr_28795_28867 = state_28759__$1;
(statearr_28795_28867[(2)] = null);

(statearr_28795_28867[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28760 === (41))){
var inst_28718 = (state_28759[(25)]);
var inst_28734 = (state_28759[(2)]);
var inst_28735 = cljs.core.next.call(null,inst_28718);
var inst_28699 = inst_28735;
var inst_28700 = null;
var inst_28701 = (0);
var inst_28702 = (0);
var state_28759__$1 = (function (){var statearr_28796 = state_28759;
(statearr_28796[(20)] = inst_28699);

(statearr_28796[(11)] = inst_28702);

(statearr_28796[(12)] = inst_28700);

(statearr_28796[(21)] = inst_28701);

(statearr_28796[(27)] = inst_28734);

return statearr_28796;
})();
var statearr_28797_28868 = state_28759__$1;
(statearr_28797_28868[(2)] = null);

(statearr_28797_28868[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28760 === (43))){
var state_28759__$1 = state_28759;
var statearr_28798_28869 = state_28759__$1;
(statearr_28798_28869[(2)] = null);

(statearr_28798_28869[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28760 === (29))){
var inst_28743 = (state_28759[(2)]);
var state_28759__$1 = state_28759;
var statearr_28799_28870 = state_28759__$1;
(statearr_28799_28870[(2)] = inst_28743);

(statearr_28799_28870[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28760 === (44))){
var inst_28752 = (state_28759[(2)]);
var state_28759__$1 = (function (){var statearr_28800 = state_28759;
(statearr_28800[(28)] = inst_28752);

return statearr_28800;
})();
var statearr_28801_28871 = state_28759__$1;
(statearr_28801_28871[(2)] = null);

(statearr_28801_28871[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28760 === (6))){
var inst_28691 = (state_28759[(29)]);
var inst_28690 = cljs.core.deref.call(null,cs);
var inst_28691__$1 = cljs.core.keys.call(null,inst_28690);
var inst_28692 = cljs.core.count.call(null,inst_28691__$1);
var inst_28693 = cljs.core.reset_BANG_.call(null,dctr,inst_28692);
var inst_28698 = cljs.core.seq.call(null,inst_28691__$1);
var inst_28699 = inst_28698;
var inst_28700 = null;
var inst_28701 = (0);
var inst_28702 = (0);
var state_28759__$1 = (function (){var statearr_28802 = state_28759;
(statearr_28802[(20)] = inst_28699);

(statearr_28802[(11)] = inst_28702);

(statearr_28802[(29)] = inst_28691__$1);

(statearr_28802[(12)] = inst_28700);

(statearr_28802[(21)] = inst_28701);

(statearr_28802[(30)] = inst_28693);

return statearr_28802;
})();
var statearr_28803_28872 = state_28759__$1;
(statearr_28803_28872[(2)] = null);

(statearr_28803_28872[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28760 === (28))){
var inst_28699 = (state_28759[(20)]);
var inst_28718 = (state_28759[(25)]);
var inst_28718__$1 = cljs.core.seq.call(null,inst_28699);
var state_28759__$1 = (function (){var statearr_28804 = state_28759;
(statearr_28804[(25)] = inst_28718__$1);

return statearr_28804;
})();
if(inst_28718__$1){
var statearr_28805_28873 = state_28759__$1;
(statearr_28805_28873[(1)] = (33));

} else {
var statearr_28806_28874 = state_28759__$1;
(statearr_28806_28874[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28760 === (25))){
var inst_28702 = (state_28759[(11)]);
var inst_28701 = (state_28759[(21)]);
var inst_28704 = (inst_28702 < inst_28701);
var inst_28705 = inst_28704;
var state_28759__$1 = state_28759;
if(cljs.core.truth_(inst_28705)){
var statearr_28807_28875 = state_28759__$1;
(statearr_28807_28875[(1)] = (27));

} else {
var statearr_28808_28876 = state_28759__$1;
(statearr_28808_28876[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28760 === (34))){
var state_28759__$1 = state_28759;
var statearr_28809_28877 = state_28759__$1;
(statearr_28809_28877[(2)] = null);

(statearr_28809_28877[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28760 === (17))){
var state_28759__$1 = state_28759;
var statearr_28810_28878 = state_28759__$1;
(statearr_28810_28878[(2)] = null);

(statearr_28810_28878[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28760 === (3))){
var inst_28757 = (state_28759[(2)]);
var state_28759__$1 = state_28759;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28759__$1,inst_28757);
} else {
if((state_val_28760 === (12))){
var inst_28686 = (state_28759[(2)]);
var state_28759__$1 = state_28759;
var statearr_28811_28879 = state_28759__$1;
(statearr_28811_28879[(2)] = inst_28686);

(statearr_28811_28879[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28760 === (2))){
var state_28759__$1 = state_28759;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28759__$1,(4),ch);
} else {
if((state_val_28760 === (23))){
var state_28759__$1 = state_28759;
var statearr_28812_28880 = state_28759__$1;
(statearr_28812_28880[(2)] = null);

(statearr_28812_28880[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28760 === (35))){
var inst_28741 = (state_28759[(2)]);
var state_28759__$1 = state_28759;
var statearr_28813_28881 = state_28759__$1;
(statearr_28813_28881[(2)] = inst_28741);

(statearr_28813_28881[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28760 === (19))){
var inst_28660 = (state_28759[(7)]);
var inst_28664 = cljs.core.chunk_first.call(null,inst_28660);
var inst_28665 = cljs.core.chunk_rest.call(null,inst_28660);
var inst_28666 = cljs.core.count.call(null,inst_28664);
var inst_28640 = inst_28665;
var inst_28641 = inst_28664;
var inst_28642 = inst_28666;
var inst_28643 = (0);
var state_28759__$1 = (function (){var statearr_28814 = state_28759;
(statearr_28814[(14)] = inst_28640);

(statearr_28814[(15)] = inst_28642);

(statearr_28814[(16)] = inst_28643);

(statearr_28814[(17)] = inst_28641);

return statearr_28814;
})();
var statearr_28815_28882 = state_28759__$1;
(statearr_28815_28882[(2)] = null);

(statearr_28815_28882[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28760 === (11))){
var inst_28640 = (state_28759[(14)]);
var inst_28660 = (state_28759[(7)]);
var inst_28660__$1 = cljs.core.seq.call(null,inst_28640);
var state_28759__$1 = (function (){var statearr_28816 = state_28759;
(statearr_28816[(7)] = inst_28660__$1);

return statearr_28816;
})();
if(inst_28660__$1){
var statearr_28817_28883 = state_28759__$1;
(statearr_28817_28883[(1)] = (16));

} else {
var statearr_28818_28884 = state_28759__$1;
(statearr_28818_28884[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28760 === (9))){
var inst_28688 = (state_28759[(2)]);
var state_28759__$1 = state_28759;
var statearr_28819_28885 = state_28759__$1;
(statearr_28819_28885[(2)] = inst_28688);

(statearr_28819_28885[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28760 === (5))){
var inst_28638 = cljs.core.deref.call(null,cs);
var inst_28639 = cljs.core.seq.call(null,inst_28638);
var inst_28640 = inst_28639;
var inst_28641 = null;
var inst_28642 = (0);
var inst_28643 = (0);
var state_28759__$1 = (function (){var statearr_28820 = state_28759;
(statearr_28820[(14)] = inst_28640);

(statearr_28820[(15)] = inst_28642);

(statearr_28820[(16)] = inst_28643);

(statearr_28820[(17)] = inst_28641);

return statearr_28820;
})();
var statearr_28821_28886 = state_28759__$1;
(statearr_28821_28886[(2)] = null);

(statearr_28821_28886[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28760 === (14))){
var state_28759__$1 = state_28759;
var statearr_28822_28887 = state_28759__$1;
(statearr_28822_28887[(2)] = null);

(statearr_28822_28887[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28760 === (45))){
var inst_28749 = (state_28759[(2)]);
var state_28759__$1 = state_28759;
var statearr_28823_28888 = state_28759__$1;
(statearr_28823_28888[(2)] = inst_28749);

(statearr_28823_28888[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28760 === (26))){
var inst_28691 = (state_28759[(29)]);
var inst_28745 = (state_28759[(2)]);
var inst_28746 = cljs.core.seq.call(null,inst_28691);
var state_28759__$1 = (function (){var statearr_28824 = state_28759;
(statearr_28824[(31)] = inst_28745);

return statearr_28824;
})();
if(inst_28746){
var statearr_28825_28889 = state_28759__$1;
(statearr_28825_28889[(1)] = (42));

} else {
var statearr_28826_28890 = state_28759__$1;
(statearr_28826_28890[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28760 === (16))){
var inst_28660 = (state_28759[(7)]);
var inst_28662 = cljs.core.chunked_seq_QMARK_.call(null,inst_28660);
var state_28759__$1 = state_28759;
if(inst_28662){
var statearr_28827_28891 = state_28759__$1;
(statearr_28827_28891[(1)] = (19));

} else {
var statearr_28828_28892 = state_28759__$1;
(statearr_28828_28892[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28760 === (38))){
var inst_28738 = (state_28759[(2)]);
var state_28759__$1 = state_28759;
var statearr_28829_28893 = state_28759__$1;
(statearr_28829_28893[(2)] = inst_28738);

(statearr_28829_28893[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28760 === (30))){
var state_28759__$1 = state_28759;
var statearr_28830_28894 = state_28759__$1;
(statearr_28830_28894[(2)] = null);

(statearr_28830_28894[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28760 === (10))){
var inst_28643 = (state_28759[(16)]);
var inst_28641 = (state_28759[(17)]);
var inst_28649 = cljs.core._nth.call(null,inst_28641,inst_28643);
var inst_28650 = cljs.core.nth.call(null,inst_28649,(0),null);
var inst_28651 = cljs.core.nth.call(null,inst_28649,(1),null);
var state_28759__$1 = (function (){var statearr_28831 = state_28759;
(statearr_28831[(26)] = inst_28650);

return statearr_28831;
})();
if(cljs.core.truth_(inst_28651)){
var statearr_28832_28895 = state_28759__$1;
(statearr_28832_28895[(1)] = (13));

} else {
var statearr_28833_28896 = state_28759__$1;
(statearr_28833_28896[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28760 === (18))){
var inst_28684 = (state_28759[(2)]);
var state_28759__$1 = state_28759;
var statearr_28834_28897 = state_28759__$1;
(statearr_28834_28897[(2)] = inst_28684);

(statearr_28834_28897[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28760 === (42))){
var state_28759__$1 = state_28759;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28759__$1,(45),dchan);
} else {
if((state_val_28760 === (37))){
var inst_28631 = (state_28759[(10)]);
var inst_28718 = (state_28759[(25)]);
var inst_28727 = (state_28759[(23)]);
var inst_28727__$1 = cljs.core.first.call(null,inst_28718);
var inst_28728 = cljs.core.async.put_BANG_.call(null,inst_28727__$1,inst_28631,done);
var state_28759__$1 = (function (){var statearr_28835 = state_28759;
(statearr_28835[(23)] = inst_28727__$1);

return statearr_28835;
})();
if(cljs.core.truth_(inst_28728)){
var statearr_28836_28898 = state_28759__$1;
(statearr_28836_28898[(1)] = (39));

} else {
var statearr_28837_28899 = state_28759__$1;
(statearr_28837_28899[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28760 === (8))){
var inst_28642 = (state_28759[(15)]);
var inst_28643 = (state_28759[(16)]);
var inst_28645 = (inst_28643 < inst_28642);
var inst_28646 = inst_28645;
var state_28759__$1 = state_28759;
if(cljs.core.truth_(inst_28646)){
var statearr_28838_28900 = state_28759__$1;
(statearr_28838_28900[(1)] = (10));

} else {
var statearr_28839_28901 = state_28759__$1;
(statearr_28839_28901[(1)] = (11));

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
}
}
}
}
}
}
}
}
});})(c__21542__auto___28847,cs,m,dchan,dctr,done))
;
return ((function (switch__21486__auto__,c__21542__auto___28847,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__21487__auto__ = null;
var cljs$core$async$mult_$_state_machine__21487__auto____0 = (function (){
var statearr_28843 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28843[(0)] = cljs$core$async$mult_$_state_machine__21487__auto__);

(statearr_28843[(1)] = (1));

return statearr_28843;
});
var cljs$core$async$mult_$_state_machine__21487__auto____1 = (function (state_28759){
while(true){
var ret_value__21488__auto__ = (function (){try{while(true){
var result__21489__auto__ = switch__21486__auto__.call(null,state_28759);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21489__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21489__auto__;
}
break;
}
}catch (e28844){if((e28844 instanceof Object)){
var ex__21490__auto__ = e28844;
var statearr_28845_28902 = state_28759;
(statearr_28845_28902[(5)] = ex__21490__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28759);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28844;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21488__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28903 = state_28759;
state_28759 = G__28903;
continue;
} else {
return ret_value__21488__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__21487__auto__ = function(state_28759){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__21487__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__21487__auto____1.call(this,state_28759);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__21487__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__21487__auto____0;
cljs$core$async$mult_$_state_machine__21487__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__21487__auto____1;
return cljs$core$async$mult_$_state_machine__21487__auto__;
})()
;})(switch__21486__auto__,c__21542__auto___28847,cs,m,dchan,dctr,done))
})();
var state__21544__auto__ = (function (){var statearr_28846 = f__21543__auto__.call(null);
(statearr_28846[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21542__auto___28847);

return statearr_28846;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21544__auto__);
});})(c__21542__auto___28847,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 * By default the channel will be closed when the source closes,
 * but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function() {
var cljs$core$async$tap = null;
var cljs$core$async$tap__2 = (function (mult,ch){
return cljs$core$async$tap.call(null,mult,ch,true);
});
var cljs$core$async$tap__3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});
cljs$core$async$tap = function(mult,ch,close_QMARK_){
switch(arguments.length){
case 2:
return cljs$core$async$tap__2.call(this,mult,ch);
case 3:
return cljs$core$async$tap__3.call(this,mult,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$tap.cljs$core$IFn$_invoke$arity$2 = cljs$core$async$tap__2;
cljs$core$async$tap.cljs$core$IFn$_invoke$arity$3 = cljs$core$async$tap__3;
return cljs$core$async$tap;
})()
;
/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

cljs.core.async.Mix = (function (){var obj28905 = {};
return obj28905;
})();

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((function (){var and__17844__auto__ = m;
if(and__17844__auto__){
return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else {
return and__17844__auto__;
}
})()){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__18492__auto__ = (((m == null))?null:m);
return (function (){var or__17856__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__18492__auto__)]);
if(or__17856__auto__){
return or__17856__auto__;
} else {
var or__17856__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(or__17856__auto____$1){
return or__17856__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((function (){var and__17844__auto__ = m;
if(and__17844__auto__){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else {
return and__17844__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__18492__auto__ = (((m == null))?null:m);
return (function (){var or__17856__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__18492__auto__)]);
if(or__17856__auto__){
return or__17856__auto__;
} else {
var or__17856__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(or__17856__auto____$1){
return or__17856__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((function (){var and__17844__auto__ = m;
if(and__17844__auto__){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else {
return and__17844__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__18492__auto__ = (((m == null))?null:m);
return (function (){var or__17856__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__18492__auto__)]);
if(or__17856__auto__){
return or__17856__auto__;
} else {
var or__17856__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(or__17856__auto____$1){
return or__17856__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((function (){var and__17844__auto__ = m;
if(and__17844__auto__){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else {
return and__17844__auto__;
}
})()){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__18492__auto__ = (((m == null))?null:m);
return (function (){var or__17856__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__18492__auto__)]);
if(or__17856__auto__){
return or__17856__auto__;
} else {
var or__17856__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(or__17856__auto____$1){
return or__17856__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((function (){var and__17844__auto__ = m;
if(and__17844__auto__){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else {
return and__17844__auto__;
}
})()){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__18492__auto__ = (((m == null))?null:m);
return (function (){var or__17856__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__18492__auto__)]);
if(or__17856__auto__){
return or__17856__auto__;
} else {
var or__17856__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(or__17856__auto____$1){
return or__17856__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
})().call(null,m,mode);
}
});

/**
 * @param {...*} var_args
 */
cljs.core.async.ioc_alts_BANG_ = (function() { 
var cljs$core$async$ioc_alts_BANG___delegate = function (state,cont_block,ports,p__28906){
var map__28911 = p__28906;
var map__28911__$1 = ((cljs.core.seq_QMARK_.call(null,map__28911))?cljs.core.apply.call(null,cljs.core.hash_map,map__28911):map__28911);
var opts = map__28911__$1;
var statearr_28912_28915 = state;
(statearr_28912_28915[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4126__auto__ = cljs.core.async.do_alts.call(null,((function (map__28911,map__28911__$1,opts){
return (function (val){
var statearr_28913_28916 = state;
(statearr_28913_28916[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__28911,map__28911__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4126__auto__)){
var cb = temp__4126__auto__;
var statearr_28914_28917 = state;
(statearr_28914_28917[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
};
var cljs$core$async$ioc_alts_BANG_ = function (state,cont_block,ports,var_args){
var p__28906 = null;
if (arguments.length > 3) {
var G__28918__i = 0, G__28918__a = new Array(arguments.length -  3);
while (G__28918__i < G__28918__a.length) {G__28918__a[G__28918__i] = arguments[G__28918__i + 3]; ++G__28918__i;}
  p__28906 = new cljs.core.IndexedSeq(G__28918__a,0);
} 
return cljs$core$async$ioc_alts_BANG___delegate.call(this,state,cont_block,ports,p__28906);};
cljs$core$async$ioc_alts_BANG_.cljs$lang$maxFixedArity = 3;
cljs$core$async$ioc_alts_BANG_.cljs$lang$applyTo = (function (arglist__28919){
var state = cljs.core.first(arglist__28919);
arglist__28919 = cljs.core.next(arglist__28919);
var cont_block = cljs.core.first(arglist__28919);
arglist__28919 = cljs.core.next(arglist__28919);
var ports = cljs.core.first(arglist__28919);
var p__28906 = cljs.core.rest(arglist__28919);
return cljs$core$async$ioc_alts_BANG___delegate(state,cont_block,ports,p__28906);
});
cljs$core$async$ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = cljs$core$async$ioc_alts_BANG___delegate;
return cljs$core$async$ioc_alts_BANG_;
})()
;
/**
 * Creates and returns a mix of one or more input channels which will
 * be put on the supplied out channel. Input sources can be added to
 * the mix with 'admix', and removed with 'unmix'. A mix supports
 * soloing, muting and pausing multiple inputs atomically using
 * 'toggle', and can solo using either muting or pausing as determined
 * by 'solo-mode'.
 * 
 * Each channel can have zero or more boolean modes set via 'toggle':
 * 
 * :solo - when true, only this (ond other soloed) channel(s) will appear
 * in the mix output channel. :mute and :pause states of soloed
 * channels are ignored. If solo-mode is :mute, non-soloed
 * channels are muted, if :pause, non-soloed channels are
 * paused.
 * 
 * :mute - muted channels will have their contents consumed but not included in the mix
 * :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t29039 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t29039 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta29040){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta29040 = meta29040;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t29039.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t29039.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t29039.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t29039.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t29039.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t29039.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null))))].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t29039.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t29039.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t29039.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_29041){
var self__ = this;
var _29041__$1 = this;
return self__.meta29040;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t29039.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_29041,meta29040__$1){
var self__ = this;
var _29041__$1 = this;
return (new cljs.core.async.t29039(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta29040__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t29039.cljs$lang$type = true;

cljs.core.async.t29039.cljs$lang$ctorStr = "cljs.core.async/t29039";

cljs.core.async.t29039.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__18435__auto__,writer__18436__auto__,opt__18437__auto__){
return cljs.core._write.call(null,writer__18436__auto__,"cljs.core.async/t29039");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t29039 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t29039(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta29040){
return (new cljs.core.async.t29039(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta29040));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t29039(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__21542__auto___29158 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21542__auto___29158,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__21543__auto__ = (function (){var switch__21486__auto__ = ((function (c__21542__auto___29158,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_29111){
var state_val_29112 = (state_29111[(1)]);
if((state_val_29112 === (7))){
var inst_29055 = (state_29111[(7)]);
var inst_29060 = cljs.core.apply.call(null,cljs.core.hash_map,inst_29055);
var state_29111__$1 = state_29111;
var statearr_29113_29159 = state_29111__$1;
(statearr_29113_29159[(2)] = inst_29060);

(statearr_29113_29159[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29112 === (20))){
var inst_29070 = (state_29111[(8)]);
var state_29111__$1 = state_29111;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29111__$1,(23),out,inst_29070);
} else {
if((state_val_29112 === (1))){
var inst_29045 = (state_29111[(9)]);
var inst_29045__$1 = calc_state.call(null);
var inst_29046 = cljs.core.seq_QMARK_.call(null,inst_29045__$1);
var state_29111__$1 = (function (){var statearr_29114 = state_29111;
(statearr_29114[(9)] = inst_29045__$1);

return statearr_29114;
})();
if(inst_29046){
var statearr_29115_29160 = state_29111__$1;
(statearr_29115_29160[(1)] = (2));

} else {
var statearr_29116_29161 = state_29111__$1;
(statearr_29116_29161[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29112 === (24))){
var inst_29063 = (state_29111[(10)]);
var inst_29055 = inst_29063;
var state_29111__$1 = (function (){var statearr_29117 = state_29111;
(statearr_29117[(7)] = inst_29055);

return statearr_29117;
})();
var statearr_29118_29162 = state_29111__$1;
(statearr_29118_29162[(2)] = null);

(statearr_29118_29162[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29112 === (4))){
var inst_29045 = (state_29111[(9)]);
var inst_29051 = (state_29111[(2)]);
var inst_29052 = cljs.core.get.call(null,inst_29051,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_29053 = cljs.core.get.call(null,inst_29051,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_29054 = cljs.core.get.call(null,inst_29051,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_29055 = inst_29045;
var state_29111__$1 = (function (){var statearr_29119 = state_29111;
(statearr_29119[(7)] = inst_29055);

(statearr_29119[(11)] = inst_29054);

(statearr_29119[(12)] = inst_29052);

(statearr_29119[(13)] = inst_29053);

return statearr_29119;
})();
var statearr_29120_29163 = state_29111__$1;
(statearr_29120_29163[(2)] = null);

(statearr_29120_29163[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29112 === (15))){
var state_29111__$1 = state_29111;
var statearr_29121_29164 = state_29111__$1;
(statearr_29121_29164[(2)] = null);

(statearr_29121_29164[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29112 === (21))){
var inst_29063 = (state_29111[(10)]);
var inst_29055 = inst_29063;
var state_29111__$1 = (function (){var statearr_29122 = state_29111;
(statearr_29122[(7)] = inst_29055);

return statearr_29122;
})();
var statearr_29123_29165 = state_29111__$1;
(statearr_29123_29165[(2)] = null);

(statearr_29123_29165[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29112 === (13))){
var inst_29107 = (state_29111[(2)]);
var state_29111__$1 = state_29111;
var statearr_29124_29166 = state_29111__$1;
(statearr_29124_29166[(2)] = inst_29107);

(statearr_29124_29166[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29112 === (22))){
var inst_29105 = (state_29111[(2)]);
var state_29111__$1 = state_29111;
var statearr_29125_29167 = state_29111__$1;
(statearr_29125_29167[(2)] = inst_29105);

(statearr_29125_29167[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29112 === (6))){
var inst_29109 = (state_29111[(2)]);
var state_29111__$1 = state_29111;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29111__$1,inst_29109);
} else {
if((state_val_29112 === (25))){
var state_29111__$1 = state_29111;
var statearr_29126_29168 = state_29111__$1;
(statearr_29126_29168[(2)] = null);

(statearr_29126_29168[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29112 === (17))){
var inst_29085 = (state_29111[(14)]);
var state_29111__$1 = state_29111;
var statearr_29127_29169 = state_29111__$1;
(statearr_29127_29169[(2)] = inst_29085);

(statearr_29127_29169[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29112 === (3))){
var inst_29045 = (state_29111[(9)]);
var state_29111__$1 = state_29111;
var statearr_29128_29170 = state_29111__$1;
(statearr_29128_29170[(2)] = inst_29045);

(statearr_29128_29170[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29112 === (12))){
var inst_29085 = (state_29111[(14)]);
var inst_29066 = (state_29111[(15)]);
var inst_29071 = (state_29111[(16)]);
var inst_29085__$1 = inst_29066.call(null,inst_29071);
var state_29111__$1 = (function (){var statearr_29129 = state_29111;
(statearr_29129[(14)] = inst_29085__$1);

return statearr_29129;
})();
if(cljs.core.truth_(inst_29085__$1)){
var statearr_29130_29171 = state_29111__$1;
(statearr_29130_29171[(1)] = (17));

} else {
var statearr_29131_29172 = state_29111__$1;
(statearr_29131_29172[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29112 === (2))){
var inst_29045 = (state_29111[(9)]);
var inst_29048 = cljs.core.apply.call(null,cljs.core.hash_map,inst_29045);
var state_29111__$1 = state_29111;
var statearr_29132_29173 = state_29111__$1;
(statearr_29132_29173[(2)] = inst_29048);

(statearr_29132_29173[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29112 === (23))){
var inst_29096 = (state_29111[(2)]);
var state_29111__$1 = state_29111;
if(cljs.core.truth_(inst_29096)){
var statearr_29133_29174 = state_29111__$1;
(statearr_29133_29174[(1)] = (24));

} else {
var statearr_29134_29175 = state_29111__$1;
(statearr_29134_29175[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29112 === (19))){
var inst_29093 = (state_29111[(2)]);
var state_29111__$1 = state_29111;
if(cljs.core.truth_(inst_29093)){
var statearr_29135_29176 = state_29111__$1;
(statearr_29135_29176[(1)] = (20));

} else {
var statearr_29136_29177 = state_29111__$1;
(statearr_29136_29177[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29112 === (11))){
var inst_29070 = (state_29111[(8)]);
var inst_29076 = (inst_29070 == null);
var state_29111__$1 = state_29111;
if(cljs.core.truth_(inst_29076)){
var statearr_29137_29178 = state_29111__$1;
(statearr_29137_29178[(1)] = (14));

} else {
var statearr_29138_29179 = state_29111__$1;
(statearr_29138_29179[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29112 === (9))){
var inst_29063 = (state_29111[(10)]);
var inst_29063__$1 = (state_29111[(2)]);
var inst_29064 = cljs.core.get.call(null,inst_29063__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_29065 = cljs.core.get.call(null,inst_29063__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_29066 = cljs.core.get.call(null,inst_29063__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var state_29111__$1 = (function (){var statearr_29139 = state_29111;
(statearr_29139[(17)] = inst_29065);

(statearr_29139[(15)] = inst_29066);

(statearr_29139[(10)] = inst_29063__$1);

return statearr_29139;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_29111__$1,(10),inst_29064);
} else {
if((state_val_29112 === (5))){
var inst_29055 = (state_29111[(7)]);
var inst_29058 = cljs.core.seq_QMARK_.call(null,inst_29055);
var state_29111__$1 = state_29111;
if(inst_29058){
var statearr_29140_29180 = state_29111__$1;
(statearr_29140_29180[(1)] = (7));

} else {
var statearr_29141_29181 = state_29111__$1;
(statearr_29141_29181[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29112 === (14))){
var inst_29071 = (state_29111[(16)]);
var inst_29078 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_29071);
var state_29111__$1 = state_29111;
var statearr_29142_29182 = state_29111__$1;
(statearr_29142_29182[(2)] = inst_29078);

(statearr_29142_29182[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29112 === (26))){
var inst_29101 = (state_29111[(2)]);
var state_29111__$1 = state_29111;
var statearr_29143_29183 = state_29111__$1;
(statearr_29143_29183[(2)] = inst_29101);

(statearr_29143_29183[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29112 === (16))){
var inst_29081 = (state_29111[(2)]);
var inst_29082 = calc_state.call(null);
var inst_29055 = inst_29082;
var state_29111__$1 = (function (){var statearr_29144 = state_29111;
(statearr_29144[(18)] = inst_29081);

(statearr_29144[(7)] = inst_29055);

return statearr_29144;
})();
var statearr_29145_29184 = state_29111__$1;
(statearr_29145_29184[(2)] = null);

(statearr_29145_29184[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29112 === (10))){
var inst_29070 = (state_29111[(8)]);
var inst_29071 = (state_29111[(16)]);
var inst_29069 = (state_29111[(2)]);
var inst_29070__$1 = cljs.core.nth.call(null,inst_29069,(0),null);
var inst_29071__$1 = cljs.core.nth.call(null,inst_29069,(1),null);
var inst_29072 = (inst_29070__$1 == null);
var inst_29073 = cljs.core._EQ_.call(null,inst_29071__$1,change);
var inst_29074 = (inst_29072) || (inst_29073);
var state_29111__$1 = (function (){var statearr_29146 = state_29111;
(statearr_29146[(8)] = inst_29070__$1);

(statearr_29146[(16)] = inst_29071__$1);

return statearr_29146;
})();
if(cljs.core.truth_(inst_29074)){
var statearr_29147_29185 = state_29111__$1;
(statearr_29147_29185[(1)] = (11));

} else {
var statearr_29148_29186 = state_29111__$1;
(statearr_29148_29186[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29112 === (18))){
var inst_29065 = (state_29111[(17)]);
var inst_29066 = (state_29111[(15)]);
var inst_29071 = (state_29111[(16)]);
var inst_29088 = cljs.core.empty_QMARK_.call(null,inst_29066);
var inst_29089 = inst_29065.call(null,inst_29071);
var inst_29090 = cljs.core.not.call(null,inst_29089);
var inst_29091 = (inst_29088) && (inst_29090);
var state_29111__$1 = state_29111;
var statearr_29149_29187 = state_29111__$1;
(statearr_29149_29187[(2)] = inst_29091);

(statearr_29149_29187[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29112 === (8))){
var inst_29055 = (state_29111[(7)]);
var state_29111__$1 = state_29111;
var statearr_29150_29188 = state_29111__$1;
(statearr_29150_29188[(2)] = inst_29055);

(statearr_29150_29188[(1)] = (9));


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
});})(c__21542__auto___29158,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__21486__auto__,c__21542__auto___29158,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__21487__auto__ = null;
var cljs$core$async$mix_$_state_machine__21487__auto____0 = (function (){
var statearr_29154 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29154[(0)] = cljs$core$async$mix_$_state_machine__21487__auto__);

(statearr_29154[(1)] = (1));

return statearr_29154;
});
var cljs$core$async$mix_$_state_machine__21487__auto____1 = (function (state_29111){
while(true){
var ret_value__21488__auto__ = (function (){try{while(true){
var result__21489__auto__ = switch__21486__auto__.call(null,state_29111);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21489__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21489__auto__;
}
break;
}
}catch (e29155){if((e29155 instanceof Object)){
var ex__21490__auto__ = e29155;
var statearr_29156_29189 = state_29111;
(statearr_29156_29189[(5)] = ex__21490__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29111);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29155;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21488__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29190 = state_29111;
state_29111 = G__29190;
continue;
} else {
return ret_value__21488__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__21487__auto__ = function(state_29111){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__21487__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__21487__auto____1.call(this,state_29111);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__21487__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__21487__auto____0;
cljs$core$async$mix_$_state_machine__21487__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__21487__auto____1;
return cljs$core$async$mix_$_state_machine__21487__auto__;
})()
;})(switch__21486__auto__,c__21542__auto___29158,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__21544__auto__ = (function (){var statearr_29157 = f__21543__auto__.call(null);
(statearr_29157[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21542__auto___29158);

return statearr_29157;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21544__auto__);
});})(c__21542__auto___29158,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 * state map is a map of channels -> channel-state-map. A
 * channel-state-map is a map of attrs -> boolean, where attr is one or
 * more of :mute, :pause or :solo. Any states supplied are merged with
 * the current state.
 * 
 * Note that channels can be added to a mix via toggle, which can be
 * used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

cljs.core.async.Pub = (function (){var obj29192 = {};
return obj29192;
})();

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((function (){var and__17844__auto__ = p;
if(and__17844__auto__){
return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else {
return and__17844__auto__;
}
})()){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__18492__auto__ = (((p == null))?null:p);
return (function (){var or__17856__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__18492__auto__)]);
if(or__17856__auto__){
return or__17856__auto__;
} else {
var or__17856__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(or__17856__auto____$1){
return or__17856__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((function (){var and__17844__auto__ = p;
if(and__17844__auto__){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else {
return and__17844__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__18492__auto__ = (((p == null))?null:p);
return (function (){var or__17856__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__18492__auto__)]);
if(or__17856__auto__){
return or__17856__auto__;
} else {
var or__17856__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(or__17856__auto____$1){
return or__17856__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});

cljs.core.async.unsub_all_STAR_ = (function() {
var cljs$core$async$unsub_all_STAR_ = null;
var cljs$core$async$unsub_all_STAR___1 = (function (p){
if((function (){var and__17844__auto__ = p;
if(and__17844__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else {
return and__17844__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__18492__auto__ = (((p == null))?null:p);
return (function (){var or__17856__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__18492__auto__)]);
if(or__17856__auto__){
return or__17856__auto__;
} else {
var or__17856__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__17856__auto____$1){
return or__17856__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var cljs$core$async$unsub_all_STAR___2 = (function (p,v){
if((function (){var and__17844__auto__ = p;
if(and__17844__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else {
return and__17844__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__18492__auto__ = (((p == null))?null:p);
return (function (){var or__17856__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__18492__auto__)]);
if(or__17856__auto__){
return or__17856__auto__;
} else {
var or__17856__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__17856__auto____$1){
return or__17856__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p,v);
}
});
cljs$core$async$unsub_all_STAR_ = function(p,v){
switch(arguments.length){
case 1:
return cljs$core$async$unsub_all_STAR___1.call(this,p);
case 2:
return cljs$core$async$unsub_all_STAR___2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$unsub_all_STAR___1;
cljs$core$async$unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = cljs$core$async$unsub_all_STAR___2;
return cljs$core$async$unsub_all_STAR_;
})()
;

/**
 * Creates and returns a pub(lication) of the supplied channel,
 * partitioned into topics by the topic-fn. topic-fn will be applied to
 * each value on the channel and the result will determine the 'topic'
 * on which that value will be put. Channels can be subscribed to
 * receive copies of topics using 'sub', and unsubscribed using
 * 'unsub'. Each topic will be handled by an internal mult on a
 * dedicated channel. By default these internal channels are
 * unbuffered, but a buf-fn can be supplied which, given a topic,
 * creates a buffer with desired properties.
 * 
 * Each item is distributed to all subs in parallel and synchronously,
 * i.e. each sub must accept before the next item is distributed. Use
 * buffering/windowing to prevent slow subs from holding up the pub.
 * 
 * Items received when there are no matching subs get dropped.
 * 
 * Note that if buf-fns are used then each topic is handled
 * asynchronously, i.e. if a channel is subscribed to more than one
 * topic it should not expect them to be interleaved identically with
 * the source.
 */
cljs.core.async.pub = (function() {
var cljs$core$async$pub = null;
var cljs$core$async$pub__2 = (function (ch,topic_fn){
return cljs$core$async$pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});
var cljs$core$async$pub__3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__17856__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__17856__auto__)){
return or__17856__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__17856__auto__,mults){
return (function (p1__29193_SHARP_){
if(cljs.core.truth_(p1__29193_SHARP_.call(null,topic))){
return p1__29193_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__29193_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__17856__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t29316 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t29316 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta29317){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta29317 = meta29317;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t29316.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t29316.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t29316.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4126__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4126__auto__)){
var m = temp__4126__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t29316.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t29316.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t29316.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t29316.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t29316.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_29318){
var self__ = this;
var _29318__$1 = this;
return self__.meta29317;
});})(mults,ensure_mult))
;

cljs.core.async.t29316.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_29318,meta29317__$1){
var self__ = this;
var _29318__$1 = this;
return (new cljs.core.async.t29316(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta29317__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t29316.cljs$lang$type = true;

cljs.core.async.t29316.cljs$lang$ctorStr = "cljs.core.async/t29316";

cljs.core.async.t29316.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__18435__auto__,writer__18436__auto__,opt__18437__auto__){
return cljs.core._write.call(null,writer__18436__auto__,"cljs.core.async/t29316");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t29316 = ((function (mults,ensure_mult){
return (function cljs$core$async$pub_$___GT_t29316(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta29317){
return (new cljs.core.async.t29316(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta29317));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t29316(ensure_mult,mults,buf_fn,topic_fn,ch,cljs$core$async$pub,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__21542__auto___29438 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21542__auto___29438,mults,ensure_mult,p){
return (function (){
var f__21543__auto__ = (function (){var switch__21486__auto__ = ((function (c__21542__auto___29438,mults,ensure_mult,p){
return (function (state_29390){
var state_val_29391 = (state_29390[(1)]);
if((state_val_29391 === (7))){
var inst_29386 = (state_29390[(2)]);
var state_29390__$1 = state_29390;
var statearr_29392_29439 = state_29390__$1;
(statearr_29392_29439[(2)] = inst_29386);

(statearr_29392_29439[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29391 === (20))){
var state_29390__$1 = state_29390;
var statearr_29393_29440 = state_29390__$1;
(statearr_29393_29440[(2)] = null);

(statearr_29393_29440[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29391 === (1))){
var state_29390__$1 = state_29390;
var statearr_29394_29441 = state_29390__$1;
(statearr_29394_29441[(2)] = null);

(statearr_29394_29441[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29391 === (24))){
var inst_29369 = (state_29390[(7)]);
var inst_29378 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_29369);
var state_29390__$1 = state_29390;
var statearr_29395_29442 = state_29390__$1;
(statearr_29395_29442[(2)] = inst_29378);

(statearr_29395_29442[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29391 === (4))){
var inst_29321 = (state_29390[(8)]);
var inst_29321__$1 = (state_29390[(2)]);
var inst_29322 = (inst_29321__$1 == null);
var state_29390__$1 = (function (){var statearr_29396 = state_29390;
(statearr_29396[(8)] = inst_29321__$1);

return statearr_29396;
})();
if(cljs.core.truth_(inst_29322)){
var statearr_29397_29443 = state_29390__$1;
(statearr_29397_29443[(1)] = (5));

} else {
var statearr_29398_29444 = state_29390__$1;
(statearr_29398_29444[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29391 === (15))){
var inst_29363 = (state_29390[(2)]);
var state_29390__$1 = state_29390;
var statearr_29399_29445 = state_29390__$1;
(statearr_29399_29445[(2)] = inst_29363);

(statearr_29399_29445[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29391 === (21))){
var inst_29383 = (state_29390[(2)]);
var state_29390__$1 = (function (){var statearr_29400 = state_29390;
(statearr_29400[(9)] = inst_29383);

return statearr_29400;
})();
var statearr_29401_29446 = state_29390__$1;
(statearr_29401_29446[(2)] = null);

(statearr_29401_29446[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29391 === (13))){
var inst_29345 = (state_29390[(10)]);
var inst_29347 = cljs.core.chunked_seq_QMARK_.call(null,inst_29345);
var state_29390__$1 = state_29390;
if(inst_29347){
var statearr_29402_29447 = state_29390__$1;
(statearr_29402_29447[(1)] = (16));

} else {
var statearr_29403_29448 = state_29390__$1;
(statearr_29403_29448[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29391 === (22))){
var inst_29375 = (state_29390[(2)]);
var state_29390__$1 = state_29390;
if(cljs.core.truth_(inst_29375)){
var statearr_29404_29449 = state_29390__$1;
(statearr_29404_29449[(1)] = (23));

} else {
var statearr_29405_29450 = state_29390__$1;
(statearr_29405_29450[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29391 === (6))){
var inst_29321 = (state_29390[(8)]);
var inst_29369 = (state_29390[(7)]);
var inst_29371 = (state_29390[(11)]);
var inst_29369__$1 = topic_fn.call(null,inst_29321);
var inst_29370 = cljs.core.deref.call(null,mults);
var inst_29371__$1 = cljs.core.get.call(null,inst_29370,inst_29369__$1);
var state_29390__$1 = (function (){var statearr_29406 = state_29390;
(statearr_29406[(7)] = inst_29369__$1);

(statearr_29406[(11)] = inst_29371__$1);

return statearr_29406;
})();
if(cljs.core.truth_(inst_29371__$1)){
var statearr_29407_29451 = state_29390__$1;
(statearr_29407_29451[(1)] = (19));

} else {
var statearr_29408_29452 = state_29390__$1;
(statearr_29408_29452[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29391 === (25))){
var inst_29380 = (state_29390[(2)]);
var state_29390__$1 = state_29390;
var statearr_29409_29453 = state_29390__$1;
(statearr_29409_29453[(2)] = inst_29380);

(statearr_29409_29453[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29391 === (17))){
var inst_29345 = (state_29390[(10)]);
var inst_29354 = cljs.core.first.call(null,inst_29345);
var inst_29355 = cljs.core.async.muxch_STAR_.call(null,inst_29354);
var inst_29356 = cljs.core.async.close_BANG_.call(null,inst_29355);
var inst_29357 = cljs.core.next.call(null,inst_29345);
var inst_29331 = inst_29357;
var inst_29332 = null;
var inst_29333 = (0);
var inst_29334 = (0);
var state_29390__$1 = (function (){var statearr_29410 = state_29390;
(statearr_29410[(12)] = inst_29331);

(statearr_29410[(13)] = inst_29334);

(statearr_29410[(14)] = inst_29333);

(statearr_29410[(15)] = inst_29332);

(statearr_29410[(16)] = inst_29356);

return statearr_29410;
})();
var statearr_29411_29454 = state_29390__$1;
(statearr_29411_29454[(2)] = null);

(statearr_29411_29454[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29391 === (3))){
var inst_29388 = (state_29390[(2)]);
var state_29390__$1 = state_29390;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29390__$1,inst_29388);
} else {
if((state_val_29391 === (12))){
var inst_29365 = (state_29390[(2)]);
var state_29390__$1 = state_29390;
var statearr_29412_29455 = state_29390__$1;
(statearr_29412_29455[(2)] = inst_29365);

(statearr_29412_29455[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29391 === (2))){
var state_29390__$1 = state_29390;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29390__$1,(4),ch);
} else {
if((state_val_29391 === (23))){
var state_29390__$1 = state_29390;
var statearr_29413_29456 = state_29390__$1;
(statearr_29413_29456[(2)] = null);

(statearr_29413_29456[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29391 === (19))){
var inst_29321 = (state_29390[(8)]);
var inst_29371 = (state_29390[(11)]);
var inst_29373 = cljs.core.async.muxch_STAR_.call(null,inst_29371);
var state_29390__$1 = state_29390;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29390__$1,(22),inst_29373,inst_29321);
} else {
if((state_val_29391 === (11))){
var inst_29331 = (state_29390[(12)]);
var inst_29345 = (state_29390[(10)]);
var inst_29345__$1 = cljs.core.seq.call(null,inst_29331);
var state_29390__$1 = (function (){var statearr_29414 = state_29390;
(statearr_29414[(10)] = inst_29345__$1);

return statearr_29414;
})();
if(inst_29345__$1){
var statearr_29415_29457 = state_29390__$1;
(statearr_29415_29457[(1)] = (13));

} else {
var statearr_29416_29458 = state_29390__$1;
(statearr_29416_29458[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29391 === (9))){
var inst_29367 = (state_29390[(2)]);
var state_29390__$1 = state_29390;
var statearr_29417_29459 = state_29390__$1;
(statearr_29417_29459[(2)] = inst_29367);

(statearr_29417_29459[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29391 === (5))){
var inst_29328 = cljs.core.deref.call(null,mults);
var inst_29329 = cljs.core.vals.call(null,inst_29328);
var inst_29330 = cljs.core.seq.call(null,inst_29329);
var inst_29331 = inst_29330;
var inst_29332 = null;
var inst_29333 = (0);
var inst_29334 = (0);
var state_29390__$1 = (function (){var statearr_29418 = state_29390;
(statearr_29418[(12)] = inst_29331);

(statearr_29418[(13)] = inst_29334);

(statearr_29418[(14)] = inst_29333);

(statearr_29418[(15)] = inst_29332);

return statearr_29418;
})();
var statearr_29419_29460 = state_29390__$1;
(statearr_29419_29460[(2)] = null);

(statearr_29419_29460[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29391 === (14))){
var state_29390__$1 = state_29390;
var statearr_29423_29461 = state_29390__$1;
(statearr_29423_29461[(2)] = null);

(statearr_29423_29461[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29391 === (16))){
var inst_29345 = (state_29390[(10)]);
var inst_29349 = cljs.core.chunk_first.call(null,inst_29345);
var inst_29350 = cljs.core.chunk_rest.call(null,inst_29345);
var inst_29351 = cljs.core.count.call(null,inst_29349);
var inst_29331 = inst_29350;
var inst_29332 = inst_29349;
var inst_29333 = inst_29351;
var inst_29334 = (0);
var state_29390__$1 = (function (){var statearr_29424 = state_29390;
(statearr_29424[(12)] = inst_29331);

(statearr_29424[(13)] = inst_29334);

(statearr_29424[(14)] = inst_29333);

(statearr_29424[(15)] = inst_29332);

return statearr_29424;
})();
var statearr_29425_29462 = state_29390__$1;
(statearr_29425_29462[(2)] = null);

(statearr_29425_29462[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29391 === (10))){
var inst_29331 = (state_29390[(12)]);
var inst_29334 = (state_29390[(13)]);
var inst_29333 = (state_29390[(14)]);
var inst_29332 = (state_29390[(15)]);
var inst_29339 = cljs.core._nth.call(null,inst_29332,inst_29334);
var inst_29340 = cljs.core.async.muxch_STAR_.call(null,inst_29339);
var inst_29341 = cljs.core.async.close_BANG_.call(null,inst_29340);
var inst_29342 = (inst_29334 + (1));
var tmp29420 = inst_29331;
var tmp29421 = inst_29333;
var tmp29422 = inst_29332;
var inst_29331__$1 = tmp29420;
var inst_29332__$1 = tmp29422;
var inst_29333__$1 = tmp29421;
var inst_29334__$1 = inst_29342;
var state_29390__$1 = (function (){var statearr_29426 = state_29390;
(statearr_29426[(12)] = inst_29331__$1);

(statearr_29426[(13)] = inst_29334__$1);

(statearr_29426[(14)] = inst_29333__$1);

(statearr_29426[(15)] = inst_29332__$1);

(statearr_29426[(17)] = inst_29341);

return statearr_29426;
})();
var statearr_29427_29463 = state_29390__$1;
(statearr_29427_29463[(2)] = null);

(statearr_29427_29463[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29391 === (18))){
var inst_29360 = (state_29390[(2)]);
var state_29390__$1 = state_29390;
var statearr_29428_29464 = state_29390__$1;
(statearr_29428_29464[(2)] = inst_29360);

(statearr_29428_29464[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29391 === (8))){
var inst_29334 = (state_29390[(13)]);
var inst_29333 = (state_29390[(14)]);
var inst_29336 = (inst_29334 < inst_29333);
var inst_29337 = inst_29336;
var state_29390__$1 = state_29390;
if(cljs.core.truth_(inst_29337)){
var statearr_29429_29465 = state_29390__$1;
(statearr_29429_29465[(1)] = (10));

} else {
var statearr_29430_29466 = state_29390__$1;
(statearr_29430_29466[(1)] = (11));

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
});})(c__21542__auto___29438,mults,ensure_mult,p))
;
return ((function (switch__21486__auto__,c__21542__auto___29438,mults,ensure_mult,p){
return (function() {
var cljs$core$async$pub_$_state_machine__21487__auto__ = null;
var cljs$core$async$pub_$_state_machine__21487__auto____0 = (function (){
var statearr_29434 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29434[(0)] = cljs$core$async$pub_$_state_machine__21487__auto__);

(statearr_29434[(1)] = (1));

return statearr_29434;
});
var cljs$core$async$pub_$_state_machine__21487__auto____1 = (function (state_29390){
while(true){
var ret_value__21488__auto__ = (function (){try{while(true){
var result__21489__auto__ = switch__21486__auto__.call(null,state_29390);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21489__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21489__auto__;
}
break;
}
}catch (e29435){if((e29435 instanceof Object)){
var ex__21490__auto__ = e29435;
var statearr_29436_29467 = state_29390;
(statearr_29436_29467[(5)] = ex__21490__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29390);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29435;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21488__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29468 = state_29390;
state_29390 = G__29468;
continue;
} else {
return ret_value__21488__auto__;
}
break;
}
});
cljs$core$async$pub_$_state_machine__21487__auto__ = function(state_29390){
switch(arguments.length){
case 0:
return cljs$core$async$pub_$_state_machine__21487__auto____0.call(this);
case 1:
return cljs$core$async$pub_$_state_machine__21487__auto____1.call(this,state_29390);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pub_$_state_machine__21487__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pub_$_state_machine__21487__auto____0;
cljs$core$async$pub_$_state_machine__21487__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pub_$_state_machine__21487__auto____1;
return cljs$core$async$pub_$_state_machine__21487__auto__;
})()
;})(switch__21486__auto__,c__21542__auto___29438,mults,ensure_mult,p))
})();
var state__21544__auto__ = (function (){var statearr_29437 = f__21543__auto__.call(null);
(statearr_29437[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21542__auto___29438);

return statearr_29437;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21544__auto__);
});})(c__21542__auto___29438,mults,ensure_mult,p))
);


return p;
});
cljs$core$async$pub = function(ch,topic_fn,buf_fn){
switch(arguments.length){
case 2:
return cljs$core$async$pub__2.call(this,ch,topic_fn);
case 3:
return cljs$core$async$pub__3.call(this,ch,topic_fn,buf_fn);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pub.cljs$core$IFn$_invoke$arity$2 = cljs$core$async$pub__2;
cljs$core$async$pub.cljs$core$IFn$_invoke$arity$3 = cljs$core$async$pub__3;
return cljs$core$async$pub;
})()
;
/**
 * Subscribes a channel to a topic of a pub.
 * 
 * By default the channel will be closed when the source closes,
 * but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function() {
var cljs$core$async$sub = null;
var cljs$core$async$sub__3 = (function (p,topic,ch){
return cljs$core$async$sub.call(null,p,topic,ch,true);
});
var cljs$core$async$sub__4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});
cljs$core$async$sub = function(p,topic,ch,close_QMARK_){
switch(arguments.length){
case 3:
return cljs$core$async$sub__3.call(this,p,topic,ch);
case 4:
return cljs$core$async$sub__4.call(this,p,topic,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$sub.cljs$core$IFn$_invoke$arity$3 = cljs$core$async$sub__3;
cljs$core$async$sub.cljs$core$IFn$_invoke$arity$4 = cljs$core$async$sub__4;
return cljs$core$async$sub;
})()
;
/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function() {
var cljs$core$async$unsub_all = null;
var cljs$core$async$unsub_all__1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});
var cljs$core$async$unsub_all__2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});
cljs$core$async$unsub_all = function(p,topic){
switch(arguments.length){
case 1:
return cljs$core$async$unsub_all__1.call(this,p);
case 2:
return cljs$core$async$unsub_all__2.call(this,p,topic);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$unsub_all.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$unsub_all__1;
cljs$core$async$unsub_all.cljs$core$IFn$_invoke$arity$2 = cljs$core$async$unsub_all__2;
return cljs$core$async$unsub_all;
})()
;
/**
 * Takes a function and a collection of source channels, and returns a
 * channel which contains the values produced by applying f to the set
 * of first items taken from each source channel, followed by applying
 * f to the set of second items from each channel, until any one of the
 * channels is closed, at which point the output channel will be
 * closed. The returned channel will be unbuffered by default, or a
 * buf-or-n can be supplied
 */
cljs.core.async.map = (function() {
var cljs$core$async$map = null;
var cljs$core$async$map__2 = (function (f,chs){
return cljs$core$async$map.call(null,f,chs,null);
});
var cljs$core$async$map__3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__21542__auto___29605 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21542__auto___29605,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__21543__auto__ = (function (){var switch__21486__auto__ = ((function (c__21542__auto___29605,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_29575){
var state_val_29576 = (state_29575[(1)]);
if((state_val_29576 === (7))){
var state_29575__$1 = state_29575;
var statearr_29577_29606 = state_29575__$1;
(statearr_29577_29606[(2)] = null);

(statearr_29577_29606[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29576 === (1))){
var state_29575__$1 = state_29575;
var statearr_29578_29607 = state_29575__$1;
(statearr_29578_29607[(2)] = null);

(statearr_29578_29607[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29576 === (4))){
var inst_29539 = (state_29575[(7)]);
var inst_29541 = (inst_29539 < cnt);
var state_29575__$1 = state_29575;
if(cljs.core.truth_(inst_29541)){
var statearr_29579_29608 = state_29575__$1;
(statearr_29579_29608[(1)] = (6));

} else {
var statearr_29580_29609 = state_29575__$1;
(statearr_29580_29609[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29576 === (15))){
var inst_29571 = (state_29575[(2)]);
var state_29575__$1 = state_29575;
var statearr_29581_29610 = state_29575__$1;
(statearr_29581_29610[(2)] = inst_29571);

(statearr_29581_29610[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29576 === (13))){
var inst_29564 = cljs.core.async.close_BANG_.call(null,out);
var state_29575__$1 = state_29575;
var statearr_29582_29611 = state_29575__$1;
(statearr_29582_29611[(2)] = inst_29564);

(statearr_29582_29611[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29576 === (6))){
var state_29575__$1 = state_29575;
var statearr_29583_29612 = state_29575__$1;
(statearr_29583_29612[(2)] = null);

(statearr_29583_29612[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29576 === (3))){
var inst_29573 = (state_29575[(2)]);
var state_29575__$1 = state_29575;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29575__$1,inst_29573);
} else {
if((state_val_29576 === (12))){
var inst_29561 = (state_29575[(8)]);
var inst_29561__$1 = (state_29575[(2)]);
var inst_29562 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_29561__$1);
var state_29575__$1 = (function (){var statearr_29584 = state_29575;
(statearr_29584[(8)] = inst_29561__$1);

return statearr_29584;
})();
if(cljs.core.truth_(inst_29562)){
var statearr_29585_29613 = state_29575__$1;
(statearr_29585_29613[(1)] = (13));

} else {
var statearr_29586_29614 = state_29575__$1;
(statearr_29586_29614[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29576 === (2))){
var inst_29538 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_29539 = (0);
var state_29575__$1 = (function (){var statearr_29587 = state_29575;
(statearr_29587[(9)] = inst_29538);

(statearr_29587[(7)] = inst_29539);

return statearr_29587;
})();
var statearr_29588_29615 = state_29575__$1;
(statearr_29588_29615[(2)] = null);

(statearr_29588_29615[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29576 === (11))){
var inst_29539 = (state_29575[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_29575,(10),Object,null,(9));
var inst_29548 = chs__$1.call(null,inst_29539);
var inst_29549 = done.call(null,inst_29539);
var inst_29550 = cljs.core.async.take_BANG_.call(null,inst_29548,inst_29549);
var state_29575__$1 = state_29575;
var statearr_29589_29616 = state_29575__$1;
(statearr_29589_29616[(2)] = inst_29550);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29575__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29576 === (9))){
var inst_29539 = (state_29575[(7)]);
var inst_29552 = (state_29575[(2)]);
var inst_29553 = (inst_29539 + (1));
var inst_29539__$1 = inst_29553;
var state_29575__$1 = (function (){var statearr_29590 = state_29575;
(statearr_29590[(10)] = inst_29552);

(statearr_29590[(7)] = inst_29539__$1);

return statearr_29590;
})();
var statearr_29591_29617 = state_29575__$1;
(statearr_29591_29617[(2)] = null);

(statearr_29591_29617[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29576 === (5))){
var inst_29559 = (state_29575[(2)]);
var state_29575__$1 = (function (){var statearr_29592 = state_29575;
(statearr_29592[(11)] = inst_29559);

return statearr_29592;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29575__$1,(12),dchan);
} else {
if((state_val_29576 === (14))){
var inst_29561 = (state_29575[(8)]);
var inst_29566 = cljs.core.apply.call(null,f,inst_29561);
var state_29575__$1 = state_29575;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29575__$1,(16),out,inst_29566);
} else {
if((state_val_29576 === (16))){
var inst_29568 = (state_29575[(2)]);
var state_29575__$1 = (function (){var statearr_29593 = state_29575;
(statearr_29593[(12)] = inst_29568);

return statearr_29593;
})();
var statearr_29594_29618 = state_29575__$1;
(statearr_29594_29618[(2)] = null);

(statearr_29594_29618[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29576 === (10))){
var inst_29543 = (state_29575[(2)]);
var inst_29544 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_29575__$1 = (function (){var statearr_29595 = state_29575;
(statearr_29595[(13)] = inst_29543);

return statearr_29595;
})();
var statearr_29596_29619 = state_29575__$1;
(statearr_29596_29619[(2)] = inst_29544);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29575__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29576 === (8))){
var inst_29557 = (state_29575[(2)]);
var state_29575__$1 = state_29575;
var statearr_29597_29620 = state_29575__$1;
(statearr_29597_29620[(2)] = inst_29557);

(statearr_29597_29620[(1)] = (5));


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
});})(c__21542__auto___29605,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__21486__auto__,c__21542__auto___29605,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$map_$_state_machine__21487__auto__ = null;
var cljs$core$async$map_$_state_machine__21487__auto____0 = (function (){
var statearr_29601 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29601[(0)] = cljs$core$async$map_$_state_machine__21487__auto__);

(statearr_29601[(1)] = (1));

return statearr_29601;
});
var cljs$core$async$map_$_state_machine__21487__auto____1 = (function (state_29575){
while(true){
var ret_value__21488__auto__ = (function (){try{while(true){
var result__21489__auto__ = switch__21486__auto__.call(null,state_29575);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21489__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21489__auto__;
}
break;
}
}catch (e29602){if((e29602 instanceof Object)){
var ex__21490__auto__ = e29602;
var statearr_29603_29621 = state_29575;
(statearr_29603_29621[(5)] = ex__21490__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29575);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29602;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21488__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29622 = state_29575;
state_29575 = G__29622;
continue;
} else {
return ret_value__21488__auto__;
}
break;
}
});
cljs$core$async$map_$_state_machine__21487__auto__ = function(state_29575){
switch(arguments.length){
case 0:
return cljs$core$async$map_$_state_machine__21487__auto____0.call(this);
case 1:
return cljs$core$async$map_$_state_machine__21487__auto____1.call(this,state_29575);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$map_$_state_machine__21487__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$map_$_state_machine__21487__auto____0;
cljs$core$async$map_$_state_machine__21487__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$map_$_state_machine__21487__auto____1;
return cljs$core$async$map_$_state_machine__21487__auto__;
})()
;})(switch__21486__auto__,c__21542__auto___29605,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__21544__auto__ = (function (){var statearr_29604 = f__21543__auto__.call(null);
(statearr_29604[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21542__auto___29605);

return statearr_29604;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21544__auto__);
});})(c__21542__auto___29605,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});
cljs$core$async$map = function(f,chs,buf_or_n){
switch(arguments.length){
case 2:
return cljs$core$async$map__2.call(this,f,chs);
case 3:
return cljs$core$async$map__3.call(this,f,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$map.cljs$core$IFn$_invoke$arity$2 = cljs$core$async$map__2;
cljs$core$async$map.cljs$core$IFn$_invoke$arity$3 = cljs$core$async$map__3;
return cljs$core$async$map;
})()
;
/**
 * Takes a collection of source channels and returns a channel which
 * contains all values taken from them. The returned channel will be
 * unbuffered by default, or a buf-or-n can be supplied. The channel
 * will close after all the source channels have closed.
 */
cljs.core.async.merge = (function() {
var cljs$core$async$merge = null;
var cljs$core$async$merge__1 = (function (chs){
return cljs$core$async$merge.call(null,chs,null);
});
var cljs$core$async$merge__2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__21542__auto___29730 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21542__auto___29730,out){
return (function (){
var f__21543__auto__ = (function (){var switch__21486__auto__ = ((function (c__21542__auto___29730,out){
return (function (state_29706){
var state_val_29707 = (state_29706[(1)]);
if((state_val_29707 === (7))){
var inst_29685 = (state_29706[(7)]);
var inst_29686 = (state_29706[(8)]);
var inst_29685__$1 = (state_29706[(2)]);
var inst_29686__$1 = cljs.core.nth.call(null,inst_29685__$1,(0),null);
var inst_29687 = cljs.core.nth.call(null,inst_29685__$1,(1),null);
var inst_29688 = (inst_29686__$1 == null);
var state_29706__$1 = (function (){var statearr_29708 = state_29706;
(statearr_29708[(9)] = inst_29687);

(statearr_29708[(7)] = inst_29685__$1);

(statearr_29708[(8)] = inst_29686__$1);

return statearr_29708;
})();
if(cljs.core.truth_(inst_29688)){
var statearr_29709_29731 = state_29706__$1;
(statearr_29709_29731[(1)] = (8));

} else {
var statearr_29710_29732 = state_29706__$1;
(statearr_29710_29732[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29707 === (1))){
var inst_29677 = cljs.core.vec.call(null,chs);
var inst_29678 = inst_29677;
var state_29706__$1 = (function (){var statearr_29711 = state_29706;
(statearr_29711[(10)] = inst_29678);

return statearr_29711;
})();
var statearr_29712_29733 = state_29706__$1;
(statearr_29712_29733[(2)] = null);

(statearr_29712_29733[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29707 === (4))){
var inst_29678 = (state_29706[(10)]);
var state_29706__$1 = state_29706;
return cljs.core.async.ioc_alts_BANG_.call(null,state_29706__$1,(7),inst_29678);
} else {
if((state_val_29707 === (6))){
var inst_29702 = (state_29706[(2)]);
var state_29706__$1 = state_29706;
var statearr_29713_29734 = state_29706__$1;
(statearr_29713_29734[(2)] = inst_29702);

(statearr_29713_29734[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29707 === (3))){
var inst_29704 = (state_29706[(2)]);
var state_29706__$1 = state_29706;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29706__$1,inst_29704);
} else {
if((state_val_29707 === (2))){
var inst_29678 = (state_29706[(10)]);
var inst_29680 = cljs.core.count.call(null,inst_29678);
var inst_29681 = (inst_29680 > (0));
var state_29706__$1 = state_29706;
if(cljs.core.truth_(inst_29681)){
var statearr_29715_29735 = state_29706__$1;
(statearr_29715_29735[(1)] = (4));

} else {
var statearr_29716_29736 = state_29706__$1;
(statearr_29716_29736[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29707 === (11))){
var inst_29678 = (state_29706[(10)]);
var inst_29695 = (state_29706[(2)]);
var tmp29714 = inst_29678;
var inst_29678__$1 = tmp29714;
var state_29706__$1 = (function (){var statearr_29717 = state_29706;
(statearr_29717[(11)] = inst_29695);

(statearr_29717[(10)] = inst_29678__$1);

return statearr_29717;
})();
var statearr_29718_29737 = state_29706__$1;
(statearr_29718_29737[(2)] = null);

(statearr_29718_29737[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29707 === (9))){
var inst_29686 = (state_29706[(8)]);
var state_29706__$1 = state_29706;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29706__$1,(11),out,inst_29686);
} else {
if((state_val_29707 === (5))){
var inst_29700 = cljs.core.async.close_BANG_.call(null,out);
var state_29706__$1 = state_29706;
var statearr_29719_29738 = state_29706__$1;
(statearr_29719_29738[(2)] = inst_29700);

(statearr_29719_29738[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29707 === (10))){
var inst_29698 = (state_29706[(2)]);
var state_29706__$1 = state_29706;
var statearr_29720_29739 = state_29706__$1;
(statearr_29720_29739[(2)] = inst_29698);

(statearr_29720_29739[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29707 === (8))){
var inst_29687 = (state_29706[(9)]);
var inst_29685 = (state_29706[(7)]);
var inst_29678 = (state_29706[(10)]);
var inst_29686 = (state_29706[(8)]);
var inst_29690 = (function (){var c = inst_29687;
var v = inst_29686;
var vec__29683 = inst_29685;
var cs = inst_29678;
return ((function (c,v,vec__29683,cs,inst_29687,inst_29685,inst_29678,inst_29686,state_val_29707,c__21542__auto___29730,out){
return (function (p1__29623_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__29623_SHARP_);
});
;})(c,v,vec__29683,cs,inst_29687,inst_29685,inst_29678,inst_29686,state_val_29707,c__21542__auto___29730,out))
})();
var inst_29691 = cljs.core.filterv.call(null,inst_29690,inst_29678);
var inst_29678__$1 = inst_29691;
var state_29706__$1 = (function (){var statearr_29721 = state_29706;
(statearr_29721[(10)] = inst_29678__$1);

return statearr_29721;
})();
var statearr_29722_29740 = state_29706__$1;
(statearr_29722_29740[(2)] = null);

(statearr_29722_29740[(1)] = (2));


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
});})(c__21542__auto___29730,out))
;
return ((function (switch__21486__auto__,c__21542__auto___29730,out){
return (function() {
var cljs$core$async$merge_$_state_machine__21487__auto__ = null;
var cljs$core$async$merge_$_state_machine__21487__auto____0 = (function (){
var statearr_29726 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29726[(0)] = cljs$core$async$merge_$_state_machine__21487__auto__);

(statearr_29726[(1)] = (1));

return statearr_29726;
});
var cljs$core$async$merge_$_state_machine__21487__auto____1 = (function (state_29706){
while(true){
var ret_value__21488__auto__ = (function (){try{while(true){
var result__21489__auto__ = switch__21486__auto__.call(null,state_29706);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21489__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21489__auto__;
}
break;
}
}catch (e29727){if((e29727 instanceof Object)){
var ex__21490__auto__ = e29727;
var statearr_29728_29741 = state_29706;
(statearr_29728_29741[(5)] = ex__21490__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29706);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29727;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21488__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29742 = state_29706;
state_29706 = G__29742;
continue;
} else {
return ret_value__21488__auto__;
}
break;
}
});
cljs$core$async$merge_$_state_machine__21487__auto__ = function(state_29706){
switch(arguments.length){
case 0:
return cljs$core$async$merge_$_state_machine__21487__auto____0.call(this);
case 1:
return cljs$core$async$merge_$_state_machine__21487__auto____1.call(this,state_29706);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$merge_$_state_machine__21487__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$merge_$_state_machine__21487__auto____0;
cljs$core$async$merge_$_state_machine__21487__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$merge_$_state_machine__21487__auto____1;
return cljs$core$async$merge_$_state_machine__21487__auto__;
})()
;})(switch__21486__auto__,c__21542__auto___29730,out))
})();
var state__21544__auto__ = (function (){var statearr_29729 = f__21543__auto__.call(null);
(statearr_29729[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21542__auto___29730);

return statearr_29729;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21544__auto__);
});})(c__21542__auto___29730,out))
);


return out;
});
cljs$core$async$merge = function(chs,buf_or_n){
switch(arguments.length){
case 1:
return cljs$core$async$merge__1.call(this,chs);
case 2:
return cljs$core$async$merge__2.call(this,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$merge.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$merge__1;
cljs$core$async$merge.cljs$core$IFn$_invoke$arity$2 = cljs$core$async$merge__2;
return cljs$core$async$merge;
})()
;
/**
 * Returns a channel containing the single (collection) result of the
 * items taken from the channel conjoined to the supplied
 * collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 * The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function() {
var cljs$core$async$take = null;
var cljs$core$async$take__2 = (function (n,ch){
return cljs$core$async$take.call(null,n,ch,null);
});
var cljs$core$async$take__3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__21542__auto___29835 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21542__auto___29835,out){
return (function (){
var f__21543__auto__ = (function (){var switch__21486__auto__ = ((function (c__21542__auto___29835,out){
return (function (state_29812){
var state_val_29813 = (state_29812[(1)]);
if((state_val_29813 === (7))){
var inst_29794 = (state_29812[(7)]);
var inst_29794__$1 = (state_29812[(2)]);
var inst_29795 = (inst_29794__$1 == null);
var inst_29796 = cljs.core.not.call(null,inst_29795);
var state_29812__$1 = (function (){var statearr_29814 = state_29812;
(statearr_29814[(7)] = inst_29794__$1);

return statearr_29814;
})();
if(inst_29796){
var statearr_29815_29836 = state_29812__$1;
(statearr_29815_29836[(1)] = (8));

} else {
var statearr_29816_29837 = state_29812__$1;
(statearr_29816_29837[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29813 === (1))){
var inst_29789 = (0);
var state_29812__$1 = (function (){var statearr_29817 = state_29812;
(statearr_29817[(8)] = inst_29789);

return statearr_29817;
})();
var statearr_29818_29838 = state_29812__$1;
(statearr_29818_29838[(2)] = null);

(statearr_29818_29838[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29813 === (4))){
var state_29812__$1 = state_29812;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29812__$1,(7),ch);
} else {
if((state_val_29813 === (6))){
var inst_29807 = (state_29812[(2)]);
var state_29812__$1 = state_29812;
var statearr_29819_29839 = state_29812__$1;
(statearr_29819_29839[(2)] = inst_29807);

(statearr_29819_29839[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29813 === (3))){
var inst_29809 = (state_29812[(2)]);
var inst_29810 = cljs.core.async.close_BANG_.call(null,out);
var state_29812__$1 = (function (){var statearr_29820 = state_29812;
(statearr_29820[(9)] = inst_29809);

return statearr_29820;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29812__$1,inst_29810);
} else {
if((state_val_29813 === (2))){
var inst_29789 = (state_29812[(8)]);
var inst_29791 = (inst_29789 < n);
var state_29812__$1 = state_29812;
if(cljs.core.truth_(inst_29791)){
var statearr_29821_29840 = state_29812__$1;
(statearr_29821_29840[(1)] = (4));

} else {
var statearr_29822_29841 = state_29812__$1;
(statearr_29822_29841[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29813 === (11))){
var inst_29789 = (state_29812[(8)]);
var inst_29799 = (state_29812[(2)]);
var inst_29800 = (inst_29789 + (1));
var inst_29789__$1 = inst_29800;
var state_29812__$1 = (function (){var statearr_29823 = state_29812;
(statearr_29823[(8)] = inst_29789__$1);

(statearr_29823[(10)] = inst_29799);

return statearr_29823;
})();
var statearr_29824_29842 = state_29812__$1;
(statearr_29824_29842[(2)] = null);

(statearr_29824_29842[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29813 === (9))){
var state_29812__$1 = state_29812;
var statearr_29825_29843 = state_29812__$1;
(statearr_29825_29843[(2)] = null);

(statearr_29825_29843[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29813 === (5))){
var state_29812__$1 = state_29812;
var statearr_29826_29844 = state_29812__$1;
(statearr_29826_29844[(2)] = null);

(statearr_29826_29844[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29813 === (10))){
var inst_29804 = (state_29812[(2)]);
var state_29812__$1 = state_29812;
var statearr_29827_29845 = state_29812__$1;
(statearr_29827_29845[(2)] = inst_29804);

(statearr_29827_29845[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29813 === (8))){
var inst_29794 = (state_29812[(7)]);
var state_29812__$1 = state_29812;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29812__$1,(11),out,inst_29794);
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
});})(c__21542__auto___29835,out))
;
return ((function (switch__21486__auto__,c__21542__auto___29835,out){
return (function() {
var cljs$core$async$take_$_state_machine__21487__auto__ = null;
var cljs$core$async$take_$_state_machine__21487__auto____0 = (function (){
var statearr_29831 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_29831[(0)] = cljs$core$async$take_$_state_machine__21487__auto__);

(statearr_29831[(1)] = (1));

return statearr_29831;
});
var cljs$core$async$take_$_state_machine__21487__auto____1 = (function (state_29812){
while(true){
var ret_value__21488__auto__ = (function (){try{while(true){
var result__21489__auto__ = switch__21486__auto__.call(null,state_29812);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21489__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21489__auto__;
}
break;
}
}catch (e29832){if((e29832 instanceof Object)){
var ex__21490__auto__ = e29832;
var statearr_29833_29846 = state_29812;
(statearr_29833_29846[(5)] = ex__21490__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29812);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29832;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21488__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29847 = state_29812;
state_29812 = G__29847;
continue;
} else {
return ret_value__21488__auto__;
}
break;
}
});
cljs$core$async$take_$_state_machine__21487__auto__ = function(state_29812){
switch(arguments.length){
case 0:
return cljs$core$async$take_$_state_machine__21487__auto____0.call(this);
case 1:
return cljs$core$async$take_$_state_machine__21487__auto____1.call(this,state_29812);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$take_$_state_machine__21487__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$take_$_state_machine__21487__auto____0;
cljs$core$async$take_$_state_machine__21487__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$take_$_state_machine__21487__auto____1;
return cljs$core$async$take_$_state_machine__21487__auto__;
})()
;})(switch__21486__auto__,c__21542__auto___29835,out))
})();
var state__21544__auto__ = (function (){var statearr_29834 = f__21543__auto__.call(null);
(statearr_29834[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21542__auto___29835);

return statearr_29834;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21544__auto__);
});})(c__21542__auto___29835,out))
);


return out;
});
cljs$core$async$take = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return cljs$core$async$take__2.call(this,n,ch);
case 3:
return cljs$core$async$take__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$take.cljs$core$IFn$_invoke$arity$2 = cljs$core$async$take__2;
cljs$core$async$take.cljs$core$IFn$_invoke$arity$3 = cljs$core$async$take__3;
return cljs$core$async$take;
})()
;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t29855 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t29855 = (function (ch,f,map_LT_,meta29856){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta29856 = meta29856;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t29855.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t29855.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t29855.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t29855.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t29858 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t29858 = (function (fn1,_,meta29856,map_LT_,f,ch,meta29859){
this.fn1 = fn1;
this._ = _;
this.meta29856 = meta29856;
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta29859 = meta29859;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t29858.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t29858.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t29858.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__29848_SHARP_){
return f1.call(null,(((p1__29848_SHARP_ == null))?null:self__.f.call(null,p1__29848_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t29858.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_29860){
var self__ = this;
var _29860__$1 = this;
return self__.meta29859;
});})(___$1))
;

cljs.core.async.t29858.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_29860,meta29859__$1){
var self__ = this;
var _29860__$1 = this;
return (new cljs.core.async.t29858(self__.fn1,self__._,self__.meta29856,self__.map_LT_,self__.f,self__.ch,meta29859__$1));
});})(___$1))
;

cljs.core.async.t29858.cljs$lang$type = true;

cljs.core.async.t29858.cljs$lang$ctorStr = "cljs.core.async/t29858";

cljs.core.async.t29858.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__18435__auto__,writer__18436__auto__,opt__18437__auto__){
return cljs.core._write.call(null,writer__18436__auto__,"cljs.core.async/t29858");
});})(___$1))
;

cljs.core.async.__GT_t29858 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t29858(fn1__$1,___$2,meta29856__$1,map_LT___$1,f__$1,ch__$1,meta29859){
return (new cljs.core.async.t29858(fn1__$1,___$2,meta29856__$1,map_LT___$1,f__$1,ch__$1,meta29859));
});})(___$1))
;

}

return (new cljs.core.async.t29858(fn1,___$1,self__.meta29856,self__.map_LT_,self__.f,self__.ch,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__17844__auto__ = ret;
if(cljs.core.truth_(and__17844__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__17844__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t29855.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t29855.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t29855.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t29855.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29857){
var self__ = this;
var _29857__$1 = this;
return self__.meta29856;
});

cljs.core.async.t29855.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29857,meta29856__$1){
var self__ = this;
var _29857__$1 = this;
return (new cljs.core.async.t29855(self__.ch,self__.f,self__.map_LT_,meta29856__$1));
});

cljs.core.async.t29855.cljs$lang$type = true;

cljs.core.async.t29855.cljs$lang$ctorStr = "cljs.core.async/t29855";

cljs.core.async.t29855.cljs$lang$ctorPrWriter = (function (this__18435__auto__,writer__18436__auto__,opt__18437__auto__){
return cljs.core._write.call(null,writer__18436__auto__,"cljs.core.async/t29855");
});

cljs.core.async.__GT_t29855 = (function cljs$core$async$map_LT__$___GT_t29855(ch__$1,f__$1,map_LT___$1,meta29856){
return (new cljs.core.async.t29855(ch__$1,f__$1,map_LT___$1,meta29856));
});

}

return (new cljs.core.async.t29855(ch,f,cljs$core$async$map_LT_,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t29864 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t29864 = (function (ch,f,map_GT_,meta29865){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta29865 = meta29865;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t29864.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t29864.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t29864.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t29864.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t29864.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t29864.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t29864.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29866){
var self__ = this;
var _29866__$1 = this;
return self__.meta29865;
});

cljs.core.async.t29864.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29866,meta29865__$1){
var self__ = this;
var _29866__$1 = this;
return (new cljs.core.async.t29864(self__.ch,self__.f,self__.map_GT_,meta29865__$1));
});

cljs.core.async.t29864.cljs$lang$type = true;

cljs.core.async.t29864.cljs$lang$ctorStr = "cljs.core.async/t29864";

cljs.core.async.t29864.cljs$lang$ctorPrWriter = (function (this__18435__auto__,writer__18436__auto__,opt__18437__auto__){
return cljs.core._write.call(null,writer__18436__auto__,"cljs.core.async/t29864");
});

cljs.core.async.__GT_t29864 = (function cljs$core$async$map_GT__$___GT_t29864(ch__$1,f__$1,map_GT___$1,meta29865){
return (new cljs.core.async.t29864(ch__$1,f__$1,map_GT___$1,meta29865));
});

}

return (new cljs.core.async.t29864(ch,f,cljs$core$async$map_GT_,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t29870 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t29870 = (function (ch,p,filter_GT_,meta29871){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta29871 = meta29871;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t29870.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t29870.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t29870.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t29870.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t29870.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t29870.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t29870.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t29870.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29872){
var self__ = this;
var _29872__$1 = this;
return self__.meta29871;
});

cljs.core.async.t29870.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29872,meta29871__$1){
var self__ = this;
var _29872__$1 = this;
return (new cljs.core.async.t29870(self__.ch,self__.p,self__.filter_GT_,meta29871__$1));
});

cljs.core.async.t29870.cljs$lang$type = true;

cljs.core.async.t29870.cljs$lang$ctorStr = "cljs.core.async/t29870";

cljs.core.async.t29870.cljs$lang$ctorPrWriter = (function (this__18435__auto__,writer__18436__auto__,opt__18437__auto__){
return cljs.core._write.call(null,writer__18436__auto__,"cljs.core.async/t29870");
});

cljs.core.async.__GT_t29870 = (function cljs$core$async$filter_GT__$___GT_t29870(ch__$1,p__$1,filter_GT___$1,meta29871){
return (new cljs.core.async.t29870(ch__$1,p__$1,filter_GT___$1,meta29871));
});

}

return (new cljs.core.async.t29870(ch,p,cljs$core$async$filter_GT_,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function() {
var cljs$core$async$filter_LT_ = null;
var cljs$core$async$filter_LT___2 = (function (p,ch){
return cljs$core$async$filter_LT_.call(null,p,ch,null);
});
var cljs$core$async$filter_LT___3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__21542__auto___29955 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21542__auto___29955,out){
return (function (){
var f__21543__auto__ = (function (){var switch__21486__auto__ = ((function (c__21542__auto___29955,out){
return (function (state_29934){
var state_val_29935 = (state_29934[(1)]);
if((state_val_29935 === (7))){
var inst_29930 = (state_29934[(2)]);
var state_29934__$1 = state_29934;
var statearr_29936_29956 = state_29934__$1;
(statearr_29936_29956[(2)] = inst_29930);

(statearr_29936_29956[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29935 === (1))){
var state_29934__$1 = state_29934;
var statearr_29937_29957 = state_29934__$1;
(statearr_29937_29957[(2)] = null);

(statearr_29937_29957[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29935 === (4))){
var inst_29916 = (state_29934[(7)]);
var inst_29916__$1 = (state_29934[(2)]);
var inst_29917 = (inst_29916__$1 == null);
var state_29934__$1 = (function (){var statearr_29938 = state_29934;
(statearr_29938[(7)] = inst_29916__$1);

return statearr_29938;
})();
if(cljs.core.truth_(inst_29917)){
var statearr_29939_29958 = state_29934__$1;
(statearr_29939_29958[(1)] = (5));

} else {
var statearr_29940_29959 = state_29934__$1;
(statearr_29940_29959[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29935 === (6))){
var inst_29916 = (state_29934[(7)]);
var inst_29921 = p.call(null,inst_29916);
var state_29934__$1 = state_29934;
if(cljs.core.truth_(inst_29921)){
var statearr_29941_29960 = state_29934__$1;
(statearr_29941_29960[(1)] = (8));

} else {
var statearr_29942_29961 = state_29934__$1;
(statearr_29942_29961[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29935 === (3))){
var inst_29932 = (state_29934[(2)]);
var state_29934__$1 = state_29934;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29934__$1,inst_29932);
} else {
if((state_val_29935 === (2))){
var state_29934__$1 = state_29934;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29934__$1,(4),ch);
} else {
if((state_val_29935 === (11))){
var inst_29924 = (state_29934[(2)]);
var state_29934__$1 = state_29934;
var statearr_29943_29962 = state_29934__$1;
(statearr_29943_29962[(2)] = inst_29924);

(statearr_29943_29962[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29935 === (9))){
var state_29934__$1 = state_29934;
var statearr_29944_29963 = state_29934__$1;
(statearr_29944_29963[(2)] = null);

(statearr_29944_29963[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29935 === (5))){
var inst_29919 = cljs.core.async.close_BANG_.call(null,out);
var state_29934__$1 = state_29934;
var statearr_29945_29964 = state_29934__$1;
(statearr_29945_29964[(2)] = inst_29919);

(statearr_29945_29964[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29935 === (10))){
var inst_29927 = (state_29934[(2)]);
var state_29934__$1 = (function (){var statearr_29946 = state_29934;
(statearr_29946[(8)] = inst_29927);

return statearr_29946;
})();
var statearr_29947_29965 = state_29934__$1;
(statearr_29947_29965[(2)] = null);

(statearr_29947_29965[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29935 === (8))){
var inst_29916 = (state_29934[(7)]);
var state_29934__$1 = state_29934;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29934__$1,(11),out,inst_29916);
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
});})(c__21542__auto___29955,out))
;
return ((function (switch__21486__auto__,c__21542__auto___29955,out){
return (function() {
var cljs$core$async$filter_LT__$_state_machine__21487__auto__ = null;
var cljs$core$async$filter_LT__$_state_machine__21487__auto____0 = (function (){
var statearr_29951 = [null,null,null,null,null,null,null,null,null];
(statearr_29951[(0)] = cljs$core$async$filter_LT__$_state_machine__21487__auto__);

(statearr_29951[(1)] = (1));

return statearr_29951;
});
var cljs$core$async$filter_LT__$_state_machine__21487__auto____1 = (function (state_29934){
while(true){
var ret_value__21488__auto__ = (function (){try{while(true){
var result__21489__auto__ = switch__21486__auto__.call(null,state_29934);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21489__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21489__auto__;
}
break;
}
}catch (e29952){if((e29952 instanceof Object)){
var ex__21490__auto__ = e29952;
var statearr_29953_29966 = state_29934;
(statearr_29953_29966[(5)] = ex__21490__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29934);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29952;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21488__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29967 = state_29934;
state_29934 = G__29967;
continue;
} else {
return ret_value__21488__auto__;
}
break;
}
});
cljs$core$async$filter_LT__$_state_machine__21487__auto__ = function(state_29934){
switch(arguments.length){
case 0:
return cljs$core$async$filter_LT__$_state_machine__21487__auto____0.call(this);
case 1:
return cljs$core$async$filter_LT__$_state_machine__21487__auto____1.call(this,state_29934);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$filter_LT__$_state_machine__21487__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$filter_LT__$_state_machine__21487__auto____0;
cljs$core$async$filter_LT__$_state_machine__21487__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$filter_LT__$_state_machine__21487__auto____1;
return cljs$core$async$filter_LT__$_state_machine__21487__auto__;
})()
;})(switch__21486__auto__,c__21542__auto___29955,out))
})();
var state__21544__auto__ = (function (){var statearr_29954 = f__21543__auto__.call(null);
(statearr_29954[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21542__auto___29955);

return statearr_29954;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21544__auto__);
});})(c__21542__auto___29955,out))
);


return out;
});
cljs$core$async$filter_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return cljs$core$async$filter_LT___2.call(this,p,ch);
case 3:
return cljs$core$async$filter_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$filter_LT_.cljs$core$IFn$_invoke$arity$2 = cljs$core$async$filter_LT___2;
cljs$core$async$filter_LT_.cljs$core$IFn$_invoke$arity$3 = cljs$core$async$filter_LT___3;
return cljs$core$async$filter_LT_;
})()
;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function() {
var cljs$core$async$remove_LT_ = null;
var cljs$core$async$remove_LT___2 = (function (p,ch){
return cljs$core$async$remove_LT_.call(null,p,ch,null);
});
var cljs$core$async$remove_LT___3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});
cljs$core$async$remove_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return cljs$core$async$remove_LT___2.call(this,p,ch);
case 3:
return cljs$core$async$remove_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$remove_LT_.cljs$core$IFn$_invoke$arity$2 = cljs$core$async$remove_LT___2;
cljs$core$async$remove_LT_.cljs$core$IFn$_invoke$arity$3 = cljs$core$async$remove_LT___3;
return cljs$core$async$remove_LT_;
})()
;
cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__21542__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21542__auto__){
return (function (){
var f__21543__auto__ = (function (){var switch__21486__auto__ = ((function (c__21542__auto__){
return (function (state_30133){
var state_val_30134 = (state_30133[(1)]);
if((state_val_30134 === (7))){
var inst_30129 = (state_30133[(2)]);
var state_30133__$1 = state_30133;
var statearr_30135_30176 = state_30133__$1;
(statearr_30135_30176[(2)] = inst_30129);

(statearr_30135_30176[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30134 === (20))){
var inst_30099 = (state_30133[(7)]);
var inst_30110 = (state_30133[(2)]);
var inst_30111 = cljs.core.next.call(null,inst_30099);
var inst_30085 = inst_30111;
var inst_30086 = null;
var inst_30087 = (0);
var inst_30088 = (0);
var state_30133__$1 = (function (){var statearr_30136 = state_30133;
(statearr_30136[(8)] = inst_30086);

(statearr_30136[(9)] = inst_30110);

(statearr_30136[(10)] = inst_30085);

(statearr_30136[(11)] = inst_30087);

(statearr_30136[(12)] = inst_30088);

return statearr_30136;
})();
var statearr_30137_30177 = state_30133__$1;
(statearr_30137_30177[(2)] = null);

(statearr_30137_30177[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30134 === (1))){
var state_30133__$1 = state_30133;
var statearr_30138_30178 = state_30133__$1;
(statearr_30138_30178[(2)] = null);

(statearr_30138_30178[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30134 === (4))){
var inst_30074 = (state_30133[(13)]);
var inst_30074__$1 = (state_30133[(2)]);
var inst_30075 = (inst_30074__$1 == null);
var state_30133__$1 = (function (){var statearr_30139 = state_30133;
(statearr_30139[(13)] = inst_30074__$1);

return statearr_30139;
})();
if(cljs.core.truth_(inst_30075)){
var statearr_30140_30179 = state_30133__$1;
(statearr_30140_30179[(1)] = (5));

} else {
var statearr_30141_30180 = state_30133__$1;
(statearr_30141_30180[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30134 === (15))){
var state_30133__$1 = state_30133;
var statearr_30145_30181 = state_30133__$1;
(statearr_30145_30181[(2)] = null);

(statearr_30145_30181[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30134 === (21))){
var state_30133__$1 = state_30133;
var statearr_30146_30182 = state_30133__$1;
(statearr_30146_30182[(2)] = null);

(statearr_30146_30182[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30134 === (13))){
var inst_30086 = (state_30133[(8)]);
var inst_30085 = (state_30133[(10)]);
var inst_30087 = (state_30133[(11)]);
var inst_30088 = (state_30133[(12)]);
var inst_30095 = (state_30133[(2)]);
var inst_30096 = (inst_30088 + (1));
var tmp30142 = inst_30086;
var tmp30143 = inst_30085;
var tmp30144 = inst_30087;
var inst_30085__$1 = tmp30143;
var inst_30086__$1 = tmp30142;
var inst_30087__$1 = tmp30144;
var inst_30088__$1 = inst_30096;
var state_30133__$1 = (function (){var statearr_30147 = state_30133;
(statearr_30147[(8)] = inst_30086__$1);

(statearr_30147[(14)] = inst_30095);

(statearr_30147[(10)] = inst_30085__$1);

(statearr_30147[(11)] = inst_30087__$1);

(statearr_30147[(12)] = inst_30088__$1);

return statearr_30147;
})();
var statearr_30148_30183 = state_30133__$1;
(statearr_30148_30183[(2)] = null);

(statearr_30148_30183[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30134 === (22))){
var state_30133__$1 = state_30133;
var statearr_30149_30184 = state_30133__$1;
(statearr_30149_30184[(2)] = null);

(statearr_30149_30184[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30134 === (6))){
var inst_30074 = (state_30133[(13)]);
var inst_30083 = f.call(null,inst_30074);
var inst_30084 = cljs.core.seq.call(null,inst_30083);
var inst_30085 = inst_30084;
var inst_30086 = null;
var inst_30087 = (0);
var inst_30088 = (0);
var state_30133__$1 = (function (){var statearr_30150 = state_30133;
(statearr_30150[(8)] = inst_30086);

(statearr_30150[(10)] = inst_30085);

(statearr_30150[(11)] = inst_30087);

(statearr_30150[(12)] = inst_30088);

return statearr_30150;
})();
var statearr_30151_30185 = state_30133__$1;
(statearr_30151_30185[(2)] = null);

(statearr_30151_30185[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30134 === (17))){
var inst_30099 = (state_30133[(7)]);
var inst_30103 = cljs.core.chunk_first.call(null,inst_30099);
var inst_30104 = cljs.core.chunk_rest.call(null,inst_30099);
var inst_30105 = cljs.core.count.call(null,inst_30103);
var inst_30085 = inst_30104;
var inst_30086 = inst_30103;
var inst_30087 = inst_30105;
var inst_30088 = (0);
var state_30133__$1 = (function (){var statearr_30152 = state_30133;
(statearr_30152[(8)] = inst_30086);

(statearr_30152[(10)] = inst_30085);

(statearr_30152[(11)] = inst_30087);

(statearr_30152[(12)] = inst_30088);

return statearr_30152;
})();
var statearr_30153_30186 = state_30133__$1;
(statearr_30153_30186[(2)] = null);

(statearr_30153_30186[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30134 === (3))){
var inst_30131 = (state_30133[(2)]);
var state_30133__$1 = state_30133;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30133__$1,inst_30131);
} else {
if((state_val_30134 === (12))){
var inst_30119 = (state_30133[(2)]);
var state_30133__$1 = state_30133;
var statearr_30154_30187 = state_30133__$1;
(statearr_30154_30187[(2)] = inst_30119);

(statearr_30154_30187[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30134 === (2))){
var state_30133__$1 = state_30133;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30133__$1,(4),in$);
} else {
if((state_val_30134 === (23))){
var inst_30127 = (state_30133[(2)]);
var state_30133__$1 = state_30133;
var statearr_30155_30188 = state_30133__$1;
(statearr_30155_30188[(2)] = inst_30127);

(statearr_30155_30188[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30134 === (19))){
var inst_30114 = (state_30133[(2)]);
var state_30133__$1 = state_30133;
var statearr_30156_30189 = state_30133__$1;
(statearr_30156_30189[(2)] = inst_30114);

(statearr_30156_30189[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30134 === (11))){
var inst_30099 = (state_30133[(7)]);
var inst_30085 = (state_30133[(10)]);
var inst_30099__$1 = cljs.core.seq.call(null,inst_30085);
var state_30133__$1 = (function (){var statearr_30157 = state_30133;
(statearr_30157[(7)] = inst_30099__$1);

return statearr_30157;
})();
if(inst_30099__$1){
var statearr_30158_30190 = state_30133__$1;
(statearr_30158_30190[(1)] = (14));

} else {
var statearr_30159_30191 = state_30133__$1;
(statearr_30159_30191[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30134 === (9))){
var inst_30121 = (state_30133[(2)]);
var inst_30122 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_30133__$1 = (function (){var statearr_30160 = state_30133;
(statearr_30160[(15)] = inst_30121);

return statearr_30160;
})();
if(cljs.core.truth_(inst_30122)){
var statearr_30161_30192 = state_30133__$1;
(statearr_30161_30192[(1)] = (21));

} else {
var statearr_30162_30193 = state_30133__$1;
(statearr_30162_30193[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30134 === (5))){
var inst_30077 = cljs.core.async.close_BANG_.call(null,out);
var state_30133__$1 = state_30133;
var statearr_30163_30194 = state_30133__$1;
(statearr_30163_30194[(2)] = inst_30077);

(statearr_30163_30194[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30134 === (14))){
var inst_30099 = (state_30133[(7)]);
var inst_30101 = cljs.core.chunked_seq_QMARK_.call(null,inst_30099);
var state_30133__$1 = state_30133;
if(inst_30101){
var statearr_30164_30195 = state_30133__$1;
(statearr_30164_30195[(1)] = (17));

} else {
var statearr_30165_30196 = state_30133__$1;
(statearr_30165_30196[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30134 === (16))){
var inst_30117 = (state_30133[(2)]);
var state_30133__$1 = state_30133;
var statearr_30166_30197 = state_30133__$1;
(statearr_30166_30197[(2)] = inst_30117);

(statearr_30166_30197[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30134 === (10))){
var inst_30086 = (state_30133[(8)]);
var inst_30088 = (state_30133[(12)]);
var inst_30093 = cljs.core._nth.call(null,inst_30086,inst_30088);
var state_30133__$1 = state_30133;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30133__$1,(13),out,inst_30093);
} else {
if((state_val_30134 === (18))){
var inst_30099 = (state_30133[(7)]);
var inst_30108 = cljs.core.first.call(null,inst_30099);
var state_30133__$1 = state_30133;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30133__$1,(20),out,inst_30108);
} else {
if((state_val_30134 === (8))){
var inst_30087 = (state_30133[(11)]);
var inst_30088 = (state_30133[(12)]);
var inst_30090 = (inst_30088 < inst_30087);
var inst_30091 = inst_30090;
var state_30133__$1 = state_30133;
if(cljs.core.truth_(inst_30091)){
var statearr_30167_30198 = state_30133__$1;
(statearr_30167_30198[(1)] = (10));

} else {
var statearr_30168_30199 = state_30133__$1;
(statearr_30168_30199[(1)] = (11));

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
});})(c__21542__auto__))
;
return ((function (switch__21486__auto__,c__21542__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__21487__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__21487__auto____0 = (function (){
var statearr_30172 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30172[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__21487__auto__);

(statearr_30172[(1)] = (1));

return statearr_30172;
});
var cljs$core$async$mapcat_STAR__$_state_machine__21487__auto____1 = (function (state_30133){
while(true){
var ret_value__21488__auto__ = (function (){try{while(true){
var result__21489__auto__ = switch__21486__auto__.call(null,state_30133);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21489__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21489__auto__;
}
break;
}
}catch (e30173){if((e30173 instanceof Object)){
var ex__21490__auto__ = e30173;
var statearr_30174_30200 = state_30133;
(statearr_30174_30200[(5)] = ex__21490__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30133);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30173;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21488__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30201 = state_30133;
state_30133 = G__30201;
continue;
} else {
return ret_value__21488__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__21487__auto__ = function(state_30133){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__21487__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__21487__auto____1.call(this,state_30133);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__21487__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__21487__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__21487__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__21487__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__21487__auto__;
})()
;})(switch__21486__auto__,c__21542__auto__))
})();
var state__21544__auto__ = (function (){var statearr_30175 = f__21543__auto__.call(null);
(statearr_30175[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21542__auto__);

return statearr_30175;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21544__auto__);
});})(c__21542__auto__))
);

return c__21542__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function() {
var cljs$core$async$mapcat_LT_ = null;
var cljs$core$async$mapcat_LT___2 = (function (f,in$){
return cljs$core$async$mapcat_LT_.call(null,f,in$,null);
});
var cljs$core$async$mapcat_LT___3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});
cljs$core$async$mapcat_LT_ = function(f,in$,buf_or_n){
switch(arguments.length){
case 2:
return cljs$core$async$mapcat_LT___2.call(this,f,in$);
case 3:
return cljs$core$async$mapcat_LT___3.call(this,f,in$,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = cljs$core$async$mapcat_LT___2;
cljs$core$async$mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = cljs$core$async$mapcat_LT___3;
return cljs$core$async$mapcat_LT_;
})()
;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function() {
var cljs$core$async$mapcat_GT_ = null;
var cljs$core$async$mapcat_GT___2 = (function (f,out){
return cljs$core$async$mapcat_GT_.call(null,f,out,null);
});
var cljs$core$async$mapcat_GT___3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});
cljs$core$async$mapcat_GT_ = function(f,out,buf_or_n){
switch(arguments.length){
case 2:
return cljs$core$async$mapcat_GT___2.call(this,f,out);
case 3:
return cljs$core$async$mapcat_GT___3.call(this,f,out,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = cljs$core$async$mapcat_GT___2;
cljs$core$async$mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = cljs$core$async$mapcat_GT___3;
return cljs$core$async$mapcat_GT_;
})()
;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function() {
var cljs$core$async$unique = null;
var cljs$core$async$unique__1 = (function (ch){
return cljs$core$async$unique.call(null,ch,null);
});
var cljs$core$async$unique__2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__21542__auto___30298 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21542__auto___30298,out){
return (function (){
var f__21543__auto__ = (function (){var switch__21486__auto__ = ((function (c__21542__auto___30298,out){
return (function (state_30273){
var state_val_30274 = (state_30273[(1)]);
if((state_val_30274 === (7))){
var inst_30268 = (state_30273[(2)]);
var state_30273__$1 = state_30273;
var statearr_30275_30299 = state_30273__$1;
(statearr_30275_30299[(2)] = inst_30268);

(statearr_30275_30299[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30274 === (1))){
var inst_30250 = null;
var state_30273__$1 = (function (){var statearr_30276 = state_30273;
(statearr_30276[(7)] = inst_30250);

return statearr_30276;
})();
var statearr_30277_30300 = state_30273__$1;
(statearr_30277_30300[(2)] = null);

(statearr_30277_30300[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30274 === (4))){
var inst_30253 = (state_30273[(8)]);
var inst_30253__$1 = (state_30273[(2)]);
var inst_30254 = (inst_30253__$1 == null);
var inst_30255 = cljs.core.not.call(null,inst_30254);
var state_30273__$1 = (function (){var statearr_30278 = state_30273;
(statearr_30278[(8)] = inst_30253__$1);

return statearr_30278;
})();
if(inst_30255){
var statearr_30279_30301 = state_30273__$1;
(statearr_30279_30301[(1)] = (5));

} else {
var statearr_30280_30302 = state_30273__$1;
(statearr_30280_30302[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30274 === (6))){
var state_30273__$1 = state_30273;
var statearr_30281_30303 = state_30273__$1;
(statearr_30281_30303[(2)] = null);

(statearr_30281_30303[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30274 === (3))){
var inst_30270 = (state_30273[(2)]);
var inst_30271 = cljs.core.async.close_BANG_.call(null,out);
var state_30273__$1 = (function (){var statearr_30282 = state_30273;
(statearr_30282[(9)] = inst_30270);

return statearr_30282;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30273__$1,inst_30271);
} else {
if((state_val_30274 === (2))){
var state_30273__$1 = state_30273;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30273__$1,(4),ch);
} else {
if((state_val_30274 === (11))){
var inst_30253 = (state_30273[(8)]);
var inst_30262 = (state_30273[(2)]);
var inst_30250 = inst_30253;
var state_30273__$1 = (function (){var statearr_30283 = state_30273;
(statearr_30283[(7)] = inst_30250);

(statearr_30283[(10)] = inst_30262);

return statearr_30283;
})();
var statearr_30284_30304 = state_30273__$1;
(statearr_30284_30304[(2)] = null);

(statearr_30284_30304[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30274 === (9))){
var inst_30253 = (state_30273[(8)]);
var state_30273__$1 = state_30273;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30273__$1,(11),out,inst_30253);
} else {
if((state_val_30274 === (5))){
var inst_30250 = (state_30273[(7)]);
var inst_30253 = (state_30273[(8)]);
var inst_30257 = cljs.core._EQ_.call(null,inst_30253,inst_30250);
var state_30273__$1 = state_30273;
if(inst_30257){
var statearr_30286_30305 = state_30273__$1;
(statearr_30286_30305[(1)] = (8));

} else {
var statearr_30287_30306 = state_30273__$1;
(statearr_30287_30306[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30274 === (10))){
var inst_30265 = (state_30273[(2)]);
var state_30273__$1 = state_30273;
var statearr_30288_30307 = state_30273__$1;
(statearr_30288_30307[(2)] = inst_30265);

(statearr_30288_30307[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30274 === (8))){
var inst_30250 = (state_30273[(7)]);
var tmp30285 = inst_30250;
var inst_30250__$1 = tmp30285;
var state_30273__$1 = (function (){var statearr_30289 = state_30273;
(statearr_30289[(7)] = inst_30250__$1);

return statearr_30289;
})();
var statearr_30290_30308 = state_30273__$1;
(statearr_30290_30308[(2)] = null);

(statearr_30290_30308[(1)] = (2));


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
});})(c__21542__auto___30298,out))
;
return ((function (switch__21486__auto__,c__21542__auto___30298,out){
return (function() {
var cljs$core$async$unique_$_state_machine__21487__auto__ = null;
var cljs$core$async$unique_$_state_machine__21487__auto____0 = (function (){
var statearr_30294 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_30294[(0)] = cljs$core$async$unique_$_state_machine__21487__auto__);

(statearr_30294[(1)] = (1));

return statearr_30294;
});
var cljs$core$async$unique_$_state_machine__21487__auto____1 = (function (state_30273){
while(true){
var ret_value__21488__auto__ = (function (){try{while(true){
var result__21489__auto__ = switch__21486__auto__.call(null,state_30273);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21489__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21489__auto__;
}
break;
}
}catch (e30295){if((e30295 instanceof Object)){
var ex__21490__auto__ = e30295;
var statearr_30296_30309 = state_30273;
(statearr_30296_30309[(5)] = ex__21490__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30273);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30295;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21488__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30310 = state_30273;
state_30273 = G__30310;
continue;
} else {
return ret_value__21488__auto__;
}
break;
}
});
cljs$core$async$unique_$_state_machine__21487__auto__ = function(state_30273){
switch(arguments.length){
case 0:
return cljs$core$async$unique_$_state_machine__21487__auto____0.call(this);
case 1:
return cljs$core$async$unique_$_state_machine__21487__auto____1.call(this,state_30273);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$unique_$_state_machine__21487__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$unique_$_state_machine__21487__auto____0;
cljs$core$async$unique_$_state_machine__21487__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$unique_$_state_machine__21487__auto____1;
return cljs$core$async$unique_$_state_machine__21487__auto__;
})()
;})(switch__21486__auto__,c__21542__auto___30298,out))
})();
var state__21544__auto__ = (function (){var statearr_30297 = f__21543__auto__.call(null);
(statearr_30297[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21542__auto___30298);

return statearr_30297;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21544__auto__);
});})(c__21542__auto___30298,out))
);


return out;
});
cljs$core$async$unique = function(ch,buf_or_n){
switch(arguments.length){
case 1:
return cljs$core$async$unique__1.call(this,ch);
case 2:
return cljs$core$async$unique__2.call(this,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$unique.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$unique__1;
cljs$core$async$unique.cljs$core$IFn$_invoke$arity$2 = cljs$core$async$unique__2;
return cljs$core$async$unique;
})()
;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function() {
var cljs$core$async$partition = null;
var cljs$core$async$partition__2 = (function (n,ch){
return cljs$core$async$partition.call(null,n,ch,null);
});
var cljs$core$async$partition__3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__21542__auto___30445 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21542__auto___30445,out){
return (function (){
var f__21543__auto__ = (function (){var switch__21486__auto__ = ((function (c__21542__auto___30445,out){
return (function (state_30415){
var state_val_30416 = (state_30415[(1)]);
if((state_val_30416 === (7))){
var inst_30411 = (state_30415[(2)]);
var state_30415__$1 = state_30415;
var statearr_30417_30446 = state_30415__$1;
(statearr_30417_30446[(2)] = inst_30411);

(statearr_30417_30446[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30416 === (1))){
var inst_30378 = (new Array(n));
var inst_30379 = inst_30378;
var inst_30380 = (0);
var state_30415__$1 = (function (){var statearr_30418 = state_30415;
(statearr_30418[(7)] = inst_30380);

(statearr_30418[(8)] = inst_30379);

return statearr_30418;
})();
var statearr_30419_30447 = state_30415__$1;
(statearr_30419_30447[(2)] = null);

(statearr_30419_30447[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30416 === (4))){
var inst_30383 = (state_30415[(9)]);
var inst_30383__$1 = (state_30415[(2)]);
var inst_30384 = (inst_30383__$1 == null);
var inst_30385 = cljs.core.not.call(null,inst_30384);
var state_30415__$1 = (function (){var statearr_30420 = state_30415;
(statearr_30420[(9)] = inst_30383__$1);

return statearr_30420;
})();
if(inst_30385){
var statearr_30421_30448 = state_30415__$1;
(statearr_30421_30448[(1)] = (5));

} else {
var statearr_30422_30449 = state_30415__$1;
(statearr_30422_30449[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30416 === (15))){
var inst_30405 = (state_30415[(2)]);
var state_30415__$1 = state_30415;
var statearr_30423_30450 = state_30415__$1;
(statearr_30423_30450[(2)] = inst_30405);

(statearr_30423_30450[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30416 === (13))){
var state_30415__$1 = state_30415;
var statearr_30424_30451 = state_30415__$1;
(statearr_30424_30451[(2)] = null);

(statearr_30424_30451[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30416 === (6))){
var inst_30380 = (state_30415[(7)]);
var inst_30401 = (inst_30380 > (0));
var state_30415__$1 = state_30415;
if(cljs.core.truth_(inst_30401)){
var statearr_30425_30452 = state_30415__$1;
(statearr_30425_30452[(1)] = (12));

} else {
var statearr_30426_30453 = state_30415__$1;
(statearr_30426_30453[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30416 === (3))){
var inst_30413 = (state_30415[(2)]);
var state_30415__$1 = state_30415;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30415__$1,inst_30413);
} else {
if((state_val_30416 === (12))){
var inst_30379 = (state_30415[(8)]);
var inst_30403 = cljs.core.vec.call(null,inst_30379);
var state_30415__$1 = state_30415;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30415__$1,(15),out,inst_30403);
} else {
if((state_val_30416 === (2))){
var state_30415__$1 = state_30415;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30415__$1,(4),ch);
} else {
if((state_val_30416 === (11))){
var inst_30395 = (state_30415[(2)]);
var inst_30396 = (new Array(n));
var inst_30379 = inst_30396;
var inst_30380 = (0);
var state_30415__$1 = (function (){var statearr_30427 = state_30415;
(statearr_30427[(7)] = inst_30380);

(statearr_30427[(8)] = inst_30379);

(statearr_30427[(10)] = inst_30395);

return statearr_30427;
})();
var statearr_30428_30454 = state_30415__$1;
(statearr_30428_30454[(2)] = null);

(statearr_30428_30454[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30416 === (9))){
var inst_30379 = (state_30415[(8)]);
var inst_30393 = cljs.core.vec.call(null,inst_30379);
var state_30415__$1 = state_30415;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30415__$1,(11),out,inst_30393);
} else {
if((state_val_30416 === (5))){
var inst_30380 = (state_30415[(7)]);
var inst_30383 = (state_30415[(9)]);
var inst_30388 = (state_30415[(11)]);
var inst_30379 = (state_30415[(8)]);
var inst_30387 = (inst_30379[inst_30380] = inst_30383);
var inst_30388__$1 = (inst_30380 + (1));
var inst_30389 = (inst_30388__$1 < n);
var state_30415__$1 = (function (){var statearr_30429 = state_30415;
(statearr_30429[(12)] = inst_30387);

(statearr_30429[(11)] = inst_30388__$1);

return statearr_30429;
})();
if(cljs.core.truth_(inst_30389)){
var statearr_30430_30455 = state_30415__$1;
(statearr_30430_30455[(1)] = (8));

} else {
var statearr_30431_30456 = state_30415__$1;
(statearr_30431_30456[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30416 === (14))){
var inst_30408 = (state_30415[(2)]);
var inst_30409 = cljs.core.async.close_BANG_.call(null,out);
var state_30415__$1 = (function (){var statearr_30433 = state_30415;
(statearr_30433[(13)] = inst_30408);

return statearr_30433;
})();
var statearr_30434_30457 = state_30415__$1;
(statearr_30434_30457[(2)] = inst_30409);

(statearr_30434_30457[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30416 === (10))){
var inst_30399 = (state_30415[(2)]);
var state_30415__$1 = state_30415;
var statearr_30435_30458 = state_30415__$1;
(statearr_30435_30458[(2)] = inst_30399);

(statearr_30435_30458[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30416 === (8))){
var inst_30388 = (state_30415[(11)]);
var inst_30379 = (state_30415[(8)]);
var tmp30432 = inst_30379;
var inst_30379__$1 = tmp30432;
var inst_30380 = inst_30388;
var state_30415__$1 = (function (){var statearr_30436 = state_30415;
(statearr_30436[(7)] = inst_30380);

(statearr_30436[(8)] = inst_30379__$1);

return statearr_30436;
})();
var statearr_30437_30459 = state_30415__$1;
(statearr_30437_30459[(2)] = null);

(statearr_30437_30459[(1)] = (2));


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
});})(c__21542__auto___30445,out))
;
return ((function (switch__21486__auto__,c__21542__auto___30445,out){
return (function() {
var cljs$core$async$partition_$_state_machine__21487__auto__ = null;
var cljs$core$async$partition_$_state_machine__21487__auto____0 = (function (){
var statearr_30441 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30441[(0)] = cljs$core$async$partition_$_state_machine__21487__auto__);

(statearr_30441[(1)] = (1));

return statearr_30441;
});
var cljs$core$async$partition_$_state_machine__21487__auto____1 = (function (state_30415){
while(true){
var ret_value__21488__auto__ = (function (){try{while(true){
var result__21489__auto__ = switch__21486__auto__.call(null,state_30415);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21489__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21489__auto__;
}
break;
}
}catch (e30442){if((e30442 instanceof Object)){
var ex__21490__auto__ = e30442;
var statearr_30443_30460 = state_30415;
(statearr_30443_30460[(5)] = ex__21490__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30415);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30442;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21488__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30461 = state_30415;
state_30415 = G__30461;
continue;
} else {
return ret_value__21488__auto__;
}
break;
}
});
cljs$core$async$partition_$_state_machine__21487__auto__ = function(state_30415){
switch(arguments.length){
case 0:
return cljs$core$async$partition_$_state_machine__21487__auto____0.call(this);
case 1:
return cljs$core$async$partition_$_state_machine__21487__auto____1.call(this,state_30415);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$partition_$_state_machine__21487__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$partition_$_state_machine__21487__auto____0;
cljs$core$async$partition_$_state_machine__21487__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$partition_$_state_machine__21487__auto____1;
return cljs$core$async$partition_$_state_machine__21487__auto__;
})()
;})(switch__21486__auto__,c__21542__auto___30445,out))
})();
var state__21544__auto__ = (function (){var statearr_30444 = f__21543__auto__.call(null);
(statearr_30444[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21542__auto___30445);

return statearr_30444;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21544__auto__);
});})(c__21542__auto___30445,out))
);


return out;
});
cljs$core$async$partition = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return cljs$core$async$partition__2.call(this,n,ch);
case 3:
return cljs$core$async$partition__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$partition.cljs$core$IFn$_invoke$arity$2 = cljs$core$async$partition__2;
cljs$core$async$partition.cljs$core$IFn$_invoke$arity$3 = cljs$core$async$partition__3;
return cljs$core$async$partition;
})()
;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function() {
var cljs$core$async$partition_by = null;
var cljs$core$async$partition_by__2 = (function (f,ch){
return cljs$core$async$partition_by.call(null,f,ch,null);
});
var cljs$core$async$partition_by__3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__21542__auto___30604 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21542__auto___30604,out){
return (function (){
var f__21543__auto__ = (function (){var switch__21486__auto__ = ((function (c__21542__auto___30604,out){
return (function (state_30574){
var state_val_30575 = (state_30574[(1)]);
if((state_val_30575 === (7))){
var inst_30570 = (state_30574[(2)]);
var state_30574__$1 = state_30574;
var statearr_30576_30605 = state_30574__$1;
(statearr_30576_30605[(2)] = inst_30570);

(statearr_30576_30605[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30575 === (1))){
var inst_30533 = [];
var inst_30534 = inst_30533;
var inst_30535 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_30574__$1 = (function (){var statearr_30577 = state_30574;
(statearr_30577[(7)] = inst_30535);

(statearr_30577[(8)] = inst_30534);

return statearr_30577;
})();
var statearr_30578_30606 = state_30574__$1;
(statearr_30578_30606[(2)] = null);

(statearr_30578_30606[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30575 === (4))){
var inst_30538 = (state_30574[(9)]);
var inst_30538__$1 = (state_30574[(2)]);
var inst_30539 = (inst_30538__$1 == null);
var inst_30540 = cljs.core.not.call(null,inst_30539);
var state_30574__$1 = (function (){var statearr_30579 = state_30574;
(statearr_30579[(9)] = inst_30538__$1);

return statearr_30579;
})();
if(inst_30540){
var statearr_30580_30607 = state_30574__$1;
(statearr_30580_30607[(1)] = (5));

} else {
var statearr_30581_30608 = state_30574__$1;
(statearr_30581_30608[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30575 === (15))){
var inst_30564 = (state_30574[(2)]);
var state_30574__$1 = state_30574;
var statearr_30582_30609 = state_30574__$1;
(statearr_30582_30609[(2)] = inst_30564);

(statearr_30582_30609[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30575 === (13))){
var state_30574__$1 = state_30574;
var statearr_30583_30610 = state_30574__$1;
(statearr_30583_30610[(2)] = null);

(statearr_30583_30610[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30575 === (6))){
var inst_30534 = (state_30574[(8)]);
var inst_30559 = inst_30534.length;
var inst_30560 = (inst_30559 > (0));
var state_30574__$1 = state_30574;
if(cljs.core.truth_(inst_30560)){
var statearr_30584_30611 = state_30574__$1;
(statearr_30584_30611[(1)] = (12));

} else {
var statearr_30585_30612 = state_30574__$1;
(statearr_30585_30612[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30575 === (3))){
var inst_30572 = (state_30574[(2)]);
var state_30574__$1 = state_30574;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30574__$1,inst_30572);
} else {
if((state_val_30575 === (12))){
var inst_30534 = (state_30574[(8)]);
var inst_30562 = cljs.core.vec.call(null,inst_30534);
var state_30574__$1 = state_30574;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30574__$1,(15),out,inst_30562);
} else {
if((state_val_30575 === (2))){
var state_30574__$1 = state_30574;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30574__$1,(4),ch);
} else {
if((state_val_30575 === (11))){
var inst_30542 = (state_30574[(10)]);
var inst_30538 = (state_30574[(9)]);
var inst_30552 = (state_30574[(2)]);
var inst_30553 = [];
var inst_30554 = inst_30553.push(inst_30538);
var inst_30534 = inst_30553;
var inst_30535 = inst_30542;
var state_30574__$1 = (function (){var statearr_30586 = state_30574;
(statearr_30586[(7)] = inst_30535);

(statearr_30586[(8)] = inst_30534);

(statearr_30586[(11)] = inst_30554);

(statearr_30586[(12)] = inst_30552);

return statearr_30586;
})();
var statearr_30587_30613 = state_30574__$1;
(statearr_30587_30613[(2)] = null);

(statearr_30587_30613[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30575 === (9))){
var inst_30534 = (state_30574[(8)]);
var inst_30550 = cljs.core.vec.call(null,inst_30534);
var state_30574__$1 = state_30574;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30574__$1,(11),out,inst_30550);
} else {
if((state_val_30575 === (5))){
var inst_30535 = (state_30574[(7)]);
var inst_30542 = (state_30574[(10)]);
var inst_30538 = (state_30574[(9)]);
var inst_30542__$1 = f.call(null,inst_30538);
var inst_30543 = cljs.core._EQ_.call(null,inst_30542__$1,inst_30535);
var inst_30544 = cljs.core.keyword_identical_QMARK_.call(null,inst_30535,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_30545 = (inst_30543) || (inst_30544);
var state_30574__$1 = (function (){var statearr_30588 = state_30574;
(statearr_30588[(10)] = inst_30542__$1);

return statearr_30588;
})();
if(cljs.core.truth_(inst_30545)){
var statearr_30589_30614 = state_30574__$1;
(statearr_30589_30614[(1)] = (8));

} else {
var statearr_30590_30615 = state_30574__$1;
(statearr_30590_30615[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30575 === (14))){
var inst_30567 = (state_30574[(2)]);
var inst_30568 = cljs.core.async.close_BANG_.call(null,out);
var state_30574__$1 = (function (){var statearr_30592 = state_30574;
(statearr_30592[(13)] = inst_30567);

return statearr_30592;
})();
var statearr_30593_30616 = state_30574__$1;
(statearr_30593_30616[(2)] = inst_30568);

(statearr_30593_30616[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30575 === (10))){
var inst_30557 = (state_30574[(2)]);
var state_30574__$1 = state_30574;
var statearr_30594_30617 = state_30574__$1;
(statearr_30594_30617[(2)] = inst_30557);

(statearr_30594_30617[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30575 === (8))){
var inst_30542 = (state_30574[(10)]);
var inst_30534 = (state_30574[(8)]);
var inst_30538 = (state_30574[(9)]);
var inst_30547 = inst_30534.push(inst_30538);
var tmp30591 = inst_30534;
var inst_30534__$1 = tmp30591;
var inst_30535 = inst_30542;
var state_30574__$1 = (function (){var statearr_30595 = state_30574;
(statearr_30595[(7)] = inst_30535);

(statearr_30595[(14)] = inst_30547);

(statearr_30595[(8)] = inst_30534__$1);

return statearr_30595;
})();
var statearr_30596_30618 = state_30574__$1;
(statearr_30596_30618[(2)] = null);

(statearr_30596_30618[(1)] = (2));


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
});})(c__21542__auto___30604,out))
;
return ((function (switch__21486__auto__,c__21542__auto___30604,out){
return (function() {
var cljs$core$async$partition_by_$_state_machine__21487__auto__ = null;
var cljs$core$async$partition_by_$_state_machine__21487__auto____0 = (function (){
var statearr_30600 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30600[(0)] = cljs$core$async$partition_by_$_state_machine__21487__auto__);

(statearr_30600[(1)] = (1));

return statearr_30600;
});
var cljs$core$async$partition_by_$_state_machine__21487__auto____1 = (function (state_30574){
while(true){
var ret_value__21488__auto__ = (function (){try{while(true){
var result__21489__auto__ = switch__21486__auto__.call(null,state_30574);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21489__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21489__auto__;
}
break;
}
}catch (e30601){if((e30601 instanceof Object)){
var ex__21490__auto__ = e30601;
var statearr_30602_30619 = state_30574;
(statearr_30602_30619[(5)] = ex__21490__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30574);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30601;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21488__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30620 = state_30574;
state_30574 = G__30620;
continue;
} else {
return ret_value__21488__auto__;
}
break;
}
});
cljs$core$async$partition_by_$_state_machine__21487__auto__ = function(state_30574){
switch(arguments.length){
case 0:
return cljs$core$async$partition_by_$_state_machine__21487__auto____0.call(this);
case 1:
return cljs$core$async$partition_by_$_state_machine__21487__auto____1.call(this,state_30574);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$partition_by_$_state_machine__21487__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$partition_by_$_state_machine__21487__auto____0;
cljs$core$async$partition_by_$_state_machine__21487__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$partition_by_$_state_machine__21487__auto____1;
return cljs$core$async$partition_by_$_state_machine__21487__auto__;
})()
;})(switch__21486__auto__,c__21542__auto___30604,out))
})();
var state__21544__auto__ = (function (){var statearr_30603 = f__21543__auto__.call(null);
(statearr_30603[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21542__auto___30604);

return statearr_30603;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21544__auto__);
});})(c__21542__auto___30604,out))
);


return out;
});
cljs$core$async$partition_by = function(f,ch,buf_or_n){
switch(arguments.length){
case 2:
return cljs$core$async$partition_by__2.call(this,f,ch);
case 3:
return cljs$core$async$partition_by__3.call(this,f,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$partition_by.cljs$core$IFn$_invoke$arity$2 = cljs$core$async$partition_by__2;
cljs$core$async$partition_by.cljs$core$IFn$_invoke$arity$3 = cljs$core$async$partition_by__3;
return cljs$core$async$partition_by;
})()
;

//# sourceMappingURL=async.js.map?rel=1430425802248