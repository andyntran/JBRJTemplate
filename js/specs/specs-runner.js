define(function () {

	var run = function () {

		// Makes sure specs running module only run once in case the test cases navigates
		// to different routes
		if (!this.isRun) { 

			var me = this;

			requirejs.config({
				shim: {
					// Defines core testing library dependencies
					  'jasmine': ['sinonjs']
					, 'jasmineHtml': ['jasmine']
					, 'mockServices': ['sinonjs']

					// TODO: Defines TDD specs dependencies (all specs should have jasmine 
					//		 or jasmineHtml as one of the dependencies)
					, 'specs/tdd/specs.tdd.views-default': [
						  'jasmineHtml'
						, 'mockServices'
					]
					, 'specs/tdd/specs.tdd.router': [
						  'jasmineHtml'
						, 'mockServices'
						, 'specs/tdd/specs.tdd.views-default' // Runs tests for default view before tests for router
					]
					// END TODO

					// TODO: Defines BDD specs dependencies (all specs should have jasmine 
					//		 or jasmineHtml as one of the dependencies)
					// END TODO
				}
			})

			require([

			// Loads JasmineJS, SinonJS, and services mocking module
			  'css!css/jasmine.css'
			, 'sinonjs'
			, 'jasmine'
			, 'jasmineHtml'
			, 'mockServices'

			// TODO: Includes TDD spec files
			, 'specs/tdd/specs.tdd.views-default'
			, 'specs/tdd/specs.tdd.router'
			// END TODO

			// TODO: Includes BDD spec files
			// END TODO

			], function () {

				// Executes the JasmineJS tests
				jasmine.getEnv().addReporter(new jasmine.TrivialReporter());
				jasmine.getEnv().execute();

				// Shows passed tests
				$( '#__jasmine_TrivialReporter_showPassed__' ).attr('checked', 'checked');
				$( '#TrivialReporter' ).addClass('show-passed');

				me.isRun = true;
			});
			
		}

	};

	var specsRunner = {
		  isRun: false
		, run: run
	};

	return specsRunner; // Return specs running module as a singleton object
});