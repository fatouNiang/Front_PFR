import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupeTagComponent } from './groupe-tag.component';

describe('GroupeTagComponent', () => {
  let component: GroupeTagComponent;
  let fixture: ComponentFixture<GroupeTagComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GroupeTagComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupeTagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
