package com.demo.util;

import java.io.IOException;
import java.io.Reader;
import java.util.ArrayList;
import java.util.List;

import org.apache.ibatis.io.Resources;
import org.apache.ibatis.session.SqlSession;
import org.apache.ibatis.session.SqlSessionFactory;
import org.apache.ibatis.session.SqlSessionFactoryBuilder;


public class MybatisUtil {
	private static ThreadLocal<SqlSession> threadLocal = new ThreadLocal<SqlSession>();
	private static SqlSessionFactory sessionFactory;


	static {
		try {
			Reader reader = Resources.getResourceAsReader("mybatis.xml");
			sessionFactory = new SqlSessionFactoryBuilder().build(reader);
			reader.close();
		} catch (IOException e) {
			e.printStackTrace();
		}
	}

	public static SqlSession getSession() {
		SqlSession s = threadLocal.get();
		if (s == null) {
			SqlSession session = sessionFactory.openSession();
			threadLocal.set(session);
			s = threadLocal.get();
		}
		return s;
	}

	public static void closeSession() {
		SqlSession session = threadLocal.get();
		if (session != null) {
			session.close();
		}
	}


}
