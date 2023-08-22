var menuId = 'XUIC4080';
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
			widget.findBtnClicked(1, {issueRequestNo:e.item['issueRequestNo']}, true, 'CELLCLICK',menuId,VIEW);
		}
	},
	customCallInit: function(index,your,action,btnId,param,result) {
		 let checkItem = widget.getCheckedRowItems(widget.grid[0]);
		if(index == 1){
		    let checkItem = widget.getCheckedRowItems(widget.grid[0]);
		    if(btnId == 'customGridPopBtn2-3'){ // 커스텀 버튼 실행시 1 삭제(D) 2 TMP삽입(C) 3 프로시저실행(P) actionType 으로 시점 제어가능  		
			    if(checkItem.length==0){
				    //$('#' +'gridPop-'+btnId).modal('hide');
				    result.msg = '상단에서 자재반납요청 선택필수!';
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
				    param[i][doNo] = checkItem[0]['issueRequestNo'];
					
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
	momWidget.gridPopup.init(2,21,1,'XUDG0540', VIEW);
});