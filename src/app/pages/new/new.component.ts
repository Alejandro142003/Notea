import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormNoteComponent } from 'src/app/components/form-note/form-note.component';
import { NotesService } from 'src/app/services/notes.service';

@Component({
  selector: 'app-new',
  standalone: true,
  imports: [CommonModule, RouterModule, FormNoteComponent],
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {

  constructor(private noteS:NotesService) {  }
  
  ngOnInit(): void {

  }

  addNote($event:any) {
    this.noteS.createNote($event);
  }
}
