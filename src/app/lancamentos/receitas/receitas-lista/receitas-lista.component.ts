import { Component, OnInit } from '@angular/core';
import { Receita } from 'src/app/models/models';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-receitas-lista',
  templateUrl: './receitas-lista.component.html',
  styleUrls: ['./receitas-lista.component.scss']
})
export class ReceitasListaComponent {
  
  receitas: Receita[] = [
    { data: '12-07-2019', conta: '110231', categoria: 'Salario', valor: 200000, descricao: 'Salario Pago'},
    { data: '12-07-2019', conta: '110231', categoria: 'Salario', valor: 200000, descricao: 'Salario Pago'},
    { data: '12-07-2019', conta: '110231', categoria: 'Salario', valor: 200000, descricao: 'Salario Pago'},
    { data: '12-07-2019', conta: '110231', categoria: 'Salario', valor: 200000, descricao: 'Salario Pago'},
    { data: '12-07-2019', conta: '110231', categoria: 'Salario', valor: 200000, descricao: 'Salario Pago'},
    { data: '12-07-2019', conta: '110231', categoria: 'Salario', valor: 200000, descricao: 'Salario Pago'},
    { data: '12-07-2019', conta: '110231', categoria: 'Salario', valor: 200000, descricao: 'Salario Pago'},
    { data: '12-07-2019', conta: '110231', categoria: 'Salario', valor: 200000, descricao: 'Salario Pago'},
    { data: '12-07-2019', conta: '110231', categoria: 'Salario', valor: 200000, descricao: 'Salario Pago'}
  ];
  displayedColumns: string[] = ['data', 'conta', 'categoria', 'valor', 'descricao'];
  dataSource: any;

  constructor() {
    this.dataSource = new MatTableDataSource<Receita>(this.receitas);
   }

  
  

}
