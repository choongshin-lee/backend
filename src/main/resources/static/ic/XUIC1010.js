var menuId = 'XUIC1010';
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
			  $('#shippingRequestNoDP1').val('');
			  $('#shippingRequestNmDP1').val('');
		}
	},
	searchCallInit: function(index,your,action,btnId,param,result,event) { //조회액션 실행 전에 호출되는 함수 
        let checkItem = widget.getCheckedRowItems(widget.grid[0]);
        if(index ==0){                                            
            AUIGrid.clearGridData(widget.grid[1]);    
        }
        else if (index==20){
            result.param = {shippingRequestNo:checkItem[0].shippingRequestNo};   
        }
    },
    cellClickCallBack: function(index,rowIndex,target,e) {				
		if(index==0){
			widget.findBtnClicked(1, {shippingRequestNo:e.item['shippingRequestNo']}, true, 'CELLCLICK',menuId,VIEW);
		}
	},
    customCallInit: function(index,your,action,btnId,param,result) {
        let checkItem = widget.getCheckedRowItems(widget.grid[0]);
        if(index == 1){
            if(btnId == 'customGridPopBtn2-3'){ 
                if(checkItem.length==0){
                    result.msg = '상단에서 출고요청번호 선택필수!';
                    result.result = 'WARN';
                    return;
                }
                $('#shipToCdSP21').val(checkItem[0]['customerCd']);
                $('#currencyCdSP21').val(checkItem[0]['currencyCd']);
                $('#soNoSP21').val('');
                $('#shipToCdSP21').jqxComboBox({disabled: true});
                $('#currencyCdSP21').jqxComboBox({disabled: true});
            }
        }
        else if(index == 20){         
            if(action='C'&& btnId == 'customBtn21-1'){ 
                for(var i=0,max=param.length; i<max;i++){
                    param[i]['shippingRequestNo'] = checkItem[0]['shippingRequestNo'];
                }
            }
        }
    }        
};

$(document).ready(function(event){	
	momSetup.init();
	momWidget.init(1, menuId, VIEW);	
	momWidget.init(2, menuId, VIEW);	
	momWidget.gridPopup.init(2,21,1,'XUDG0460', VIEW);
	VIEW.init();
});