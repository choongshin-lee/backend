var menuId = 'XUMM4210';
var widget = momWidget;
var that = undefined;
var VIEW= {
  initParam   : undefined, 
  partnerCd       : undefined,
  init: function() {  
    that = this;  
    that.event();
  },
  event: function(e) {
      $(document).on('change','#partnerCdDP1', function(e) {
			mom_ajax('R', 'XUMD1030.findBtn1', {partnerCd:$('#partnerCdDP1').val(),useYn:'Y'}, function(result1, data1) { 
		        if(result1 != 'SUCCESS' || data1.length == 0) {
		    	  momWidget.splashHide();
			      return;							     
		      }			
		     var currencyCd =  data1[0]['currencyCd'];
		     var taxType =  data1[0]['taxType'];
		     $('#currencyCdDP1').val(currencyCd);
		     $('#taxTypeDP1').val(taxType);
		      	}, undefined, undefined, this, false);
		});	
		$(document).on('change','#itemIdDP2', function(e) {
			mom_ajax('R', 'XUMD3010.findBtn1', {itemId:$('#itemIdDP2').val(),vendorCdNm:$('#partnerCdDP2').val(),currencyCd:$('#currencyCdDP2').val()}, function(result1, data1) { 
		        if(result1 != 'SUCCESS' || data1.length == 0) {
		    	  momWidget.splashHide();
			      return;							     
		      }			
		     var purchaseUom =  data1[0]['purchaseUom'];
		     var unitPrice =  data1[0]['unitPrice'];
		     $('#purchaseUomDP2').val(purchaseUom);
		     $('#unitPriceDP2').val(unitPrice);
		      	}, undefined, undefined, this, false);
		});
  },
  editCallInit: function(index,your,action,btnId,param,result) {
      if(index ==0 && btnId =='editBtn'){ 
        let checkedItem = widget.getCheckedRowItems(widget.grid[index]);    
         //   VIEW.partnerCd = checkedItem[0]['vendorCd'];
    }
  },
    copyCallInit: function(index,your,action,btnId,param,result) {
        if(index ==0 && btnId =='copyBtn'){ 
            let checkedItem = widget.getCheckedRowItems(widget.grid[index]);    
            VIEW.partnerCd = checkedItem[0]['vendorCd'];
        }
    },
    savePopCallInit: function(index,your,action,btnId,param,result) {
        if(index ==1 && btnId=='editBtn'){
            let checkItem = widget.getCheckedRowItems(widget.grid[1]);
         //   result.param = [{purchaseInoutId:checkItem[0]['purchaseInoutId'],receiptNo:checkItem[0]['receiptNo'],receiptRequestQty:checkItem[0]['receiptRequestQty']}];
        }
  },
    createCallInit: function(index,your,action,btnId,param,result) { //등록버튼 팝업띄우기 전에 호출되는 함수 
        if(index ==1 && btnId =='createBtn'){              
            let checkItem = widget.getCheckedRowItems(widget.grid[0]);
            if(checkItem.length==0){
                result.msg = '상단에서 입고서 선택필수!';
                result.result = 'WARN';
                return;
            }
            $('#receiptNoDP2').val(checkItem[0].receiptNo);   
            $('#partnerCdDP2').val(checkItem[0].partnerCd);  
            $('#currencyCdDP2').val(checkItem[0].currencyCd);  
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
    if(index==100 && target=='vendorNm'){
      $('#vendorNmDP1').val(e.item.partnerCd+'('+e.item.partnerNm+')');
            VIEW.partnerCd = e.item.partnerCd;
    }
    else if(index==0){
      widget.findBtnClicked(1, {receiptNo:e.item['receiptNo']}, true, 'CELLCLICK',menuId,VIEW);
    }
  },
  
};

$(document).ready(function(event){  
  momSetup.init();
  momWidget.init(1, menuId, VIEW,'GRID'); 
  momWidget.init(2, menuId, VIEW,'GRID'); 
  VIEW.init();
});