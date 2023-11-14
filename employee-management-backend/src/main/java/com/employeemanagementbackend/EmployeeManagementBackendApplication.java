package com.employeemanagementbackend;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Profile;

@SpringBootApplication
public class EmployeeManagementBackendApplication {

	@Profile({"dev","prod"})
	public static void main(String[] args) {
		SpringApplication.run(EmployeeManagementBackendApplication.class, args);
	}

}
