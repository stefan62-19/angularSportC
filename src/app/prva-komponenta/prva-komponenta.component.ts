import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit,Input,Output,EventEmitter,HostListener} from '@angular/core';
import { ISports } from '../interfaces/i-sports';
import { SportService } from '../services/sport.service';
import { AuthService } from 'src/app/services/auth.service';
@Component({
  animations: [
    trigger('openClose', [
      // ...
      state('open', style({
        height: '200px',
        opacity: 1,
        backgroundColor: 'yellow'
      })),
      state('closed', style({
        height: '100px',
        opacity: 0.8,
        backgroundColor: 'blue'
      })),
      transition('open => closed', [
        animate('1s')
      ]),
      transition('closed => open', [
        animate('0.5s')
      ]),
    ]),
  ],
  selector: 'app-prva-komponenta',
  templateUrl: './prva-komponenta.component.html',
  styleUrls: ['./prva-komponenta.component.css']
})
export class PrvaKomponentaComponent implements OnInit {
  //@Input()childMessage!: string;
  top: number=0;
  childMessage:string="Hola Mundo"
  @Output() message=new EventEmitter<String>()
  sendMessage()
  {
    this.message.emit(this.childMessage)
  }
  searchOut(data:string)//:Array<any>
  {
    var filtriran:any=[]
    this.sports2.forEach(element => {
      if(element.velikiOpis.includes(data))
      {
        filtriran.push(element)
      }
    });
    this.message.emit(filtriran);
  }
  constructor(private SportService:SportService,public authService: AuthService) { }
  ngOnInit(): void {
    this.SportService.get_allSports().subscribe(data=>{
      this.sports2=data.map(e=>{
        return  e.payload.doc.data()
      })
    })
    this.SportService.get_allSports().subscribe(data=>{
      this.sports=data.map(e=>{
        return  e.payload.doc.data()
      })
    })
  }
  sports2:any;
  sports:any;
  event=document.addEventListener("scroll",this.getY);
  dugmeKlik()
  {
    var dugme=document.getElementById('aaa');
    dugme?.setAttribute("style","color:red");
  }
  changePosition(l: number){
    setTimeout( () => { window.scroll(0,l); }, 300 );
  }

  showLinks()
  {
    var element=document.getElementById('hide');
    var valueOfElement=element?.getAttribute('style')
    var vrdnost=valueOfElement?.charAt(8);
    if(vrdnost=='b')
    {
      element?.setAttribute("style","display:none");
    }
     else
    {
      var hidenElements=document.getElementById('hide');
      hidenElements?.setAttribute("style","display:block;position:absolute;z-index:99;background-color:#3d6277;width:100px;padding;0px auto;color:white;padding:20px;");
    }  
  }
  hideLinks(){
    var hidenElements=document.getElementById('hide');
    hidenElements?.setAttribute("style","display:none");
  }
  showDdl()
  {
    document.getElementById('ddlD')?.setAttribute('style','display:block;margin-top:35%');
  }
  ///////////
  hideDdl()
  {
    document.getElementById('ddlD')?.setAttribute('style','display:none;');
    document.getElementById('bt')?.setAttribute('style','    transform: rotate(0deg);transition: 0.3s;')
    document.getElementById('pt')?.setAttribute('style','    transform: rotate(0deg);transition: 0.3s;')
  }
  showDdl1()
  {
    document.getElementById('ddlD1')?.setAttribute('style','display:block;position:absolute');
  }
  hideDdl1()
  {
    document.getElementById('ddlD1')?.setAttribute('style','display:none;');
  }
  searchValue: string ="";
  showBurger()
  {
    document.getElementById('ulNav')?.classList.add('x1')
    document.getElementById('srchH')?.classList.add('style','display:none;')
    document.getElementById('navbarSupportedContent2')?.setAttribute('style','display:block!important;background-color: #71a7d3;text-align:center;')
  }
  hideBurger()
  {
    document.getElementById('navbarSupportedContent2')?.setAttribute('style','display:none!important;')
    document.getElementById('srchH')?.classList.add('style','display:block;')
  }
 rotate()
 {
   document.getElementById('bt')?.setAttribute('style','    transform: rotate(180deg);transition: 0.3s;')
   document.getElementById('pt')?.setAttribute('style','    transform: rotate(180deg);transition: 0.3s;')
 }
// ...
isOpen = true;

toggle() {
  this.isOpen = !this.isOpen;
}
@HostListener("window:scroll", []) onWindowScroll() {
  // do some stuff here when the window is scrolled
  document.getElementById('txt')?.setAttribute('style','display:block;animation-fill-mode: both; animation-name: example;position:relative; animation-duration: 2s;')
  document.getElementById('member2')?.setAttribute('style',' animation-name: mymove;position:relative; animation-duration: 3s;')

  const verticalOffset = window.pageYOffset 
        || document.documentElement.scrollTop 
        || document.body.scrollTop || 0;
}
getY(){
  this.top=window.pageYOffset || document.documentElement.scrollTop;
  var nav =document.getElementsByClassName('navbar')[0]
   var logo=document.getElementsByClassName('log')[0]

  if(this.top<=50){
   nav.setAttribute("style", "animation-name: navi3; animation-duration: 1s;animation-fill-mode: both;");
   logo.setAttribute("style","animation-name: navi2;position:relative; animation-duration: 1s;animation-fill-mode: both;");
   
  }

  else{
    nav.setAttribute("style", "animation-name: navi4; animation-duration: 1s;animation-fill-mode: both;");
    logo.setAttribute("style","animation-name: navi;position:relative; animation-duration: 1s;animation-fill-mode: both;");

  }
}
searchText = '';
characters = [
  'Football Courts',
  'Tennis courts',
  'Sports hall',
  'Swimming pools',
  'Massages',
  'Gym'
]
changePosition2(data:string,l:string){
  if(data=="Football Courts"||l.includes("Football Courts"))
  {
    setTimeout( () => { window.scroll(0,800); }, 300 );
  }
  else if(data=="Tennis courts"||l.includes("Tennis courts"))
  {
    setTimeout( () => { window.scroll(0,1300); }, 300 );
  }
  else if(data=="Sports hall"||l.includes("Sports hall"))
  {
    setTimeout( () => { window.scroll(0,1850); }, 300 );
  }
  else if(data=="Swimming pools"||l.includes("Swimming pools"))
  {
    setTimeout( () => { window.scroll(0,2400); }, 300 );
  }
  else if(data=="Massages"||l.includes("Massages"))
  {
    setTimeout( () => { window.scroll(0,2900); }, 300 );
  }
  else if(data=="Gym"||l.includes("Gym"))
  {
    setTimeout( () => { window.scroll(0,3500); }, 300 );
  }
 

}
showHide2()
{
  document.getElementById('hide2')?.setAttribute('style','display:block;    position: absolute;margin-top: 38px;')
}
enterSearch(data:any)
{
  document.getElementById('search')?.setAttribute("placeholder",data)
  
}
hideSearch(data:any)
{
  document.getElementById('search')?.setAttribute("value",data)
  document.getElementById('hide2')?.setAttribute('style','display:none;')
}

}
