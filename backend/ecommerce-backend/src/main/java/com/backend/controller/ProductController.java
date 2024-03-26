package com.backend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.backend.model.ProductEntity;
import com.backend.service.impl.ProductServiceImpl;

@RestController
@RequestMapping("/api/products")
public class ProductController {
	
	@Autowired
	private ProductServiceImpl productServiceImpl;
	
	@GetMapping({"", "/"})
	public ResponseEntity<List<ProductEntity>> getAllProducts(){
		return new ResponseEntity<>(productServiceImpl.getAllProducts(), HttpStatus.OK);
	}
	
	@GetMapping("/{id}")
	public ResponseEntity<ProductEntity> getProductById(@PathVariable(name = "id") int id){
		return new ResponseEntity<>(productServiceImpl.getProductById(id), HttpStatus.OK);
	}
}
