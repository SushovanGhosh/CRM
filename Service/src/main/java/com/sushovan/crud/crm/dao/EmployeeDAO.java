package com.sushovan.crud.crm.dao;

import java.util.List;

import com.sushovan.crud.crm.entity.Employee;

public interface EmployeeDAO {

	public List<Employee> getEmployees();
	public Employee getEmployeeById(int id);
	public void save(Employee theEmployee);
}
