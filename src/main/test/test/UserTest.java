package test;

import static org.junit.Assert.assertNotNull;
import static org.junit.Assert.fail;

import java.util.Date;
import java.util.List;

import org.apache.ibatis.session.SqlSession;
import org.junit.Test;

import com.demo.bean.Student;

import com.demo.dao.IStudent;
import com.demo.util.MybatisUtil;


public class UserTest {
	// 查询trim字句测试
//		@Test
//		public void showByManyTrimTest() {
//			SqlSession session = getSession().openSession();
//			try {
//				IStudent studentMapper = session.getMapper(IStudent.class);
//			
//				Student stu = new Student();
//				stu.setRealName("李");
////				stu.setSchool("蜗牛学院");
//				List<Student> stuList = studentMapper.showByManyTrim(stu);
//				 System.out.println(stuList);
//				assertNotNull("没有这条数据",stuList);
//			} finally {
//				session.close();
//			}
//
//		}
	// 更新Trim字句测试
//	@Test
//	public void updateByManyTrimTest() {
//		SqlSession session = getSession().openSession();
//		try {
//			IStudent studentMapper = session.getMapper(IStudent.class);
//		
//			Student stu = new Student();
//			stu.setId(131);
//			stu.setSchool("爱丁堡大学");
////			stu.setHome("安徽");
//			int row = studentMapper.updateByManyTrim(stu);
//			 System.out.println(row+":"+stu.getSchool());
//			assertNotNull("没有这条数据",row);
//			session.commit();
//		} finally {
//			session.close();
//		}
//
//	}
	// where字句测试
//	@Test
//	public void showByManyWhereTest() {
//		SqlSession session = getSession().openSession();
//		try {
//			IStudent studentMapper = session.getMapper(IStudent.class);
//		
//			Student stu = new Student();
//			stu.setRealName("徐");
//			stu.setSchool("学");
//			stu.setHome("安徽");
//			List<Student> stuList = studentMapper.showByManyWhere(stu);
//			 System.out.println(stuList);
//			assertNotNull("没有这条数据",stuList);
//		} finally {
//			session.close();
//		}
//
//	}
	// choose字句测试
//			@Test
//			public void showByManyChooseTest() {
//				SqlSession session = getSession().openSession();
//				try {
//					IStudent studentMapper = session.getMapper(IStudent.class);
//				
//					Student stu = new Student();
//					stu.setRealName("徐");
//					stu.setSchool("蜗牛学院");
//					List<Student> stuList = studentMapper.showByManyChoose(stu);
//					 System.out.println(stuList);
//					assertNotNull("没有这条数据",stuList);
//				} finally {
//					session.close();
//				}
//
//			}
	// foreach字句测试
//		@Test
//		public void showByManyForeachTest() {
//			SqlSession session = getSession().openSession();
//			try {
//				IStudent studentMapper = session.getMapper(IStudent.class);
//			
//				List<Integer> idList = new ArrayList<Integer>(); 
//				idList.add(7);
//				idList.add(9);
//				List<Student> stuList = studentMapper.showByManyForeach(idList);
//				 System.out.println(stuList);
//				assertNotNull("没有这条数据",stuList);
//			} finally {
//				session.close();
//			}
//
//		}
	// if字句测试
//		@Test
//		public void showByManyIFTest() {
//			SqlSession session = getSession().openSession();
//			try {
//				IStudent studentMapper = session.getMapper(IStudent.class);
//				Student stu = new Student();
//				stu.setRealName("徐");
//				List<Student> stuList = studentMapper.showByManyIF(stu);
//				 System.out.println(stuList);
//				assertNotNull("没有这条数据",stuList);
//			} finally {
//				session.close();
//			}
//
//		}




//	@Test
//	public void studenttest() {
//		SqlSession session = getSession().openSession();
//		try {
//			IStudent studentMapper = session.getMapper(IStudent.class);
//			Student student = new Student();
//			student.setRealName("李四");
//			student.setGender("男");
//			student.setHome("西伯利亚");
////			int year = new Date().getYear();
////			int month = new Date().getMonth();
////			int day = new Date().getDate();
////			String brith =""+year+"-"+month+"-"+day;
//			student.setCreated(new Date().getDate());
////			long currentTimeMillis = System.currentTimeMillis();
//			student.setMobile("15620748120");
//			student.setSchool("蜗牛学院");
//			student.setIntro("哈哈哈");
//			student.setBirth(new Date(1995-1900, 1-1, 1));
//			System.out.println(student);
//			int row= studentMapper.save(student);
//			System.out.println(row);
//			System.out.println(student.getId());
//			session.commit();
//			assertNotNull("没有这条数据", row);
//		}catch(Exception e){
//			fail("测试用例:查询单条分类失败"+e.getMessage());
//		} finally {
//			session.close();
//		}

//	}

//	@Test
//	public void stuUpdate() {
//		SqlSession session = MybatisUtil.getSession();
//		try {
//			IStudent studentMapper = session.getMapper(IStudent.class);
//			Student student = new Student();
//			student.setRealName("赵六");
//			student.setGender("男");
//			student.setHome("丽江");
//			student.setCreated(new Date().getDate());
//			student.setMobile("15620748120");
//			student.setSchool("蜗牛学院");
//			student.setIntro("哈哈哈");
//			student.setBirth(new Date(1995-1900, 1-1, 1));
//			System.out.println(student);
//			int row= studentMapper.update(student);
//			System.out.println(row);
//			System.out.println(student.getId());
//			session.commit();
//			assertNotNull("没有这条数据", row);
//		}catch(Exception e){
//			fail("测试用例:查询单条分类失败"+e.getMessage());
//		} finally {
//			session.close();
//		}

//	}

//	@Test
//	public void stuDelete() {
//		SqlSession session = MybatisUtil.getSession();
//		try {
//			IStudent studentMapper = session.getMapper(IStudent.class);
//			int row= studentMapper.deleteById(18);
//			System.out.println(row);
//			session.commit();
//			assertNotNull("没有这条数据", row);
//		}catch(Exception e){
//			fail("测试用例:查询单条分类失败"+e.getMessage());
//		} finally {
//			MybatisUtil.closeSession();
//		}
//
//	}

//	@Test
//	public void stuShow() {
//		SqlSession session = MybatisUtil.getSession();
//		try {
//			IStudent studentMapper = session.getMapper(IStudent.class);
//			List<Student> stuList= studentMapper.show();
//			System.out.println(stuList);
//			session.commit();
//			assertNotNull("没有这条数据", stuList);
//		}catch(Exception e){
//			fail("测试用例:查询单条分类失败"+e.getMessage());
//		} finally {
//			MybatisUtil.closeSession();
//		}
//
//	}
}
