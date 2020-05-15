import { Component, OnInit } from '@angular/core';
import {faRocket} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-email-sent',
  templateUrl: './email-sent.component.html',
  styleUrls: ['./email-sent.component.css']
})
export class EmailSentComponent implements OnInit {
  rocket = faRocket;
  constructor() { }

  ngOnInit(): void {
  }

}
