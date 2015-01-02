var Item = Backbone.Model.extend({
  initialize: function() {

  },
  
  defaults: {
    value: '',
    children: new List({depth: this.depth + 1})
  },

  delete: function() {
    this.trigger('delete', this);
  }
});