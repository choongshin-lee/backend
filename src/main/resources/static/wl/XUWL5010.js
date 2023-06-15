var menuId = 'XUWL5010';
var widget = momWidget;
var that = undefined;
var VIEW= {
	initParam		: undefined, 
	warehouseCd     : undefined,    
	init: function() {	
		that = this;	
		that.event();
	},
	event: function(e) {
	    
	},
	copyCallInit: function(index,your,action,btnId,param,result) {
	},
	createCallInit: function(index,your,action,btnId,param,result) {
		if(index==1){	
		    let checkItem = widget.getCheckedRowItems(widget.grid[0]);
		    if(checkItem.length==0){
                result.msg = '상단에서 창고 선택필수!';
                result.result = 'WARN';
                return;
            }	
			$('#warehouseCdDP2').val(checkItem[0]['warehouseCd']);
		}
		else if(index==2){	
			let checkItem = widget.getCheckedRowItems(widget.grid[1]); 
		    if(checkItem.length==0){
                result.msg = '좌측에서 이동지시 정보 선택필수!';
                result.result = 'WARN';
                return;
            }
            $('#locationDoNoDP3').val(checkItem[0]['locationDoNo']);	
		}
	},
	searchCallInit: function(index,your,action,btnId,param,result,event) { //조회액션 실행 전에 호출되는 함수 
        if(index ==0){                                            
            AUIGrid.clearGridData(widget.grid[1]);   
          //  AUIGrid.clearGridData(widget.grid[2]);   
        }
        else if(index ==1){                                            
            AUIGrid.clearGridData(widget.grid[2]);   
        }
    },
    cellClickCallBack: function(index,rowIndex,target,e) {				
		if(index==0){
			widget.findBtnClicked(1, {warehouseCd:e.item['warehouseCd']}, true, 'CELLCLICK',menuId,VIEW);
		}
		else if(index==1){
			widget.findBtnClicked(2, {locationDoNo:e.item['locationDoNo']}, true, 'CELLCLICK',menuId,VIEW);
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