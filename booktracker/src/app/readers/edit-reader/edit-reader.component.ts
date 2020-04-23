import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BadgeService } from 'src/app/core/badge.service';
import { DataService } from 'src/app/core/data.service';
import { Reader } from 'src/app/models/reader';


@Component({
  selector: 'app-edit-reader',
  templateUrl: './edit-reader.component.html',
  styles: [],
  providers: [BadgeService]
})
export class EditReaderComponent implements OnInit {

  selectedReader: Reader;
  currentBadge: string;

  constructor(private route: ActivatedRoute,
              private dataService: DataService,
              private badgeService: BadgeService) { }

  ngOnInit() {
    const readerID: number = parseInt(this.route.snapshot.params.id, 10);
    this.selectedReader = this.dataService.getReaderById(readerID);
    this.currentBadge = this.badgeService.getReaderBadge(this.selectedReader.totalMinutesRead);
  }

  saveChanges() {
    console.warn('Save reader not yet implemented.');
  }

  makeReaderOfTheMonth(){
    this.dataService.setReaderOfTheMonth(this.selectedReader);
  }
}
