var menuId = 'XUSD2060';
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
	searchCallInit: function(index,your,action,btnId,param,result,event) { //조회액션 실행 전에 호출되는 함수 
        if(index ==0){                                            
            AUIGrid.clearGridData(widget.grid[1]);   
            AUIGrid.clearGridData(widget.grid[2]);   
        }
        else if(index ==1){                                            
            AUIGrid.clearGridData(widget.grid[2]);   
        }
    },
    cellClickCallBack: function(index,rowIndex,target,e) {				
		if(index==0){
			widget.findBtnClicked(1, {shippingWarehouseCd:e.item['shippingWarehouseCd'],shippingNo:e.item['shippingNo']}, true, 'CELLCLICK',menuId,VIEW);
		}
		else if(index==1){
		    widget.findBtnClicked(2, {shippingWarehouseCd:e.item['shippingWarehouseCd'],itemId:e.item['itemId'],shippingOrderId:e.item['shippingOrderId']}, true, 'CELLCLICK',menuId,VIEW);
        }
	},
};

$(document).ready(function(event){	
	momSetup.init();
	momWidget.init(1, menuId, VIEW);	
	momWidget.init(2, menuId, VIEW);	
	momWidget.init(3, menuId, VIEW);
	VIEW.init();
});