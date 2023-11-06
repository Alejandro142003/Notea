import { Component, Input, OnInit } from '@angular/core';
import { INote } from 'src/app/model/INote';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent implements OnInit {
  @Input('note') public note:INote = {
    title:'',
    description:''
  };

  constructor(){

  }

  ngOnInit(): void {
      
  }
}
