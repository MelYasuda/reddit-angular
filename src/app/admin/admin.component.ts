import { Component, OnInit } from '@angular/core';
import { Redit } from '../../models/redit.model';
import { ReditListService } from '../redit-list.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [ReditListService]
})
export class AdminComponent implements OnInit {

  constructor(private router: Router, private ReditListService: ReditListService) {}

  ngOnInit() {
  }

  submitForm(title: string, description: string) {
    let newRedit: Redit = new Redit(title, description, [""], [""], 0);
    this.ReditListService.addRedit(newRedit);
    console.log(newRedit);
  }
}



