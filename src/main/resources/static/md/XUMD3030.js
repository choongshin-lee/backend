var menuId = 'XUMD3030';
var widget = momWidget;
var VIEW= {
	initParam		: undefined,   
	init: function() {	
	}
	
};

$(document).ready(function(event){	
	momSetup.init();
	momWidget.init(1, menuId, VIEW);
	VIEW.init();
});