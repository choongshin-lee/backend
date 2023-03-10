var menuId = 'XUMM2100';
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
        let checkItem = widget.getCheckedRowItems(widget.grid[0]);
        if(index==0 ){	                                             
		    AUIGrid.clearGridData(widget.grid[1]);
		}  
	},
	copyCallBack: function(index,your,action,btnId,param,result,data) {  //등록버튼 팝업띄우고나서 호출되는 함수 
	    if(index ==0 && btnId =='copyBtn'){
		    $('#receiveNoDP1').val('');		
		}
	},
    cellClickCallBack: function(index,rowIndex,target,e) {				
		if(index==0){
			widget.findBtnClicked(1, {receiveNo:e.item['receiveNo']}, true, 'CELLCLICK',menuId,VIEW);
		}
	},
	customCallInit: function(index,your,action,btnId,param,result) {
	    var checkItem = widget.getCheckedRowItems(widget.grid[0]);
		if(index == 1){
		    if(btnId == 'customGridPopBtn2-1'){ // 커스텀 버튼 실행시 1 삭제(D) 2 TMP삽입(C) 3 프로시저실행(P) actionType 으로 시점 제어가능  		
			    if(checkItem.length==0){
				    result.msg = '상단에서 입고서 선택필수!';
				    result.result = 'WARN';
				    return;
			    }
	            $('#partnerCdSP21').val(checkItem[0]['partnerCd']);
			    $('#departureLocationCdSP21').val(checkItem[0]['departureLocationCd']);
			    $('#iqcFlagSP21').val(checkItem[0]['iqcFlag']);
			    $('#currencyCdSP21').val(checkItem[0]['currencyCd']);
			    $('#inoutTypeSP21').val(checkItem[0]['inoutType']);
			    $('#partnerCdSP21').jqxComboBox({disabled: true});
			    $('#departureLocationCdSP21').jqxComboBox({disabled: true});
			    $('#currencyCdSP21').jqxComboBox({disabled: true});
			    $('#iqcFlagSP21').jqxComboBox({disabled: true});
			    $('#inoutTypeSP21').jqxComboBox({disabled: true});
			}
		}
	    else if(index == 20){			    
		    if(action='C'&& btnId == 'customBtn21-1'){ 
			    for(var i=0,max=param.length; i<max;i++){
				    param[i]['inoutNo'] = checkItem[0]['receiveNo'];
					param[i]['inoutType'] = 'RD';
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
	momWidget.gridPopup.init(2,21,1,'XUSM8100', VIEW);
	VIEW.init();
});