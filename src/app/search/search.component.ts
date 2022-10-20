import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private myapi:ApiService) { }

  name=""
  

  readValues=()=>{
    let data={
      "name":this.name,
      
    }
    console.log(data)
    this.myapi.searchEmp(data).subscribe(
      (resp)=>{
       this.data=resp
  
        this.name=""
      
      }
    )
  }

  data:any=[]
  ngOnInit(): void {
  }

}
