define(function () {

	var specsRunner = {

		  isRun: false

		, execute: function (reporter) {

			// Makes sure specs running module only run once in case the test cases navigates
			// to different routes
			if (!this.isRun) { 

				var me = this;

				requirejs.config({
					paths: {
						  mockServices: 'specs/mock-services'
						, sinonjs: 'libs/sinonjs/sinon-1.3.4.min'
						, jasmine: 'libs/jasmine/jasmine-1.2.0.min'
						, jasmineHtml: 'libs/jasmine/jasmine-html.min'
						// , jasmineTeamcity: 'libs/jasmine/jasmine.teamcity_reporter.min'
					}

					, shim: {
						// Defines core testing library dependencies
						  'mockServices': ['sinonjs']
						, 'jasmine': ['mockServices', 'sinonjs']
						, 'jasmineHtml': ['jasmine']
						//, 'jasmineTeamcity': ['jasmine']

						// TODO: Defines TDD specs dependencies (all specs should have jasmine 
						//		 or jasmineHtml as one of the dependencies)
						, 'specs/tdd/default-view': [
							  'jasmineHtml'
							, 'mockServices'
						]
						, 'specs/tdd/router': [
							  'jasmineHtml'
							, 'mockServices'
							, 'specs/tdd/default-view' // Runs tests for default view before tests for router
						]
						// END TODO

						// TODO: Defines BDD specs dependencies (all specs should have jasmine 
						//		 or jasmineHtml as one of the dependencies)
						// END TODO
					}
				})

				require([

				// Loads JasmineJS, SinonJS, and services mocking module
				  'css!css/jasmine.min.css'
				, 'css!css/jasmine-ext.min.css'
				, 'sinonjs'
				, 'jasmine'
				, 'jasmineHtml'
				//, 'jasmineTeamcity'
				, 'mockServices'

				// TODO: Includes TDD spec files
				, 'specs/tdd/default-view'
				, 'specs/tdd/router'
				// END TODO

				// TODO: Includes BDD spec files
				// END TODO

				], function () {

					// // Registers all the test cases
		   //          var specs = Array.prototype.slice.call(arguments, 6);
		   //          for (var i = 0; i < specs.length; i++) {
		   //              specs[i].run();
		   //          }

		            // Decides which reporter to use
		            reporter || (reporter = 'html');
		            switch (reporter.toLowerCase()) {

		                // Trivial Reporter
		                case 'trivial':
		                    jasmine.getEnv().addReporter(new jasmine.TrivialReporter());
		                    jasmine.getEnv().execute();

		                    var $TrivialReporter = $('#TrivialReporter');
		                    if ($TrivialReporter.length) {
		                        // "Shows passed tests checkbox" should be checked
		                        $('#__jasmine_TrivialReporter_showPassed__' ).attr('checked', 'checked');
		                        
		                        $TrivialReporter
		                            .addClass('show-passed')    //show passed tests, in the visual reporter
		                            .find('.banner')
		                            .prepend($('<a id="JasmineReporterCloseBtn" href="javascript:void(0)" title="Close tests results">x</a>')
		                                .click(function() {
		                                    $('#TrivialReporter').remove();
		                                })
		                            );
		                    }

		                    break;

		                // TeamCity Reporter
		                // case 'teamcity':
		                //     jasmine.getEnv().addReporter(new jasmine.TeamcityReporter());
		                //     jasmine.getEnv().execute();
		                //     break;

		                // HTML Reporter
		                default:
		                    jasmine.getEnv().addReporter(new jasmine.HtmlReporter());
		                    jasmine.getEnv().execute();

		                    var $HtmlReporter = $('#HTMLReporter');
		                    if ($HtmlReporter.length) {
		                        $HtmlReporter
		                            .find('.banner')
		                            .prepend($('<a id="JasmineReporterCloseBtn" href="javascript:void(0)" title="Close tests results">x</a>')
		                                .click(function() {
		                                    $('#HTMLReporter').remove();
		                                })
		                            );
		                    }

		                    break;
		            }

					me.isRun = true;
				});
				
			}

		}

	};

	return specsRunner; // Return specs running module as a singleton object
});