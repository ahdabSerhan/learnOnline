import { Component, OnInit } from "@angular/core";
import { CatagoreyService } from "../catagorey.service";
import { map } from "rxjs/operators";

@Component({
  selector: "app-catagories-list",
  templateUrl: "./catagories-list.component.html",
  styleUrls: ["./catagories-list.component.css"]
})
export class CatagoriesListComponent implements OnInit {
  catagories: any;
  topics: any;
  subTopics= [];
  constructor(private catagoriesService: CatagoreyService) {}

  ngOnInit() {
    this.getCatagories();

  }

  getCatagories() {
    this.catagoriesService
      .getCatagoriesList()
      .snapshotChanges()
      .pipe(
        map(changes =>
          changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
        )
      )
      .subscribe(catagories => {
        this.catagories = catagories;
        this.catagories.forEach(catagorey => {
          console.log("catagorey ",catagorey.title)
          this.topics = catagorey.topics;
       //  console.log(this.subTopics);

        });
      });
  }
  getKey(obj){
    return Object.keys(obj);
  }
  getValues(obj){
    return Object.values(obj);
  }
  getSubTopics(topics){
    var subTopics =[];

    //console.log("topic inside the func",topics);
    for (var topic in topics) {
      //console.log("Topiccc in the func ",topic);
        subTopics=topics[topic];
       //console.log("sub topics ",topics[topic]);
        var subTopic=Object.values(subTopics)[0];
      //  console.log("sub topics ",topics[topic]);

        for(var j in subTopic)
        //  console.log("this.subTopics  the func",subTopic[j]);
          subTopics[j]=subTopic[j];


    }
    //return array of sub topics of specific topic
    console.log("before return the value ",this.getValues(subTopics)[0])
    return this.getValues(subTopics)[0];

  }

}
