package com.demo.service;

import java.util.List;

import com.demo.bean.Paper;

public interface PaperService {
	
	public Integer save(Paper paper);

	public int update(Paper paper);

	public int delete(Integer id);

	public List<Paper> list();

	public Paper get(Integer id);
}
