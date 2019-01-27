package com.sample.webapp.tickets;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class TicketService {
	
	@Autowired
	private TicketRepository ticketsRepository;
	
	
	private List<Ticket> tickets = new ArrayList<>(Arrays.asList(
			new Ticket("1", "subject1", "description1",  new String[]{"ID", "NAME"}, "NEW"  ),
			new Ticket("2", "subject2", "description2",  new String[]{"ID", "NAME"}, "CLOSED"  ),
			new Ticket("3", "subject3", "description3",  new String[]{"ID", "NAME"}, "OPEN" )
			));
	
	public List<Ticket> getAllTickets(){
		return tickets;
		
//		List<Ticket> tickets = new ArrayList<>();
//		// iterate thoguth each ticket, and add each to the tickets List
//		ticketsRepository.findAll().forEach(tickets :: add);
//		return tickets;
	}
	
	public Optional<Ticket> getTicket(String ticketId) {
//		return tickets.stream().filter(t -> t.getId().equals(ticketId)).findFirst().get();
		
		return ticketsRepository.findById(ticketId);
	}
	
	public void addTicket(Ticket ticket) {
//		tickets.add(ticket);
		
		ticketsRepository.save(ticket);
	}

	public void updateTicket(String ticketId, Ticket ticket) {
		
//		for(int i = 0; i < tickets.size(); i ++) {
//			Ticket currentTicket = tickets.get(i);
//			if(currentTicket.getId().equals(ticketId)) {
//				tickets.set(i, ticket);
//				return;
//			}
//		}
		
		ticketsRepository.save(ticket);
	}

	public void deleteTicket(String ticketId) {
//		tickets.removeIf(ticket -> ticket.getId().equals(ticketId));
		
		ticketsRepository.deleteById(ticketId);
	}
}
