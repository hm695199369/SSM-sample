<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8" isELIgnored="false" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>所有试卷</title>
</head>
<body>
	<h2>所有试卷</h2>
	
	<table style="border: 1px solid gray;">
		<c:forEach var="p" items="${papers }">
			<tr>
				<td>试卷id：${p.id } &emsp; 试卷名：${p.name }&emsp;
					考试时间：<fmt:formatDate value="${p.examTime }" pattern="yyyy年MM月dd日 HH:mm:ss" />
				</td>
				<td><a href="/paper/delete?id=${p.id }">删除</a>&emsp;<a href="/paper/create?id=${p.id }">编辑</a></td>
			</tr>
		</c:forEach>
	</table>
	
	<p>共查询到${p.total }条记录，${p.pages }页</p>
	<a href="?p=${p.firstPage }">首页</a>
	<a href="?p=${p.prePage }">上一页</a>
	<a href="?p=${p.nextPage }">下一页</a>
	<a href="?p=${p.lastPage }">末页</a>

</body>
</html>