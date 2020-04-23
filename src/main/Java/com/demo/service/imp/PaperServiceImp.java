package com.demo.service.imp;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.demo.bean.Paper;
import com.demo.dao.PaperMapper;
import com.demo.service.PaperService;

@Service
public class PaperServiceImp implements PaperService{

	@Autowired
	PaperMapper paperMapper;
	
	public Integer save(Paper paper) {
		return paperMapper.insert(paper);
	}

	public int update(Paper paper) {
		return paperMapper.update(paper);
	}

	public int delete(Integer id) {
		return paperMapper.delete(id);
	}

	public List<Paper> list() {
		return paperMapper.list();
	}

	public Paper get(Integer id) {
		return paperMapper.get(id);
	}
}
