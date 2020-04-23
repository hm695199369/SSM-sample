package com.demo.controller;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

import javax.servlet.http.HttpServletResponse;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CookieValue;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.SessionAttributes;
import org.springframework.web.bind.support.SessionStatus;

import com.demo.bean.Student;
import com.sun.org.apache.xpath.internal.operations.Mod;
//@SessionAttributes(value={"str"})
@Controller
public class HiController {
	//model赋值写法一
	@ModelAttribute
	public void init(Model model) {
		 Student student = new Student();
		 student.setId(1);
		 student.setRealName("stout");
		 model.addAttribute("student", student);
	}
	//model赋值写法二
	@ModelAttribute("student2")
	public Student init2(Model model) {
		 Student stu2 = new Student();
		 stu2.setId(2);
		 stu2.setRealName("卡卡");
		return stu2;
	}
	
	@GetMapping("/cookieTest")
	public 	String cookieTest(@CookieValue("JSESSIONID")String sessionID) {
		System.out.println(sessionID);
		return "hi";
		
	}
	
	@GetMapping("/modelTest")
	public 	String modelTest(@ModelAttribute(value = "student")Student stu ,@ModelAttribute(value = "student2")Student stu3) {
		System.out.println(stu);
		System.out.println(stu3);
		stu.setHome("洛杉矶");
		stu3.setHome("华盛顿");
		return "hi";
		
	}
	
	@GetMapping("/hi")
	public 	String sayHi(String id, String name ,Model model) {
		
		List<String> list = new ArrayList<String>();
		list.add("aaple");
		list.add("anzhuo");
//		model.addAttribute("str", "这是一个从控制层回传来的数据");
		model.addAttribute("list", list);
		model.addAttribute("id",id);
		model.addAttribute("name", name);
		Student student = new Student();
		student.setId(1);
		student.setRealName("stout");
		model.addAttribute("student", student);
		return "hi";
	}
	
	@GetMapping("/hello")
	@ResponseBody
	public 	Student sayHello(String id, @RequestParam(defaultValue = "张三")String name ,Model model) {
		Student student = new Student();
		student.setId(Integer.parseInt(id));
		student.setRealName(name);
		return student;
	}
	
	@GetMapping("/g/{id}/{name}")
	public 	String g(@PathVariable String id, @PathVariable String name ) {
		System.out.println("g方法"+id+","+name);
		return "hi";
	}
	
//	@GetMapping("/")
//	public 	String indexDisplay() {
//
//		return "hi";
//	}
}
