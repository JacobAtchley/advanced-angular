import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { InventoryService } from '../core/inventory.service';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements OnInit {

  @Input() branchName = '<branch name>';

  @Input() branchLibrarian = '<not set>';
  @Output() decreased = new EventEmitter<number>();

  constructor(private inventoryService: InventoryService) { }

  ngOnInit() {
  }

  increaseInventory(amount: string) {
    this.inventoryService.addInventory(parseInt(amount,10));
  }

  decreaseInventory(amount: string){
    this.decreased.emit(parseInt(amount,10));
  }
}
