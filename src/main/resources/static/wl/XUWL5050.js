var menuId = 'XUWL5050';
var widget = momWidget;
var that = undefined;
var VIEW= {
	initParam		: undefined, 
	warehouseCd     : undefined, 
	
	init: function() {	
		that = this;	
		that.event();
	},
	event: function(e) {
	},
	copyCallInit: function(index,your,action,btnId,param,result) {
	},
	createCallInit: function(index,your,action,btnId,param,result) {
		if(index==1){	
		    let checkItem = widget.getCheckedRowItems(widget.grid[0]);
		    if(checkItem.length==0){
                result.msg = '상단에서 창고 선택필수!';
                result.result = 'WARN';
                return;
            }	
			$('#warehouseCdDP2').val(checkItem[0]['warehouseCd']);
		}
		else if(index==2){	
			let checkItem = widget.getCheckedRowItems(widget.grid[1]); 
			if(checkItem.length==0){
                result.msg = '좌측에서 이동지시 정보 선택필수!';
                result.result = 'WARN';
                return;
            }
            $('#locationDoNoDP3').val(checkItem[0]['locationDoNo']);
            $('#deliveryOrderIdDP3').val(checkItem[0]['deliveryOrderId']);
            $('#itemIdDP3').val(checkItem[0]['itemId']);	
            $('#warehouseCdDP3').val(checkItem[0]['warehouseCd']);
            $('#zoneCdDP3').val(checkItem[0]['zoneCd']);
            
            mom_ajax('R', 'DD.DD00055', {itemId: $('#itemIdDP3').val(),warehouseCd: $('#warehouseCdDP3').val(),zoneCd: $('#zoneCdDP3').val()}, function (result, data) {
	            if (result == 'SUCCESS') {
	                if(result != 'SUCCESS') {
			            momWidget.splashHide();
				        return;							     
			        }
			        var a = data[0].label;
                    //$('#locationCdDP3' ).val(a);   
	            }
            });

		}
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
    cellClickCallBack: function(index,rowIndex,target,e) {				
		if(index==0){
			widget.findBtnClicked(1, {locationDoNo:e.item['locationDoNo']}, true, 'CELLCLICK',menuId,VIEW);
		}
		else if(index==1){
			widget.findBtnClicked(2, {deliveryOrderId:e.item['deliveryOrderId']}, true, 'CELLCLICK',menuId,VIEW);
		}
	},
	customCallInit: function(index,your,action,btnId,param,result) {
    },
};

$(document).ready(function(event){	
	momSetup.init();
	momWidget.init(1, menuId, VIEW);	
	momWidget.init(2, menuId, VIEW);	
	momWidget.init(3, menuId, VIEW);
	VIEW.init();
});

$(document).on('change', '#locationCdDP3', function () {
   var b = $(this).val();;
   
    mom_ajax('R', 'DD.DD00047', {itemId: $('#itemIdDP3').val(),warehouseCd: $('#warehouseCdDP3').val(),zoneCd: $('#zoneCdDP3').val(),locationCd: $('#locationCdDP3').val()}, function (result, data) {
        if (result == 'SUCCESS') {
            if(result != 'SUCCESS') {
               momWidget.splashHide();
               $('#logisticsUnitCdDP3').val(''); 
              //return;                          
           }
           var valueITem =''
           var newItems = [];
           
           if(data.length == 0 ){
	           $('#logisticsUnitCdDP3').val(''); 
           		$('#logisticsUnitCdDP3').jqxComboBox('source', newItems);
				  
			}else{
	           valueITem = data[0].code;
	          
	
	            
	            for (var i = 0; i < data.length; i++) {
	                   newItems.push(data[i]);
	            }
	
	           $('#logisticsUnitCdDP3').val(''); 
	           $('#logisticsUnitCdDP3').jqxComboBox('source', newItems);
	           $('#logisticsUnitCdDP3' ).val(valueITem); 
           }  
        }
    });   
            
})

