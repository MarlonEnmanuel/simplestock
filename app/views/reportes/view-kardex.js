
SimpleStock.Views.Kardex = Backbone.View.extend({
	tagName 	: $('#view-kardex').attr('data-tag'),
	className 	: $('#view-kardex').attr('data-class'),
	template 	: _.template($('#view-kardex').html()),

	events : {
		'click .apunte' : 'apunte',
	},

	initialize : function(){
		var self = this;
		self.model.on('sync', function(){
			self.render();
		});
	},

	render : function(){
		this.$el.html(this.template(this.model.toJSON()));
		return this.$el;
	},

	apunte : function(){
		Materialize.toast(this.model.get('apunte'), 5000);
	},
	
});