// Compiled by ClojureScript 0.0-2156
goog.provide('maze.draw');
goog.require('cljs.core');
maze.draw.maze_size = 20;
maze.draw.cell_size_in_pixels = 25;
maze.draw.maze_size_in_pixels = (maze.draw.maze_size * maze.draw.cell_size_in_pixels);
maze.draw.wall_width_in_pixels = 2;
maze.draw.make_context = (function make_context(){var canvas = document.getElementById("maze-canvas");var context = canvas.getContext("2d");canvas.width = maze.draw.maze_size_in_pixels;
canvas.height = maze.draw.maze_size_in_pixels;
context.fillStyle = "rgb(0, 0, 0)";
context.lineWidth = maze.draw.wall_width_in_pixels;
return context;
});
maze.draw.line = (function line(p__6150){var vec__6155 = p__6150;var vec__6156 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6155,0,null);var x1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6156,0,null);var y1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6156,1,null);var vec__6157 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6155,1,null);var x2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6157,0,null);var y2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6157,1,null);var start_point_x = (function (){var x__3710__auto__ = x1;var y__3711__auto__ = x2;return ((x__3710__auto__ > y__3711__auto__) ? x__3710__auto__ : y__3711__auto__);
})();var start_point_y = (function (){var x__3710__auto__ = y1;var y__3711__auto__ = y2;return ((x__3710__auto__ > y__3711__auto__) ? x__3710__auto__ : y__3711__auto__);
})();var cells_horizontally_adjacent_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x1,x2);var vec__6158 = ((cells_horizontally_adjacent_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(start_point_x + 1),start_point_y], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [start_point_x,(start_point_y + 1)], null));var end_point_x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6158,0,null);var end_point_y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6158,1,null);return new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$28,start_point_x,cljs.core.constant$keyword$29,start_point_y,cljs.core.constant$keyword$30,end_point_x,cljs.core.constant$keyword$31,end_point_y], null);
});
maze.draw.draw_line = (function draw_line(p__6159,context){var map__6162 = p__6159;var map__6162__$1 = ((cljs.core.seq_QMARK_(map__6162))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__6162):map__6162);var y2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6162__$1,cljs.core.constant$keyword$31);var x2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6162__$1,cljs.core.constant$keyword$30);var y1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6162__$1,cljs.core.constant$keyword$29);var x1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6162__$1,cljs.core.constant$keyword$28);var G__6163 = context;G__6163.beginPath();
G__6163.moveTo((x1 * maze.draw.cell_size_in_pixels),(y1 * maze.draw.cell_size_in_pixels));
G__6163.lineTo((x2 * maze.draw.cell_size_in_pixels),(y2 * maze.draw.cell_size_in_pixels));
G__6163.stroke();
return G__6163;
});
maze.draw.set_draw_color = (function set_draw_color(color,context){return context.fillStyle = color;
});
maze.draw.draw_walls = (function draw_walls(walls,context){var lines = cljs.core.map.cljs$core$IFn$_invoke$arity$2(maze.draw.line,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.seq,walls));var seq__6168 = cljs.core.seq(lines);var chunk__6169 = null;var count__6170 = 0;var i__6171 = 0;while(true){
if((i__6171 < count__6170))
{var line = chunk__6169.cljs$core$IIndexed$_nth$arity$2(null,i__6171);maze.draw.draw_line(line,context);
{
var G__6172 = seq__6168;
var G__6173 = chunk__6169;
var G__6174 = count__6170;
var G__6175 = (i__6171 + 1);
seq__6168 = G__6172;
chunk__6169 = G__6173;
count__6170 = G__6174;
i__6171 = G__6175;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__6168);if(temp__4092__auto__)
{var seq__6168__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(seq__6168__$1))
{var c__4151__auto__ = cljs.core.chunk_first(seq__6168__$1);{
var G__6176 = cljs.core.chunk_rest(seq__6168__$1);
var G__6177 = c__4151__auto__;
var G__6178 = cljs.core.count(c__4151__auto__);
var G__6179 = 0;
seq__6168 = G__6176;
chunk__6169 = G__6177;
count__6170 = G__6178;
i__6171 = G__6179;
continue;
}
} else
{var line = cljs.core.first(seq__6168__$1);maze.draw.draw_line(line,context);
{
var G__6180 = cljs.core.next(seq__6168__$1);
var G__6181 = null;
var G__6182 = 0;
var G__6183 = 0;
seq__6168 = G__6180;
chunk__6169 = G__6181;
count__6170 = G__6182;
i__6171 = G__6183;
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
maze.draw.fill_location = (function fill_location(p__6184,context){var vec__6186 = p__6184;var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6186,0,null);var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6186,1,null);return context.fillRect((x * maze.draw.cell_size_in_pixels),(y * maze.draw.cell_size_in_pixels),maze.draw.cell_size_in_pixels,maze.draw.cell_size_in_pixels);
});
maze.draw.draw_locations = (function draw_locations(locations,context){var seq__6191 = cljs.core.seq(locations);var chunk__6192 = null;var count__6193 = 0;var i__6194 = 0;while(true){
if((i__6194 < count__6193))
{var location = chunk__6192.cljs$core$IIndexed$_nth$arity$2(null,i__6194);maze.draw.fill_location(location,context);
{
var G__6195 = seq__6191;
var G__6196 = chunk__6192;
var G__6197 = count__6193;
var G__6198 = (i__6194 + 1);
seq__6191 = G__6195;
chunk__6192 = G__6196;
count__6193 = G__6197;
i__6194 = G__6198;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__6191);if(temp__4092__auto__)
{var seq__6191__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(seq__6191__$1))
{var c__4151__auto__ = cljs.core.chunk_first(seq__6191__$1);{
var G__6199 = cljs.core.chunk_rest(seq__6191__$1);
var G__6200 = c__4151__auto__;
var G__6201 = cljs.core.count(c__4151__auto__);
var G__6202 = 0;
seq__6191 = G__6199;
chunk__6192 = G__6200;
count__6193 = G__6201;
i__6194 = G__6202;
continue;
}
} else
{var location = cljs.core.first(seq__6191__$1);maze.draw.fill_location(location,context);
{
var G__6203 = cljs.core.next(seq__6191__$1);
var G__6204 = null;
var G__6205 = 0;
var G__6206 = 0;
seq__6191 = G__6203;
chunk__6192 = G__6204;
count__6193 = G__6205;
i__6194 = G__6206;
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
maze.draw.update_canvas = (function update_canvas(context,p__6207){var map__6209 = p__6207;var map__6209__$1 = ((cljs.core.seq_QMARK_(map__6209))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__6209):map__6209);var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6209__$1,cljs.core.constant$keyword$24);var visited = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6209__$1,cljs.core.constant$keyword$16);var walls = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6209__$1,cljs.core.constant$keyword$18);maze.draw.set_draw_color("rgb(255, 180, 180)",context);
maze.draw.draw_locations(visited,context);
maze.draw.set_draw_color("rgb(180, 255, 180)",context);
maze.draw.draw_locations(path,context);
maze.draw.set_draw_color("rgb(100, 255, 100)",context);
maze.draw.draw_locations(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.peek(path)], null),context);
maze.draw.set_draw_color("rgb(0,0,0)",context);
return maze.draw.draw_walls(walls,context);
});
maze.draw.clear_canvas = (function clear_canvas(context){var canvas = context.canvas;return context.clearRect(0,0,canvas.width,canvas.height);
});
