var menuId = 'XUCC2240';
var widget = momWidget;
var that = undefined;
var VIEW= {
  initParam   : undefined, 
    
  init: function() {  
    that = this;  
    that.event();
  },
  event: function(e) {
      codeSelect();	
  },
  searchCallInit: function(index,your,action,btnId,param,result,event) { //조회액션 실행 전에 호출되는 함수 
        if(index ==0){                                            
            AUIGrid.clearGridData(widget.grid[1]);    
        }
    },
    cellClickCallBack: function(index,rowIndex,target,e) {        
    if(index==0){
      widget.findBtnClicked(1, {warehouseCd:e.item['warehouseCd'],itemId:e.item['itemId'],uom:e.item['uom'],startMonthDay:e.item['startMonthDay'],endMonthDay:e.item['endMonthDay']}, true, 'CELLCLICK',menuId,VIEW);
    }
  },
};

$(document).ready(function(event){  
  momSetup.init();
  momWidget.init(1, menuId, VIEW);  
  momWidget.init(2, menuId, VIEW);  
  VIEW.init();
});

function codeSelect(){
   mom_ajax('R', 'XUCC2240.dropdownlistContentstartMonthSP1-select1', {}, function(result, data) {
      if(result == 'SUCCESS') {
      var a = data[0].code;
      $('#startMonthSP1' ).val(a);
      $('#endMonthSP1' ).val(a);
      return;
      }
   }, undefined, undefined, this, false,'Y');
};  