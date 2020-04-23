package com.demo.controller;

import java.io.File;
import java.io.IOException;
import java.io.UnsupportedEncodingException;
import java.util.List;
import java.util.UUID;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.multipart.MultipartHttpServletRequest;
import org.springframework.web.multipart.commons.CommonsMultipartResolver;
import org.springframework.web.servlet.ModelAndView;

import com.demo.bean.Paper;
import com.demo.bean.ResponseResult;
import com.demo.service.PaperService;
import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;

@Controller
@RequestMapping("/paper")
public class PaperController {
	
	@Autowired
	PaperService paperService;
	
	@ModelAttribute("paper1")
	public Paper initPaper(Integer id) {
		Paper paper = null;
		if (id != null) {
			paper = paperService.get(id);
		}
		System.out.println(paper);
		return paper;
	}

	@GetMapping("/create")
	public String create(@ModelAttribute("paper1") Paper paper) {
		return "paper_create";
	}

	@PostMapping("/save")
	public String save(Paper paper) {
		if (paper.getId() == null) {
			paperService.save(paper);
		} else {
			paperService.update(paper);
		}
		return "redirect:list";
	}

	@GetMapping("/delete")
	public String delete(Integer id) {
		if (id != null) {
			paperService.delete(id);
		}
		return "redirect:list";
	}

	@PostMapping("/save2")
	@ResponseBody
	public ResponseResult<Object> save2(Paper paper) {
		ResponseResult<Object> resp = null;
		int num = paperService.save(paper);
		if (num > 0) {
			resp = new ResponseResult<Object>(200, "ok", num);
		} else {
			resp = new ResponseResult<Object>(500, "发生异常", null);
		}
		return resp;
	}

	@PostMapping("/save3")
	public @ResponseBody String save3(@RequestBody Paper paper) {
		int num = paperService.save(paper);
		String msg = num > 0 ? "ok" : "fail";
		System.out.println("执行了save3()方法方法");
		System.out.println("num = " + num);
		return msg;
	}

	@GetMapping("/list")
	public ModelAndView list(@RequestParam(defaultValue = "1", name = "p") Integer currentPage, Model model) {
		PageHelper.startPage(currentPage, 5);
		ModelAndView mv = new ModelAndView("paper_list");
		List<Paper> papers = paperService.list();
		model.addAttribute("p", new PageInfo<Paper>(papers));
		model.addAttribute("papers", papers);
		return mv;
	}

	@PostMapping("/upload")
	public String upload(HttpServletRequest request) throws IllegalStateException, IOException {
		CommonsMultipartResolver resolver = new CommonsMultipartResolver(request.getServletContext());
		MultipartHttpServletRequest re = resolver.resolveMultipart(request);
		if (resolver.isMultipart(re)) {
			MultipartFile file = re.getFile("fileName");
			String path = request.getServletContext().getRealPath("/");
			File upimg = new File(path + "upimg");
			if (!upimg.exists()) {
				upimg.mkdir();
			}
			String newFilePath = upimg.getAbsolutePath()+ "/" + UUID.randomUUID().toString() + ".png";
			file.transferTo(new File(newFilePath));
		}
		return "redirect:create";
	}
}
