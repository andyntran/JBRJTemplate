requirejs.config({
	// Defines the base URL for Javascript files
	// The URL is relative to the main index.html page
	  baseUrl: 'js/'
	
	// Defines aliases for common Javascript files/modules
	, paths: {

		// RequireJS plugins
		  text: 'libs/requirejs/require-text.min'
		, css: 'libs/requirejs/require-css.min'

		// Core libraries
		, modernizr: 'libs/modernizr/modernizr-2.5.3.min'
		, jquery: 'libs/jquery/jquery-1.7.2.min'
		, underscore: 'libs/underscore/underscore-1.3.3.min'
		, backbone: 'libs/backbone/backbone-0.9.2.min'
		, sinonjs: 'libs/sinonjs/sinon-1.3.4.min'
		, jasmine: 'libs/jasmine/jasmine-1.2.0.min'
		, jasmineHtml: 'libs/jasmine/jasmine-html.min'

		// Main components
		, router: 'router'
		, specsRunner: 'specs/specs-runner'
		, mockServices: 'specs/mock-services'
	}

	// Defines dependencies (effectively sets the loading orders)
	, shim: {
		  'backbone': ['underscore']
		, 'router': ['modernizr', 'jquery', 'backbone']
	}
});

// Activates router module
require([

  'css!css/reset.css'
, 'router'

], function () {});
