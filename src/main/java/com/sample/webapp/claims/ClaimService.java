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
	
	
	public List<Claim> getAllClaims(){
		
		List<Claim> claims = new ArrayList<>();
		// iterate through each claim, and add each to the tickets List
		claimsRepository.findAll().forEach(claims :: add);
		return claims;
	}
	
	public Optional<Claim> getClaim(String claimId) {
		return claimsRepository.findById(claimId);
	}
	
	public void addClaim(Claim claim) {
		claim.setId((int)claimsRepository.count() + 1);
		claimsRepository.save(claim);
	}

	public void updateClaim(String claimId, Claim claim) {
		claimsRepository.save(claim);
	}

}
