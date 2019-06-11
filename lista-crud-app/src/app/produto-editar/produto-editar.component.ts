import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { ApiService } from 'src/service/api.service';
@Component({
  selector: 'app-produto-editar',
  templateUrl: './produto-editar.component.html',
  styleUrls: ['./produto-editar.component.scss']
})
export class ProdutoEditarComponent implements OnInit {
  _id: String = '';
  productForm: FormGroup;
  nome_produto: String = '';
  desc_produto: String = '';
  preco_produto: number = null;
  isLoadingResults = false;
  constructor(private router: Router, private route: ActivatedRoute, private api: ApiService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.getProduto(this.route.snapshot.params['id']);
    this.productForm = this.formBuilder.group({
   'nome_produto' : [null, Validators.required],
   'desc_produto' : [null, Validators.required],
   'preco_produto' : [null, Validators.required]
 });
 }

 getProduto(id) {
  this.api.getProduto(id).subscribe(data => {
    this._id = data._id;
    this.productForm.setValue({
      nome_produto: data.nome_produto,
      desc_produto: data.desc_produto,
      preco_produto: data.preco_produto
    });
  });
}

updateProduto(form: NgForm) {
  this.isLoadingResults = true;
  this.api.updateProduto(this._id, form)
    .subscribe(res => {
        this.isLoadingResults = false;
        this.router.navigate(['/produto-detalhe/' + this._id]);
      }, (err) => {
        console.log(err);
        this.isLoadingResults = false;
      }
    );
}
}
