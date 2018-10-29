import { Component, OnInit } from '@angular/core';
import { Redit } from '../../models/redit.model';
import { ReditListService } from  '../redit-list.service';
import { Router } from '@angular/router';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css'],
  providers: [ReditListService]
})
export class WelcomeComponent implements OnInit {
  redits: FirebaseListObservable<any[]>;
  // redits: Redit[];
  constructor(private router: Router, private ReditListService: ReditListService) {}

  ngOnInit() {
    // this.redits = this.ReditListService.getReditList();
  }

  // goToDetailPage(clickedRedit: Redit) {
  //   this.router.navigate(['redits', clickedRedit.id])
  // }
}
