var menuId = 'XUMM2040_1';
var widget = momWidget;
var that = undefined;
var VIEW= {
	initParam		: undefined, 
	popupParam1     : {},
	popupParam2     : {},
	init: function() {	
		that = this;	
		that.event();
	},
	event: function(e) {
	
	},
    searchCallInit: function(index,your,action,btnId,param,result,event) { //조회액션 실행 전에 호출되는 함수 
        if(index==0 ){	                                               //20221027 LCS 추가 
		  AUIGrid.clearGridData(widget.grid[1]);
		} 
	},
    cellClickCallBack: function(index,rowIndex,target,e) {				
		 if(index==0){
			widget.findBtnClicked(1, {poNo:e.item['poNo']}, true, 'CELLCLICK',menuId,VIEW);
		}
	}
};

$(document).ready(function(event){	
	momSetup.init();
	momWidget.init(1, menuId, VIEW);	
	momWidget.init(2, menuId, VIEW);	
	VIEW.init();
});