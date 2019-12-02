import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from "ngx-spinner";
 

@Component({
  selector: 'app-venkat',
  templateUrl: './venkat.component.html',
  styleUrls: ['./venkat.component.css']
})
export class VenkatComponent implements OnInit {

  constructor(private spinner: NgxSpinnerService) { 
    
  }

 
  ngOnInit() {
    /** spinner starts on init */
    this.spinner.show();
 
    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinner.hide();
    }, 5000);
  }

}
