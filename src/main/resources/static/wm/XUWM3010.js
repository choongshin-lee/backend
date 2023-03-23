var menuId = 'XUWM3010';
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
			  $('#doNoDP1').val('');
			  $('#doNmDP1').val('');
		}
	},
	searchCallInit: function(index,your,action,btnId,param,result,event) { //조회액션 실행 전에 호출되는 함수 
        let checkItem = widget.getCheckedRowItems(widget.grid[0]);
        if(index ==0){                                            
            AUIGrid.clearGridData(widget.grid[1]);    
        }
        else if (index==20){
            result.param = {doNo:checkItem[0].doNo};   
        }
    },
    cellClickCallBack: function(index,rowIndex,target,e) {				
		if(index==0){
			widget.findBtnClicked(1, {doNo:e.item['doNo']}, true, 'CELLCLICK',menuId,VIEW);
		}
	},
    customCallInit: function(index,your,action,btnId,param,result) {
        let checkItem = widget.getCheckedRowItems(widget.grid[0]);
        if(index == 1){
            if(btnId == 'customGridPopBtn2-3'){ 
                if(checkItem.length==0){
                    result.msg = '상단에서 출고서번호 선택필수!';
                    result.result = 'WARN';
                    return;
                }
                $('#issueLocationCdSP21').val(checkItem[0]['issueLocationCd']);
                $('#customerCdSP21').val(checkItem[0]['customerCd']);
                $('#issueLocationCdSP21').jqxComboBox({disabled: true});
                $('#customerCdSP21').jqxComboBox({disabled: true});
            }
        }
        else if(index == 20){         
            if(action='C'&& btnId == 'customBtn21-1'){ 
                for(var i=0,max=param.length; i<max;i++){
                    param[i]['doNo'] = checkItem[0]['doNo'];
                }
            }
        }
    }        
};

$(document).ready(function(event){	
	momSetup.init();
	momWidget.init(1, menuId, VIEW);	
	momWidget.init(2, menuId, VIEW);
	momWidget.gridPopup.init(2,21,1,'XUDG0190', VIEW);	
	VIEW.init();
});