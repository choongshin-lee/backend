var menuId = 'XUMM6020';
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
	searchCallInit: function(index,your,action,btnId,param,result,event) { //조회액션 실행 전에 호출되는 함수 
        if(index==0 ){	                                               
		  AUIGrid.clearGridData(widget.grid[1]);
		} 
	},
    cellClickCallInit: function(index,rowIndex,e,) {

	},	
    cellClickCallBack: function(index,rowIndex,target,e) {				
		if(index==0){
			let checkItem = widget.getCheckedRowItems(widget.grid[0]);                                                
			widget.findBtnClicked(1, {inoutNo:checkItem[0].inoutNo }, true, 'CELLCLICK', menuId, VIEW);   
		}
		if(index == 1){
		    var item = e.item;	
		    setTimeout(function(){
		        mom_ajax('R', 'DD.DD00057', {itemId:item['itemId']}, function(result, data) {
		            if(result != 'SUCCESS') {
		                momWidget.splashHide();
			            return;							     
		            }	
		            for(var i=0;i<widget.columnProperty[1].length;i++){
			            if(widget.columnProperty[1][i]['columnId'] =='hcnCd'){
				            widget.columnDropdown[1][widget.columnProperty[1][i]['columnId']]=data;
			            }
			        }
	            }, undefined, undefined, this, false);	
		    }, 200);
		}
	},
	customCallInit: function(index,your,action,btnId,param,result) {
	    if(index == 1){ // 팝업에서 드롭다운 컬럼선택하여 열기직전 호출
            let checkItem = widget.getCheckedRowItems(widget.grid[0]);
            if(btnId == 'customBtn2-1'){ 
                for(var i=0,max=param.length; i<max;i++){
                    param[i]['processCd'] = checkItem[0]['processCd'];
                    param[i]['inoutNo'] = checkItem[0]['inoutNo'];
                }
            }
	    }
    },
};

$(document).ready(function(event){	
	momSetup.init();
	momWidget.init(1, menuId, VIEW,'GRID');	
	momWidget.init(2, menuId, VIEW,'GRID');	
	VIEW.init();
});