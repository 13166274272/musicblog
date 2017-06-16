package com.tz.bean;

/**
 * 
 * 
 * User 创建人:xuchengfei 时间：2016年4月17日-下午10:54:35
 * 
 * @version 1.0.0
 * 
 */
public class User {

	// // 主键
	// private Integer id;
	// // 用户名
	// private String username;
	// // 密码
	// private String password;

	// public Integer getId() {
	// return id;
	// }
	//
	// public void setId(Integer id) {
	// this.id = id;
	// }
	//
	// public String getUsername() {
	// return username;
	// }
	//
	// public void setUsername(String username) {
	// this.username = username;
	// }
	//
	// public String getPassword() {
	// return password;
	// }
	//
	// public void setPassword(String password) {
	// this.password = password;
	// }

	private String username;
	private Integer age;
	private String tel;
	private String idcard;

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public Integer getAge() {
		return age;
	}

	public void setAge(Integer age) {
		this.age = age;
	}

	public String getTel() {
		return tel;
	}

	public void setTel(String tel) {
		this.tel = tel;
	}

	public String getIdcard() {
		return idcard;
	}

	public void setIdcard(String idcard) {
		this.idcard = idcard;
	}

}