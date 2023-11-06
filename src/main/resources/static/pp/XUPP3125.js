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
	},
	searchCallBack: function(index,your,action,btnId,param,result,data) {
	    if(index==1){
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
			//if(action=='D'&& btnId == 'customBtn2-1'){
            //    result.param = param;
            //}
            let checkItem = widget.getCheckedRowItems(widget.grid[1]);
	        if(btnId == 'customGridPopBtn2-5'){ 
		        if(checkItem.length==0){
                    result.msg = '하단에서 작업지시번호 선택필수!';
                    result.result = 'WARN';
                    return;
                }
                $('#workOrderIdSP21').val(checkItem[0]['workOrderId']);
                //$('#woResultIdSP21').val(checkItem[0]['woResultId']);
                $('#operationIdSP21').val(checkItem[0]['operationId']);
                $('#workOrderIdSP21').attr("disabled", true);
                //$('#woResultIdSP21').attr("disabled", true);
                $('#operationIdSP21').jqxComboBox({disabled: true});
            }
            else if(action=='R' && (btnId== "customBtn2-1" || btnId== "customBtn2-2"|| btnId== "customBtn2-3"|| btnId== "customBtn2-4" )) { 
                param.workOrderId = checkItem[0]['workOrderId'];
            }
		}
		else if(index == 0 &&  btnId == 'customBtn1-1'){	
		    momWidget.splashHide();
         	window.open('../PDF/'+param[0].drawingNo+ '.pdf','_blank','resizable=no,width=2000,height=1300,left=740,top=520');
         				   		   			
		}
	},
	customCallBack: function(index,your,action,btnId,param,result,data) {
	    //if(index == 0 &&  btnId == 'customBtn1-1'){	
		    //momWidget.splashHide();
         	//window.open('../PDF/'+param[0].drawingNo+ '.pdf','_blank','resizable=no,width=2000,height=1300,left=740,top=520');
         				   		   			
		//}
	}
};

$(document).ready(function(event){	
	momSetup.init();
	momWidget.init(1, menuId, VIEW);	
	momWidget.init(2, menuId, VIEW);	
	momWidget.gridPopup.init(2,21,1,'XUDG0580', VIEW);  

	VIEW.init();
});

