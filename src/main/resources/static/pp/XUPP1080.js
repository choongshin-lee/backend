var menuId = 'XUPP1080';
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
	searchCallInit: function(index,your,action,btnId,param,result,event) { 
	  if(index==0){
		 let fromDate =   $('#planDateSD1').val();
		 let toDate   =   $('#planDateED1').val();
		 // AUIGrid.expandItemByRowId('workCenterNm',true,true);
	     let pivotText = widget.getPivotDate(index,fromDate,toDate,'d','1');
	     param.pivot = pivotText; 
      }
	},
};

$(document).ready(function(event){	
	momSetup.init();
	momWidget.init(1, menuId, VIEW);	
	VIEW.init();
});

function exportTo(type,excelDownOpt) {
myGridID = AUIGrid.create("#grid1");
   // 내보내기 실행   
   switch (type) {
      case "xlsx":

         AUIGrid.exportToXlsx(myGridID,excelDownOpt);
         break;

   }
};