<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">

<link rel="stylesheet" type="text/css"
	href="/bootstrap-3.3.7-dist/css/bootstrap.css" />

<title>创建试卷</title>
</head>
<body>
	<h2>创建试卷</h2>
	<form:form action="/paper/save" method="post" modelAttribute="paper1">
		<div>
			试卷名:
			<form:input path="name" />
		</div>
		<div>
			试卷题数:
			<form:input path="questionNums" />
		</div>
		<div>
			考试时间:
			<form:input path="examTime" />
		</div>
		<form:hidden path="id" />
		<div>
			<form:button>提交</form:button>
		</div>
	</form:form>

	<h2>创建试卷-AJAX提交表单，以默认x-www-form-unlencoded的方式</h2>
	<form id="form2">
		<div>
			试卷名:<input type="text" name="name" />
		</div>
		<div>
			试卷题数:<input type="text" name="questionNums" />
		</div>
		<div>
			考试时间:<input type="text" name="examTime" />
		</div>
		<div>
			<input type="button" value="提交" id="submit2" class="btn btn-danger" />
		</div>
	</form>

	<h2>创建试卷-AJAX提交表单，以JSON对象的形式传给后端</h2>
	<form id="form3">
		<div>
			试卷名:<input type="text" name="name" />
		</div>
		<div>
			试卷题数:<input type="text" name="questionNums" />
		</div>
		<div>
			<input type="button" value="提交" id="submit3" />
		</div>
	</form>

	<form id="form4" action="/paper/upload" method="post"
		enctype="multipart/form-data">
		<input type="file" name="fileName"> <input type="submit"
			id="submit4">
	</form>

	<script src="/bootstrap-3.3.7-dist/js/bootstrap.min.js"></script>
	<script src="http://libs.baidu.com/jquery/2.0.0/jquery.min.js"></script>
	<script type="text/javascript">
		$(function() {
			$('#submit2').click(function() {
				var data = $('#form2').serialize();
				// 				alert(data);
				$.ajax({
					type : "POST",
					url : "/paper/save2",
					data : data,
					success : function(msg) {
						alert("Data Saved: " + msg);
					}
				});
			});
		});

		$(function() {
			$('#submit3').click(function() {
				var data = {
					name : 'java试卷',
					questionnums : 10
				};
				data = JSON.stringify(data);
				alert(data);
				$.ajax({
					type : "POST",
					url : "/paper/save3",
					data : data,
					contentType : 'application/json',
					success : function(msg) {
						alert("Data Saved: " + msg);
					}
				});
			});
		});
	</script>

</body>
</html>