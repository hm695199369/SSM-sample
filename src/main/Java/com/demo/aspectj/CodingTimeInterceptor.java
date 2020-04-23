package com.demo.aspectj;

import org.aspectj.lang.JoinPoint;
import org.aspectj.lang.ProceedingJoinPoint;
import org.aspectj.lang.annotation.After;
import org.aspectj.lang.annotation.AfterReturning;
import org.aspectj.lang.annotation.AfterThrowing;
import org.aspectj.lang.annotation.Around;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Before;
import org.aspectj.lang.annotation.Pointcut;
import org.springframework.stereotype.Component;

//切面

@Component
@Aspect
public class CodingTimeInterceptor {
	@Pointcut("execution(* com.demo.service.imp.*.*(..))")
	public void m1() {
	};

//	// 切入点
//	@Pointcut("exection(* com.demo.aspectj.UserService.save(..))")
//	public void m2() {
//	};
	// 切入点
	
	//连接点
//	@Before("m1()")
//	public void before() {
//		System.out.println("前置通知");
//	}
//	
//	@After("m1()")
//	public void after() {
//		System.out.println("后置通知");
//	}
//	@AfterReturning("m1()")
//	public void afterReturning() {
//		System.out.println("最终通知：");
//	}
//	@AfterReturning(pointcut = "m1()",returning = "returnStr")
//	public void afterReturning(String returnStr) {
//		System.out.println("最终通知："+returnStr);
//	}
	
//	@AfterThrowing("m1()")																																								
//	public void afterThrowing() {
//		System.out.println("异常通知");
//	}
	
	@Around("m1()")
	public Object around(JoinPoint joinPoint) throws Throwable{
		long start = System.currentTimeMillis();
        System.err.println("task begins");
        Object result= ((ProceedingJoinPoint)joinPoint).proceed();
        System.err.println("task ends, duration: \t" + (-start + System.currentTimeMillis()) + "ms");
		return result;
	}
}
