$(function(){
    $('#p-inform').hide();
	$('#pa-inform').hide();
	$('.pass').hide();
	$('#c-inform').click(function(){
		$('#p-inform').show();
		$('.slmh').hide();
	});
	$('#hid1').click(function(){
		$('#p-inform').hide();
		$('.slmh').show();	
	});
	$('#hid2').click(function(){
		$('#pa-inform').hide();
		$('.slmh').show();
	});
	$('#a-inform').click(function(){
		$('#pa-inform').show();
		$('.slmh').hide();
	});
	$('#ck-pw').click(function(){
		$('.pass').slideToggle(0);
	});
});