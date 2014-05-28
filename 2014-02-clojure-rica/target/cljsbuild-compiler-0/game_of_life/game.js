// Compiled by ClojureScript 0.0-2156
goog.provide('game_of_life.game');
goog.require('cljs.core');
game_of_life.game.neighbors = (function neighbors(p__8677){var vec__8685 = p__8677;var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8685,0,null);var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8685,1,null);return cljs.core.set((function (){var iter__4120__auto__ = (function iter__8686(s__8687){return (new cljs.core.LazySeq(null,(function (){var s__8687__$1 = s__8687;while(true){
var temp__4092__auto__ = cljs.core.seq(s__8687__$1);if(temp__4092__auto__)
{var xs__4579__auto__ = temp__4092__auto__;var dx = cljs.core.first(xs__4579__auto__);var iterys__4116__auto__ = ((function (s__8687__$1,dx,xs__4579__auto__,temp__4092__auto__){
return (function iter__8688(s__8689){return (new cljs.core.LazySeq(null,((function (s__8687__$1,dx,xs__4579__auto__,temp__4092__auto__){
return (function (){var s__8689__$1 = s__8689;while(true){
var temp__4092__auto____$1 = cljs.core.seq(s__8689__$1);if(temp__4092__auto____$1)
{var s__8689__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_(s__8689__$2))
{var c__4118__auto__ = cljs.core.chunk_first(s__8689__$2);var size__4119__auto__ = cljs.core.count(c__4118__auto__);var b__8691 = cljs.core.chunk_buffer(size__4119__auto__);if((function (){var i__8690 = 0;while(true){
if((i__8690 < size__4119__auto__))
{var dy = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4118__auto__,i__8690);if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$variadic(0,dx,cljs.core.array_seq([dy], 0)))
{cljs.core.chunk_append(b__8691,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(dx + x),(dy + y)], null));
{
var G__8692 = (i__8690 + 1);
i__8690 = G__8692;
continue;
}
} else
{{
var G__8693 = (i__8690 + 1);
i__8690 = G__8693;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__8691),iter__8688(cljs.core.chunk_rest(s__8689__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__8691),null);
}
} else
{var dy = cljs.core.first(s__8689__$2);if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$variadic(0,dx,cljs.core.array_seq([dy], 0)))
{return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(dx + x),(dy + y)], null),iter__8688(cljs.core.rest(s__8689__$2)));
} else
{{
var G__8694 = cljs.core.rest(s__8689__$2);
s__8689__$1 = G__8694;
continue;
}
}
}
} else
{return null;
}
break;
}
});})(s__8687__$1,dx,xs__4579__auto__,temp__4092__auto__))
,null,null));
});})(s__8687__$1,dx,xs__4579__auto__,temp__4092__auto__))
;var fs__4117__auto__ = cljs.core.seq(iterys__4116__auto__(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [-1,0,1], null)));if(fs__4117__auto__)
{return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4117__auto__,iter__8686(cljs.core.rest(s__8687__$1)));
} else
{{
var G__8695 = cljs.core.rest(s__8687__$1);
s__8687__$1 = G__8695;
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
/**
* Given a set of living cells and a frequency map of neighbors,
* return the set of cells that survived.
*/
game_of_life.game.should_live_QMARK_ = (function should_live_QMARK_(living_cells,p__8696){var vec__8698 = p__8696;var location = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8698,0,null);var occurrence_count = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8698,1,null);var or__3403__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(occurrence_count,3);if(or__3403__auto__)
{return or__3403__auto__;
} else
{var and__3391__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(occurrence_count,2);if(and__3391__auto__)
{return (living_cells.cljs$core$IFn$_invoke$arity$1 ? living_cells.cljs$core$IFn$_invoke$arity$1(location) : living_cells.call(null,location));
} else
{return and__3391__auto__;
}
}
});
game_of_life.game.advance = (function advance(living_cells){return cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.filter(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(game_of_life.game.should_live_QMARK_,living_cells),cljs.core.frequencies(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$2(game_of_life.game.neighbors,living_cells)))));
});
