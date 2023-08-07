var menuId = 'XUPP3020';
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
			  $('#workOrderIdDP1').val('');
		}
		else if(index ==1 && btnId =='copyBtn'){	 
			  $('#operationSeqDP2').val('');
			  $('#operationIdDP2').val('');
			  $('#workStationCdDP2').val('');
		}
	},
	cellClickCallBack: function(index,rowIndex,target,e) {
	    if(index==0){
		    var item = e.item;	
		    setTimeout(function(){
		        mom_ajax('R', 'DD.DD00023', {workCenterCd:item['workCenterCd']}, function(result, data) {
		            if(result != 'SUCCESS') {
		                momWidget.splashHide();
			            return;							     
		            }					       
			        for(var i=0;i<widget.columnProperty[1].length;i++){
			            if(widget.columnProperty[1][i]['columnId'] =='workStationCd'){
				            widget.columnDropdown[1][widget.columnProperty[1][i]['columnId']]=data;
			            }
			        }
			        widget.findBtnClicked(1, {workOrderId:e.item['workOrderId']}, true, 'CELLCLICK',menuId,VIEW);
	            }, undefined, undefined, this, false);	
		    }, 200);
	    }
	},
	searchCallInit: function(index,your,action,btnId,param,result,event) {		
	    let checkItem = widget.getCheckedRowItems(widget.grid[0]);
        if(index == 0){                                            
            AUIGrid.clearGridData(widget.grid[1]);    
        }
	    else if(index == 100 && btnId == 'POPUPCLICK' ){  
		    result.param = {itemId:$('#itemId'+'DP1').val()};
		}
	},
	createCallInit: function(index,your,action,btnId,param,result,data) {  //등록버튼 팝업띄우기 전에 호출되는 함수 
		if(index ==1 && btnId =='createBtn'){
			let checkedItem = widget.getCheckedRowItems(widget.grid[0]);	
			if(checkedItem.length==0){
                result.msg = '상단에서 작업지시번호 선택필수!';
				result.result = 'WARN';
				return;
			}
		}
	},	
	createCallBack: function(index,your,action,btnId,param,result,data) {  //등록버튼 팝업띄우고나서 호출되는 함수 
		if(index ==1 && btnId =='createBtn'){
			let checkedItem = widget.getCheckedRowItems(widget.grid[0]);	
			$('#workOrderIdDP'+(index+1)).val(checkedItem[0]['workOrderId']);
		}
	},
	customCallInit: function(index,your,action,btnId,param,result) {
	    if(index == 0){ // 팝업에서 드롭다운 컬럼선택하여 열기직전 호출
	        let checkedItem = AUIGrid.getCheckedRowItems(widget.grid[index]);
	        if(btnId == 'itemIdDP1'){   
	             $('#itemIdSP11').val('');
	        }
	    }
        else if(index == 10){       
	        if(btnId == 'customBtn11-1'){// 팝업에서 커스텀버튼(선택) 눌렀을떄 호출
	            let checkItem = widget.getCheckedRowItems(widget.grid[index]);
	            $('#itemId'+'DP1').val(checkItem[0]['itemId']);      
	            $('#workCenterCd'+'DP1').val(checkItem[0]['workCenterCd']);
	            $('#routingId'+'DP1').val(checkItem[0]['routingId']);
	            $('#borId'+'DP1').val(checkItem[0]['borId']);
	            widget.modalHide('#','gridPop-itemIdDP1','2');
	        }
	    }
    },	
};
$(document).ready(function(event){	
	momSetup.init();
	momWidget.init(1, menuId, VIEW);	
	momWidget.init(2, menuId, VIEW);	
	//momWidget.gridPopup.init(1,11,1,'XUDG0210', VIEW); 
	VIEW.init();
});

$(document).on('change', '#workCenterCdDP1', function () {
   var b = $(this).val();;
   
    mom_ajax('R', 'DD.DD00059', {workCenterCd: $('#workCenterCdDP1').val()}, function (result, data) {
        if (result == 'SUCCESS') {
            if(result != 'SUCCESS') {
               momWidget.splashHide();
               $('#itemIdDP1').val(''); 
              //return;                          
           }
           var valueITem =''
           var newItems = [];
           
           if(data.length == 0 ){
	           $('#itemIdDP1').val(''); 
           		$('#itemIdDP1').jqxComboBox('source', newItems);
				  
			}else{
	           valueITem = data[0].code;
	          
	
	            
	            for (var i = 0; i < data.length; i++) {
	                   newItems.push(data[i]);
	            }
	
	           $('#itemIdDP1').val(''); 
	           $('#itemIdDP1').jqxComboBox('source', newItems);
	           $('#itemIdDP1' ).val(valueITem); 
           }  
        }
    });   
            
})