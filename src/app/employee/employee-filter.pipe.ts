import { Pipe, PipeTransform } from '@angular/core';
import { Employee } from './employee';

@Pipe({
  name: 'employeeFilter'
})
export class EmployeeFilterPipe implements PipeTransform {

  transform(value: Employee[], filterText?: string): Employee[] {
    filterText= filterText?filterText.toLocaleLowerCase():null
    return filterText?value.filter((p:Employee)=>p.firstName
    .toLocaleLowerCase().indexOf(filterText)!==-1):value;
  }

}
