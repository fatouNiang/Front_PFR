import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-groupe-competence',
  templateUrl: './list-groupe-competence.component.html',
  styleUrls: ['./list-groupe-competence.component.css']
})
export class ListGroupeCompetenceComponent implements OnInit {

  tabGrpCompetence=[1,2,3,4,5,6,7,8]
  constructor() { }

  ngOnInit(): void {
  }

}
