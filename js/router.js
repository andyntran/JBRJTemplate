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
			// TODO: Comments out the following if wishing not to record the routes in browser's history
			Backbone.history.start();
			// END TODO
		}

	});

	return new AppRouter; // Return AppRouter as a singleton object

});