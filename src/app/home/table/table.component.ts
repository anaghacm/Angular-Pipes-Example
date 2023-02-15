import { Component, OnInit } from '@angular/core';
import { AppendDataPipe } from 'src/app/pipe/append-data.pipe';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  public studentsList=[
    {
      id:1,
      name:'John',
      age:15,
      gender:'Male',
      class:'10 A',
      address:'16 AC, East Road, Madison'
    },
    {
      id:2,
      name:'Alen',
      age:14,
      gender:'Male',
      class:'9 C',
      address:'9th Street, Church Road'
    },
    {
      id:3,
      name:'Mary',
      age:14,
      gender:'Female',
      class:'9 B',
      address:'04 AC, Madison'
    },
    {
      id:4,
      name:'Jake',
      age:15,
      gender:'Male',
      class:'10 A',
      address:'125 S, Webster Street'
    },
    {
      id:5,
      name:'Lena',
      age:14,
      gender:'Female',
      class:'9 C',
      address:'11th Street, Wisconsin'
    },
    {
      id:6,
      name:'Diana',
      age:14,
      gender:'Female',
      class:'9 B',
      address:'104 S, Webster Street'
    },
    {
      id:7,
      name:'Patric',
      age:15,
      gender:'Male',
      class:'10 C',
      address:'104 S, Webster Street'
    },
    {
      id:8,
      name:'Steve',
      age:15,
      gender:'Male',
      class:'10 A',
      address:'2nd Street, East Road'
    },
    {
      id:9,
      name:'Angel',
      age:14,
      gender:'Female',
      class:'9 A',
      address:'8 AC, Madison Street'
    },
    {
      id:10,
      name:'Stephen',
      age:14,
      gender:'Male',
      class:'9 A',
      address:'2nd Street, East Road'
    }
  ]
  constructor(private appendData:AppendDataPipe) { }

  ngOnInit(): void {
    for(let student of this.studentsList)
    {
      this.appendData.transform(student)
    }
  }

}
