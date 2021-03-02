import { Component, OnInit } from '@angular/core';
import { GlobalvarService } from '../app/globalvar.service';

@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.css']
})
export class Page2Component implements OnInit {
  note
  constructor(public globvar : GlobalvarService) {
    this.note=this.globvar.getnote()
   }

  ngOnInit() {
  }
  addfavorit(a){
    this.globvar.setfavorit(a);
    alert("Berhasil add favorite pada Note ke "+a)
  }
}