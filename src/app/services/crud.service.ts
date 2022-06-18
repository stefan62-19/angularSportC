import { toPublicName } from '@angular/compiler/src/i18n/serializers/xmb';
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { reduce } from 'rxjs';
import { TrainerCrudComponent } from '../trainer-crud/trainer-crud.component';
@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor(public fireservices:AngularFirestore) {

   }
  idd!: any;
  create_newTrainers(record:any,id:any)
  {
    return this.fireservices.collection('Trainer').add(record)
  }
  get_allTrainer()
  {
    return this.fireservices.collection('Trainer').snapshotChanges()
  }
  get_allSports()
  {
    return this.fireservices.collection('Sports').snapshotChanges()
  }
  reloadCurrentPage() {
    window.location.reload();
   }
  update_trainer(recordid, record)
  {
    this.fireservices.doc('Trainer/' +recordid).update(record);
    //console.log(recordid);
  }
  delete_trainer(record_id)
  {
    console.log(record_id)
    this.fireservices.doc('Trainer/' + record_id).delete();
  }
}
