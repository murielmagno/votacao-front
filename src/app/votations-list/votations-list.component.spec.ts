import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VotationsListComponent } from './votations-list.component';

describe('VotationsListComponent', () => {
  let component: VotationsListComponent;
  let fixture: ComponentFixture<VotationsListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VotationsListComponent]
    });
    fixture = TestBed.createComponent(VotationsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
