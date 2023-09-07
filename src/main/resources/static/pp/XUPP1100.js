var menuId = 'XUPP1100';
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
	cellClickCallBack: function(index,rowIndex,target,e) {  //셀클릭 액션 실행 전에 호출되는 함수 
		if(index == 0 ){		
			widget.findBtnClicked(1, {workCenterCd:e.item['workCenterCd'],planDate:e.item['planDate']}, true, 'CELLCLICK',menuId,VIEW);			
		}
	}
};

$(document).ready(function(event){	
	momSetup.init();
	momWidget.init(1, menuId, VIEW);	
	momWidget.init(2, menuId, VIEW);
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