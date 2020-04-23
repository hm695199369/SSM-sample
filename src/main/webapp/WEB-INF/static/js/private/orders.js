$(function() {
	showOrders();
	
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

function showOrders() {
	$.ajax({
		url:'/MyShop/controller/order/orders',
		type:'get',
		dataType:'json',
		success:function(data){
			var content="";
			var totalPrice=0.0;
			for(var i=0;i<data.length;i++){
				var order=data[i];	
				content='<div class="middle_info_row" style="width: 1210px;">'
					+'<div class="middle_info_row2_left">订单号:</div>' 
					+'<div class="middle_info_row2_right">'+order.ordernumber+'</div>' 
					+'<div class="address_add_self"><span class="btn btn-info" style="margin-left: 60px;margin-top:20px">退款</span></div>'
					+'</div>';
				$("#orders-list").append(content);
				$("#orders-list").append('<div id="order-info'+order.id+'"></div>');
				
				orderInfo(order.id,order.createtime);
		
			}
			
			
			
		}
	});

}

function orderInfo(oid,createtime) {
	var time = new Date(createtime).format("yyyy-MM-dd");
	var content="";
	$.ajax({
		url:'/MyShop/controller/order/orderInfo',
		type:'post',
		dataType:'json',
		data:{
			orderid:oid
		},
		success:function(data){	
			content="";
			var totalPrice=0.0;
			for(var i=0;i<data.length;i++){
//				alert(time);
				var orderItem=data[i];	
				 content +='<div class="middle_info_row" >'
					+'<div class="middle_info_row3_right">'+time+'</div>'
					+'<div class="middle_info_row3_right" >'+orderItem.number+' </div>'
					+'<div class="middle_info_row3_right">¥'+orderItem.number*orderItem.price+'</div>'
					+'<div class="middle_info_row3_middle">'+orderItem.name+'</div>'
					+'<div class="middle_info_row3_left"><img src="'+orderItem.img+'" /> </div>'
				+'</div>';
				
				
			}
			var temp="#order-info"+oid
			$(temp).html(content);
		
		}
	});
	
	
//	return content;
	
}


function truncateOrder(){
	$.ajax({
		url : '/MyShop/controller/order/truncate',
		type : 'get',
		dataType : 'json',
		success : function(data) {
			if (data == 'notlogin') {
				$('#loginModal').modal('show');
			} else {
				window.location.reload();
			}
		}
	});
}

Date.prototype.format = function(fmt) { 
     var o = { 
        "M+" : this.getMonth()+1,                 // 月份
        "d+" : this.getDate(),                    // 日
        "h+" : this.getHours(),                   // 小时
        "m+" : this.getMinutes(),                 // 分
        "s+" : this.getSeconds(),                 // 秒
        "q+" : Math.floor((this.getMonth()+3)/3), // 季度
        "S"  : this.getMilliseconds()             // 毫秒
    }; 
    if(/(y+)/.test(fmt)) {
            fmt=fmt.replace(RegExp.$1, (this.getFullYear()+"").substr(4 - RegExp.$1.length)); 
    }
     for(var k in o) {
        if(new RegExp("("+ k +")").test(fmt)){
             fmt = fmt.replace(RegExp.$1, (RegExp.$1.length==1) ? (o[k]) : (("00"+ o[k]).substr((""+ o[k]).length)));
         }
     }
    return fmt; 
} 



