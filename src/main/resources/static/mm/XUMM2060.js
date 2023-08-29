var menuId = 'XUMM2060';
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
	searchCallBack: function(index,your,action,btnId,param,result,data) {
	    if(index==0){
			AUIGrid.clearGridData(widget.grid[1]);		
		}
    },
	moveRowCallInit: function(index,your,action,btnId,param,result){
	    if(index == 0 && btnId == 'moveBtn'){
		    let toItem = AUIGrid.getGridData(widget.grid[1]);	
			if(toItem.length==0){				
			    return;
			}		   
			let fromItem = widget.getCheckedRowItems(widget.grid[0]);
			for(var i=0,max=toItem.length; i<max;i++){
			    for(var j=0,max2=fromItem.length; j<max2;j++){
				    if(toItem[i]['purchaseOrderId'] == fromItem[j]['purchaseOrderId']){
				        result.msg = '중복데이터 존재!';
					    result.result = 'WARN';
					    return;
				    }	
			    }
		    }
	    }
	},
	customCallBack: function(index,your,action,btnId,param,result,data) {
		if(index == 1 ){
			if(action =='P' || btnId == 'customBtn2-1'){
		    AUIGrid.clearGridData(widget.grid[1]);			
		    widget.findBtnClicked(0, {}, true, 'CELLCLICK',menuId,VIEW);
		   }
		}
	}
};

$(document).ready(function(event){	
	momSetup.init();
	//momWidget.init(1, menuId, VIEW,'GRID');	
	//momWidget.init(2, menuId, VIEW,'GRID');	
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