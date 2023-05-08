var menuId = 'XUMM5010';
var widget = momWidget;
var that = undefined;
var VIEW= {
  initParam   : undefined, 
  inoutNo         : undefined,
  inoutType       : undefined,
  init: function() {  
    that = this;  
    that.event();
  },
  event: function(e) {
  
  },
    copyCallInit: function(index,your,action,btnId,param,result) {
        if(index ==0 && btnId =='copyBtn'){ 
            $('#returnNoDP1').val('');
        }
    },
    createCallInit: function(index,your,action,btnId,param,result) { //등록버튼 팝업띄우기 전에 호출되는 함수 
        if(index ==1 && btnId =='createBtn'){              
            let checkItem = widget.getCheckedRowItems(widget.grid[0]);
            if(checkItem.length==0){
                result.msg = '상단에서 반품서 선택필수!';
                result.result = 'WARN';
                return;
            }
            $('#returnNoDP2').val(checkItem[0].returnNo);   
        }
    },
    searchCallInit: function(index,your,action,btnId,param,result,event) { //조회액션 실행 전에 호출되는 함수 
        if(index==1){
            let checkItem = widget.getCheckedRowItems(widget.grid[0]);
            param.receiptNo = checkItem[0].receiptNo;
        } 
        else if(index==0 ){                                                 
            AUIGrid.clearGridData(widget.grid[1]);
        }  
    },
    cellClickCallBack: function(index,rowIndex,target,e) {        
        if(index==0){
            widget.findBtnClicked(1, {returnNo:e.item['returnNo']}, true, 'CELLCLICK',menuId,VIEW);
        }
    },
};

$(document).ready(function(event){  
    momSetup.init();
    //momWidget.init(1, menuId, VIEW,'GRID'); 
    //momWidget.init(2, menuId, VIEW,'GRID'); 
    momWidget.init(1, menuId, VIEW);  
    momWidget.init(2, menuId, VIEW);
    //momWidget.gridPopup.init(2,21,1,'XUSM8110', VIEW);
    //momWidget.gridPopup.init(2,21,1,'XUDG0430', VIEW);
    VIEW.init();
});