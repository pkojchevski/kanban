import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.scss']
})
export class DeleteComponent {
  canDelete: boolean = false;
  @Output() delete = new EventEmitter<boolean>();

  prepareForDelete() {
    this.canDelete = true;

  }

  cancel() {
    this.canDelete = false;
  }

  deletBoard() {
    this.delete.emit(true)
    this.canDelete = false;
  }
   

}
