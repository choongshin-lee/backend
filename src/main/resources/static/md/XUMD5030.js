var menuId = 'XUMD5030';
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
	copyCallInit: function(index,your,action,btnId,param,result) {
        if(index == 0 ){ 
            $('#warehouseCdDP1').val('');
        }
        else if(index == 1 ){ 
            $('#whReceiptTypeDP2').val('');
        }
    },
    createCallInit: function(index,your,action,btnId,param,result) {
		if(index==1){	
		    let checkItem = widget.getCheckedRowItems(widget.grid[0]);
		    if(checkItem.length==0){
                result.msg = '상단에서 창고 담당자 선택필수!';
                result.result = 'WARN';
                return;
            }	
			$('#userNoDP2').val(checkItem[0]['userNo']);
			$('#warehouseCdDP2').val(checkItem[0]['warehouseCd']);
		}
	},
	searchCallInit: function(index,your,action,btnId,param,result,event) { //조회액션 실행 전에 호출되는 함수 
        if(index==0 ){                                                 
            AUIGrid.clearGridData(widget.grid[1]);
        }  
    },
    cellClickCallBack: function(index,rowIndex,target,e) {        
        if(index==0){
            widget.findBtnClicked(1, {userNo:e.item['userNo'],warehouseCd:e.item['warehouseCd']}, true, 'CELLCLICK',menuId,VIEW);
        }
    },
};

$(document).ready(function(event){	
	momSetup.init();
	momWidget.init(1, menuId, VIEW);  
	momWidget.init(2, menuId, VIEW);
	VIEW.init();
});