var menuId = 'XUMM1020';
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
	createCallInit: function(index,your,action,btnId,param,result) { //등록버튼 팝업띄우기 전에 호출되는 함수 
		if(index ==1 && btnId =='createBtn2'){	
			 let checkItem = widget.getCheckedRowItems(widget.grid[0]);
			 if(checkItem.length==0){
					 result.msg = '상단에서 구매요청번호 선택해주세요';
				     result.result = 'WARN';
			         return;
			 }
		}
	},
    searchCallInit: function(index,your,action,btnId,param,result,event) { //조회액션 실행 전에 호출되는 함수 
		if(index==1 && (btnId== "excelUpBtn2" || btnId== "createBtn2"|| btnId== "copyBtn"|| btnId== "editBtn2" || btnId== "delBtn2" || btnId== "customBtn2-1")){
			let checkItem = widget.getCheckedRowItems(widget.grid[0]);
			result.param = {prNo:checkItem[0].prNo};
			//param.prNo = checkItem[0]['prNo'];
		}
		else if(index ==0) {                                            
		  AUIGrid.clearGridData(widget.grid[1]);  	
	    }
	},
	cellClickCallBack: function(index,rowIndex,target,e) {  //셀클릭 액션 실행 전에 호출되는 함수 
		if(index == 0 ){		
			widget.findBtnClicked(1, {prNo:e.item['prNo']}, true, 'CELLCLICK',menuId,VIEW);			
		}
	},
	createCallInit: function(index,your,action,btnId,param,result,data) {  //등록버튼 팝업띄우고나서 호출되는 함수 
		if(index ==1 && btnId =='createBtn'){
			let checkItem = widget.getCheckedRowItems(widget.grid[0]);
		    $('#prNoDP2').val(checkItem[0]['prNo']);
		}
	},
	copyCallInit: function(index,your,action,btnId,param,result) {
        if(index ==0 && btnId =='copyBtn'){ 
            $('#prNoDP1').val('');
        }
        else if(index ==1 && btnId =='copyBtn'){
	        $('#prSeqDP2').val('');   
            $('#purchaseRequestIdDP2').val('');
        }
    },
    customCallInit: function(index,your,action,btnId,param,result) {
		 let checkItem = widget.getCheckedRowItems(widget.grid[0]);
		 if(index == 1){
		    let checkItem = widget.getCheckedRowItems(widget.grid[0]);
		    if(btnId == 'customGridPopBtn2-3'){ // 커스텀 버튼 실행시 1 삭제(D) 2 TMP삽입(C) 3 프로시저실행(P) actionType 으로 시점 제어가능  		
			    if(checkItem.length==0){
				    //$('#' +'gridPop-'+btnId).modal('hide');
				    result.msg = '상단에서 발주서 선택필수!';
				    result.result = 'WARN';
				    return;
			    }
			    //$('#partnerCdSP21').val(checkItem[0]['partnerCd']);
		        //$('#partnerCdSP21').jqxComboBox({disabled: true});
		        //$('#currencyCdSP21').val(checkItem[0]['currencyCd']);
		        //$('#currencyCdSP21').jqxComboBox({disabled: true});
		        //$('#poUserNoSP21').val(checkItem[0]['poUserNo']);  
		        //$('#poUserNoSP21').jqxComboBox({disabled: true});
			}
		}
        else if(index == 20){			    
		    if(action='C'&& btnId == 'customBtn21-1'){ 
			    for(var i=0,max=param.length; i<max;i++){
				    param[i]['prNo'] = checkItem[0]['prNo'];
					
			    }
            }			        
		}
	},
	customCallBack: function(index,your,action,btnId,param,result,data) {
	    if(index == 20 &&  btnId == 'customBtn21-1'){	
		    widget.findBtnClicked(1, {}, true, btnId,menuId,VIEW);								   		   			
		}
	}
};

$(document).ready(function(event){	
	momSetup.init();
	momWidget.init(1, menuId, VIEW);	
	momWidget.init(2, menuId, VIEW);	
	momWidget.gridPopup.init(2,21,1,'XUDG0610', VIEW);
	VIEW.init();
});