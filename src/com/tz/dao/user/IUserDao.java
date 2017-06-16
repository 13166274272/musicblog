package com.tz.dao.user;

import java.util.List;



/**
 * 
 * 用户数据层
 * IUserDao
 * 创建人:xuchengfei 
 * 时间：2016年4月17日-下午11:53:01 
 * @version 1.0.0
 *
 */
public interface IUserDao {

	/**
	 * 查询所有的用户信息
	 * 方法名：findUsers
	 * 创建人：xuchengfei 
	 * 时间：2016年4月17日-下午11:53:25 
	 * 手机:1564545646464
	 * @return List<User>
	 * @exception 
	 * @since  1.0.0
	 */
	public List<User> findUsers();
	
	
	/**
	 * 保存用户信息
	 * 方法名：saveUser
	 * 创建人：xuchengfei 
	 * 时间：2016年4月18日-上午12:33:59 
	 * 手机:1564545646464
	 * @param user void
	 * @exception 
	 * @since  1.0.0
	 */
	public void csaveUser(User user);
}
