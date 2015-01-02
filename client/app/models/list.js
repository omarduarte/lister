var List = Backbone.Collection.Extend({
  model: Item,

  initialize: function() {

    this.on('insert', function(value) {
      this.add(value);
    }, this);

    this.on('delete', function(item) {
      this.delete(item);
    }, this);
  },

  add: function(value) {
    this.add(new Item({
      depth: this.depth,
      value: value
    }));
  },

  delete: function(item) {
    this.remove(item);
    item.destroy();
  }
});