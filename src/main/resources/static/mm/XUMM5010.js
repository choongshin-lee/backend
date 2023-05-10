var menuId = 'XUMM5010';
var widget = momWidget;
var that = undefined;
var VIEW= {
  initParam   : undefined, 
  inoutNo         : undefined,
  inoutType       : undefined,
  init: function() {  
    that = this;  
    that.event();
  },
  event: function(e) {
  
  },
    copyCallInit: function(index,your,action,btnId,param,result) {
        if(index ==0 && btnId =='copyBtn'){ 
            $('#returnNoDP1').val('');
        }
    },
    createCallInit: function(index,your,action,btnId,param,result) { //등록버튼 팝업띄우기 전에 호출되는 함수 
        if(index ==1 && btnId =='createBtn'){              
            let checkItem = widget.getCheckedRowItems(widget.grid[0]);
            if(checkItem.length==0){
                result.msg = '상단에서 반품서 선택필수!';
                result.result = 'WARN';
                return;
            }
            $('#returnNoDP2').val(checkItem[0].returnNo);   
        }
    },
    searchCallInit: function(index,your,action,btnId,param,result,event) { //조회액션 실행 전에 호출되는 함수 
        if(index==1){
            let checkItem = widget.getCheckedRowItems(widget.grid[0]);
            param.returnNo = checkItem[0].returnNo;
        } 
        else if(index==0 ){                                                 
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
		    if(btnId == 'customGridPopBtn2-1'){ // 커스텀 버튼 실행시 1 삭제(D) 2 TMP삽입(C) 3 프로시저실행(P) actionType 으로 시점 제어가능  		
			    if(checkItem.length==0){
				    result.msg = '상단에서 반품서 선택필수!';
				    result.result = 'WARN';
				    return;
			    }
	            $('#partnerCdSP21').val(checkItem[0]['partnerCd']);
			    $('#partnerCdSP21').jqxComboBox({disabled: true});
			    $('#currencyCdSP21').val(checkItem[0]['currencyCd']);
		        $('#currencyCdSP21').jqxComboBox({disabled: true});
		        
		        param.returnNo = checkItem[0].returnNo;
			}
			else if(btnId == 'customBtn2-2' ){
			    for(var i=0,max=param.length; i<max;i++){
				    param[i]['currencyCd'] = checkItem[0]['currencyCd'];
				    param[i]['exchangeRate'] = checkItem[0]['exchangeRate'];
			    }
		    }
			else if(btnId == 'customBtn2-3'){
			    for(var i=0,max=param.length; i<max;i++){
				    param[i]['currencyCd'] = checkItem[0]['currencyCd'];
				    param[i]['exchangeRate'] = checkItem[0]['exchangeRate'];
			    }
		    }		    
		}
	    else if(index == 20){			    
		    if(action='C'&& btnId == 'customBtn21-1'){ 
			    for(var i=0,max=param.length; i<max;i++){
				    param[i]['inoutNo'] = checkItem[0]['returnNo'];
			    }
		    }
	    }
	}
};

$(document).ready(function(event){  
    momSetup.init();
    //momWidget.init(1, menuId, VIEW,'GRID'); 
    //momWidget.init(2, menuId, VIEW,'GRID'); 
    momWidget.init(1, menuId, VIEW);  
    momWidget.init(2, menuId, VIEW);
    //momWidget.gridPopup.init(2,21,1,'XUSM8110', VIEW);
    momWidget.gridPopup.init(2,21,1,'XUDG0440', VIEW);
    VIEW.init();
});