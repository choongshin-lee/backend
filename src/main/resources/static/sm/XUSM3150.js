const menuId = 'XUSM3150';
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
	copyCallInit: function(index,your,action,btnId,param,result) { // 복사팝업 뜨기전에 호출
		if(index ==0 && btnId =='copyBtn'){	
		    $('#whReceiptTypeDP1').val('');
		    
		}
	},
	createCallBack: function(index,your,action,btnId,param,result,data) {  //등록버튼 팝업띄우고나서 호출되는 함수 
		if(index ==1 && btnId =='createBtn'){
			let checkItem = widget.getCheckedRowItems(widget.grid[0]);
		    $('#whReceiptTypeDP2').val(checkItem[0]['whReceiptType']);
		}
	},
	createCallInit: function(index,your,action,btnId,param,result) { //등록버튼 팝업띄우기 전에 호출되는 함수 
	    if(index ==1 && btnId =='createBtn'){
			let checkedItem = widget.getCheckedRowItems(widget.grid[0]);	
			if(checkedItem.length==0){
                result.msg = '상단에서 창고접수유형 선택필수!';
				result.result = 'WARN';
				return;
			}
		}
	},
	searchCallInit: function(index,your,action,btnId,param,result,event) { //조회액션 실행 전에 호출되는 함수 
        if(index==0 ){	                                              
			AUIGrid.clearGridData(widget.grid[1]);	
		}
	},
	cellClickCallBack: function(index,rowIndex,target,e) {				
		if(index==0){
			widget.findBtnClicked(1, {whReceiptType:e.item['whReceiptType']}, true, 'CELLCLICK',menuId,VIEW);
		}
	}
};

$(document).ready(function(event){	
	momSetup.init();
	momWidget.init(1, menuId, VIEW);
	momWidget.init(2, menuId, VIEW);	
	VIEW.init();
});