package com.sample.webapp.claims;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ClaimService {
	
	@Autowired
	private ClaimRepository claimsRepository;
	
	
//	private List<Ticket> tickets = new ArrayList<>(Arrays.asList(
//			new Ticket(1, "subject1", "description1",  new String[]{"ID", "NAME"}, "NEW"  ),
//			new Ticket(2, "subject2", "description2",  new String[]{"ID", "NAME"}, "CLOSED"  ),
//			new Ticket(3, "subject3", "description3",  new String[]{"ID", "NAME"}, "OPEN" )
//			));
	
	public List<Claim> getAllClaims(){
//		return tickets;
		
		List<Claim> claims = new ArrayList<>();
		// iterate through each claim, and add each to the tickets List
		claimsRepository.findAll().forEach(claims :: add);
		return claims;
	}
	
	public Optional<Claim> getClaim(String claimId) {
//		return tickets.stream().filter(t -> t.getId().equals(ticketId)).findFirst().get();
		
		return claimsRepository.findById(claimId);
	}
	
	public void addClaim(Claim claim) {
//		tickets.add(ticket);
		claim.setId((int)claimsRepository.count() + 1);
		claimsRepository.save(claim);
	}

	public void updateClaim(String claimId, Claim claim) {
		
//		for(int i = 0; i < tickets.size(); i ++) {
//			Ticket currentTicket = tickets.get(i);
//			if(currentTicket.getId().equals(ticketId)) {
//				tickets.set(i, ticket);
//				return;
//			}
//		}
		
		claimsRepository.save(claim);
	}

//	public void deleteTicket(String ticketId) {
////		tickets.removeIf(ticket -> ticket.getId().equals(ticketId));
//		
//		ticketsRepository.deleteById(ticketId);
//	}
}
