package com.demo.dao;


import java.util.List;

import org.apache.ibatis.annotations.Delete;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Options;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;
import org.apache.ibatis.annotations.Update;
import org.springframework.stereotype.Repository;

import com.demo.bean.Student;


public interface IStudent {
	public Student get(int id);
	@Options(useGeneratedKeys=true,keyProperty="id",keyColumn="id")
	@Insert("insert into t_student(realName,gender,birth,home,created,mobile,school,intro) values(#{realName}, #{gender}, #{birth}, #{home}, #{created}, #{mobile}, #{school}, #{intro})")
	public int save(Student student);
	@Insert("update t_student set home = #{home} where realName = #{realName}")
	public int update(Student student);
	@Update("update t_student set home = #{home} where realName = #{realName}")
	public int update2(Student student);
	@Delete("delete from t_student where id=#{id}")
	public int deleteById(int id);
	@Select("select * from t_student ")
	public List<Student> show();
	
	public List<Student> showByManyIF(Student student);
	
	public List<Student> showByManyForeach(List<Integer> idList);
	
	public List<Student> showByManyChoose(@Param("student")Student student);
	
	public List<Student> showByManyWhere(@Param("student")Student student);

	public List<Student> showByManyTrim(Student student);
	
	public int updateByManyTrim(Student student);
	
	public int updateByManySet(Student student);
	
	
}
