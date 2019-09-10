import { Component, OnInit } from '@angular/core';
import { EmbedVideoService } from 'ngx-embed-video';
import { CatagoreyService } from '../catagories/catagorey.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  youtubeUrl = 'https://www.youtube.com/watch?v=iHhcHTlGtRs';

  catagories:any;
  constructor(private embedService: EmbedVideoService, private catagoriesService:CatagoreyService) {
  }
  ngOnInit() {
    this.getCatagories();
  }
getCatagories(){
  this.catagoriesService.getCatagoriesList().snapshotChanges().pipe(
    map(changes =>
      changes.map(c =>
        ({ key: c.payload.key, ...c.payload.val() })
      )

    )
  ).subscribe(catagories => {
    this.catagories = catagories;

  });
}
}
