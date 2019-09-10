import { Component, OnInit } from '@angular/core';
import {cribs} from '../../../assets/cribs';
@Component({
  selector: 'app-cribs-listing',
  templateUrl: './cribs-listing.component.html',
  styleUrls: ['./cribs-listing.component.css']
})
export class CribsListingComponent implements OnInit {
cribs : Array<any>=cribs;
  constructor() { }

  ngOnInit() {
  }

}
