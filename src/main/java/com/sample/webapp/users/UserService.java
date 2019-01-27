package com.sample.webapp.users;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {
	
	@Autowired
	private UserRepository userRepository;
	
	
//	private List<Ticket> tickets = new ArrayList<>(Arrays.asList(
//			new Ticket("1", "subject1", "description1"),
//			new Ticket("2", "subject2", "description2"),
//			new Ticket("3", "subject3", "description3")
//			));
	
	public List<User> getAllUsers(){
//		return tickets;
		
		List<User> users = new ArrayList<>();
		// iterate thoguth each ticket, and add each to the tickets List
		userRepository.findAll().forEach(users :: add);
		return users;
	}
	
	public Optional<User> getUser(String userId) {
//		return tickets.stream().filter(t -> t.getId().equals(ticketId)).findFirst().get();
		
		return userRepository.findById(userId);
	}
	
	public void addUser(User user) {
//		tickets.add(ticket);
		
		userRepository.save(user);
	}

	public void updateTicket(String userId, User user) {
		
//		for(int i = 0; i < tickets.size(); i ++) {
//			Ticket currentTicket = tickets.get(i);
//			if(currentTicket.getId().equals(ticketId)) {
//				tickets.set(i, ticket);
//				return;
//			}
//		}
		
		userRepository.save(user);
	}

	public void deleteUser(String userId) {
//		tickets.removeIf(ticket -> ticket.getId().equals(ticketId));
		
		userRepository.deleteById(userId);
	}
}
