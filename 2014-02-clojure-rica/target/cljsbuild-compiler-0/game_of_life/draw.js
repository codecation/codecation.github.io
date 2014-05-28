// Compiled by ClojureScript 0.0-2156
goog.provide('game_of_life.draw');
goog.require('cljs.core');
goog.require('game_of_life.game');
goog.require('game_of_life.game');
game_of_life.draw.cell_size_in_pixels = 10;
game_of_life.draw.board_width_in_cells = 50;
game_of_life.draw.board_size_in_pixels = (game_of_life.draw.cell_size_in_pixels * game_of_life.draw.board_width_in_cells);
game_of_life.draw.current_run_id = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(0);
game_of_life.draw.board_update_delay = 70;
game_of_life.draw.random_density = 0.15;
game_of_life.draw.glider = cljs.core.PersistentHashSet.fromArray([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [3,2], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,2], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,1], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,3], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,3], null)], true);
game_of_life.draw.make_context = (function make_context(){var canvas = document.getElementById("game-of-life-canvas");var context = canvas.getContext("2d");canvas.width = game_of_life.draw.board_size_in_pixels;
canvas.height = game_of_life.draw.board_size_in_pixels;
context.fillStyle = "rgb(0, 0, 0)";
return context;
});
game_of_life.draw.clear_board = (function clear_board(context){return context.clearRect(0,0,game_of_life.draw.board_size_in_pixels,game_of_life.draw.board_size_in_pixels);
});
game_of_life.draw.draw_living_cell = (function draw_living_cell(x,y,context){return context.fillRect((game_of_life.draw.cell_size_in_pixels * x),(game_of_life.draw.cell_size_in_pixels * y),game_of_life.draw.cell_size_in_pixels,game_of_life.draw.cell_size_in_pixels);
});
game_of_life.draw.draw = (function draw(living_cells,context){game_of_life.draw.clear_board(context);
var seq__8659 = cljs.core.seq(living_cells);var chunk__8660 = null;var count__8661 = 0;var i__8662 = 0;while(true){
if((i__8662 < count__8661))
{var vec__8663 = chunk__8660.cljs$core$IIndexed$_nth$arity$2(null,i__8662);var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8663,0,null);var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8663,1,null);game_of_life.draw.draw_living_cell(x,y,context);
{
var G__8665 = seq__8659;
var G__8666 = chunk__8660;
var G__8667 = count__8661;
var G__8668 = (i__8662 + 1);
seq__8659 = G__8665;
chunk__8660 = G__8666;
count__8661 = G__8667;
i__8662 = G__8668;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__8659);if(temp__4092__auto__)
{var seq__8659__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(seq__8659__$1))
{var c__4151__auto__ = cljs.core.chunk_first(seq__8659__$1);{
var G__8669 = cljs.core.chunk_rest(seq__8659__$1);
var G__8670 = c__4151__auto__;
var G__8671 = cljs.core.count(c__4151__auto__);
var G__8672 = 0;
seq__8659 = G__8669;
chunk__8660 = G__8670;
count__8661 = G__8671;
i__8662 = G__8672;
continue;
}
} else
{var vec__8664 = cljs.core.first(seq__8659__$1);var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8664,0,null);var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8664,1,null);game_of_life.draw.draw_living_cell(x,y,context);
{
var G__8673 = cljs.core.next(seq__8659__$1);
var G__8674 = null;
var G__8675 = 0;
var G__8676 = 0;
seq__8659 = G__8673;
chunk__8660 = G__8674;
count__8661 = G__8675;
i__8662 = G__8676;
continue;
}
}
} else
{return null;
}
}
break;
}
});
game_of_life.draw.run = (function run(board,context,this_run_id){if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this_run_id,cljs.core.deref(game_of_life.draw.current_run_id)))
{game_of_life.draw.draw(board,context);
return setTimeout((function (){return run(game_of_life.game.advance(board),context,this_run_id);
}),game_of_life.draw.board_update_delay);
} else
{return null;
}
});
game_of_life.draw.random_cells = (function random_cells(){var number_of_cells = ((game_of_life.draw.random_density * game_of_life.draw.board_width_in_cells) * game_of_life.draw.board_width_in_cells);var random_location_fn = ((function (number_of_cells){
return (function (){return cljs.core.repeatedly.cljs$core$IFn$_invoke$arity$2(2,((function (number_of_cells){
return (function (){return cljs.core.rand_int(game_of_life.draw.board_width_in_cells);
});})(number_of_cells))
);
});})(number_of_cells))
;return cljs.core.set(cljs.core.repeatedly.cljs$core$IFn$_invoke$arity$2(number_of_cells,random_location_fn));
});
game_of_life.draw.start = (function start(living_cells){cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(game_of_life.draw.current_run_id,cljs.core.inc);
return game_of_life.draw.run(living_cells,game_of_life.draw.make_context(),cljs.core.deref(game_of_life.draw.current_run_id));
});
game_of_life.draw.start_glider = (function start_glider(){return game_of_life.draw.start(game_of_life.draw.glider);
});
goog.exportSymbol('game_of_life.draw.start_glider', game_of_life.draw.start_glider);
game_of_life.draw.start_random = (function start_random(){return game_of_life.draw.start(game_of_life.draw.random_cells());
});
goog.exportSymbol('game_of_life.draw.start_random', game_of_life.draw.start_random);
