// Compiled by ClojureScript 0.0-2156
goog.provide('maze.top_level');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
goog.require('maze.draw');
goog.require('maze.draw');
goog.require('maze.core');
goog.require('maze.core');
maze.top_level.delay_between_iterations = 10;
maze.top_level.new_maze = (function new_maze(){return maze.core.generate_maze(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$27,maze.draw.maze_size], null));
});
maze.top_level.context = (new cljs.core.Delay(cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$10,false,cljs.core.constant$keyword$11,null], null)),(function (){return maze.draw.make_context();
})));
maze.top_level.start = (function start(){var update_channel = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();var c__5524__auto___8622 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5525__auto__ = (function (){var switch__5509__auto__ = (function (state_8600){var state_val_8601 = (state_8600[1]);if((state_val_8601 === 1))
{var state_8600__$1 = state_8600;var statearr_8602_8623 = state_8600__$1;(statearr_8602_8623[2] = null);
(statearr_8602_8623[1] = 2);
return cljs.core.constant$keyword$25;
} else
{if((state_val_8601 === 2))
{var state_8600__$1 = state_8600;if(true)
{var statearr_8603_8624 = state_8600__$1;(statearr_8603_8624[1] = 4);
} else
{var statearr_8604_8625 = state_8600__$1;(statearr_8604_8625[1] = 5);
}
return cljs.core.constant$keyword$25;
} else
{if((state_val_8601 === 3))
{var inst_8598 = (state_8600[2]);var state_8600__$1 = state_8600;return cljs.core.async.impl.ioc_helpers.return_chan(state_8600__$1,inst_8598);
} else
{if((state_val_8601 === 4))
{var state_8600__$1 = state_8600;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_8600__$1,7,update_channel);
} else
{if((state_val_8601 === 5))
{var state_8600__$1 = state_8600;var statearr_8605_8626 = state_8600__$1;(statearr_8605_8626[2] = null);
(statearr_8605_8626[1] = 6);
return cljs.core.constant$keyword$25;
} else
{if((state_val_8601 === 6))
{var inst_8596 = (state_8600[2]);var state_8600__$1 = state_8600;var statearr_8606_8627 = state_8600__$1;(statearr_8606_8627[2] = inst_8596);
(statearr_8606_8627[1] = 3);
return cljs.core.constant$keyword$25;
} else
{if((state_val_8601 === 7))
{var inst_8580 = (state_8600[7]);var inst_8580__$1 = (state_8600[2]);var inst_8581 = (function (){var update_contents = inst_8580__$1;return ((function (update_contents,inst_8580,inst_8580__$1,state_val_8601){
return (function (){return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(update_contents,cljs.core.constant$keyword$26);
});
;})(update_contents,inst_8580,inst_8580__$1,state_val_8601))
})();var inst_8582 = cljs.core.async.timeout(maze.top_level.delay_between_iterations);var state_8600__$1 = (function (){var statearr_8607 = state_8600;(statearr_8607[7] = inst_8580__$1);
(statearr_8607[8] = inst_8581);
return statearr_8607;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_(state_8600__$1,8,inst_8582);
} else
{if((state_val_8601 === 8))
{var inst_8581 = (state_8600[8]);var inst_8584 = (state_8600[2]);var inst_8585 = (inst_8581.cljs$core$IFn$_invoke$arity$0 ? inst_8581.cljs$core$IFn$_invoke$arity$0() : inst_8581.call(null));var state_8600__$1 = (function (){var statearr_8608 = state_8600;(statearr_8608[9] = inst_8584);
return statearr_8608;
})();if(cljs.core.truth_(inst_8585))
{var statearr_8609_8628 = state_8600__$1;(statearr_8609_8628[1] = 9);
} else
{var statearr_8610_8629 = state_8600__$1;(statearr_8610_8629[1] = 10);
}
return cljs.core.constant$keyword$25;
} else
{if((state_val_8601 === 9))
{var inst_8587 = start();var state_8600__$1 = state_8600;var statearr_8611_8630 = state_8600__$1;(statearr_8611_8630[2] = inst_8587);
(statearr_8611_8630[1] = 11);
return cljs.core.constant$keyword$25;
} else
{if((state_val_8601 === 10))
{var inst_8580 = (state_8600[7]);var inst_8589 = cljs.core.deref(maze.top_level.context);var inst_8590 = maze.draw.update_canvas(inst_8589,inst_8580);var state_8600__$1 = state_8600;var statearr_8612_8631 = state_8600__$1;(statearr_8612_8631[2] = inst_8590);
(statearr_8612_8631[1] = 11);
return cljs.core.constant$keyword$25;
} else
{if((state_val_8601 === 11))
{var inst_8592 = (state_8600[2]);var state_8600__$1 = (function (){var statearr_8613 = state_8600;(statearr_8613[10] = inst_8592);
return statearr_8613;
})();var statearr_8614_8632 = state_8600__$1;(statearr_8614_8632[2] = null);
(statearr_8614_8632[1] = 2);
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
var state_machine__5510__auto____0 = (function (){var statearr_8618 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_8618[0] = state_machine__5510__auto__);
(statearr_8618[1] = 1);
return statearr_8618;
});
var state_machine__5510__auto____1 = (function (state_8600){while(true){
var ret_value__5511__auto__ = (function (){try{while(true){
var result__5512__auto__ = switch__5509__auto__(state_8600);if(cljs.core.keyword_identical_QMARK_(result__5512__auto__,cljs.core.constant$keyword$25))
{{
continue;
}
} else
{return result__5512__auto__;
}
break;
}
}catch (e8619){if((e8619 instanceof Object))
{var ex__5513__auto__ = e8619;var statearr_8620_8633 = state_8600;(statearr_8620_8633[5] = ex__5513__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_8600);
return cljs.core.constant$keyword$25;
} else
{if(cljs.core.constant$keyword$6)
{throw e8619;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5511__auto__,cljs.core.constant$keyword$25))
{{
var G__8634 = state_8600;
state_8600 = G__8634;
continue;
}
} else
{return ret_value__5511__auto__;
}
break;
}
});
state_machine__5510__auto__ = function(state_8600){
switch(arguments.length){
case 0:
return state_machine__5510__auto____0.call(this);
case 1:
return state_machine__5510__auto____1.call(this,state_8600);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5510__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5510__auto____0;
state_machine__5510__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5510__auto____1;
return state_machine__5510__auto__;
})()
;})(switch__5509__auto__))
})();var state__5526__auto__ = (function (){var statearr_8621 = (f__5525__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5525__auto__.cljs$core$IFn$_invoke$arity$0() : f__5525__auto__.call(null));(statearr_8621[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5524__auto___8622);
return statearr_8621;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5526__auto__);
}));
maze.draw.clear_canvas(cljs.core.deref(maze.top_level.context));
return maze.core.solve_maze(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$18,cljs.core.constant$keyword$18.cljs$core$IFn$_invoke$arity$1(maze.top_level.new_maze()),cljs.core.constant$keyword$27,maze.draw.maze_size,cljs.core.constant$keyword$23,update_channel], null));
});
goog.exportSymbol('maze.top_level.start', maze.top_level.start);
