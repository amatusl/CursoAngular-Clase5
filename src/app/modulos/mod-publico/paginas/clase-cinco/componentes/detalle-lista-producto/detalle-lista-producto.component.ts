import { CarroCompra, CarroCompraProducto } from './../../../../modelos/carro-compra.interface';
import { CarroService } from './../../../../../../servicios/carro/carro.service';
import { Producto } from './../../../../modelos/producto.interface';
import { Component, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-detalle-lista-producto',
  templateUrl: './detalle-lista-producto.component.html',
  styleUrls: ['./detalle-lista-producto.component.css']
})
export class DetalleListaProductoComponent implements OnInit {

  @Input() producto!: Producto;

  existeProducto: Boolean=false;

  carroCompra!: CarroCompra;
  carroCompraSubcription$!: Subscription;

  constructor(
    private carroService: CarroService
  ) { }

  ngOnInit(): void {
    this.carroCompra = this.carroService.carro;
    this.carroCompraSubcription$ = this.carroService.carroCompra$.subscribe(carro => {
      console.log('oyente.detalle-lista-producto.component', carro);
      this.carroCompra = carro;
    });
    this.verificarSiExisteProducto()
  }

  ngOnDestroy() {
    this.carroCompraSubcription$.unsubscribe();
  }

  agregarAlCarro() {
    this.carroService.agregarProducto(this.producto);
  }

  quitarUnAUnidadDelCarro() {
    console.log('tarea');
    this.carroService.quitarUnaUnidadProducto(this.producto);
  }

  quitarLineaDelCarro() {
    console.log('tarea quita linea');
    this.carroService.quitarProducto(this.producto);
  }

  verificarSiExisteProducto() {
    this.existeProducto= false;
    this.carroCompra.productos = this.carroCompra.productos.map(productoCarro => {
      if (productoCarro.producto.id === this.producto.id) {
        this.existeProducto = true;
      }
      return productoCarro;
    });
  }
}
