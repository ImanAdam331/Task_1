import { Component } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent {

  public students = [

    {"Name" : "Ali" , "Email": "Ali@gmail.com" , "Marks":55},
    {"Name" : "Khalid" , "Email": "Khalid@gmail.com" , "Marks":30},
    {"Name" : "Sara" , "Email": "Sara@gmail.com" , "Marks":99},
    {"Name" : "Iman" , "Email": "Iman@gmail.com" , "Marks":80},
    {"Name" : "Salim" , "Email": "Salim@gmail.com" , "Marks":25},
    {"Name" : "Zahir" , "Email": "Zahir@gmail.com" , "Marks":49}
  ]

}
