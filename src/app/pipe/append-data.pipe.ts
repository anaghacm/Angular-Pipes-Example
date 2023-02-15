import { Injectable, Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'appendData'
})

@Injectable({
  providedIn:'root'
})
export class AppendDataPipe implements PipeTransform {

  transform(student:any){
    if(student.gender=='Male'){
      student.name='Mr. '+student.name;
    }
    else if(student.gender=='Female'){
      student.name='Miss. '+student.name;
    }
    return student;
  }

}
