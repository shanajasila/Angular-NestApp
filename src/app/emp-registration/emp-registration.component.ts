import { Component } from '@angular/core';

@Component({
  selector: 'app-emp-registration',
  templateUrl: './emp-registration.component.html',
  styleUrls: ['./emp-registration.component.css']
})
export class EmpRegistrationComponent {
  employeeid=""
  FirstName=""
  LastName=""
  HouseNo=""
  HouseName=""
  StreetName=""
  District=""
  State=""
  Country=""
  MobileNo=""
  EmailId=""
  ParentName=""
  Gender=""
  HighestDegree=""
  YearExperience=""
  DateJoining=""
  Username=""
  Password=""
  ConfirmPassword=""
  readValues=()=>
  {
   let data={"employeeid":this.employeeid,"FirstName":this.FirstName,"LastName":this.LastName,"HouseNo":this.HouseNo,"HouseName":this.HouseName,
  "StreetName":this.StreetName,"District":this.District,"State":this.State,"Country":this.Country,"MobileNo":this.MobileNo,"EmailId":this.EmailId
,"ParentName":this.ParentName,"Gender":this.Gender,"HighestDegree":this.HighestDegree,"YearExperience":this.YearExperience,"DateJoining":this.DateJoining,
"Username":this.Username,"Password":this.Password,"ConfirmPassword":this.ConfirmPassword}
    console.log(data)
  }
}
