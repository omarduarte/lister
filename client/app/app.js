$(function() {
	//var lister = new Lister();
	var baseItem = new Item({'value': 'Name of Your List'});
	var list = $('.list');
	var baseItemView = new ItemView({model: baseItem, parent: list});
	var d1 = baseItem.addChild('depth 1');
	var d2 = d1.addChild('depth 2');
	var d31 = d2.addChild('depth 3-1');
	var d32 = d2.addChild('depth 3-2');
});