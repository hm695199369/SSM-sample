function loginOut(){
	$.ajax({
		url:'/MyShop/controller/user/loginOut',
		type:'post',
		dataType:'json',
		data:{
			
		},
		success:function(data){
			location.href='/MyShop/';
		}
	});
}

function login(){
	$.ajax({
		url:'/MyShop/controller/user/login',
		/*url:'/WoniuShop1.0.0/useroper',*/
		type:'post',
		dataType:'json',
		data:{
			/*oper:'login',*/
			account:$("#laccount").val(),
			pass:$("#lpass").val(),
			picCode:$("#lpicCode").val()
		},
		success:function(data){
			$("#lmes").html(data);
			if(data.indexOf('成功')!=-1){
				location.reload();
			}else{
				$("#lpic").prop("src","/MyShop/controller/picCode/getPic?a="+Math.random());
			}
		}
	});
}
function register(){
	$.ajax({
		url:'/MyShop/controller/user/register',
		type:'post',
		dataType:'json',
		data:{
			account:$("#raccount").val(),
			pass:$("#rpass").val(),
			rpass:$("#rcpass").val(),
			picCode:$("#rCode").val()
		},
		success:function(data){
			$("#rmes").html(data);
//			$("#rpic").prop("src","/MyShop/controller/picCode/getPic?a="+Math.random());
			if(data.indexOf('成功')!=-1){
				$('#registerModal').modal('hide');
				$('#loginModal').modal('show');
				$("#lmes").html(data);
			}
		}
	});
}

function getCode(){
	$.ajax({
		url:'/MyShop/controller/user/getCode',
		type:'post',
		dataType:'json',
		data:{
			number:$("#raccount").val()
		},
		success:function(data){
			if(data == 'fail'){
				$("#rmes").html("获取验证码失败!");
            }
			if(data == 'success'){
				$("#rmes").html("获取验证码成功!");
			}
		}
	});
}
