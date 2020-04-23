$(function() {
	showGoods(1);

	$("#lastPage").click(function() {
		var totalPage = $("#totalPage").html();
		showGoods(totalPage);
	});
	$("#fisrtPage").click(function() {
		showGoods(1);
	});

	$("#nextPage").click(function() {
		var currentPage = parseInt($("#currentPage").html());
		var totalPage = parseInt($("#totalPage").html());
		var page = currentPage + 1;
		if (page <= totalPage) {
			showGoods(page);
		}
	});

	$("#prePage").click(function() {
		var currentPage = parseInt($("#currentPage").html());
		var page = currentPage - 1;
		if (page > 0) {
			showGoods(page);
		}
	});
	
	
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
function showGoods(vpage) {
	
			$.ajax({
				url : '/MyShop/controller/goods/show',
				type : 'post',
				dataType : 'json',
				data : {
					gtid : $("#goodstypeid").val(),
					page : vpage
				},
				success : function(data) {
					var content = "";
					var currentPage = data.currentPage;
					var totalPage = data.totalPage;
					var goods = data.goods;
					for (var i = 0; i < goods.length; i++) {
						var good = goods[i];
						content += '<div class="paging_goods">'
								+ '<div class="paging_good">' + '<img src="'
								+ good.img
								+ '" class="paging_good_img" title="点击查看商品详细信息"  onclick="showDetail('+ good.id+ ',\''+ good.name+ '\','+ good.price+ ',\''+ good.img+ '\',\''+ good.description+ '\','+ good.stock+ ')" />'
								+ '</div>'
								+ '<div class="paging_good_info">'
								+ '<div class="paging_good_info_left">'
								+ '<div class="paging_good_info_left_top">¥'
								+ good.price
								+ '</div>'
								+ '<div class="paging_good_info_left_bottom">'
								+ '<img class="paging_good_info_left_bottom_img" src="image/icon/加.png" onclick="updateCart('
								+ good.id
								+ ',\''
								+ good.name
								+ '\','
								+ good.price
								+ ',\''
								+ good.img
								+ '\')"/>'
								+ '</div>'
								+ '</div>'
								+ '<div class="paging_good_info_right">'
								+ '<div style="display: table-cell; vertical-align: middle;">'
								+ good.name
								+ '</div>'
								+ '</div>'
								+ '</div>'
								+ '</div>'

					}
					$("#good-list").html(content);
					$("#currentPage").html(currentPage);
					$("#totalPage").html(totalPage);

				}
			});
}

function updateCart(pgid, pgname, pgprice, pgimg) {
	// alert(pgid+":"+pgname+":"+pgprice+":"+pgimg);
	$.ajax({
		url : '/MyShop/controller/cart/update',
		type : 'post',
		dataType : 'json',
		data : {
			"cart.gid" : pgid,
			"cart.gname" : pgname,
			"cart.gprice" : pgprice,
			"cart.gimg" : pgimg,
			"cart.gnumber" : 1,
		},
		success : function(data) {
			if (data == 'notlogin') {
				$('#loginModal').modal('show');
				$("#lmes").html("添加到购物车失败,请先登录。");
			} else {
				alert(data);
			}
		}
	});
}



function showDetail(goodsid,goodsname,goodsprice,goodsimg,goodsdescription,goodsstock) {
//	alert(goodsid+","+goodsname+","+goodsprice+","+goodsimg+","+goodsdescription+","+goodsstock);
	 window.location.assign("jsp/detail.jsp?goodsid="+goodsid+"&goodsname="+goodsname+"&goodsprice="+goodsprice+"&goodsimg="+goodsimg+"&goodsdescription="+goodsdescription+"&goodsstock="+goodsstock);
}
