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
    searchCallInit: function(index,your,action,btnId,param,result,event) { //조회액션 실행 전에 호출되는 함수 
        let checkItem = widget.getCheckedRowItems(widget.grid[0]);
        if(index==0 ){                                                 
      AUIGrid.clearGridData(widget.grid[1]);  
    } 
  },
    cellClickCallBack: function(index,rowIndex,target,e) {        
    if(index==0){
      widget.findBtnClicked(1, {returnNo:e.item['returnNo']}, true, 'CELLCLICK',menuId,VIEW);
    }
  },
  customCallInit: function(index,your,action,btnId,param,result) {
      var checkItem = widget.getCheckedRowItems(widget.grid[0]);
      if(index == 1){
        
      if(btnId == 'customGridPopBtn2-1'){ // 커스텀 버튼 실행시 1 삭제(D) 2 TMP삽입(C) 3 프로시저실행(P) actionType 으로 시점 제어가능      
          if(checkItem.length==0){
            result.msg = '상단에서 반품서 선택필수!';
            result.result = 'WARN';
            return;
            }
          //    VIEW.inoutNo   = checkItem[0]['returnNo'];
      //  VIEW.inoutType = checkItem[0]['inoutType'];
        $('#partnerCdSP21').val(checkItem[0]['partnerCd']);  
        $('#grDateSD21').val($('#createDateSD1').val());
        $('#grDateED21').val($('#createDateED1').val());
        $('#partnerCdSP21').jqxComboBox({disabled: true});
        }
    }
    else if(index == 20){
        if(action='C'&& btnId == 'customBtn21-1'){ 
          for(var i=0,max=param.length; i<max;i++){
            param[i]['inoutNo']   = checkItem[0]['returnNo'];
          param[i]['inoutType'] = 'TD';
          }
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
  //momWidget.gridPopup.init(2,21,1,'XUSM8110', VIEW);
  momWidget.gridPopup.init(2,21,1,'XUDG0430', VIEW);
  VIEW.init();
});