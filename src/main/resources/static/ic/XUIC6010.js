var menuId = 'XUIC6010';
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
	createCallInit: function(index,your,action,btnId,param,result) { //등록버튼 팝업띄우기 전에 호출되는 함수 
		if(index ==1 && btnId =='createBtn'){	
			 let checkItem = widget.getCheckedRowItems(widget.grid[0]);
			 if(checkItem.length==0){
					 result.msg = '상단에서 이동요청번호 선택해주세요';
				     result.result = 'WARN';
			         return;
			 }
		}
	},
	createCallBack: function(index,your,action,btnId,param,result,data) {  //등록버튼 팝업띄우고나서 호출되는 함수 
		if(index ==1 && btnId =='createBtn'){
			let checkedItem = widget.getCheckedRowItems(widget.grid[0]);	
   		    $('#deliveryRequestNoDP'+(index+1)).val(checkedItem[0]['deliveryRequestNo']);
		}
	},
	copyCallInit: function(index,your,action,btnId,param,result) {
		if(index ==0 && btnId =='copyBtn'){	
			  $('#deliveryRequestNoDP1').val('');
			  $('#deliveryRequestNmDP1').val('');
		}
	},
	searchCallInit: function(index,your,action,btnId,param,result,event) { //조회액션 실행 전에 호출되는 함수 
        if(index ==0){                                            
            AUIGrid.clearGridData(widget.grid[1]);    
        }
    },
    cellClickCallBack: function(index,rowIndex,target,e) {				
		if(index==0){
			widget.findBtnClicked(1, {deliveryRequestNo:e.item['deliveryRequestNo']}, true, 'CELLCLICK',menuId,VIEW);
		}
	},
};

$(document).ready(function(event){	
	momSetup.init();
	momWidget.init(1, menuId, VIEW);	
	momWidget.init(2, menuId, VIEW);	
	VIEW.init();
});