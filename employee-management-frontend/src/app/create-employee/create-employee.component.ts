import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Employee} from "../employee";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-create-employee',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './create-employee.component.html',
  styleUrl: './create-employee.component.scss',
})
export class CreateEmployeeComponent {

  employee: Employee = new Employee();
  onsubmit(){
    console.log(this.employee)
  }
}
