// Compiled by ClojureScript 0.0-2156
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t9773 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t9773 = (function (f,fn_handler,meta9774){
this.f = f;
this.fn_handler = fn_handler;
this.meta9774 = meta9774;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t9773.cljs$lang$type = true;
cljs.core.async.t9773.cljs$lang$ctorStr = "cljs.core.async/t9773";
cljs.core.async.t9773.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write(writer__3971__auto__,"cljs.core.async/t9773");
});
cljs.core.async.t9773.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t9773.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t9773.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t9773.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9775){var self__ = this;
var _9775__$1 = this;return self__.meta9774;
});
cljs.core.async.t9773.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9775,meta9774__$1){var self__ = this;
var _9775__$1 = this;return (new cljs.core.async.t9773(self__.f,self__.fn_handler,meta9774__$1));
});
cljs.core.async.__GT_t9773 = (function __GT_t9773(f__$1,fn_handler__$1,meta9774){return (new cljs.core.async.t9773(f__$1,fn_handler__$1,meta9774));
});
}
return (new cljs.core.async.t9773(f,fn_handler,null));
});
/**
* Returns a fixed buffer of size n. When full, puts will block/park.
*/
cljs.core.async.buffer = (function buffer(n){return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
* Returns a buffer of size n. When full, puts will complete but
* val will be dropped (no transfer).
*/
cljs.core.async.dropping_buffer = (function dropping_buffer(n){return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
* Returns a buffer of size n. When full, puts will complete, and be
* buffered, but oldest elements in buffer will be dropped (not
* transferred).
*/
cljs.core.async.sliding_buffer = (function sliding_buffer(n){return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
* Returns true if a channel created with buff will never block. That is to say,
* puts into this buffer will never cause the buffer to be full.
*/
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__9777 = buff;if(G__9777)
{var bit__4053__auto__ = null;if(cljs.core.truth_((function (){var or__3403__auto__ = bit__4053__auto__;if(cljs.core.truth_(or__3403__auto__))
{return or__3403__auto__;
} else
{return G__9777.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__9777.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,G__9777);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,G__9777);
}
});
/**
* Creates a channel with an optional buffer. If buf-or-n is a number,
* will create and use a fixed buffer of that size.
*/
cljs.core.async.chan = (function() {
var chan = null;
var chan__0 = (function (){return chan.cljs$core$IFn$_invoke$arity$1(null);
});
var chan__1 = (function (buf_or_n){var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,0))?null:buf_or_n);return cljs.core.async.impl.channels.chan(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1));
});
chan = function(buf_or_n){
switch(arguments.length){
case 0:
return chan__0.call(this);
case 1:
return chan__1.call(this,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chan.cljs$core$IFn$_invoke$arity$0 = chan__0;
chan.cljs$core$IFn$_invoke$arity$1 = chan__1;
return chan;
})()
;
/**
* Returns a channel that will close after msecs
*/
cljs.core.async.timeout = (function timeout(msecs){return cljs.core.async.impl.timers.timeout(msecs);
});
/**
* takes a val from port. Must be called inside a (go ...) block. Will
* return nil if closed. Will park if nothing is available.
*/
cljs.core.async._LT__BANG_ = (function _LT__BANG_(port){if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("<! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([null], 0)))].join('')));
}
});
/**
* Asynchronously takes a val from port, passing to fn1. Will pass nil
* if closed. If on-caller? (default true) is true, and value is
* immediately available, will call fn1 on calling thread.
* Returns nil.
*/
cljs.core.async.take_BANG_ = (function() {
var take_BANG_ = null;
var take_BANG___2 = (function (port,fn1){return take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
});
var take_BANG___3 = (function (port,fn1,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler(fn1));if(cljs.core.truth_(ret))
{var val_9778 = cljs.core.deref(ret);if(cljs.core.truth_(on_caller_QMARK_))
{(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_9778) : fn1.call(null,val_9778));
} else
{cljs.core.async.impl.dispatch.run((function (){return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_9778) : fn1.call(null,val_9778));
}));
}
} else
{}
return null;
});
take_BANG_ = function(port,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return take_BANG___2.call(this,port,fn1);
case 3:
return take_BANG___3.call(this,port,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take_BANG_.cljs$core$IFn$_invoke$arity$2 = take_BANG___2;
take_BANG_.cljs$core$IFn$_invoke$arity$3 = take_BANG___3;
return take_BANG_;
})()
;
cljs.core.async.nop = (function nop(){return null;
});
/**
* puts a val into port. nil values are not allowed. Must be called
* inside a (go ...) block. Will park if no buffer space is available.
*/
cljs.core.async._GT__BANG_ = (function _GT__BANG_(port,val){if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(">! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([null], 0)))].join('')));
}
});
/**
* Asynchronously puts a val into port, calling fn0 (if supplied) when
* complete. nil values are not allowed. Will throw if closed. If
* on-caller? (default true) is true, and the put is immediately
* accepted, will call fn0 on calling thread.  Returns nil.
*/
cljs.core.async.put_BANG_ = (function() {
var put_BANG_ = null;
var put_BANG___2 = (function (port,val){return put_BANG_.cljs$core$IFn$_invoke$arity$3(port,val,cljs.core.async.nop);
});
var put_BANG___3 = (function (port,val,fn0){return put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn0,true);
});
var put_BANG___4 = (function (port,val,fn0,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler(fn0));if(cljs.core.truth_((function (){var and__3391__auto__ = ret;if(cljs.core.truth_(and__3391__auto__))
{return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(fn0,cljs.core.async.nop);
} else
{return and__3391__auto__;
}
})()))
{if(cljs.core.truth_(on_caller_QMARK_))
{(fn0.cljs$core$IFn$_invoke$arity$0 ? fn0.cljs$core$IFn$_invoke$arity$0() : fn0.call(null));
} else
{cljs.core.async.impl.dispatch.run(fn0);
}
} else
{}
return null;
});
put_BANG_ = function(port,val,fn0,on_caller_QMARK_){
switch(arguments.length){
case 2:
return put_BANG___2.call(this,port,val);
case 3:
return put_BANG___3.call(this,port,val,fn0);
case 4:
return put_BANG___4.call(this,port,val,fn0,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
put_BANG_.cljs$core$IFn$_invoke$arity$2 = put_BANG___2;
put_BANG_.cljs$core$IFn$_invoke$arity$3 = put_BANG___3;
put_BANG_.cljs$core$IFn$_invoke$arity$4 = put_BANG___4;
return put_BANG_;
})()
;
cljs.core.async.close_BANG_ = (function close_BANG_(port){return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4251__auto___9779 = n;var x_9780 = 0;while(true){
if((x_9780 < n__4251__auto___9779))
{(a[x_9780] = 0);
{
var G__9781 = (x_9780 + 1);
x_9780 = G__9781;
continue;
}
} else
{}
break;
}
var i = 1;while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,n))
{return a;
} else
{var j = cljs.core.rand_int(i);(a[i] = (a[j]));
(a[j] = i);
{
var G__9782 = (i + 1);
i = G__9782;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);if(typeof cljs.core.async.t9786 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t9786 = (function (flag,alt_flag,meta9787){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta9787 = meta9787;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t9786.cljs$lang$type = true;
cljs.core.async.t9786.cljs$lang$ctorStr = "cljs.core.async/t9786";
cljs.core.async.t9786.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write(writer__3971__auto__,"cljs.core.async/t9786");
});
cljs.core.async.t9786.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t9786.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref(self__.flag);
});
cljs.core.async.t9786.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_(self__.flag,null);
return true;
});
cljs.core.async.t9786.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9788){var self__ = this;
var _9788__$1 = this;return self__.meta9787;
});
cljs.core.async.t9786.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9788,meta9787__$1){var self__ = this;
var _9788__$1 = this;return (new cljs.core.async.t9786(self__.flag,self__.alt_flag,meta9787__$1));
});
cljs.core.async.__GT_t9786 = (function __GT_t9786(flag__$1,alt_flag__$1,meta9787){return (new cljs.core.async.t9786(flag__$1,alt_flag__$1,meta9787));
});
}
return (new cljs.core.async.t9786(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t9792 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t9792 = (function (cb,flag,alt_handler,meta9793){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta9793 = meta9793;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t9792.cljs$lang$type = true;
cljs.core.async.t9792.cljs$lang$ctorStr = "cljs.core.async/t9792";
cljs.core.async.t9792.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write(writer__3971__auto__,"cljs.core.async/t9792");
});
cljs.core.async.t9792.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t9792.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
});
cljs.core.async.t9792.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit(self__.flag);
return self__.cb;
});
cljs.core.async.t9792.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9794){var self__ = this;
var _9794__$1 = this;return self__.meta9793;
});
cljs.core.async.t9792.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9794,meta9793__$1){var self__ = this;
var _9794__$1 = this;return (new cljs.core.async.t9792(self__.cb,self__.flag,self__.alt_handler,meta9793__$1));
});
cljs.core.async.__GT_t9792 = (function __GT_t9792(cb__$1,flag__$1,alt_handler__$1,meta9793){return (new cljs.core.async.t9792(cb__$1,flag__$1,alt_handler__$1,meta9793));
});
}
return (new cljs.core.async.t9792(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag();var n = cljs.core.count(ports);var idxs = cljs.core.async.random_array(n);var priority = cljs.core.constant$keyword$37.cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = 0;while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1(0) : port.call(null,0)):null);var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1(1) : port.call(null,1));return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (){return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,wport], null)) : fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,wport], null)));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__9795_SHARP_){return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__9795_SHARP_,port], null)) : fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__9795_SHARP_,port], null)));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));if(cljs.core.truth_(vbox))
{return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__3403__auto__ = wport;if(cljs.core.truth_(or__3403__auto__))
{return or__3403__auto__;
} else
{return port;
}
})()], null));
} else
{{
var G__9796 = (i + 1);
i = G__9796;
continue;
}
}
} else
{return null;
}
break;
}
})();var or__3403__auto__ = ret;if(cljs.core.truth_(or__3403__auto__))
{return or__3403__auto__;
} else
{if(cljs.core.contains_QMARK_(opts,cljs.core.constant$keyword$7))
{var temp__4092__auto__ = (function (){var and__3391__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);if(cljs.core.truth_(and__3391__auto__))
{return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else
{return and__3391__auto__;
}
})();if(cljs.core.truth_(temp__4092__auto__))
{var got = temp__4092__auto__;return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$7.cljs$core$IFn$_invoke$arity$1(opts),cljs.core.constant$keyword$7], null));
} else
{return null;
}
} else
{return null;
}
}
});
/**
* Completes at most one of several channel operations. Must be called
* inside a (go ...) block. ports is a vector of channel endpoints, which
* can be either a channel to take from or a vector of
* [channel-to-put-to val-to-put], in any combination. Takes will be
* made as if by <!, and puts will be made as if by >!. Unless
* the :priority option is true, if more than one port operation is
* ready a non-deterministic choice will be made. If no operation is
* ready and a :default value is supplied, [default-val :default] will
* be returned, otherwise alts! will park until the first operation to
* become ready completes. Returns [val port] of the completed
* operation, where val is the value taken for takes, and nil for puts.
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
var alts_BANG___delegate = function (ports,p__9797){var map__9799 = p__9797;var map__9799__$1 = ((cljs.core.seq_QMARK_(map__9799))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9799):map__9799);var opts = map__9799__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([null], 0)))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__9797 = null;if (arguments.length > 1) {
  p__9797 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__9797);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__9800){
var ports = cljs.core.first(arglist__9800);
var p__9797 = cljs.core.rest(arglist__9800);
return alts_BANG___delegate(ports,p__9797);
});
alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = alts_BANG___delegate;
return alts_BANG_;
})()
;
/**
* Takes a function and a source channel, and returns a channel which
* contains the values produced by applying f to each value taken from
* the source channel
*/
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t9808 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t9808 = (function (ch,f,map_LT_,meta9809){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta9809 = meta9809;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t9808.cljs$lang$type = true;
cljs.core.async.t9808.cljs$lang$ctorStr = "cljs.core.async/t9808";
cljs.core.async.t9808.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write(writer__3971__auto__,"cljs.core.async/t9808");
});
cljs.core.async.t9808.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t9808.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn0);
});
cljs.core.async.t9808.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t9808.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){if(typeof cljs.core.async.t9811 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t9811 = (function (fn1,_,meta9809,ch,f,map_LT_,meta9812){
this.fn1 = fn1;
this._ = _;
this.meta9809 = meta9809;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta9812 = meta9812;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t9811.cljs$lang$type = true;
cljs.core.async.t9811.cljs$lang$ctorStr = "cljs.core.async/t9811";
cljs.core.async.t9811.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write(writer__3971__auto__,"cljs.core.async/t9811");
});
cljs.core.async.t9811.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t9811.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
});
cljs.core.async.t9811.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return (cljs.core.async.impl.protocols.lock_id.cljs$core$IFn$_invoke$arity$1 ? cljs.core.async.impl.protocols.lock_id.cljs$core$IFn$_invoke$arity$1(self__.fn1) : cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1));
});
cljs.core.async.t9811.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);return ((function (f1,___$4){
return (function (p1__9801_SHARP_){return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1((((p1__9801_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__9801_SHARP_) : self__.f.call(null,p1__9801_SHARP_)))) : f1.call(null,(((p1__9801_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__9801_SHARP_) : self__.f.call(null,p1__9801_SHARP_)))));
});
;})(f1,___$4))
});
cljs.core.async.t9811.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9813){var self__ = this;
var _9813__$1 = this;return self__.meta9812;
});
cljs.core.async.t9811.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9813,meta9812__$1){var self__ = this;
var _9813__$1 = this;return (new cljs.core.async.t9811(self__.fn1,self__._,self__.meta9809,self__.ch,self__.f,self__.map_LT_,meta9812__$1));
});
cljs.core.async.__GT_t9811 = (function __GT_t9811(fn1__$1,___$2,meta9809__$1,ch__$2,f__$2,map_LT___$2,meta9812){return (new cljs.core.async.t9811(fn1__$1,___$2,meta9809__$1,ch__$2,f__$2,map_LT___$2,meta9812));
});
}
return (new cljs.core.async.t9811(fn1,___$1,self__.meta9809,self__.ch,self__.f,self__.map_LT_,null));
})());if(cljs.core.truth_((function (){var and__3391__auto__ = ret;if(cljs.core.truth_(and__3391__auto__))
{return !((cljs.core.deref(ret) == null));
} else
{return and__3391__auto__;
}
})()))
{return cljs.core.async.impl.channels.box((self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(ret)) : self__.f.call(null,cljs.core.deref(ret))));
} else
{return ret;
}
});
cljs.core.async.t9808.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t9808.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});
cljs.core.async.t9808.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9810){var self__ = this;
var _9810__$1 = this;return self__.meta9809;
});
cljs.core.async.t9808.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9810,meta9809__$1){var self__ = this;
var _9810__$1 = this;return (new cljs.core.async.t9808(self__.ch,self__.f,self__.map_LT_,meta9809__$1));
});
cljs.core.async.__GT_t9808 = (function __GT_t9808(ch__$1,f__$1,map_LT___$1,meta9809){return (new cljs.core.async.t9808(ch__$1,f__$1,map_LT___$1,meta9809));
});
}
return (new cljs.core.async.t9808(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t9817 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t9817 = (function (ch,f,map_GT_,meta9818){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta9818 = meta9818;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t9817.cljs$lang$type = true;
cljs.core.async.t9817.cljs$lang$ctorStr = "cljs.core.async/t9817";
cljs.core.async.t9817.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write(writer__3971__auto__,"cljs.core.async/t9817");
});
cljs.core.async.t9817.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t9817.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn0);
});
cljs.core.async.t9817.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t9817.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});
cljs.core.async.t9817.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t9817.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});
cljs.core.async.t9817.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9819){var self__ = this;
var _9819__$1 = this;return self__.meta9818;
});
cljs.core.async.t9817.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9819,meta9818__$1){var self__ = this;
var _9819__$1 = this;return (new cljs.core.async.t9817(self__.ch,self__.f,self__.map_GT_,meta9818__$1));
});
cljs.core.async.__GT_t9817 = (function __GT_t9817(ch__$1,f__$1,map_GT___$1,meta9818){return (new cljs.core.async.t9817(ch__$1,f__$1,map_GT___$1,meta9818));
});
}
return (new cljs.core.async.t9817(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t9823 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t9823 = (function (ch,p,filter_GT_,meta9824){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta9824 = meta9824;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t9823.cljs$lang$type = true;
cljs.core.async.t9823.cljs$lang$ctorStr = "cljs.core.async/t9823";
cljs.core.async.t9823.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write(writer__3971__auto__,"cljs.core.async/t9823");
});
cljs.core.async.t9823.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t9823.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val))))
{return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box(null);
}
});
cljs.core.async.t9823.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t9823.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});
cljs.core.async.t9823.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t9823.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});
cljs.core.async.t9823.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9825){var self__ = this;
var _9825__$1 = this;return self__.meta9824;
});
cljs.core.async.t9823.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9825,meta9824__$1){var self__ = this;
var _9825__$1 = this;return (new cljs.core.async.t9823(self__.ch,self__.p,self__.filter_GT_,meta9824__$1));
});
cljs.core.async.__GT_t9823 = (function __GT_t9823(ch__$1,p__$1,filter_GT___$1,meta9824){return (new cljs.core.async.t9823(ch__$1,p__$1,filter_GT___$1,meta9824));
});
}
return (new cljs.core.async.t9823(ch,p,filter_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns false to the
* target channel.
*/
cljs.core.async.remove_GT_ = (function remove_GT_(p,ch){return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
* Takes a predicate and a source channel, and returns a channel which
* contains only the values taken from the source channel for which the
* predicate returns true. The returned channel will be unbuffered by
* default, or a buf-or-n can be supplied. The channel will close
* when the source channel closes.
*/
cljs.core.async.filter_LT_ = (function() {
var filter_LT_ = null;
var filter_LT___2 = (function (p,ch){return filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5524__auto___9908 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5525__auto__ = (function (){var switch__5509__auto__ = (function (state_9887){var state_val_9888 = (state_9887[1]);if((state_val_9888 === 1))
{var state_9887__$1 = state_9887;var statearr_9889_9909 = state_9887__$1;(statearr_9889_9909[2] = null);
(statearr_9889_9909[1] = 2);
return cljs.core.constant$keyword$25;
} else
{if((state_val_9888 === 2))
{var state_9887__$1 = state_9887;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_9887__$1,4,ch);
} else
{if((state_val_9888 === 3))
{var inst_9885 = (state_9887[2]);var state_9887__$1 = state_9887;return cljs.core.async.impl.ioc_helpers.return_chan(state_9887__$1,inst_9885);
} else
{if((state_val_9888 === 4))
{var inst_9869 = (state_9887[7]);var inst_9869__$1 = (state_9887[2]);var inst_9870 = (inst_9869__$1 == null);var state_9887__$1 = (function (){var statearr_9890 = state_9887;(statearr_9890[7] = inst_9869__$1);
return statearr_9890;
})();if(cljs.core.truth_(inst_9870))
{var statearr_9891_9910 = state_9887__$1;(statearr_9891_9910[1] = 5);
} else
{var statearr_9892_9911 = state_9887__$1;(statearr_9892_9911[1] = 6);
}
return cljs.core.constant$keyword$25;
} else
{if((state_val_9888 === 5))
{var inst_9872 = cljs.core.async.close_BANG_(out);var state_9887__$1 = state_9887;var statearr_9893_9912 = state_9887__$1;(statearr_9893_9912[2] = inst_9872);
(statearr_9893_9912[1] = 7);
return cljs.core.constant$keyword$25;
} else
{if((state_val_9888 === 6))
{var inst_9869 = (state_9887[7]);var inst_9874 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_9869) : p.call(null,inst_9869));var state_9887__$1 = state_9887;if(cljs.core.truth_(inst_9874))
{var statearr_9894_9913 = state_9887__$1;(statearr_9894_9913[1] = 8);
} else
{var statearr_9895_9914 = state_9887__$1;(statearr_9895_9914[1] = 9);
}
return cljs.core.constant$keyword$25;
} else
{if((state_val_9888 === 7))
{var inst_9883 = (state_9887[2]);var state_9887__$1 = state_9887;var statearr_9896_9915 = state_9887__$1;(statearr_9896_9915[2] = inst_9883);
(statearr_9896_9915[1] = 3);
return cljs.core.constant$keyword$25;
} else
{if((state_val_9888 === 8))
{var inst_9869 = (state_9887[7]);var state_9887__$1 = state_9887;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_9887__$1,11,out,inst_9869);
} else
{if((state_val_9888 === 9))
{var state_9887__$1 = state_9887;var statearr_9897_9916 = state_9887__$1;(statearr_9897_9916[2] = null);
(statearr_9897_9916[1] = 10);
return cljs.core.constant$keyword$25;
} else
{if((state_val_9888 === 10))
{var inst_9880 = (state_9887[2]);var state_9887__$1 = (function (){var statearr_9898 = state_9887;(statearr_9898[8] = inst_9880);
return statearr_9898;
})();var statearr_9899_9917 = state_9887__$1;(statearr_9899_9917[2] = null);
(statearr_9899_9917[1] = 2);
return cljs.core.constant$keyword$25;
} else
{if((state_val_9888 === 11))
{var inst_9877 = (state_9887[2]);var state_9887__$1 = state_9887;var statearr_9900_9918 = state_9887__$1;(statearr_9900_9918[2] = inst_9877);
(statearr_9900_9918[1] = 10);
return cljs.core.constant$keyword$25;
} else
{return null;
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
});return ((function (switch__5509__auto__){
return (function() {
var state_machine__5510__auto__ = null;
var state_machine__5510__auto____0 = (function (){var statearr_9904 = [null,null,null,null,null,null,null,null,null];(statearr_9904[0] = state_machine__5510__auto__);
(statearr_9904[1] = 1);
return statearr_9904;
});
var state_machine__5510__auto____1 = (function (state_9887){while(true){
var ret_value__5511__auto__ = (function (){try{while(true){
var result__5512__auto__ = switch__5509__auto__(state_9887);if(cljs.core.keyword_identical_QMARK_(result__5512__auto__,cljs.core.constant$keyword$25))
{{
continue;
}
} else
{return result__5512__auto__;
}
break;
}
}catch (e9905){if((e9905 instanceof Object))
{var ex__5513__auto__ = e9905;var statearr_9906_9919 = state_9887;(statearr_9906_9919[5] = ex__5513__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_9887);
return cljs.core.constant$keyword$25;
} else
{if(cljs.core.constant$keyword$6)
{throw e9905;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5511__auto__,cljs.core.constant$keyword$25))
{{
var G__9920 = state_9887;
state_9887 = G__9920;
continue;
}
} else
{return ret_value__5511__auto__;
}
break;
}
});
state_machine__5510__auto__ = function(state_9887){
switch(arguments.length){
case 0:
return state_machine__5510__auto____0.call(this);
case 1:
return state_machine__5510__auto____1.call(this,state_9887);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5510__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5510__auto____0;
state_machine__5510__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5510__auto____1;
return state_machine__5510__auto__;
})()
;})(switch__5509__auto__))
})();var state__5526__auto__ = (function (){var statearr_9907 = (f__5525__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5525__auto__.cljs$core$IFn$_invoke$arity$0() : f__5525__auto__.call(null));(statearr_9907[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5524__auto___9908);
return statearr_9907;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5526__auto__);
}));
return out;
});
filter_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return filter_LT___2.call(this,p,ch);
case 3:
return filter_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
filter_LT_.cljs$core$IFn$_invoke$arity$2 = filter_LT___2;
filter_LT_.cljs$core$IFn$_invoke$arity$3 = filter_LT___3;
return filter_LT_;
})()
;
/**
* Takes a predicate and a source channel, and returns a channel which
* contains only the values taken from the source channel for which the
* predicate returns false. The returned channel will be unbuffered by
* default, or a buf-or-n can be supplied. The channel will close
* when the source channel closes.
*/
cljs.core.async.remove_LT_ = (function() {
var remove_LT_ = null;
var remove_LT___2 = (function (p,ch){return remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});
var remove_LT___3 = (function (p,ch,buf_or_n){return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
});
remove_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return remove_LT___2.call(this,p,ch);
case 3:
return remove_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
remove_LT_.cljs$core$IFn$_invoke$arity$2 = remove_LT___2;
remove_LT_.cljs$core$IFn$_invoke$arity$3 = remove_LT___3;
return remove_LT_;
})()
;
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__5524__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5525__auto__ = (function (){var switch__5509__auto__ = (function (state_10072){var state_val_10073 = (state_10072[1]);if((state_val_10073 === 1))
{var state_10072__$1 = state_10072;var statearr_10074_10111 = state_10072__$1;(statearr_10074_10111[2] = null);
(statearr_10074_10111[1] = 2);
return cljs.core.constant$keyword$25;
} else
{if((state_val_10073 === 2))
{var state_10072__$1 = state_10072;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_10072__$1,4,in$);
} else
{if((state_val_10073 === 3))
{var inst_10070 = (state_10072[2]);var state_10072__$1 = state_10072;return cljs.core.async.impl.ioc_helpers.return_chan(state_10072__$1,inst_10070);
} else
{if((state_val_10073 === 4))
{var inst_10018 = (state_10072[7]);var inst_10018__$1 = (state_10072[2]);var inst_10019 = (inst_10018__$1 == null);var state_10072__$1 = (function (){var statearr_10075 = state_10072;(statearr_10075[7] = inst_10018__$1);
return statearr_10075;
})();if(cljs.core.truth_(inst_10019))
{var statearr_10076_10112 = state_10072__$1;(statearr_10076_10112[1] = 5);
} else
{var statearr_10077_10113 = state_10072__$1;(statearr_10077_10113[1] = 6);
}
return cljs.core.constant$keyword$25;
} else
{if((state_val_10073 === 5))
{var inst_10021 = cljs.core.async.close_BANG_(out);var state_10072__$1 = state_10072;var statearr_10078_10114 = state_10072__$1;(statearr_10078_10114[2] = inst_10021);
(statearr_10078_10114[1] = 7);
return cljs.core.constant$keyword$25;
} else
{if((state_val_10073 === 6))
{var inst_10018 = (state_10072[7]);var inst_10023 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_10018) : f.call(null,inst_10018));var inst_10028 = cljs.core.seq(inst_10023);var inst_10029 = inst_10028;var inst_10030 = null;var inst_10031 = 0;var inst_10032 = 0;var state_10072__$1 = (function (){var statearr_10079 = state_10072;(statearr_10079[8] = inst_10029);
(statearr_10079[9] = inst_10031);
(statearr_10079[10] = inst_10032);
(statearr_10079[11] = inst_10030);
return statearr_10079;
})();var statearr_10080_10115 = state_10072__$1;(statearr_10080_10115[2] = null);
(statearr_10080_10115[1] = 8);
return cljs.core.constant$keyword$25;
} else
{if((state_val_10073 === 7))
{var inst_10068 = (state_10072[2]);var state_10072__$1 = state_10072;var statearr_10081_10116 = state_10072__$1;(statearr_10081_10116[2] = inst_10068);
(statearr_10081_10116[1] = 3);
return cljs.core.constant$keyword$25;
} else
{if((state_val_10073 === 8))
{var inst_10031 = (state_10072[9]);var inst_10032 = (state_10072[10]);var inst_10034 = (inst_10032 < inst_10031);var inst_10035 = inst_10034;var state_10072__$1 = state_10072;if(cljs.core.truth_(inst_10035))
{var statearr_10082_10117 = state_10072__$1;(statearr_10082_10117[1] = 10);
} else
{var statearr_10083_10118 = state_10072__$1;(statearr_10083_10118[1] = 11);
}
return cljs.core.constant$keyword$25;
} else
{if((state_val_10073 === 9))
{var inst_10065 = (state_10072[2]);var state_10072__$1 = (function (){var statearr_10084 = state_10072;(statearr_10084[12] = inst_10065);
return statearr_10084;
})();var statearr_10085_10119 = state_10072__$1;(statearr_10085_10119[2] = null);
(statearr_10085_10119[1] = 2);
return cljs.core.constant$keyword$25;
} else
{if((state_val_10073 === 10))
{var inst_10032 = (state_10072[10]);var inst_10030 = (state_10072[11]);var inst_10037 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_10030,inst_10032);var state_10072__$1 = state_10072;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_10072__$1,13,out,inst_10037);
} else
{if((state_val_10073 === 11))
{var inst_10043 = (state_10072[13]);var inst_10029 = (state_10072[8]);var inst_10043__$1 = cljs.core.seq(inst_10029);var state_10072__$1 = (function (){var statearr_10089 = state_10072;(statearr_10089[13] = inst_10043__$1);
return statearr_10089;
})();if(inst_10043__$1)
{var statearr_10090_10120 = state_10072__$1;(statearr_10090_10120[1] = 14);
} else
{var statearr_10091_10121 = state_10072__$1;(statearr_10091_10121[1] = 15);
}
return cljs.core.constant$keyword$25;
} else
{if((state_val_10073 === 12))
{var inst_10063 = (state_10072[2]);var state_10072__$1 = state_10072;var statearr_10092_10122 = state_10072__$1;(statearr_10092_10122[2] = inst_10063);
(statearr_10092_10122[1] = 9);
return cljs.core.constant$keyword$25;
} else
{if((state_val_10073 === 13))
{var inst_10029 = (state_10072[8]);var inst_10031 = (state_10072[9]);var inst_10032 = (state_10072[10]);var inst_10030 = (state_10072[11]);var inst_10039 = (state_10072[2]);var inst_10040 = (inst_10032 + 1);var tmp10086 = inst_10029;var tmp10087 = inst_10031;var tmp10088 = inst_10030;var inst_10029__$1 = tmp10086;var inst_10030__$1 = tmp10088;var inst_10031__$1 = tmp10087;var inst_10032__$1 = inst_10040;var state_10072__$1 = (function (){var statearr_10093 = state_10072;(statearr_10093[14] = inst_10039);
(statearr_10093[8] = inst_10029__$1);
(statearr_10093[9] = inst_10031__$1);
(statearr_10093[10] = inst_10032__$1);
(statearr_10093[11] = inst_10030__$1);
return statearr_10093;
})();var statearr_10094_10123 = state_10072__$1;(statearr_10094_10123[2] = null);
(statearr_10094_10123[1] = 8);
return cljs.core.constant$keyword$25;
} else
{if((state_val_10073 === 14))
{var inst_10043 = (state_10072[13]);var inst_10045 = cljs.core.chunked_seq_QMARK_(inst_10043);var state_10072__$1 = state_10072;if(inst_10045)
{var statearr_10095_10124 = state_10072__$1;(statearr_10095_10124[1] = 17);
} else
{var statearr_10096_10125 = state_10072__$1;(statearr_10096_10125[1] = 18);
}
return cljs.core.constant$keyword$25;
} else
{if((state_val_10073 === 15))
{var state_10072__$1 = state_10072;var statearr_10097_10126 = state_10072__$1;(statearr_10097_10126[2] = null);
(statearr_10097_10126[1] = 16);
return cljs.core.constant$keyword$25;
} else
{if((state_val_10073 === 16))
{var inst_10061 = (state_10072[2]);var state_10072__$1 = state_10072;var statearr_10098_10127 = state_10072__$1;(statearr_10098_10127[2] = inst_10061);
(statearr_10098_10127[1] = 12);
return cljs.core.constant$keyword$25;
} else
{if((state_val_10073 === 17))
{var inst_10043 = (state_10072[13]);var inst_10047 = cljs.core.chunk_first(inst_10043);var inst_10048 = cljs.core.chunk_rest(inst_10043);var inst_10049 = cljs.core.count(inst_10047);var inst_10029 = inst_10048;var inst_10030 = inst_10047;var inst_10031 = inst_10049;var inst_10032 = 0;var state_10072__$1 = (function (){var statearr_10099 = state_10072;(statearr_10099[8] = inst_10029);
(statearr_10099[9] = inst_10031);
(statearr_10099[10] = inst_10032);
(statearr_10099[11] = inst_10030);
return statearr_10099;
})();var statearr_10100_10128 = state_10072__$1;(statearr_10100_10128[2] = null);
(statearr_10100_10128[1] = 8);
return cljs.core.constant$keyword$25;
} else
{if((state_val_10073 === 18))
{var inst_10043 = (state_10072[13]);var inst_10052 = cljs.core.first(inst_10043);var state_10072__$1 = state_10072;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_10072__$1,20,out,inst_10052);
} else
{if((state_val_10073 === 19))
{var inst_10058 = (state_10072[2]);var state_10072__$1 = state_10072;var statearr_10101_10129 = state_10072__$1;(statearr_10101_10129[2] = inst_10058);
(statearr_10101_10129[1] = 16);
return cljs.core.constant$keyword$25;
} else
{if((state_val_10073 === 20))
{var inst_10043 = (state_10072[13]);var inst_10054 = (state_10072[2]);var inst_10055 = cljs.core.next(inst_10043);var inst_10029 = inst_10055;var inst_10030 = null;var inst_10031 = 0;var inst_10032 = 0;var state_10072__$1 = (function (){var statearr_10102 = state_10072;(statearr_10102[15] = inst_10054);
(statearr_10102[8] = inst_10029);
(statearr_10102[9] = inst_10031);
(statearr_10102[10] = inst_10032);
(statearr_10102[11] = inst_10030);
return statearr_10102;
})();var statearr_10103_10130 = state_10072__$1;(statearr_10103_10130[2] = null);
(statearr_10103_10130[1] = 8);
return cljs.core.constant$keyword$25;
} else
{return null;
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
});return ((function (switch__5509__auto__){
return (function() {
var state_machine__5510__auto__ = null;
var state_machine__5510__auto____0 = (function (){var statearr_10107 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_10107[0] = state_machine__5510__auto__);
(statearr_10107[1] = 1);
return statearr_10107;
});
var state_machine__5510__auto____1 = (function (state_10072){while(true){
var ret_value__5511__auto__ = (function (){try{while(true){
var result__5512__auto__ = switch__5509__auto__(state_10072);if(cljs.core.keyword_identical_QMARK_(result__5512__auto__,cljs.core.constant$keyword$25))
{{
continue;
}
} else
{return result__5512__auto__;
}
break;
}
}catch (e10108){if((e10108 instanceof Object))
{var ex__5513__auto__ = e10108;var statearr_10109_10131 = state_10072;(statearr_10109_10131[5] = ex__5513__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_10072);
return cljs.core.constant$keyword$25;
} else
{if(cljs.core.constant$keyword$6)
{throw e10108;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5511__auto__,cljs.core.constant$keyword$25))
{{
var G__10132 = state_10072;
state_10072 = G__10132;
continue;
}
} else
{return ret_value__5511__auto__;
}
break;
}
});
state_machine__5510__auto__ = function(state_10072){
switch(arguments.length){
case 0:
return state_machine__5510__auto____0.call(this);
case 1:
return state_machine__5510__auto____1.call(this,state_10072);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5510__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5510__auto____0;
state_machine__5510__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5510__auto____1;
return state_machine__5510__auto__;
})()
;})(switch__5509__auto__))
})();var state__5526__auto__ = (function (){var statearr_10110 = (f__5525__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5525__auto__.cljs$core$IFn$_invoke$arity$0() : f__5525__auto__.call(null));(statearr_10110[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5524__auto__);
return statearr_10110;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5526__auto__);
}));
return c__5524__auto__;
});
/**
* Takes a function and a source channel, and returns a channel which
* contains the values in each collection produced by applying f to
* each value taken from the source channel. f must return a
* collection.
* 
* The returned channel will be unbuffered by default, or a buf-or-n
* can be supplied. The channel will close when the source channel
* closes.
*/
cljs.core.async.mapcat_LT_ = (function() {
var mapcat_LT_ = null;
var mapcat_LT___2 = (function (f,in$){return mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
});
var mapcat_LT___3 = (function (f,in$,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);cljs.core.async.mapcat_STAR_(f,in$,out);
return out;
});
mapcat_LT_ = function(f,in$,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_LT___2.call(this,f,in$);
case 3:
return mapcat_LT___3.call(this,f,in$,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = mapcat_LT___2;
mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = mapcat_LT___3;
return mapcat_LT_;
})()
;
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value put, then supplies each element of the result
* to the target channel. f must return a collection.
* 
* The returned channel will be unbuffered by default, or a buf-or-n
* can be supplied. The target channel will be closed when the source
* channel closes.
*/
cljs.core.async.mapcat_GT_ = (function() {
var mapcat_GT_ = null;
var mapcat_GT___2 = (function (f,out){return mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
});
var mapcat_GT___3 = (function (f,out,buf_or_n){var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);cljs.core.async.mapcat_STAR_(f,in$,out);
return in$;
});
mapcat_GT_ = function(f,out,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_GT___2.call(this,f,out);
case 3:
return mapcat_GT___3.call(this,f,out,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = mapcat_GT___2;
mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = mapcat_GT___3;
return mapcat_GT_;
})()
;
/**
* Takes elements from the from channel and supplies them to the to
* channel. By default, the to channel will be closed when the
* from channel closes, but can be determined by the close?
* parameter.
*/
cljs.core.async.pipe = (function() {
var pipe = null;
var pipe__2 = (function (from,to){return pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
});
var pipe__3 = (function (from,to,close_QMARK_){var c__5524__auto___10213 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5525__auto__ = (function (){var switch__5509__auto__ = (function (state_10192){var state_val_10193 = (state_10192[1]);if((state_val_10193 === 1))
{var state_10192__$1 = state_10192;var statearr_10194_10214 = state_10192__$1;(statearr_10194_10214[2] = null);
(statearr_10194_10214[1] = 2);
return cljs.core.constant$keyword$25;
} else
{if((state_val_10193 === 2))
{var state_10192__$1 = state_10192;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_10192__$1,4,from);
} else
{if((state_val_10193 === 3))
{var inst_10190 = (state_10192[2]);var state_10192__$1 = state_10192;return cljs.core.async.impl.ioc_helpers.return_chan(state_10192__$1,inst_10190);
} else
{if((state_val_10193 === 4))
{var inst_10175 = (state_10192[7]);var inst_10175__$1 = (state_10192[2]);var inst_10176 = (inst_10175__$1 == null);var state_10192__$1 = (function (){var statearr_10195 = state_10192;(statearr_10195[7] = inst_10175__$1);
return statearr_10195;
})();if(cljs.core.truth_(inst_10176))
{var statearr_10196_10215 = state_10192__$1;(statearr_10196_10215[1] = 5);
} else
{var statearr_10197_10216 = state_10192__$1;(statearr_10197_10216[1] = 6);
}
return cljs.core.constant$keyword$25;
} else
{if((state_val_10193 === 5))
{var state_10192__$1 = state_10192;if(cljs.core.truth_(close_QMARK_))
{var statearr_10198_10217 = state_10192__$1;(statearr_10198_10217[1] = 8);
} else
{var statearr_10199_10218 = state_10192__$1;(statearr_10199_10218[1] = 9);
}
return cljs.core.constant$keyword$25;
} else
{if((state_val_10193 === 6))
{var inst_10175 = (state_10192[7]);var state_10192__$1 = state_10192;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_10192__$1,11,to,inst_10175);
} else
{if((state_val_10193 === 7))
{var inst_10188 = (state_10192[2]);var state_10192__$1 = state_10192;var statearr_10200_10219 = state_10192__$1;(statearr_10200_10219[2] = inst_10188);
(statearr_10200_10219[1] = 3);
return cljs.core.constant$keyword$25;
} else
{if((state_val_10193 === 8))
{var inst_10179 = cljs.core.async.close_BANG_(to);var state_10192__$1 = state_10192;var statearr_10201_10220 = state_10192__$1;(statearr_10201_10220[2] = inst_10179);
(statearr_10201_10220[1] = 10);
return cljs.core.constant$keyword$25;
} else
{if((state_val_10193 === 9))
{var state_10192__$1 = state_10192;var statearr_10202_10221 = state_10192__$1;(statearr_10202_10221[2] = null);
(statearr_10202_10221[1] = 10);
return cljs.core.constant$keyword$25;
} else
{if((state_val_10193 === 10))
{var inst_10182 = (state_10192[2]);var state_10192__$1 = state_10192;var statearr_10203_10222 = state_10192__$1;(statearr_10203_10222[2] = inst_10182);
(statearr_10203_10222[1] = 7);
return cljs.core.constant$keyword$25;
} else
{if((state_val_10193 === 11))
{var inst_10185 = (state_10192[2]);var state_10192__$1 = (function (){var statearr_10204 = state_10192;(statearr_10204[8] = inst_10185);
return statearr_10204;
})();var statearr_10205_10223 = state_10192__$1;(statearr_10205_10223[2] = null);
(statearr_10205_10223[1] = 2);
return cljs.core.constant$keyword$25;
} else
{return null;
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
});return ((function (switch__5509__auto__){
return (function() {
var state_machine__5510__auto__ = null;
var state_machine__5510__auto____0 = (function (){var statearr_10209 = [null,null,null,null,null,null,null,null,null];(statearr_10209[0] = state_machine__5510__auto__);
(statearr_10209[1] = 1);
return statearr_10209;
});
var state_machine__5510__auto____1 = (function (state_10192){while(true){
var ret_value__5511__auto__ = (function (){try{while(true){
var result__5512__auto__ = switch__5509__auto__(state_10192);if(cljs.core.keyword_identical_QMARK_(result__5512__auto__,cljs.core.constant$keyword$25))
{{
continue;
}
} else
{return result__5512__auto__;
}
break;
}
}catch (e10210){if((e10210 instanceof Object))
{var ex__5513__auto__ = e10210;var statearr_10211_10224 = state_10192;(statearr_10211_10224[5] = ex__5513__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_10192);
return cljs.core.constant$keyword$25;
} else
{if(cljs.core.constant$keyword$6)
{throw e10210;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5511__auto__,cljs.core.constant$keyword$25))
{{
var G__10225 = state_10192;
state_10192 = G__10225;
continue;
}
} else
{return ret_value__5511__auto__;
}
break;
}
});
state_machine__5510__auto__ = function(state_10192){
switch(arguments.length){
case 0:
return state_machine__5510__auto____0.call(this);
case 1:
return state_machine__5510__auto____1.call(this,state_10192);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5510__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5510__auto____0;
state_machine__5510__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5510__auto____1;
return state_machine__5510__auto__;
})()
;})(switch__5509__auto__))
})();var state__5526__auto__ = (function (){var statearr_10212 = (f__5525__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5525__auto__.cljs$core$IFn$_invoke$arity$0() : f__5525__auto__.call(null));(statearr_10212[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5524__auto___10213);
return statearr_10212;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5526__auto__);
}));
return to;
});
pipe = function(from,to,close_QMARK_){
switch(arguments.length){
case 2:
return pipe__2.call(this,from,to);
case 3:
return pipe__3.call(this,from,to,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipe.cljs$core$IFn$_invoke$arity$2 = pipe__2;
pipe.cljs$core$IFn$_invoke$arity$3 = pipe__3;
return pipe;
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
var split = null;
var split__2 = (function (p,ch){return split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
});
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);var c__5524__auto___10312 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5525__auto__ = (function (){var switch__5509__auto__ = (function (state_10290){var state_val_10291 = (state_10290[1]);if((state_val_10291 === 1))
{var state_10290__$1 = state_10290;var statearr_10292_10313 = state_10290__$1;(statearr_10292_10313[2] = null);
(statearr_10292_10313[1] = 2);
return cljs.core.constant$keyword$25;
} else
{if((state_val_10291 === 2))
{var state_10290__$1 = state_10290;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_10290__$1,4,ch);
} else
{if((state_val_10291 === 3))
{var inst_10288 = (state_10290[2]);var state_10290__$1 = state_10290;return cljs.core.async.impl.ioc_helpers.return_chan(state_10290__$1,inst_10288);
} else
{if((state_val_10291 === 4))
{var inst_10271 = (state_10290[7]);var inst_10271__$1 = (state_10290[2]);var inst_10272 = (inst_10271__$1 == null);var state_10290__$1 = (function (){var statearr_10293 = state_10290;(statearr_10293[7] = inst_10271__$1);
return statearr_10293;
})();if(cljs.core.truth_(inst_10272))
{var statearr_10294_10314 = state_10290__$1;(statearr_10294_10314[1] = 5);
} else
{var statearr_10295_10315 = state_10290__$1;(statearr_10295_10315[1] = 6);
}
return cljs.core.constant$keyword$25;
} else
{if((state_val_10291 === 5))
{var inst_10274 = cljs.core.async.close_BANG_(tc);var inst_10275 = cljs.core.async.close_BANG_(fc);var state_10290__$1 = (function (){var statearr_10296 = state_10290;(statearr_10296[8] = inst_10274);
return statearr_10296;
})();var statearr_10297_10316 = state_10290__$1;(statearr_10297_10316[2] = inst_10275);
(statearr_10297_10316[1] = 7);
return cljs.core.constant$keyword$25;
} else
{if((state_val_10291 === 6))
{var inst_10271 = (state_10290[7]);var inst_10277 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_10271) : p.call(null,inst_10271));var state_10290__$1 = state_10290;if(cljs.core.truth_(inst_10277))
{var statearr_10298_10317 = state_10290__$1;(statearr_10298_10317[1] = 9);
} else
{var statearr_10299_10318 = state_10290__$1;(statearr_10299_10318[1] = 10);
}
return cljs.core.constant$keyword$25;
} else
{if((state_val_10291 === 7))
{var inst_10286 = (state_10290[2]);var state_10290__$1 = state_10290;var statearr_10300_10319 = state_10290__$1;(statearr_10300_10319[2] = inst_10286);
(statearr_10300_10319[1] = 3);
return cljs.core.constant$keyword$25;
} else
{if((state_val_10291 === 8))
{var inst_10283 = (state_10290[2]);var state_10290__$1 = (function (){var statearr_10301 = state_10290;(statearr_10301[9] = inst_10283);
return statearr_10301;
})();var statearr_10302_10320 = state_10290__$1;(statearr_10302_10320[2] = null);
(statearr_10302_10320[1] = 2);
return cljs.core.constant$keyword$25;
} else
{if((state_val_10291 === 9))
{var state_10290__$1 = state_10290;var statearr_10303_10321 = state_10290__$1;(statearr_10303_10321[2] = tc);
(statearr_10303_10321[1] = 11);
return cljs.core.constant$keyword$25;
} else
{if((state_val_10291 === 10))
{var state_10290__$1 = state_10290;var statearr_10304_10322 = state_10290__$1;(statearr_10304_10322[2] = fc);
(statearr_10304_10322[1] = 11);
return cljs.core.constant$keyword$25;
} else
{if((state_val_10291 === 11))
{var inst_10271 = (state_10290[7]);var inst_10281 = (state_10290[2]);var state_10290__$1 = state_10290;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_10290__$1,8,inst_10281,inst_10271);
} else
{return null;
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
});return ((function (switch__5509__auto__){
return (function() {
var state_machine__5510__auto__ = null;
var state_machine__5510__auto____0 = (function (){var statearr_10308 = [null,null,null,null,null,null,null,null,null,null];(statearr_10308[0] = state_machine__5510__auto__);
(statearr_10308[1] = 1);
return statearr_10308;
});
var state_machine__5510__auto____1 = (function (state_10290){while(true){
var ret_value__5511__auto__ = (function (){try{while(true){
var result__5512__auto__ = switch__5509__auto__(state_10290);if(cljs.core.keyword_identical_QMARK_(result__5512__auto__,cljs.core.constant$keyword$25))
{{
continue;
}
} else
{return result__5512__auto__;
}
break;
}
}catch (e10309){if((e10309 instanceof Object))
{var ex__5513__auto__ = e10309;var statearr_10310_10323 = state_10290;(statearr_10310_10323[5] = ex__5513__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_10290);
return cljs.core.constant$keyword$25;
} else
{if(cljs.core.constant$keyword$6)
{throw e10309;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5511__auto__,cljs.core.constant$keyword$25))
{{
var G__10324 = state_10290;
state_10290 = G__10324;
continue;
}
} else
{return ret_value__5511__auto__;
}
break;
}
});
state_machine__5510__auto__ = function(state_10290){
switch(arguments.length){
case 0:
return state_machine__5510__auto____0.call(this);
case 1:
return state_machine__5510__auto____1.call(this,state_10290);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5510__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5510__auto____0;
state_machine__5510__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5510__auto____1;
return state_machine__5510__auto__;
})()
;})(switch__5509__auto__))
})();var state__5526__auto__ = (function (){var statearr_10311 = (f__5525__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5525__auto__.cljs$core$IFn$_invoke$arity$0() : f__5525__auto__.call(null));(statearr_10311[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5524__auto___10312);
return statearr_10311;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5526__auto__);
}));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});
split = function(p,ch,t_buf_or_n,f_buf_or_n){
switch(arguments.length){
case 2:
return split__2.call(this,p,ch);
case 4:
return split__4.call(this,p,ch,t_buf_or_n,f_buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
split.cljs$core$IFn$_invoke$arity$2 = split__2;
split.cljs$core$IFn$_invoke$arity$4 = split__4;
return split;
})()
;
/**
* f should be a function of 2 arguments. Returns a channel containing
* the single result of applying f to init and the first item from the
* channel, then applying f to that result and the 2nd item, etc. If
* the channel closes without yielding items, returns init and f is not
* called. ch must close before reduce produces a result.
*/
cljs.core.async.reduce = (function reduce(f,init,ch){var c__5524__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5525__auto__ = (function (){var switch__5509__auto__ = (function (state_10371){var state_val_10372 = (state_10371[1]);if((state_val_10372 === 7))
{var inst_10367 = (state_10371[2]);var state_10371__$1 = state_10371;var statearr_10373_10389 = state_10371__$1;(statearr_10373_10389[2] = inst_10367);
(statearr_10373_10389[1] = 3);
return cljs.core.constant$keyword$25;
} else
{if((state_val_10372 === 6))
{var inst_10360 = (state_10371[7]);var inst_10357 = (state_10371[8]);var inst_10364 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_10357,inst_10360) : f.call(null,inst_10357,inst_10360));var inst_10357__$1 = inst_10364;var state_10371__$1 = (function (){var statearr_10374 = state_10371;(statearr_10374[8] = inst_10357__$1);
return statearr_10374;
})();var statearr_10375_10390 = state_10371__$1;(statearr_10375_10390[2] = null);
(statearr_10375_10390[1] = 2);
return cljs.core.constant$keyword$25;
} else
{if((state_val_10372 === 5))
{var inst_10357 = (state_10371[8]);var state_10371__$1 = state_10371;var statearr_10376_10391 = state_10371__$1;(statearr_10376_10391[2] = inst_10357);
(statearr_10376_10391[1] = 7);
return cljs.core.constant$keyword$25;
} else
{if((state_val_10372 === 4))
{var inst_10360 = (state_10371[7]);var inst_10360__$1 = (state_10371[2]);var inst_10361 = (inst_10360__$1 == null);var state_10371__$1 = (function (){var statearr_10377 = state_10371;(statearr_10377[7] = inst_10360__$1);
return statearr_10377;
})();if(cljs.core.truth_(inst_10361))
{var statearr_10378_10392 = state_10371__$1;(statearr_10378_10392[1] = 5);
} else
{var statearr_10379_10393 = state_10371__$1;(statearr_10379_10393[1] = 6);
}
return cljs.core.constant$keyword$25;
} else
{if((state_val_10372 === 3))
{var inst_10369 = (state_10371[2]);var state_10371__$1 = state_10371;return cljs.core.async.impl.ioc_helpers.return_chan(state_10371__$1,inst_10369);
} else
{if((state_val_10372 === 2))
{var state_10371__$1 = state_10371;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_10371__$1,4,ch);
} else
{if((state_val_10372 === 1))
{var inst_10357 = init;var state_10371__$1 = (function (){var statearr_10380 = state_10371;(statearr_10380[8] = inst_10357);
return statearr_10380;
})();var statearr_10381_10394 = state_10371__$1;(statearr_10381_10394[2] = null);
(statearr_10381_10394[1] = 2);
return cljs.core.constant$keyword$25;
} else
{return null;
}
}
}
}
}
}
}
});return ((function (switch__5509__auto__){
return (function() {
var state_machine__5510__auto__ = null;
var state_machine__5510__auto____0 = (function (){var statearr_10385 = [null,null,null,null,null,null,null,null,null];(statearr_10385[0] = state_machine__5510__auto__);
(statearr_10385[1] = 1);
return statearr_10385;
});
var state_machine__5510__auto____1 = (function (state_10371){while(true){
var ret_value__5511__auto__ = (function (){try{while(true){
var result__5512__auto__ = switch__5509__auto__(state_10371);if(cljs.core.keyword_identical_QMARK_(result__5512__auto__,cljs.core.constant$keyword$25))
{{
continue;
}
} else
{return result__5512__auto__;
}
break;
}
}catch (e10386){if((e10386 instanceof Object))
{var ex__5513__auto__ = e10386;var statearr_10387_10395 = state_10371;(statearr_10387_10395[5] = ex__5513__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_10371);
return cljs.core.constant$keyword$25;
} else
{if(cljs.core.constant$keyword$6)
{throw e10386;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5511__auto__,cljs.core.constant$keyword$25))
{{
var G__10396 = state_10371;
state_10371 = G__10396;
continue;
}
} else
{return ret_value__5511__auto__;
}
break;
}
});
state_machine__5510__auto__ = function(state_10371){
switch(arguments.length){
case 0:
return state_machine__5510__auto____0.call(this);
case 1:
return state_machine__5510__auto____1.call(this,state_10371);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5510__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5510__auto____0;
state_machine__5510__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5510__auto____1;
return state_machine__5510__auto__;
})()
;})(switch__5509__auto__))
})();var state__5526__auto__ = (function (){var statearr_10388 = (f__5525__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5525__auto__.cljs$core$IFn$_invoke$arity$0() : f__5525__auto__.call(null));(statearr_10388[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5524__auto__);
return statearr_10388;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5526__auto__);
}));
return c__5524__auto__;
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
var onto_chan = null;
var onto_chan__2 = (function (ch,coll){return onto_chan.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
});
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__5524__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5525__auto__ = (function (){var switch__5509__auto__ = (function (state_10458){var state_val_10459 = (state_10458[1]);if((state_val_10459 === 1))
{var inst_10438 = cljs.core.seq(coll);var inst_10439 = inst_10438;var state_10458__$1 = (function (){var statearr_10460 = state_10458;(statearr_10460[7] = inst_10439);
return statearr_10460;
})();var statearr_10461_10479 = state_10458__$1;(statearr_10461_10479[2] = null);
(statearr_10461_10479[1] = 2);
return cljs.core.constant$keyword$25;
} else
{if((state_val_10459 === 2))
{var inst_10439 = (state_10458[7]);var state_10458__$1 = state_10458;if(cljs.core.truth_(inst_10439))
{var statearr_10462_10480 = state_10458__$1;(statearr_10462_10480[1] = 4);
} else
{var statearr_10463_10481 = state_10458__$1;(statearr_10463_10481[1] = 5);
}
return cljs.core.constant$keyword$25;
} else
{if((state_val_10459 === 3))
{var inst_10456 = (state_10458[2]);var state_10458__$1 = state_10458;return cljs.core.async.impl.ioc_helpers.return_chan(state_10458__$1,inst_10456);
} else
{if((state_val_10459 === 4))
{var inst_10439 = (state_10458[7]);var inst_10442 = cljs.core.first(inst_10439);var state_10458__$1 = state_10458;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_10458__$1,7,ch,inst_10442);
} else
{if((state_val_10459 === 5))
{var state_10458__$1 = state_10458;if(cljs.core.truth_(close_QMARK_))
{var statearr_10464_10482 = state_10458__$1;(statearr_10464_10482[1] = 8);
} else
{var statearr_10465_10483 = state_10458__$1;(statearr_10465_10483[1] = 9);
}
return cljs.core.constant$keyword$25;
} else
{if((state_val_10459 === 6))
{var inst_10454 = (state_10458[2]);var state_10458__$1 = state_10458;var statearr_10466_10484 = state_10458__$1;(statearr_10466_10484[2] = inst_10454);
(statearr_10466_10484[1] = 3);
return cljs.core.constant$keyword$25;
} else
{if((state_val_10459 === 7))
{var inst_10439 = (state_10458[7]);var inst_10444 = (state_10458[2]);var inst_10445 = cljs.core.next(inst_10439);var inst_10439__$1 = inst_10445;var state_10458__$1 = (function (){var statearr_10467 = state_10458;(statearr_10467[8] = inst_10444);
(statearr_10467[7] = inst_10439__$1);
return statearr_10467;
})();var statearr_10468_10485 = state_10458__$1;(statearr_10468_10485[2] = null);
(statearr_10468_10485[1] = 2);
return cljs.core.constant$keyword$25;
} else
{if((state_val_10459 === 8))
{var inst_10449 = cljs.core.async.close_BANG_(ch);var state_10458__$1 = state_10458;var statearr_10469_10486 = state_10458__$1;(statearr_10469_10486[2] = inst_10449);
(statearr_10469_10486[1] = 10);
return cljs.core.constant$keyword$25;
} else
{if((state_val_10459 === 9))
{var state_10458__$1 = state_10458;var statearr_10470_10487 = state_10458__$1;(statearr_10470_10487[2] = null);
(statearr_10470_10487[1] = 10);
return cljs.core.constant$keyword$25;
} else
{if((state_val_10459 === 10))
{var inst_10452 = (state_10458[2]);var state_10458__$1 = state_10458;var statearr_10471_10488 = state_10458__$1;(statearr_10471_10488[2] = inst_10452);
(statearr_10471_10488[1] = 6);
return cljs.core.constant$keyword$25;
} else
{return null;
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
});return ((function (switch__5509__auto__){
return (function() {
var state_machine__5510__auto__ = null;
var state_machine__5510__auto____0 = (function (){var statearr_10475 = [null,null,null,null,null,null,null,null,null];(statearr_10475[0] = state_machine__5510__auto__);
(statearr_10475[1] = 1);
return statearr_10475;
});
var state_machine__5510__auto____1 = (function (state_10458){while(true){
var ret_value__5511__auto__ = (function (){try{while(true){
var result__5512__auto__ = switch__5509__auto__(state_10458);if(cljs.core.keyword_identical_QMARK_(result__5512__auto__,cljs.core.constant$keyword$25))
{{
continue;
}
} else
{return result__5512__auto__;
}
break;
}
}catch (e10476){if((e10476 instanceof Object))
{var ex__5513__auto__ = e10476;var statearr_10477_10489 = state_10458;(statearr_10477_10489[5] = ex__5513__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_10458);
return cljs.core.constant$keyword$25;
} else
{if(cljs.core.constant$keyword$6)
{throw e10476;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5511__auto__,cljs.core.constant$keyword$25))
{{
var G__10490 = state_10458;
state_10458 = G__10490;
continue;
}
} else
{return ret_value__5511__auto__;
}
break;
}
});
state_machine__5510__auto__ = function(state_10458){
switch(arguments.length){
case 0:
return state_machine__5510__auto____0.call(this);
case 1:
return state_machine__5510__auto____1.call(this,state_10458);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5510__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5510__auto____0;
state_machine__5510__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5510__auto____1;
return state_machine__5510__auto__;
})()
;})(switch__5509__auto__))
})();var state__5526__auto__ = (function (){var statearr_10478 = (f__5525__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5525__auto__.cljs$core$IFn$_invoke$arity$0() : f__5525__auto__.call(null));(statearr_10478[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5524__auto__);
return statearr_10478;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5526__auto__);
}));
return c__5524__auto__;
});
onto_chan = function(ch,coll,close_QMARK_){
switch(arguments.length){
case 2:
return onto_chan__2.call(this,ch,coll);
case 3:
return onto_chan__3.call(this,ch,coll,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
onto_chan.cljs$core$IFn$_invoke$arity$2 = onto_chan__2;
onto_chan.cljs$core$IFn$_invoke$arity$3 = onto_chan__3;
return onto_chan;
})()
;
/**
* Creates and returns a channel which contains the contents of coll,
* closing when exhausted.
*/
cljs.core.async.to_chan = (function to_chan(coll){var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count(100,coll));cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2(ch,coll);
return ch;
});
cljs.core.async.Mux = (function (){var obj10492 = {};return obj10492;
})();
cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){if((function (){var and__3391__auto__ = _;if(and__3391__auto__)
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else
{return and__3391__auto__;
}
})())
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else
{var x__4030__auto__ = (((_ == null))?null:_);return (function (){var or__3403__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4030__auto__)]);if(or__3403__auto__)
{return or__3403__auto__;
} else
{var or__3403__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);if(or__3403__auto____$1)
{return or__3403__auto____$1;
} else
{throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
})().call(null,_);
}
});
cljs.core.async.Mult = (function (){var obj10494 = {};return obj10494;
})();
cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){if((function (){var and__3391__auto__ = m;if(and__3391__auto__)
{return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else
{return and__3391__auto__;
}
})())
{return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else
{var x__4030__auto__ = (((m == null))?null:m);return (function (){var or__3403__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4030__auto__)]);if(or__3403__auto__)
{return or__3403__auto__;
} else
{var or__3403__auto____$1 = (cljs.core.async.tap_STAR_["_"]);if(or__3403__auto____$1)
{return or__3403__auto____$1;
} else
{throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});
cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){if((function (){var and__3391__auto__ = m;if(and__3391__auto__)
{return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else
{return and__3391__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else
{var x__4030__auto__ = (((m == null))?null:m);return (function (){var or__3403__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4030__auto__)]);if(or__3403__auto__)
{return or__3403__auto__;
} else
{var or__3403__auto____$1 = (cljs.core.async.untap_STAR_["_"]);if(or__3403__auto____$1)
{return or__3403__auto____$1;
} else
{throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){if((function (){var and__3391__auto__ = m;if(and__3391__auto__)
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else
{return and__3391__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else
{var x__4030__auto__ = (((m == null))?null:m);return (function (){var or__3403__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4030__auto__)]);if(or__3403__auto__)
{return or__3403__auto__;
} else
{var or__3403__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);if(or__3403__auto____$1)
{return or__3403__auto____$1;
} else
{throw cljs.core.missing_protocol("Mult.untap-all*",m);
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
* If a tap put throws an exception, it will be removed from the mult.
*/
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t10718 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10718 = (function (cs,ch,mult,meta10719){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta10719 = meta10719;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10718.cljs$lang$type = true;
cljs.core.async.t10718.cljs$lang$ctorStr = "cljs.core.async/t10718";
cljs.core.async.t10718.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write(writer__3971__auto__,"cljs.core.async/t10718");
});})(cs))
;
cljs.core.async.t10718.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t10718.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t10718.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t10718.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t10718.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t10718.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t10718.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_10720){var self__ = this;
var _10720__$1 = this;return self__.meta10719;
});})(cs))
;
cljs.core.async.t10718.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_10720,meta10719__$1){var self__ = this;
var _10720__$1 = this;return (new cljs.core.async.t10718(self__.cs,self__.ch,self__.mult,meta10719__$1));
});})(cs))
;
cljs.core.async.__GT_t10718 = ((function (cs){
return (function __GT_t10718(cs__$1,ch__$1,mult__$1,meta10719){return (new cljs.core.async.t10718(cs__$1,ch__$1,mult__$1,meta10719));
});})(cs))
;
}
return (new cljs.core.async.t10718(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__5524__auto___10941 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5525__auto__ = (function (){var switch__5509__auto__ = (function (state_10855){var state_val_10856 = (state_10855[1]);if((state_val_10856 === 32))
{var inst_10799 = (state_10855[7]);var inst_10723 = (state_10855[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_10855,31,Object,null,30);var inst_10806 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_10799,inst_10723,done);var state_10855__$1 = state_10855;var statearr_10857_10942 = state_10855__$1;(statearr_10857_10942[2] = inst_10806);
cljs.core.async.impl.ioc_helpers.process_exception(state_10855__$1);
return cljs.core.constant$keyword$25;
} else
{if((state_val_10856 === 1))
{var state_10855__$1 = state_10855;var statearr_10858_10943 = state_10855__$1;(statearr_10858_10943[2] = null);
(statearr_10858_10943[1] = 2);
return cljs.core.constant$keyword$25;
} else
{if((state_val_10856 === 33))
{var inst_10812 = (state_10855[9]);var inst_10814 = cljs.core.chunked_seq_QMARK_(inst_10812);var state_10855__$1 = state_10855;if(inst_10814)
{var statearr_10859_10944 = state_10855__$1;(statearr_10859_10944[1] = 36);
} else
{var statearr_10860_10945 = state_10855__$1;(statearr_10860_10945[1] = 37);
}
return cljs.core.constant$keyword$25;
} else
{if((state_val_10856 === 2))
{var state_10855__$1 = state_10855;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_10855__$1,4,ch);
} else
{if((state_val_10856 === 34))
{var state_10855__$1 = state_10855;var statearr_10861_10946 = state_10855__$1;(statearr_10861_10946[2] = null);
(statearr_10861_10946[1] = 35);
return cljs.core.constant$keyword$25;
} else
{if((state_val_10856 === 3))
{var inst_10853 = (state_10855[2]);var state_10855__$1 = state_10855;return cljs.core.async.impl.ioc_helpers.return_chan(state_10855__$1,inst_10853);
} else
{if((state_val_10856 === 35))
{var inst_10837 = (state_10855[2]);var state_10855__$1 = state_10855;var statearr_10862_10947 = state_10855__$1;(statearr_10862_10947[2] = inst_10837);
(statearr_10862_10947[1] = 29);
return cljs.core.constant$keyword$25;
} else
{if((state_val_10856 === 4))
{var inst_10723 = (state_10855[8]);var inst_10723__$1 = (state_10855[2]);var inst_10724 = (inst_10723__$1 == null);var state_10855__$1 = (function (){var statearr_10863 = state_10855;(statearr_10863[8] = inst_10723__$1);
return statearr_10863;
})();if(cljs.core.truth_(inst_10724))
{var statearr_10864_10948 = state_10855__$1;(statearr_10864_10948[1] = 5);
} else
{var statearr_10865_10949 = state_10855__$1;(statearr_10865_10949[1] = 6);
}
return cljs.core.constant$keyword$25;
} else
{if((state_val_10856 === 36))
{var inst_10812 = (state_10855[9]);var inst_10816 = cljs.core.chunk_first(inst_10812);var inst_10817 = cljs.core.chunk_rest(inst_10812);var inst_10818 = cljs.core.count(inst_10816);var inst_10791 = inst_10817;var inst_10792 = inst_10816;var inst_10793 = inst_10818;var inst_10794 = 0;var state_10855__$1 = (function (){var statearr_10866 = state_10855;(statearr_10866[10] = inst_10794);
(statearr_10866[11] = inst_10793);
(statearr_10866[12] = inst_10792);
(statearr_10866[13] = inst_10791);
return statearr_10866;
})();var statearr_10867_10950 = state_10855__$1;(statearr_10867_10950[2] = null);
(statearr_10867_10950[1] = 25);
return cljs.core.constant$keyword$25;
} else
{if((state_val_10856 === 5))
{var inst_10730 = cljs.core.deref(cs);var inst_10731 = cljs.core.seq(inst_10730);var inst_10732 = inst_10731;var inst_10733 = null;var inst_10734 = 0;var inst_10735 = 0;var state_10855__$1 = (function (){var statearr_10868 = state_10855;(statearr_10868[14] = inst_10735);
(statearr_10868[15] = inst_10734);
(statearr_10868[16] = inst_10732);
(statearr_10868[17] = inst_10733);
return statearr_10868;
})();var statearr_10869_10951 = state_10855__$1;(statearr_10869_10951[2] = null);
(statearr_10869_10951[1] = 8);
return cljs.core.constant$keyword$25;
} else
{if((state_val_10856 === 37))
{var inst_10812 = (state_10855[9]);var inst_10821 = cljs.core.first(inst_10812);var state_10855__$1 = (function (){var statearr_10870 = state_10855;(statearr_10870[18] = inst_10821);
return statearr_10870;
})();var statearr_10871_10952 = state_10855__$1;(statearr_10871_10952[2] = null);
(statearr_10871_10952[1] = 41);
return cljs.core.constant$keyword$25;
} else
{if((state_val_10856 === 6))
{var inst_10783 = (state_10855[19]);var inst_10782 = cljs.core.deref(cs);var inst_10783__$1 = cljs.core.keys(inst_10782);var inst_10784 = cljs.core.count(inst_10783__$1);var inst_10785 = cljs.core.reset_BANG_(dctr,inst_10784);var inst_10790 = cljs.core.seq(inst_10783__$1);var inst_10791 = inst_10790;var inst_10792 = null;var inst_10793 = 0;var inst_10794 = 0;var state_10855__$1 = (function (){var statearr_10872 = state_10855;(statearr_10872[20] = inst_10785);
(statearr_10872[10] = inst_10794);
(statearr_10872[11] = inst_10793);
(statearr_10872[12] = inst_10792);
(statearr_10872[13] = inst_10791);
(statearr_10872[19] = inst_10783__$1);
return statearr_10872;
})();var statearr_10873_10953 = state_10855__$1;(statearr_10873_10953[2] = null);
(statearr_10873_10953[1] = 25);
return cljs.core.constant$keyword$25;
} else
{if((state_val_10856 === 38))
{var inst_10834 = (state_10855[2]);var state_10855__$1 = state_10855;var statearr_10874_10954 = state_10855__$1;(statearr_10874_10954[2] = inst_10834);
(statearr_10874_10954[1] = 35);
return cljs.core.constant$keyword$25;
} else
{if((state_val_10856 === 7))
{var inst_10851 = (state_10855[2]);var state_10855__$1 = state_10855;var statearr_10875_10955 = state_10855__$1;(statearr_10875_10955[2] = inst_10851);
(statearr_10875_10955[1] = 3);
return cljs.core.constant$keyword$25;
} else
{if((state_val_10856 === 39))
{var inst_10812 = (state_10855[9]);var inst_10830 = (state_10855[2]);var inst_10831 = cljs.core.next(inst_10812);var inst_10791 = inst_10831;var inst_10792 = null;var inst_10793 = 0;var inst_10794 = 0;var state_10855__$1 = (function (){var statearr_10876 = state_10855;(statearr_10876[21] = inst_10830);
(statearr_10876[10] = inst_10794);
(statearr_10876[11] = inst_10793);
(statearr_10876[12] = inst_10792);
(statearr_10876[13] = inst_10791);
return statearr_10876;
})();var statearr_10877_10956 = state_10855__$1;(statearr_10877_10956[2] = null);
(statearr_10877_10956[1] = 25);
return cljs.core.constant$keyword$25;
} else
{if((state_val_10856 === 8))
{var inst_10735 = (state_10855[14]);var inst_10734 = (state_10855[15]);var inst_10737 = (inst_10735 < inst_10734);var inst_10738 = inst_10737;var state_10855__$1 = state_10855;if(cljs.core.truth_(inst_10738))
{var statearr_10878_10957 = state_10855__$1;(statearr_10878_10957[1] = 10);
} else
{var statearr_10879_10958 = state_10855__$1;(statearr_10879_10958[1] = 11);
}
return cljs.core.constant$keyword$25;
} else
{if((state_val_10856 === 40))
{var inst_10821 = (state_10855[18]);var inst_10822 = (state_10855[2]);var inst_10823 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);var inst_10824 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_10821);var state_10855__$1 = (function (){var statearr_10880 = state_10855;(statearr_10880[22] = inst_10823);
(statearr_10880[23] = inst_10822);
return statearr_10880;
})();var statearr_10881_10959 = state_10855__$1;(statearr_10881_10959[2] = inst_10824);
cljs.core.async.impl.ioc_helpers.process_exception(state_10855__$1);
return cljs.core.constant$keyword$25;
} else
{if((state_val_10856 === 9))
{var inst_10780 = (state_10855[2]);var state_10855__$1 = state_10855;var statearr_10882_10960 = state_10855__$1;(statearr_10882_10960[2] = inst_10780);
(statearr_10882_10960[1] = 7);
return cljs.core.constant$keyword$25;
} else
{if((state_val_10856 === 41))
{var inst_10821 = (state_10855[18]);var inst_10723 = (state_10855[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_10855,40,Object,null,39);var inst_10828 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_10821,inst_10723,done);var state_10855__$1 = state_10855;var statearr_10883_10961 = state_10855__$1;(statearr_10883_10961[2] = inst_10828);
cljs.core.async.impl.ioc_helpers.process_exception(state_10855__$1);
return cljs.core.constant$keyword$25;
} else
{if((state_val_10856 === 10))
{var inst_10735 = (state_10855[14]);var inst_10733 = (state_10855[17]);var inst_10741 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_10733,inst_10735);var inst_10742 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_10741,0,null);var inst_10743 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_10741,1,null);var state_10855__$1 = (function (){var statearr_10884 = state_10855;(statearr_10884[24] = inst_10742);
return statearr_10884;
})();if(cljs.core.truth_(inst_10743))
{var statearr_10885_10962 = state_10855__$1;(statearr_10885_10962[1] = 13);
} else
{var statearr_10886_10963 = state_10855__$1;(statearr_10886_10963[1] = 14);
}
return cljs.core.constant$keyword$25;
} else
{if((state_val_10856 === 42))
{var state_10855__$1 = state_10855;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_10855__$1,45,dchan);
} else
{if((state_val_10856 === 11))
{var inst_10752 = (state_10855[25]);var inst_10732 = (state_10855[16]);var inst_10752__$1 = cljs.core.seq(inst_10732);var state_10855__$1 = (function (){var statearr_10887 = state_10855;(statearr_10887[25] = inst_10752__$1);
return statearr_10887;
})();if(inst_10752__$1)
{var statearr_10888_10964 = state_10855__$1;(statearr_10888_10964[1] = 16);
} else
{var statearr_10889_10965 = state_10855__$1;(statearr_10889_10965[1] = 17);
}
return cljs.core.constant$keyword$25;
} else
{if((state_val_10856 === 43))
{var state_10855__$1 = state_10855;var statearr_10890_10966 = state_10855__$1;(statearr_10890_10966[2] = null);
(statearr_10890_10966[1] = 44);
return cljs.core.constant$keyword$25;
} else
{if((state_val_10856 === 12))
{var inst_10778 = (state_10855[2]);var state_10855__$1 = state_10855;var statearr_10891_10967 = state_10855__$1;(statearr_10891_10967[2] = inst_10778);
(statearr_10891_10967[1] = 9);
return cljs.core.constant$keyword$25;
} else
{if((state_val_10856 === 44))
{var inst_10848 = (state_10855[2]);var state_10855__$1 = (function (){var statearr_10892 = state_10855;(statearr_10892[26] = inst_10848);
return statearr_10892;
})();var statearr_10893_10968 = state_10855__$1;(statearr_10893_10968[2] = null);
(statearr_10893_10968[1] = 2);
return cljs.core.constant$keyword$25;
} else
{if((state_val_10856 === 13))
{var inst_10742 = (state_10855[24]);var inst_10745 = cljs.core.async.close_BANG_(inst_10742);var state_10855__$1 = state_10855;var statearr_10894_10969 = state_10855__$1;(statearr_10894_10969[2] = inst_10745);
(statearr_10894_10969[1] = 15);
return cljs.core.constant$keyword$25;
} else
{if((state_val_10856 === 45))
{var inst_10845 = (state_10855[2]);var state_10855__$1 = state_10855;var statearr_10898_10970 = state_10855__$1;(statearr_10898_10970[2] = inst_10845);
(statearr_10898_10970[1] = 44);
return cljs.core.constant$keyword$25;
} else
{if((state_val_10856 === 14))
{var state_10855__$1 = state_10855;var statearr_10899_10971 = state_10855__$1;(statearr_10899_10971[2] = null);
(statearr_10899_10971[1] = 15);
return cljs.core.constant$keyword$25;
} else
{if((state_val_10856 === 15))
{var inst_10735 = (state_10855[14]);var inst_10734 = (state_10855[15]);var inst_10732 = (state_10855[16]);var inst_10733 = (state_10855[17]);var inst_10748 = (state_10855[2]);var inst_10749 = (inst_10735 + 1);var tmp10895 = inst_10734;var tmp10896 = inst_10732;var tmp10897 = inst_10733;var inst_10732__$1 = tmp10896;var inst_10733__$1 = tmp10897;var inst_10734__$1 = tmp10895;var inst_10735__$1 = inst_10749;var state_10855__$1 = (function (){var statearr_10900 = state_10855;(statearr_10900[14] = inst_10735__$1);
(statearr_10900[15] = inst_10734__$1);
(statearr_10900[27] = inst_10748);
(statearr_10900[16] = inst_10732__$1);
(statearr_10900[17] = inst_10733__$1);
return statearr_10900;
})();var statearr_10901_10972 = state_10855__$1;(statearr_10901_10972[2] = null);
(statearr_10901_10972[1] = 8);
return cljs.core.constant$keyword$25;
} else
{if((state_val_10856 === 16))
{var inst_10752 = (state_10855[25]);var inst_10754 = cljs.core.chunked_seq_QMARK_(inst_10752);var state_10855__$1 = state_10855;if(inst_10754)
{var statearr_10902_10973 = state_10855__$1;(statearr_10902_10973[1] = 19);
} else
{var statearr_10903_10974 = state_10855__$1;(statearr_10903_10974[1] = 20);
}
return cljs.core.constant$keyword$25;
} else
{if((state_val_10856 === 17))
{var state_10855__$1 = state_10855;var statearr_10904_10975 = state_10855__$1;(statearr_10904_10975[2] = null);
(statearr_10904_10975[1] = 18);
return cljs.core.constant$keyword$25;
} else
{if((state_val_10856 === 18))
{var inst_10776 = (state_10855[2]);var state_10855__$1 = state_10855;var statearr_10905_10976 = state_10855__$1;(statearr_10905_10976[2] = inst_10776);
(statearr_10905_10976[1] = 12);
return cljs.core.constant$keyword$25;
} else
{if((state_val_10856 === 19))
{var inst_10752 = (state_10855[25]);var inst_10756 = cljs.core.chunk_first(inst_10752);var inst_10757 = cljs.core.chunk_rest(inst_10752);var inst_10758 = cljs.core.count(inst_10756);var inst_10732 = inst_10757;var inst_10733 = inst_10756;var inst_10734 = inst_10758;var inst_10735 = 0;var state_10855__$1 = (function (){var statearr_10906 = state_10855;(statearr_10906[14] = inst_10735);
(statearr_10906[15] = inst_10734);
(statearr_10906[16] = inst_10732);
(statearr_10906[17] = inst_10733);
return statearr_10906;
})();var statearr_10907_10977 = state_10855__$1;(statearr_10907_10977[2] = null);
(statearr_10907_10977[1] = 8);
return cljs.core.constant$keyword$25;
} else
{if((state_val_10856 === 20))
{var inst_10752 = (state_10855[25]);var inst_10762 = cljs.core.first(inst_10752);var inst_10763 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_10762,0,null);var inst_10764 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_10762,1,null);var state_10855__$1 = (function (){var statearr_10908 = state_10855;(statearr_10908[28] = inst_10763);
return statearr_10908;
})();if(cljs.core.truth_(inst_10764))
{var statearr_10909_10978 = state_10855__$1;(statearr_10909_10978[1] = 22);
} else
{var statearr_10910_10979 = state_10855__$1;(statearr_10910_10979[1] = 23);
}
return cljs.core.constant$keyword$25;
} else
{if((state_val_10856 === 21))
{var inst_10773 = (state_10855[2]);var state_10855__$1 = state_10855;var statearr_10911_10980 = state_10855__$1;(statearr_10911_10980[2] = inst_10773);
(statearr_10911_10980[1] = 18);
return cljs.core.constant$keyword$25;
} else
{if((state_val_10856 === 22))
{var inst_10763 = (state_10855[28]);var inst_10766 = cljs.core.async.close_BANG_(inst_10763);var state_10855__$1 = state_10855;var statearr_10912_10981 = state_10855__$1;(statearr_10912_10981[2] = inst_10766);
(statearr_10912_10981[1] = 24);
return cljs.core.constant$keyword$25;
} else
{if((state_val_10856 === 23))
{var state_10855__$1 = state_10855;var statearr_10913_10982 = state_10855__$1;(statearr_10913_10982[2] = null);
(statearr_10913_10982[1] = 24);
return cljs.core.constant$keyword$25;
} else
{if((state_val_10856 === 24))
{var inst_10752 = (state_10855[25]);var inst_10769 = (state_10855[2]);var inst_10770 = cljs.core.next(inst_10752);var inst_10732 = inst_10770;var inst_10733 = null;var inst_10734 = 0;var inst_10735 = 0;var state_10855__$1 = (function (){var statearr_10914 = state_10855;(statearr_10914[14] = inst_10735);
(statearr_10914[15] = inst_10734);
(statearr_10914[29] = inst_10769);
(statearr_10914[16] = inst_10732);
(statearr_10914[17] = inst_10733);
return statearr_10914;
})();var statearr_10915_10983 = state_10855__$1;(statearr_10915_10983[2] = null);
(statearr_10915_10983[1] = 8);
return cljs.core.constant$keyword$25;
} else
{if((state_val_10856 === 25))
{var inst_10794 = (state_10855[10]);var inst_10793 = (state_10855[11]);var inst_10796 = (inst_10794 < inst_10793);var inst_10797 = inst_10796;var state_10855__$1 = state_10855;if(cljs.core.truth_(inst_10797))
{var statearr_10916_10984 = state_10855__$1;(statearr_10916_10984[1] = 27);
} else
{var statearr_10917_10985 = state_10855__$1;(statearr_10917_10985[1] = 28);
}
return cljs.core.constant$keyword$25;
} else
{if((state_val_10856 === 26))
{var inst_10783 = (state_10855[19]);var inst_10841 = (state_10855[2]);var inst_10842 = cljs.core.seq(inst_10783);var state_10855__$1 = (function (){var statearr_10918 = state_10855;(statearr_10918[30] = inst_10841);
return statearr_10918;
})();if(inst_10842)
{var statearr_10919_10986 = state_10855__$1;(statearr_10919_10986[1] = 42);
} else
{var statearr_10920_10987 = state_10855__$1;(statearr_10920_10987[1] = 43);
}
return cljs.core.constant$keyword$25;
} else
{if((state_val_10856 === 27))
{var inst_10794 = (state_10855[10]);var inst_10792 = (state_10855[12]);var inst_10799 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_10792,inst_10794);var state_10855__$1 = (function (){var statearr_10921 = state_10855;(statearr_10921[7] = inst_10799);
return statearr_10921;
})();var statearr_10922_10988 = state_10855__$1;(statearr_10922_10988[2] = null);
(statearr_10922_10988[1] = 32);
return cljs.core.constant$keyword$25;
} else
{if((state_val_10856 === 28))
{var inst_10812 = (state_10855[9]);var inst_10791 = (state_10855[13]);var inst_10812__$1 = cljs.core.seq(inst_10791);var state_10855__$1 = (function (){var statearr_10926 = state_10855;(statearr_10926[9] = inst_10812__$1);
return statearr_10926;
})();if(inst_10812__$1)
{var statearr_10927_10989 = state_10855__$1;(statearr_10927_10989[1] = 33);
} else
{var statearr_10928_10990 = state_10855__$1;(statearr_10928_10990[1] = 34);
}
return cljs.core.constant$keyword$25;
} else
{if((state_val_10856 === 29))
{var inst_10839 = (state_10855[2]);var state_10855__$1 = state_10855;var statearr_10929_10991 = state_10855__$1;(statearr_10929_10991[2] = inst_10839);
(statearr_10929_10991[1] = 26);
return cljs.core.constant$keyword$25;
} else
{if((state_val_10856 === 30))
{var inst_10794 = (state_10855[10]);var inst_10793 = (state_10855[11]);var inst_10792 = (state_10855[12]);var inst_10791 = (state_10855[13]);var inst_10808 = (state_10855[2]);var inst_10809 = (inst_10794 + 1);var tmp10923 = inst_10793;var tmp10924 = inst_10792;var tmp10925 = inst_10791;var inst_10791__$1 = tmp10925;var inst_10792__$1 = tmp10924;var inst_10793__$1 = tmp10923;var inst_10794__$1 = inst_10809;var state_10855__$1 = (function (){var statearr_10930 = state_10855;(statearr_10930[31] = inst_10808);
(statearr_10930[10] = inst_10794__$1);
(statearr_10930[11] = inst_10793__$1);
(statearr_10930[12] = inst_10792__$1);
(statearr_10930[13] = inst_10791__$1);
return statearr_10930;
})();var statearr_10931_10992 = state_10855__$1;(statearr_10931_10992[2] = null);
(statearr_10931_10992[1] = 25);
return cljs.core.constant$keyword$25;
} else
{if((state_val_10856 === 31))
{var inst_10799 = (state_10855[7]);var inst_10800 = (state_10855[2]);var inst_10801 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);var inst_10802 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_10799);var state_10855__$1 = (function (){var statearr_10932 = state_10855;(statearr_10932[32] = inst_10801);
(statearr_10932[33] = inst_10800);
return statearr_10932;
})();var statearr_10933_10993 = state_10855__$1;(statearr_10933_10993[2] = inst_10802);
cljs.core.async.impl.ioc_helpers.process_exception(state_10855__$1);
return cljs.core.constant$keyword$25;
} else
{return null;
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
});return ((function (switch__5509__auto__){
return (function() {
var state_machine__5510__auto__ = null;
var state_machine__5510__auto____0 = (function (){var statearr_10937 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_10937[0] = state_machine__5510__auto__);
(statearr_10937[1] = 1);
return statearr_10937;
});
var state_machine__5510__auto____1 = (function (state_10855){while(true){
var ret_value__5511__auto__ = (function (){try{while(true){
var result__5512__auto__ = switch__5509__auto__(state_10855);if(cljs.core.keyword_identical_QMARK_(result__5512__auto__,cljs.core.constant$keyword$25))
{{
continue;
}
} else
{return result__5512__auto__;
}
break;
}
}catch (e10938){if((e10938 instanceof Object))
{var ex__5513__auto__ = e10938;var statearr_10939_10994 = state_10855;(statearr_10939_10994[5] = ex__5513__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_10855);
return cljs.core.constant$keyword$25;
} else
{if(cljs.core.constant$keyword$6)
{throw e10938;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5511__auto__,cljs.core.constant$keyword$25))
{{
var G__10995 = state_10855;
state_10855 = G__10995;
continue;
}
} else
{return ret_value__5511__auto__;
}
break;
}
});
state_machine__5510__auto__ = function(state_10855){
switch(arguments.length){
case 0:
return state_machine__5510__auto____0.call(this);
case 1:
return state_machine__5510__auto____1.call(this,state_10855);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5510__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5510__auto____0;
state_machine__5510__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5510__auto____1;
return state_machine__5510__auto__;
})()
;})(switch__5509__auto__))
})();var state__5526__auto__ = (function (){var statearr_10940 = (f__5525__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5525__auto__.cljs$core$IFn$_invoke$arity$0() : f__5525__auto__.call(null));(statearr_10940[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5524__auto___10941);
return statearr_10940;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5526__auto__);
}));
return m;
});
/**
* Copies the mult source onto the supplied channel.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.tap = (function() {
var tap = null;
var tap__2 = (function (mult,ch){return tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
});
var tap__3 = (function (mult,ch,close_QMARK_){cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);
return ch;
});
tap = function(mult,ch,close_QMARK_){
switch(arguments.length){
case 2:
return tap__2.call(this,mult,ch);
case 3:
return tap__3.call(this,mult,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tap.cljs$core$IFn$_invoke$arity$2 = tap__2;
tap.cljs$core$IFn$_invoke$arity$3 = tap__3;
return tap;
})()
;
/**
* Disconnects a target channel from a mult
*/
cljs.core.async.untap = (function untap(mult,ch){return cljs.core.async.untap_STAR_(mult,ch);
});
/**
* Disconnects all target channels from a mult
*/
cljs.core.async.untap_all = (function untap_all(mult){return cljs.core.async.untap_all_STAR_(mult);
});
cljs.core.async.Mix = (function (){var obj10997 = {};return obj10997;
})();
cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){if((function (){var and__3391__auto__ = m;if(and__3391__auto__)
{return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else
{return and__3391__auto__;
}
})())
{return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else
{var x__4030__auto__ = (((m == null))?null:m);return (function (){var or__3403__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4030__auto__)]);if(or__3403__auto__)
{return or__3403__auto__;
} else
{var or__3403__auto____$1 = (cljs.core.async.admix_STAR_["_"]);if(or__3403__auto____$1)
{return or__3403__auto____$1;
} else
{throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){if((function (){var and__3391__auto__ = m;if(and__3391__auto__)
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else
{return and__3391__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else
{var x__4030__auto__ = (((m == null))?null:m);return (function (){var or__3403__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4030__auto__)]);if(or__3403__auto__)
{return or__3403__auto__;
} else
{var or__3403__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);if(or__3403__auto____$1)
{return or__3403__auto____$1;
} else
{throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){if((function (){var and__3391__auto__ = m;if(and__3391__auto__)
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else
{return and__3391__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else
{var x__4030__auto__ = (((m == null))?null:m);return (function (){var or__3403__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4030__auto__)]);if(or__3403__auto__)
{return or__3403__auto__;
} else
{var or__3403__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);if(or__3403__auto____$1)
{return or__3403__auto____$1;
} else
{throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});
cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){if((function (){var and__3391__auto__ = m;if(and__3391__auto__)
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else
{return and__3391__auto__;
}
})())
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else
{var x__4030__auto__ = (((m == null))?null:m);return (function (){var or__3403__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4030__auto__)]);if(or__3403__auto__)
{return or__3403__auto__;
} else
{var or__3403__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);if(or__3403__auto____$1)
{return or__3403__auto____$1;
} else
{throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});
cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){if((function (){var and__3391__auto__ = m;if(and__3391__auto__)
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else
{return and__3391__auto__;
}
})())
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else
{var x__4030__auto__ = (((m == null))?null:m);return (function (){var or__3403__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4030__auto__)]);if(or__3403__auto__)
{return or__3403__auto__;
} else
{var or__3403__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);if(or__3403__auto____$1)
{return or__3403__auto____$1;
} else
{throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
})().call(null,m,mode);
}
});
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
cljs.core.async.mix = (function mix(out){var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$38,null,cljs.core.constant$keyword$39,null], null), null);var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,cljs.core.constant$keyword$40);var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$39);var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){return cljs.core.reduce_kv(((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v))))
{return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else
{return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){var chs = cljs.core.deref(cs);var mode = cljs.core.deref(solo_mode);var solos = pick(cljs.core.constant$keyword$40,chs);var pauses = pick(cljs.core.constant$keyword$38,chs);return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$41,solos,cljs.core.constant$keyword$42,pick(cljs.core.constant$keyword$39,chs),cljs.core.constant$keyword$43,cljs.core.conj.cljs$core$IFn$_invoke$arity$2((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,cljs.core.constant$keyword$38)) && (!(cljs.core.empty_QMARK_(solos))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove(pauses,cljs.core.keys(chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;var m = (function (){if(typeof cljs.core.async.t11107 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11107 = (function (pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,meta11108){
this.pick = pick;
this.out = out;
this.attrs = attrs;
this.cs = cs;
this.calc_state = calc_state;
this.solo_modes = solo_modes;
this.mix = mix;
this.changed = changed;
this.change = change;
this.solo_mode = solo_mode;
this.meta11108 = meta11108;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11107.cljs$lang$type = true;
cljs.core.async.t11107.cljs$lang$ctorStr = "cljs.core.async/t11107";
cljs.core.async.t11107.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write(writer__3971__auto__,"cljs.core.async/t11107");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t11107.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t11107.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t11107.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t11107.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t11107.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t11107.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode))))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))], 0)))].join('')));
}
cljs.core.reset_BANG_(self__.solo_mode,mode);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t11107.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t11107.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t11107.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_11109){var self__ = this;
var _11109__$1 = this;return self__.meta11108;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t11107.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_11109,meta11108__$1){var self__ = this;
var _11109__$1 = this;return (new cljs.core.async.t11107(self__.pick,self__.out,self__.attrs,self__.cs,self__.calc_state,self__.solo_modes,self__.mix,self__.changed,self__.change,self__.solo_mode,meta11108__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t11107 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t11107(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta11108){return (new cljs.core.async.t11107(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta11108));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t11107(pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,null));
})();var c__5524__auto___11216 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5525__auto__ = (function (){var switch__5509__auto__ = (function (state_11174){var state_val_11175 = (state_11174[1]);if((state_val_11175 === 1))
{var inst_11113 = (state_11174[7]);var inst_11113__$1 = calc_state();var inst_11114 = cljs.core.seq_QMARK_(inst_11113__$1);var state_11174__$1 = (function (){var statearr_11176 = state_11174;(statearr_11176[7] = inst_11113__$1);
return statearr_11176;
})();if(inst_11114)
{var statearr_11177_11217 = state_11174__$1;(statearr_11177_11217[1] = 2);
} else
{var statearr_11178_11218 = state_11174__$1;(statearr_11178_11218[1] = 3);
}
return cljs.core.constant$keyword$25;
} else
{if((state_val_11175 === 2))
{var inst_11113 = (state_11174[7]);var inst_11116 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_11113);var state_11174__$1 = state_11174;var statearr_11179_11219 = state_11174__$1;(statearr_11179_11219[2] = inst_11116);
(statearr_11179_11219[1] = 4);
return cljs.core.constant$keyword$25;
} else
{if((state_val_11175 === 3))
{var inst_11113 = (state_11174[7]);var state_11174__$1 = state_11174;var statearr_11180_11220 = state_11174__$1;(statearr_11180_11220[2] = inst_11113);
(statearr_11180_11220[1] = 4);
return cljs.core.constant$keyword$25;
} else
{if((state_val_11175 === 4))
{var inst_11113 = (state_11174[7]);var inst_11119 = (state_11174[2]);var inst_11120 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_11119,cljs.core.constant$keyword$43);var inst_11121 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_11119,cljs.core.constant$keyword$42);var inst_11122 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_11119,cljs.core.constant$keyword$41);var inst_11123 = inst_11113;var state_11174__$1 = (function (){var statearr_11181 = state_11174;(statearr_11181[8] = inst_11123);
(statearr_11181[9] = inst_11122);
(statearr_11181[10] = inst_11120);
(statearr_11181[11] = inst_11121);
return statearr_11181;
})();var statearr_11182_11221 = state_11174__$1;(statearr_11182_11221[2] = null);
(statearr_11182_11221[1] = 5);
return cljs.core.constant$keyword$25;
} else
{if((state_val_11175 === 5))
{var inst_11123 = (state_11174[8]);var inst_11126 = cljs.core.seq_QMARK_(inst_11123);var state_11174__$1 = state_11174;if(inst_11126)
{var statearr_11183_11222 = state_11174__$1;(statearr_11183_11222[1] = 7);
} else
{var statearr_11184_11223 = state_11174__$1;(statearr_11184_11223[1] = 8);
}
return cljs.core.constant$keyword$25;
} else
{if((state_val_11175 === 6))
{var inst_11172 = (state_11174[2]);var state_11174__$1 = state_11174;return cljs.core.async.impl.ioc_helpers.return_chan(state_11174__$1,inst_11172);
} else
{if((state_val_11175 === 7))
{var inst_11123 = (state_11174[8]);var inst_11128 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_11123);var state_11174__$1 = state_11174;var statearr_11185_11224 = state_11174__$1;(statearr_11185_11224[2] = inst_11128);
(statearr_11185_11224[1] = 9);
return cljs.core.constant$keyword$25;
} else
{if((state_val_11175 === 8))
{var inst_11123 = (state_11174[8]);var state_11174__$1 = state_11174;var statearr_11186_11225 = state_11174__$1;(statearr_11186_11225[2] = inst_11123);
(statearr_11186_11225[1] = 9);
return cljs.core.constant$keyword$25;
} else
{if((state_val_11175 === 9))
{var inst_11131 = (state_11174[12]);var inst_11131__$1 = (state_11174[2]);var inst_11132 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_11131__$1,cljs.core.constant$keyword$43);var inst_11133 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_11131__$1,cljs.core.constant$keyword$42);var inst_11134 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_11131__$1,cljs.core.constant$keyword$41);var state_11174__$1 = (function (){var statearr_11187 = state_11174;(statearr_11187[12] = inst_11131__$1);
(statearr_11187[13] = inst_11134);
(statearr_11187[14] = inst_11133);
return statearr_11187;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_(state_11174__$1,10,inst_11132);
} else
{if((state_val_11175 === 10))
{var inst_11138 = (state_11174[15]);var inst_11139 = (state_11174[16]);var inst_11137 = (state_11174[2]);var inst_11138__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_11137,0,null);var inst_11139__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_11137,1,null);var inst_11140 = (inst_11138__$1 == null);var inst_11141 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_11139__$1,change);var inst_11142 = (inst_11140) || (inst_11141);var state_11174__$1 = (function (){var statearr_11188 = state_11174;(statearr_11188[15] = inst_11138__$1);
(statearr_11188[16] = inst_11139__$1);
return statearr_11188;
})();if(cljs.core.truth_(inst_11142))
{var statearr_11189_11226 = state_11174__$1;(statearr_11189_11226[1] = 11);
} else
{var statearr_11190_11227 = state_11174__$1;(statearr_11190_11227[1] = 12);
}
return cljs.core.constant$keyword$25;
} else
{if((state_val_11175 === 11))
{var inst_11138 = (state_11174[15]);var inst_11144 = (inst_11138 == null);var state_11174__$1 = state_11174;if(cljs.core.truth_(inst_11144))
{var statearr_11191_11228 = state_11174__$1;(statearr_11191_11228[1] = 14);
} else
{var statearr_11192_11229 = state_11174__$1;(statearr_11192_11229[1] = 15);
}
return cljs.core.constant$keyword$25;
} else
{if((state_val_11175 === 12))
{var inst_11139 = (state_11174[16]);var inst_11134 = (state_11174[13]);var inst_11153 = (state_11174[17]);var inst_11153__$1 = (inst_11134.cljs$core$IFn$_invoke$arity$1 ? inst_11134.cljs$core$IFn$_invoke$arity$1(inst_11139) : inst_11134.call(null,inst_11139));var state_11174__$1 = (function (){var statearr_11193 = state_11174;(statearr_11193[17] = inst_11153__$1);
return statearr_11193;
})();if(cljs.core.truth_(inst_11153__$1))
{var statearr_11194_11230 = state_11174__$1;(statearr_11194_11230[1] = 17);
} else
{var statearr_11195_11231 = state_11174__$1;(statearr_11195_11231[1] = 18);
}
return cljs.core.constant$keyword$25;
} else
{if((state_val_11175 === 13))
{var inst_11170 = (state_11174[2]);var state_11174__$1 = state_11174;var statearr_11196_11232 = state_11174__$1;(statearr_11196_11232[2] = inst_11170);
(statearr_11196_11232[1] = 6);
return cljs.core.constant$keyword$25;
} else
{if((state_val_11175 === 14))
{var inst_11139 = (state_11174[16]);var inst_11146 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_11139);var state_11174__$1 = state_11174;var statearr_11197_11233 = state_11174__$1;(statearr_11197_11233[2] = inst_11146);
(statearr_11197_11233[1] = 16);
return cljs.core.constant$keyword$25;
} else
{if((state_val_11175 === 15))
{var state_11174__$1 = state_11174;var statearr_11198_11234 = state_11174__$1;(statearr_11198_11234[2] = null);
(statearr_11198_11234[1] = 16);
return cljs.core.constant$keyword$25;
} else
{if((state_val_11175 === 16))
{var inst_11149 = (state_11174[2]);var inst_11150 = calc_state();var inst_11123 = inst_11150;var state_11174__$1 = (function (){var statearr_11199 = state_11174;(statearr_11199[8] = inst_11123);
(statearr_11199[18] = inst_11149);
return statearr_11199;
})();var statearr_11200_11235 = state_11174__$1;(statearr_11200_11235[2] = null);
(statearr_11200_11235[1] = 5);
return cljs.core.constant$keyword$25;
} else
{if((state_val_11175 === 17))
{var inst_11153 = (state_11174[17]);var state_11174__$1 = state_11174;var statearr_11201_11236 = state_11174__$1;(statearr_11201_11236[2] = inst_11153);
(statearr_11201_11236[1] = 19);
return cljs.core.constant$keyword$25;
} else
{if((state_val_11175 === 18))
{var inst_11139 = (state_11174[16]);var inst_11134 = (state_11174[13]);var inst_11133 = (state_11174[14]);var inst_11156 = cljs.core.empty_QMARK_(inst_11134);var inst_11157 = (inst_11133.cljs$core$IFn$_invoke$arity$1 ? inst_11133.cljs$core$IFn$_invoke$arity$1(inst_11139) : inst_11133.call(null,inst_11139));var inst_11158 = cljs.core.not(inst_11157);var inst_11159 = (inst_11156) && (inst_11158);var state_11174__$1 = state_11174;var statearr_11202_11237 = state_11174__$1;(statearr_11202_11237[2] = inst_11159);
(statearr_11202_11237[1] = 19);
return cljs.core.constant$keyword$25;
} else
{if((state_val_11175 === 19))
{var inst_11161 = (state_11174[2]);var state_11174__$1 = state_11174;if(cljs.core.truth_(inst_11161))
{var statearr_11203_11238 = state_11174__$1;(statearr_11203_11238[1] = 20);
} else
{var statearr_11204_11239 = state_11174__$1;(statearr_11204_11239[1] = 21);
}
return cljs.core.constant$keyword$25;
} else
{if((state_val_11175 === 20))
{var inst_11138 = (state_11174[15]);var state_11174__$1 = state_11174;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_11174__$1,23,out,inst_11138);
} else
{if((state_val_11175 === 21))
{var state_11174__$1 = state_11174;var statearr_11205_11240 = state_11174__$1;(statearr_11205_11240[2] = null);
(statearr_11205_11240[1] = 22);
return cljs.core.constant$keyword$25;
} else
{if((state_val_11175 === 22))
{var inst_11131 = (state_11174[12]);var inst_11167 = (state_11174[2]);var inst_11123 = inst_11131;var state_11174__$1 = (function (){var statearr_11206 = state_11174;(statearr_11206[8] = inst_11123);
(statearr_11206[19] = inst_11167);
return statearr_11206;
})();var statearr_11207_11241 = state_11174__$1;(statearr_11207_11241[2] = null);
(statearr_11207_11241[1] = 5);
return cljs.core.constant$keyword$25;
} else
{if((state_val_11175 === 23))
{var inst_11164 = (state_11174[2]);var state_11174__$1 = state_11174;var statearr_11208_11242 = state_11174__$1;(statearr_11208_11242[2] = inst_11164);
(statearr_11208_11242[1] = 22);
return cljs.core.constant$keyword$25;
} else
{return null;
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
});return ((function (switch__5509__auto__){
return (function() {
var state_machine__5510__auto__ = null;
var state_machine__5510__auto____0 = (function (){var statearr_11212 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_11212[0] = state_machine__5510__auto__);
(statearr_11212[1] = 1);
return statearr_11212;
});
var state_machine__5510__auto____1 = (function (state_11174){while(true){
var ret_value__5511__auto__ = (function (){try{while(true){
var result__5512__auto__ = switch__5509__auto__(state_11174);if(cljs.core.keyword_identical_QMARK_(result__5512__auto__,cljs.core.constant$keyword$25))
{{
continue;
}
} else
{return result__5512__auto__;
}
break;
}
}catch (e11213){if((e11213 instanceof Object))
{var ex__5513__auto__ = e11213;var statearr_11214_11243 = state_11174;(statearr_11214_11243[5] = ex__5513__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_11174);
return cljs.core.constant$keyword$25;
} else
{if(cljs.core.constant$keyword$6)
{throw e11213;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5511__auto__,cljs.core.constant$keyword$25))
{{
var G__11244 = state_11174;
state_11174 = G__11244;
continue;
}
} else
{return ret_value__5511__auto__;
}
break;
}
});
state_machine__5510__auto__ = function(state_11174){
switch(arguments.length){
case 0:
return state_machine__5510__auto____0.call(this);
case 1:
return state_machine__5510__auto____1.call(this,state_11174);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5510__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5510__auto____0;
state_machine__5510__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5510__auto____1;
return state_machine__5510__auto__;
})()
;})(switch__5509__auto__))
})();var state__5526__auto__ = (function (){var statearr_11215 = (f__5525__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5525__auto__.cljs$core$IFn$_invoke$arity$0() : f__5525__auto__.call(null));(statearr_11215[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5524__auto___11216);
return statearr_11215;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5526__auto__);
}));
return m;
});
/**
* Adds ch as an input to the mix
*/
cljs.core.async.admix = (function admix(mix,ch){return cljs.core.async.admix_STAR_(mix,ch);
});
/**
* Removes ch as an input to the mix
*/
cljs.core.async.unmix = (function unmix(mix,ch){return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
* removes all inputs from the mix
*/
cljs.core.async.unmix_all = (function unmix_all(mix){return cljs.core.async.unmix_all_STAR_(mix);
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
cljs.core.async.toggle = (function toggle(mix,state_map){return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
* Sets the solo mode of the mix. mode must be one of :mute or :pause
*/
cljs.core.async.solo_mode = (function solo_mode(mix,mode){return cljs.core.async.solo_mode_STAR_(mix,mode);
});
cljs.core.async.Pub = (function (){var obj11246 = {};return obj11246;
})();
cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){if((function (){var and__3391__auto__ = p;if(and__3391__auto__)
{return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else
{return and__3391__auto__;
}
})())
{return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else
{var x__4030__auto__ = (((p == null))?null:p);return (function (){var or__3403__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4030__auto__)]);if(or__3403__auto__)
{return or__3403__auto__;
} else
{var or__3403__auto____$1 = (cljs.core.async.sub_STAR_["_"]);if(or__3403__auto____$1)
{return or__3403__auto____$1;
} else
{throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});
cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){if((function (){var and__3391__auto__ = p;if(and__3391__auto__)
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else
{return and__3391__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else
{var x__4030__auto__ = (((p == null))?null:p);return (function (){var or__3403__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4030__auto__)]);if(or__3403__auto__)
{return or__3403__auto__;
} else
{var or__3403__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);if(or__3403__auto____$1)
{return or__3403__auto____$1;
} else
{throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});
cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){if((function (){var and__3391__auto__ = p;if(and__3391__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else
{return and__3391__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else
{var x__4030__auto__ = (((p == null))?null:p);return (function (){var or__3403__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4030__auto__)]);if(or__3403__auto__)
{return or__3403__auto__;
} else
{var or__3403__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3403__auto____$1)
{return or__3403__auto____$1;
} else
{throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){if((function (){var and__3391__auto__ = p;if(and__3391__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else
{return and__3391__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else
{var x__4030__auto__ = (((p == null))?null:p);return (function (){var or__3403__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4030__auto__)]);if(or__3403__auto__)
{return or__3403__auto__;
} else
{var or__3403__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3403__auto____$1)
{return or__3403__auto____$1;
} else
{throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
})().call(null,p,v);
}
});
unsub_all_STAR_ = function(p,v){
switch(arguments.length){
case 1:
return unsub_all_STAR___1.call(this,p);
case 2:
return unsub_all_STAR___2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = unsub_all_STAR___1;
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = unsub_all_STAR___2;
return unsub_all_STAR_;
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
var pub = null;
var pub__2 = (function (ch,topic_fn){return pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
});
var pub__3 = (function (ch,topic_fn,buf_fn){var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);var ensure_mult = ((function (mults){
return (function (topic){var or__3403__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);if(cljs.core.truth_(or__3403__auto__))
{return or__3403__auto__;
} else
{return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,((function (or__3403__auto__,mults){
return (function (p1__11247_SHARP_){if(cljs.core.truth_((p1__11247_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__11247_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__11247_SHARP_.call(null,topic))))
{return p1__11247_SHARP_;
} else
{return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__11247_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
});})(or__3403__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t11372 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11372 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta11373){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta11373 = meta11373;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11372.cljs$lang$type = true;
cljs.core.async.t11372.cljs$lang$ctorStr = "cljs.core.async/t11372";
cljs.core.async.t11372.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write(writer__3971__auto__,"cljs.core.async/t11372");
});})(mults,ensure_mult))
;
cljs.core.async.t11372.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t11372.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t11372.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4092__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);if(cljs.core.truth_(temp__4092__auto__))
{var m = temp__4092__auto__;return cljs.core.async.untap(m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t11372.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t11372.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t11372.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t11372.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t11372.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_11374){var self__ = this;
var _11374__$1 = this;return self__.meta11373;
});})(mults,ensure_mult))
;
cljs.core.async.t11372.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_11374,meta11373__$1){var self__ = this;
var _11374__$1 = this;return (new cljs.core.async.t11372(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta11373__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t11372 = ((function (mults,ensure_mult){
return (function __GT_t11372(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta11373){return (new cljs.core.async.t11372(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta11373));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t11372(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__5524__auto___11496 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5525__auto__ = (function (){var switch__5509__auto__ = (function (state_11448){var state_val_11449 = (state_11448[1]);if((state_val_11449 === 1))
{var state_11448__$1 = state_11448;var statearr_11450_11497 = state_11448__$1;(statearr_11450_11497[2] = null);
(statearr_11450_11497[1] = 2);
return cljs.core.constant$keyword$25;
} else
{if((state_val_11449 === 2))
{var state_11448__$1 = state_11448;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11448__$1,4,ch);
} else
{if((state_val_11449 === 3))
{var inst_11446 = (state_11448[2]);var state_11448__$1 = state_11448;return cljs.core.async.impl.ioc_helpers.return_chan(state_11448__$1,inst_11446);
} else
{if((state_val_11449 === 4))
{var inst_11377 = (state_11448[7]);var inst_11377__$1 = (state_11448[2]);var inst_11378 = (inst_11377__$1 == null);var state_11448__$1 = (function (){var statearr_11451 = state_11448;(statearr_11451[7] = inst_11377__$1);
return statearr_11451;
})();if(cljs.core.truth_(inst_11378))
{var statearr_11452_11498 = state_11448__$1;(statearr_11452_11498[1] = 5);
} else
{var statearr_11453_11499 = state_11448__$1;(statearr_11453_11499[1] = 6);
}
return cljs.core.constant$keyword$25;
} else
{if((state_val_11449 === 5))
{var inst_11384 = cljs.core.deref(mults);var inst_11385 = cljs.core.vals(inst_11384);var inst_11386 = cljs.core.seq(inst_11385);var inst_11387 = inst_11386;var inst_11388 = null;var inst_11389 = 0;var inst_11390 = 0;var state_11448__$1 = (function (){var statearr_11454 = state_11448;(statearr_11454[8] = inst_11389);
(statearr_11454[9] = inst_11388);
(statearr_11454[10] = inst_11387);
(statearr_11454[11] = inst_11390);
return statearr_11454;
})();var statearr_11455_11500 = state_11448__$1;(statearr_11455_11500[2] = null);
(statearr_11455_11500[1] = 8);
return cljs.core.constant$keyword$25;
} else
{if((state_val_11449 === 6))
{var inst_11427 = (state_11448[12]);var inst_11377 = (state_11448[7]);var inst_11425 = (state_11448[13]);var inst_11425__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_11377) : topic_fn.call(null,inst_11377));var inst_11426 = cljs.core.deref(mults);var inst_11427__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_11426,inst_11425__$1);var state_11448__$1 = (function (){var statearr_11456 = state_11448;(statearr_11456[12] = inst_11427__$1);
(statearr_11456[13] = inst_11425__$1);
return statearr_11456;
})();if(cljs.core.truth_(inst_11427__$1))
{var statearr_11457_11501 = state_11448__$1;(statearr_11457_11501[1] = 19);
} else
{var statearr_11458_11502 = state_11448__$1;(statearr_11458_11502[1] = 20);
}
return cljs.core.constant$keyword$25;
} else
{if((state_val_11449 === 7))
{var inst_11444 = (state_11448[2]);var state_11448__$1 = state_11448;var statearr_11459_11503 = state_11448__$1;(statearr_11459_11503[2] = inst_11444);
(statearr_11459_11503[1] = 3);
return cljs.core.constant$keyword$25;
} else
{if((state_val_11449 === 8))
{var inst_11389 = (state_11448[8]);var inst_11390 = (state_11448[11]);var inst_11392 = (inst_11390 < inst_11389);var inst_11393 = inst_11392;var state_11448__$1 = state_11448;if(cljs.core.truth_(inst_11393))
{var statearr_11463_11504 = state_11448__$1;(statearr_11463_11504[1] = 10);
} else
{var statearr_11464_11505 = state_11448__$1;(statearr_11464_11505[1] = 11);
}
return cljs.core.constant$keyword$25;
} else
{if((state_val_11449 === 9))
{var inst_11423 = (state_11448[2]);var state_11448__$1 = state_11448;var statearr_11465_11506 = state_11448__$1;(statearr_11465_11506[2] = inst_11423);
(statearr_11465_11506[1] = 7);
return cljs.core.constant$keyword$25;
} else
{if((state_val_11449 === 10))
{var inst_11389 = (state_11448[8]);var inst_11388 = (state_11448[9]);var inst_11387 = (state_11448[10]);var inst_11390 = (state_11448[11]);var inst_11395 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_11388,inst_11390);var inst_11396 = cljs.core.async.muxch_STAR_(inst_11395);var inst_11397 = cljs.core.async.close_BANG_(inst_11396);var inst_11398 = (inst_11390 + 1);var tmp11460 = inst_11389;var tmp11461 = inst_11388;var tmp11462 = inst_11387;var inst_11387__$1 = tmp11462;var inst_11388__$1 = tmp11461;var inst_11389__$1 = tmp11460;var inst_11390__$1 = inst_11398;var state_11448__$1 = (function (){var statearr_11466 = state_11448;(statearr_11466[8] = inst_11389__$1);
(statearr_11466[9] = inst_11388__$1);
(statearr_11466[10] = inst_11387__$1);
(statearr_11466[11] = inst_11390__$1);
(statearr_11466[14] = inst_11397);
return statearr_11466;
})();var statearr_11467_11507 = state_11448__$1;(statearr_11467_11507[2] = null);
(statearr_11467_11507[1] = 8);
return cljs.core.constant$keyword$25;
} else
{if((state_val_11449 === 11))
{var inst_11387 = (state_11448[10]);var inst_11401 = (state_11448[15]);var inst_11401__$1 = cljs.core.seq(inst_11387);var state_11448__$1 = (function (){var statearr_11468 = state_11448;(statearr_11468[15] = inst_11401__$1);
return statearr_11468;
})();if(inst_11401__$1)
{var statearr_11469_11508 = state_11448__$1;(statearr_11469_11508[1] = 13);
} else
{var statearr_11470_11509 = state_11448__$1;(statearr_11470_11509[1] = 14);
}
return cljs.core.constant$keyword$25;
} else
{if((state_val_11449 === 12))
{var inst_11421 = (state_11448[2]);var state_11448__$1 = state_11448;var statearr_11471_11510 = state_11448__$1;(statearr_11471_11510[2] = inst_11421);
(statearr_11471_11510[1] = 9);
return cljs.core.constant$keyword$25;
} else
{if((state_val_11449 === 13))
{var inst_11401 = (state_11448[15]);var inst_11403 = cljs.core.chunked_seq_QMARK_(inst_11401);var state_11448__$1 = state_11448;if(inst_11403)
{var statearr_11472_11511 = state_11448__$1;(statearr_11472_11511[1] = 16);
} else
{var statearr_11473_11512 = state_11448__$1;(statearr_11473_11512[1] = 17);
}
return cljs.core.constant$keyword$25;
} else
{if((state_val_11449 === 14))
{var state_11448__$1 = state_11448;var statearr_11474_11513 = state_11448__$1;(statearr_11474_11513[2] = null);
(statearr_11474_11513[1] = 15);
return cljs.core.constant$keyword$25;
} else
{if((state_val_11449 === 15))
{var inst_11419 = (state_11448[2]);var state_11448__$1 = state_11448;var statearr_11475_11514 = state_11448__$1;(statearr_11475_11514[2] = inst_11419);
(statearr_11475_11514[1] = 12);
return cljs.core.constant$keyword$25;
} else
{if((state_val_11449 === 16))
{var inst_11401 = (state_11448[15]);var inst_11405 = cljs.core.chunk_first(inst_11401);var inst_11406 = cljs.core.chunk_rest(inst_11401);var inst_11407 = cljs.core.count(inst_11405);var inst_11387 = inst_11406;var inst_11388 = inst_11405;var inst_11389 = inst_11407;var inst_11390 = 0;var state_11448__$1 = (function (){var statearr_11476 = state_11448;(statearr_11476[8] = inst_11389);
(statearr_11476[9] = inst_11388);
(statearr_11476[10] = inst_11387);
(statearr_11476[11] = inst_11390);
return statearr_11476;
})();var statearr_11477_11515 = state_11448__$1;(statearr_11477_11515[2] = null);
(statearr_11477_11515[1] = 8);
return cljs.core.constant$keyword$25;
} else
{if((state_val_11449 === 17))
{var inst_11401 = (state_11448[15]);var inst_11410 = cljs.core.first(inst_11401);var inst_11411 = cljs.core.async.muxch_STAR_(inst_11410);var inst_11412 = cljs.core.async.close_BANG_(inst_11411);var inst_11413 = cljs.core.next(inst_11401);var inst_11387 = inst_11413;var inst_11388 = null;var inst_11389 = 0;var inst_11390 = 0;var state_11448__$1 = (function (){var statearr_11478 = state_11448;(statearr_11478[16] = inst_11412);
(statearr_11478[8] = inst_11389);
(statearr_11478[9] = inst_11388);
(statearr_11478[10] = inst_11387);
(statearr_11478[11] = inst_11390);
return statearr_11478;
})();var statearr_11479_11516 = state_11448__$1;(statearr_11479_11516[2] = null);
(statearr_11479_11516[1] = 8);
return cljs.core.constant$keyword$25;
} else
{if((state_val_11449 === 18))
{var inst_11416 = (state_11448[2]);var state_11448__$1 = state_11448;var statearr_11480_11517 = state_11448__$1;(statearr_11480_11517[2] = inst_11416);
(statearr_11480_11517[1] = 15);
return cljs.core.constant$keyword$25;
} else
{if((state_val_11449 === 19))
{var state_11448__$1 = state_11448;var statearr_11481_11518 = state_11448__$1;(statearr_11481_11518[2] = null);
(statearr_11481_11518[1] = 24);
return cljs.core.constant$keyword$25;
} else
{if((state_val_11449 === 20))
{var state_11448__$1 = state_11448;var statearr_11482_11519 = state_11448__$1;(statearr_11482_11519[2] = null);
(statearr_11482_11519[1] = 21);
return cljs.core.constant$keyword$25;
} else
{if((state_val_11449 === 21))
{var inst_11441 = (state_11448[2]);var state_11448__$1 = (function (){var statearr_11483 = state_11448;(statearr_11483[17] = inst_11441);
return statearr_11483;
})();var statearr_11484_11520 = state_11448__$1;(statearr_11484_11520[2] = null);
(statearr_11484_11520[1] = 2);
return cljs.core.constant$keyword$25;
} else
{if((state_val_11449 === 22))
{var inst_11438 = (state_11448[2]);var state_11448__$1 = state_11448;var statearr_11485_11521 = state_11448__$1;(statearr_11485_11521[2] = inst_11438);
(statearr_11485_11521[1] = 21);
return cljs.core.constant$keyword$25;
} else
{if((state_val_11449 === 23))
{var inst_11425 = (state_11448[13]);var inst_11429 = (state_11448[2]);var inst_11430 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_11425);var state_11448__$1 = (function (){var statearr_11486 = state_11448;(statearr_11486[18] = inst_11429);
return statearr_11486;
})();var statearr_11487_11522 = state_11448__$1;(statearr_11487_11522[2] = inst_11430);
cljs.core.async.impl.ioc_helpers.process_exception(state_11448__$1);
return cljs.core.constant$keyword$25;
} else
{if((state_val_11449 === 24))
{var inst_11427 = (state_11448[12]);var inst_11377 = (state_11448[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_11448,23,Object,null,22);var inst_11434 = cljs.core.async.muxch_STAR_(inst_11427);var state_11448__$1 = state_11448;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_11448__$1,25,inst_11434,inst_11377);
} else
{if((state_val_11449 === 25))
{var inst_11436 = (state_11448[2]);var state_11448__$1 = state_11448;var statearr_11488_11523 = state_11448__$1;(statearr_11488_11523[2] = inst_11436);
cljs.core.async.impl.ioc_helpers.process_exception(state_11448__$1);
return cljs.core.constant$keyword$25;
} else
{return null;
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
});return ((function (switch__5509__auto__){
return (function() {
var state_machine__5510__auto__ = null;
var state_machine__5510__auto____0 = (function (){var statearr_11492 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_11492[0] = state_machine__5510__auto__);
(statearr_11492[1] = 1);
return statearr_11492;
});
var state_machine__5510__auto____1 = (function (state_11448){while(true){
var ret_value__5511__auto__ = (function (){try{while(true){
var result__5512__auto__ = switch__5509__auto__(state_11448);if(cljs.core.keyword_identical_QMARK_(result__5512__auto__,cljs.core.constant$keyword$25))
{{
continue;
}
} else
{return result__5512__auto__;
}
break;
}
}catch (e11493){if((e11493 instanceof Object))
{var ex__5513__auto__ = e11493;var statearr_11494_11524 = state_11448;(statearr_11494_11524[5] = ex__5513__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_11448);
return cljs.core.constant$keyword$25;
} else
{if(cljs.core.constant$keyword$6)
{throw e11493;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5511__auto__,cljs.core.constant$keyword$25))
{{
var G__11525 = state_11448;
state_11448 = G__11525;
continue;
}
} else
{return ret_value__5511__auto__;
}
break;
}
});
state_machine__5510__auto__ = function(state_11448){
switch(arguments.length){
case 0:
return state_machine__5510__auto____0.call(this);
case 1:
return state_machine__5510__auto____1.call(this,state_11448);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5510__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5510__auto____0;
state_machine__5510__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5510__auto____1;
return state_machine__5510__auto__;
})()
;})(switch__5509__auto__))
})();var state__5526__auto__ = (function (){var statearr_11495 = (f__5525__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5525__auto__.cljs$core$IFn$_invoke$arity$0() : f__5525__auto__.call(null));(statearr_11495[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5524__auto___11496);
return statearr_11495;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5526__auto__);
}));
return p;
});
pub = function(ch,topic_fn,buf_fn){
switch(arguments.length){
case 2:
return pub__2.call(this,ch,topic_fn);
case 3:
return pub__3.call(this,ch,topic_fn,buf_fn);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pub.cljs$core$IFn$_invoke$arity$2 = pub__2;
pub.cljs$core$IFn$_invoke$arity$3 = pub__3;
return pub;
})()
;
/**
* Subscribes a channel to a topic of a pub.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.sub = (function() {
var sub = null;
var sub__3 = (function (p,topic,ch){return sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
});
var sub__4 = (function (p,topic,ch,close_QMARK_){return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
});
sub = function(p,topic,ch,close_QMARK_){
switch(arguments.length){
case 3:
return sub__3.call(this,p,topic,ch);
case 4:
return sub__4.call(this,p,topic,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sub.cljs$core$IFn$_invoke$arity$3 = sub__3;
sub.cljs$core$IFn$_invoke$arity$4 = sub__4;
return sub;
})()
;
/**
* Unsubscribes a channel from a topic of a pub
*/
cljs.core.async.unsub = (function unsub(p,topic,ch){return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
* Unsubscribes all channels from a pub, or a topic of a pub
*/
cljs.core.async.unsub_all = (function() {
var unsub_all = null;
var unsub_all__1 = (function (p){return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1(p);
});
var unsub_all__2 = (function (p,topic){return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2(p,topic);
});
unsub_all = function(p,topic){
switch(arguments.length){
case 1:
return unsub_all__1.call(this,p);
case 2:
return unsub_all__2.call(this,p,topic);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all.cljs$core$IFn$_invoke$arity$1 = unsub_all__1;
unsub_all.cljs$core$IFn$_invoke$arity$2 = unsub_all__2;
return unsub_all;
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
var map = null;
var map__2 = (function (f,chs){return map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
});
var map__3 = (function (f,chs,buf_or_n){var chs__$1 = cljs.core.vec(chs);var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var cnt = cljs.core.count(chs__$1);var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){(rets[i] = ret);
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice(0));
} else
{return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));var c__5524__auto___11662 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5525__auto__ = (function (){var switch__5509__auto__ = (function (state_11632){var state_val_11633 = (state_11632[1]);if((state_val_11633 === 1))
{var state_11632__$1 = state_11632;var statearr_11634_11663 = state_11632__$1;(statearr_11634_11663[2] = null);
(statearr_11634_11663[1] = 2);
return cljs.core.constant$keyword$25;
} else
{if((state_val_11633 === 2))
{var inst_11595 = cljs.core.reset_BANG_(dctr,cnt);var inst_11596 = 0;var state_11632__$1 = (function (){var statearr_11635 = state_11632;(statearr_11635[7] = inst_11596);
(statearr_11635[8] = inst_11595);
return statearr_11635;
})();var statearr_11636_11664 = state_11632__$1;(statearr_11636_11664[2] = null);
(statearr_11636_11664[1] = 4);
return cljs.core.constant$keyword$25;
} else
{if((state_val_11633 === 3))
{var inst_11630 = (state_11632[2]);var state_11632__$1 = state_11632;return cljs.core.async.impl.ioc_helpers.return_chan(state_11632__$1,inst_11630);
} else
{if((state_val_11633 === 4))
{var inst_11596 = (state_11632[7]);var inst_11598 = (inst_11596 < cnt);var state_11632__$1 = state_11632;if(cljs.core.truth_(inst_11598))
{var statearr_11637_11665 = state_11632__$1;(statearr_11637_11665[1] = 6);
} else
{var statearr_11638_11666 = state_11632__$1;(statearr_11638_11666[1] = 7);
}
return cljs.core.constant$keyword$25;
} else
{if((state_val_11633 === 5))
{var inst_11616 = (state_11632[2]);var state_11632__$1 = (function (){var statearr_11639 = state_11632;(statearr_11639[9] = inst_11616);
return statearr_11639;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11632__$1,12,dchan);
} else
{if((state_val_11633 === 6))
{var state_11632__$1 = state_11632;var statearr_11640_11667 = state_11632__$1;(statearr_11640_11667[2] = null);
(statearr_11640_11667[1] = 11);
return cljs.core.constant$keyword$25;
} else
{if((state_val_11633 === 7))
{var state_11632__$1 = state_11632;var statearr_11641_11668 = state_11632__$1;(statearr_11641_11668[2] = null);
(statearr_11641_11668[1] = 8);
return cljs.core.constant$keyword$25;
} else
{if((state_val_11633 === 8))
{var inst_11614 = (state_11632[2]);var state_11632__$1 = state_11632;var statearr_11642_11669 = state_11632__$1;(statearr_11642_11669[2] = inst_11614);
(statearr_11642_11669[1] = 5);
return cljs.core.constant$keyword$25;
} else
{if((state_val_11633 === 9))
{var inst_11596 = (state_11632[7]);var inst_11609 = (state_11632[2]);var inst_11610 = (inst_11596 + 1);var inst_11596__$1 = inst_11610;var state_11632__$1 = (function (){var statearr_11643 = state_11632;(statearr_11643[10] = inst_11609);
(statearr_11643[7] = inst_11596__$1);
return statearr_11643;
})();var statearr_11644_11670 = state_11632__$1;(statearr_11644_11670[2] = null);
(statearr_11644_11670[1] = 4);
return cljs.core.constant$keyword$25;
} else
{if((state_val_11633 === 10))
{var inst_11600 = (state_11632[2]);var inst_11601 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);var state_11632__$1 = (function (){var statearr_11645 = state_11632;(statearr_11645[11] = inst_11600);
return statearr_11645;
})();var statearr_11646_11671 = state_11632__$1;(statearr_11646_11671[2] = inst_11601);
cljs.core.async.impl.ioc_helpers.process_exception(state_11632__$1);
return cljs.core.constant$keyword$25;
} else
{if((state_val_11633 === 11))
{var inst_11596 = (state_11632[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_11632,10,Object,null,9);var inst_11605 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_11596) : chs__$1.call(null,inst_11596));var inst_11606 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_11596) : done.call(null,inst_11596));var inst_11607 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_11605,inst_11606);var state_11632__$1 = state_11632;var statearr_11647_11672 = state_11632__$1;(statearr_11647_11672[2] = inst_11607);
cljs.core.async.impl.ioc_helpers.process_exception(state_11632__$1);
return cljs.core.constant$keyword$25;
} else
{if((state_val_11633 === 12))
{var inst_11618 = (state_11632[12]);var inst_11618__$1 = (state_11632[2]);var inst_11619 = cljs.core.some(cljs.core.nil_QMARK_,inst_11618__$1);var state_11632__$1 = (function (){var statearr_11648 = state_11632;(statearr_11648[12] = inst_11618__$1);
return statearr_11648;
})();if(cljs.core.truth_(inst_11619))
{var statearr_11649_11673 = state_11632__$1;(statearr_11649_11673[1] = 13);
} else
{var statearr_11650_11674 = state_11632__$1;(statearr_11650_11674[1] = 14);
}
return cljs.core.constant$keyword$25;
} else
{if((state_val_11633 === 13))
{var inst_11621 = cljs.core.async.close_BANG_(out);var state_11632__$1 = state_11632;var statearr_11651_11675 = state_11632__$1;(statearr_11651_11675[2] = inst_11621);
(statearr_11651_11675[1] = 15);
return cljs.core.constant$keyword$25;
} else
{if((state_val_11633 === 14))
{var inst_11618 = (state_11632[12]);var inst_11623 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_11618);var state_11632__$1 = state_11632;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_11632__$1,16,out,inst_11623);
} else
{if((state_val_11633 === 15))
{var inst_11628 = (state_11632[2]);var state_11632__$1 = state_11632;var statearr_11652_11676 = state_11632__$1;(statearr_11652_11676[2] = inst_11628);
(statearr_11652_11676[1] = 3);
return cljs.core.constant$keyword$25;
} else
{if((state_val_11633 === 16))
{var inst_11625 = (state_11632[2]);var state_11632__$1 = (function (){var statearr_11653 = state_11632;(statearr_11653[13] = inst_11625);
return statearr_11653;
})();var statearr_11654_11677 = state_11632__$1;(statearr_11654_11677[2] = null);
(statearr_11654_11677[1] = 2);
return cljs.core.constant$keyword$25;
} else
{return null;
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
});return ((function (switch__5509__auto__){
return (function() {
var state_machine__5510__auto__ = null;
var state_machine__5510__auto____0 = (function (){var statearr_11658 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_11658[0] = state_machine__5510__auto__);
(statearr_11658[1] = 1);
return statearr_11658;
});
var state_machine__5510__auto____1 = (function (state_11632){while(true){
var ret_value__5511__auto__ = (function (){try{while(true){
var result__5512__auto__ = switch__5509__auto__(state_11632);if(cljs.core.keyword_identical_QMARK_(result__5512__auto__,cljs.core.constant$keyword$25))
{{
continue;
}
} else
{return result__5512__auto__;
}
break;
}
}catch (e11659){if((e11659 instanceof Object))
{var ex__5513__auto__ = e11659;var statearr_11660_11678 = state_11632;(statearr_11660_11678[5] = ex__5513__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_11632);
return cljs.core.constant$keyword$25;
} else
{if(cljs.core.constant$keyword$6)
{throw e11659;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5511__auto__,cljs.core.constant$keyword$25))
{{
var G__11679 = state_11632;
state_11632 = G__11679;
continue;
}
} else
{return ret_value__5511__auto__;
}
break;
}
});
state_machine__5510__auto__ = function(state_11632){
switch(arguments.length){
case 0:
return state_machine__5510__auto____0.call(this);
case 1:
return state_machine__5510__auto____1.call(this,state_11632);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5510__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5510__auto____0;
state_machine__5510__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5510__auto____1;
return state_machine__5510__auto__;
})()
;})(switch__5509__auto__))
})();var state__5526__auto__ = (function (){var statearr_11661 = (f__5525__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5525__auto__.cljs$core$IFn$_invoke$arity$0() : f__5525__auto__.call(null));(statearr_11661[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5524__auto___11662);
return statearr_11661;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5526__auto__);
}));
return out;
});
map = function(f,chs,buf_or_n){
switch(arguments.length){
case 2:
return map__2.call(this,f,chs);
case 3:
return map__3.call(this,f,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
map.cljs$core$IFn$_invoke$arity$2 = map__2;
map.cljs$core$IFn$_invoke$arity$3 = map__3;
return map;
})()
;
/**
* Takes a collection of source channels and returns a channel which
* contains all values taken from them. The returned channel will be
* unbuffered by default, or a buf-or-n can be supplied. The channel
* will close after all the source channels have closed.
*/
cljs.core.async.merge = (function() {
var merge = null;
var merge__1 = (function (chs){return merge.cljs$core$IFn$_invoke$arity$2(chs,null);
});
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5524__auto___11787 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5525__auto__ = (function (){var switch__5509__auto__ = (function (state_11763){var state_val_11764 = (state_11763[1]);if((state_val_11764 === 1))
{var inst_11734 = cljs.core.vec(chs);var inst_11735 = inst_11734;var state_11763__$1 = (function (){var statearr_11765 = state_11763;(statearr_11765[7] = inst_11735);
return statearr_11765;
})();var statearr_11766_11788 = state_11763__$1;(statearr_11766_11788[2] = null);
(statearr_11766_11788[1] = 2);
return cljs.core.constant$keyword$25;
} else
{if((state_val_11764 === 2))
{var inst_11735 = (state_11763[7]);var inst_11737 = cljs.core.count(inst_11735);var inst_11738 = (inst_11737 > 0);var state_11763__$1 = state_11763;if(cljs.core.truth_(inst_11738))
{var statearr_11767_11789 = state_11763__$1;(statearr_11767_11789[1] = 4);
} else
{var statearr_11768_11790 = state_11763__$1;(statearr_11768_11790[1] = 5);
}
return cljs.core.constant$keyword$25;
} else
{if((state_val_11764 === 3))
{var inst_11761 = (state_11763[2]);var state_11763__$1 = state_11763;return cljs.core.async.impl.ioc_helpers.return_chan(state_11763__$1,inst_11761);
} else
{if((state_val_11764 === 4))
{var inst_11735 = (state_11763[7]);var state_11763__$1 = state_11763;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_(state_11763__$1,7,inst_11735);
} else
{if((state_val_11764 === 5))
{var inst_11757 = cljs.core.async.close_BANG_(out);var state_11763__$1 = state_11763;var statearr_11769_11791 = state_11763__$1;(statearr_11769_11791[2] = inst_11757);
(statearr_11769_11791[1] = 6);
return cljs.core.constant$keyword$25;
} else
{if((state_val_11764 === 6))
{var inst_11759 = (state_11763[2]);var state_11763__$1 = state_11763;var statearr_11770_11792 = state_11763__$1;(statearr_11770_11792[2] = inst_11759);
(statearr_11770_11792[1] = 3);
return cljs.core.constant$keyword$25;
} else
{if((state_val_11764 === 7))
{var inst_11742 = (state_11763[8]);var inst_11743 = (state_11763[9]);var inst_11742__$1 = (state_11763[2]);var inst_11743__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_11742__$1,0,null);var inst_11744 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_11742__$1,1,null);var inst_11745 = (inst_11743__$1 == null);var state_11763__$1 = (function (){var statearr_11771 = state_11763;(statearr_11771[8] = inst_11742__$1);
(statearr_11771[9] = inst_11743__$1);
(statearr_11771[10] = inst_11744);
return statearr_11771;
})();if(cljs.core.truth_(inst_11745))
{var statearr_11772_11793 = state_11763__$1;(statearr_11772_11793[1] = 8);
} else
{var statearr_11773_11794 = state_11763__$1;(statearr_11773_11794[1] = 9);
}
return cljs.core.constant$keyword$25;
} else
{if((state_val_11764 === 8))
{var inst_11735 = (state_11763[7]);var inst_11742 = (state_11763[8]);var inst_11743 = (state_11763[9]);var inst_11744 = (state_11763[10]);var inst_11747 = (function (){var c = inst_11744;var v = inst_11743;var vec__11740 = inst_11742;var cs = inst_11735;return ((function (c,v,vec__11740,cs,inst_11735,inst_11742,inst_11743,inst_11744,state_val_11764){
return (function (p1__11680_SHARP_){return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__11680_SHARP_);
});
;})(c,v,vec__11740,cs,inst_11735,inst_11742,inst_11743,inst_11744,state_val_11764))
})();var inst_11748 = cljs.core.filterv(inst_11747,inst_11735);var inst_11735__$1 = inst_11748;var state_11763__$1 = (function (){var statearr_11774 = state_11763;(statearr_11774[7] = inst_11735__$1);
return statearr_11774;
})();var statearr_11775_11795 = state_11763__$1;(statearr_11775_11795[2] = null);
(statearr_11775_11795[1] = 2);
return cljs.core.constant$keyword$25;
} else
{if((state_val_11764 === 9))
{var inst_11743 = (state_11763[9]);var state_11763__$1 = state_11763;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_11763__$1,11,out,inst_11743);
} else
{if((state_val_11764 === 10))
{var inst_11755 = (state_11763[2]);var state_11763__$1 = state_11763;var statearr_11777_11796 = state_11763__$1;(statearr_11777_11796[2] = inst_11755);
(statearr_11777_11796[1] = 6);
return cljs.core.constant$keyword$25;
} else
{if((state_val_11764 === 11))
{var inst_11735 = (state_11763[7]);var inst_11752 = (state_11763[2]);var tmp11776 = inst_11735;var inst_11735__$1 = tmp11776;var state_11763__$1 = (function (){var statearr_11778 = state_11763;(statearr_11778[7] = inst_11735__$1);
(statearr_11778[11] = inst_11752);
return statearr_11778;
})();var statearr_11779_11797 = state_11763__$1;(statearr_11779_11797[2] = null);
(statearr_11779_11797[1] = 2);
return cljs.core.constant$keyword$25;
} else
{return null;
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
});return ((function (switch__5509__auto__){
return (function() {
var state_machine__5510__auto__ = null;
var state_machine__5510__auto____0 = (function (){var statearr_11783 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_11783[0] = state_machine__5510__auto__);
(statearr_11783[1] = 1);
return statearr_11783;
});
var state_machine__5510__auto____1 = (function (state_11763){while(true){
var ret_value__5511__auto__ = (function (){try{while(true){
var result__5512__auto__ = switch__5509__auto__(state_11763);if(cljs.core.keyword_identical_QMARK_(result__5512__auto__,cljs.core.constant$keyword$25))
{{
continue;
}
} else
{return result__5512__auto__;
}
break;
}
}catch (e11784){if((e11784 instanceof Object))
{var ex__5513__auto__ = e11784;var statearr_11785_11798 = state_11763;(statearr_11785_11798[5] = ex__5513__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_11763);
return cljs.core.constant$keyword$25;
} else
{if(cljs.core.constant$keyword$6)
{throw e11784;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5511__auto__,cljs.core.constant$keyword$25))
{{
var G__11799 = state_11763;
state_11763 = G__11799;
continue;
}
} else
{return ret_value__5511__auto__;
}
break;
}
});
state_machine__5510__auto__ = function(state_11763){
switch(arguments.length){
case 0:
return state_machine__5510__auto____0.call(this);
case 1:
return state_machine__5510__auto____1.call(this,state_11763);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5510__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5510__auto____0;
state_machine__5510__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5510__auto____1;
return state_machine__5510__auto__;
})()
;})(switch__5509__auto__))
})();var state__5526__auto__ = (function (){var statearr_11786 = (f__5525__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5525__auto__.cljs$core$IFn$_invoke$arity$0() : f__5525__auto__.call(null));(statearr_11786[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5524__auto___11787);
return statearr_11786;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5526__auto__);
}));
return out;
});
merge = function(chs,buf_or_n){
switch(arguments.length){
case 1:
return merge__1.call(this,chs);
case 2:
return merge__2.call(this,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
merge.cljs$core$IFn$_invoke$arity$1 = merge__1;
merge.cljs$core$IFn$_invoke$arity$2 = merge__2;
return merge;
})()
;
/**
* Returns a channel containing the single (collection) result of the
* items taken from the channel conjoined to the supplied
* collection. ch must close before into produces a result.
*/
cljs.core.async.into = (function into(coll,ch){return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
* Returns a channel that will return, at most, n items from ch. After n items
* have been returned, or ch has been closed, the return chanel will close.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.take = (function() {
var take = null;
var take__2 = (function (n,ch){return take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5524__auto___11892 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5525__auto__ = (function (){var switch__5509__auto__ = (function (state_11869){var state_val_11870 = (state_11869[1]);if((state_val_11870 === 1))
{var inst_11846 = 0;var state_11869__$1 = (function (){var statearr_11871 = state_11869;(statearr_11871[7] = inst_11846);
return statearr_11871;
})();var statearr_11872_11893 = state_11869__$1;(statearr_11872_11893[2] = null);
(statearr_11872_11893[1] = 2);
return cljs.core.constant$keyword$25;
} else
{if((state_val_11870 === 2))
{var inst_11846 = (state_11869[7]);var inst_11848 = (inst_11846 < n);var state_11869__$1 = state_11869;if(cljs.core.truth_(inst_11848))
{var statearr_11873_11894 = state_11869__$1;(statearr_11873_11894[1] = 4);
} else
{var statearr_11874_11895 = state_11869__$1;(statearr_11874_11895[1] = 5);
}
return cljs.core.constant$keyword$25;
} else
{if((state_val_11870 === 3))
{var inst_11866 = (state_11869[2]);var inst_11867 = cljs.core.async.close_BANG_(out);var state_11869__$1 = (function (){var statearr_11875 = state_11869;(statearr_11875[8] = inst_11866);
return statearr_11875;
})();return cljs.core.async.impl.ioc_helpers.return_chan(state_11869__$1,inst_11867);
} else
{if((state_val_11870 === 4))
{var state_11869__$1 = state_11869;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11869__$1,7,ch);
} else
{if((state_val_11870 === 5))
{var state_11869__$1 = state_11869;var statearr_11876_11896 = state_11869__$1;(statearr_11876_11896[2] = null);
(statearr_11876_11896[1] = 6);
return cljs.core.constant$keyword$25;
} else
{if((state_val_11870 === 6))
{var inst_11864 = (state_11869[2]);var state_11869__$1 = state_11869;var statearr_11877_11897 = state_11869__$1;(statearr_11877_11897[2] = inst_11864);
(statearr_11877_11897[1] = 3);
return cljs.core.constant$keyword$25;
} else
{if((state_val_11870 === 7))
{var inst_11851 = (state_11869[9]);var inst_11851__$1 = (state_11869[2]);var inst_11852 = (inst_11851__$1 == null);var inst_11853 = cljs.core.not(inst_11852);var state_11869__$1 = (function (){var statearr_11878 = state_11869;(statearr_11878[9] = inst_11851__$1);
return statearr_11878;
})();if(inst_11853)
{var statearr_11879_11898 = state_11869__$1;(statearr_11879_11898[1] = 8);
} else
{var statearr_11880_11899 = state_11869__$1;(statearr_11880_11899[1] = 9);
}
return cljs.core.constant$keyword$25;
} else
{if((state_val_11870 === 8))
{var inst_11851 = (state_11869[9]);var state_11869__$1 = state_11869;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_11869__$1,11,out,inst_11851);
} else
{if((state_val_11870 === 9))
{var state_11869__$1 = state_11869;var statearr_11881_11900 = state_11869__$1;(statearr_11881_11900[2] = null);
(statearr_11881_11900[1] = 10);
return cljs.core.constant$keyword$25;
} else
{if((state_val_11870 === 10))
{var inst_11861 = (state_11869[2]);var state_11869__$1 = state_11869;var statearr_11882_11901 = state_11869__$1;(statearr_11882_11901[2] = inst_11861);
(statearr_11882_11901[1] = 6);
return cljs.core.constant$keyword$25;
} else
{if((state_val_11870 === 11))
{var inst_11846 = (state_11869[7]);var inst_11856 = (state_11869[2]);var inst_11857 = (inst_11846 + 1);var inst_11846__$1 = inst_11857;var state_11869__$1 = (function (){var statearr_11883 = state_11869;(statearr_11883[7] = inst_11846__$1);
(statearr_11883[10] = inst_11856);
return statearr_11883;
})();var statearr_11884_11902 = state_11869__$1;(statearr_11884_11902[2] = null);
(statearr_11884_11902[1] = 2);
return cljs.core.constant$keyword$25;
} else
{return null;
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
});return ((function (switch__5509__auto__){
return (function() {
var state_machine__5510__auto__ = null;
var state_machine__5510__auto____0 = (function (){var statearr_11888 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_11888[0] = state_machine__5510__auto__);
(statearr_11888[1] = 1);
return statearr_11888;
});
var state_machine__5510__auto____1 = (function (state_11869){while(true){
var ret_value__5511__auto__ = (function (){try{while(true){
var result__5512__auto__ = switch__5509__auto__(state_11869);if(cljs.core.keyword_identical_QMARK_(result__5512__auto__,cljs.core.constant$keyword$25))
{{
continue;
}
} else
{return result__5512__auto__;
}
break;
}
}catch (e11889){if((e11889 instanceof Object))
{var ex__5513__auto__ = e11889;var statearr_11890_11903 = state_11869;(statearr_11890_11903[5] = ex__5513__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_11869);
return cljs.core.constant$keyword$25;
} else
{if(cljs.core.constant$keyword$6)
{throw e11889;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5511__auto__,cljs.core.constant$keyword$25))
{{
var G__11904 = state_11869;
state_11869 = G__11904;
continue;
}
} else
{return ret_value__5511__auto__;
}
break;
}
});
state_machine__5510__auto__ = function(state_11869){
switch(arguments.length){
case 0:
return state_machine__5510__auto____0.call(this);
case 1:
return state_machine__5510__auto____1.call(this,state_11869);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5510__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5510__auto____0;
state_machine__5510__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5510__auto____1;
return state_machine__5510__auto__;
})()
;})(switch__5509__auto__))
})();var state__5526__auto__ = (function (){var statearr_11891 = (f__5525__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5525__auto__.cljs$core$IFn$_invoke$arity$0() : f__5525__auto__.call(null));(statearr_11891[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5524__auto___11892);
return statearr_11891;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5526__auto__);
}));
return out;
});
take = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return take__2.call(this,n,ch);
case 3:
return take__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take.cljs$core$IFn$_invoke$arity$2 = take__2;
take.cljs$core$IFn$_invoke$arity$3 = take__3;
return take;
})()
;
/**
* Returns a channel that will contain values from ch. Consecutive duplicate
* values will be dropped.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.unique = (function() {
var unique = null;
var unique__1 = (function (ch){return unique.cljs$core$IFn$_invoke$arity$2(ch,null);
});
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5524__auto___12001 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5525__auto__ = (function (){var switch__5509__auto__ = (function (state_11976){var state_val_11977 = (state_11976[1]);if((state_val_11977 === 1))
{var inst_11953 = null;var state_11976__$1 = (function (){var statearr_11978 = state_11976;(statearr_11978[7] = inst_11953);
return statearr_11978;
})();var statearr_11979_12002 = state_11976__$1;(statearr_11979_12002[2] = null);
(statearr_11979_12002[1] = 2);
return cljs.core.constant$keyword$25;
} else
{if((state_val_11977 === 2))
{var state_11976__$1 = state_11976;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11976__$1,4,ch);
} else
{if((state_val_11977 === 3))
{var inst_11973 = (state_11976[2]);var inst_11974 = cljs.core.async.close_BANG_(out);var state_11976__$1 = (function (){var statearr_11980 = state_11976;(statearr_11980[8] = inst_11973);
return statearr_11980;
})();return cljs.core.async.impl.ioc_helpers.return_chan(state_11976__$1,inst_11974);
} else
{if((state_val_11977 === 4))
{var inst_11956 = (state_11976[9]);var inst_11956__$1 = (state_11976[2]);var inst_11957 = (inst_11956__$1 == null);var inst_11958 = cljs.core.not(inst_11957);var state_11976__$1 = (function (){var statearr_11981 = state_11976;(statearr_11981[9] = inst_11956__$1);
return statearr_11981;
})();if(inst_11958)
{var statearr_11982_12003 = state_11976__$1;(statearr_11982_12003[1] = 5);
} else
{var statearr_11983_12004 = state_11976__$1;(statearr_11983_12004[1] = 6);
}
return cljs.core.constant$keyword$25;
} else
{if((state_val_11977 === 5))
{var inst_11956 = (state_11976[9]);var inst_11953 = (state_11976[7]);var inst_11960 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_11956,inst_11953);var state_11976__$1 = state_11976;if(inst_11960)
{var statearr_11984_12005 = state_11976__$1;(statearr_11984_12005[1] = 8);
} else
{var statearr_11985_12006 = state_11976__$1;(statearr_11985_12006[1] = 9);
}
return cljs.core.constant$keyword$25;
} else
{if((state_val_11977 === 6))
{var state_11976__$1 = state_11976;var statearr_11987_12007 = state_11976__$1;(statearr_11987_12007[2] = null);
(statearr_11987_12007[1] = 7);
return cljs.core.constant$keyword$25;
} else
{if((state_val_11977 === 7))
{var inst_11971 = (state_11976[2]);var state_11976__$1 = state_11976;var statearr_11988_12008 = state_11976__$1;(statearr_11988_12008[2] = inst_11971);
(statearr_11988_12008[1] = 3);
return cljs.core.constant$keyword$25;
} else
{if((state_val_11977 === 8))
{var inst_11953 = (state_11976[7]);var tmp11986 = inst_11953;var inst_11953__$1 = tmp11986;var state_11976__$1 = (function (){var statearr_11989 = state_11976;(statearr_11989[7] = inst_11953__$1);
return statearr_11989;
})();var statearr_11990_12009 = state_11976__$1;(statearr_11990_12009[2] = null);
(statearr_11990_12009[1] = 2);
return cljs.core.constant$keyword$25;
} else
{if((state_val_11977 === 9))
{var inst_11956 = (state_11976[9]);var state_11976__$1 = state_11976;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_11976__$1,11,out,inst_11956);
} else
{if((state_val_11977 === 10))
{var inst_11968 = (state_11976[2]);var state_11976__$1 = state_11976;var statearr_11991_12010 = state_11976__$1;(statearr_11991_12010[2] = inst_11968);
(statearr_11991_12010[1] = 7);
return cljs.core.constant$keyword$25;
} else
{if((state_val_11977 === 11))
{var inst_11956 = (state_11976[9]);var inst_11965 = (state_11976[2]);var inst_11953 = inst_11956;var state_11976__$1 = (function (){var statearr_11992 = state_11976;(statearr_11992[10] = inst_11965);
(statearr_11992[7] = inst_11953);
return statearr_11992;
})();var statearr_11993_12011 = state_11976__$1;(statearr_11993_12011[2] = null);
(statearr_11993_12011[1] = 2);
return cljs.core.constant$keyword$25;
} else
{return null;
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
});return ((function (switch__5509__auto__){
return (function() {
var state_machine__5510__auto__ = null;
var state_machine__5510__auto____0 = (function (){var statearr_11997 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_11997[0] = state_machine__5510__auto__);
(statearr_11997[1] = 1);
return statearr_11997;
});
var state_machine__5510__auto____1 = (function (state_11976){while(true){
var ret_value__5511__auto__ = (function (){try{while(true){
var result__5512__auto__ = switch__5509__auto__(state_11976);if(cljs.core.keyword_identical_QMARK_(result__5512__auto__,cljs.core.constant$keyword$25))
{{
continue;
}
} else
{return result__5512__auto__;
}
break;
}
}catch (e11998){if((e11998 instanceof Object))
{var ex__5513__auto__ = e11998;var statearr_11999_12012 = state_11976;(statearr_11999_12012[5] = ex__5513__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_11976);
return cljs.core.constant$keyword$25;
} else
{if(cljs.core.constant$keyword$6)
{throw e11998;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5511__auto__,cljs.core.constant$keyword$25))
{{
var G__12013 = state_11976;
state_11976 = G__12013;
continue;
}
} else
{return ret_value__5511__auto__;
}
break;
}
});
state_machine__5510__auto__ = function(state_11976){
switch(arguments.length){
case 0:
return state_machine__5510__auto____0.call(this);
case 1:
return state_machine__5510__auto____1.call(this,state_11976);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5510__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5510__auto____0;
state_machine__5510__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5510__auto____1;
return state_machine__5510__auto__;
})()
;})(switch__5509__auto__))
})();var state__5526__auto__ = (function (){var statearr_12000 = (f__5525__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5525__auto__.cljs$core$IFn$_invoke$arity$0() : f__5525__auto__.call(null));(statearr_12000[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5524__auto___12001);
return statearr_12000;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5526__auto__);
}));
return out;
});
unique = function(ch,buf_or_n){
switch(arguments.length){
case 1:
return unique__1.call(this,ch);
case 2:
return unique__2.call(this,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unique.cljs$core$IFn$_invoke$arity$1 = unique__1;
unique.cljs$core$IFn$_invoke$arity$2 = unique__2;
return unique;
})()
;
/**
* Returns a channel that will contain vectors of n items taken from ch. The
* final vector in the return channel may be smaller than n if ch closed before
* the vector could be completely filled.
* 
* The output channel is unbuffered by default, unless buf-or-n is given
*/
cljs.core.async.partition = (function() {
var partition = null;
var partition__2 = (function (n,ch){return partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5524__auto___12148 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5525__auto__ = (function (){var switch__5509__auto__ = (function (state_12118){var state_val_12119 = (state_12118[1]);if((state_val_12119 === 1))
{var inst_12081 = (new Array(n));var inst_12082 = inst_12081;var inst_12083 = 0;var state_12118__$1 = (function (){var statearr_12120 = state_12118;(statearr_12120[7] = inst_12083);
(statearr_12120[8] = inst_12082);
return statearr_12120;
})();var statearr_12121_12149 = state_12118__$1;(statearr_12121_12149[2] = null);
(statearr_12121_12149[1] = 2);
return cljs.core.constant$keyword$25;
} else
{if((state_val_12119 === 2))
{var state_12118__$1 = state_12118;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12118__$1,4,ch);
} else
{if((state_val_12119 === 3))
{var inst_12116 = (state_12118[2]);var state_12118__$1 = state_12118;return cljs.core.async.impl.ioc_helpers.return_chan(state_12118__$1,inst_12116);
} else
{if((state_val_12119 === 4))
{var inst_12086 = (state_12118[9]);var inst_12086__$1 = (state_12118[2]);var inst_12087 = (inst_12086__$1 == null);var inst_12088 = cljs.core.not(inst_12087);var state_12118__$1 = (function (){var statearr_12122 = state_12118;(statearr_12122[9] = inst_12086__$1);
return statearr_12122;
})();if(inst_12088)
{var statearr_12123_12150 = state_12118__$1;(statearr_12123_12150[1] = 5);
} else
{var statearr_12124_12151 = state_12118__$1;(statearr_12124_12151[1] = 6);
}
return cljs.core.constant$keyword$25;
} else
{if((state_val_12119 === 5))
{var inst_12091 = (state_12118[10]);var inst_12086 = (state_12118[9]);var inst_12083 = (state_12118[7]);var inst_12082 = (state_12118[8]);var inst_12090 = (inst_12082[inst_12083] = inst_12086);var inst_12091__$1 = (inst_12083 + 1);var inst_12092 = (inst_12091__$1 < n);var state_12118__$1 = (function (){var statearr_12125 = state_12118;(statearr_12125[11] = inst_12090);
(statearr_12125[10] = inst_12091__$1);
return statearr_12125;
})();if(cljs.core.truth_(inst_12092))
{var statearr_12126_12152 = state_12118__$1;(statearr_12126_12152[1] = 8);
} else
{var statearr_12127_12153 = state_12118__$1;(statearr_12127_12153[1] = 9);
}
return cljs.core.constant$keyword$25;
} else
{if((state_val_12119 === 6))
{var inst_12083 = (state_12118[7]);var inst_12104 = (inst_12083 > 0);var state_12118__$1 = state_12118;if(cljs.core.truth_(inst_12104))
{var statearr_12129_12154 = state_12118__$1;(statearr_12129_12154[1] = 12);
} else
{var statearr_12130_12155 = state_12118__$1;(statearr_12130_12155[1] = 13);
}
return cljs.core.constant$keyword$25;
} else
{if((state_val_12119 === 7))
{var inst_12114 = (state_12118[2]);var state_12118__$1 = state_12118;var statearr_12131_12156 = state_12118__$1;(statearr_12131_12156[2] = inst_12114);
(statearr_12131_12156[1] = 3);
return cljs.core.constant$keyword$25;
} else
{if((state_val_12119 === 8))
{var inst_12091 = (state_12118[10]);var inst_12082 = (state_12118[8]);var tmp12128 = inst_12082;var inst_12082__$1 = tmp12128;var inst_12083 = inst_12091;var state_12118__$1 = (function (){var statearr_12132 = state_12118;(statearr_12132[7] = inst_12083);
(statearr_12132[8] = inst_12082__$1);
return statearr_12132;
})();var statearr_12133_12157 = state_12118__$1;(statearr_12133_12157[2] = null);
(statearr_12133_12157[1] = 2);
return cljs.core.constant$keyword$25;
} else
{if((state_val_12119 === 9))
{var inst_12082 = (state_12118[8]);var inst_12096 = cljs.core.vec(inst_12082);var state_12118__$1 = state_12118;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12118__$1,11,out,inst_12096);
} else
{if((state_val_12119 === 10))
{var inst_12102 = (state_12118[2]);var state_12118__$1 = state_12118;var statearr_12134_12158 = state_12118__$1;(statearr_12134_12158[2] = inst_12102);
(statearr_12134_12158[1] = 7);
return cljs.core.constant$keyword$25;
} else
{if((state_val_12119 === 11))
{var inst_12098 = (state_12118[2]);var inst_12099 = (new Array(n));var inst_12082 = inst_12099;var inst_12083 = 0;var state_12118__$1 = (function (){var statearr_12135 = state_12118;(statearr_12135[7] = inst_12083);
(statearr_12135[8] = inst_12082);
(statearr_12135[12] = inst_12098);
return statearr_12135;
})();var statearr_12136_12159 = state_12118__$1;(statearr_12136_12159[2] = null);
(statearr_12136_12159[1] = 2);
return cljs.core.constant$keyword$25;
} else
{if((state_val_12119 === 12))
{var inst_12082 = (state_12118[8]);var inst_12106 = cljs.core.vec(inst_12082);var state_12118__$1 = state_12118;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12118__$1,15,out,inst_12106);
} else
{if((state_val_12119 === 13))
{var state_12118__$1 = state_12118;var statearr_12137_12160 = state_12118__$1;(statearr_12137_12160[2] = null);
(statearr_12137_12160[1] = 14);
return cljs.core.constant$keyword$25;
} else
{if((state_val_12119 === 14))
{var inst_12111 = (state_12118[2]);var inst_12112 = cljs.core.async.close_BANG_(out);var state_12118__$1 = (function (){var statearr_12138 = state_12118;(statearr_12138[13] = inst_12111);
return statearr_12138;
})();var statearr_12139_12161 = state_12118__$1;(statearr_12139_12161[2] = inst_12112);
(statearr_12139_12161[1] = 7);
return cljs.core.constant$keyword$25;
} else
{if((state_val_12119 === 15))
{var inst_12108 = (state_12118[2]);var state_12118__$1 = state_12118;var statearr_12140_12162 = state_12118__$1;(statearr_12140_12162[2] = inst_12108);
(statearr_12140_12162[1] = 14);
return cljs.core.constant$keyword$25;
} else
{return null;
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
});return ((function (switch__5509__auto__){
return (function() {
var state_machine__5510__auto__ = null;
var state_machine__5510__auto____0 = (function (){var statearr_12144 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12144[0] = state_machine__5510__auto__);
(statearr_12144[1] = 1);
return statearr_12144;
});
var state_machine__5510__auto____1 = (function (state_12118){while(true){
var ret_value__5511__auto__ = (function (){try{while(true){
var result__5512__auto__ = switch__5509__auto__(state_12118);if(cljs.core.keyword_identical_QMARK_(result__5512__auto__,cljs.core.constant$keyword$25))
{{
continue;
}
} else
{return result__5512__auto__;
}
break;
}
}catch (e12145){if((e12145 instanceof Object))
{var ex__5513__auto__ = e12145;var statearr_12146_12163 = state_12118;(statearr_12146_12163[5] = ex__5513__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_12118);
return cljs.core.constant$keyword$25;
} else
{if(cljs.core.constant$keyword$6)
{throw e12145;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5511__auto__,cljs.core.constant$keyword$25))
{{
var G__12164 = state_12118;
state_12118 = G__12164;
continue;
}
} else
{return ret_value__5511__auto__;
}
break;
}
});
state_machine__5510__auto__ = function(state_12118){
switch(arguments.length){
case 0:
return state_machine__5510__auto____0.call(this);
case 1:
return state_machine__5510__auto____1.call(this,state_12118);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5510__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5510__auto____0;
state_machine__5510__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5510__auto____1;
return state_machine__5510__auto__;
})()
;})(switch__5509__auto__))
})();var state__5526__auto__ = (function (){var statearr_12147 = (f__5525__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5525__auto__.cljs$core$IFn$_invoke$arity$0() : f__5525__auto__.call(null));(statearr_12147[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5524__auto___12148);
return statearr_12147;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5526__auto__);
}));
return out;
});
partition = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition__2.call(this,n,ch);
case 3:
return partition__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition.cljs$core$IFn$_invoke$arity$2 = partition__2;
partition.cljs$core$IFn$_invoke$arity$3 = partition__3;
return partition;
})()
;
/**
* Returns a channel that will contain vectors of items taken from ch. New
* vectors will be created whenever (f itm) returns a value that differs from
* the previous item's (f itm).
* 
* The output channel is unbuffered, unless buf-or-n is given
*/
cljs.core.async.partition_by = (function() {
var partition_by = null;
var partition_by__2 = (function (f,ch){return partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
});
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5524__auto___12307 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5525__auto__ = (function (){var switch__5509__auto__ = (function (state_12277){var state_val_12278 = (state_12277[1]);if((state_val_12278 === 1))
{var inst_12236 = [];var inst_12237 = inst_12236;var inst_12238 = cljs.core.constant$keyword$44;var state_12277__$1 = (function (){var statearr_12279 = state_12277;(statearr_12279[7] = inst_12237);
(statearr_12279[8] = inst_12238);
return statearr_12279;
})();var statearr_12280_12308 = state_12277__$1;(statearr_12280_12308[2] = null);
(statearr_12280_12308[1] = 2);
return cljs.core.constant$keyword$25;
} else
{if((state_val_12278 === 2))
{var state_12277__$1 = state_12277;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12277__$1,4,ch);
} else
{if((state_val_12278 === 3))
{var inst_12275 = (state_12277[2]);var state_12277__$1 = state_12277;return cljs.core.async.impl.ioc_helpers.return_chan(state_12277__$1,inst_12275);
} else
{if((state_val_12278 === 4))
{var inst_12241 = (state_12277[9]);var inst_12241__$1 = (state_12277[2]);var inst_12242 = (inst_12241__$1 == null);var inst_12243 = cljs.core.not(inst_12242);var state_12277__$1 = (function (){var statearr_12281 = state_12277;(statearr_12281[9] = inst_12241__$1);
return statearr_12281;
})();if(inst_12243)
{var statearr_12282_12309 = state_12277__$1;(statearr_12282_12309[1] = 5);
} else
{var statearr_12283_12310 = state_12277__$1;(statearr_12283_12310[1] = 6);
}
return cljs.core.constant$keyword$25;
} else
{if((state_val_12278 === 5))
{var inst_12241 = (state_12277[9]);var inst_12238 = (state_12277[8]);var inst_12245 = (state_12277[10]);var inst_12245__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_12241) : f.call(null,inst_12241));var inst_12246 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_12245__$1,inst_12238);var inst_12247 = cljs.core.keyword_identical_QMARK_(inst_12238,cljs.core.constant$keyword$44);var inst_12248 = (inst_12246) || (inst_12247);var state_12277__$1 = (function (){var statearr_12284 = state_12277;(statearr_12284[10] = inst_12245__$1);
return statearr_12284;
})();if(cljs.core.truth_(inst_12248))
{var statearr_12285_12311 = state_12277__$1;(statearr_12285_12311[1] = 8);
} else
{var statearr_12286_12312 = state_12277__$1;(statearr_12286_12312[1] = 9);
}
return cljs.core.constant$keyword$25;
} else
{if((state_val_12278 === 6))
{var inst_12237 = (state_12277[7]);var inst_12262 = inst_12237.length;var inst_12263 = (inst_12262 > 0);var state_12277__$1 = state_12277;if(cljs.core.truth_(inst_12263))
{var statearr_12288_12313 = state_12277__$1;(statearr_12288_12313[1] = 12);
} else
{var statearr_12289_12314 = state_12277__$1;(statearr_12289_12314[1] = 13);
}
return cljs.core.constant$keyword$25;
} else
{if((state_val_12278 === 7))
{var inst_12273 = (state_12277[2]);var state_12277__$1 = state_12277;var statearr_12290_12315 = state_12277__$1;(statearr_12290_12315[2] = inst_12273);
(statearr_12290_12315[1] = 3);
return cljs.core.constant$keyword$25;
} else
{if((state_val_12278 === 8))
{var inst_12241 = (state_12277[9]);var inst_12237 = (state_12277[7]);var inst_12245 = (state_12277[10]);var inst_12250 = inst_12237.push(inst_12241);var tmp12287 = inst_12237;var inst_12237__$1 = tmp12287;var inst_12238 = inst_12245;var state_12277__$1 = (function (){var statearr_12291 = state_12277;(statearr_12291[7] = inst_12237__$1);
(statearr_12291[8] = inst_12238);
(statearr_12291[11] = inst_12250);
return statearr_12291;
})();var statearr_12292_12316 = state_12277__$1;(statearr_12292_12316[2] = null);
(statearr_12292_12316[1] = 2);
return cljs.core.constant$keyword$25;
} else
{if((state_val_12278 === 9))
{var inst_12237 = (state_12277[7]);var inst_12253 = cljs.core.vec(inst_12237);var state_12277__$1 = state_12277;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12277__$1,11,out,inst_12253);
} else
{if((state_val_12278 === 10))
{var inst_12260 = (state_12277[2]);var state_12277__$1 = state_12277;var statearr_12293_12317 = state_12277__$1;(statearr_12293_12317[2] = inst_12260);
(statearr_12293_12317[1] = 7);
return cljs.core.constant$keyword$25;
} else
{if((state_val_12278 === 11))
{var inst_12241 = (state_12277[9]);var inst_12245 = (state_12277[10]);var inst_12255 = (state_12277[2]);var inst_12256 = [];var inst_12257 = inst_12256.push(inst_12241);var inst_12237 = inst_12256;var inst_12238 = inst_12245;var state_12277__$1 = (function (){var statearr_12294 = state_12277;(statearr_12294[12] = inst_12257);
(statearr_12294[13] = inst_12255);
(statearr_12294[7] = inst_12237);
(statearr_12294[8] = inst_12238);
return statearr_12294;
})();var statearr_12295_12318 = state_12277__$1;(statearr_12295_12318[2] = null);
(statearr_12295_12318[1] = 2);
return cljs.core.constant$keyword$25;
} else
{if((state_val_12278 === 12))
{var inst_12237 = (state_12277[7]);var inst_12265 = cljs.core.vec(inst_12237);var state_12277__$1 = state_12277;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12277__$1,15,out,inst_12265);
} else
{if((state_val_12278 === 13))
{var state_12277__$1 = state_12277;var statearr_12296_12319 = state_12277__$1;(statearr_12296_12319[2] = null);
(statearr_12296_12319[1] = 14);
return cljs.core.constant$keyword$25;
} else
{if((state_val_12278 === 14))
{var inst_12270 = (state_12277[2]);var inst_12271 = cljs.core.async.close_BANG_(out);var state_12277__$1 = (function (){var statearr_12297 = state_12277;(statearr_12297[14] = inst_12270);
return statearr_12297;
})();var statearr_12298_12320 = state_12277__$1;(statearr_12298_12320[2] = inst_12271);
(statearr_12298_12320[1] = 7);
return cljs.core.constant$keyword$25;
} else
{if((state_val_12278 === 15))
{var inst_12267 = (state_12277[2]);var state_12277__$1 = state_12277;var statearr_12299_12321 = state_12277__$1;(statearr_12299_12321[2] = inst_12267);
(statearr_12299_12321[1] = 14);
return cljs.core.constant$keyword$25;
} else
{return null;
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
});return ((function (switch__5509__auto__){
return (function() {
var state_machine__5510__auto__ = null;
var state_machine__5510__auto____0 = (function (){var statearr_12303 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12303[0] = state_machine__5510__auto__);
(statearr_12303[1] = 1);
return statearr_12303;
});
var state_machine__5510__auto____1 = (function (state_12277){while(true){
var ret_value__5511__auto__ = (function (){try{while(true){
var result__5512__auto__ = switch__5509__auto__(state_12277);if(cljs.core.keyword_identical_QMARK_(result__5512__auto__,cljs.core.constant$keyword$25))
{{
continue;
}
} else
{return result__5512__auto__;
}
break;
}
}catch (e12304){if((e12304 instanceof Object))
{var ex__5513__auto__ = e12304;var statearr_12305_12322 = state_12277;(statearr_12305_12322[5] = ex__5513__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_12277);
return cljs.core.constant$keyword$25;
} else
{if(cljs.core.constant$keyword$6)
{throw e12304;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5511__auto__,cljs.core.constant$keyword$25))
{{
var G__12323 = state_12277;
state_12277 = G__12323;
continue;
}
} else
{return ret_value__5511__auto__;
}
break;
}
});
state_machine__5510__auto__ = function(state_12277){
switch(arguments.length){
case 0:
return state_machine__5510__auto____0.call(this);
case 1:
return state_machine__5510__auto____1.call(this,state_12277);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5510__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5510__auto____0;
state_machine__5510__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5510__auto____1;
return state_machine__5510__auto__;
})()
;})(switch__5509__auto__))
})();var state__5526__auto__ = (function (){var statearr_12306 = (f__5525__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5525__auto__.cljs$core$IFn$_invoke$arity$0() : f__5525__auto__.call(null));(statearr_12306[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5524__auto___12307);
return statearr_12306;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5526__auto__);
}));
return out;
});
partition_by = function(f,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition_by__2.call(this,f,ch);
case 3:
return partition_by__3.call(this,f,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition_by.cljs$core$IFn$_invoke$arity$2 = partition_by__2;
partition_by.cljs$core$IFn$_invoke$arity$3 = partition_by__3;
return partition_by;
})()
;
