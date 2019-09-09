import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroTarefasPage } from './cadastro-tarefas.page';

describe('CadastroTarefasPage', () => {
  let component: CadastroTarefasPage;
  let fixture: ComponentFixture<CadastroTarefasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastroTarefasPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroTarefasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
