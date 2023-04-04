var menuId = 'XUWM6050';
var widget = momWidget;
var that = undefined;
var VIEW= {
  initParam   : undefined, 
    
  init: function() {  
    that = this;  
    that.event();
  },
  event: function(e) {
  },
  searchCallInit: function(index,your,action,btnId,param,result,event) { //조회액션 실행 전에 호출되는 함수 
        if(index ==0){                                            
            AUIGrid.clearGridData(widget.grid[1]);
            AUIGrid.clearGridData(widget.grid[2]);    
        }
        else if(index==1){
          AUIGrid.clearGridData(widget.grid[2]);
      }
    },
    createCallInit: function(index,your,action,btnId,param,result,data) {  //등록버튼 팝업띄우기 전에 호출되는 함수 
    if(index ==1 && btnId =='createBtn'){
      let checkedItem = widget.getCheckedRowItems(widget.grid[0]);  
      if(checkedItem.length==0){
                result.msg = '상단에서 언로딩번호 선택필수!';
        result.result = 'WARN';
        return;
      }
    }
  },
  customCallInit: function(index,your,action,btnId,param,result) {
        if(index == 2){ // 팝업에서 드롭다운 컬럼선택하여 열기직전 호출
          let checkItem = widget.getCheckedRowItems(widget.grid[1]);
          if(btnId == 'customGridPopBtn3-1'){ 
                if(checkItem.length==0){
                    result.msg = 'Picking 확정 상세에서 언로딩번호 선택필수!';
                    result.result = 'WARN';
                    return;
                }
                $('#itemIdSP31').val(checkItem[0]['itemId']);
                $('#itemIdSP31').attr("disabled", true);
                $('#unloadingLocationCdSP31').val(checkItem[0]['unloadingLocationCd']);
                $('#unloadingLocationCdSP31').jqxComboBox({disabled: true});
                $('#toLogisticsUnitCdSP31').val(checkItem[0]['toLogisticsUnitCd']);
                $('#toLogisticsUnitCdSP31').jqxComboBox({disabled: true});
            }
      }
      else if(index == 30){         
            let checkItem = widget.getCheckedRowItems(widget.grid[1]);
            if(action='C'&& btnId == 'customBtn31-1'){ 
                for(var i=0,max=param.length; i<max;i++){
                    param[i]['unloadingId'] = checkItem[0]['unloadingId'];
                    param[i]['unloadingDetailId'] = checkItem[0]['unloadingDetailId'];
                    param[i]['toAreaCd'] = checkItem[0]['toAreaCd'];
                    param[i]['toLogisticsUnitCd'] = checkItem[0]['toLogisticsUnitCd'];
                    param[i]['unit'] = checkItem[0]['unit'];
                }
            }
        }
    },
    cellClickCallBack: function(index,rowIndex,target,e) {        
    if(index==0){
      widget.findBtnClicked(1, {unloadingId:e.item['unloadingId']}, true, 'CELLCLICK',menuId,VIEW);
    }
    else if(index==1){
      widget.findBtnClicked(2, {unloadingDetailId:e.item['unloadingDetailId']}, true, 'CELLCLICK',menuId,VIEW);
    }
  },
};
$(document).ready(function(event){  
  momSetup.init();
  momWidget.init(1, menuId, VIEW);  
  momWidget.init(2, menuId, VIEW);  
  momWidget.init(3, menuId, VIEW);  
  momWidget.gridPopup.init(3,31,1,'XUDG0340', VIEW);
  VIEW.init();
});