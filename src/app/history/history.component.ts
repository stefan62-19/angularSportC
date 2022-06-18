import { Component, OnInit } from '@angular/core';
import { ISports } from '../interfaces/i-sports';
import { SportService } from '../services/sport.service';
@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {

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
  uNapred()
  {
    var elementi=document.getElementsByClassName('slika');
    var broj=document.getElementById('prva');
    var br=broj?.getAttribute('src');
    var slika=br?.slice(20,-4);
    var b=Number(slika);
    console.log(b);
    var slike=document.getElementsByClassName('slika')
    var poslednja=document.getElementById('poslednja')?.getAttribute('src')?.slice(20,-4);
    var p=Number(poslednja);

    for (let index = 0; index < slike.length; index++) {
      slike[index].classList.remove('animation')
      window.requestAnimationFrame(function(){
        slike[index].classList.add('animation')
      })
    }
    if(b==4)
    {
      b=0;
    }
    for(let i=0;i<elementi.length;i++)
    {

      b++;
      elementi[i].setAttribute('src','../../assets/images/'+b+'.jpg');
    }
  }
  uNazad(){
    var elementi=document.getElementsByClassName('slika');
    var slike=document.getElementsByClassName('slika')
    for(let i=0;i<elementi.length;i++)
    {
      var vrednost =Number(elementi[i].getAttribute('src')?.slice(20,-4));   
      vrednost=vrednost-1;
      console.log(vrednost);
      if(vrednost<0)
      {
        vrednost=vrednost*(-1);
        vrednost=7-vrednost;
      }
      elementi[i].setAttribute('src','../../assets/images/'+vrednost+'.jpg');
    }
    for (let index = 0; index < slike.length; index++) {
      console.log('usoo')
      slike[index].classList.remove('animation')
      window.requestAnimationFrame(function(){
        slike[index].classList.add('animation')
      })
    }

  }
  zoomIn(broj:number)
  {
    var element=document.getElementsByClassName('slika');
    var vrednost=element[broj].getAttribute('src')?.slice(20,-4);
    document.getElementById('img01')?.setAttribute('src','../../assets/images/'+vrednost+'.jpg');
    document.getElementById('img01')?.setAttribute('name',''+vrednost)
    var div=document.getElementsByClassName('modal');
    div[0].setAttribute('style',' display: block; position: fixed; z-index: 111111;padding-top: 50px;left: 0;top: 0;overflow: auto;background-color: rgba(0,0,0,0.8);display:flex;justify-content:center;align-content:center;');
  }
  closeImg()
  {
    var div=document.getElementsByClassName('modal');
    console.log(div[0]);
    div[0].setAttribute('style',' display: none;')
  }
  br:number=1
  napred()
  {
    var okvir=document.getElementById('img01');
    console.log(okvir?.getAttribute('name'))
    var vrednost=okvir?.getAttribute('name')
    
    var broj=Number(vrednost)+this.br
    this.br++
    if(broj>6)
    {
      this.br=0
      broj=0
    }
    var ruta="../../assets/images/"+broj+".jpg"
    console.log(ruta)
    okvir?.setAttribute('src',ruta)
  }
  sbr:number=1
  broj:number=0
  n:number=1
  nazad()
  {
    var okvir=document.getElementById('img01');
    
    if(this.n==1)
    {
      
      var vrednost=okvir?.getAttribute('name')
      this.n++
      this.broj=Number(vrednost)-this.sbr
    }
    this.broj-=this.sbr
    console.log(this.broj)
    if(this.broj<0)
    {
      this.broj=7
      this.sbr=0
      this.broj-=this.sbr
      console.log(this.broj)
    }
    this.sbr++
    
    var ruta="../../assets/images/"+this.broj+".jpg"
    console.log(ruta)
    okvir?.setAttribute('src',ruta)
  }
}
