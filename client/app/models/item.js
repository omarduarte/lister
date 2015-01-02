var Item = Backbone.Model.extend({
  initialize: function() {
    this.set('children', new List());
  },
  
  defaults: {
    'value': '',
    'depth': 0
  },

  delete: function() {
    console.log('Detaching', this.get('value'), 'from parent list');    
    this.trigger('delete', this);

    console.log('Destroying', this.get('value'));
    this.destroy();
  },

  deleteChildren: function() {
    console.log('deleting children of', this.get('value'));
    if (!this.get('children').isEmpty()) {
      this.get('children').forEach(function(child) {
        child.deleteChildren();
        child.destroy();
      });
    }
  },

  showChildren: function() {
    return this.get('children').toJSON();
  },

  addChild: function(value) {
    return this.get('children').insert(value, this.get('depth') + 1);
  }
});