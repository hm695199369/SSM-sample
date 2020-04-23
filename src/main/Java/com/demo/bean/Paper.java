package com.demo.bean;

import java.io.Serializable;
import java.util.Date;

import org.springframework.format.annotation.DateTimeFormat;
import com.fasterxml.jackson.annotation.JsonFormat;


public class Paper implements Serializable{

	private static final long serialVersionUID = 6590973159562466341L;

	private Integer id;

    private String name;

    private Byte questionNums;
    @DateTimeFormat(pattern = "yyyy-MM-dd HH:mm:ss")
    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss",timezone = "GMT+8")
    private Date examTime;
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public Byte getQuestionNums() {
		return questionNums;
	}
	public void setQuestionNums(Byte questionNums) {
		this.questionNums = questionNums;
	}
	public Date getExamTime() {
		return examTime;
	}
	public void setExamTime(Date examTime) {
		this.examTime = examTime;
	}
	@Override
	public String toString() {
		return "Paper [id=" + id + ", name=" + name + ", questionNums=" + questionNums + ", examTime=" + examTime + "]";
	}
	public Paper(Integer id, String name, Byte questionNums, Date examTime) {
		super();
		this.id = id;
		this.name = name;
		this.questionNums = questionNums;
		this.examTime = examTime;
	}
	public Paper() {
		super();
		
	}

	
    
	
}