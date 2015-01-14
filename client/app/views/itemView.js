var ItemView = Backbone.View.extend({

  el: '<div class="item"></div>',

  template: _.template('<button class="add">+</button><button class="remove">-</button><button class="edit">pencil-icon</button><span class="value"><%- value %></span>'),

  events: {
    'click .add': 'addChild',
    'click .remove': 'remove',
    'click .edit': 'edit'
  },

  initialize: function() {
    var parentView = this.model.get('parentView');
    parentView.append(this.el);

    this.model.on('remove',function() {
      //this.children().detach();
      this.$el.detach();

    }, this)
    
    this.render();
  },

  addChild: function() {
    this.model.addChild();
  },

  remove: function() {
    this.model.delete();    
  },

  edit: function() {
    this.model.set('value', 'You have just clicked EDIT!');
  },

  render: function() {
    // Show item given depth
    
    var padding = (this.model.get('depth') * 20).toString() + 'px';
    this.$el.css('padding-left', padding);
    this.$el.html(this.template(this.model.attributes));
  }
});