package com.demo.bean;

/**
 * 全局响应体
 * @author Administrator
 *
 * @param <T>
 */
public class ResponseResult<T> {

	private Integer code; // 200代表业务执行成功，500代表业务执行不成功
	private String message; // 前端收到的字符串提示
	private T data; // 前端期望收到的数据

	public ResponseResult() {
	}

	public ResponseResult(Integer code, String message, T data) {
		super();
		this.code = code;
		this.message = message;
		this.data = data;
	}

	public Integer getCode() {
		return code;
	}

	public void setCode(Integer code) {
		this.code = code;
	}

	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}

	public T getData() {
		return data;
	}

	public void setData(T data) {
		this.data = data;
	}

}
