import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { ApiService } from 'src/service/api.service';
@Component({
  selector: 'app-produto-novo',
  templateUrl: './produto-novo.component.html',
  styleUrls: ['./produto-novo.component.scss']
})

export class ProdutoNovoComponent implements OnInit {
  productForm: FormGroup;
  prod_name: String = '';
  prod_desc: String = '';
  prod_price: number = null;
  updated_at: Date = null;
  isLoadingResults = false;
  constructor(private router: Router, private api: ApiService, private formBuilder: FormBuilder) { }

  ngOnInit() {
     this.productForm = this.formBuilder.group({
    'nome_produto' : [null, Validators.required],
    'desc_produto' : [null, Validators.required],
    'preco_produto' : [null, Validators.required]
  });
  }

  addProduto(form: NgForm) {
    this.isLoadingResults = true;
    this.api.addProduto(form)
      .subscribe(res => {
          const id = res['_id'];
          this.isLoadingResults = false;
          this.router.navigate(['/produto-detalhe', id]);
        }, (err) => {
          console.log(err);
          this.isLoadingResults = false;
        });
  }
}
