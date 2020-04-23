<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8" isELIgnored="false" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Spring MVC hi</title>
</head>
<body>
（- -）<br/>
${student}<hr/>
${student2}<hr/>
${id};${name}<hr/>
${str}<hr/>
${list}<hr/>
session中str:${sessionScope.str}<br/>
<c:forEach items="${list}" var="v" >
	${v}
</c:forEach>

</body>
</html>