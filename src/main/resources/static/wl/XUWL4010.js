var menuId = 'XUWL4010';
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
			  $('#receiptIdDP1').val('');
			  $('#receiptNmDP1').val('');
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
			widget.findBtnClicked(1, {receiptId:e.item['receiptId']}, true, 'CELLCLICK',menuId,VIEW);
		}
		else if(index==1){
			widget.findBtnClicked(2, {receiptId:e.item['receiptId'],referenceNo:e.item['deliveryRequestNo']}, true, 'CELLCLICK',menuId,VIEW);
		}
	},
	customCallInit: function(index,your,action,btnId,param,result) {
	    if(index == 1){ // 팝업에서 드롭다운 컬럼선택하여 열기직전 호출
	        let checkItem = widget.getCheckedRowItems(widget.grid[0]);
	        if(btnId == 'customGridPopBtn2-2'){ 
                if(checkItem.length==0){
                    result.msg = '상단에서 접수번호 선택필수!';
                    result.result = 'WARN';
                    return;
                }
                $('#receiptWarehouseCdSP21').val(checkItem[0]['receiptWarehouseCd']);
                $('#drNoSP21').val('');
                $('#receiptWarehouseCdSP21').jqxComboBox({disabled: true});
            }
	    }
	    else if(index == 20){         
            let checkItem = widget.getCheckedRowItems(widget.grid[0]);
            if(action='C'&& btnId == 'customBtn21-1'){ 
                for(var i=0,max=param.length; i<max;i++){
                    param[i]['receiptId'] = checkItem[0]['receiptId'];
                }
            }
        }
    },
};

$(document).ready(function(event){	
	momSetup.init();
	momWidget.init(1, menuId, VIEW);	
	momWidget.init(2, menuId, VIEW);	
	momWidget.init(3, menuId, VIEW);
	momWidget.gridPopup.init(2,21,1,'XUDG0490', VIEW);  
	VIEW.init();
});