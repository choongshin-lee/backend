var menuId = 'XUMM3050';
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
	    dateSelect();	
	    $('#partnerCdSP1').jqxComboBox({disabled: true});	
	},
    searchCallInit: function(index,your,action,btnId,param,result,event) { //조회액션 실행 전에 호출되는 함수 
        if(index==0 ){	                                             
		    AUIGrid.clearGridData(widget.grid[1]);
		}  
	},
	cellClickCallBack: function(index,rowIndex,target,e) {				
		if(index==0){
			widget.findBtnClicked(1, {departureNo:e.item['departureNo']}, true, 'CELLCLICK',menuId,VIEW);
		}
	}
};

$(document).ready(function(event){	
	momSetup.init();
	momWidget.init(1, menuId, VIEW);	
	momWidget.init(2, menuId, VIEW);
	VIEW.init();
});


function dateSelect(){
   mom_ajax('R', 'XUMM3010.dropdownlistContentpartnerCdSP1-select1', {}, function(result, data) {
      if(result == 'SUCCESS') {

         var a = data[0].code;
         $('#partnerCdSP1' ).val(a);   
      return;
      }
   }, undefined, undefined, this, false,'Y');
      
};