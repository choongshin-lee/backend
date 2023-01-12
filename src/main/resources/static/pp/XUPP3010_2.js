var menuId = 'XUPP3010_2';
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
	    var item = e.item;	
		if(index==0){
			widget.findBtnClicked(1, {borId:e.item['borId']}, true, 'CELLCLICK',menuId,VIEW);
		}
	},
	searchCallInit: function(index,your,action,btnId,param,result,event) {		
	    let checkItem = widget.getCheckedRowItems(widget.grid[0]);
        if(index ==0){                                            
            AUIGrid.clearGridData(widget.grid[1]);    
        }
	},	
};

$(document).ready(function(event){	
	momSetup.init();
	momWidget.init(1, menuId, VIEW);	
	momWidget.init(2, menuId, VIEW);	
	VIEW.init();
});