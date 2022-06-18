import { Component, OnInit } from '@angular/core';
import { ISports } from '../interfaces/i-sports';
import { SportService } from '../services/sport.service';
import{CrudService} from '../services/crud.service'
@Component({
  selector: 'app-sadrzaj',
  templateUrl: './sadrzaj.component.html',
  styleUrls: ['./sadrzaj.component.css']
})
export class SadrzajComponent implements OnInit {

  constructor(private SportService:SportService,public crudservice:CrudService) { }

  ngOnInit(): void {
    this.crudservice.get_allSports().subscribe(data=>{
      this.sports2=data.map(e=>{
        return  e.payload.doc.data()
      })
      //console.log(this.sports2)
    })
  }
  sports2!: any;
  receiveMessage($event:any)
  {
    this.sports2=$event
  }
  scaleImg(data:string,id:string){
    var element=data.slice(0,-5);
    element+='.jpg';
    let result = data.replace("1", "2");  
    document.getElementById('flip'+id)?.setAttribute('src',result)
    document.getElementById('flip'+id)?.setAttribute('style','height: 225px; width: 100%;')
  }
  unScaleImg()
  {
      var AllImg=document.getElementsByTagName('img');
      var e=document.getElementById("t");
      e?.setAttribute('src','../../assets/images/tennis1.jpg');
      var e1=document.getElementById("f");
      e1?.setAttribute('src','../../assets/images/football.jpg');
      var e2=document.getElementById("g");
      e2?.setAttribute('src','../../assets/images/gym1.jpg');
      var e3=document.getElementById("m");
      e3?.setAttribute('src','../../assets/images/massage1.jpg');
      var e4=document.getElementById("p");
      e4?.setAttribute('src','../../assets/images/pool.jpg');
      var e5=document.getElementById("h");
      e5?.setAttribute('src','../../assets/images/hall.jpg');
  }
  viewUniqSport(data:string)
  {
    //console.log(data);   
  }
  changePosition(l: number){
    setTimeout( () => { window.scroll(0,l); }, 300 );
  }
}
