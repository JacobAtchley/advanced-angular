import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements OnInit {

  branchName = '<branch name>';
  @Input()branchLibrarian: string;
  @Output()increased = new EventEmitter<number>(undefined);
  @Output()decreased = new EventEmitter<number>(undefined);

  constructor() { }

  ngOnInit() {
  }

  increaseInventory(amount: string) {
    this.increased.emit(parseInt(amount,10));
  }

  decreaseInventory(amount: string){
    this.decreased.emit(parseInt(amount,10));
  }
}
