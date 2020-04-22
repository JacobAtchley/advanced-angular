import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InventoryService {

  private readonly _inventorySource = new Subject<number>();
  inventory$ = this._inventorySource.asObservable();

  constructor() { }

  addInventory(amount: number){
    this._inventorySource.next(amount);
  }
}
