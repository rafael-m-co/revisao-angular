import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; //precisa importar a rota e enviar para o construtor

@Component({
  selector: 'app-product-crud',
  templateUrl: './product-crud.component.html',
  styleUrls: ['./product-crud.component.scss'],
})
export class ProductCrudComponent implements OnInit {
  constructor(private router: Router) {} //apos construir a rota pode ser adicionado o caminho no metodo criado

  ngOnInit(): void {}

  navigateToProductCreate(): void {
    this.router.navigate(['/products/create']); //caminho agora pode ser chamado pelo metodo
  }
}
