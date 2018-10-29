import { Component, OnInit } from '@angular/core';
import { Redit } from '../../models/redit.model';
import { ReditListService } from '../redit-list.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
  providers: [ReditListService]
})
export class DetailsComponent implements OnInit {
  reditId: number;
  reditToDisplay: Redit;
  displayComments: boolean = false;
  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private ReditListService: ReditListService
  ) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.reditId = parseInt(urlParameters['id']);
    });
    this.reditToDisplay = this.ReditListService.getReditbyId(this.reditId);
  }
  showComments() {
    if (this.displayComments) {
      this.displayComments = false;
    } else {
      this.displayComments = true;
  }

  // goToDetailPage(clickedRedit: Redit) {
  //   this.router.navigate(['redits', clickedRedit.id])
  // }
}
