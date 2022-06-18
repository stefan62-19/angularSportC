import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ISports } from '../interfaces/i-sports';
import { SportService } from '../services/sport.service';
import{CrudService} from '../services/crud.service'
@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {

  constructor(private SportService:SportService) { }

  ngOnInit(): void {
    this.SportService.get_allSports().subscribe(data=>{
      this.sports2=data.map(e=>{
        return  e.payload.doc.data()
      })
    })
  }
  sports2!:any
  receiveMessage($event:any)
  {
    this.sports2=$event
  }
  changePosition(l: number){
    setTimeout( () => { window.scroll(0,l); }, 300 );
  }
}
