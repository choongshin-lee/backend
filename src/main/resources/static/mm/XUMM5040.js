var menuId = 'XUMM5040';
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
		if(index==0){
			widget.findBtnClicked(1, {returnNo:e.item['returnNo']}, true, 'CELLCLICK',menuId,VIEW);
		}
	},
	customCallInit: function(index,your,action,btnId,param,result) {
	    var checkItem = widget.getCheckedRowItems(widget.grid[0]);
		if(index == 1){
		    if(btnId == 'customBtn2-1'){ // 커스텀 버튼 실행시 1 삭제(D) 2 TMP삽입(C) 3 프로시저실행(P) actionType 으로 시점 제어가능  		
			    if(checkItem.length==0){
				    result.msg = '상단에서 반품서 선택필수!';
				    result.result = 'WARN';
				    return;
			    }
			    for(var i=0,max=param.length; i<max;i++){
				    param[i]['currencyCd'] = checkItem[0]['currencyCd'];
				    param[i]['exchangeRate'] = checkItem[0]['exchangeRate'];
			    }
			}
		}
	}
};

$(document).ready(function(event){	
	momSetup.init();
	momWidget.init(1, menuId, VIEW);	
	momWidget.init(2, menuId, VIEW);
	VIEW.init();
});
