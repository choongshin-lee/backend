var menuId = 'XUMD1100';
var VIEW =  {
	initParam		:  undefined,
	columnProperty1	: undefined,
	createdFlag		: undefined,
	init: function() {
		var that = this;		
	} 		
};

$(function(){
	momSetup.init();
	momWidget.init(1, menuId, VIEW);
	VIEW.init();
});