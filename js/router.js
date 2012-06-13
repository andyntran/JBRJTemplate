define([

  'specsRunner'

// TODO: Includes other Javascript modules/dependencies
, 'views/views.default'
// END TODO

], function (specsRunner, defaultView) {

	var AppRouter = Backbone.Router.extend({

		  routes: {

			// Specs running route
			  'dev/specs': 'specsRunningRoute'

			// TODO: Sets up other routes
			// END TODO

			// Default route
			, '*path': 'defaultRoute'
		}

		, specsRunningRoute: function () {
			specsRunner.run();
		}

		// TODO: Sets other route methods
		// END TODO

		, defaultRoute: function () {
			// TODO: Defines a default route/action
			defaultView.render();
			// END TODO
		}


		, initialize: function () {
			Backbone.history.start();
		}

	});

	return new AppRouter; // Return AppRouter as a singleton object

});