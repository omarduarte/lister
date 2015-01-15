var ItemView = Backbone.View.extend({

  el: '<ul class="item"></ul>',

  template: _.template('<li><button class="add">+</button><button class="remove">-</button><button class="edit">pencil-icon</button><span class="value"><%- value %></span></li>'),

  events: {
    'click .add': 'addChild',
    'click .remove': 'remove',
    'click .edit': 'edit'
  },

  childViews: [],

  initialize: function(options) {

    // this.listenTo(this.model, 'append', function(childModel) {
    //   this.childViews.push(new ItemView({model: childModel, parent: this.$el}));
    // });

    this.model.on('append', function(childModel) {
      this.childViews.push(new ItemView({model: childModel, parent: this.$el}));
    }, this);

    this.model.on('remove',function() {
      this.$el.detach();
    }, this)
    
    options.parent.append(this.el);
    this.render();
  },

  addChild: function(e) {
    e.stopPropagation();
    this.model.addChild();
  },

  remove: function() {
    this.model.delete();    
  },

  edit: function(e) {
    e.stopPropagation();
    this.model.set('value', 'You have just clicked EDIT!');
    this.update();
  },

  render: function() {
    this.$el.html(this.template(this.model.attributes));
  },

  update: function() {
    var item = this.$el.find('li').first();
    item.html(this.template(this.model.attributes));
  }
});