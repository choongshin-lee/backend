var menuId = 'XUPP3010_1';
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
	},
	cellClickCallBack: function(index,rowIndex,target,e) {
	    var item = e.item;	
		if(index==0){
			widget.findBtnClicked(1, {borId:e.item['borId']}, true, 'CELLCLICK',menuId,VIEW);
		}
		else if(index == 100){
		    if(target=='workCenterCd'){
				$('#workCenterCd'+'DP1').val(item['workCenterCd']);
				$('#borId'+'DP1').val(item['borId']);
				$('#routingId'+'DP1').val(item['routingId']);
			}
		}
	},
	searchCallInit: function(index,your,action,btnId,param,result,event) {		
	    let checkItem = widget.getCheckedRowItems(widget.grid[0]);
        if(index ==0){                                            
            AUIGrid.clearGridData(widget.grid[1]);    
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
    savePopCallInit: function(index,your,action,btnId,param,result) {
	    if(index ==0 && btnId =='saveBtnDP'&& $('#defaultPop1').attr('btnid')=='editBtn1'){		           
			 let checkedItem = widget.getCheckedRowItems(widget.grid[index],true);
			 if(checkedItem.length == 0){
				result.result='WARN'
				return;
			 }
			 param[0].workOrderId =checkedItem[0]['workOrderId'];
			 result.param =  param;
	    }
	},
};

$(document).ready(function(event){	
	momSetup.init();
	momWidget.init(1, menuId, VIEW);	
	momWidget.init(2, menuId, VIEW);	
	momWidget.gridPopup.init(1,11,1,'XUDG0210', VIEW); 
	VIEW.init();
});