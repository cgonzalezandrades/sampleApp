package com.sample.webapp.users;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UserController {

	@Autowired
	private UserService userService;
	
	// GET by default
	@RequestMapping("/users")
	public List<User> getAllUsers() {
		return userService.getAllUsers();
	}
	
	@RequestMapping("/users/{userId}")
	public Optional<User> getUser( @PathVariable String userId) {
		return userService.getUser(userId);
	}
	
	@RequestMapping(method = RequestMethod.POST, value="/users")
	public void createTicket(@RequestBody User user) {
		userService.addUser(user);
	}
	
	@RequestMapping(method = RequestMethod.PUT, value="/users/{userId}")
	public void updateUser(@PathVariable String userId, @RequestBody User user) {
		userService.updateTicket(userId,user);
	}
	
	@RequestMapping(method = RequestMethod.DELETE, value = "/users/{userId}")
	public void deleteUser( @PathVariable String userId) {
		userService.deleteUser(userId);
	}
	
	
}