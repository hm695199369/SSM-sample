package com.demo.dao;

import java.util.List;

import com.demo.bean.Paper;

public interface PaperMapper {
	int insert(Paper paper);

	int update(Paper paper);

	int delete(int id);

	Paper get(Integer id);

	List<Paper> list();

}