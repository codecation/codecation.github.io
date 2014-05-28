// Compiled by ClojureScript 0.0-2156
goog.provide('maze.core');
goog.require('cljs.core');
goog.require('clojure.set');
goog.require('clojure.set');
maze.core.neighbors = (function neighbors(p__6020){var vec__6028 = p__6020;var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6028,0,null);var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6028,1,null);return cljs.core.set((function (){var iter__4120__auto__ = (function iter__6029(s__6030){return (new cljs.core.LazySeq(null,(function (){var s__6030__$1 = s__6030;while(true){
var temp__4092__auto__ = cljs.core.seq(s__6030__$1);if(temp__4092__auto__)
{var xs__4579__auto__ = temp__4092__auto__;var dx = cljs.core.first(xs__4579__auto__);var iterys__4116__auto__ = ((function (s__6030__$1,dx,xs__4579__auto__,temp__4092__auto__){
return (function iter__6031(s__6032){return (new cljs.core.LazySeq(null,((function (s__6030__$1,dx,xs__4579__auto__,temp__4092__auto__){
return (function (){var s__6032__$1 = s__6032;while(true){
var temp__4092__auto____$1 = cljs.core.seq(s__6032__$1);if(temp__4092__auto____$1)
{var s__6032__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_(s__6032__$2))
{var c__4118__auto__ = cljs.core.chunk_first(s__6032__$2);var size__4119__auto__ = cljs.core.count(c__4118__auto__);var b__6034 = cljs.core.chunk_buffer(size__4119__auto__);if((function (){var i__6033 = 0;while(true){
if((i__6033 < size__4119__auto__))
{var dy = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4118__auto__,i__6033);if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(Math.abs(dx),Math.abs(dy)))
{cljs.core.chunk_append(b__6034,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x + dx),(y + dy)], null));
{
var G__6035 = (i__6033 + 1);
i__6033 = G__6035;
continue;
}
} else
{{
var G__6036 = (i__6033 + 1);
i__6033 = G__6036;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__6034),iter__6031(cljs.core.chunk_rest(s__6032__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__6034),null);
}
} else
{var dy = cljs.core.first(s__6032__$2);if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(Math.abs(dx),Math.abs(dy)))
{return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x + dx),(y + dy)], null),iter__6031(cljs.core.rest(s__6032__$2)));
} else
{{
var G__6037 = cljs.core.rest(s__6032__$2);
s__6032__$1 = G__6037;
continue;
}
}
}
} else
{return null;
}
break;
}
});})(s__6030__$1,dx,xs__4579__auto__,temp__4092__auto__))
,null,null));
});})(s__6030__$1,dx,xs__4579__auto__,temp__4092__auto__))
;var fs__4117__auto__ = cljs.core.seq(iterys__4116__auto__(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [-1,0,1], null)));if(fs__4117__auto__)
{return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4117__auto__,iter__6029(cljs.core.rest(s__6030__$1)));
} else
{{
var G__6038 = cljs.core.rest(s__6030__$1);
s__6030__$1 = G__6038;
continue;
}
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4120__auto__(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [-1,0,1], null));
})());
});
maze.core.unvisited_neighbors = (function unvisited_neighbors(p__6039){var map__6041 = p__6039;var map__6041__$1 = ((cljs.core.seq_QMARK_(map__6041))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__6041):map__6041);var visited = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6041__$1,cljs.core.constant$keyword$16);var location = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6041__$1,cljs.core.constant$keyword$17);return cljs.core.set(cljs.core.remove(visited,maze.core.neighbors(location)));
});
maze.core.blocked_by_wall_QMARK_ = (function blocked_by_wall_QMARK_(location,neighbor,walls){return (walls.cljs$core$IFn$_invoke$arity$1 ? walls.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashSet.fromArray([neighbor,location], true)) : walls.call(null,cljs.core.PersistentHashSet.fromArray([neighbor,location], true)));
});
maze.core.reachable_neighbors = (function reachable_neighbors(p__6043){var map__6045 = p__6043;var map__6045__$1 = ((cljs.core.seq_QMARK_(map__6045))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__6045):map__6045);var walls = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6045__$1,cljs.core.constant$keyword$18);var visited = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6045__$1,cljs.core.constant$keyword$16);var location = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6045__$1,cljs.core.constant$keyword$17);return cljs.core.set(cljs.core.remove((function (p1__6042_SHARP_){return maze.core.blocked_by_wall_QMARK_(location,p1__6042_SHARP_,walls);
}),maze.core.unvisited_neighbors(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$17,location,cljs.core.constant$keyword$16,visited], null))));
});
maze.core.walls_around_location = (function walls_around_location(location){return cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$3(cljs.core.conj,cljs.core.PersistentHashSet.EMPTY,location),maze.core.neighbors(location));
});
maze.core.add_inner_walls = (function add_inner_walls(p__6046){var map__6054 = p__6046;var map__6054__$1 = ((cljs.core.seq_QMARK_(map__6054))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__6054):map__6054);var doors = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6054__$1,cljs.core.constant$keyword$19);var outer_walls = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6054__$1,cljs.core.constant$keyword$20);var size = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.flatten(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.seq,outer_walls)));var locations = (function (){var iter__4120__auto__ = ((function (size){
return (function iter__6055(s__6056){return (new cljs.core.LazySeq(null,((function (size){
return (function (){var s__6056__$1 = s__6056;while(true){
var temp__4092__auto__ = cljs.core.seq(s__6056__$1);if(temp__4092__auto__)
{var xs__4579__auto__ = temp__4092__auto__;var x = cljs.core.first(xs__4579__auto__);var iterys__4116__auto__ = ((function (s__6056__$1,x,xs__4579__auto__,temp__4092__auto__,size){
return (function iter__6057(s__6058){return (new cljs.core.LazySeq(null,((function (s__6056__$1,x,xs__4579__auto__,temp__4092__auto__,size){
return (function (){var s__6058__$1 = s__6058;while(true){
var temp__4092__auto____$1 = cljs.core.seq(s__6058__$1);if(temp__4092__auto____$1)
{var s__6058__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_(s__6058__$2))
{var c__4118__auto__ = cljs.core.chunk_first(s__6058__$2);var size__4119__auto__ = cljs.core.count(c__4118__auto__);var b__6060 = cljs.core.chunk_buffer(size__4119__auto__);if((function (){var i__6059 = 0;while(true){
if((i__6059 < size__4119__auto__))
{var y = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4118__auto__,i__6059);cljs.core.chunk_append(b__6060,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));
{
var G__6061 = (i__6059 + 1);
i__6059 = G__6061;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__6060),iter__6057(cljs.core.chunk_rest(s__6058__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__6060),null);
}
} else
{var y = cljs.core.first(s__6058__$2);return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),iter__6057(cljs.core.rest(s__6058__$2)));
}
} else
{return null;
}
break;
}
});})(s__6056__$1,x,xs__4579__auto__,temp__4092__auto__,size))
,null,null));
});})(s__6056__$1,x,xs__4579__auto__,temp__4092__auto__,size))
;var fs__4117__auto__ = cljs.core.seq(iterys__4116__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(size)));if(fs__4117__auto__)
{return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4117__auto__,iter__6055(cljs.core.rest(s__6056__$1)));
} else
{{
var G__6062 = cljs.core.rest(s__6056__$1);
s__6056__$1 = G__6062;
continue;
}
}
} else
{return null;
}
break;
}
});})(size))
,null,null));
});})(size))
;return iter__4120__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(size));
})();var all_walls = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.into,cljs.core.PersistentHashSet.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(maze.core.walls_around_location,locations));return clojure.set.difference.cljs$core$IFn$_invoke$arity$2(all_walls,doors);
});
maze.core.random_reachable_neighbor = (function random_reachable_neighbor(p__6063){var map__6065 = p__6063;var map__6065__$1 = ((cljs.core.seq_QMARK_(map__6065))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__6065):map__6065);var walls = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6065__$1,cljs.core.constant$keyword$18);var visited = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6065__$1,cljs.core.constant$keyword$16);var location = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6065__$1,cljs.core.constant$keyword$17);return cljs.core.rand_nth(cljs.core.seq(maze.core.reachable_neighbors(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$17,location,cljs.core.constant$keyword$16,visited,cljs.core.constant$keyword$18,walls], null))));
});
maze.core.search_maze = (function search_maze(p__6066){var map__6092 = p__6066;var map__6092__$1 = ((cljs.core.seq_QMARK_(map__6092))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__6092):map__6092);var maze__$1 = map__6092__$1;var finished_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6092__$1,cljs.core.constant$keyword$21);var next_location_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__6092__$1,cljs.core.constant$keyword$22,maze.core.random_reachable_neighbor);var update_channel = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6092__$1,cljs.core.constant$keyword$23);var doors = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__6092__$1,cljs.core.constant$keyword$19,cljs.core.PersistentHashSet.EMPTY);var walls = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6092__$1,cljs.core.constant$keyword$18);var visited = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__6092__$1,cljs.core.constant$keyword$16,cljs.core.PersistentHashSet.EMPTY);var path = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__6092__$1,cljs.core.constant$keyword$24,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,0], null)], null));var current_location = cljs.core.peek(path);if(cljs.core.truth_(update_channel))
{var c__5524__auto___6117 = (cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 ? cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1) : cljs.core.async.chan.call(null,1));(cljs.core.async.impl.dispatch.run.cljs$core$IFn$_invoke$arity$1 ? cljs.core.async.impl.dispatch.run.cljs$core$IFn$_invoke$arity$1((function (){var f__5525__auto__ = (function (){var switch__5509__auto__ = (function (state_6096){var state_val_6097 = (state_6096[1]);if((state_val_6097 === 2))
{var inst_6094 = (state_6096[2]);var state_6096__$1 = state_6096;return (cljs.core.async.impl.ioc_helpers.return_chan.cljs$core$IFn$_invoke$arity$2 ? cljs.core.async.impl.ioc_helpers.return_chan.cljs$core$IFn$_invoke$arity$2(state_6096__$1,inst_6094) : cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_6096__$1,inst_6094));
} else
{if((state_val_6097 === 1))
{var state_6096__$1 = state_6096;return (cljs.core.async.impl.ioc_helpers.put_BANG_.cljs$core$IFn$_invoke$arity$4 ? cljs.core.async.impl.ioc_helpers.put_BANG_.cljs$core$IFn$_invoke$arity$4(state_6096__$1,2,update_channel,maze__$1) : cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_6096__$1,2,update_channel,maze__$1));
} else
{return null;
}
}
});return ((function (switch__5509__auto__){
return (function() {
var state_machine__5510__auto__ = null;
var state_machine__5510__auto____0 = (function (){var statearr_6101 = [null,null,null,null,null,null,null];(statearr_6101[0] = state_machine__5510__auto__);
(statearr_6101[1] = 1);
return statearr_6101;
});
var state_machine__5510__auto____1 = (function (state_6096){while(true){
var ret_value__5511__auto__ = (function (){try{while(true){
var result__5512__auto__ = switch__5509__auto__(state_6096);if(cljs.core.keyword_identical_QMARK_(result__5512__auto__,cljs.core.constant$keyword$25))
{{
continue;
}
} else
{return result__5512__auto__;
}
break;
}
}catch (e6102){if((e6102 instanceof Object))
{var ex__5513__auto__ = e6102;var statearr_6103_6118 = state_6096;(statearr_6103_6118[5] = ex__5513__auto__);
(cljs.core.async.impl.ioc_helpers.process_exception.cljs$core$IFn$_invoke$arity$1 ? cljs.core.async.impl.ioc_helpers.process_exception.cljs$core$IFn$_invoke$arity$1(state_6096) : cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_6096));
return cljs.core.constant$keyword$25;
} else
{if(cljs.core.constant$keyword$6)
{throw e6102;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5511__auto__,cljs.core.constant$keyword$25))
{{
var G__6119 = state_6096;
state_6096 = G__6119;
continue;
}
} else
{return ret_value__5511__auto__;
}
break;
}
});
state_machine__5510__auto__ = function(state_6096){
switch(arguments.length){
case 0:
return state_machine__5510__auto____0.call(this);
case 1:
return state_machine__5510__auto____1.call(this,state_6096);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5510__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5510__auto____0;
state_machine__5510__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5510__auto____1;
return state_machine__5510__auto__;
})()
;})(switch__5509__auto__))
})();var state__5526__auto__ = (function (){var statearr_6104 = (f__5525__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5525__auto__.cljs$core$IFn$_invoke$arity$0() : f__5525__auto__.call(null));(statearr_6104[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5524__auto___6117);
return statearr_6104;
})();return (cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.cljs$core$IFn$_invoke$arity$1 ? cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.cljs$core$IFn$_invoke$arity$1(state__5526__auto__) : cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5526__auto__));
})) : cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5525__auto__ = (function (){var switch__5509__auto__ = (function (state_6096){var state_val_6097 = (state_6096[1]);if((state_val_6097 === 2))
{var inst_6094 = (state_6096[2]);var state_6096__$1 = state_6096;return (cljs.core.async.impl.ioc_helpers.return_chan.cljs$core$IFn$_invoke$arity$2 ? cljs.core.async.impl.ioc_helpers.return_chan.cljs$core$IFn$_invoke$arity$2(state_6096__$1,inst_6094) : cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_6096__$1,inst_6094));
} else
{if((state_val_6097 === 1))
{var state_6096__$1 = state_6096;return (cljs.core.async.impl.ioc_helpers.put_BANG_.cljs$core$IFn$_invoke$arity$4 ? cljs.core.async.impl.ioc_helpers.put_BANG_.cljs$core$IFn$_invoke$arity$4(state_6096__$1,2,update_channel,maze__$1) : cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_6096__$1,2,update_channel,maze__$1));
} else
{return null;
}
}
});return ((function (switch__5509__auto__){
return (function() {
var state_machine__5510__auto__ = null;
var state_machine__5510__auto____0 = (function (){var statearr_6101 = [null,null,null,null,null,null,null];(statearr_6101[0] = state_machine__5510__auto__);
(statearr_6101[1] = 1);
return statearr_6101;
});
var state_machine__5510__auto____1 = (function (state_6096){while(true){
var ret_value__5511__auto__ = (function (){try{while(true){
var result__5512__auto__ = switch__5509__auto__(state_6096);if(cljs.core.keyword_identical_QMARK_(result__5512__auto__,cljs.core.constant$keyword$25))
{{
continue;
}
} else
{return result__5512__auto__;
}
break;
}
}catch (e6102){if((e6102 instanceof Object))
{var ex__5513__auto__ = e6102;var statearr_6103_6120 = state_6096;(statearr_6103_6120[5] = ex__5513__auto__);
(cljs.core.async.impl.ioc_helpers.process_exception.cljs$core$IFn$_invoke$arity$1 ? cljs.core.async.impl.ioc_helpers.process_exception.cljs$core$IFn$_invoke$arity$1(state_6096) : cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_6096));
return cljs.core.constant$keyword$25;
} else
{if(cljs.core.constant$keyword$6)
{throw e6102;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5511__auto__,cljs.core.constant$keyword$25))
{{
var G__6121 = state_6096;
state_6096 = G__6121;
continue;
}
} else
{return ret_value__5511__auto__;
}
break;
}
});
state_machine__5510__auto__ = function(state_6096){
switch(arguments.length){
case 0:
return state_machine__5510__auto____0.call(this);
case 1:
return state_machine__5510__auto____1.call(this,state_6096);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5510__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5510__auto____0;
state_machine__5510__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5510__auto____1;
return state_machine__5510__auto__;
})()
;})(switch__5509__auto__))
})();var state__5526__auto__ = (function (){var statearr_6104 = (f__5525__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5525__auto__.cljs$core$IFn$_invoke$arity$0() : f__5525__auto__.call(null));(statearr_6104[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5524__auto___6117);
return statearr_6104;
})();return (cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.cljs$core$IFn$_invoke$arity$1 ? cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.cljs$core$IFn$_invoke$arity$1(state__5526__auto__) : cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5526__auto__));
})));
} else
{}
if(cljs.core.truth_((finished_fn.cljs$core$IFn$_invoke$arity$1 ? finished_fn.cljs$core$IFn$_invoke$arity$1(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([maze__$1,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$24,path], null)], 0))) : finished_fn.call(null,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([maze__$1,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$24,path], null)], 0))))))
{if(cljs.core.truth_(update_channel))
{var c__5524__auto___6122 = (cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 ? cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1) : cljs.core.async.chan.call(null,1));(cljs.core.async.impl.dispatch.run.cljs$core$IFn$_invoke$arity$1 ? cljs.core.async.impl.dispatch.run.cljs$core$IFn$_invoke$arity$1((function (){var f__5525__auto__ = (function (){var switch__5509__auto__ = (function (state_6108){var state_val_6109 = (state_6108[1]);if((state_val_6109 === 2))
{var inst_6106 = (state_6108[2]);var state_6108__$1 = state_6108;return (cljs.core.async.impl.ioc_helpers.return_chan.cljs$core$IFn$_invoke$arity$2 ? cljs.core.async.impl.ioc_helpers.return_chan.cljs$core$IFn$_invoke$arity$2(state_6108__$1,inst_6106) : cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_6108__$1,inst_6106));
} else
{if((state_val_6109 === 1))
{var state_6108__$1 = state_6108;return (cljs.core.async.impl.ioc_helpers.put_BANG_.cljs$core$IFn$_invoke$arity$4 ? cljs.core.async.impl.ioc_helpers.put_BANG_.cljs$core$IFn$_invoke$arity$4(state_6108__$1,2,update_channel,cljs.core.constant$keyword$26) : cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_6108__$1,2,update_channel,cljs.core.constant$keyword$26));
} else
{return null;
}
}
});return ((function (switch__5509__auto__){
return (function() {
var state_machine__5510__auto__ = null;
var state_machine__5510__auto____0 = (function (){var statearr_6113 = [null,null,null,null,null,null,null];(statearr_6113[0] = state_machine__5510__auto__);
(statearr_6113[1] = 1);
return statearr_6113;
});
var state_machine__5510__auto____1 = (function (state_6108){while(true){
var ret_value__5511__auto__ = (function (){try{while(true){
var result__5512__auto__ = switch__5509__auto__(state_6108);if(cljs.core.keyword_identical_QMARK_(result__5512__auto__,cljs.core.constant$keyword$25))
{{
continue;
}
} else
{return result__5512__auto__;
}
break;
}
}catch (e6114){if((e6114 instanceof Object))
{var ex__5513__auto__ = e6114;var statearr_6115_6123 = state_6108;(statearr_6115_6123[5] = ex__5513__auto__);
(cljs.core.async.impl.ioc_helpers.process_exception.cljs$core$IFn$_invoke$arity$1 ? cljs.core.async.impl.ioc_helpers.process_exception.cljs$core$IFn$_invoke$arity$1(state_6108) : cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_6108));
return cljs.core.constant$keyword$25;
} else
{if(cljs.core.constant$keyword$6)
{throw e6114;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5511__auto__,cljs.core.constant$keyword$25))
{{
var G__6124 = state_6108;
state_6108 = G__6124;
continue;
}
} else
{return ret_value__5511__auto__;
}
break;
}
});
state_machine__5510__auto__ = function(state_6108){
switch(arguments.length){
case 0:
return state_machine__5510__auto____0.call(this);
case 1:
return state_machine__5510__auto____1.call(this,state_6108);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5510__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5510__auto____0;
state_machine__5510__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5510__auto____1;
return state_machine__5510__auto__;
})()
;})(switch__5509__auto__))
})();var state__5526__auto__ = (function (){var statearr_6116 = (f__5525__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5525__auto__.cljs$core$IFn$_invoke$arity$0() : f__5525__auto__.call(null));(statearr_6116[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5524__auto___6122);
return statearr_6116;
})();return (cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.cljs$core$IFn$_invoke$arity$1 ? cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.cljs$core$IFn$_invoke$arity$1(state__5526__auto__) : cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5526__auto__));
})) : cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5525__auto__ = (function (){var switch__5509__auto__ = (function (state_6108){var state_val_6109 = (state_6108[1]);if((state_val_6109 === 2))
{var inst_6106 = (state_6108[2]);var state_6108__$1 = state_6108;return (cljs.core.async.impl.ioc_helpers.return_chan.cljs$core$IFn$_invoke$arity$2 ? cljs.core.async.impl.ioc_helpers.return_chan.cljs$core$IFn$_invoke$arity$2(state_6108__$1,inst_6106) : cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_6108__$1,inst_6106));
} else
{if((state_val_6109 === 1))
{var state_6108__$1 = state_6108;return (cljs.core.async.impl.ioc_helpers.put_BANG_.cljs$core$IFn$_invoke$arity$4 ? cljs.core.async.impl.ioc_helpers.put_BANG_.cljs$core$IFn$_invoke$arity$4(state_6108__$1,2,update_channel,cljs.core.constant$keyword$26) : cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_6108__$1,2,update_channel,cljs.core.constant$keyword$26));
} else
{return null;
}
}
});return ((function (switch__5509__auto__){
return (function() {
var state_machine__5510__auto__ = null;
var state_machine__5510__auto____0 = (function (){var statearr_6113 = [null,null,null,null,null,null,null];(statearr_6113[0] = state_machine__5510__auto__);
(statearr_6113[1] = 1);
return statearr_6113;
});
var state_machine__5510__auto____1 = (function (state_6108){while(true){
var ret_value__5511__auto__ = (function (){try{while(true){
var result__5512__auto__ = switch__5509__auto__(state_6108);if(cljs.core.keyword_identical_QMARK_(result__5512__auto__,cljs.core.constant$keyword$25))
{{
continue;
}
} else
{return result__5512__auto__;
}
break;
}
}catch (e6114){if((e6114 instanceof Object))
{var ex__5513__auto__ = e6114;var statearr_6115_6125 = state_6108;(statearr_6115_6125[5] = ex__5513__auto__);
(cljs.core.async.impl.ioc_helpers.process_exception.cljs$core$IFn$_invoke$arity$1 ? cljs.core.async.impl.ioc_helpers.process_exception.cljs$core$IFn$_invoke$arity$1(state_6108) : cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_6108));
return cljs.core.constant$keyword$25;
} else
{if(cljs.core.constant$keyword$6)
{throw e6114;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5511__auto__,cljs.core.constant$keyword$25))
{{
var G__6126 = state_6108;
state_6108 = G__6126;
continue;
}
} else
{return ret_value__5511__auto__;
}
break;
}
});
state_machine__5510__auto__ = function(state_6108){
switch(arguments.length){
case 0:
return state_machine__5510__auto____0.call(this);
case 1:
return state_machine__5510__auto____1.call(this,state_6108);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5510__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5510__auto____0;
state_machine__5510__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5510__auto____1;
return state_machine__5510__auto__;
})()
;})(switch__5509__auto__))
})();var state__5526__auto__ = (function (){var statearr_6116 = (f__5525__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5525__auto__.cljs$core$IFn$_invoke$arity$0() : f__5525__auto__.call(null));(statearr_6116[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5524__auto___6122);
return statearr_6116;
})();return (cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.cljs$core$IFn$_invoke$arity$1 ? cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.cljs$core$IFn$_invoke$arity$1(state__5526__auto__) : cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5526__auto__));
})));
} else
{}
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([maze__$1,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$18,maze.core.add_inner_walls(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$20,walls,cljs.core.constant$keyword$19,doors], null))], null)], 0));
} else
{var maze__$2 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([maze__$1,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$16,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(visited,current_location)], null)], 0));var temp__4090__auto__ = (next_location_fn.cljs$core$IFn$_invoke$arity$1 ? next_location_fn.cljs$core$IFn$_invoke$arity$1(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([maze__$2,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$17,current_location], null)], 0))) : next_location_fn.call(null,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([maze__$2,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$17,current_location], null)], 0))));if(cljs.core.truth_(temp__4090__auto__))
{var next_location = temp__4090__auto__;return search_maze(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([maze__$2,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$24,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,next_location),cljs.core.constant$keyword$19,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(doors,cljs.core.PersistentHashSet.fromArray([next_location,current_location], true))], null)], 0)));
} else
{return search_maze(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([maze__$2,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$24,cljs.core.pop(path)], null)], 0)));
}
}
});
maze.core.all_locations_visited_QMARK_ = (function all_locations_visited_QMARK_(p__6127){var map__6129 = p__6127;var map__6129__$1 = ((cljs.core.seq_QMARK_(map__6129))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__6129):map__6129);var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6129__$1,cljs.core.constant$keyword$24);return cljs.core.empty_QMARK_(path);
});
maze.core.solved_QMARK_ = (function solved_QMARK_(p__6130){var map__6132 = p__6130;var map__6132__$1 = ((cljs.core.seq_QMARK_(map__6132))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__6132):map__6132);var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6132__$1,cljs.core.constant$keyword$24);var size = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6132__$1,cljs.core.constant$keyword$27);return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.peek(path),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(size - 1),(size - 1)], null));
});
maze.core.outer_walls = (function outer_walls(p__6133){var map__6141 = p__6133;var map__6141__$1 = ((cljs.core.seq_QMARK_(map__6141))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__6141):map__6141);var size = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6141__$1,cljs.core.constant$keyword$27);return cljs.core.set(cljs.core.flatten(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((function (){var iter__4120__auto__ = (function iter__6142(s__6143){return (new cljs.core.LazySeq(null,(function (){var s__6143__$1 = s__6143;while(true){
var temp__4092__auto__ = cljs.core.seq(s__6143__$1);if(temp__4092__auto__)
{var xs__4579__auto__ = temp__4092__auto__;var x = cljs.core.first(xs__4579__auto__);var iterys__4116__auto__ = ((function (s__6143__$1,x,xs__4579__auto__,temp__4092__auto__){
return (function iter__6144(s__6145){return (new cljs.core.LazySeq(null,((function (s__6143__$1,x,xs__4579__auto__,temp__4092__auto__){
return (function (){var s__6145__$1 = s__6145;while(true){
var temp__4092__auto____$1 = cljs.core.seq(s__6145__$1);if(temp__4092__auto____$1)
{var s__6145__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_(s__6145__$2))
{var c__4118__auto__ = cljs.core.chunk_first(s__6145__$2);var size__4119__auto__ = cljs.core.count(c__4118__auto__);var b__6147 = cljs.core.chunk_buffer(size__4119__auto__);if((function (){var i__6146 = 0;while(true){
if((i__6146 < size__4119__auto__))
{var y = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4118__auto__,i__6146);cljs.core.chunk_append(b__6147,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentHashSet.fromArray([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,y], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [-1,y], null)], true),cljs.core.PersistentHashSet.fromArray([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(size - 1),y], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [size,y], null)], true),cljs.core.PersistentHashSet.fromArray([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,0], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,-1], null)], true),cljs.core.PersistentHashSet.fromArray([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,size], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,(size - 1)], null)], true)], null));
{
var G__6148 = (i__6146 + 1);
i__6146 = G__6148;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__6147),iter__6144(cljs.core.chunk_rest(s__6145__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__6147),null);
}
} else
{var y = cljs.core.first(s__6145__$2);return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentHashSet.fromArray([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,y], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [-1,y], null)], true),cljs.core.PersistentHashSet.fromArray([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(size - 1),y], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [size,y], null)], true),cljs.core.PersistentHashSet.fromArray([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,0], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,-1], null)], true),cljs.core.PersistentHashSet.fromArray([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,size], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,(size - 1)], null)], true)], null),iter__6144(cljs.core.rest(s__6145__$2)));
}
} else
{return null;
}
break;
}
});})(s__6143__$1,x,xs__4579__auto__,temp__4092__auto__))
,null,null));
});})(s__6143__$1,x,xs__4579__auto__,temp__4092__auto__))
;var fs__4117__auto__ = cljs.core.seq(iterys__4116__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(size)));if(fs__4117__auto__)
{return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4117__auto__,iter__6142(cljs.core.rest(s__6143__$1)));
} else
{{
var G__6149 = cljs.core.rest(s__6143__$1);
s__6143__$1 = G__6149;
continue;
}
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4120__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(size));
})())));
});
maze.core.generate_maze = (function generate_maze(maze__$1){return maze.core.search_maze(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([maze__$1,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$18,maze.core.outer_walls(maze__$1),cljs.core.constant$keyword$21,maze.core.all_locations_visited_QMARK_], null)], 0)));
});
maze.core.solve_maze = (function solve_maze(maze__$1){return maze.core.search_maze(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([maze__$1,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$21,maze.core.solved_QMARK_], null)], 0)));
});
