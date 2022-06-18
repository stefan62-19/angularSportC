import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sort-filter',
  templateUrl: './sort-filter.component.html',
  styleUrls: ['./sort-filter.component.css']
})
export class SortFilterComponent implements OnInit {

  constructor() { }
  sort=""
  dat=""
  ngOnInit(): void {
  }
  showSort()
  {
    document.getElementById('ddl')?.classList.add('dropdown-menu2')
  }
  showSort2()
  {
    document.getElementById('ddlS')?.classList.add('dropdown-menu3')
  }
  hideBtn()
  {
    document.getElementById('ddl')?.classList.remove('dropdown-menu2')
  }
  hideBtn2()
  {
    document.getElementById('ddlS')?.classList.remove('dropdown-menu3')
  }
  showSort3()
  {
    document.getElementById('ddlDD')?.classList.add('dropdown-menu3')
  }
  hideBtn3()
  {
    document.getElementById('ddlDD')?.classList.remove('dropdown-menu3')
  }
  showThis(data:string)
  {

    if(data.includes("High to Low Low to High A to Z Z to A"))
    {
      this.sort=data;
    }
    else
    {
      this.dat=data
    }
  }
}
