package com.sample.webapp.tickets;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class TicketController {

	@Autowired
	private TicketService ticketService;
	
	// GET by default
	@RequestMapping("/tickets")
	@CrossOrigin(origins = "http://localhost:4200")
	public List<Ticket> getAllTickets() {
		return ticketService.getAllTickets();
	}
	
	@RequestMapping("/tickets/{ticketId}")
	@CrossOrigin(origins = "http://localhost:4200")
	public Optional<Ticket> getTicket( @PathVariable String ticketId) {
		return ticketService.getTicket(ticketId);
	}
	
	@RequestMapping(method = RequestMethod.POST, value="/tickets")
	@CrossOrigin(origins = "http://localhost:4200")
	public void createTicket(@RequestBody Ticket ticket) {
		ticketService.addTicket(ticket);
	}
	
	@RequestMapping(method = RequestMethod.PUT, value="/tickets/{ticketId}")
	@CrossOrigin(origins = "http://localhost:4200")
	public void updateticket(@PathVariable String ticketId, @RequestBody Ticket ticket) {
		ticketService.updateTicket(ticketId,ticket);
	}
	
//	@RequestMapping(method = RequestMethod.DELETE, value = "/tickets/{ticketId}")
//	@CrossOrigin(origins = "http://localhost:4200")
//	public void deleteTicket( @PathVariable String ticketId) {
//		 ticketService.deleteTicket(ticketId);
//	}
	
	
}
