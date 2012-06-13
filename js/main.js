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

		// TODO: Uncomments the following to set alias for additional libraries
		// , jqueryui: 'libs/jquery/jqueryui/jquery-ui-1.8.21.min'
		// , bootstrap: 'libs/bootstrap/bootstrap-2.0.4.min'
		// , handlebars: 'libs/handlebars/handlebars-1.0.0.beta.6.min'
		// END TODO

		// Main components
		, router: 'router'
		, specsRunner: 'specs/specs-runner'
		, mockServices: 'specs/mock-services'
	}

	// Defines dependencies (effectively sets the loading orders)
	, shim: {
		  'backbone': ['underscore']
		, 'router': [
			  'modernizr'
			, 'jquery'
			, 'backbone'

			// TODO: Uncomments the following to includes loading additional libraries
			// , 'jqueryui'
			// , 'bootstrap'
			// , 'handlebars'
			// END TODO
		]

		// TODO: Uncomments the following to set jQuery dependency for jQuery UI
		// , 'jqueryui': ['jquery']
		// END TODO

	}
});

// Activates router module
require([

  'css!css/reset.min.css'
, 'router'

], function () {});
