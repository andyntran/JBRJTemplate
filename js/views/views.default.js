define([
	
	'text!../../templates/default.tpl'

],function (defaultViewTemplate) {

	var DefaultView = Backbone.View.extend({
		id: 'default',
		tagName: 'div',
		$container: $('#body'),

		render: function () {

			// TODO: Customizes the view accordingly
			//		 Adds/edits/removes further views/models/collections as needed

			// Clears the container DOM and 
			// Shows the default view inside the container
			this.$container.empty().append(this.$el);

			// Clears the content and render new content
			this.$el.empty().html(_.template(defaultViewTemplate, {title: 'HELLO WORLD!'}));

			// END TODO
		}

	});

	var defaultView = new DefaultView;

	return defaultView;
});