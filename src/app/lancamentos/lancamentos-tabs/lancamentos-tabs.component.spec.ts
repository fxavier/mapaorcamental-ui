import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LancamentosTabsComponent } from './lancamentos-tabs.component';

describe('LancamentosTabsComponent', () => {
  let component: LancamentosTabsComponent;
  let fixture: ComponentFixture<LancamentosTabsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LancamentosTabsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LancamentosTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
