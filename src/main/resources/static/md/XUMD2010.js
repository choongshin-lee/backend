var menuId = 'XUMD2010';
var XUMD2010= {
	initParam		:  undefined,
	columnProperty1	: undefined,
	createdFlag		: undefined,
	init: function() {
		var that = this;		
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
	momWidget.init(1, menuId, XUMD2010);
	XUMD2010.init();
});

