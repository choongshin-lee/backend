var menuId = 'XUWL5010';
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
			widget.findBtnClicked(1, {warehouseCd:e.item['warehouseCd']}, true, 'CELLCLICK',menuId,VIEW);
		}
		else if(index==1){
			widget.findBtnClicked(2, {locationDoNo:e.item['locationDoNo']}, true, 'CELLCLICK',menuId,VIEW);
		}
	},
	customCallInit: function(index,your,action,btnId,param,result) {
	    if(index == 2){ // 팝업에서 드롭다운 컬럼선택하여 열기직전 호출
	        let checkItem = widget.getCheckedRowItems(widget.grid[1]);
	        if(btnId == 'customGridPopBtn3-2'){ 
                $('#warehouseCdSP31').val(checkItem[0]['warehouseCd']);
                $('#locationCdSP31').val(checkItem[0]['fromLocationCd']);
                $('#drNoSP21').val('');
                $('#warehouseCdSP31').jqxComboBox({disabled: true});
                $('#locationCdSP31').jqxComboBox({disabled: true});
            }
	    }
	    else if(index == 30){         
            let checkItem = widget.getCheckedRowItems(widget.grid[1]);
            if(action='C'&& btnId == 'customBtn31-1'){ 
                for(var i=0,max=param.length; i<max;i++){
                    param[i]['locationDoNo'] = checkItem[0]['locationDoNo'];
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
	momWidget.gridPopup.init(3,31,1,'XUDG0510', VIEW);  
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

$(document).on('click', '#toLocationCdDP2', function () {
   var b = $(this).val();;
   
   mom_ajax('R', 'DD.DD00036', {warehouseCd: $('#warehouseCdDP2').val()}, function (result, data) {
       if (result == 'SUCCESS') {
           if(result != 'SUCCESS') {
               momWidget.splashHide();
               $('#toLocationCdDP2').val(''); 
                   
           }
           var valueITem =''
           var newItems = [];
           if(data.length == 0 ){
               $('#toLocationCdDP2').val(''); 
       	       $('#toLocationCdDP2').jqxComboBox('source', newItems);
		   }
		   else {
                valueITem = data[0].code;
                for (var i = 0; i < data.length; i++) {
                    newItems.push(data[i]);
                }
                $('#toLocationCdDP2').val(''); 
                $('#toLocationCdDP2').jqxComboBox('source', newItems);
                $('#toLocationCdDP2' ).val(valueITem); 
           }  
       }
   });   

})