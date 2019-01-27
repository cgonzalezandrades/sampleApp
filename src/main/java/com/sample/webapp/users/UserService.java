package com.sample.webapp.users;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

@Service
public class UserService {
	
	@Autowired
	private UserRepository userRepository;
	
	
//	public List<User> getAllUsers(){
//		List<User> users = new ArrayList<>();
//		userRepository.findAll().forEach(users :: add);
//		return users;
//	}
	
//	public Optional<User> getUser(String userId) {
//		return userRepository.findById(userId);
//	}
	
	public void addUser(User user) {
		user.setId((int)userRepository.count() + 1);
		userRepository.save(user);
	}
	public ResponseEntity loginUser(User user) {
		List<User> users = new ArrayList<>();
		userRepository.findAll().forEach(users :: add);
		boolean isValid = false;
		for(int i = 0 ; i < users.size(); i++) {
			if(users.get(i).getUsername().equalsIgnoreCase(user.getUsername()) && users.get(i).getPassword().equalsIgnoreCase(user.getPassword())) {
				isValid =  true;
			}
		}
		
		if(isValid) {
			return new ResponseEntity(HttpStatus.OK);
		}else {
			return new ResponseEntity(HttpStatus.NOT_FOUND);
		}
	}

//	public void updateTicket(String userId, User user) {
//		userRepository.save(user);
//	}

//	public void deleteUser(String userId) {
//		userRepository.deleteById(userId);
//	}

}
