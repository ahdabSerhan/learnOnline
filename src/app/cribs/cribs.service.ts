import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Crib } from '../crib';
import { map } from 'rxjs/operators';
import { Subject } from 'rxjs';


@Injectable({

  providedIn: 'root'
})
export class CribsService {
  public newCribSubject = new Subject<any>();

  constructor(private http: HttpClient) { }
  getAllCribs() {
    return this.http.get<any>('assets/cribs.json',{responseType:'json'}).pipe(map(res => res));
  }
  addCrib(data) {
    data.image = 'default-crib';
    this.newCribSubject.next(data);
  }
}
