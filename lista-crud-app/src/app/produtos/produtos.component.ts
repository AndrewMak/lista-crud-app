import { Component, OnInit } from '@angular/core';
import { Produto } from 'src/model/produto';
import { ApiService } from 'src/service/api.service';


const ELEMENT_DATA: Produto[] = [
  {id: 1, nome_produto: 'Hydrogen',preco_produto: 1.0079, desc_produto: 'H', dt_atualizacao: new Date()},
  {id: 2, nome_produto: 'Helium', preco_produto: 4.0026, desc_produto: 'He', dt_atualizacao: new Date()},
  {id: 3, nome_produto: 'Lithium', preco_produto: 6.941, desc_produto: 'Li', dt_atualizacao: new Date()},
  {id: 4, nome_produto: 'Beryllium', preco_produto: 9.0122, desc_produto: 'Be', dt_atualizacao: new Date()},
  {id: 5, nome_produto: 'Boron', preco_produto: 10.811, desc_produto: 'B', dt_atualizacao: new Date()},
  {id: 6, nome_produto: 'Carbon', preco_produto: 12.0107, desc_produto: 'C', dt_atualizacao: new Date()},
  {id: 7, nome_produto: 'Nitrogen', preco_produto: 14.0067, desc_produto: 'N', dt_atualizacao: new Date()},
  {id: 8, nome_produto: 'Oxygen', preco_produto: 15.9994, desc_produto: 'O', dt_atualizacao: new Date()},
  {id: 9, nome_produto: 'Fluorine', preco_produto: 18.9984, desc_produto: 'F', dt_atualizacao: new Date()},
  {id: 10, nome_produto: 'Neon', preco_produto: 20.1797, desc_produto: 'Ne', dt_atualizacao: new Date()}
];
@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.scss']
})
export class ProdutosComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource: Produto[];
  isLoadingResults = true;
  constructor(private _api :ApiService) { }

  ngOnInit() {
    this._api.getProdutos()
    .subscribe(res => {
      this.dataSource = res;
      console.log(this.dataSource);
      this.isLoadingResults = false;
    }, err => {
      console.log(err);
      this.isLoadingResults = false;
    });
  }

}
