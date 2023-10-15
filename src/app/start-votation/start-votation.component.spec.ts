import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StartVotationComponent } from './start-votation.component';

describe('StartVotationComponent', () => {
  let component: StartVotationComponent;
  let fixture: ComponentFixture<StartVotationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StartVotationComponent]
    });
    fixture = TestBed.createComponent(StartVotationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
