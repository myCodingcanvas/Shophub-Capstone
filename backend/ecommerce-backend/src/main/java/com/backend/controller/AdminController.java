package com.backend.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/admin")
public class AdminController {
	
	@GetMapping({"", "/"})
	public ResponseEntity<String> admin(){
		System.out.println("Inside Admin test controller");
		return ResponseEntity.ok("Admin API...");
	}
}
