(defproject clojure-rica "0.1.0-SNAPSHOT"
  :description "ClojureRica"
  :url "http://costa-rica.github.io"
  :license {:name "MIT"}
  :dependencies [[org.clojure/clojure "1.5.1"]
                 [org.clojure/clojurescript "0.0-2156"]
                 [org.clojure/core.async "0.1.267.0-0d7780-alpha"]]
  :plugins [[lein-cljsbuild "1.0.2"]
            [com.cemerick/clojurescript.test "0.2.2"]
            [com.cemerick/austin "0.1.4"]]
  :profiles {:dev {:plugins [[com.cemerick/clojurescript.test "0.2.3-SNAPSHOT"]]}}
  :cljsbuild {
              :builds [{:source-paths ["../maize/src-cljs" "../game-of-life/src-cljs"]
                        :compiler {
                                   :output-to "main.js"
                                   :optimizations :advanced}}]})
