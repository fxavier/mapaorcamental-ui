import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DispesasCadastroComponent } from './dispesas-cadastro.component';

describe('DispesasCadastroComponent', () => {
  let component: DispesasCadastroComponent;
  let fixture: ComponentFixture<DispesasCadastroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DispesasCadastroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DispesasCadastroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
