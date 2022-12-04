import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employ-login',
  templateUrl: './employ-login.component.html',
  styleUrls: ['./employ-login.component.css']
})
export class EmployLoginComponent {
  empid=""
  Password=""
constructor(private route:Router){}

  readvalues=()=>{
    let log1={"empid":this.empid,"Password":this.Password}
    console.log(log1)
  
  if(this.empid=="1122" && this.Password=="12345") {
    this.route.navigate(["/addcourse"])
    
  } else {
    alert("Invalid Credentials")
  }
}

}
