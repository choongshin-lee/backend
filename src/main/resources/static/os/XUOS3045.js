var menuId = 'XUOS3045';
var widget = momWidget;
var that = undefined;
var VIEW= {
	initParam		: undefined, 
	partnerCd       : undefined,
	init: function() {	
		that = this;	
		that.event();
	},
	event: function(e) {
	
	},
};

$(document).ready(function(event){	
	momSetup.init();
	//momWidget.init(1, menuId, VIEW,'GRID');	
	momWidget.init(1, menuId, VIEW);	
	VIEW.init();
});

