package com.sample.webapp.users;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;


// tell JAP to create a table from this object and each property would be a column
@Entity
@Table(name="users")
public class User {

	// primary key
	@Id
	private int id;
	private String firstName;
	private String lastName;
	private String username;
	private String password;
	
	
	public User() {
		super();
	}
	public User(int id, String firstName, String lastName, String password , String username) {
		super();
		this.id = id;
		this.firstName = firstName;
		this.lastName = lastName;
		this.password = password;
		this.username = username;
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getFirstName() {
		return firstName;
	}
	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}
	public String getLastName() {
		return lastName;
	}
	public void setLastName(String lastName) {
		this.lastName = lastName;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	
	
}
