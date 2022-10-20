import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-viewall',
  templateUrl: './viewall.component.html',
  styleUrls: ['./viewall.component.css']
})
export class ViewallComponent implements OnInit {

  constructor(private myapi:ApiService) {
  this.fetchData()
   }


  fetchData=()=>{
    this.myapi.viewEmployee().subscribe(
      (data)=>{
        this.empData=data
      }
    )
  }
  
  deleteEmp=(id:any)=>{
    let data={
      "id":id
    }
    this.myapi.deleteEmp(data).subscribe(
      (response)=>{
        alert ("Deleted")
      }
    )
   this.fetchData()
  }


  empData:any=[]

  ngOnInit(): void {
  }

}
