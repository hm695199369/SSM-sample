package com.demo.service.imp;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.demo.bean.Student;
import com.demo.dao.IStudent;
import com.demo.service.StudentService;

@Service
public class StudentServiceImp implements StudentService{
	@Autowired
//	@Resource(name = "IStudent")
	IStudent studentDAO;
	
	public int insert(Student student){
		int row = studentDAO.save(student);
		return row;
	}
	@Transactional
	public int delete(int id){
		int row = studentDAO.deleteById(id);
		return row;
	}
	
	
//	@Transactional//(propagation = Propagation.REQUIRED)
	public int update(Student student){
		int row = studentDAO.update2(student);
//		int k=3/0;
		return row;
	}
	
	public Student get(int id){
		Student stu = studentDAO.get(id);
		return stu;
	}
	
	public  List<Student> list(){
		return studentDAO.show();
	}
}
