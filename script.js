$('.contests__tab-block-detail').on('click',function(){
	if ($(this).hasClass('contests__tab-block-detail_active')) {
		$(this).removeClass('contests__tab-block-detail_active');
		$(this).parents('.contests__tab-block').removeClass('contests__tab-block_active');
		$(this).parents('.contests__tab-block-inner').children('.contests__tab-block-bottom').removeClass('contests__tab-block-bottom_active');
	} else {
		$(this).addClass('contests__tab-block-detail_active');
		$(this).parents('.contests__tab-block').addClass('contests__tab-block_active');
		$(this).parents('.contests__tab-block-inner').children('.contests__tab-block-bottom').addClass('contests__tab-block-bottom_active');
	}
});
$('.contests__class').on('click',function(){
	var tab = $(this).attr('data-tab');
	if (!$(this).hasClass('contests__class_active')) {
		$(this).parent().children('.contests__class').removeClass('contests__class_active');
		$(this).addClass('contests__class_active');
		$(this).parents('.main-content__inner').find('.contests__tab').hide(0).removeClass('contests__tab_active');
		$('#'+tab).show(0).addClass('contests__tab_active');
	}
})