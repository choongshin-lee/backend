var menuId = 'XUCC2010';
var widget = momWidget;
var that = undefined;
var VIEW= {
	initParam		: undefined, 
	  
	init: function() {	
		that = this;	
		that.event();
	},
	event: function(e) {
	},
	customCallInit: function(index,your,action,btnId,param,result) {
		if(index==0 && btnId == 'customBtn1-1'){	                                             
		    result.param = {closedDate:$('#closedDateSP1').val()};    
        }   
	},	
};

$(document).ready(function(event){	
	momSetup.init();
	momWidget.init(1, menuId, VIEW);	
	VIEW.init();
});