// Compiled by ClojureScript 0.0-3165 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
goog.require('cljs.repl');
goog.require('figwheel.client.heads_up');
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),args], null));

return args;
});
figwheel.client.console_print = (function figwheel$client$console_print(args){
console.log.apply(console,cljs.core.into_array.call(null,args));

return args;
});
figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

return cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__25735__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__25735 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__25736__i = 0, G__25736__a = new Array(arguments.length -  0);
while (G__25736__i < G__25736__a.length) {G__25736__a[G__25736__i] = arguments[G__25736__i + 0]; ++G__25736__i;}
  args = new cljs.core.IndexedSeq(G__25736__a,0);
} 
return G__25735__delegate.call(this,args);};
G__25735.cljs$lang$maxFixedArity = 0;
G__25735.cljs$lang$applyTo = (function (arglist__25737){
var args = cljs.core.seq(arglist__25737);
return G__25735__delegate(args);
});
G__25735.cljs$core$IFn$_invoke$arity$variadic = G__25735__delegate;
return G__25735;
})()
;
});
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel$client$get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__25738){
var map__25740 = p__25738;
var map__25740__$1 = ((cljs.core.seq_QMARK_.call(null,map__25740))?cljs.core.apply.call(null,cljs.core.hash_map,map__25740):map__25740);
var class$ = cljs.core.get.call(null,map__25740__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var message = cljs.core.get.call(null,map__25740__$1,new cljs.core.Keyword(null,"message","message",-406056002));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__17856__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__17856__auto__)){
return or__17856__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__17844__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__17844__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__17844__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__21542__auto___25869 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21542__auto___25869,ch){
return (function (){
var f__21543__auto__ = (function (){var switch__21486__auto__ = ((function (c__21542__auto___25869,ch){
return (function (state_25843){
var state_val_25844 = (state_25843[(1)]);
if((state_val_25844 === (7))){
var inst_25839 = (state_25843[(2)]);
var state_25843__$1 = state_25843;
var statearr_25845_25870 = state_25843__$1;
(statearr_25845_25870[(2)] = inst_25839);

(statearr_25845_25870[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25844 === (1))){
var state_25843__$1 = state_25843;
var statearr_25846_25871 = state_25843__$1;
(statearr_25846_25871[(2)] = null);

(statearr_25846_25871[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25844 === (4))){
var inst_25807 = (state_25843[(7)]);
var inst_25807__$1 = (state_25843[(2)]);
var state_25843__$1 = (function (){var statearr_25847 = state_25843;
(statearr_25847[(7)] = inst_25807__$1);

return statearr_25847;
})();
if(cljs.core.truth_(inst_25807__$1)){
var statearr_25848_25872 = state_25843__$1;
(statearr_25848_25872[(1)] = (5));

} else {
var statearr_25849_25873 = state_25843__$1;
(statearr_25849_25873[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25844 === (13))){
var state_25843__$1 = state_25843;
var statearr_25850_25874 = state_25843__$1;
(statearr_25850_25874[(2)] = null);

(statearr_25850_25874[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25844 === (6))){
var state_25843__$1 = state_25843;
var statearr_25851_25875 = state_25843__$1;
(statearr_25851_25875[(2)] = null);

(statearr_25851_25875[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25844 === (3))){
var inst_25841 = (state_25843[(2)]);
var state_25843__$1 = state_25843;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25843__$1,inst_25841);
} else {
if((state_val_25844 === (12))){
var inst_25814 = (state_25843[(8)]);
var inst_25827 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_25814);
var inst_25828 = cljs.core.first.call(null,inst_25827);
var inst_25829 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_25828);
var inst_25830 = console.warn("Figwheel: Not loading code with warnings - ",inst_25829);
var state_25843__$1 = state_25843;
var statearr_25852_25876 = state_25843__$1;
(statearr_25852_25876[(2)] = inst_25830);

(statearr_25852_25876[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25844 === (2))){
var state_25843__$1 = state_25843;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25843__$1,(4),ch);
} else {
if((state_val_25844 === (11))){
var inst_25823 = (state_25843[(2)]);
var state_25843__$1 = state_25843;
var statearr_25853_25877 = state_25843__$1;
(statearr_25853_25877[(2)] = inst_25823);

(statearr_25853_25877[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25844 === (9))){
var inst_25813 = (state_25843[(9)]);
var inst_25825 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_25813,opts);
var state_25843__$1 = state_25843;
if(inst_25825){
var statearr_25854_25878 = state_25843__$1;
(statearr_25854_25878[(1)] = (12));

} else {
var statearr_25855_25879 = state_25843__$1;
(statearr_25855_25879[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25844 === (5))){
var inst_25807 = (state_25843[(7)]);
var inst_25813 = (state_25843[(9)]);
var inst_25809 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_25810 = (new cljs.core.PersistentArrayMap(null,2,inst_25809,null));
var inst_25811 = (new cljs.core.PersistentHashSet(null,inst_25810,null));
var inst_25812 = figwheel.client.focus_msgs.call(null,inst_25811,inst_25807);
var inst_25813__$1 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_25812);
var inst_25814 = cljs.core.first.call(null,inst_25812);
var inst_25815 = figwheel.client.reload_file_state_QMARK_.call(null,inst_25813__$1,opts);
var state_25843__$1 = (function (){var statearr_25856 = state_25843;
(statearr_25856[(8)] = inst_25814);

(statearr_25856[(9)] = inst_25813__$1);

return statearr_25856;
})();
if(cljs.core.truth_(inst_25815)){
var statearr_25857_25880 = state_25843__$1;
(statearr_25857_25880[(1)] = (8));

} else {
var statearr_25858_25881 = state_25843__$1;
(statearr_25858_25881[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25844 === (14))){
var inst_25833 = (state_25843[(2)]);
var state_25843__$1 = state_25843;
var statearr_25859_25882 = state_25843__$1;
(statearr_25859_25882[(2)] = inst_25833);

(statearr_25859_25882[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25844 === (10))){
var inst_25835 = (state_25843[(2)]);
var state_25843__$1 = (function (){var statearr_25860 = state_25843;
(statearr_25860[(10)] = inst_25835);

return statearr_25860;
})();
var statearr_25861_25883 = state_25843__$1;
(statearr_25861_25883[(2)] = null);

(statearr_25861_25883[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25844 === (8))){
var inst_25814 = (state_25843[(8)]);
var inst_25817 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_25818 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_25814);
var inst_25819 = cljs.core.async.timeout.call(null,(1000));
var inst_25820 = [inst_25818,inst_25819];
var inst_25821 = (new cljs.core.PersistentVector(null,2,(5),inst_25817,inst_25820,null));
var state_25843__$1 = state_25843;
return cljs.core.async.ioc_alts_BANG_.call(null,state_25843__$1,(11),inst_25821);
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
});})(c__21542__auto___25869,ch))
;
return ((function (switch__21486__auto__,c__21542__auto___25869,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__21487__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__21487__auto____0 = (function (){
var statearr_25865 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_25865[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__21487__auto__);

(statearr_25865[(1)] = (1));

return statearr_25865;
});
var figwheel$client$file_reloader_plugin_$_state_machine__21487__auto____1 = (function (state_25843){
while(true){
var ret_value__21488__auto__ = (function (){try{while(true){
var result__21489__auto__ = switch__21486__auto__.call(null,state_25843);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21489__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21489__auto__;
}
break;
}
}catch (e25866){if((e25866 instanceof Object)){
var ex__21490__auto__ = e25866;
var statearr_25867_25884 = state_25843;
(statearr_25867_25884[(5)] = ex__21490__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25843);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25866;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21488__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25885 = state_25843;
state_25843 = G__25885;
continue;
} else {
return ret_value__21488__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__21487__auto__ = function(state_25843){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__21487__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__21487__auto____1.call(this,state_25843);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__21487__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__21487__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__21487__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__21487__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__21487__auto__;
})()
;})(switch__21486__auto__,c__21542__auto___25869,ch))
})();
var state__21544__auto__ = (function (){var statearr_25868 = f__21543__auto__.call(null);
(statearr_25868[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21542__auto___25869);

return statearr_25868;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21544__auto__);
});})(c__21542__auto___25869,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__25886_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__25886_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
var base_path_25893 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_25893){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,result_handler){
try{var _STAR_print_fn_STAR_25891 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_25892 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_fn_STAR_25891,_STAR_print_newline_STAR_25892,base_path_25893){
return (function() { 
var G__25894__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__25894 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__25895__i = 0, G__25895__a = new Array(arguments.length -  0);
while (G__25895__i < G__25895__a.length) {G__25895__a[G__25895__i] = arguments[G__25895__i + 0]; ++G__25895__i;}
  args = new cljs.core.IndexedSeq(G__25895__a,0);
} 
return G__25894__delegate.call(this,args);};
G__25894.cljs$lang$maxFixedArity = 0;
G__25894.cljs$lang$applyTo = (function (arglist__25896){
var args = cljs.core.seq(arglist__25896);
return G__25894__delegate(args);
});
G__25894.cljs$core$IFn$_invoke$arity$variadic = G__25894__delegate;
return G__25894;
})()
;})(_STAR_print_fn_STAR_25891,_STAR_print_newline_STAR_25892,base_path_25893))
;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"value","value",305978217),[cljs.core.str(eval(code))].join('')], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_25892;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_25891;
}}catch (e25890){if((e25890 instanceof Error)){
var e = e25890;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_25893], null));
} else {
var e = e25890;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_25893))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = {};
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__25897){
var map__25902 = p__25897;
var map__25902__$1 = ((cljs.core.seq_QMARK_.call(null,map__25902))?cljs.core.apply.call(null,cljs.core.hash_map,map__25902):map__25902);
var opts = map__25902__$1;
var build_id = cljs.core.get.call(null,map__25902__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__25902,map__25902__$1,opts,build_id){
return (function (p__25903){
var vec__25904 = p__25903;
var map__25905 = cljs.core.nth.call(null,vec__25904,(0),null);
var map__25905__$1 = ((cljs.core.seq_QMARK_.call(null,map__25905))?cljs.core.apply.call(null,cljs.core.hash_map,map__25905):map__25905);
var msg = map__25905__$1;
var msg_name = cljs.core.get.call(null,map__25905__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__25904,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),((function (vec__25904,map__25905,map__25905__$1,msg,msg_name,_,map__25902,map__25902__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__25904,map__25905,map__25905__$1,msg,msg_name,_,map__25902,map__25902__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__25902,map__25902__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__25909){
var vec__25910 = p__25909;
var map__25911 = cljs.core.nth.call(null,vec__25910,(0),null);
var map__25911__$1 = ((cljs.core.seq_QMARK_.call(null,map__25911))?cljs.core.apply.call(null,cljs.core.hash_map,map__25911):map__25911);
var msg = map__25911__$1;
var msg_name = cljs.core.get.call(null,map__25911__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__25910,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__25912){
var map__25920 = p__25912;
var map__25920__$1 = ((cljs.core.seq_QMARK_.call(null,map__25920))?cljs.core.apply.call(null,cljs.core.hash_map,map__25920):map__25920);
var on_compile_fail = cljs.core.get.call(null,map__25920__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
var on_compile_warning = cljs.core.get.call(null,map__25920__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
return ((function (map__25920,map__25920__$1,on_compile_fail,on_compile_warning){
return (function (p__25921){
var vec__25922 = p__25921;
var map__25923 = cljs.core.nth.call(null,vec__25922,(0),null);
var map__25923__$1 = ((cljs.core.seq_QMARK_.call(null,map__25923))?cljs.core.apply.call(null,cljs.core.hash_map,map__25923):map__25923);
var msg = map__25923__$1;
var msg_name = cljs.core.get.call(null,map__25923__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__25922,(1));
var pred__25924 = cljs.core._EQ_;
var expr__25925 = msg_name;
if(cljs.core.truth_(pred__25924.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__25925))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__25924.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__25925))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__25920,map__25920__$1,on_compile_fail,on_compile_warning))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__21542__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21542__auto__,msg_hist,msg_names,msg){
return (function (){
var f__21543__auto__ = (function (){var switch__21486__auto__ = ((function (c__21542__auto__,msg_hist,msg_names,msg){
return (function (state_26126){
var state_val_26127 = (state_26126[(1)]);
if((state_val_26127 === (7))){
var inst_26060 = (state_26126[(2)]);
var state_26126__$1 = state_26126;
var statearr_26128_26169 = state_26126__$1;
(statearr_26128_26169[(2)] = inst_26060);

(statearr_26128_26169[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26127 === (20))){
var inst_26088 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_26126__$1 = state_26126;
if(inst_26088){
var statearr_26129_26170 = state_26126__$1;
(statearr_26129_26170[(1)] = (22));

} else {
var statearr_26130_26171 = state_26126__$1;
(statearr_26130_26171[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26127 === (27))){
var inst_26100 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_26101 = figwheel.client.heads_up.display_warning.call(null,inst_26100);
var state_26126__$1 = state_26126;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26126__$1,(30),inst_26101);
} else {
if((state_val_26127 === (1))){
var inst_26048 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_26126__$1 = state_26126;
if(cljs.core.truth_(inst_26048)){
var statearr_26131_26172 = state_26126__$1;
(statearr_26131_26172[(1)] = (2));

} else {
var statearr_26132_26173 = state_26126__$1;
(statearr_26132_26173[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26127 === (24))){
var inst_26116 = (state_26126[(2)]);
var state_26126__$1 = state_26126;
var statearr_26133_26174 = state_26126__$1;
(statearr_26133_26174[(2)] = inst_26116);

(statearr_26133_26174[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26127 === (4))){
var inst_26124 = (state_26126[(2)]);
var state_26126__$1 = state_26126;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26126__$1,inst_26124);
} else {
if((state_val_26127 === (15))){
var inst_26076 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_26077 = figwheel.client.format_messages.call(null,inst_26076);
var inst_26078 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_26079 = figwheel.client.heads_up.display_error.call(null,inst_26077,inst_26078);
var state_26126__$1 = state_26126;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26126__$1,(18),inst_26079);
} else {
if((state_val_26127 === (21))){
var inst_26118 = (state_26126[(2)]);
var state_26126__$1 = state_26126;
var statearr_26134_26175 = state_26126__$1;
(statearr_26134_26175[(2)] = inst_26118);

(statearr_26134_26175[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26127 === (31))){
var inst_26107 = figwheel.client.heads_up.flash_loaded.call(null);
var state_26126__$1 = state_26126;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26126__$1,(34),inst_26107);
} else {
if((state_val_26127 === (32))){
var state_26126__$1 = state_26126;
var statearr_26135_26176 = state_26126__$1;
(statearr_26135_26176[(2)] = null);

(statearr_26135_26176[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26127 === (33))){
var inst_26112 = (state_26126[(2)]);
var state_26126__$1 = state_26126;
var statearr_26136_26177 = state_26126__$1;
(statearr_26136_26177[(2)] = inst_26112);

(statearr_26136_26177[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26127 === (13))){
var inst_26066 = (state_26126[(2)]);
var inst_26067 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_26068 = figwheel.client.format_messages.call(null,inst_26067);
var inst_26069 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_26070 = figwheel.client.heads_up.display_error.call(null,inst_26068,inst_26069);
var state_26126__$1 = (function (){var statearr_26137 = state_26126;
(statearr_26137[(7)] = inst_26066);

return statearr_26137;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26126__$1,(14),inst_26070);
} else {
if((state_val_26127 === (22))){
var inst_26090 = figwheel.client.heads_up.clear.call(null);
var state_26126__$1 = state_26126;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26126__$1,(25),inst_26090);
} else {
if((state_val_26127 === (29))){
var inst_26114 = (state_26126[(2)]);
var state_26126__$1 = state_26126;
var statearr_26138_26178 = state_26126__$1;
(statearr_26138_26178[(2)] = inst_26114);

(statearr_26138_26178[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26127 === (6))){
var inst_26056 = figwheel.client.heads_up.clear.call(null);
var state_26126__$1 = state_26126;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26126__$1,(9),inst_26056);
} else {
if((state_val_26127 === (28))){
var inst_26105 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_26126__$1 = state_26126;
if(inst_26105){
var statearr_26139_26179 = state_26126__$1;
(statearr_26139_26179[(1)] = (31));

} else {
var statearr_26140_26180 = state_26126__$1;
(statearr_26140_26180[(1)] = (32));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26127 === (25))){
var inst_26092 = (state_26126[(2)]);
var inst_26093 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_26094 = figwheel.client.heads_up.display_warning.call(null,inst_26093);
var state_26126__$1 = (function (){var statearr_26141 = state_26126;
(statearr_26141[(8)] = inst_26092);

return statearr_26141;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26126__$1,(26),inst_26094);
} else {
if((state_val_26127 === (34))){
var inst_26109 = (state_26126[(2)]);
var state_26126__$1 = state_26126;
var statearr_26142_26181 = state_26126__$1;
(statearr_26142_26181[(2)] = inst_26109);

(statearr_26142_26181[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26127 === (17))){
var inst_26120 = (state_26126[(2)]);
var state_26126__$1 = state_26126;
var statearr_26143_26182 = state_26126__$1;
(statearr_26143_26182[(2)] = inst_26120);

(statearr_26143_26182[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26127 === (3))){
var inst_26062 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_26126__$1 = state_26126;
if(inst_26062){
var statearr_26144_26183 = state_26126__$1;
(statearr_26144_26183[(1)] = (10));

} else {
var statearr_26145_26184 = state_26126__$1;
(statearr_26145_26184[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26127 === (12))){
var inst_26122 = (state_26126[(2)]);
var state_26126__$1 = state_26126;
var statearr_26146_26185 = state_26126__$1;
(statearr_26146_26185[(2)] = inst_26122);

(statearr_26146_26185[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26127 === (2))){
var inst_26050 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_26126__$1 = state_26126;
if(cljs.core.truth_(inst_26050)){
var statearr_26147_26186 = state_26126__$1;
(statearr_26147_26186[(1)] = (5));

} else {
var statearr_26148_26187 = state_26126__$1;
(statearr_26148_26187[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26127 === (23))){
var inst_26098 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_26126__$1 = state_26126;
if(inst_26098){
var statearr_26149_26188 = state_26126__$1;
(statearr_26149_26188[(1)] = (27));

} else {
var statearr_26150_26189 = state_26126__$1;
(statearr_26150_26189[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26127 === (19))){
var inst_26085 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_26086 = figwheel.client.heads_up.append_message.call(null,inst_26085);
var state_26126__$1 = state_26126;
var statearr_26151_26190 = state_26126__$1;
(statearr_26151_26190[(2)] = inst_26086);

(statearr_26151_26190[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26127 === (11))){
var inst_26074 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_26126__$1 = state_26126;
if(inst_26074){
var statearr_26152_26191 = state_26126__$1;
(statearr_26152_26191[(1)] = (15));

} else {
var statearr_26153_26192 = state_26126__$1;
(statearr_26153_26192[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26127 === (9))){
var inst_26058 = (state_26126[(2)]);
var state_26126__$1 = state_26126;
var statearr_26154_26193 = state_26126__$1;
(statearr_26154_26193[(2)] = inst_26058);

(statearr_26154_26193[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26127 === (5))){
var inst_26052 = figwheel.client.heads_up.flash_loaded.call(null);
var state_26126__$1 = state_26126;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26126__$1,(8),inst_26052);
} else {
if((state_val_26127 === (14))){
var inst_26072 = (state_26126[(2)]);
var state_26126__$1 = state_26126;
var statearr_26155_26194 = state_26126__$1;
(statearr_26155_26194[(2)] = inst_26072);

(statearr_26155_26194[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26127 === (26))){
var inst_26096 = (state_26126[(2)]);
var state_26126__$1 = state_26126;
var statearr_26156_26195 = state_26126__$1;
(statearr_26156_26195[(2)] = inst_26096);

(statearr_26156_26195[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26127 === (16))){
var inst_26083 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_26126__$1 = state_26126;
if(inst_26083){
var statearr_26157_26196 = state_26126__$1;
(statearr_26157_26196[(1)] = (19));

} else {
var statearr_26158_26197 = state_26126__$1;
(statearr_26158_26197[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26127 === (30))){
var inst_26103 = (state_26126[(2)]);
var state_26126__$1 = state_26126;
var statearr_26159_26198 = state_26126__$1;
(statearr_26159_26198[(2)] = inst_26103);

(statearr_26159_26198[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26127 === (10))){
var inst_26064 = figwheel.client.heads_up.clear.call(null);
var state_26126__$1 = state_26126;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26126__$1,(13),inst_26064);
} else {
if((state_val_26127 === (18))){
var inst_26081 = (state_26126[(2)]);
var state_26126__$1 = state_26126;
var statearr_26160_26199 = state_26126__$1;
(statearr_26160_26199[(2)] = inst_26081);

(statearr_26160_26199[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26127 === (8))){
var inst_26054 = (state_26126[(2)]);
var state_26126__$1 = state_26126;
var statearr_26161_26200 = state_26126__$1;
(statearr_26161_26200[(2)] = inst_26054);

(statearr_26161_26200[(1)] = (7));


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
});})(c__21542__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__21486__auto__,c__21542__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21487__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21487__auto____0 = (function (){
var statearr_26165 = [null,null,null,null,null,null,null,null,null];
(statearr_26165[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21487__auto__);

(statearr_26165[(1)] = (1));

return statearr_26165;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21487__auto____1 = (function (state_26126){
while(true){
var ret_value__21488__auto__ = (function (){try{while(true){
var result__21489__auto__ = switch__21486__auto__.call(null,state_26126);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21489__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21489__auto__;
}
break;
}
}catch (e26166){if((e26166 instanceof Object)){
var ex__21490__auto__ = e26166;
var statearr_26167_26201 = state_26126;
(statearr_26167_26201[(5)] = ex__21490__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26126);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26166;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21488__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26202 = state_26126;
state_26126 = G__26202;
continue;
} else {
return ret_value__21488__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21487__auto__ = function(state_26126){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21487__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21487__auto____1.call(this,state_26126);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21487__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21487__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21487__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21487__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21487__auto__;
})()
;})(switch__21486__auto__,c__21542__auto__,msg_hist,msg_names,msg))
})();
var state__21544__auto__ = (function (){var statearr_26168 = f__21543__auto__.call(null);
(statearr_26168[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21542__auto__);

return statearr_26168;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21544__auto__);
});})(c__21542__auto__,msg_hist,msg_names,msg))
);

return c__21542__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__21542__auto___26265 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21542__auto___26265,ch){
return (function (){
var f__21543__auto__ = (function (){var switch__21486__auto__ = ((function (c__21542__auto___26265,ch){
return (function (state_26248){
var state_val_26249 = (state_26248[(1)]);
if((state_val_26249 === (8))){
var inst_26240 = (state_26248[(2)]);
var state_26248__$1 = (function (){var statearr_26250 = state_26248;
(statearr_26250[(7)] = inst_26240);

return statearr_26250;
})();
var statearr_26251_26266 = state_26248__$1;
(statearr_26251_26266[(2)] = null);

(statearr_26251_26266[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26249 === (7))){
var inst_26244 = (state_26248[(2)]);
var state_26248__$1 = state_26248;
var statearr_26252_26267 = state_26248__$1;
(statearr_26252_26267[(2)] = inst_26244);

(statearr_26252_26267[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26249 === (6))){
var state_26248__$1 = state_26248;
var statearr_26253_26268 = state_26248__$1;
(statearr_26253_26268[(2)] = null);

(statearr_26253_26268[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26249 === (5))){
var inst_26236 = (state_26248[(8)]);
var inst_26238 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_26236);
var state_26248__$1 = state_26248;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26248__$1,(8),inst_26238);
} else {
if((state_val_26249 === (4))){
var inst_26236 = (state_26248[(8)]);
var inst_26236__$1 = (state_26248[(2)]);
var state_26248__$1 = (function (){var statearr_26254 = state_26248;
(statearr_26254[(8)] = inst_26236__$1);

return statearr_26254;
})();
if(cljs.core.truth_(inst_26236__$1)){
var statearr_26255_26269 = state_26248__$1;
(statearr_26255_26269[(1)] = (5));

} else {
var statearr_26256_26270 = state_26248__$1;
(statearr_26256_26270[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26249 === (3))){
var inst_26246 = (state_26248[(2)]);
var state_26248__$1 = state_26248;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26248__$1,inst_26246);
} else {
if((state_val_26249 === (2))){
var state_26248__$1 = state_26248;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26248__$1,(4),ch);
} else {
if((state_val_26249 === (1))){
var state_26248__$1 = state_26248;
var statearr_26257_26271 = state_26248__$1;
(statearr_26257_26271[(2)] = null);

(statearr_26257_26271[(1)] = (2));


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
});})(c__21542__auto___26265,ch))
;
return ((function (switch__21486__auto__,c__21542__auto___26265,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__21487__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__21487__auto____0 = (function (){
var statearr_26261 = [null,null,null,null,null,null,null,null,null];
(statearr_26261[(0)] = figwheel$client$heads_up_plugin_$_state_machine__21487__auto__);

(statearr_26261[(1)] = (1));

return statearr_26261;
});
var figwheel$client$heads_up_plugin_$_state_machine__21487__auto____1 = (function (state_26248){
while(true){
var ret_value__21488__auto__ = (function (){try{while(true){
var result__21489__auto__ = switch__21486__auto__.call(null,state_26248);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21489__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21489__auto__;
}
break;
}
}catch (e26262){if((e26262 instanceof Object)){
var ex__21490__auto__ = e26262;
var statearr_26263_26272 = state_26248;
(statearr_26263_26272[(5)] = ex__21490__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26248);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26262;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21488__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26273 = state_26248;
state_26248 = G__26273;
continue;
} else {
return ret_value__21488__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__21487__auto__ = function(state_26248){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__21487__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__21487__auto____1.call(this,state_26248);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__21487__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__21487__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__21487__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__21487__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__21487__auto__;
})()
;})(switch__21486__auto__,c__21542__auto___26265,ch))
})();
var state__21544__auto__ = (function (){var statearr_26264 = f__21543__auto__.call(null);
(statearr_26264[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21542__auto___26265);

return statearr_26264;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21544__auto__);
});})(c__21542__auto___26265,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__21542__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21542__auto__){
return (function (){
var f__21543__auto__ = (function (){var switch__21486__auto__ = ((function (c__21542__auto__){
return (function (state_26294){
var state_val_26295 = (state_26294[(1)]);
if((state_val_26295 === (2))){
var inst_26291 = (state_26294[(2)]);
var inst_26292 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_26294__$1 = (function (){var statearr_26296 = state_26294;
(statearr_26296[(7)] = inst_26291);

return statearr_26296;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26294__$1,inst_26292);
} else {
if((state_val_26295 === (1))){
var inst_26289 = cljs.core.async.timeout.call(null,(3000));
var state_26294__$1 = state_26294;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26294__$1,(2),inst_26289);
} else {
return null;
}
}
});})(c__21542__auto__))
;
return ((function (switch__21486__auto__,c__21542__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__21487__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__21487__auto____0 = (function (){
var statearr_26300 = [null,null,null,null,null,null,null,null];
(statearr_26300[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__21487__auto__);

(statearr_26300[(1)] = (1));

return statearr_26300;
});
var figwheel$client$enforce_project_plugin_$_state_machine__21487__auto____1 = (function (state_26294){
while(true){
var ret_value__21488__auto__ = (function (){try{while(true){
var result__21489__auto__ = switch__21486__auto__.call(null,state_26294);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21489__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21489__auto__;
}
break;
}
}catch (e26301){if((e26301 instanceof Object)){
var ex__21490__auto__ = e26301;
var statearr_26302_26304 = state_26294;
(statearr_26302_26304[(5)] = ex__21490__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26294);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26301;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21488__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26305 = state_26294;
state_26294 = G__26305;
continue;
} else {
return ret_value__21488__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__21487__auto__ = function(state_26294){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__21487__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__21487__auto____1.call(this,state_26294);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__21487__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__21487__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__21487__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__21487__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__21487__auto__;
})()
;})(switch__21486__auto__,c__21542__auto__))
})();
var state__21544__auto__ = (function (){var statearr_26303 = f__21543__auto__.call(null);
(statearr_26303[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21542__auto__);

return statearr_26303;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21544__auto__);
});})(c__21542__auto__))
);

return c__21542__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = (function figwheel$client$default_on_jsload(url){
if(cljs.core.truth_((function (){var and__17844__auto__ = figwheel.client.utils.html_env_QMARK_.call(null);
if(cljs.core.truth_(and__17844__auto__)){
return ("CustomEvent" in window);
} else {
return and__17844__auto__;
}
})())){
return document.body.dispatchEvent((new CustomEvent("figwheel.js-reload",(function (){var obj26309 = {"detail":url};
return obj26309;
})())));
} else {
return null;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__26310){
var map__26316 = p__26310;
var map__26316__$1 = ((cljs.core.seq_QMARK_.call(null,map__26316))?cljs.core.apply.call(null,cljs.core.hash_map,map__26316):map__26316);
var ed = map__26316__$1;
var cause = cljs.core.get.call(null,map__26316__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
var exception_data = cljs.core.get.call(null,map__26316__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var formatted_exception = cljs.core.get.call(null,map__26316__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__26317_26321 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__26318_26322 = null;
var count__26319_26323 = (0);
var i__26320_26324 = (0);
while(true){
if((i__26320_26324 < count__26319_26323)){
var msg_26325 = cljs.core._nth.call(null,chunk__26318_26322,i__26320_26324);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_26325);

var G__26326 = seq__26317_26321;
var G__26327 = chunk__26318_26322;
var G__26328 = count__26319_26323;
var G__26329 = (i__26320_26324 + (1));
seq__26317_26321 = G__26326;
chunk__26318_26322 = G__26327;
count__26319_26323 = G__26328;
i__26320_26324 = G__26329;
continue;
} else {
var temp__4126__auto___26330 = cljs.core.seq.call(null,seq__26317_26321);
if(temp__4126__auto___26330){
var seq__26317_26331__$1 = temp__4126__auto___26330;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26317_26331__$1)){
var c__18641__auto___26332 = cljs.core.chunk_first.call(null,seq__26317_26331__$1);
var G__26333 = cljs.core.chunk_rest.call(null,seq__26317_26331__$1);
var G__26334 = c__18641__auto___26332;
var G__26335 = cljs.core.count.call(null,c__18641__auto___26332);
var G__26336 = (0);
seq__26317_26321 = G__26333;
chunk__26318_26322 = G__26334;
count__26319_26323 = G__26335;
i__26320_26324 = G__26336;
continue;
} else {
var msg_26337 = cljs.core.first.call(null,seq__26317_26331__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_26337);

var G__26338 = cljs.core.next.call(null,seq__26317_26331__$1);
var G__26339 = null;
var G__26340 = (0);
var G__26341 = (0);
seq__26317_26321 = G__26338;
chunk__26318_26322 = G__26339;
count__26319_26323 = G__26340;
i__26320_26324 = G__26341;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Error on file "),cljs.core.str(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", line "),cljs.core.str(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", column "),cljs.core.str(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__26342){
var map__26344 = p__26342;
var map__26344__$1 = ((cljs.core.seq_QMARK_.call(null,map__26344))?cljs.core.apply.call(null,cljs.core.hash_map,map__26344):map__26344);
var w = map__26344__$1;
var message = cljs.core.get.call(null,map__26344__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str("Figwheel: Compile Warning - "),cljs.core.str(message)].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"load-unchanged-files","load-unchanged-files",-1561468704),new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[true,figwheel.client.default_on_compile_warning,figwheel.client.default_on_jsload,figwheel.client.default_on_compile_fail,false,true,[cljs.core.str("ws://"),cljs.core.str((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str("/figwheel-ws")].join(''),figwheel.client.default_before_load,false,(100),true,false,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__17844__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__17844__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__17844__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__26351 = cljs.core.seq.call(null,plugins);
var chunk__26352 = null;
var count__26353 = (0);
var i__26354 = (0);
while(true){
if((i__26354 < count__26353)){
var vec__26355 = cljs.core._nth.call(null,chunk__26352,i__26354);
var k = cljs.core.nth.call(null,vec__26355,(0),null);
var plugin = cljs.core.nth.call(null,vec__26355,(1),null);
if(cljs.core.truth_(plugin)){
var pl_26357 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__26351,chunk__26352,count__26353,i__26354,pl_26357,vec__26355,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_26357.call(null,msg_hist);
});})(seq__26351,chunk__26352,count__26353,i__26354,pl_26357,vec__26355,k,plugin))
);
} else {
}

var G__26358 = seq__26351;
var G__26359 = chunk__26352;
var G__26360 = count__26353;
var G__26361 = (i__26354 + (1));
seq__26351 = G__26358;
chunk__26352 = G__26359;
count__26353 = G__26360;
i__26354 = G__26361;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__26351);
if(temp__4126__auto__){
var seq__26351__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26351__$1)){
var c__18641__auto__ = cljs.core.chunk_first.call(null,seq__26351__$1);
var G__26362 = cljs.core.chunk_rest.call(null,seq__26351__$1);
var G__26363 = c__18641__auto__;
var G__26364 = cljs.core.count.call(null,c__18641__auto__);
var G__26365 = (0);
seq__26351 = G__26362;
chunk__26352 = G__26363;
count__26353 = G__26364;
i__26354 = G__26365;
continue;
} else {
var vec__26356 = cljs.core.first.call(null,seq__26351__$1);
var k = cljs.core.nth.call(null,vec__26356,(0),null);
var plugin = cljs.core.nth.call(null,vec__26356,(1),null);
if(cljs.core.truth_(plugin)){
var pl_26366 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__26351,chunk__26352,count__26353,i__26354,pl_26366,vec__26356,k,plugin,seq__26351__$1,temp__4126__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_26366.call(null,msg_hist);
});})(seq__26351,chunk__26352,count__26353,i__26354,pl_26366,vec__26356,k,plugin,seq__26351__$1,temp__4126__auto__))
);
} else {
}

var G__26367 = cljs.core.next.call(null,seq__26351__$1);
var G__26368 = null;
var G__26369 = (0);
var G__26370 = (0);
seq__26351 = G__26367;
chunk__26352 = G__26368;
count__26353 = G__26369;
i__26354 = G__26370;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function() {
var figwheel$client$start = null;
var figwheel$client$start__0 = (function (){
return figwheel$client$start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});
var figwheel$client$start__1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

return figwheel.client.socket.open.call(null,system_options);
}));
}
}
});
figwheel$client$start = function(opts){
switch(arguments.length){
case 0:
return figwheel$client$start__0.call(this);
case 1:
return figwheel$client$start__1.call(this,opts);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$start.cljs$core$IFn$_invoke$arity$0 = figwheel$client$start__0;
figwheel$client$start.cljs$core$IFn$_invoke$arity$1 = figwheel$client$start__1;
return figwheel$client$start;
})()
;
figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
/**
 * @param {...*} var_args
 */
figwheel.client.watch_and_reload = (function() { 
var figwheel$client$watch_and_reload__delegate = function (p__26371){
var map__26373 = p__26371;
var map__26373__$1 = ((cljs.core.seq_QMARK_.call(null,map__26373))?cljs.core.apply.call(null,cljs.core.hash_map,map__26373):map__26373);
var opts = map__26373__$1;
return figwheel.client.start.call(null,opts);
};
var figwheel$client$watch_and_reload = function (var_args){
var p__26371 = null;
if (arguments.length > 0) {
var G__26374__i = 0, G__26374__a = new Array(arguments.length -  0);
while (G__26374__i < G__26374__a.length) {G__26374__a[G__26374__i] = arguments[G__26374__i + 0]; ++G__26374__i;}
  p__26371 = new cljs.core.IndexedSeq(G__26374__a,0);
} 
return figwheel$client$watch_and_reload__delegate.call(this,p__26371);};
figwheel$client$watch_and_reload.cljs$lang$maxFixedArity = 0;
figwheel$client$watch_and_reload.cljs$lang$applyTo = (function (arglist__26375){
var p__26371 = cljs.core.seq(arglist__26375);
return figwheel$client$watch_and_reload__delegate(p__26371);
});
figwheel$client$watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = figwheel$client$watch_and_reload__delegate;
return figwheel$client$watch_and_reload;
})()
;

//# sourceMappingURL=client.js.map?rel=1430425799449