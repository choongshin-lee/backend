var menuId = 'XUMM7020';
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
	momWidget.init(1, menuId, VIEW,'GRID');	
	VIEW.init();
});