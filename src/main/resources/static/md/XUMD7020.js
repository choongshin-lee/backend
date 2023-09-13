var menuId = 'XUMD7020';
var widget = momWidget;
var that = undefined;
var VIEW= {
    initParam   : undefined, 
    init: function() {  
    that = this;  
    that.event();
    },
    event: function(e) {
	    $(document).on('change','#itemIdDP1', function(e) {
			mom_ajax('R', 'DD.DD00024', {itemId: $('#itemIdDP1').val()}, function(result1, data1) { 
		        if(result1 != 'SUCCESS' || data1.length == 0) {
		    	  momWidget.splashHide();
			      return;							     
		      }			
		     var operationId =  data1[0]['code'];
		     $('#operationIdDP1').val(operationId);
		      	}, undefined, undefined, this, false);
		});
  
    },
    
};

$(document).ready(function(event){  
  momSetup.init();
  momWidget.init(1, menuId, VIEW);  
  VIEW.init();
});