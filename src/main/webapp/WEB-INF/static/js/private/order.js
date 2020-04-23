$(function() {
	showOrder();
	showAddress();
	
	
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

function showOrder() {
	$.ajax({
		url:'/MyShop/controller/order/show',
		type:'get',
		dataType:'json',
		success:function(data){
			var content="";
			var totalPrice=0.0;
			for(var i=0;i<data.length;i++){
				var cart=data[i];	
				content+='<div class="middle_info_row3"><div class="middle_info_row3_right">'
					+cart.gnumber*cart.gprice
					+'</div>'
					+'<div class="middle_info_row3_right">'+cart.gnumber+'</div>'
					+'<div class="middle_info_row3_right">'+cart.gprice+'</div>'
					+'<div class="middle_info_row3_middle">'+cart.gname+'</div>'
					+'<div class="middle_info_row3_left">'
					+'<img src="'+cart.gimg+'" />'
					+'</div></div>';
				totalPrice+=cart.gnumber*cart.gprice;
			}
			$(".middle_info_row2_right").html(""+new Date().getTime()+Math.floor(Math.random()*10)+Math.floor(Math.random()*10)+Math.floor(Math.random()*10));
			$("#order-list").html(content);
			$("#totalPrice").html("支付:¥"+totalPrice);
			
		}
	});

}
function createOrder() {
	$.ajax({
		url:'/MyShop/controller/order/create',
		type:'post',
		dataType:'json',
		data:{
			ordernumber:$(".middle_info_row2_right").html(),
			pid:$("input[name='address']:checked").val()
		},
		success:function(data){	
			alert(data);
			if(data.indexOf("成功")){
				location.href="controller/pay/pay";
			}
		}
	});
}
function showAddress() {
	$.ajax({
		url:'/MyShop/controller/address/show',
		type:'get',
		dataType:'json',
		success:function(data){
			var postInforList = data.postInforList;
			var content="";
			for(var i=0;i<postInforList.length;i++){
				var postInfor=postInforList[i];	
				var address=postInfor.name+postInfor.tel+postInfor.province+postInfor.city+postInfor.county+postInfor.town+postInfor.detail;
				content+='<div class="address_self">'
					+'<input type="radio" name="address" value="'+postInfor.id+'"/>'+address+''
					+'</div>';
			}
			$("#oldAddress").html(content);
			
		}
	});
}

function addAddress() {

	$.ajax({
		url:'/MyShop/controller/address/add',
		type:'post',
		dataType:'json',
		data:{
			name:$("#uname").val(),
			tel:$("#utel").val(),
			province:$("#province").find("option:selected").text(),
			city:$("#city").find("option:selected").text(),
			county:$("#area1").find("option:selected").text(),
			town:$("#town").find("option:selected").text(),
			detail:$("#detail").val()
		},
		success:function(data){	
			alert(data);
			if(data.indexOf('成功')!=-1){	
				showAddress();
			}
		}
	});
}

var city = [ [ "北京", "天津", "上海", "重庆" ], [ "南京", "苏州", "南通", "常州" ],
		[ "福州", "福安", "龙岩", "南平" ], [ "广州", "潮阳", "潮州", "澄海" ],
		[ "兰州", "白银", "定西", "敦煌" ] ];
var city_id = new Map();
city_id.set("北京", 0);
city_id.set("天津", 1);
city_id.set("上海", 2);
city_id.set("重庆", 3);
var area1 = [ [ "东城区", "西城区", "朝阳区", "海淀区" ], [ "南开区", "和平区", "西青区", "红桥区" ],
		[ "黄浦区", "静安区", "徐汇区", "普陀区" ], [ "万州区", "大渡口区", "巴南区", "江津区" ] ];
var area1_id = new Map();
area1_id.set("东城区", 0);
area1_id.set("西城区", 1);
area1_id.set("朝阳区", 2);
area1_id.set("海淀区", 3);

var town = [ [ "东城区1街", "东城区2街", "东城区3街", "东城区4街" ],
		[ "西城区1路", "西城区2路", "西城区3路", "西城区4路" ], [ "朝阳区1街", "朝阳区2街", "朝阳区3街", "朝阳区4街" ],
		[ "海淀区1路", "海淀区2路", "海淀区3路", "海淀区4路" ] ];
// 获得省份下拉框的对象
var sltProvince = document.form1.province;
// 获得城市下拉框的对象
var sltCity = document.form1.city;
// 获得区的下拉框的对象
var sltArea = document.form1.area1;
// 获得乡镇下拉框的对象
var sltTown = document.form1.town;
function getCity() {
	// 得到对应省份的城市数组
	var provinceCity = city[sltProvince.selectedIndex - 1];
	// 清空城市下拉框，仅留提示选项
	sltCity.length = 1;
	sltArea.length = 1;
	sltTown.length = 1;
	// 将城市数组中的值填充到城市下拉框中
	for (var i = 0; i < provinceCity.length; i++) {
		sltCity[i + 1] = new Option(provinceCity[i], provinceCity[i]);
	}
}
function getArea() {
	// 获取城市下拉框所选中的城市
	var dispay_city = sltCity.options[sltCity.selectedIndex].value;
	// 获得对应区的乡镇数组
	var cityArea = area1[city_id.get(dispay_city)];
	// 清空区级下拉框，仅留提示选项
	sltArea.length = 1;
	sltTown.length = 1;
	// 将区级数组中的值填充到区下拉框中
	for (var i = 0; i < cityArea.length; i++) {
		sltArea[i + 1] = new Option(cityArea[i], cityArea[i]);
	}
}
function getTown() {
	// 获取区下拉框所选中的区
	var display_area = sltArea.options[sltArea.selectedIndex].value;
	// 获得对应城市的区级数组
	var areaTown = town[area1_id.get(display_area)];
	// 清空区级下拉框，仅留提示选项
	sltTown.length = 1;
	// 将区级数组中的值填充到区下拉框中
	for (var i = 0; i < areaTown.length; i++) {
		sltTown[i + 1] = new Option(areaTown[i], areaTown[i]);
	}
}

//numWidth = 0;
//numHeight = 0;
//setTimeout(ad, 2000);
//function ad() {
//	if (numWidth == 0) {
//		adOpen = setInterval(ad_open, 10);
//	} else {
//		adClose = setInterval(ad_close, 10);
//	}
//}
//function ad_open() {
//	numWidth += 3;
//	numHeight += 3.8;
//	if (numWidth > 300) {
//		numWidth = 300;
//		numHeight = 380;
//		clearInterval(adOpen);
//		setTimeout(ad, 4000);
//	}
//	document.getElementById("ad").style.width = numWidth + "px";
//	document.getElementById("ad").style.height = numHeight + "px";
//
//}
// function ad_display() {
// numWidth=300;
// numHeight=380;
// }
//function ad_close() {
//	numWidth -= 3;
//	numHeight -= 3.8;
//	if (numWidth < 0) {
//		numWidth = 0;
//		numHeight = 0;
//		clearInterval(adClose);
//		setTimeout(ad, 4000);
//	}
//	document.getElementById("ad").style.width = numWidth + "px";
//	document.getElementById("ad").style.height = numHeight + "px";
//
//}

