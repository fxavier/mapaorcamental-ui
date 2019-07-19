import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DispesasListaComponent } from './dispesas-lista.component';

describe('DispesasListaComponent', () => {
  let component: DispesasListaComponent;
  let fixture: ComponentFixture<DispesasListaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DispesasListaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DispesasListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
