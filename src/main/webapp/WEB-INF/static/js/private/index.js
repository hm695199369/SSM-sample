$(function() {
	show();
});

function show(){
	 $('.carousel').carousel({
         interval: 2000
     })
}




//function showType(){
//	$.ajax({
//		url:'/WoniuShop1.0.0/goodsoper',
//		type:'post',
//		dataType:'json',
//		data:{
//			oper:'showtypes'
//		},
//		success:function(data){
//			var content="";
//			for (var i = 0; i < data.length; i++) {
//				var gtype=data[i];
//				content+="<a href='/WoniuShop1.0.0/jsp/goods.jsp?goodstypeid="+gtype.gt_id+"'><div class='col-sm-6 col-md-3' style='padding: 0;'>"+
//								"<div class='thumbnail'>"+
//								"<img src='"+gtype.gt_img+"' alt='额，图片走丢了！'>"+
//								"<div class='caption'>"+
//									"<h3>"+gtype.gt_name+"</h3>"+
//									"<p>"+gtype.gt_description+"</p>"+
//								"</div>"+
//							"</div>"+
//						"</div></a>";
//			}
//			$("#goodstype").html(content);
//		}
//	});
//}

