package com.sample.webapp.claims;

import javax.persistence.Entity;
import javax.persistence.Id;


// tell JAP to create a table from this object and each property would be a column
@Entity
public class Claim {

	// primary key
	@Id
	private int id;
	private String subject;
	private String description;
	private String[] messages;
	private String status;
	
	
	public Claim() {
		super();
	}
	
	public Claim(int id, String subject, String description, String[] messages, String status) {
		super();
		this.id = id;
		this.subject = subject;
		this.description = description;
		this.messages = messages;
		this.status = status;
	}

	public int getId() {
		return id;
	}
	
	public void setId(int id) {
		this.id = id;
	}
	
	public String getSubject() {
		return subject;
	}
	
	public void setSubject(String subject) {
		this.subject = subject;
	}
	
	public String getDescription() {
		return description;
	}
	
	public void setDescription(String description) {
		this.description = description;
	}


	public String[] getMessages() {
		return messages;
	}


	public void setMessages(String[] messages) {
		this.messages = messages;
	}
	
	
	public String getStatus() {
		return status;
	}


	public void setStatus(String status) {
		this.status = status;
	}
	
}