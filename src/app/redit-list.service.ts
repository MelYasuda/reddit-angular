import { Injectable } from '@angular/core';
import { REDITS } from './album-list';
import { Redit } from '../models/redit.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class ReditListService {
  redits: FirebaseListObservable<any[]>;
  constructor(private database: AngularFireDatabase) {
    this.redits = database.list('redits');
   }

  // getReditList() {
  //   return REDITS;
  // }

  // getReditbyId(reditId: number) {
  //   for (var i = 0; i <= REDITS.length - 1; i++) {
  //     if (REDITS[i].id === reditId) {
  //       return REDITS[i];
  //     }
  //   }
  // }

  getReditbyId(reditId: string) {
    return this.database.object('redits/' + reditId);
  }  

  getReditFromDB(reditId: number) {
      return this.redits;
  }  

  getRedits(){
    console.log(this.redits);
    return this.redits;
  }  

  addRedit(newRedit: Redit) {
    this.redits.push(newRedit);
  }
}
