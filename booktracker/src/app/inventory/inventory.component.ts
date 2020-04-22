import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements OnInit {

  branchName = '<branch name>';
  @Input()branchLibrarian: string;
  @Output()increased = new EventEmitter<string>(undefined);
  @Output()decreased = new EventEmitter<string>(undefined);

  constructor() { }

  ngOnInit() {
  }

  increaseInventory(amount: string) {
    this.increased.emit(amount);
  }

  decreaseInventory(amount: string){
    this.decreased.emit(amount);
  }
}
