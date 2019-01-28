package com.sample.webapp.users;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UserController {

	@Autowired
	private UserService userService;
	
	
	@RequestMapping(method = RequestMethod.POST, value="/users")
	@CrossOrigin(origins = "http://localhost:4200")
	public void addUser(@RequestBody User user) {
		userService.addUser(user);
	}
	
	
	@RequestMapping(method = RequestMethod.POST, value="users/login")
	@CrossOrigin(origins = "http://localhost:4200")
	public ResponseEntity loginUser(@RequestBody User user) {
		return userService.loginUser(user);
	}
	
}
