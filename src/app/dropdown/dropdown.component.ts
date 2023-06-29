import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent {
  @ViewChild('myForm') myFormObj : any;
  
  onSubmit(){
    console.log(this.myFormObj);
  }
}
