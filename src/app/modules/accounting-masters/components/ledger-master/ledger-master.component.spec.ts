import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LedgerMasterComponent } from './ledger-master.component';

describe('LedgerMasterComponent', () => {
  let component: LedgerMasterComponent;
  let fixture: ComponentFixture<LedgerMasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LedgerMasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LedgerMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
