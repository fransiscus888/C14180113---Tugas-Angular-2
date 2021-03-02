import { Injectable } from "@angular/core";

@Injectable()
export class GlobalvarService {
  private note = [{ judul: "0", isi: "0", tanggal: "0", favorit: "0" }];
  constructor() {}

  addnote(_judul, _isi, _tanggal) {
    this.note.push({
      judul: _judul,
      isi: _isi,
      tanggal: _tanggal,
      favorit: ""
    });
  }

  getnote() {
    return this.note;
  }
  setfavorit(x) {
    this.note[x].favorit = "*";
  }
}
