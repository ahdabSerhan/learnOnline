import { Component, OnInit } from '@angular/core';
import {CatagoreyService} from '../catagorey.service';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-catagories-list',
  templateUrl: './catagories-list.component.html',
  styleUrls: ['./catagories-list.component.css']
})
export class CatagoriesListComponent implements OnInit {
  catagories :any;
  constructor(private catagoriesService: CatagoreyService) { }

  ngOnInit() {
  this.getCatagories();
  }

  getCatagories() {
    this.catagoriesService.getCatagoriesList().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ key: c.payload.key, ...c.payload.val() })
        )
      )
    ).subscribe(catagories => {
      this.catagories = catagories;
      console.log("this.catagories ",this.catagories[0])

    });
  }

}
