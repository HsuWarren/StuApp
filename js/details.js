 $(function(){
//	function centerModals() {   
//　　	$('#myModal').each(function(i) {   
//　　　　var $clone = $(this).clone().css('display','block').appendTo('body');
//　　　　var top = Math.round(($clone.height() - $clone.find('.modal-content').height()) / 2);
//　　　　top = top > 0 ? top : 0;   
//　　　　$clone.remove();   
//　　　　$(this).find('.modal-content').css("margin-top", top);   
//　　　　});   
//	};

//	$('#myModal').on('show.bs.modal', centerModals); 
  	//禁用空白处点击关闭
//	$('#myModal').modal({
//		backdrop: 'static',
//		keyboard: false, 
//		show:false
//	});
	//页面大小变化是仍然保证模态框水平垂直居中
//	$(window).on('resize', centerModals);

	$('#myModal').on('shown.bs.modal', function (e) {  
            // 关键代码，如没将modal设置为 block，则$modala_dialog.height() 为零  
            $(this).css('display', 'block');  
            var modalHeight=$(window).height() / 2 - $('#myModal .modal-dialog').height() / 2;  
            $(this).find('.modal-dialog').css({  
                'margin-top': modalHeight  
            });  
        });  

  	$('#openmodal').modal('show')
});
