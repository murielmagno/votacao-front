import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VotationDetailComponent } from './votation-detail.component';

describe('VotationDetailComponent', () => {
  let component: VotationDetailComponent;
  let fixture: ComponentFixture<VotationDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VotationDetailComponent]
    });
    fixture = TestBed.createComponent(VotationDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
