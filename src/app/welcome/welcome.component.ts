import { Component, OnInit, Input } from '@angular/core';
import { Redit } from '../../models/redit.model';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  @Input() masterRedit: Redit;


  constructor() { }

  ngOnInit() {
  }

}
