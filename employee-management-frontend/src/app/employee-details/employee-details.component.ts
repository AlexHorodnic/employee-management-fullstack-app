import {Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {Employee} from "../employee";
import {ActivatedRoute} from "@angular/router";
import {EmployeeService} from "../employee.service";

@Component({
  selector: 'app-employee-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './employee-details.component.html',
  styleUrl: './employee-details.component.scss'
})
export class EmployeeDetailsComponent implements OnInit{
  id?: number;
  employee?: Employee

  constructor(private route: ActivatedRoute, private employeeService: EmployeeService) {
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id']
    this.employee = new Employee()
    this.employeeService.getEmployeeById(this.id).subscribe(data =>{
      this.employee = data
    })
  }
}
