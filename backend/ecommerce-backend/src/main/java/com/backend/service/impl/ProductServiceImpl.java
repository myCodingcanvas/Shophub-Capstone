package com.backend.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.backend.model.ProductEntity;
import com.backend.repository.ProductRepository;
import com.backend.service.ProductService;

@Service
public class ProductServiceImpl implements ProductService{
	
	@Autowired
	private ProductRepository productRepository;

	@Override
	public List<ProductEntity> getAllProducts() {
		List<ProductEntity> allProducts = productRepository.findAll();
		return allProducts;
	}

	

}
