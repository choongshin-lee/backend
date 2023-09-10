var menuId = 'XUPP3125';
var widget = momWidget;
var that = undefined;
var VIEW= {
	initParam		: undefined, 
	  
	init: function() {	
		that = this;	
		that.event();
		//$('head').append('<style type="text/css">.blocked-style {background:#ffb6b6 !important;font-weight:bold;color:#484545;}</style>');
		//$('head').append('<style type="text/css">.passed-style {background:#a2f1a4; ;font-weight:bold;color:#484545;}</style>');
		//$('head').append('<style type="text/css">.warn-style {background:#fafafa !important;}</style>');
	},
	event: function(e) {
	},
	cellClickCallInit: function(index,rowIndex,e,) {	
		 if(index == 1 && e.item.state !='R'){
			return false;
		}
	},	
	cellClickCallBack: function(index,rowIndex,target,e) {
	    if(index == 0 ){		
		    widget.findBtnClicked(1, {workOrderId:e.item['workOrderId']}, true, 'CELLCLICK',menuId,VIEW);			
		}
	},
	searchCallInit: function(index,your,action,btnId,param,result,event) {
	    if(index ==0) {                                             
		  AUIGrid.clearGridData(widget.grid[1]);  	
	    }
	    else if(index==1 && btnId== "customBtn2-1"){
		    let workOrderId = AUIGrid.getGridData(widget.grid[1])[1]['workOrderId'];
			result.param = {workOrderId:workOrderId};
		}
	},
	searchCallBack: function(index,your,action,btnId,param,result,data) {
	    if(index==1){
		    if(btnId== "customBtn2-1"){
				widget.findBtnClicked(0, {}, true, 'CELLCLICK',menuId,VIEW);
			}
			let columnProp = widget.columnProperty[1];
			for(let i =0;i<columnProp.length;i++){
			    AUIGrid.setColumnPropByDataField(widget.grid[1], columnProp[i]['columnId'], { 		    	
					styleFunction: function(rowIndex, columnIndex, value, headerText, item, dataField) {
						if(item != null){						
						    if(item.state == 'R' && columnProp[i]['columnEditable'] =='Y'){						 
							    return '';
							}
							else {							    
							    return 'warn-style';
							}
						}
					},
				});
			}
			// 변경된 rowStyleFunction 이 적용되도록 그리드 업데이트
			AUIGrid.update('#grid2');	
		}
	},
    customCallInit: function(index,your,action,btnId,param,result) {
		if(index == 1){
			if(action=='D'&& btnId == 'customBtn2-1'){
                result.param = param;
            }		
		}
	},
	customCallBack: function(index,your,action,btnId,param,result,data) {
	    if(index == 1 &&  btnId == 'customBtn2-1'){	
		    //widget.findBtnClicked(1, {}, true, btnId,menuId,VIEW);
		    //widget.findBtnClicked(1, {workOrderId:e.item['workOrderId']}, true, 'CELLCLICK',menuId,VIEW);							   		   			
		}
	}
};

$(document).ready(function(event){	
	momSetup.init();
	momWidget.init(1, menuId, VIEW);	
	momWidget.init(2, menuId, VIEW);	
	VIEW.init();
});