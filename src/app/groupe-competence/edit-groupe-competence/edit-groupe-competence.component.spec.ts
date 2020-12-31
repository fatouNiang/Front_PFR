import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditGroupeCompetenceComponent } from './edit-groupe-competence.component';

describe('EditGroupeCompetenceComponent', () => {
  let component: EditGroupeCompetenceComponent;
  let fixture: ComponentFixture<EditGroupeCompetenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditGroupeCompetenceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditGroupeCompetenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
