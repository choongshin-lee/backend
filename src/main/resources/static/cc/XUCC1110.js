var menuId = 'XUCC1110';
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
			 // $('#drNoDP1').val('');
			  //$('#drNmDP1').val('');
		}
	},
	searchCallInit: function(index,your,action,btnId,param,result,event) { //조회액션 실행 전에 호출되는 함수 
        let checkItem = widget.getCheckedRowItems(widget.grid[0]);
        if(index ==0){                                            
            AUIGrid.clearGridData(widget.grid[1]);    
        }
    },
    cellClickCallBack: function(index,rowIndex,target,e) {				
		if(index==0){
			widget.findBtnClicked(1, {closeYearMonth:e.item['closeYearMonth']}, true, 'CELLCLICK',menuId,VIEW);
		}
	},
    customCallInit: function(index,your,action,btnId,param,result) {
        if(index == 1){
            let checkItem = widget.getCheckedRowItems(widget.grid[0]);
            if(btnId == 'customGridPopBtn2-1'){ 
                if(checkItem.length==0){
                    result.msg = '상단에서 매입거래월마감 선택필수!';
                    result.result = 'WARN';
                    return;
                }
            }
        }

    }        
};

$(document).ready(function(event){	
	momSetup.init();
	momWidget.init(1, menuId, VIEW);	
	momWidget.init(2, menuId, VIEW);
	//momWidget.gridPopup.init(2,21,1,'XUDG0360', VIEW);	
	VIEW.init();
});