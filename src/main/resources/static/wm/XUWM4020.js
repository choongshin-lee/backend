var menuId = 'XUWM4020';
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
            $('#pickingIdDP1').val('');
        }
    },
	searchCallInit: function(index,your,action,btnId,param,result,event) { //조회액션 실행 전에 호출되는 함수 
        if(index ==0){                                            
            AUIGrid.clearGridData(widget.grid[1]);    
        }
    },
    cellClickCallBack: function(index,rowIndex,target,e) {				
		if(index==0){
			widget.findBtnClicked(1, {pickingId:e.item['pickingId']}, true, 'CELLCLICK',menuId,VIEW);
		}
	},
	customCallInit: function(index,your,action,btnId,param,result) {
        let checkItem = widget.getCheckedRowItems(widget.grid[0]);
        if(index == 1){
            if(btnId == 'customGridPopBtn2-3'){ 
                if(checkItem.length==0){
                    result.msg = '상단에서 피킹번호 선택필수!';
                    result.result = 'WARN';
                    return;
                }
                $('#receiptTypeCdSP21').val(checkItem[0]['receiptTypeCd']);
                $('#receiptLocationCdSP21').val(checkItem[0]['pickingLocationCd']);
                $('#receiptIdSP21').val('');
                $('#receiptTypeCdSP21').jqxComboBox({disabled: true});
                $('#receiptLocationCdSP21').jqxComboBox({disabled: true});
            }
        }
        else if(index == 20){         
            if(action='C'&& btnId == 'customBtn21-1'){ 
                for(var i=0,max=param.length; i<max;i++){
                    param[i]['pickingId'] = checkItem[0]['pickingId'];
                }
            }
        }
    }   
};

$(document).ready(function(event){	
	momSetup.init();
	momWidget.init(1, menuId, VIEW);	
	momWidget.init(2, menuId, VIEW);
	momWidget.gridPopup.init(2,21,1,'XUDG0260', VIEW);	
	VIEW.init();
});