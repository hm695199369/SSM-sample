package com.demo.service;


import java.util.List;


import com.demo.bean.Student;



public interface StudentService {
	
	public int insert(Student student);
	
	public int delete(int id);
	
	public int update(Student student);
	
	public Student get(int id);
	
	public  List<Student> list();

}
