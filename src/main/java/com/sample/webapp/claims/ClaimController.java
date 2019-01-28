package com.sample.webapp.claims;

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
public class ClaimController {

	@Autowired
	private ClaimService claimService;
	
	// GET by default
	@RequestMapping("/claims")
	@CrossOrigin(origins = "http://localhost:4200")
	public List<Claim> getAllClaims() {
		return claimService.getAllClaims();
	}
	
	@RequestMapping("/claims/{claimId}")
	@CrossOrigin(origins = "http://localhost:4200")
	public Optional<Claim> getClaim( @PathVariable String claimId) {
		return claimService.getClaim(claimId);
	}
	
	@RequestMapping(method = RequestMethod.POST, value="/claims")
	@CrossOrigin(origins = "http://localhost:4200")
	public void createClaim(@RequestBody Claim ticket) {
		claimService.addClaim(ticket);
	}
	
	@RequestMapping(method = RequestMethod.PUT, value="/claims/{claimId}")
	@CrossOrigin(origins = "http://localhost:4200")
	public void updateClaim(@PathVariable String claimId, @RequestBody Claim claim) {
		claimService.updateClaim(claimId,claim);
	}
	
}
