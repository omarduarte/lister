$(function() {
	var item = new Item({'value': 'Name of Your List', parentView: $('.list')})
	var d1 = item.addChild('depth 1');
	var d2 = d1.addChild('depth 2');
	var d31 = d2.addChild('depth 3-1');
	var d32 = d2.addChild('depth 3-2');
});