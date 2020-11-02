$(document).ready(function(){

	$('.q-head').click(function(){
		
		$(this).find('.btn').toggleClass('rotate')
		
		var ans =$(this).parent().find('.ans');
		var con =$(this).parent().find('#con');
		
		
		if(con.height()){
			con.css("height",0);
		}else{
			con.css("height",ans.height());
		}
		
		
	});
	
});
