var menuId = 'XUOS3010';
var widget = momWidget;
var that = undefined;
var VIEW= {
	initParam		: undefined, 
	popupParam1     : {},
	popupParam2     : {},
	init: function() {	
		that = this;	
		that.event();
	},
	event: function(e) {
	    dateSelect();	
	    //$("#partnerCdSP1").attr('disabled', true);
	    $('#partnerCdSP1').jqxComboBox({disabled: true});
	},
	createCallInit: function(index,your,action,btnId,param,result) { //등록버튼 팝업띄우기 전에 호출되는 함수 
		if(index ==0 && btnId =='createBtn'){	
		    param.partnerCd = $('#partnerCdSP1').val();
		    $('#partnerCdDP1' ).val(param.partnerCd); 
		}
	},
	copyCallInit: function(index,your,action,btnId,param,result) { // 복사팝업 뜨기전에 호출
		if(index ==0 && btnId =='copyBtn'){	
			$('#departureNoDP1').val('');
		}
	},
   searchCallInit: function(index,your,action,btnId,param,result,event) { //조회액션 실행 전에 호출되는 함수 
        if(index==0 ){	                                               //20221027 LCS 추가 
		  AUIGrid.clearGridData(widget.grid[1]);
		}
	},
    cellClickCallBack: function(index,rowIndex,target,e) {				
	    if(index==0){
		    widget.findBtnClicked(1, {departureNo:e.item['departureNo']}, true, 'CELLCLICK',menuId,VIEW);
		}
	},
	customCallInit: function(index,your,action,btnId,param,result) {
	    if(index == 1){
		    let checkItem = widget.getCheckedRowItems(widget.grid[0]);
		    if(btnId == 'customGridPopBtn2-1'){ // 커스텀 버튼 실행시 1 삭제(D) 2 TMP삽입(C) 3 프로시저실행(P) actionType 으로 시점 제어가능  		
			    if(checkItem.length==0){
				    //$('#' +'gridPop-'+btnId).modal('hide');
				    result.msg = '상단에서 납품서 선택필수!';
				    result.result = 'WARN';
				    return;
			    }
		        $('#partnerCdSP21').val(checkItem[0]['partnerCd']);
		        $('#partnerCdSP21').jqxComboBox({disabled: true});
				$('#departureWarehouseCdSP21').val(checkItem[0]['departureWarehouseCd']);
				$('#departureWarehouseCdSP21').jqxComboBox({disabled: true});
				$('#currencyCdSP21').val(checkItem[0]['currencyCd']);
		        $('#currencyCdSP21').jqxComboBox({disabled: true});
				$('#iqcFlagSP21').val(checkItem[0]['iqcFlag']);
				$('#iqcFlagSP21').jqxComboBox({disabled: true});
			}
		}
	    else if(index == 20){			    
		    let checkItem = widget.getCheckedRowItems(widget.grid[0]);
		    if(action='C'&& btnId == 'customBtn21-1'){ 
			    for(var i=0,max=param.length; i<max;i++){
				    param[i]['inoutNo'] = checkItem[0]['departureNo'];
				}
		    }
	    }
	}
};

$(document).ready(function(event){	
	momSetup.init();
	momWidget.init(1, menuId, VIEW);	
	momWidget.init(2, menuId, VIEW);	
	//momWidget.gridPopup.init(2,21,1,'XUSM8080', VIEW);
	momWidget.gridPopup.init(2,21,1,'XUDG0560', VIEW);
	VIEW.init();
});

function dateSelect(){
   mom_ajax('R', 'XUMM3010.dropdownlistContentpartnerCdSP1-select1', {}, function(result, data) {
      if(result == 'SUCCESS') {

         var a = data[0].code;
         $('#partnerCdSP1' ).val(a);   
      return;
      }
   }, undefined, undefined, this, false,'Y');
      
};