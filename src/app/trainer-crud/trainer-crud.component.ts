import { Component, OnInit } from '@angular/core';
import{AngularFirestoreModule}from '@angular/fire/compat/firestore'
import { FormBuilder, Validators } from '@angular/forms';
import { map } from 'rxjs';
import{CrudService} from '../services/crud.service'
import{NgIf} from '@angular/common'
import { style } from '@angular/animations';
import { AuthService } from 'src/app/services/auth.service';
import { AngularFirestore } from '@angular/fire/compat/firestore';
@Component({
  selector: 'app-trainer-crud',
  templateUrl: './trainer-crud.component.html',
  styleUrls: ['./trainer-crud.component.css']
})
export class TrainerCrudComponent implements OnInit {
  [x: string]: any;

  constructor(public crudservice:CrudService,public fb: FormBuilder,public authService: AuthService) { }
  Sports: any = ['Court', 'Tennis court', 'Sports Hall', 'Swimming pools','Massage','Gym'];
  ngOnChange():void
  {
    
  }
  ngOnInit(): void {
    //this.Id=[]
    this.crudservice.get_allTrainer().subscribe(data=>{
      this.trainers=data.map(e=>{
        return  e.payload.doc.data()
      })
    })
  } 
  br:number=0;
  id:number;
  im:string;
  pr:string;
  iS:string;
  idd:string
  EditRecord(Record)
  {
    Record.isedit = true;
    Record.editname = Record.ime;
    Record.editlastname = Record.prezime;
    Record.editid = Record.idSport;
  }
setLocal(i)
{
  //console.log(i)
 this.crudservice.get_allTrainer().subscribe(data=>{
  localStorage.setItem("id",data[i].payload.doc.ref.id)
})
}
  Updatarecord(recorddata,id)
  { 
    var x=localStorage.getItem("id");
    let record = {};
    record['ime'] = recorddata.editname;
    record['prezime'] = recorddata.editlastname;
    record['idSport'] = recorddata.editid;
    this.crudservice.update_trainer(x, record);
    recorddata.isedit = false;
  }
  reloadCurrentPage() {
    window.location.reload();
   }
  DeleteTrainer(record_id)
  {
    var x=localStorage.getItem("id")
    this.crudservice.delete_trainer(x); 
  }
  trainers!: any;
  trainersName!: string;
  trainersLastName!: string;
  trainersSport!: string;
  trainersId!:number ;
  Tid:string;
  //Id: any = [];
  //varil!:string;
  trainers2:any=this.trainers
  onChange($event:any) {
    if(this.trainersSport[0]=="Court")
    this.trainersSport='f'
    if(this.trainersSport[0]=="Tennis court")
    this.trainersSport='t'
    if(this.trainersSport[0]=="Sports Hall")
    this.trainersSport='h'
    if(this.trainersSport[0]=="Swimming pools")
    this.trainersSport='p'
    if(this.trainersSport[0]=="Massage")
    this.trainersSport='m'
    if(this.trainersSport[0]=="Gym")
    this.trainersSport='g'
    console.log(this.trainersSport[0])
}
  insertTrainers()
  {

    this.trainersId=this.trainers.length
    console.log(this.trainersSport[0])
    let record={"ime":this.trainersName, "prezime":this.trainersLastName,"idSport":this.trainersSport[0],"id": this.trainersId}
    this.crudservice.create_newTrainers(record,this.trainersId).then(res=>{
      this.trainersName=''
      this.trainersLastName=''
      this.trainersSport=''
      alert("Successfully added")
    }).catch(error=>
      {
        console.log(error)
      });

      //this.Id=this.Id.slice(-this.trainersId-1)
  }
}
