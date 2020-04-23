$(function() {
	
	$('.slide .icon li').not('.up,.down').mouseenter(function() {
		$('.slide .info').addClass('hover');
		$('.slide .info li').hide();
		$('.slide .info li.' + $(this).attr('class')).show(); //.slide .info li.qq
	});
	$('.slide').mouseleave(function() {
		$('.slide .info').removeClass('hover');
	});

	$('#btn').click(function() {
		$('.slide').toggle();
		if($(this).hasClass('index_cy')) {
			$(this).removeClass('index_cy');
			$(this).addClass('index_cy2');
		} else {
			$(this).removeClass('index_cy2');
			$(this).addClass('index_cy');
		}

	});

	//点击返回顶部500ms的滑动效果
	$('.up').on('click', function() {
		$('html,body').animate({
			scrollTop: 0
		}, 500);
	})
	//点击到达当前显示底部500ms的滑动效果
	$('.down').on('click', function() {
		$('html,body').animate({
			scrollTop:$('.bottom').offset().top
		}, 500);
	})
});

function addNum(){
	var snum=$("#num").html();
	var num=parseInt(snum);
	var sg_count=$("#g_count").html();
	var g_count=parseInt(sg_count);
	if(g_count > num){
		$("#num").html(num+1);
	}else{
		alert("抱歉,库存不足！");
	}
}
function subNum(){
	var snum=$("#num").html();
	var num=parseInt(snum);
	if(1 < num){
		$("#num").html(num-1);
	}
}
function addCart(){
	$.ajax({
		url:'/MyShop/controller/cart/update',
		type:'post',
		dataType:'json',
		data:{
			"cart.gid" : parseInt($("#goodsid").val()),
			"cart.gname" : $("#goodsname").val(),
			"cart.gprice" : $("#goodsprice").val(),
			"cart.gimg" : $("#goodsimg").val(),
			"cart.gnumber" : parseInt($("#num").html()),
		},
		success:function(data){
			if (data == 'notlogin') {
				$('#loginModal').modal('show');
				$("#lmes").html("添加到购物车失败,请先登录。");
			} else {
				alert(data);
			}
		}
	});
}
