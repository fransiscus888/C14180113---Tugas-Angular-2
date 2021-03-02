import { Component, OnInit } from '@angular/core';
import { GlobalvarService } from '../app/globalvar.service';

@Component({
  selector: 'app-page3',
  templateUrl: './page3.component.html',
  styleUrls: ['./page3.component.css']
})
export class Page3Component implements OnInit {
  note
  constructor(public globvar : GlobalvarService) { 
    this.note=this.globvar.getnote()
  }

  ngOnInit() {
  }

}