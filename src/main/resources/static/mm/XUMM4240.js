var menuId = 'XUMM4240';
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
    searchCallInit: function(index,your,action,btnId,param,result,event) { //조회액션 실행 전에 호출되는 함수 
        if(index==0 ){	                                             
		    AUIGrid.clearGridData(widget.grid[1]);
		}  
	},
	cellClickCallBack: function(index,rowIndex,target,e) {				
		if(index == 1){
		    var item = e.item;	
		    setTimeout(function(){
		        mom_ajax('R', 'DD.DD00057', {itemId:item['itemId']}, function(result, data) {
		            if(result != 'SUCCESS') {
		                momWidget.splashHide();
			            return;							     
		            }	
		            for(var i=0;i<widget.columnProperty[1].length;i++){
			            if(widget.columnProperty[1][i]['columnId'] =='hcnCd'){
				            widget.columnDropdown[1][widget.columnProperty[1][i]['columnId']]=data;
			            }
			        }
	            }, undefined, undefined, this, false);	
		    }, 200);
		}
	},
	cellClickCallBack: function(index,rowIndex,target,e) {				
		if(index==0){
			widget.findBtnClicked(1, {receiptNo:e.item['receiptNo']}, true, 'CELLCLICK',menuId,VIEW);
		}
	}
};

$(document).ready(function(event){	
	momSetup.init();
	momWidget.init(1, menuId, VIEW);	
	momWidget.init(2, menuId, VIEW);
	VIEW.init();
});
