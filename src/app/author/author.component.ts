import { Component, OnInit } from '@angular/core';
import { ISports } from '../interfaces/i-sports';
import { SportService } from '../services/sport.service';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent implements OnInit {

  constructor(private SportService:SportService) { }

  ngOnInit(): void {
    this.SportService.get_allSports().subscribe(data=>{
      this.sports2=data.map(e=>{
        return  e.payload.doc.data()
      })
    })
  }
  sports2:any;
  receiveMessage($event:any)
  {
    this.sports2=$event
  }
}
