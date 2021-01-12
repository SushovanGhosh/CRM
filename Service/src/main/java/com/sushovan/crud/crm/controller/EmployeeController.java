package com.sushovan.crud.crm.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.sushovan.crud.crm.dao.EmployeeDAO;
import com.sushovan.crud.crm.entity.Employee;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class EmployeeController {
	
	@Autowired
	private EmployeeDAO employeeDao;
	
	@GetMapping("/")
	public List<Employee> getEmployees(){
		
		List<Employee> employees = employeeDao.getEmployees();
		return employees;
	}
	
	@GetMapping("/{id}")
	
	public Employee getEmployeeById(@PathVariable int id) {
		
		Employee employee = employeeDao.getEmployeeById(id);
		if(employee == null)
			throw new RuntimeException("Employee id not found: "+ id);
		return employee;
	}
	
	@PostMapping("/addEmployee")
	public Employee saveEmployee(@RequestBody Employee theEmployee) {
		
		theEmployee.setId(0);
		employeeDao.save(theEmployee);
		return theEmployee;
	}
}
