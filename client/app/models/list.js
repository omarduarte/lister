var List = Backbone.Collection.extend({
  model: Item,

  initialize: function() {
    this.on('delete', function(item) {
      this.delete(item);
    }, this);
  },

  insert: function(value, depth) {
    var child = new Item({
      value: value,
      depth: depth
    }); 
    this.add(child);
    return child;
  },

  delete: function(item) {
    this.remove(item);
  }
});