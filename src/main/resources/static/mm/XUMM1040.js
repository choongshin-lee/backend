var menuId = 'XUMM1040';
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
    searchCallInit: function(index,your,action,btnId,param,result,event) { //조회액션 실행 전에 호출되는 함수 
	    if(index==0 ){	                                             
			AUIGrid.clearGridData(widget.grid[1]);	
		} 
	},
	cellClickCallBack: function(index,rowIndex,target,e) {  //셀클릭 액션 실행 전에 호출되는 함수 
		if(index == 0 ){		
			widget.findBtnClicked(1, {prNo:e.item['prNo']}, true, 'CELLCLICK',menuId,VIEW);			
		}
	},
	customCallInit: function(index,your,action,btnId,param,result) {
		if(btnId == 'customBtn1-2'){	
		    momWidget.splashHide();
         	//http://gw.dklok.com/gw/outProcessLogOn.do?approKey=PRM20231016000002&outProcessCode=dotsest&loginId=mom&fileKey=&mod=W
         	//window.open('http://gw.dklok.com/gw/outProcessLogOn.do?approKey='+{prNo:e.item['prNo']}+'&outProcessCode=dotsest&loginId=mom&fileKey=&mod=W','_blank','resizable=no,width=2000,height=1300,left=740,top=520');
         	window.open('http://gw.dklok.com/gw/outProcessLogOn.do?approKey='+param[0].prNo+'&outProcessCode=dotsest&loginId=mom&fileKey=&mod=W','_blank','resizable=no,width=2000,height=1300,left=740,top=520');
         	//window.open('http://gw.dklok.com/gw/outProcessLogOn.do?approKey=PRM20231016000002&outProcessCode=dotsest&loginId=mom&fileKey=&mod=W','_blank','resizable=no,width=2000,height=1300,left=740,top=520');
         				   		   			
		}
	},
	
};

$(document).ready(function(event){	
	momSetup.init();
	momWidget.init(1, menuId, VIEW);	
	momWidget.init(2, menuId, VIEW);	
	VIEW.init();
});