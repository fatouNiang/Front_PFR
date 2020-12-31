import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-referentiel',
  templateUrl: './list-referentiel.component.html',
  styleUrls: ['./list-referentiel.component.css']
})
export class ListReferentielComponent implements OnInit {

  tabRef = [1,2,3,4,5,6,7,8];
  constructor() { }

  ngOnInit(): void {
  }

}
