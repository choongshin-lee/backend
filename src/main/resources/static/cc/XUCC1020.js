var menuId = 'XUCC1020';
var widget = momWidget;
var that = undefined;
var VIEW= {
	initParam		: undefined, 
	  
	init: function() {	
		that = this;	
		that.event();
	},
	event: function(e) {
		$(document).on('change','#partnerCdDP1', function(e) {
	    mom_ajax('R', 'XUMD1030.findBtn1', {partnerCd:$('#partnerCdDP1').val(),useYn:'Y'}, function(result1, data1) { 
	        if(result1 != 'SUCCESS' || data1.length == 0) {
	            momWidget.splashHide();
	            return;                  
	         }     
	         var taxType =  data1[0]['taxType'];
	         var taxRate   =  data1[0]['taxRate'];
	         $('#taxTypeDP1').val(taxType);
	         $('#taxRateDP1').val(taxRate);
	          }, undefined, undefined, this, false);
	    });
	    $(document).on('change','#taxTypeDP1', function(e) {
	      mom_ajax('R', 'DD.DD00061', {taxType:$('#taxTypeDP1').val(),useYn:'Y'}, function(result1, data1) { 
	            if(result1 != 'SUCCESS' || data1.length == 0) {
	            momWidget.splashHide();
	            return;                  
	          }     
	         var taxRate   =  data1[0]['taxRate'];
	         $('#taxRateDP1').val(taxRate);
	          }, undefined, undefined, this, false);
	    });
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
    createCallBack: function(index,your,action,btnId,param,result,data) {  //등록버튼 팝업띄우고나서 호출되는 함수 
        if(index ==1 && btnId =='createBtn'){
            let checkedItem = widget.getCheckedRowItems(widget.grid[0]);  
            $('#partnerCdDP'+(index+1)).val(checkedItem[0]['partnerCd']);
            $('#invoiceDateDP'+(index+1)).val(checkedItem[0]['invoiceDate']);
            $('#taxTypeDP'+(index+1)).val(checkedItem[0]['taxType']);
        }
    },
    cellClickCallBack: function(index,rowIndex,target,e) {				
		if(index==0){
			widget.findBtnClicked(1, {closeYearMonth:e.item['closeYearMonth'],partnerCd:e.item['partnerCd'],invoiceDate:e.item['invoiceDate'],taxType:e.item['taxType']}, true, 'CELLCLICK',menuId,VIEW);
		}
	},
    customCallInit: function(index,your,action,btnId,param,result) {
        if(index == 1){
            let checkItem = widget.getCheckedRowItems(widget.grid[0]);
            if(btnId == 'customGridPopBtn2-1'){ 
                if(checkItem.length==0){
                    result.msg = '상단에서 매출마감 선택필수!';
                    result.result = 'WARN';
                    return;
                }
                $('#partnerCdSP21').val(checkItem[0]['partnerCd']);
		        $('#partnerCdSP21').jqxComboBox({disabled: true});
		        $('#invoiceDateSP21').val(checkItem[0]['invoiceDate']);
		        $('#invoiceDateSP21').attr("disabled", true);
				$('#taxTypeSP21').val(checkItem[0]['taxType']);
				$('#taxTypeSP21').jqxComboBox({disabled: true});
            }
        }
    }        
};

$(document).ready(function(event){	
	momSetup.init();
	momWidget.init(1, menuId, VIEW);	
	momWidget.init(2, menuId, VIEW);
	momWidget.gridPopup.init(2,21,1,'XUDG0360', VIEW);	
	VIEW.init();
});

