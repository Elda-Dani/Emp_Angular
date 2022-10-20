import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-addemployees',
  templateUrl: './addemployees.component.html',
  styleUrls: ['./addemployees.component.css']
})
export class AddemployeesComponent implements OnInit {

  constructor(private myapi:ApiService) { }


  
  empcode=""
  name=""
  designation=""
  salary=""
dob=""
phone=""
email=""
company=""
doj=""

status:boolean=false

readValue=()=>{
  let data={
    "empcode":this.empcode,
"name":this.name,
"designation":this.designation,
"salary":this.salary,
"dob":this.dob,
"phone":this.phone,
"email":this.email,
"company":this.company,
"doj":this.doj
  }
  console.log(data)
this.myapi.addEmployee(data).subscribe(
  (respose)=>{
    console.log(respose)
    alert ("successfully added")
    this.empcode=""
    this.name=""
    this.designation=""
    this.salary=""
    this.dob=""
    this.phone=""
    this.email=""
    this.company=""
    this.doj=""
    this.status=true
  }
)

 
}


  ngOnInit(): void {
  }

}
