var menuId = 'XUSD3010';
var widget = momWidget;
var that = undefined;
var VIEW= {
	initParam		: undefined, 
	  
	init: function() {	
		that = this;	
		that.event();
	},
	event: function(e) {
		$(document).on('change','#customerCdDP1', function(e) {
			mom_ajax('R', 'XUMD1030.findBtn1', {customerCd:$('#customerCdDP1').val(),useYn:'Y'}, function(result1, data1) { 
		        if(result1 != 'SUCCESS' || data1.length == 0) {
		    	  momWidget.splashHide();
			      return;							     
		      }			
		     var currencyCd =  data1[0]['currencyCd'];
		     var taxType   =  data1[0]['taxType'];
		     $('#currencyCdDP1').val(currencyCd);
		     $('#taxTypeDP1').val(taxType);
			  	}, undefined, undefined, this, false);
		});
	},
	copyCallInit: function(index,your,action,btnId,param,result) {
		if(index ==0 && btnId =='copyBtn'){	
			  $('#shippingRetrunNoDP1').val('');
			  $('#shippingRetrunNmDP1').val('');
		}
	},
	searchCallInit: function(index,your,action,btnId,param,result,event) { //조회액션 실행 전에 호출되는 함수 
        let checkItem = widget.getCheckedRowItems(widget.grid[0]);
        if(index ==0){                                            
            AUIGrid.clearGridData(widget.grid[1]);    
        }
        else if (index==20){
            result.param = {shippingRetrunNo:checkItem[0].shippingRetrunNo};   
        }
    },
    cellClickCallBack: function(index,rowIndex,target,e) {				
		if(index==0){
			widget.findBtnClicked(1, {shippingRetrunNo:e.item['shippingRetrunNo']}, true, 'CELLCLICK',menuId,VIEW);
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
                $('#customerCdSP21').val(checkItem[0]['customerCd']);
                $('#currencyCdSP21').val(checkItem[0]['currencyCd']);
                $('#customerCdSP21').jqxComboBox({disabled: true});
                $('#currencyCdSP21').jqxComboBox({disabled: true});
            }
        }
        else if(index == 20){         
            if(action='C'&& btnId == 'customBtn21-1'){ 
                for(var i=0,max=param.length; i<max;i++){
                    param[i]['shippingRetrunNo'] = checkItem[0]['shippingRetrunNo'];
                }
            }
        }
    }        
};

$(document).ready(function(event){	
	momSetup.init();
	momWidget.init(1, menuId, VIEW);	
	momWidget.init(2, menuId, VIEW);	
	momWidget.gridPopup.init(2,21,1,'XUDG0600', VIEW);
	VIEW.init();
});