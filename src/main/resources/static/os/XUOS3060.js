var menuId = 'XUOS3060';
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
	    dateSelect();	
	    $('#partnerCdSP1').jqxComboBox({disabled: true});	
	},
};

$(document).ready(function(event){	
	momSetup.init();
	//momWidget.init(1, menuId, VIEW,'GRID');	
	momWidget.init(1, menuId, VIEW);	
	VIEW.init();
});

function dateSelect(){
   mom_ajax('R', 'XUMM3010.dropdownlistContentpartnerCdSP1-select1', {}, function(result, data) {
      if(result == 'SUCCESS') {

         var a = data[0].code;
         $('#partnerCdSP1' ).val(a);   
      return;
      }
   }, undefined, undefined, this, false,'Y');
      
};