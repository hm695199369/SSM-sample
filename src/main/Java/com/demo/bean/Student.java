package com.demo.bean;

import java.io.Serializable;
import java.util.Date;

public class Student implements Serializable{

	private static final long serialVersionUID = 1L;
	private int id;
	private String realName;
	private String gender;
	private Date birth;
	private String home;
	private int created;
	private String mobile;
	private String school;
	private String intro;
	
	
	@Override
	public String toString() {
		return "Student [id=" + id + ", realName=" + realName + ", gender=" + gender + ", birth=" + birth + ", home="
				+ home + ", created=" + created + ", mobile=" + mobile + ", school=" + school + ", intro=" + intro
				+ "]";
	}


	public Student() {
		super();
		
	}
	
	
	public Student(int id, String realName, String gender, Date birth, String home, int created, String mobile,
			String school, String intro) {
		super();
		this.id = id;
		this.realName = realName;
		this.gender = gender;
		this.birth = birth;
		this.home = home;
		this.created = created;
		this.mobile = mobile;
		this.school = school;
		this.intro = intro;
	}


	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getRealName() {
		return realName;
	}
	public void setRealName(String realName) {
		this.realName = realName;
	}
	public String getGender() {
		return gender;
	}
	public void setGender(String gender) {
		this.gender = gender;
	}
	public Date getBirth() {
		return birth;
	}
	public void setBirth(Date birth) {
		this.birth = birth;
	}
	public String getHome() {
		return home;
	}
	public void setHome(String home) {
		this.home = home;
	}
	public int getCreated() {
		return created;
	}
	public void setCreated(int created) {
		this.created = created;
	}
	public String getMobile() {
		return mobile;
	}
	public void setMobile(String mobile) {
		this.mobile = mobile;
	}
	public String getSchool() {
		return school;
	}
	public void setSchool(String school) {
		this.school = school;
	}
	public String getIntro() {
		return intro;
	}
	public void setIntro(String intro) {
		this.intro = intro;
	}
}
