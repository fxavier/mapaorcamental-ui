import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceitasCadastroComponent } from './receitas-cadastro.component';

describe('ReceitasCadastroComponent', () => {
  let component: ReceitasCadastroComponent;
  let fixture: ComponentFixture<ReceitasCadastroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReceitasCadastroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReceitasCadastroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
