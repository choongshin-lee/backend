var menuId = 'XUPP3090';
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
		if(index == 0){
		    momWidget.findBtnClicked(1, {woResultId:e.item['woResultId'],woResultType:e.item['woResultType']}, true, 'CELLCLICK',menuId,VIEW);
		}
	},
	searchCallInit: function(index,your,action,btnId,param,result,event) {
		let checkItem = widget.getCheckedRowItems(widget.grid[0]);
        if(index ==0){                                            
            AUIGrid.clearGridData(widget.grid[1]);    
        }
		/*else if(index==1 && btnId== "customBtn2-1"){
			let checkItem = widget.getCheckedRowItems(widget.grid[0]);
			result.param = {workOrderId:checkItem[0].workOrderId};
			  					
		}*/
	}
};
$(document).ready(function(event){	
	momSetup.init();
	momWidget.init(1, menuId, VIEW);	
	momWidget.init(2, menuId, VIEW);	
	VIEW.init();
});