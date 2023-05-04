var menuId = 'XUMM2010';
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
	    if(index ==0 && btnId =='copyBtn'){	
		    $('#poNoDP1').val('');
		    $('#doInvoiceYnDP1').val('');
		    $('#currencyCdDP1').val('');
		    $('#exchangeRateDP1').val('');
		}
	},
    createCallInit: function(index,your,action,btnId,param,result) { //등록버튼 팝업띄우기 전에 호출되는 함수 
	    if(index ==1 && btnId =='createBtn'){
			let checkedItem = widget.getCheckedRowItems(widget.grid[0]);	
			if(checkedItem.length==0){
                result.msg = '상단에서 발주번호 선택필수!';
				result.result = 'WARN';
				return;
			}
		}
	},
    searchCallInit: function(index,your,action,btnId,param,result,event) { //조회액션 실행 전에 호출되는 함수 
        if(index ==0){                                            
		  AUIGrid.clearGridData(widget.grid[1]);  	
	    }
	},
    cellClickCallBack: function(index,rowIndex,target,e) {				
		if(index==0){
			widget.findBtnClicked(1, {poNo:e.item['poNo']}, true, 'CELLCLICK',menuId,VIEW);
		}
	},
	customCallInit: function(index,your,action,btnId,param,result) {
		 let checkItem = widget.getCheckedRowItems(widget.grid[0]);
		if(index == 0){ // 팝업에서 드롭다운 컬럼선택하여 열기직전 호출
	        let checkedItem = AUIGrid.getCheckedRowItems(widget.grid[index]);
	        if(btnId == 'partnerCdDP1'){   
	             $('#partnerTypeSP11').val('');
	             $('#partnerCdNmSP11').val('');  
	        }
	    }
	    else if(index == 1){
		    let checkItem = widget.getCheckedRowItems(widget.grid[0]);
		    if(btnId == 'customGridPopBtn2-3'){ // 커스텀 버튼 실행시 1 삭제(D) 2 TMP삽입(C) 3 프로시저실행(P) actionType 으로 시점 제어가능  		
			    if(checkItem.length==0){
				    //$('#' +'gridPop-'+btnId).modal('hide');
				    result.msg = '상단에서 발주서 선택필수!';
				    result.result = 'WARN';
				    return;
			    }
			    $('#partnerCdSP21').val(checkItem[0]['partnerCd']);
		        $('#partnerCdSP21').jqxComboBox({disabled: true});
		        $('#currencyCdSP21').val(checkItem[0]['currencyCd']);
		        $('#currencyCdSP21').jqxComboBox({disabled: true});
		        $('#poUserNoSP21').val(checkItem[0]['poUserNo']);  
		        $('#poUserNoSP21').jqxComboBox({disabled: true});
			}
		}
        else if(index == 10){       
	        if(btnId == 'customBtn11-1'){// 팝업에서 커스텀버튼(선택) 눌렀을떄 호출
	            let checkItem = widget.getCheckedRowItems(widget.grid[index]);
	            $('#partnerCd'+'DP1').val(checkItem[0]['partnerCd']);       
	            $('#doInvoiceYn'+'DP1').val(checkItem[0]['doInvoiceYn']);
	            widget.modalHide('#','gridPop-partnerCdDP1','2');
	        }
	    }
	    else if(index == 20){			    
		    if(action='C'&& btnId == 'customBtn21-1'){ 
			    for(var i=0,max=param.length; i<max;i++){
				    param[i]['poNo'] = checkItem[0]['poNo'];
					
			    }
            }			        
		}
	},
	customCallBack: function(index,your,action,btnId,param,result,data) {
	    if(index == 20 &&  btnId == 'customBtn21-1'){	
		    widget.findBtnClicked(1, {}, true, btnId,menuId,VIEW);								   		   			
		}
	}
	
};

$(document).ready(function(event){	
	momSetup.init();
	//momWidget.init(1, menuId, VIEW,'GRID');	
	//momWidget.init(2, menuId, VIEW,'GRID');	
	momWidget.init(1, menuId, VIEW);	
	momWidget.init(2, menuId, VIEW);
	//momWidget.gridPopup.init(1,11,1,'XUDG0220', VIEW); 
	momWidget.gridPopup.init(2,21,1,'XUDG0400', VIEW);
		
	VIEW.init();
});