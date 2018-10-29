import { Component, OnInit } from '@angular/core';
import { Redit } from '../../models/redit.model';
import { ReditListService } from '../redit-list.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
  providers: [ReditListService]
})
export class DetailsComponent implements OnInit {
  redits: FirebaseListObservable<any[]>;
  reditId: string;
  reditToDisplay;
  displayComments: boolean = false;
  constructor(private route: ActivatedRoute, private location: Location, private ReditListService: ReditListService) {}

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.reditId = urlParameters['id'];
    });
    this.reditToDisplay = this.ReditListService.getReditbyId(this.reditId);
  }


  showComments() {
    if (this.displayComments) {
      this.displayComments = false;
    } else {
      this.displayComments = true;
    }
  }
}
