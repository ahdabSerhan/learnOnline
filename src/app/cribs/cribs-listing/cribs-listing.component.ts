import { Component, OnInit } from '@angular/core';
import {CribsService} from '../cribs.service';
import { Crib } from 'src/app/crib';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-cribs-listing',
  templateUrl: './cribs-listing.component.html',
  styleUrls: ['./cribs-listing.component.css']
})
export class CribsListingComponent implements OnInit {
  cribs: Array<Crib> = [];
  constructor(private cribsService: CribsService) { }

  ngOnInit() {
    this.cribsService.getAllCribs()
    .subscribe(
      data => this.cribs = data,
    );
this.cribsService.newCribSubject.subscribe(
  data=>this.cribs=[data, ...this.cribs]
)
}
}
