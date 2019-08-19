import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';

import {Catagorey} from './catagorey';
@Injectable({
  providedIn: 'root'
})
export class CatagoreyService {
  private dbPath = '/catagories';
  catagoreisRef: AngularFireList<Catagorey> = null;


  constructor(private db: AngularFireDatabase) {
    this.catagoreisRef=db.list(this.dbPath)

  }
  getCatagoriesList(): AngularFireList<Catagorey> {
    return this.catagoreisRef;
  }
}
