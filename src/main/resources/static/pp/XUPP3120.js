var menuId = 'XUPP3120';
var widget = momWidget;
var that = undefined;
var VIEW= {
	initParam		: undefined, 
	  
	init: function() {	
		that = this;	
		that.event();
		$('head').append('<style type="text/css">.blocked-style {background:#ffb6b6 !important;font-weight:bold;color:#484545;}</style>');
		$('head').append('<style type="text/css">.passed-style {background:#a2f1a4; ;font-weight:bold;color:#484545;}</style>');
		$('head').append('<style type="text/css">.warn-style {background:#fafafa !important;}</style>');
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
			    for(var i=0,max=param.length; i<max;i++){
				    if( param[i].state !='R'){
						result.msg = '상태가 진행인 공정만 실적등록 가능합니다!';
						result.result = 'WARN';
						return;
					}				    
	            }
            result.param = param;
            }		
		}
	},
	calendarGridSaveCallBack: function(index,rowIndex,columnIndex,dataField,item,nowTime,e){
		 if(index==1){
			if(rowIndex==0){
				/*  if(dataField =='startDate') {
							let woStartDate   = new Date(item.woStartDate);
		                    let woOpStartDate = new Date(nowTime);
						    if(woOpStartDate<woStartDate){
							    AUIGrid.setCellValue(widget.grid[index], rowIndex,columnIndex, '');
							    momWidget.messageBox({type:'warning', width:'400', height: '145', html: '공정 시작시간은 작업지시 확정일 이후여야 합니다!'});
							    momWidget.splashHide();
						        return;
						    }
			   }
			   else*/ if (dataField =='endDate'){
				         let woOpStartDate = AUIGrid.getCellValue(widget.grid[index],rowIndex, 'startDate');
				         if(woOpStartDate=='' || woOpStartDate== undefined ){
					            AUIGrid.setCellValue(widget.grid[index], rowIndex,columnIndex, '');
							    momWidget.messageBox({type:'warning', width:'400', height: '145', html: '공정 시작시간 먼저 입력해주세요!'});
							    momWidget.splashHide();
						        return;
				         }
				         else{
								let woStartDate   = new Date(item.startDate);
					            let woOpEndDate = new Date(nowTime);
						    if(woOpEndDate<woStartDate){
							    AUIGrid.setCellValue(widget.grid[index], rowIndex,columnIndex, '');
							    momWidget.messageBox({type:'warning', width:'400', height: '145', html: '공정 완료시간은 공정 시작시간 이후여야 합니다!'});
							    momWidget.splashHide();
						        return;
						    }
				         }
					        
			   }
			}
			else{
				 /* if(dataField =='startDate') {
							let prevEndDate   = new Date(AUIGrid.getCellValue(widget.grid[index],rowIndex-1, 'endDate'));
		                    let woOpStartDate = new Date(nowTime);
						    if(woOpStartDate<prevEndDate){
							    AUIGrid.setCellValue(widget.grid[index], rowIndex,columnIndex, '');
							    momWidget.messageBox({type:'warning', width:'400', height: '145', html: '공정 시작시간은 이전 공정 완료시간 이후여야 합니다!'});
							    momWidget.splashHide();
						        return;
						    }
			   }
			   else*/ if (dataField =='endDate'){
				         let woOpStartDate = AUIGrid.getCellValue(widget.grid[index],rowIndex, 'startDate');
				         if(woOpStartDate=='' || woOpStartDate== undefined ){
					            AUIGrid.setCellValue(widget.grid[index], rowIndex,columnIndex, '');
							    momWidget.messageBox({type:'warning', width:'400', height: '145', html: '공정 시작시간 먼저 입력해주세요!'});
							    momWidget.splashHide();
						        return;
				         }
				         else{
								let woStartDate   = new Date(item.startDate);
					            let woOpEndDate = new Date(nowTime);
						    if(woOpEndDate<woStartDate){
							    AUIGrid.setCellValue(widget.grid[index], rowIndex,columnIndex, '');
							    momWidget.messageBox({type:'warning', width:'400', height: '145', html: '공정 완료시간은 공정 시작시간 이후여야 합니다!'});
							    momWidget.splashHide();
						        return;
						    }
				         }
					        
			   }
			}
			 
		}
	}
};

$(document).ready(function(event){	
	momSetup.init();
	momWidget.init(1, menuId, VIEW);	
	momWidget.init(2, menuId, VIEW);	
	VIEW.init();
});