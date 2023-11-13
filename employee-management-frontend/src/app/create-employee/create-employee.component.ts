import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Employee } from '../employee';
import { FormsModule } from '@angular/forms';
import { EmployeeService } from '../employee.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-create-employee',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './create-employee.component.html',
  styleUrl: './create-employee.component.scss',
})
export class CreateEmployeeComponent {
  employee: Employee = new Employee();

  constructor(private employeeService: EmployeeService, private router: Router) {}

  saveEmployee() {
    this.employeeService.createEmployee(this.employee).subscribe(
      (data) => {
        console.log(data);
        this.goToEmployeeList()
      },
      (error) => console.log(error),
    );
  }

  goToEmployeeList(){
    this.router.navigate(['/employees'])
  }
  onsubmit() {
    this.saveEmployee()
  }
}
