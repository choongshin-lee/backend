var menuId = 'XUPP3050';
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
	cellClickCallBack: function(index,rowIndex,target,e) {   
         momWidget.splashHide();
         if(e.dataField == 'drawingNo'){
         	window.open('../PDF/'+e.value+ '.pdf','_blank','resizable=no,width=2000,height=1300,left=740,top=520');
         }
   }, 
};
$(document).ready(function(event){	
	momSetup.init();
	momWidget.init(1, menuId, VIEW);	
	VIEW.init();
});