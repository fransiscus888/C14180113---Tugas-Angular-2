import { Component, OnInit } from "@angular/core";
import { GlobalvarService } from "../app/globalvar.service";

@Component({
  selector: "app-page1",
  templateUrl: "./page1.component.html",
  styleUrls: ["./page1.component.css"]
})
export class Page1Component implements OnInit {
  judul: String;
  isi: String;
  tanggal: String;
  myDate = new Date();
  constructor(public globvar: GlobalvarService) {}

  ngOnInit() {}

  add() {
      this.tanggal = this.myDate.toString();
      this.globvar.addnote(this.judul, this.isi, this.tanggal);
      this.judul = "";
      this.isi = "";
      alert("Berhasil add Note");
  }
}
