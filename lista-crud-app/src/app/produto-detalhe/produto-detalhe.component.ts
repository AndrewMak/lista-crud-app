import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/service/api.service';
import { Produto } from 'src/model/produto';
@Component({
  selector: 'app-produto-detalhe',
  templateUrl: './produto-detalhe.component.html',
  styleUrls: ['./produto-detalhe.component.scss']
})
export class ProdutoDetalheComponent implements OnInit {
  produto: Produto = { _id: '', nome_produto: '', desc_produto: '', preco_produto: null, dt_atualizacao: null };
  isLoadingResults = true;
  constructor(private router: Router, private route: ActivatedRoute, private api: ApiService) { }


  ngOnInit() {
    this.getProduto(this.route.snapshot.params['id']);
  }

  getProduto(id) {
    this.api.getProduto(id)
      .subscribe(data => {
        this.produto = data;
        console.log(this.produto);
        this.isLoadingResults = false;
      });
  }

  deleteProduto(id) {
    this.isLoadingResults = true;
    this.api.deleteProduto(id)
      .subscribe(res => {
          this.isLoadingResults = false;
          this.router.navigate(['/produtos']);
        }, (err) => {
          console.log(err);
          this.isLoadingResults = false;
        }
      );
  }
}
