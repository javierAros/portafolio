import { Injectable } from '@angular/core';
import { Http }  from "@angular/http";

@Injectable()
export class ProductosService {

  productos:any[] = [];
  cargando:boolean = true;

  constructor( public http:Http) {
    this.cargar_productos();
  }

  public cargar_productos(){

    this.http.get('https://portafolio-62c4b.firebaseio.com/productos_idx.json')
      .subscribe( res =>{
        console.log(res.json() );
        this.cargando = false;
        this.productos = res.json();
      })

  }


}
