var menuId = 'B_XUWM1040';
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
	copyCallInit: function(index,your,action,btnId,param,result) {
		if(index ==0 && btnId =='copyBtn'){	
			  $('#drNoDP1').val('');
			  $('#drNmDP1').val('');
		}
		else if(index ==1 && btnId =='copyBtn'){	 
			  $('#deliveryRequestIdDP2').val('');
			  $('#seqDP2').val('');
		}
	},
	searchCallInit: function(index,your,action,btnId,param,result,event) { //조회액션 실행 전에 호출되는 함수 
        let checkItem = widget.getCheckedRowItems(widget.grid[0]);
        if(index==1 && ( btnId== "createBtn2"|| btnId== "copyBtn2"|| btnId== "editBtn2" || btnId== "customBtn2-1")){
			let checkItem = widget.getCheckedRowItems(widget.grid[0]);
			result.param = {drNo:checkItem[0].drNo};
			  					
		}
        else if(index ==0){                                            
            AUIGrid.clearGridData(widget.grid[1]);
        }
    },
    createCallInit: function(index,your,action,btnId,param,result,data) {  //등록버튼 팝업띄우기 전에 호출되는 함수 
		if(index ==1 && btnId =='createBtn'){
			let checkedItem = widget.getCheckedRowItems(widget.grid[0]);	
			if(checkedItem.length==0){
                result.msg = '상단에서 출고요청번호 선택필수!';
				result.result = 'WARN';
				return;
			}
		}
		else if(index ==0 &&  btnId == 'createBtn'){    
	            $('#drNoDP1').val('');
			    $('#drNmDP1').val('');
	            $('#requestLocationCdDP1').val('');
	            $('#customerCdDP1').val('');
        }
	},
    createCallBack: function(index,your,action,btnId,param,result,data) {  //등록버튼 팝업띄우고나서 호출되는 함수 
		if(index ==1 && btnId =='createBtn'){
			let checkedItem = widget.getCheckedRowItems(widget.grid[0]);	
			$('#drNoDP'+(index+1)).val(checkedItem[0]['drNo']);
		}
	},
    cellClickCallBack: function(index,rowIndex,target,e) {				
		if(index==0){
			widget.findBtnClicked(1, {drNo:e.item['drNo']}, true, 'CELLCLICK',menuId,VIEW);
		}
	},
};

$(document).ready(function(event){	
	momSetup.init();
	momWidget.init(1, menuId, VIEW);	
	momWidget.init(2, menuId, VIEW);	
	VIEW.init();
});