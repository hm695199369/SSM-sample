$(function() {
	showCart();
	
	
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

function showCart() {
	$
			.ajax({
				url : '/MyShop/controller/cart/show',
				type : 'get',
				dataType : 'json',
				success : function(data) {
					var content = "";
					var totalPrice = 0.0;
					for (var i = 0; i < data.length; i++) {
						var cart = data[i];
						content += '<div class="middle_info_row3"><div class="middle_info_row3_right">'
								+ '<img src="image/icon/关闭.png" id="delete_cart_img" onclick="deleteCart('
								+ cart.gid
								+ ')"/>'
								+ '</div>'
								+ '<div class="middle_info_row3_right"><div class="middle_right_info_right_select_sub" onclick="subNum('
								+ cart.gid
								+ ','
								+ cart.gprice
								+ ')">-</div>'
								+ '<div class="middle_right_info_right_num" id="num'
								+ cart.gid
								+ '">'
								+ cart.gnumber
								+ '</div>'
								+ '<div class="middle_right_info_right_select_add" onclick="addNum('
								+ cart.gid
								+ ','
								+ cart.gprice
								+ ')">+</div></div>'
								+ '<div class="middle_info_row3_right">'
								+ cart.gprice
								+ '</div>'
								+ '<div class="middle_info_row3_middle">'
								+ cart.gname
								+ '</div>'
								+ '<div class="middle_info_row3_left">'
								+ '<img src="'
								+ cart.gimg
								+ '" />'
								+ '</div></div>';
						totalPrice += cart.gnumber * cart.gprice;
					}

					$("#cart-list").html(content);
					$(".middle_info_row4_middle").html("¥" + totalPrice);

				}
			});
}

function deleteCart(vgoodsid) {
	$.ajax({
		url : '/MyShop/controller/cart/delete',
		type : 'post',
		dataType : 'json',
		data : {
			gid : vgoodsid,
		},
		success : function(data) {
			if (data == 'notlogin') {
				$('#loginModal').modal('show');
			} else {
				window.location.reload();
			}
		}
	});
}

function truncateCart(){
	$.ajax({
		url : '/MyShop/controller/cart/truncate',
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

function showOrder() {
	window.location.assign("jsp/order.jsp");
}

function addNum(gid, gprice) {
	var selectnum = "#num" + gid;
	var snum = $(selectnum).html();
	var totalPrice = parseFloat($(".middle_info_row4_middle").html().substring(
			1));
	var price = parseFloat(gprice);
	// var gPrice=$("#gPrice").html();
	var num = parseInt(snum);
	if (10000 > num) {
		$(selectnum).html(num + 1);
		totalPrice = totalPrice + price;
		$(".middle_info_row4_middle").html("¥" + totalPrice);
		updateNumber(gid, num + 1);
	} else {
		alert("抱歉,库存不足！");
	}
}
function subNum(gid, gprice) {
	var selectnum = "#num" + gid;
	var totalPrice = parseFloat($(".middle_info_row4_middle").html().substring(
			1));
	var price = parseFloat(gprice);
	var snum = $(selectnum).html();
	var num = parseInt(snum);
	if (1 < num) {
		$(selectnum).html(num - 1);
		totalPrice = totalPrice - price;
		$(".middle_info_row4_middle").html("¥" + totalPrice);
		updateNumber(gid, num - 1);
	} else {
		alert("再减少就没啦！请直接在右边删除！")
	}
}

function updateNumber(id, num) {
	$.ajax({
		url : '/MyShop/controller/cart/updateNumber',
		type : 'post',
		dataType : 'json',
		data : {
			gid : id,
			gnumber : num,
		}
//		success : function(data) {
//			alert(data);
//		}
	});
}

// function checkOut() {
// $.ajax({
// url : '/WoniuShop1.0.0/checkout',
// type : 'post',
// dataType : 'json',
// data : {
// },
// success : function(data) {
// if (data == 'notlogin') {
// $('#loginModal').modal('show');
// } else {
// alert(data);
// window.location.reload();
// }
//
// }
// });
// }
