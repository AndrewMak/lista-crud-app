import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutoNovoComponent } from './produto-novo.component';

describe('ProdutoNovoComponent', () => {
  let component: ProdutoNovoComponent;
  let fixture: ComponentFixture<ProdutoNovoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProdutoNovoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdutoNovoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
