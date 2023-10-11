var menuId = 'XUWL6010';
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
    cellClickCallInit: function(index,rowIndex,e,) {
        var item = e.item;	
	    setTimeout(function(){
	        mom_ajax('R', 'DD.DD00064', {itemId:item['itemId']}, function(result, data) {
	            if(result != 'SUCCESS') {
	                momWidget.splashHide();
		            return;							     
	            }	
	            for(var i=0;i<widget.columnProperty[1].length;i++){
		            if(widget.columnProperty[1][i]['columnId'] =='packingContainer'){
			            widget.columnDropdown[1][widget.columnProperty[1][i]['columnId']]=data;
		            }
		        }
            }, undefined, undefined, this, false);	
	    }, 200);
	},	
    cellClickCallBack: function(index,rowIndex,target,e) {				
		if(index==0){
			widget.findBtnClicked(1, {packingId:e.item['packingId']}, true, 'CELLCLICK',menuId,VIEW);
		}
		else if(index==1){

		    

            widget.findBtnClicked(2, {packingId:e.item['packingId'],referenceNo:e.item['shippingNo'],referenceDtlNo:e.item['shippingOrderId']}, true, 'CELLCLICK',menuId,VIEW);		
		
		}
	},
	customCallInit: function(index,your,action,btnId,param,result) {
	    if(index == 1){ // 팝업에서 드롭다운 컬럼선택하여 열기직전 호출
	        let checkItem = widget.getCheckedRowItems(widget.grid[0]);
	        if(btnId == 'customGridPopBtn2-1'){ 
                if(checkItem.length==0){
                    result.msg = '상단에서 접수번호 선택필수!';
                    result.result = 'WARN';
                    return;
                }
                $('#customerCdSP21').val(checkItem[0]['customerCd']);
                $('#destinationCdSP21').val(checkItem[0]['destinationCd']);
                $('#forwarderCdSP21').val(checkItem[0]['forwarderCd']);
                $('#notifyPartyCdSP21').val(checkItem[0]['notifyPartyCd']);
                $('#loadingPlaceCdSP21').val(checkItem[0]['loadingPlaceCd']);
                $('#destinationPortCdSP21').val(checkItem[0]['destinationPortCd']);
                $('#customerCdSP21').jqxComboBox({disabled: true});
                $('#destinationCdSP21').jqxComboBox({disabled: true});
                $('#forwarderCdSP21').jqxComboBox({disabled: true});
                $('#notifyPartyCdSP21').jqxComboBox({disabled: true});
                $('#loadingPlaceCdSP21').jqxComboBox({disabled: true});
                $('#destinationPortCdSP21').jqxComboBox({disabled: true});
            }
	    }
	    else if(index == 20){         
            let checkItem = widget.getCheckedRowItems(widget.grid[0]);
            if(action='C'&& btnId == 'customBtn21-1'){ 
                for(var i=0,max=param.length; i<max;i++){
                    param[i]['packingId'] = checkItem[0]['packingId'];
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
	momWidget.gridPopup.init(2,21,1,'XUDG0590', VIEW);  
	VIEW.init();
});

$(document).on('click', '#fromLocationCdDP2', function () {
   var b = $(this).val();;
   
   mom_ajax('R', 'DD.DD00036', {warehouseCd: $('#warehouseCdDP2').val()}, function (result, data) {
       if (result == 'SUCCESS') {
           if(result != 'SUCCESS') {
               momWidget.splashHide();
               $('#fromLocationCdDP2').val(''); 
                   
           }
           var valueITem =''
           var newItems = [];
           if(data.length == 0 ){
               $('#fromLocationCdDP2').val(''); 
       	       $('#fromLocationCdDP2').jqxComboBox('source', newItems);
		   }
		   else {
                valueITem = data[0].code;
                for (var i = 0; i < data.length; i++) {
                    newItems.push(data[i]);
                }
                $('#fromLocationCdDP2').val(''); 
                $('#fromLocationCdDP2').jqxComboBox('source', newItems);
                $('#fromLocationCdDP2' ).val(valueITem); 
           }  
       }
   });   

})