/**
 * This is just an example file to bootstrap the vue component.
 * You may implement the component however you see fit. Or you
 * can use this file as a starting point.
 */

// bootstrap the required components
window.Vue = require('vue');

// get the main App instance
var App = require('./App.vue');


window.app = new Vue({
    el: '#app',
    render(createElement)
    {
    	return createElement(App)
    }
});

