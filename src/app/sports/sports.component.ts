import { Component, OnInit } from '@angular/core';
import { SportService } from '../services/sport.service';
import { SportCategoryService } from '../services/sport-category.service';
import { PrvaKomponentaComponent } from '../prva-komponenta/prva-komponenta.component';
import { registerLocaleData } from '@angular/common';
import localeSr from '@angular/common/locales/sr-Latn'
import { ISports } from '../interfaces/i-sports';
import { ISportsCategory } from '../interfaces/i-sports-category';
import{CrudService} from '../services/crud.service'
registerLocaleData(localeSr,'sr-Latn')
@Component({
  selector: 'app-sports',
  templateUrl: './sports.component.html',
  styleUrls: ['./sports.component.css']
})
export class SportsComponent implements OnInit {
  childMessage='Hello World'
  sports!:any
  category!:any
  sports3!:any
  sports2!: any;
  sports4!:any;
  receiveMessage($event:any)
  {
    this.sports=$event
  }
  constructor(private SportService:SportService,private SportCategoryService:SportCategoryService,public crudservice:CrudService) { }


  ngOnInit(): void {
    this.category=this.SportCategoryService.get_allCategory()
    this.SportCategoryService.get_allCategory().subscribe(data=>{
      this.category=data.map(e=>{
        return  e.payload.doc.data()
      })
    })
    this.crudservice.get_allSports().subscribe(data=>{
      this.sports2=data.map(e=>{
        return  e.payload.doc.data()
      })
      this.sports4=this.sports4
      this.sports=this.sports2
      this.sports3=this.sports2     
    })
  }
  snizenje(data1:number,data2:number):number
  {
    var x=data2*100/data1
    var y=Math.round((x + Number.EPSILON) * 100) / 100;
    return 100-y;
  }
  ispisKategorije(data:number[]):string
  {
    var str="";
      data.forEach(element => {
        this.category.forEach(element2 => {
          if(element==element2.id)
          {
            str+="| "+element2.naziv+" ";
          }
        });
      });
      return str;
  }

  searchValue: any ="";
  sortValue: any=0;
  sportValue: any=0;

  filterSortSport(event: any){

    this.sports2=this.SportService.sports2
    this.searchValue="";
    let filterTure=[];

//Ako ne postoji ni jedan
    if(this.sportValue==0 && this.sortValue==0){
      this.SportService.get_allSports().subscribe(data=>{
        this.sports2=data.map(e=>{
          return  e.payload.doc.data()
        })
      })
    }
//----------
//Vracanje sorta na 0

//Ako postoji samo sort
    if(this.sportValue== 0 && this.sortValue !="0"){
      
      if(this.sortValue=="opada"){
        this.sports2.sort((a,b)=>{
          if(a.cenaSaPopustomZaMladje>b.cenaSaPopustomZaMladje){
            return -1;
          }
          else if(a.cenaSaPopustomZaMladje<b.cenaSaPopustomZaMladje){
            return 1;
          }
          else{
            return 0;
          }
        })
      }
      if(this.sortValue=="raste"){
        this.sports2.sort((a,b)=>{
          if(a.cenaSaPopustomZaMladje>b.cenaSaPopustomZaMladje){
            return 1;
          }
          else if(a.cenaSaPopustomZaMladje<b.cenaSaPopustomZaMladje){
            return -1;
          }
          else{
            return 0;
          }
        })
      }
      if(this.sortValue=="a_z"){
        this.sports2.sort((a,b)=>{
          if(a.naziv>b.naziv){
            return 1;
          }
          else if(a.naziv<b.naziv){
            return -1;
          }
          else{
            return 0;
          }
        })
      }
      if(this.sortValue=="z_a"){
        this.sports2.sort((a,b)=>{
          if(a.naziv>b.naziv){
            return -1;
          }
          else if(a.naziv<b.naziv){
            return 1;
          }
          else{
            return 0;
          }
        })
      }
    }
//-------------
//Ako ima samo cat filter a sort ne
    if(this.sportValue != '0' && this.sortValue==0){
        for(let elem of this.sports2){
          if(this.sportValue==elem.naziv){
            filterTure.push(elem);
          }
        }
      this.sports2=filterTure;
      //console.log(this.sports4)
    }
//--------------
//Ako ima i sort i cat filter
    if(this.sportValue != 0 && this.sortValue !="0"){
        for(let elem of this.sports2){
          if(this.sportValue==elem.naziv){
            filterTure.push(elem);
          }
        }
      
      if(this.sortValue == 'opada'){
        filterTure.sort((a,b)=>{
          if(a.cenaSaPopustomZaMladje > b.cenaSaPopustomZaMladje){

            return -1;

        }
        else if(a.cenaSaPopustomZaMladje < b.cenaSaPopustomZaMladje){

          return 1;

      }
      else{
        return 0;
      }

        })
      }

      if(this.sortValue=="raste"){
        filterTure.sort((a,b) => {

          if(a.cenaSaPopustomZaMladje > b.cenaSaPopustomZaMladje){

              return 1;

          }

          else if(a.cenaSaPopustomZaMladje < b.cenaSaPopustomZaMladje){

              return -1;

          }

          else return 0;

      })
      }

      if(this.sortValue == 'a_z'){
        filterTure.sort((a,b) => {
            if(a.naziv > b.naziv){
                return 1;
            }
            else if(a.naziv < b.naziv){
                return -1;
            }
            else return 0;
        })
    }

    if(this.sortValue == 'z_a'){

      filterTure.sort((a,b) => {

          if(a.naziv > b.naziv){

              return -1;

          }

          else if(a.naziv < b.naziv){

              return 1;

          }

          else return 0;

      })
    }
    this.sports2=filterTure;
   
    
      }
//---------------
  }
  searchSport(){
    this.sortValue="0";
    this.sportValue="0";
    var filterTura: any=[];
    this.sports2=this.SportService.sports2
    for(let el of this.sports2){
      if(el.naziv.toLowerCase().indexOf(this.searchValue.toLowerCase()) !== -1){
        filterTura.push(el);
      }
    }
    this.sports2=filterTura;
  }
  changePosition(l: number){
    setTimeout( () => { window.scroll(0,l); }, 300 );
  }
}
