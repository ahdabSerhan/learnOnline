import { Component, OnInit , ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CribsService } from './../cribs.service';

@Component({
  selector: 'app-add-crib',
  templateUrl: './add-crib.component.html',
  styleUrls: ['./add-crib.component.css']
})
export class AddCribComponent implements OnInit {
  @ViewChild('newCribForm',{static: false}) newCribForm: NgForm;
  propertyTypes: Array<string> = ['Condo', 'Duplex', 'House'];

  constructor(private cribsService: CribsService) { }

  ngOnInit() {
  }
  onCribSubmit(data) {
    this.cribsService.addCrib(data);
    this.newCribForm.reset();
  }
}
