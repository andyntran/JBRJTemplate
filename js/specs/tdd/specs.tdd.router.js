define([

  'mockServices'
, 'router'

], function (mockServices, router) {

	describe('Router BDD Specs', function () {

		describe('instance', function () {

			it('should be defined', function () {
				expect(router).toBeDefined();
			});

			it('should have specsRunningRoute() route', function () {
				expect(typeof router.specsRunningRoute).toEqual('function');
			});

			it('should have defaultRoute() route', function () {
				expect(typeof router.defaultRoute).toEqual('function');
			});

			// TODO: tests other properties/methods of the router
			// END TODO

		});

		describe('specsRunningRoute()', function () {

			describe('GIVEN the page is running in test mode', function () {
				
				it('should have a spec report DOM with id="#TrivialReporter"', function () {
					expect($('#TrivialReporter').length).toBeGreaterThan(0);
				});
				
			});

		});

		describe('defaultRoute()', function () {

			describe('GIVEN the page call defaultRoute() method', function () {
			
				it('Setup: calls defaultRoute() method', function () {
					router.defaultRoute();
				});

				it('should have a single DOM with id="default"', function () {
					var $defaultView = $('#default');
					expect($defaultView.length).toEqual(1);
				});

				// TODO: tests other default behavior of the page
				// END TODO

			});

		});

		// TODO: tests other routes
		// END TODO
	});

});