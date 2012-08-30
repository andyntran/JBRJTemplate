define([

'mockServices',
'../../views/default'

], function (mockServices, defaultView) {

	describe('Default View', function () {
		
		describe('instance', function () {

			it('should be defined', function () {
				expect(defaultView).toBeDefined();
			});

			it('should be a BackBone View', function () {
				expect(defaultView instanceof Backbone.View).toBeTruthy();
			});

			it('should have a reference to a container DOM with id="body"', function() {
				expect(defaultView.$container).toBeDefined();
				expect(defaultView.$container.attr('id')).toEqual('body');
			});

			it('should have a reference to a content DOM with id="default"', function() {
				expect(defaultView.$el).toBeDefined();
				expect(defaultView.$el.attr('id')).toEqual('default');
			});
			
		});

		describe('render()', function () {
			
			it('Setup: calls render() method', function () {
				defaultView.render();
			});

			it('should show a single instance of the "default" DOM inside the "body" DOM', function () {
				var $defaultDOM = defaultView.$container.find(defaultView.$el);
				expect($defaultDOM.length).toEqual(1);
			});
			
		});

	});

});