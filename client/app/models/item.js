var Item = Backbone.Model.extend({
  initialize: function() {
    this.set('children', new List());
  },
  
  defaults: {
    'value': '',
    'depth': 0
  },

  delete: function() {
    this.deleteChildren();

    this.trigger('delete', this);

    this.destroy();
  },

  deleteChildren: function() {
    var child;

    while (child = this.get('children').first()) {
      child.deleteChildren();
      child.trigger('delete', child);
      child.destroy();
    }
  },

  showChildren: function() {
    return this.get('children').toJSON();
  },

  addChild: function(value) {
    return this.get('children').insert(value, this.get('depth') + 1);
  }
});