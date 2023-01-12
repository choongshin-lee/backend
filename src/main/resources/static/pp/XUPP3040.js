var menuId = 'XUPP3040';
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
        let checkItem = widget.getCheckedRowItems(widget.grid[0]);
        if(index==1 && ( btnId== "createBtn2"|| btnId== "copyBtn2"|| btnId== "editBtn2" || btnId== "customBtn2-1")){
			let checkItem = widget.getCheckedRowItems(widget.grid[0]);
			result.param = {workOrderId:checkItem[0].workOrderId};
			  					
		}
        else if(index ==0){                                            
            AUIGrid.clearGridData(widget.grid[1]);
        }
    },
    createCallBack: function(index,your,action,btnId,param,result,data) {  //등록버튼 팝업띄우고나서 호출되는 함수 
		if(index ==1 && btnId =='createBtn'){
			let checkedItem = widget.getCheckedRowItems(widget.grid[0]);	
			$('#workOrderIdDP'+(index+1)).val(checkedItem[0]['workOrderId']); 
		}
	},
    cellClickCallBack: function(index,rowIndex,target,e) {				
		if(index==0){
			widget.findBtnClicked(1, {workOrderId:e.item['workOrderId']}, true, 'CELLCLICK',menuId,VIEW);
		}
	},
};
$(document).ready(function(event){	
    momSetup.init();
	momWidget.init(1, menuId, VIEW);	
	momWidget.init(2, menuId, VIEW);	
	VIEW.init();
});


