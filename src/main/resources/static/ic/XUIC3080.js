var menuId = 'XUIC3080';
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
            $('#returnRequestNoDP1').val('');
        }
    },
	searchCallInit: function(index,your,action,btnId,param,result,event) { //조회액션 실행 전에 호출되는 함수 
        if(index ==0){                                            
            AUIGrid.clearGridData(widget.grid[1]);    
        }
    },
    cellClickCallBack: function(index,rowIndex,target,e) {				
		if(index==0){
			widget.findBtnClicked(1, {returnRequestNo:e.item['returnRequestNo']}, true, 'CELLCLICK',menuId,VIEW);
		}
	},
	customCallInit: function(index,your,action,btnId,param,result) {
		 let checkItem = widget.getCheckedRowItems(widget.grid[0]);
		if(index == 1){
		    let checkItem = widget.getCheckedRowItems(widget.grid[0]);
		    if(btnId == 'customGridPopBtn2-3'){ // 커스텀 버튼 실행시 1 삭제(D) 2 TMP삽입(C) 3 프로시저실행(P) actionType 으로 시점 제어가능  		
			    if(checkItem.length==0){
				    //$('#' +'gridPop-'+btnId).modal('hide');
				    result.msg = '상단에서 외주재고반납요청 선택필수!';
				    result.result = 'WARN';
				    return;
			    }
			    $('#requestWarehouseCdSP21').val(checkItem[0]['requestWarehouseCd']);
		        $('#requestWarehouseCdSP21').jqxComboBox({disabled: true});
		        $('#issueWarehouseCdSP21').val(checkItem[0]['returnWarehouseCd']);
		        $('#issueWarehouseCdSP21').jqxComboBox({disabled: true});
			}  
		}
        else if(index == 20){			    
		    if(action='C'&& btnId == 'customBtn21-1'){ 
			    for(var i=0,max=param.length; i<max;i++){
				    param[i][returnRequestNo] = checkItem[0]['returnRequestNo'];
					
			    }
            }			        
		}
	},
};

$(document).ready(function(event){	
	momSetup.init();
	momWidget.init(1, menuId, VIEW);	
	momWidget.init(2, menuId, VIEW);	
	VIEW.init();
	momWidget.gridPopup.init(2,21,1,'XUDG0550', VIEW);
});


$(document).on('change', '#partnerCdDP1', function () {
   var b = $(this).val();;
   
   mom_ajax('R', 'DD.DD00018', {partnerCd: $('#partnerCdDP1').val()}, function (result, data) {
       if (result == 'SUCCESS') {
           if(result != 'SUCCESS') {
               momWidget.splashHide();
               $('#requestWarehouseCdDP1').val(''); 
                   
           }
           var valueITem =''
           var newItems = [];
           if(data.length == 0 ){
               $('#requestWarehouseCdDP1').val(''); 
       	       $('#requestWarehouseCdDP1').jqxComboBox('source', newItems);
		   }
		   else {
                valueITem = data[0].code;
                for (var i = 0; i < data.length; i++) {
                    newItems.push(data[i]);
                }
                $('#requestWarehouseCdDP1').val(''); 
                $('#requestWarehouseCdDP1').jqxComboBox('source', newItems);
                $('#requestWarehouseCdDP1' ).val(valueITem); 
           }  
       }
   });   

})