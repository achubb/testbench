global.Vue = require('vue/dist/vue.js');

Vue.component('demo', require('./components/Example.vue'));

(function (window, document, undefined) {

    'use strict';

    function DOMReady(fn) {
        if (document.readyState != 'loading'){
            fn();
        } else {
            document.addEventListener('DOMContentLoaded', fn);
        }
    }

    var TESTBENCH = {
        common: {
            init: function() {
            	console.log("hello world")

            	const app = new Vue({
					el: '#app'
				});
            }
        },

        home: {
            init: function() {
            	console.log("hello home")
            }
        },
    };

    var UTIL = {
        exec: function( controller, action ) {
            var ns = TESTBENCH,
                action = ( action === undefined ) ? "init" : action;

            if ( controller !== "" && ns[controller] && typeof ns[controller][action] == "function" ) {
                ns[controller][action]();
            }
        },

        init: function() {
            var body = document.body,
                controller = body.getAttribute( "data-controller" ),
                action = body.getAttribute( "data-action" );

            UTIL.exec( "common" );
            UTIL.exec( controller );
            UTIL.exec( controller, action );
        }
    };

    DOMReady(function () {

        DOMReady( UTIL.init );

    });

})(window, document);